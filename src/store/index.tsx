import {
  action,
  autorun,
  computed,
  makeObservable,
  observable,
  set,
  toJS,
} from "mobx";
import faker from "faker";
import toast from "react-hot-toast";

interface Contact {
  name: string;
  number: string;
  id: string;
  photo: string;
}

const generatePlaceholderData = (count: number): Contact[] => {
  const data: Contact[] = [];

  for (let i = 0; i < count; i++) {
    let name = faker.name.findName();
    data.push({
      name,
      number: faker.phone.phoneNumber("02# ### ####"),
      photo: `https://ui-avatars.com/api/?name=${name}&length=1&background=random&size=262`,
      id: `${i}`,
    });
  }

  return data;
};

const saveStore = (_this: any) => {
  const storedJson = localStorage.getItem("phonebookStore");
  if (storedJson) {
    set(_this, JSON.parse(storedJson));
  }

  autorun(() => {
    const value = toJS(_this);
    localStorage.setItem("phonebookStore", JSON.stringify(value));
  });
};

class Store {
  public contacts;

  constructor() {
    makeObservable(this, {
      contacts: observable,
      addContact: action,
      removeContact: action,
      updateContact: action,
      contactCount: computed,
    });

    this.contacts = generatePlaceholderData(4);
    saveStore(this);
  }

  addContact = ({ name, number }: { name: string; number: string }) => {
    this.contacts.push({
      name,
      number,
      photo: `https://ui-avatars.com/api/?name=${name}&length=1&background=random&size=262`,
      id: `${this.contacts.length + 1}`,
    });
    toast.success("Contact added");
  };

  removeContact = (id: string) => {
    this.contacts = this.contacts.filter((e) => e.id !== id);
    toast.success("Contact deleted");
  };

  findContact = (id: string) => {
    return this.contacts.find((e) => e.id === id);
  };

  updateContact = (id: string, payload: Contact) => {
    // Find index
    let index = this.contacts.findIndex((e) => e.id === id);
    this.contacts[index] = payload;
    toast.success("Contact updated");
  };

  get contactCount() {
    return this.contacts.length;
  }
}

export default new Store();

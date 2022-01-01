import { action, computed, makeObservable, observable } from "mobx";
import faker from "faker";

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

class Store {
  contacts: Contact[] = generatePlaceholderData(23);

  constructor() {
    makeObservable(this, {
      contacts: observable,
      addContact: action,
      removeContact: action,
      contactCount: computed,
    });
  }

  addContact = (contact: Contact) => {
    this.contacts.push(contact);
  };

  removeContact = (id: string) => {
    this.contacts = this.contacts.filter((e) => e.id !== id);
  };

  findContact = (id: string) => {
    return this.contacts.find((e) => e.id === id);
  };

  updateContact = (id: string, payload: Contact) => {
    // Find index
    let index = this.contacts.findIndex((e) => e.id === id);

    this.contacts[index] = payload;
  };

  get contactCount() {
    return this.contacts.length;
  }

  get contactItems() {
    return this.contacts;
  }
}

export default new Store();

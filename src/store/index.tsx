import { action, computed, makeObservable, observable } from "mobx";
import faker from "faker";

interface Contact {
  name: string;
  number: string;
  id: string;
}

const generatePlaceholderData = (count: number): Contact[] => {
  const data: Contact[] = [];

  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.name.findName(),
      number: faker.phone.phoneNumber("02# ### ####"),
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

  get contactCount() {
    return this.contacts.length;
  }

  get contactItems() {
    return this.contacts;
  }
}

export default new Store();

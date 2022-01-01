import { action, computed, makeObservable, observable } from "mobx";

interface Contact {
  name: string;
  number: string;
  id: string;
}

class Store {
  contacts: Contact[] = [
    {
      name: "Andrew Glago",
      number: "32409174342",
      id: "234",
    },
    {
      name: "Joy Ndukwe",
      number: "32409174342",
      id: "234",
    },
    {
      name: "Lily Dov",
      number: "32409174342",
      id: "234",
    },
  ];

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

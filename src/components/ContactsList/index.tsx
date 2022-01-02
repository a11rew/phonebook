import { observer } from "mobx-react";
import store from "../../store";
import ContactCard from "./ContactCard";

interface Props {}

const ContactsList = (props: Props) => {
  return (
    <div className="relative px-4  ">
      <table className="w-full border-separate">
        <thead className="sticky top-16 z-10 bg-white border-b">
          <tr>
            <th className="w-1/2 text-left font-normal py-3 border-b px-4">
              Name
            </th>
            <th className="w-1/2 text-left font-normal py-3 border-b px-4">
              Phone Number
            </th>
          </tr>
        </thead>
        <div className="my-2 mt-4">
          <p className="uppercase text-xs font-medium opacity-[0.56] px-4">
            Contacts ({store.contactCount})
          </p>
        </div>
        <tbody>
          {store.filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              photo={contact.photo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(ContactsList);

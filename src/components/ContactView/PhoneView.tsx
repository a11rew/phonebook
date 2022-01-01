import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { useParams } from "react-router-dom";
import store from "../../store";

interface Props {}

const PhoneView = ({}: Props) => {
  const params = useParams();
  const contact = store.findContact(params.id!);

  return (
    <div className="border p-4 flex flex-col gap-4 max-w-[520px] rounded-xl">
      <h2 className="font-medium">Contact Details</h2>
      <div className="flex gap-4 items-center">
        <MdOutlinePhone className="opacity-[0.36]" size={24} />
        <a href={`tel:${contact?.number}`} className="text-blue-500">
          {contact?.number}
        </a>
      </div>
    </div>
  );
};

export default PhoneView;

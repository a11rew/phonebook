import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";

interface Props {
  name: string;
  number: string;
}

const ContactCard = ({ name, number }: Props) => {
  return (
    <tr role="button" className="hover:bg-[#f5f5f5] group relative">
      <td className="flex items-center gap-5">
        <img
          className="w-9 h-9 rounded-full"
          src={`https://ui-avatars.com/api/?name=${name}&length=1&background=random`}
        />
        <span className="py-4">{name}</span>
      </td>
      <td>{number}</td>

      <div className="group-hover:visible invisible absolute top-0 right-4 h-full gap-3  flex items-center">
        <button className="h-full">
          <MdOutlineModeEditOutline
            className="text-[#00000051] hover:text-black"
            size={24}
          />
        </button>
        <button>
          <MdDelete className="text-[#00000051] hover:text-black" size={24} />
        </button>
      </div>
    </tr>
  );
};

export default ContactCard;

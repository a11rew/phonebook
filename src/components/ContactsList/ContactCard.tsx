import { useNavigate } from "react-router-dom";
import store from "../../store";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";

interface Props {
  name: string;
  number: string;
  id: string;
  photo: string;
}

const ContactCard = ({ name, number, id, photo }: Props) => {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => {
        navigate(`/contact/${id}`);
      }}
      role="button"
      className="hover:bg-[#f5f5f5] group relative"
    >
      <td className="flex items-center gap-5 px-4">
        <img className="w-9 h-9 rounded-full" src={photo} />
        <span className="py-4">{name}</span>
      </td>
      <td className="px-4">{number}</td>

      <div className="group-hover:visible invisible absolute top-0 right-4 h-full gap-3  flex items-center">
        <button
          className="h-full"
          onClick={(e) => {
            // Prevent parent handlers from firing
            e.stopPropagation();
            navigate(`/contact/${id}/edit`);
          }}
        >
          <MdOutlineModeEditOutline
            className="text-[#00000051] hover:text-black"
            size={24}
          />
        </button>
        <button
          onClick={(e) => {
            // Prevent parent handlers from firing
            e.stopPropagation();
            if (confirm("Delete contact?")) {
              store.removeContact(id);
            }
          }}
          className="z-10"
        >
          <MdDelete className="text-[#00000051] hover:text-black" size={24} />
        </button>
      </div>
    </tr>
  );
};

export default ContactCard;

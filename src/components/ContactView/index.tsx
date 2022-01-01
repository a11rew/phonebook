import { IoMdArrowBack } from "react-icons/io";
import { Outlet, useMatch, useNavigate, useParams } from "react-router-dom";
import store from "../../store";

interface Props {}

const ContactView = (props: Props) => {
  const params = useParams();
  const navigate = useNavigate();
  const contact = store.findContact(params.id!);
  const match = useMatch("contact/:id");

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <div className="flex gap-8">
          <div className="pt-2">
            <button onClick={() => navigate(-1)}>
              <IoMdArrowBack size={28} />
            </button>
          </div>
          <img className="rounded-full w-44 h-44" src={contact?.photo} />
          <div className="flex items-center ml-2">
            <h1 className="text-3xl">{contact?.name}</h1>
          </div>
        </div>
        {match && (
          <div className="flex justify-end items-end">
            <button
              onClick={() => navigate(`/contact/${params.id}/edit`)}
              className="h-10 bg-[#1a73e8] text-white px-8 rounded"
            >
              Edit
            </button>
          </div>
        )}
      </div>
      <hr className="my-8" />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ContactView;

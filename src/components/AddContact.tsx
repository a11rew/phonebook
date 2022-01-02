import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlinePhone, MdPersonOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import store from "../store";

interface Props {}

const AddContact = (props: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    store.addContact({ name, number });
    navigate("/");
  };

  return (
    <div className="p-8">
      <h1 className="mb-6 text-lg font-medium">Create Contact</h1>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex gap-8 flex-col sm:flex-row">
          <div className="flex gap-8">
            <div className="pt-2">
              <button onClick={() => navigate(-1)}>
                <IoMdArrowBack size={28} />
              </button>
            </div>
            <img
              className="rounded-full w-44 h-44"
              src={
                name
                  ? `https://ui-avatars.com/api/?name=${name[0]}&length=1&background=random&size=262`
                  : "https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
              }
            />
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div>
        <form
          className="max-w-[520px]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex gap-4 my-8 w-full items-center">
            <MdPersonOutline size={28} className="opacity-[0.56]" />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b w-full focus:outline-none leading-8"
              placeholder="Name"
            />
          </div>

          <div className="flex gap-4 my-8 w-full items-center">
            <MdOutlinePhone size={28} className="opacity-[0.56]" />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border-b w-full focus:outline-none leading-8"
              placeholder="Phone number"
            />
          </div>

          <div className="">
            <button
              type="submit"
              disabled={name === "" || number === ""}
              className="h-10 bg-[#1a73e8] text-white px-8 rounded disabled:grayscale"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;

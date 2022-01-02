import { useNavigate } from "react-router-dom";
import AddIcon from "../assets/add.png";
import Logo from "../assets/logo.png";
import SearchBox from "./SearchBox";

interface Props {}

const Header = (props: Props) => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="flex flex-col sm:flex-row sm:items-center pr-4 justify-between max-w-[1440px] m-auto">
        <div className="flex px-8 py-3 items-center gap-3">
          <img src={Logo} className="w-10 h-10" />
          <span className="text-[#5f6368] text-xl">Phonebook</span>
        </div>
        <SearchBox />
        <button
          onClick={() => navigate("/add")}
          className="px-2 sm:pr-4 py-1 border rounded-full items-center hidden md:flex gap-2 shadow hover:shadow-md"
        >
          <img src={AddIcon} className="w-9 h-9 rounded-full" />
          <span className="font-medium text-sm lg:text-base hidden sm:block">
            Create contact
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;

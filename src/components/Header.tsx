import Logo from "../assets/logo.png";
import SearchBox from "./SearchBox";
interface Props {}

const Header = (props: Props) => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex px-6 py-3 items-center gap-2">
          <img src={Logo} className="w-10 h-10" />
          <span className="text-[#5f6368] text-xl">Phonebook</span>
        </div>
        <div className="">
          <SearchBox />
        </div>
        <div className="px-6 h-full items-center">
          <img
            src={
              "https://ui-avatars.com/api/?length=1&background=e95179&color=fff"
            }
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

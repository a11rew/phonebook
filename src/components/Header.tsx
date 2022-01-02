import Logo from "../assets/logo.png";
import SearchBox from "./SearchBox";
interface Props {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between max-w-[1440px] m-auto">
        <div className="flex px-8 py-3 items-center gap-3">
          <img src={Logo} className="w-10 h-10" />
          <span className="text-[#5f6368] text-xl">Phonebook</span>
        </div>
        <SearchBox />
        <div className="px-6 h-full items-center hidden sm:block">
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

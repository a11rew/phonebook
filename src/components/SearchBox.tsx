import React from "react";
import { MdClose, MdOutlineSearch } from "react-icons/md";

interface Props {}

const SearchBox = (props: Props) => {
  return (
    <div className="px-8">
      <form className="bg-[#f1f3f4] flex items-center rounded-lg px-5 gap-5 relative">
        <MdOutlineSearch className="shrink-0" color="#5f6368" size={22} />
        <input
          className="bg-transparent py-2 text-lg focus:outline-none"
          placeholder="Search"
        />
        <MdClose
          className="shrink-0 absolute top-0 right-6 h-full"
          color="#5f6368"
          size={22}
        />
      </form>
    </div>
  );
};

export default SearchBox;

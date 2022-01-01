import React from "react";
import { MdClose, MdOutlineSearch } from "react-icons/md";

interface Props {}

const SearchBox = (props: Props) => {
  return (
    <form className="bg-[#f1f3f4] flex items-center rounded-lg px-5 gap-5">
      <MdOutlineSearch color="#5f6368" size={22} />
      <input
        className="bg-transparent py-2 text-lg focus:outline-none"
        placeholder="Search"
      />
      <MdClose color="#5f6368" size={22} />
    </form>
  );
};

export default SearchBox;

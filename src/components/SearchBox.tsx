import { observer } from "mobx-react";
import React, { useState } from "react";
import { MdClose, MdOutlineSearch } from "react-icons/md";
import store from "../store";

interface Props {}

const SearchBox = (props: Props) => {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="px-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#f1f3f4] focus-within:bg-white focus-within:shadow-md transition-all duration-500 ease-in-out flex items-center rounded-lg px-5 gap-5 relative"
      >
        <MdOutlineSearch className="shrink-0" color="#5f6368" size={22} />
        <input
          value={store.filterString}
          onChange={(e) => store.updateFilter(e.target.value)}
          className="bg-transparent py-2 text-lg focus:outline-none"
          placeholder="Search"
        />
        <button
          type="reset"
          disabled={store.filterString === ""}
          onClick={() => store.updateFilter("")}
        >
          <MdClose
            className={`shrink-0 absolute top-0 right-6 h-full ${
              store.filterString === "" && "hidden"
            }`}
            color="#5f6368"
            size={22}
          />
        </button>
      </form>
    </div>
  );
};

export default observer(SearchBox);

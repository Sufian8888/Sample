import React from "react";
import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  return (
    <div className="bg-white flex w-96 justify-between border py-[1px] border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-amber-600">
      <input
        type="text"
        placeholder="Woman Clothes"
        className=" w-full text-black pl-2 focus:outline-none focus:ring-0 focus:border-transparent"
      />
      <button className="bg-black text-white px-2 mr-1 py-2 rounded-[50%] cursor-pointer hover:bg-[#464545] ml-2">
        <FaSearch />
      </button>
    </div>
  );
};

export default Searchbar;

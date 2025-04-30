import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CategoriesDropdown = ({ items = [] }) => {
  return (
    <div className="absolute hidden group-hover:block w-64 max-h-80 overflow-y-auto bg-white text-black shadow-md mt-2 p-2 z-50 space-y-2 rounded">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex items-center justify-between gap-2 p-1 hover:bg-gray-100 rounded"
        >
          <div className="flex items-center gap-2">
            <span>{item.label}</span>
          </div>
          <MdOutlineKeyboardArrowRight className="text-gray-500" />
        </a>
      ))}
    </div>
  );
};

export default CategoriesDropdown;

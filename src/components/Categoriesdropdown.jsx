import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import image from "../assets/image.png";

const CategoriesDropdown = ({ items = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="absolute hidden group-hover:flex bg-white text-black shadow-md mt-1 z-50 rounded w-[640px] h-auto"
      onMouseLeave={() => setHoveredIndex(null)} // Entire wrapper handles mouse leave
    >
      <div className="w-1/2 max-h-80 overflow-y-auto p-2 space-y-2 border-r border-gray-200">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <span>{item.label}</span>
            <MdOutlineKeyboardArrowRight className="text-gray-500" />
          </div>
        ))}
      </div>

      <div className="w-1/2 max-h-80 overflow-y-auto p-2">
        {hoveredIndex !== null && (
          <div className="grid grid-cols-3 gap-2">
            {items[hoveredIndex].subItems?.map((subItem, idx) => (
              <a
                key={idx}
                href={subItem.href}
                className="flex flex-col items-center justify-center p-2 text-sm hover:bg-gray-100 rounded"
              >
                <img
                  src={image}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover mb-1"
                />
                <span className="text-center">{subItem.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesDropdown;

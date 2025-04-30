import React from "react";
import {
  FaShoppingCart,
  FaChevronDown,
  FaThumbsUp,
  FaChevronUp,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Searchbar from "./Searchbar";

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

const Navbar = () => {
  return (
    <div className="w-full bg-amber-500 text-white shadow-md px-4 py-2 font-medium flex items-center justify-between flex-wrap gap-2">
      {/* Logo */}
      <div className="font-bold text-xl">Temu</div>

      {/* Nav Links Left Section */}
      <div className="hidden md:flex items-center gap-2">
        <a href="#" className="flex items-center gap-1 nav-link">
          <FaThumbsUp /> Best Selling Items
        </a>
        <a href="#" className="flex items-center gap-1 nav-link">
          <BsFillBookmarkStarFill /> 5-Star Rated
        </a>
        <a href="#" className="nav-link">
          New In
        </a>

        {/* Categories Dropdown */}
        <div className="relative group">
          <button className="flex items-center justify-center gap-1 nav-link">
            Categories {/* Chevron Down (default) */}
            <FaChevronDown className="text-[10px] group-hover:hidden" />
            {/* Chevron Up (on hover) */}
            <FaChevronUp className="text-[10px] hidden group-hover:inline" />
          </button>
          <CategoriesDropdown
            items={[
              { label: "Electronics", href: "#" },
              { label: "Clothing", href: "#" },
              { label: "Home & Kitchen", href: "#" },
              { label: "Beauty & Personal Care", href: "#" },
              { label: "Sports & Outdoors", href: "#" },
              { label: "Automotive", href: "#" },
              { label: "Toys & Games", href: "#" },
              { label: "Books", href: "#" },
              { label: "Health & Wellness", href: "#" },
              { label: "Office Supplies", href: "#" },
              { label: "Pet Supplies", href: "#" },
              { label: "Groceries", href: "#" },
              { label: "Jewelry", href: "#" },
              { label: "Shoes", href: "#" },
              { label: "Baby Products", href: "#" },
            ]}
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <Searchbar className="nav-link w-full max-w-md" />
      </div>

      {/* Nav Links Right Section */}
      <div className="flex items-center gap-2">
        <a href="#" className="nav-link">
          Orders & Account
        </a>

        {/* Support Dropdown */}
        <div className="relative group">
          <button className="nav-link">Support</button>
          <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 p-2 w-40 z-50 space-y-2">
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="relative group">
          <button className="nav-link">Language</button>
          <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 p-2 w-40 z-50 space-y-2">
            <a href="#">English</a>
            <a href="#">Urdu</a>
          </div>
        </div>

        {/* Cart Icon */}
        <FaShoppingCart size={26} className="text-xl nav-link" />
      </div>
    </div>
  );
};

export default Navbar;

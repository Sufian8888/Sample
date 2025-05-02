import React from "react";
import {
  FaShoppingCart,
  FaChevronDown,
  FaThumbsUp,
  FaChevronUp,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Searchbar from "../components/Searchbar";
import CategoriesDropdown from "../components/Categoriesdropdown";

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-amber-500 text-white shadow-md px-4 py-2 font-medium flex items-center justify-between flex-wrap gap-2">
      <div className="font-bold text-xl">Temu</div>

      <div className="hidden md:flex items-center gap-2">
        <a href="" className="flex items-center gap-1 nav-link">
          <FaThumbsUp /> Best Selling Items
        </a>
        <a href="" className="flex items-center gap-1 nav-link">
          <BsFillBookmarkStarFill /> 5-Star Rated
        </a>
        <a href="" className="nav-link">
          New In
        </a>

        <div className="relative group">
          <button className="flex items-center justify-center gap-1 nav-link">
            Categories
            <FaChevronDown className="text-[10px] group-hover:hidden" />
            <FaChevronUp className="text-[10px] hidden group-hover:inline" />
          </button>
          <CategoriesDropdown
            items={[
              {
                label: "Clothing",
                href: "#",
                subItems: [
                  { label: "Men's Clothing", href: "#" },
                  { label: "Women's Clothing", href: "#" },
                  { label: "Kids' Clothing", href: "#" },
                  { label: "Traditional Wear", href: "#" },
                ],
              },
              {
                label: "Home & Kitchen",
                href: "",
                subItems: [
                  { label: "Cookware", href: "#" },
                  { label: "Home Decor", href: "#" },
                  { label: "Storage & Organization", href: "#" },
                  { label: "Furniture", href: "#" },
                ],
              },
              {
                label: "Beauty & Personal Care",
                href: "#",
                subItems: [
                  { label: "Makeup", href: "#" },
                  { label: "Skincare", href: "#" },
                  { label: "Hair Care", href: "#" },
                  { label: "Fragrances", href: "#" },
                ],
              },
              {
                label: "Sports & Outdoors",
                href: "#",
                subItems: [
                  { label: "Fitness Equipment", href: "#" },
                  { label: "Camping Gear", href: "#" },
                  { label: "Outdoor Clothing", href: "#" },
                  { label: "Bikes & Accessories", href: "#" },
                ],
              },
              {
                label: "Automotive",
                href: "#",
                subItems: [
                  { label: "Car Electronics", href: "#" },
                  { label: "Car Accessories", href: "#" },
                  { label: "Tools & Equipment", href: "#" },
                  { label: "Motorcycle Gear", href: "#" },
                ],
              },
              {
                label: "Toys & Games",
                href: "#",
                subItems: [
                  { label: "Action Figures", href: "#" },
                  { label: "Puzzles & Board Games", href: "#" },
                  { label: "Outdoor Toys", href: "#" },
                  { label: "Educational Toys", href: "#" },
                ],
              },
              {
                label: "Books",
                href: "#",
                subItems: [
                  { label: "Fiction", href: "#" },
                  { label: "Non-Fiction", href: "#" },
                  { label: "Children's Books", href: "#" },
                  { label: "Academic & Textbooks", href: "#" },
                ],
              },
              {
                label: "Health & Wellness",
                href: "#",
                subItems: [
                  { label: "Supplements", href: "#" },
                  { label: "Fitness Trackers", href: "#" },
                  { label: "Medical Devices", href: "#" },
                  { label: "Personal Care Equipment", href: "#" },
                ],
              },
              {
                label: "Office Supplies",
                href: "#",
                subItems: [
                  { label: "Writing Tools", href: "#" },
                  { label: "Notebooks & Diaries", href: "#" },
                  { label: "Office Furniture", href: "#" },
                  { label: "Organizers", href: "#" },
                ],
              },
              {
                label: "Pet Supplies",
                href: "#",
                subItems: [
                  { label: "Dog Supplies", href: "#" },
                  { label: "Cat Supplies", href: "#" },
                  { label: "Aquarium Accessories", href: "#" },
                  { label: "Pet Food", href: "#" },
                ],
              },
              {
                label: "Groceries",
                href: "#",
                subItems: [
                  { label: "Snacks & Beverages", href: "#" },
                  { label: "Staples & Essentials", href: "#" },
                  { label: "Dairy & Eggs", href: "#" },
                  { label: "Packaged Foods", href: "#" },
                ],
              },
              {
                label: "Jewelry",
                href: "#",
                subItems: [
                  { label: "Necklaces", href: "#" },
                  { label: "Rings", href: "#" },
                  { label: "Bracelets", href: "#" },
                  { label: "Earrings", href: "#" },
                ],
              },
              {
                label: "Shoes",
                href: "#",
                subItems: [
                  { label: "Men's Shoes", href: "#" },
                  { label: "Women's Shoes", href: "#" },
                  { label: "Kids' Shoes", href: "#" },
                  { label: "Sports Shoes", href: "#" },
                ],
              },
              {
                label: "Baby Products",
                href: "#",
                subItems: [
                  { label: "Diapers & Wipes", href: "#" },
                  { label: "Feeding", href: "#" },
                  { label: "Toys & Learning", href: "#" },
                  { label: "Nursery", href: "#" },
                ],
              },
            ]}
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <Searchbar className="nav-link w-full max-w-md" />
      </div>

      <div className="flex items-center gap-2">
        <a href="#" className="nav-link">
          Orders & Account
        </a>

        <div className="relative group">
          <button className="nav-link">Support</button>
          <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 p-2 w-40 z-50 space-y-2">
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <div className="relative group">
          <button className="nav-link">Language</button>
          <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 p-2 w-40 z-50 space-y-2">
            <a href="#">English</a>
            <a href="#">Urdu</a>
          </div>
        </div>

        <FaShoppingCart size={26} className="text-xl nav-link" />
      </div>
    </div>
  );
};

export default Navbar;

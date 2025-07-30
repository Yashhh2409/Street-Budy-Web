"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faCartShopping,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { id: "home", icon: faHome },
  // { id: "wishlist", icon: faHeart },
  // { id: "cart", icon: faCartShopping },
  { id: "orders", icon: faBagShopping },
  // { id: "menu", icon: faBars },
];
const MobileMenuBar = ({ active, onScreenChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-45 bg-white shadow-md border-t border-gray-200">
      <div className="flex justify-around px-6 py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              typeof onScreenChange === "function" && onScreenChange(item.id)
            }
            className={`flex flex-col items-center text-xs p-2 rounded-lg transition-colors duration-200 ${
              active === item.id
                ? "text-orange-500 bg-orange-100"
                : "text-gray-400"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} className="text-lg mb-1" />
            <span className="hidden sm:block capitalize">{item.id}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenuBar;

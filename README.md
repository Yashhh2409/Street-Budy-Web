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
import { useRouter } from "next/navigation";

const menuItems = [
  { id: "home", icon: faHome, path: "/" },
  { id: "wishlist", icon: faHeart, path: "/wishlist" },
  { id: "cart", icon: faCartShopping, path: "/cart" },
  { id: "orders", icon: faBagShopping, path: "/orders" },
  { id: "menu", icon: faBars, path: "/menu" },
];
const MobileMenuBar = ({ active, onScreenChange }) => {

  const router = useRouter()
  return (
    <div className="fixed bottom-0 left-0 right-0 z-45 bg-red-500 shadow-md border-t rounded-t-xl border-gray-200">
      <div className="flex justify-around px-6 py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              { router.push(item.path);   typeof onScreenChange === "function" && onScreenChange(item.id)}
            }
            className={`flex flex-col items-center text-xs p-2 rounded-lg transition-colors duration-200 ${
              active === item.id
                ? "text-orange-500 bg-orange-100"
                : "text-gray-400"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} className="text-lg mb-1" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenuBar;

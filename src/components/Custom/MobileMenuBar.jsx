"use client";

import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faCartShopping,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";

const menuItems = [
  { id: "home", icon: faHome, path: "/", type: "route" },
  { id: "wishlist", icon: faHeart, path: "/wishlist", type: "route" },
  { id: "cart", icon: faCartShopping, path: "/cart", type: "route" },
  { id: "orders", icon: faBagShopping, type: "screen" }, // no path
  { id: "menu", icon: faBars, type: "screen" }, // no path
];
const MobileMenuBar = ({ active, onScreenChange }) => {

  const { cartCount } = useContext(CartContext);

  const [activeTab, setActiveTab] = useState("home")

  console.log("Current active tab ---> ", activeTab);
  

  const router = useRouter();
  return (
    <div className="fixed -bottom-0.5 left-0 right-0 z-45 shadow-md border-gray-200 h-14">
      <div className="absolute bottom-0 w-full bg-white border-[0.5px] border-gray-200 h-16 flex items-center justify-around">
        {menuItems.map((item) => (
          <div>
            {item.id === "cart" ? (
              <div
                onClick={() => {
                  if (item.type === "route" && item.path) {
                    router.push(item.path);
                  } else if (
                    item.type === "screen" &&
                    typeof onScreenChange === "function"
                  ) {
                    onScreenChange(item.id);
                  };
                  setActiveTab(item.id);
                }}
                className="relative p-2 bg-white mb-14 h-[60px] w-[60px] rounded-full flex items-center justify-center border-[0.5px] border-gray-200 shadow-md"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`${activeTab === item.id ? "text-orange-400" : "text-gray-500"}text-xl cursor-pointer`}
                />
                <div className="absolute bg-orange-400 top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-[12px]">
                  {cartCount}
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  if (item.type === "route" && item.path) {
                    router.push(item.path);
                  } else if (
                    item.type === "screen" &&
                    typeof onScreenChange === "function"
                  ) {
                    onScreenChange(item.id);
                  };
                  setActiveTab(item.id);
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`${activeTab === item.id ? "text-orange-500" : "text-gray-500"} p-2 px-5 text-xl cursor-pointer`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenuBar;

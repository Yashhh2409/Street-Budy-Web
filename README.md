"use client";

import React, { useContext, useState } from "react";
import "@/lib/fontawesome";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCartShopping,
  faLock,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SignupModel from "./Custom/SignupModel";
import useBodyScrollLock from "./Custom/useBodyScrollLock";
import { AuthContext } from "@/context/AuthContext";
import MenuModal from "./Custom/MenuModal";
import { MyAppContext } from "@/context/MyAppContext";
import { CartContext } from "@/context/CartContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);

  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  console.log("User:", user);

  const SignupModelFun = () => {
    setSignupOpen((prev) => !prev);
  };

  const MenuModalToggle = () => {
    setModalOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    await fetch("/api/logout");
    window.location.reload(); // or redirect
  };

  // it locks body scroll when modal is open
  useBodyScrollLock(isSignupOpen);

  return (
    <>
      <div className="w-full p-5 flex items-center justify-around px-48">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-15">
            {/* logo  */}
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src="/assets/sb-logo.png"
                width={50}
                height={50}
                alt="logo"
                className="w-[30px]"
              />
              <p className="text-[25px] font-bold text-amber-600">StackFood</p>
            </Link>
            {/* menu  */}
            <div className="w-full flex items-center gap-4 text-[16px]">
              <ul>
                <li className="hover:text-orange-500 transition-colors duration-200">
                  <a href="/">Home</a>
                </li>
              </ul>
              <ul>
                <li className="hover:text-orange-500 transition-colors duration-200">
                  <a href="/categories">Categories</a>
                </li>
              </ul>
              <ul>
                <li className="hover:text-orange-500 transition-colors duration-200">
                  <a href="/cuisines">Cuisines</a>
                </li>
              </ul>
              <ul>
                <li className="hover:text-orange-500 transition-colors duration-200">
                  <a href="/restaurants">Restaurants</a>
                </li>
              </ul>
            </div>
          </div>
          <span className="text-sm">
            {user ? <h1>Welcome, {user.email}</h1> : <h1>Welcome, Guest</h1>}
          </span>
          {/* icons  */}
          <div className="flex items-center gap-x-4">
            <div className="cursor-pointer w-10 h-10 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-200">

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500 text-[20px] hover:text-orange-400 transition-colors"
              />
              </div>
            <div className="cursor-pointer w-10 h-10 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-200">

            <FontAwesomeIcon icon={faBell} className="text-gray-500 text-[20px] hover:text-orange-400 transition-colors" />
            </div>
            <Link
              href={"/cart"}
              className="relative cursor-pointer w-10 h-10 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-gray-500 text-[20px] hover:text-orange-400"
              />

              {cartCount > 0 && (
                <div className="absolute top-0.5 right-0 text-[12px] font-bold w-4 h-4 bg-orange-400 text-white p-2 flex items-center justify-center rounded-full">
                  {cartCount}
                </div>
              )}
            </Link>
            <div className="flex space-x-3 cursor-pointer bg-orange-400 tracking-wide text-white text-sm px-4 py-1 font-bold rounded-sm">
              {/* <FontAwesomeIcon
                icon={faLock}
                className="text-gray-500 text-xl"
              /> */}
              {user ? (
                <h1 onClick={handleLogout}>Logout</h1>
              ) : (
                <div onClick={SignupModelFun}>Sign in</div>
              )}
            </div>
            <span
              onClick={MenuModalToggle}
              className="cursor-pointer w-10 h-10 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray-500 text-[20px] hover:text-orange-400 transition-colors"
              />
            </span>
          </div>{" "}
        </div>
      </div>

      {isModalOpen && (
        <MenuModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          SignupModelFun={SignupModelFun}
          handleLogout={handleLogout}
        />
      )}

      {isSignupOpen && <SignupModel setIsOpen={setSignupOpen} />}
    </>
  );
};

export default Navbar;

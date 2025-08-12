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

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { cartCount } = useContext(MyAppContext);

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
      <div className="w-full bg-white p-5 flex items-center justify-around px-48">
        <div className="w-full bg-transparent flex items-center justify-between">
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
            {user ? <h1>{user.email}</h1> : <h1>Welcome Guest</h1>}
          </span>
          {/* icons  */}
          <div className="flex items-center gap-x-8">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500 text-xl"
            />
            <FontAwesomeIcon icon={faBell} className="text-gray-500 text-xl" />
            <Link
              href={"/cart"}
              className="relative cursor-pointer w-8 h-8 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-200 text-[16px]"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-gray-500 text-xl"
              />

              {cartCount > 0 && (
                <div className="absolute -top-1 right-0 text-[12px] font-bold w-4 h-4 bg-orange-400 text-white p-2 flex items-center justify-center rounded-full">
                  {cartCount}
                </div>
              )}
            </Link>
            <div className="flex space-x-3 cursor-pointer">
              <FontAwesomeIcon
                icon={faLock}
                className="text-gray-500 text-xl"
              />
              {user ? (
                <h1 onClick={handleLogout}>Logout</h1>
              ) : (
                <div onClick={SignupModelFun}>Sign in</div>
              )}
            </div>
            <span
              onClick={MenuModalToggle}
              className="cursor-pointer w-8 h-8 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray-500 text-[16px]"
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

"use client";

import { MyAppContext } from "@/context/MyAppContext";
import {
  faBell,
  faCaretDown,
  faLocationDot,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext, useState } from "react";
import SignupModel from "./Custom/SignupModel";

const MobileHeader = () => {
  const { showBar, setShowBar } = useContext(MyAppContext);
   const [isSignupOpen, setSignupOpen] = useState(false);
  
    const SignupModelFun = () => {
      setSignupOpen((prev) => !prev);
    };

  return (
    <>
      <div className={`fixed w-full z-40 ${showBar ? "mt-12" : ""}`}>
        <div className="relative w-full bg-[#FF7A33] flex justify-between items-center p-4 text-white pb-8">
          <div>
            <span className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="font-bold">Your Location</p>
            </span>
            <p className="text-[12px]">
              Q972+VPF,Dhaka,India <FontAwesomeIcon icon={faCaretDown} />
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-white text-black w-8 h-8 p-2 rounded-md flex items-center justify-center hover:text-amber-400">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div onClick={SignupModelFun} className="bg-white text-black w-8 h-8 p-2 rounded-md flex items-center justify-center hover:text-amber-400">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className="absolute w-[90%] text-orange-400 bg-white p-2 rounded-full -bottom-4 right-5 shadow-xl">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faSearch} />
              <p>Bhuk lagi hai kya !!</p>
            </div>
          </div>
        </div>
      </div>

       {isSignupOpen && <SignupModel setIsOpen={setSignupOpen} />}
    </>
  );
};

export default MobileHeader;

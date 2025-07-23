"use client";

import {
  faBell,
  faCaretDown,
  faLocationDot,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const MobileHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="fixed w-full z-40 mt-12">
        <div className="relative w-full bg-[#FF7A33] flex justify-between items-center px-2 py-5 text-white pb-8">
          <div>
            <span className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="font-bold">Your Location</p>
            </span>
            <p className="text-[12px]">
              Q972+VPF,Dhaka,India <FontAwesomeIcon icon={faCaretDown} />
            </p>
          </div>
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="bg-white text-black w-8 h-8 p-2 rounded-md flex items-center justify-center hover:text-amber-400"
          >
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="absolute w-[90%] text-orange-400 bg-white p-2 rounded-full -bottom-4 right-5 shadow-xl">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faSearch} />
              <p>Bhuk lagi hai kya !!</p>
            </div>
          </div>
        </div>

        {show && (
          <div className="absolute flex flex-col items-center justify-center border-t-2 border-violet-400 w-[150px] right-3 top-15 bg-white shadow-sm pt-3 rounded-md">
            <h1>Hovered Biroo!!</h1>
            <h1>Hovered Biroo!!</h1>
            <h1>Hovered Biroo!!</h1>

            <div className="absolute p-2 bg-white -top-2.5 right-1 rotate-45 border-t-2 border-l-2 border-violet-400"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileHeader;

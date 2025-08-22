"use client";

import { MyAppContext } from "@/context/MyAppContext";
import { faAngleDown, faLocationDot, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@/context/ThemeContext";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full md:px-48 border-b border-gray-200">
      <div className="flex gap-2 py-2 px-2 items-center">
        <div className="w-full">
          <div className="flex items-center gap-2">
            <span className="flex gap-2 items-center text-orange-400 font-semibold text-sm">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Your Location:</p>
            </span>
            <span className="flex gap-2 items-center text-sm">
              <p className="w-fit">Maharashtra, India</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        </div>

        <div className="w-full flex justify-end items-center gap-5">
          <div className="flex gap-6 items-center">
            <span className="flex gap-2 items-center">
              <Image
                src={"/assets/sb-logo.png"}
                width={25}
                height={25}
                alt="flag"
              />
              <p className="text-sm font-semibold">English</p>
            </span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>

          <div className="flex gap-6 items-center">
            <span className="flex gap-2 items-center">
              <Image
                src={"/assets/sb-logo.png"}
                width={25}
                height={25}
                alt="flag"
              />
              <p className="text-sm font-semibold">Join Us</p>
            </span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>

          <div
            onClick={toggleTheme}
            className="w-6 h-6 flex items-center justify-center rounded-full border-[1px] border-orange-400 cursor-pointer"
          >
            {theme === "light" ? (
              <FontAwesomeIcon icon={faSun} className="text-orange-400" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-orange-400" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

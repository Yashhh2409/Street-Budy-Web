import {
  faBell,
  faCaretDown,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MobileHeader = () => {
  return (
    <>
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
        <div className="bg-white text-black w-8 h-8 p-2 rounded-md flex items-center justify-center">
          <FontAwesomeIcon icon={faBell} />
        </div>

        <div className="absolute w-[90%] text-orange-400 bg-white p-2 rounded-full -bottom-4 right-5 shadow-xl">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faSearch}/>
                <p>Bhuk lagi hai kya !!</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;

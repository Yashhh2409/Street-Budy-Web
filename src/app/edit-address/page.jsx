"use client";

import AppDownloadBar from "@/components/Custom/AppDownloadBar";
import DesktopHeader from "@/components/DesktopHeader";
import Footer from "@/components/Footer";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  faBriefcase,
  faHome,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LabbledButtons = [
  {
    id: "1",
    icon: faHome,
    name: "Home",
  },
  {
    id: "2",
    icon: faBriefcase,
    name: "Office",
  },
  {
    id: "3",
    icon: faTableCellsLarge,
    name: "Others",
  },
];

const page = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div className={`block md:hidden`}>
        <AppDownloadBar />
      </div>

      <div className="w-full flex flex-col gap-2">
        {isMobile ? (
          <div className="flex items-center gap-4 px-4 w-full bg-[#F6E9E1]">
            <Link href={"/"}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <p className="w-full text-center py-3 font-bold">Add New Address</p>
          </div>
        ) : (
          <p className="text-center bg-[#F6E9E1] py-3 font-bold">
            Add New Address
          </p>
        )}

        <div className="flex justify-between gap-2 md:px-48 my-8">
          <div className="w-3/5 bg-white rounded-md p-4 shadow-2xl">
            <div className="w-full h-[300px] bg-blue-300 rounded-sm"></div>
            <p className="text-center text-sm py-2 text-gray-400">
              Add the location correctly
            </p>

            <div>
              <p className="font-bold mb-2">Label As</p>
              <div className="flex items-center gap-3">
                {LabbledButtons.map((btn) => (
                  <button
                    onClick={() => setSelectedTab(btn.name)}
                    key={btn.id}
                    className={`${
                      selectedTab === btn.name
                        ? "bg-orange-100 text-gray-800 border-orange-400"
                        : "text-gray-400 border-gray-400"
                    } flex border-2 rounded-md  items-center px-4 py-3 gap-2 cursor-pointer`}
                  >
                    <FontAwesomeIcon
                      icon={btn.icon}
                      className={`${
                        selectedTab === btn.name ? "text-orange-500" : ""
                      }`}
                    />
                    <p>{btn.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-[2px] border-gray-400 focus-within:border-orange-400 mt-3 text-sm rounded-md">
              <input
                type="text"
                placeholder="
                Enter Delievery Address..."
                className="w-full py-2 px-2 outline-none"
              />
            </div>
          </div>
          <div className="w-2/5 bg-purple-300">Sh</div>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
};

export default page;

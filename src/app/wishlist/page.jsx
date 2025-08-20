"use client";

import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCircleChevronDown,
  faCircleChevronUp,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DesktopHeader from "@/components/DesktopHeader";
import AppDownloadBar from "@/components/Custom/AppDownloadBar";
import Image from "next/image";
import { MyAppContext } from "@/context/MyAppContext";
import Footer from "@/components/Footer";
import { CartContext } from "@/context/CartContext";
import ProductDetailsModal from "@/components/Custom/ProductDetailsModal";
import useBodyScrollLock from "@/components/Custom/useBodyScrollLock";



const page = () => {
  const { showBar } = useContext(MyAppContext);

 

  return (
    <>
      <div className={`block md:hidden ${showBar ? "pb-8" : "pb-0"} `}>
        <AppDownloadBar />
      </div>

      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div className={`block md:hidden`}>
        <AppDownloadBar />
      </div>

      <div className="w-full flex flex-col gap-2 mt-6">
        <div className="block md:hidden">
          <div
            className={`fixed ${
              showBar ? "top-13" : "top-0"
            } overflow-hidden flex items-center justify-center gap-4 px-4 w-full h-[50px] bg-white z-50`}
          >
            <Link href={"/"}>
              <FontAwesomeIcon icon={faChevronLeft} className="w-8 h-8" />
            </Link>
            <p className="w-full mr-8 text-center py-3 font-bold">Wishlist</p>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-center bg-white py-3 font-bold">Wishlist</p>
        </div>

      <div className="bg-white w-full h-screen overflow-hidden flex items-center justify-center">
            <h1 className="text-black">Visit after some time</h1>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
};

export default page;

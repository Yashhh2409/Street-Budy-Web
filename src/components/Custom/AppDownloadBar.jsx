"use client";

import { MyAppContext } from "@/context/MyAppContext";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext, useState } from "react";

const AppDownloadBar = () => {

  const {showBar, setShowBar} = useContext(MyAppContext);
  // const [showBar, setShowBar] = useState(true);
  return (
    <>
      {showBar && (
        <div className="fixed top-0 w-full bg-black text-white p-2 px-4 flex items-center justify-between z-50">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src={"/assets/sb-logo.png"}
                width={100}
                height={100}
                alt="street buddy"
                className="w-6 h-7"
              />
            </div>
            <div className="text-[14px] leading-tight">
              <p>Unlock exclusive features</p>
              <p>Get the app!</p>
            </div>
          </div>
          <button className="bg-orange-500 px-2 py-1 rounded-full uppercase tracking-wide text-sm font-bold mr-4">
            Open App
          </button>

          <div onClick={() => setShowBar(false)} className="absolute top-3 right-3">
            <FontAwesomeIcon icon={faXmark}/>
          </div>
        </div>
      )}
    </>
  );
};

export default AppDownloadBar;

import Image from "next/image";
import React from "react";

const AppDownloadBar = () => {
  return (
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
      <button className="bg-orange-500 px-2 py-1 rounded-full uppercase tracking-wide text-sm font-bold">
        Open App
      </button>
    </div>
  );
};

export default AppDownloadBar;

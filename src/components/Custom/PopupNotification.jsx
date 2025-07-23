// components/InstallPromptModal.tsx
"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

export default function PopupNotification() {
  const [visible, setVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setAnimateOut(true);

      setTimeout(() => {
        setVisible(false);
      }, 500);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-16 left-1/2 transform -translate-x-1/2 z-999 transition-all duration-500 ${
        animateOut
          ? "translate-y-[-200%] opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="relative w-[350px] h-[55px] flex items-center justify-between gap-10 bg-green-300 rounded-lg px-3 mx-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-red-400">
            <Image
              src={"/assets/sb-popup-logo.jpeg"}
              width={50}
              height={50}
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-600 text-sm">Street Buddy</p>
            <p className=" text-gray-600 text-xs">streetbuddy.app</p>
          </div>
        </div>

        <button className="px-4 py-0.5 font-bold bg-blue-400 text-white rounded-md">
          Install
        </button>
      </div>
    </div>
  );
}

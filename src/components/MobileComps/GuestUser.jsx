"use client"

import { faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import SignupModel from "../Custom/SignupModel";

const userSettings = [
  {
    id: "1",
    SettingName: "General",
    Child: [
      { id: "1", name: "Profile", icon: faUser },
      { id: "2", name: "My Address", icon: faUser },
      { id: "3", name: "Language", icon: faUser },
      { id: "4", name: "Dark Mode", icon: faUser },
    ],
  },
  {
    id: "2",
    SettingName: "Promotional Activity",
    Child: [
      { id: "1", name: "Coupon", icon: faUser },
      { id: "2", name: "Loyalty Points", icon: faUser },
      { id: "3", name: "My Wallet", icon: faUser },
    ],
  },
];

const GuestUser = () => {

    const [isSignupOpen, setSignupOpen] = useState(false);
  
    const SignupModelFun = () => {
      setSignupOpen((prev) => !prev);
    };

  return (
    <>
      <div className="flex flex-col gap-4 justify-center bg-orange-100">
        <div className="fixed top-0 w-full flex items-center gap-4 bg-orange-500 p-4">
          <div>
            <Image
              src={"/assets/guest_icon.png"}
              width={80}
              height={80}
              alt="profile-img"
            />
          </div>
          <div>
            <h1 className="text-xl text-white font-bold">Yash Dhande</h1>
            <p className="text-white text-sm">Web Developer</p>
          </div>
        </div>

        <div className="p-4 mt-28 flex flex-col gap-4">
          {userSettings.map((setting) => (
            <div key={setting.id}>
              <p className="mb-2">{setting.SettingName}</p>
              <div className="w-full flex flex-col gap-6 rounded-md bg-white p-4">
                {setting.Child.map((c) => (
                  <span key={c.id} className="flex items-center gap-3 px-2">
                    <FontAwesomeIcon icon={c.icon} />
                    <p>{c.name}</p>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

       <div className="w-full h-[100px]">
         <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full">
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
          <p onClick={SignupModelFun} className="font-bold">SignIn</p>
        </div>
       </div>

        {isSignupOpen && <SignupModel setIsOpen={setSignupOpen} />}
      </div>
    </>
  );
};

export default GuestUser;

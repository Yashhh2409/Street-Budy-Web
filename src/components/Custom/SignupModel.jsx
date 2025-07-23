import {
  faAsterisk,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faPhone,
  faSitemap,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const SignupModel = ({ setIsOpen }) => {
  const [isPassVisible, setPassvisible] = useState(true);
  const [isSigninPage, setIsSigninPage] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const PasswordToggle = () => {
    setPassvisible((prev) => !prev);
  };

  const PageToggle = () => {
    setIsSigninPage((prev) => !prev);
  };

  const handledChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <div className="fixed bottom-0 bg-black/60 inset-0 flex items-center justify-center z-30 ">
        <div className="relative w-full md:w-[700px] h-full md:h-[480px] bg-white md:rounded-lg">
          <div className="w-full flex items-center justify-center mt-10">
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/sb-logo.png"}
                width={100}
                height={100}
                className="w-[35px] h-[40px]"
              />
              <p className="font-bold text-2xl text-orange-500">StreetBuddy</p>
            </div>
          </div>

          {isSigninPage ? (
            <SignIn
              PasswordToggle={PasswordToggle}
              isPassVisible={isPassVisible}
              PageToggle={PageToggle}
            />
          ) : (
            <SignUp
              IsPasswordVisible={isPassVisible}
              PasswordToggle={PasswordToggle}
              isChecked={isChecked}
              handledChecked={handledChecked}
              PageToggle={PageToggle}
            />
          )}

          <div
            onClick={() => setIsOpen(false)}
            className="absolute w-8 h-8 flex items-center justify-center right-2 top-2 hover:bg-gray-200 p-2 rounded-full"
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="size-4 text-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModel;

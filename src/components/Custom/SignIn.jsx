import React from "react";
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

const SignIn = ({
    PasswordToggle,
    isPassVisible,
    PageToggle
}) => {
  return (
    <div className="w-full flex items-center justify-center p-5 mt-4">
      <div className="w-[44%] flex flex-col gap-4">
        <h1 className="text-lg font-bold ">Login</h1>
        <input
          type="text"
          placeholder="Email or Phone"
          className="border rounded-sm px-2 py-2 outline-none border-gray-400"
        />
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full border rounded-sm pl-8 py-2 outline-none border-gray-400"
          />

          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-2 top-3 text-gray-400"
          />

          <div
            onClick={PasswordToggle}
            className="absolute right-5 -top-0.5 translate-1/2 text-gray-400"
          >
            {isPassVisible ? (
              <FontAwesomeIcon icon={faEye} className="" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="" />
            )}
          </div>

          <div className="flex items-center justify-between font-medium text-sm my-4">
            <span className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name=""
                id=""
                // checked={isChecked}
                // onChange={handledChecked}
                className="w-4 h-4"
              />
              <p>Remember me</p>
            </span>

            <p className="text-gray-400">Forgot Password?</p>
          </div>

          <div className="text-sm flex items-center gap-1 mt-8">
            <span className="flex items-center gap-1">
              I agree with all the{" "}
              <p className="text-orange-500">Terms & Conditions</p>
            </span>
          </div>

          <button className="w-full my-4 bg-orange-500 rounded-md text-white font-bold py-2 px-2 cursor-pointer">
            Login
          </button>
        </div>
      </div>

      <div className="w-[10%] h-full text-gray-400 flex flex-col gap-15 items-center justify-center-safe">
        <div className=" border-[1px] h-[50px]"></div>
        <p className="-rotate-90 text-nowrap">Or Login with</p>
        <div className="border-[1px] h-[50px]"></div>
      </div>

      <div className="w-[44%] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 ">
          <button className="w-[260px] flex items-center justify-center font-bold gap-2 shadow-md rounded-md px-3 py-3">
            <Image
              src={"/assets/Google_Favicon_2025.svg"}
              width={25}
              height={25}
              className="w-5 h-5"
              alt="Google-fav"
            />
            Continue with Google
          </button>
          <button className="w-[260px] flex items-center justify-center font-bold gap-2 shadow-md rounded-md px-3 py-3">
            <Image
              src={"/assets/Google_Favicon_2025.svg"}
              width={25}
              height={25}
              className="w-5 h-5"
              alt="Google-fav"
            />
            OTP Sign in
          </button>

          <span className="flex items-center gap-2 text-sm">
            Don't have account?{" "}
            <p onClick={PageToggle} className="text-orange-500 cursor-pointer">
              Sign up
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

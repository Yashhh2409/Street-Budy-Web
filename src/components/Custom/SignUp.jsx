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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = ({
  IsPasswordVisible,
  PasswordToggle,
  isChecked,
  handledChecked,
  PageToggle
}) => {
  return (
    <div className="w-full mt-4 p-5">
      <h1 className="text-lg font-bold">Sign Up</h1>
      <div className="w-full text-gray-400 flex flex-wrap items-center gap-4 mt-4">
        <div className="w-[48%] flex items-center gap-5 border-2 border-gray-400 px-2 py-2 rounded-md">
          <FontAwesomeIcon icon={faUser} />
          <span className="relative">
            <input
              type="text"
              placeholder="User Name"
              className="outline-none"
            />
            <FontAwesomeIcon
              icon={faAsterisk}
              className="absolute text-red-500 text-[10px] right-1/2"
            />
          </span>
        </div>

        <div className="w-[48%] flex items-center gap-3 border-2 border-gray-400 px-2 py-2 rounded-md">
          <FontAwesomeIcon icon={faSitemap} />
          <span className="relative">
            <input
              type="text"
              placeholder="Refer Code (Optional)"
              className="outline-none"
            />
          </span>
        </div>

        <div className="w-[48%] flex items-center gap-3 border-2 border-gray-400 px-2 py-2 rounded-md">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="relative">
            <input
              type="text"
              placeholder="E-mail"
              className="outline-none"
              required
            />
            <FontAwesomeIcon
              icon={faAsterisk}
              className="absolute text-red-500 text-[10px] right-1/2"
            />
          </span>
        </div>

        <div className="w-[48%] flex items-center gap-3 border-2 border-gray-400 px-2 py-2 rounded-md">
          <FontAwesomeIcon icon={faPhone} />
          <span className="relative">
            <input
              type="text"
              placeholder="Phone"
              className="outline-none"
              required
            />
            <FontAwesomeIcon
              icon={faAsterisk}
              className="absolute text-red-500 text-[10px] right-1/2"
            />
          </span>
        </div>

        <div className="w-full flex items-center gap-4">
          <div className="relative w-[48%]">
            <input
              type="text"
              placeholder="Password"
              className="relative w-full border rounded-sm pl-8 py-2 outline-none border-gray-400"
            />

            <FontAwesomeIcon icon={faLock} className="absolute left-2 top-3" />

            <div
              onClick={PasswordToggle}
              className="absolute right-5 -top-0.5 translate-1/2"
            >
              {IsPasswordVisible ? (
                <FontAwesomeIcon icon={faEye} className="" />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} className="" />
              )}
            </div>
          </div>

          <div className="relative w-[48%]">
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full border rounded-sm pl-8 py-2 outline-none border-gray-400"
            />

            <FontAwesomeIcon icon={faLock} className="absolute left-2 top-3" />

            <div
              onClick={PasswordToggle}
              className="absolute right-5 -top-0.5 translate-1/2"
            >
              {IsPasswordVisible ? (
                <FontAwesomeIcon icon={faEye} className="" />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} className="" />
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            checked={isChecked}
            onChange={handledChecked}
            className="w-4 h-4 cursor-pointer"
          />
          <span className="flex items-center gap-1 text-gray-950 text-sm">
            I agree with all the{" "}
            <a href="#" className="text-orange-500 cursor-pointer">
              Terms & Conditions
            </a>
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 items-center justify-center mt-6">
        {isChecked ? (
          <button className="w-[200px] bg-orange-500 font-bold py-2 text-white rounded-sm cursor-pointer">
            Sign Up
          </button>
        ) : (
          <button className="w-[200px] bg-gray-500 font-bold py-2 text-white rounded-sm cursor-pointer">
            Sign Up
          </button>
        )}

        <span className="flex items-center gap-1">
          Already have account?{" "}
          <p onClick={PageToggle} className="text-orange-500 cursor-pointer">
            Sign in
          </p>
        </span>
      </div>
    </div>
  );
};

export default SignUp;

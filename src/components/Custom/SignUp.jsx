"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  faAsterisk,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faSitemap,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDebounce from "./useDebounce";
import Image from "next/image";
import { MyAppContext } from "@/context/MyAppContext";
import CountriesModel from "./CountriesModel";

const SignUp = ({
  IsPasswordVisible,
  PasswordToggle,
  isChecked,
  handledChecked,
  PageToggle,
}) => {
  const { countries } = useContext(MyAppContext);

  console.log("Signup countries", countries);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referCode: "",
    ccode: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [isCountriesModelOpen, setCountriesModelOpen] = useState(false);

  const handleCountriesModel = () => {
    setCountriesModelOpen((prev) => !prev);
  }

  const debouncedEmail = useDebounce(formData.email, 1000);
  const debouncedCCode = useDebounce(formData.ccode, 400);
  const debouncedMobile = useDebounce(formData.mobile, 400);
  const debouncedPassword = useDebounce(formData.password, 400);
  const debouncedCPassword = useDebounce(formData.confirmPassword, 400);

  useEffect(() => {
    if (
      debouncedEmail &&
      debouncedCCode &&
      debouncedMobile &&
      debouncedPassword &&
      debouncedCPassword
    ) {
      console.log(
        "CheckEmail:",
        debouncedEmail,
        debouncedCCode,
        debouncedMobile,
        debouncedPassword,
        debouncedCPassword
      );
    }
  }, [
    debouncedEmail,
    debouncedCCode,
    debouncedMobile,
    debouncedPassword,
    debouncedCPassword,
  ]);

  const handleChange = (e) => {
    console.log("yash");
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // console.log("Form Data:", formData);

  return (
    <div className="w-full mt-4 p-5 overflow-y-auto">
      <h1 className="text-lg font-bold">Sign Up</h1>
      <div className="w-full text-gray-400 flex flex-wrap items-center gap-4 mt-4">
        <div className="w-full md:w-[48%] flex items-center gap-5 border-2 border-gray-400 px-2 py-2 rounded-md">
          <FontAwesomeIcon icon={faUser} />
          <span className="relative">
            <input
              type="text"
              placeholder="User Name"
              className="outline-none"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faAsterisk}
              className="absolute text-red-500 text-[10px] right-1/2"
            />
          </span>
        </div>

        <div className="w-full md:w-[48%] flex items-center gap-3 border-2 border-gray-400 px-2 py-2 rounded-md">
          <FontAwesomeIcon icon={faSitemap} />
          <span className="relative">
            <input
              type="text"
              placeholder="Refer Code (Optional)"
              className="outline-none"
              name="referCode"
              value={formData.referCode}
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="w-full md:w-[48%] flex items-center gap-3 border-2 border-gray-400 px-2 py-2 rounded-md">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="relative">
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="outline-none"
              required
            />
            <FontAwesomeIcon
              icon={faAsterisk}
              className="absolute text-red-500 text-[10px] right-1/2"
            />
          </span>
        </div>

        <div className="w-full md:w-[48%] flex items-center gap-3 border-2 border-gray-400 px-2 py-2 rounded-md">



          <div onClick={handleCountriesModel} className="flex items-center gap-2">
            <Image src={"/assets/india-logo.png"} width={25} height={25} />
            <p>+91</p>
          </div>

          


          <hr className="h-[18px] border-[1px] bg-amber-400" />
          <span className="relative">
            <input
              type="text"
              placeholder="Phone"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="outline-none"
              required
            />
            <FontAwesomeIcon
              icon={faAsterisk}
              className="absolute text-red-500 text-[10px] right-1/2"
            />
          </span>
        </div>

        <div className="w-full md:flex items-center space-y-4 gap-4">
          <div className="relative w-full md:w-[48%]">
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="relative w-full border-2 rounded-sm pl-8 py-2 outline-none border-gray-400"
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

          <div className="relative w-full md:w-[48%]">
            <input
              type="text"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border-2 rounded-sm pl-8 py-2 outline-none border-gray-400"
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

      {
            isCountriesModelOpen && <CountriesModel setCountriesModelOpen={setCountriesModelOpen}/>
          }
    </div>
  );
};

export default SignUp;

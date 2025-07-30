"use client";

import React, { useEffect, useState } from "react";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const SignIn = ({ PasswordToggle, isPassVisible, PageToggle }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [debouncedData, setDebouncedData] = useState(formData);

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Debouncing logic (Function runs after user stops entering values)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedData(formData);
    }, 500);
    return () => clearTimeout(timeout);
  }, [formData]);

  console.log("Debounced:", debouncedData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!debouncedData.email || !debouncedData.password) {
      alert("please enter both email & password");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(debouncedData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login success:", data);
         document.cookie = `token=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}; secure`;
         window.location.href = "/";
      } else {
        console.log("Login failed:", data);
      }
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center p-5 mt-4">
      <form className="w-full md:w-[44%] flex flex-col gap-4">
        <h1 className="text-lg font-bold ">Login</h1>
        <input
          type="text"
          placeholder="Email or Phone"
          name="email"
          value={formData.email}
          onChange={handleFormData}
          className="border rounded-sm px-2 py-2 outline-none border-gray-400"
        />
        <div className="relative w-full">
          <input
            type={isPassVisible ? "text" : "password"}
            placeholder="Email or Phone"
            name="password"
            value={formData.password}
            onChange={handleFormData}
            className="w-full border rounded-sm pl-8 py-2 outline-none border-gray-400 focus-within:border-orange-400 "
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

            <p className="text-gray-400 cursor-pointer">Forgot Password?</p>
          </div>

          <div className="text-sm flex items-center gap-1 mt-8">
            <span className="flex items-center gap-1">
              I agree with all the{" "}
              <p className="text-orange-500 cursor-pointer">
                Terms & Conditions
              </p>
            </span>
          </div>

          <button
            
            onClick={handleSubmit}
            className="w-full my-4 bg-orange-500 rounded-md text-white font-bold py-2 px-2 cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>

      <div className="hidden w-[10%] h-full text-gray-400 md:flex md:flex-col gap-15 items-center justify-center-safe">
        <div className=" border-[1px] h-[50px]"></div>
        <p className="-rotate-90 text-nowrap">Or Login with</p>
        <div className="border-[1px] h-[50px]"></div>
      </div>

      <div className="w-[44%] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 ">
          <span className="flex items-center gap-2 text-sm text-nowrap">
            Don't have account?{" "}
            <p onClick={PageToggle} className="text-orange-500 cursor-pointer">
              Sign up
            </p>
          </span>

          <span className="block md:hidden text-sm">
            Sign in with{" "}
            <Link href="#" className="text-orange-500 underline">
              OTP
            </Link>
          </span>

          <div className="h-[10%] text-gray-400 flex gap-5 items-center justify-center-safe">
            <div className="block md:hidden  border-[1px] w-[95px]"></div>
            <p className="text-nowrap text-sm">Or continue with</p>
            <div className="block md:hidden border-[1px] w-[95px]"></div>
          </div>

          <button className="md:w-[260px] flex items-center justify-center font-bold gap-2 shadow-md rounded-md px-3 py-3">
            <Image
              src={"/assets/Google_Favicon_2025.svg"}
              width={25}
              height={25}
              className="w-5 h-5"
              alt="Google-fav"
            />
            <p className="hidden md:block">Continue with Google</p>
          </button>

          <button className="hidden w-[260px] md:flex items-center justify-center font-bold gap-2 shadow-md rounded-md px-3 py-3">
            <Image
              src={"/assets/Google_Favicon_2025.svg"}
              width={25}
              height={25}
              className="w-5 h-5"
              alt="Google-fav"
            />
            OTP Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import { MyAppContext } from "@/context/MyAppContext";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const footerLinks = [
  {
    id: "1",
    Title: "About",
    childs: ["About us", "Categories"],
  },
  {
    id: "2",
    Title: "Quick Links",
    childs: [
      "Refund Policy",
      "Shipping Policy",
      "Cancellation Policy",
      "Privacy Policy",
      "Terms & Condition",
    ],
  },
  {
    id: "3",
    Title: "Login",
    childs: ["Login", "Live Chat", "My Orders", "Help & Support"],
  },
];

const Footer = () => {

  const {isSignupOpen, SignupModelToggle} = useContext(MyAppContext);

  const router = useRouter();
  return (
    <div className="w-full bg-gray-700 md:px-48 hidden md:block">
      <div className="w-full flex gap-4 border-b-2 border-gray-300">
        <div className="w-2/5 flex flex-col gap-3 p-5">
          <span className="flex  gap-2 items-center">
            <div className="w-[80px] h-[80px]">

          
            <Image
              src={"/assets/sb-logo-new.png"}
              width={100}
              height={100}
              alt="Street buddy"
              className="w-full h-full"
            />
              </div>
            <p className="text-lg font-bold text-orange-500">Street Buddy</p>
          </span>
          <p className="text-white font-bold">
            Subscribe to our news letter to get latest updates
          </p>
          <div className="bg-white px-2 py-1 rounded-md flex gap-2 items-center">
            <input
              type="text"
              placeholder="Your Email Address"
              className="w-full px-2 py-1 text-sm outline-none"
            />
            <button className="bg-orange-500 text-white px-2 py-1 rounded-md self-end">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-2 text-gray-600">
            <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:scale-3d transition-transform duration-300 hover:text-orange-800">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:scale-3d transition-transform duration-300 hover:text-orange-800">
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:scale-3d transition-transform duration-300 hover:text-orange-800">
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full  hover:text-orange-800">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="w-3/5 bg-gray-600 p-5 m-4 rounded-md flex gap-20">
          <div className="flex flex-col">
            <p className="font-bold text-[15px] text-white">About</p>
          <div className="text-sm text-gray-500">
            <p className="cursor-pointer hover:text-orange-500 text-sm text-gray-50">About us</p>
            <p onClick={() => router.push("/categories")} className="cursor-pointer hover:text-orange-500 text-sm text-gray-50">Categories</p>
          </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[15px] text-white">Quick Links</p>
          <div className="text-sm text-gray-500">
            <p onClick={() => router.push("/privacy-policy")} className="cursor-pointer hover:text-orange-500 text-sm text-gray-50">Privacy Policy</p>
          </div>
          </div>


          <div className="flex flex-col">
            <p className="font-bold text-[15px] text-white">For users</p>
          <div className="text-sm text-gray-500">
            <p onClick={SignupModelToggle} className="cursor-pointer hover:text-orange-500 text-sm text-gray-50">Login</p>
            <p className="cursor-pointer hover:text-orange-500 text-sm text-gray-50">Help & Support</p>
          </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-white p-2">Street_Buddy @ Copyright 2025</p>
    </div>
  );
};

export default Footer;

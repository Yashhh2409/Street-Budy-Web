import React from "react";
import "@/lib/fontawesome";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCartShopping,
  faCheckCircle,
  faLock,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white p-5 flex justify-between px-48">
        <div className="flex items-center space-x-4 text-xl">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src="/assets/sb-logo.png" width={50} height={50} alt="logo" className="w-[30px]" />
            <p className="text-[25px] font-bold text-amber-600">StackFood</p>
          </Link>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/categories">Categories</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/cuisines">Cuisines</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/restaurants">Restaurants</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-8">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-500 text-xl"
          />
          <FontAwesomeIcon icon={faBell} className="text-gray-500 text-xl"/>
          <FontAwesomeIcon icon={faCartShopping} className="text-gray-500 text-xl"/>
          <span className="flex space-x-3">
            <FontAwesomeIcon icon={faLock} className="text-gray-500 text-xl"/>
            <p>Sign in</p>
          </span>
          <FontAwesomeIcon icon={faBars} className="text-gray-500 text-xl"/>
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;

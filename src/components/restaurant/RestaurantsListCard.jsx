"use client"

import { MyAppContext } from "@/context/MyAppContext";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const RestaurantsListCard = ({id, Icon, Name, Rating, Start_from}) => {


  const {Currency} = useContext(MyAppContext);

  return (
    <Link href={`/restaurant/${id}`} className="w-[350px] h-[130px] rounded-md bg-white shadow-sm flex gap-2 p-2 hover:bg-orange-50 transition-colors duration-300">
      <div className="w-[150px] flex items-center justify-center rounded-md overflow-hidden">
        <Image
          src={Icon}
          width={200}
          height={200}
          alt="img"
          className="w-full h-full object-cover rounded-md hover:scale-125 transition-transform duration-300"
        />
      </div>
      <div className="relative w-[250px] flex flex-col items-start justify-center px-4">
        <p className="w-[150px] text-gray-800 font-semibold truncate">{Name}</p>
        <span className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faStar} className="text-sm text-[#F6931E]" />
          <p className="font-bold">{Rating}</p>
          <p className="text-gray-500">(3)</p>
        </span>
        <span className="flex items-center gap-2">
          <p className="text-gray-500 text-sm">Start From</p>
          <p className="font-bold">{Currency} {Start_from}</p>
        </span>

        <div className="relative flex items-center">
          <div className="w-7 h-7 bg-red-400 rounded-full flex items-center justify-center border-2 border-gray-100 z-0">
            y
          </div>
          <div className="absolute w-7 h-7 left-5 z-10 bg-red-400 rounded-full flex items-center justify-center border-2 border-gray-100">
            a
          </div>
          <div className="absolute w-7 h-7 left-10 z-10 bg-red-400 rounded-full flex items-center justify-center border-2 border-gray-100">
            s
          </div>
          <div className="absolute w-7 h-7 left-15 z-20 bg-red-400 rounded-full flex items-center justify-center border-2 border-gray-100">
            h
          </div>

          <div className="absolute w-[75px] h-6 left-20 z-10 bg-[#FFEBDC] rounded-full flex items-center justify-center text-sm">
            <span className="flex gap-1"><p className="text-orange-600 font-bold">7</p> <p className="text-orange-600">items</p></span>
          </div>
        </div>

        <div className="absolute right-2 top-1">
            <FontAwesomeIcon icon={faHeart} className="text-2xl text-orange-200"/>
        </div>

      </div>
    </Link>
  );
};

export default RestaurantsListCard;

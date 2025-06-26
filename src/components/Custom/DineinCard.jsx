import React from "react";
import Image from "next/image";
import { faRoute, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DineinCard = ({Img, Name, Address, Rating, Distance}) => {
  return (
    <>
      <div className="max-w-[260px] h-[100px] rounded-xl bg-white p-2 flex">
        <div className="w-[65px]  h-[65px] rounded-xl border-4 border-[#F6E5DA] overflow-hidden ">
          <Image
            src={Img}
            alt="img"
            width={400}
            height={200}
            className="w-full h-full object-contain rounded-xl  hover:scale-125 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col">
          <div className="w-[175px] flex flex-col gap-1 ml-2 pl-2 pt-1 ">
            <p className="text-md font-bold">{Name}</p>
            <p className="text-sm truncate text-gray-500">{Address}</p>

            <div className="flex space-x-2 items-center text-sm">
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon icon={faStar} />
                <p>{Rating}</p>
              </div>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon icon={faRoute} />
                <p>{Distance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DineinCard;

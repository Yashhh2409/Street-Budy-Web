import { faClock, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const RestaurantCard = () => {
  return (
    <>
      <div className="relative min-w-[260px] h-[190px] rounded-lg overflow-hidden">
        <div className="relative overflow-hidden w-full h-1/2">
          <Image
            src={"/assets/Restaurant/restCard-1.png"}
            width={300}
            height={250}
            alt="Img"
            className="w-full h-full object-fill hover:scale-125 transition-transform duration-300"
          />

          {/* Heart icon */}
          <div className="absolute top-3 right-3 z-10">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-orange-200 text-2xl"
            />
          </div>

          {/* Polygon with distance */}
          <div className="absolute w-[90px] h-[60px] -bottom-0.5 right-2 z-10">
            <div
              style={{
                clipPath: "polygon(21% 64%, 80% 64%, 100% 100%, 0% 100%)",
              }}
              className="bg-white w-full h-full"
            ></div>

            <p className="absolute font-semibold bottom-[0.5px] right-[22px] text-orange-500 text-sm">
              1.3 km
            </p>
          </div>
        </div>

        <div className="w-full h-1/2 bg-white p-1">
          <div className="flex justify-between">
            <div></div>
            <div className="w-[175px] p-1 self-end">
              <p className="text-md font-bold">Hungry Puppets</p>
              <p className="text-sm truncate text-gray-500">
                Bengali, Indian, Pizza, sdfcsghiudf
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center p-2 text-sm">
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faStar} />
              <p>5.8</p>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faClock} />
              <p>30-40-min</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 left-10 -translate-1/2 w-[65px]  h-[65px] rounded-xl border-4 border-[#F6E5DA] overflow-hidden ">
          <Image
            src={"/assets/Restaurant/icon-1.png"}
            alt="img"
            width={400}
            height={200}
            className="w-full h-full object-contain hover:scale-125 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;

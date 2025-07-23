import { faClock, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestaurantCard = ({ layout = "horizontal", id, Img, Distance, Icon, Name, Description, Delivery_in, Rating  }) => {

  const isSquare = layout === "square";

  return (
    <>
      <Link href={`/restaurant/${id}`}
        className={`relative min-w-[260px] shadow-md ${
          isSquare ? "h-[250px] w-full md:w-[260px]" : "h-[190px]"
        } rounded-lg overflow-hidden`}
      >
        <div className="relative overflow-hidden w-full h-1/2">
          <Image
            src={Img}
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
              {Distance}
            </p>
          </div>
        </div>

        <div className="w-full h-1/2 bg-white p-1">
          <div className="flex justify-between">
            <div></div>
            <div className={`${isSquare ? "self-center w-full pt-9 px-2" : "self-end w-[175px] p-1"}`}>
              <p className={`text-md font-bold truncate ${isSquare ? "text-center" : ""} `}>{Name}</p>
              <p className={`text-sm truncate text-gray-500 ${isSquare ? "w-[200px] self-center-safe text-center truncate ml-16 md:ml-4" : ""}`}>
                {Description}
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center p-2 text-sm">
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faStar} />
              <p>{Rating}</p>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faClock} />
              <p>{Delivery_in}</p>
            </div>
          </div>
        </div>

        <div
          className={`absolute  w-[65px]  h-[65px] rounded-xl border-4 border-[#F6E5DA] overflow-hidden ${
            isSquare
              ? "top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
              : "bottom-3 left-10 -translate-1/2"
          }`}
        >
          <Image
            src={Icon}
            alt="img"
            width={400}
            height={200}
            className="w-full h-full object-contain hover:scale-125 transition-transform duration-300"
          />
        </div>
      </Link>
    </>
  );
};

export default RestaurantCard;

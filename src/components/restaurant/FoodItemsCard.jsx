import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faRoute } from "@fortawesome/free-solid-svg-icons";
import { CURRENCY_SYMBOL } from "@/utils/constant";

const FoodItemsCard = ({
  menuName,
  restaurant,
  originalPrice,
  Price,
  Img,
  isVeg,
}) => {
  return (
    <div className="w-full md:w-[350px] bg-white p-2 rounded-lg flex justify-between gap-2 hover:bg-orange-50 transition-colors duration-300">
      <div className="w-[150px] md:w-2/5 h-[100px] rounded-lg overflow-hidden">
        <Image
          src={Img}
          width={400}
          height={300}
          alt="Img"
          className="w-full h-full hover:scale-125 transition-transform duration-300"
        />
      </div>

      <div className="w-4/5 flex flex-col gap-2 items-start justify-center pl-2">
        <span className="flex items-center gap-2">
          <p className="font-bold text-md text-nowrap max-w-[150px] truncate">
            {menuName}
          </p>
          {isVeg ? (
            <div>
              <div className="green-veg-icon-border">
                <div className=" green-veg-icon-dot"></div>
              </div>
            </div>
          ) : (
            <div>
              <div className="red-non-veg-icon-border">
                <div className="red-non-veg-icon-dot"></div>
              </div>
            </div>
          )}
        </span>
        <div>
          <p className="text-sm text-gray-500">{restaurant}</p>
          <span className="flex gap-2 items-center">
            <p className="text-sm text-gray-500 line-through">
              {CURRENCY_SYMBOL} {originalPrice}
            </p>
            <p className="text-lg text-orange-400 font-bold">
              {CURRENCY_SYMBOL} {Price}
            </p>
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-[#F7DFCC] text-2xl hover:scale-125 transition-transform duration-300"
        />
        <FontAwesomeIcon
          icon={faPlus}
          className="text-orange-400 text-xl hover:scale-125 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default FoodItemsCard;

import React, { useContext } from "react";
import Image from "next/image";
import RestaurantOfferCarousel from "./RestaurantOfferCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faClock,
  faHeart,
  faLocationDot,
  faShareNodes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { CURRENCY_SYMBOL } from "@/utils/constant";
import { MyAppContext } from "@/context/MyAppContext";

const MobileRestaurantDetailsBox = ({
  RestaurantIcon,
  RestaurantName,
  RestaurantAddress,
  Restaurant_Delevery_In,
  Restaurant_Start_From,
  Landmark,
  RestaurantRating,
}) => {


  const {Currency} = useContext(MyAppContext);

  return (
    <div className="absolute w-[90%] md:w-[97%] h-auto bg-white -bottom-40 pt-2 rounded-md overflow-hidden shadow-md">
      <div className="w-full md:w-[77%] place-self-end flex flex-col md:flex-row gap-2 p-2">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex justify-evenly">
            <div className="w-[80px] md:w-[200px] h-[80px] md:h-[200px] rounded-full overflow-hidden shadow-xl border-[2px] border-orange-400 top-2 left-10">
              <Image
                src={RestaurantIcon}
                width={500}
                height={500}
                alt="img"
                className="w-full h-full object-cover rounded-full hover:scale-125 transition-transform duration-300"
              />
            </div>

            <div className="w-[60%]">
              <p className="text-gray-800 font-bold">{RestaurantName}</p>
              <p className="text-gray-500 line-clamp-2 text-sm">{RestaurantAddress}</p>
              <p className="text-gray-500 text-sm">
                Start from: {Currency} {Restaurant_Start_From}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-gray-500 text-xl">
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faShareNodes} />
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-10 mt-6">
            <div className="flex flex-col items-center  gap-1 text-sm place-self-end">
              <FontAwesomeIcon
                icon={faClock}
                className="text-orange-400 text-[18px]"
              />
              <p>{Restaurant_Delevery_In}</p>
            </div>

            <div className=" flex flex-col items-center justify-center gap-1 text-sm place-self-end">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-orange-400 text-[18px]"
              />
              <p>{Landmark}</p>
            </div>

            <div className=" flex flex-col items-center justify-center gap-1 text-sm place-self-end">
              <FontAwesomeIcon
                icon={faStar}
                className="text-orange-400 text-[18px]"
              />
              <p>{RestaurantRating}</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <RestaurantOfferCarousel />
        </div>

        <div className="w-full bg-green-700 text-white font-bold rounded-md p-2 flex items-center justify-end gap-3">
          <FontAwesomeIcon icon={faBullhorn} className="text-2xl -rotate-25" />

          <div className="place-self-end overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              <p className="mr-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium tempora ipsum, omnis explicabo optio nostrum non
                error eaque libero excepturi consequuntur asperiores natus
                dolorum fuga. Ea debitis sit ullam sapiente?
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default MobileRestaurantDetailsBox;

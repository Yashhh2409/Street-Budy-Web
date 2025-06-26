import { faHeart, faRoute} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const NewRestaurantsCard = () => {
  return (
    <div className="w-[350px] bg-white p-2 rounded-lg flex justify-between gap-2">
      <div className="w-2/5 h-[100px] border-4 border-[#F7DFCC] rounded-lg overflow-hidden">
        <Image
          src={"/assets/Restaurant/icon-1.png"}
          width={400}
          height={300}
          alt="Img"
          className="w-full h-full hover:scale-125 transition-transform duration-300"
        />
      </div>

      <div className="w-4/5 flex flex-col gap-2 items-start justify-center pl-2">
        <p className="font-bold text-xl">Mini Kebab</p>
        <div className="flex space-x-4 items-center text-sm">
          <div className="flex items-center space-x-1.5">
            <FontAwesomeIcon icon={faRoute} />
            <p>100+ km</p>
          </div>
          <div className="flex items-center space-x-1.5">
            <FontAwesomeIcon icon={faRoute} />
            <p>5 + Item</p>
          </div>
        </div>
      </div>

      <FontAwesomeIcon icon={faHeart} className="text-[#F7DFCC] text-2xl"/>
    </div>
  );
};

export default NewRestaurantsCard;

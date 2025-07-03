import Image from "next/image";
import React from "react";

const CuisineCard = ({Img, Name}) => {
  return (
    <div className="relative p-3 md:p-6 flex items-center justify-center">
      <div className="absolute z-0 rotate-45 bottom-4 md:bottom-3 left-2.5 md:left-6 w-3  md:w-6 h-4 md:h-8 p-2 md:p-5 bg-orange-400"></div>

      <div className="absolute z-0 -rotate-45 bottom-5 md:bottom-3 left-[70px] md:left-[85px] w-3 md:w-6 h-4 md:h-8  md:p-5 bg-orange-400"></div>

      <div className="relative z-10 w-[70px] md:w-[100px] h-[70px] md:h-[100px] overflow-hidden rounded-full">
        <Image
          src={Img}
          width={100}
          height={100}
          alt="cuisines"
          className="w-full h-full rounded-full hover:scale-125 transition-transform duration-300"
        />
      </div>

      <div className="absolute z-20 w-[80px] md:w-[120px] bg-white bottom-0.5 md:bottom-1 py-1 text-gray-800 text-center text-xs md:text-sm rounded-b-lg">
       {Name}
      </div>
    </div>
  );
};

export default CuisineCard;

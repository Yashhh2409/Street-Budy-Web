import React, { useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MyAppContext } from "@/context/MyAppContext";

const Cards = ({
  Img,
  Offer,
  Restaurant,
  Name,
  OriginalPrice,
  Price,
  // isVeg,
  onClick = { onClick },
}) => {
  const { Currency } = useContext(MyAppContext);
  return (
    <>
      <div
        onClick={onClick}
        className="max-w-[200px] h-[280px] flex flex-col bg-white rounded-xl"
      >
        <div className="max-w-[200px] h-[150px] object-cover relative">
          <div className="relative h-[160px] rounded-t-xl overflow-hidden">
            <Image
              src={Img}
              width={500}
              height={300}
              alt="img"
              className="rounded-t-xl w-full h-full hover:scale-125 transition-transform duration-300"
            />

            <div className="absolute w-6 h-6 bottom-2 right-3 bg-white rounded-full flex items-center justify-center text-orange-500 cursor-pointer">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>

          <div className="absolute w-[80px] h-6 top-2 bg-orange-500 text-white text-sm p-1 -left-1 rounded-tl-md text-nowrap font-bold">
            {Offer}
            <div
              style={{
                clipPath:
                  "polygon(100% 0, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
              }}
              className="absolute top-0 -right-2 p-3 bg-orange-500"
            ></div>
            {/* <div className="absolute left-0 bottom-0 w-2 h-2 bg-gray-700 rotate-45"></div> */}
          </div>
        </div>

        <div className="flex flex-col space-y-1 p-5 text-gray-500 text-sm">
          <p>{Restaurant}</p>

          <span className="flex items-center space-x-1">
            <p className="text-gray-800 text-[16px] font-semibold truncate">
              {Name}
            </p>

            {/* {isVeg ? (
              <div className="green-veg-icon-border">
                <div className="green-veg-icon-dot"></div>
              </div>
            ) : (
              <div className="red-non-veg-icon-border">
                <div className="red-non-veg-icon-dot"></div>
              </div>
            )} */}
            
          </span>
          <span className="flex space-x-1 items-center">
            <p className="text-decoration-line: line-through text-gray-500">
              {Currency}
              {OriginalPrice}
            </p>
            <p className="text-xl text-gray-800 font-semibold">
              {Currency}
              {Price}
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Cards;

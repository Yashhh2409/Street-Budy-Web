import {
  faMinus,
  faPlus,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Modal = ({ isVisible, onClose = { onclose }, data }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 md:inset-0 md:bg-black/25 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative mb-12 flex flex-col gap-4 w-full md:w-[500px] bg-white p-4 rounded-t-2xl   md:rounded-2xl z-50 md:z-0">
        <div className="flex gap-2 items-center">
          <div className="relative w-[100px] md:w-[120px] h-[100px] md:h-[120px] overflow-hidden bg-red-800 rounded-2xl">
            <Image
              src={data?.Img}
              alt="img"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-2xl"
            />
            <p className="absolute text-sm bottom-0 text-white font-bold px-2 bg-gradient-to-r from-black to-transparent">
              {data?.offerTag}
            </p>
          </div>
          <div>
            <p className="font-bold">{data?.name}</p>
            <p className="text-orange-500 text-sm">{data?.RestaurantName}</p>
            <div className="flex gap-1 text-sm text-gray-500 items-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <p>(0)</p>
            </div>
            <span className="flex gap-2">
              <p className="text-gray-500 line-through">
                {data?.originalPrice}
              </p>
              <p>{data?.Price}</p>
            </span>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between py-2">
            <div className="flex justify-between mb-4">
              <p className="text-gray-800 font-bold">Description</p>
              <div className="w-fit flex items-center gap-1 border-amber-600 shadow-xl px-2 rounded-full">

                
                     {
              data?.isVeg ? (<div className="green-veg-icon-border">
              <div className="green-veg-icon-dot"></div>
            </div>) : (<div className="red-non-veg-icon-border">
              <div className="red-non-veg-icon-dot"></div>
            </div>)
            }
                <div>{data?.isVeg}</div>
                <p className="text-sm">{data?.isVeg ? "Veg" : "Non-Veg"}</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">{data?.Description}</p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-800 font-bold">Addons</p>
              <span className="flex gap-1 text-sm text-gray-500">
                <input type="checkbox" name="" id="" />
                <p>Tomato sauce</p>
              </span>
            </div>

            <div className="text-sm text-gray-500">
              <p>Optional</p>
              <p>$ 10</p>
            </div>
          </div>
        </div>

        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="absolute w-4 h-4 right-2 top-2 bg-white shadow-lg border-2 border-orange-500 p-2 rounded-full"
        />

        <div className="flex justify-between">
          <p className="text-orange-500 font-bold">Total Amount:</p>
          <span className="flex gap-2">
            <p className="line-through text-gray-500">$ 600.00</p>
            <p className="text-orange-500 font-bold">$ 540.00</p>
          </span>
        </div>

        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faMinus}
              width={10}
              height={10}
              className="w-4 h-4 border-[2px] border-gray-500 rounded-full"
            />
            <p>1</p>
            <FontAwesomeIcon
              icon={faPlus}
              width={10}
              height={10}
              className="w-4 h-4 border-[2px] border-gray-500 rounded-full"
            />
          </div>

          <button className="w-full bg-orange-500 rounded-full py-1 text-white font-bold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

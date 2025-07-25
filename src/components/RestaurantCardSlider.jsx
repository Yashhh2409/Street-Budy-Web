"use client";

import React from "react";
import RestaurantCard from "./Custom/RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useMyAppContext } from "@/context/MyAppContext";

const RestaurantCardSlider = () => {
  const { restaurantList } = useMyAppContext();

  return (
    <div className="w-full md:px-48 py-5">
      <div className=" p-2 flex flex-col gap-4">
        <div className="flex items-center justify-between pr-5">
          <p className="text-black font-bold">Popular Restaurants</p>
          <div className="border-2 rounded-full w-8 h-8 border-orange-400 flex items-center justify-center bg-white">
            <FontAwesomeIcon
              icon={faChevronRight}
              className=" text-orange-400 rounded-full"
            />
          </div>
        </div>
        <div className="flex px-1 space-x-3 md:space-x-4 overflow-x-auto no-scrollbar space-y-6">
          {restaurantList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              Img={restaurant.rimg}
              Distance={restaurant.ukm}
              Icon={restaurant.cover_img}
              Name={restaurant.title}
              Description={restaurant.sdesc}
              Delivery_in={restaurant.delevery_in}
              Rating={restaurant.rate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCardSlider;

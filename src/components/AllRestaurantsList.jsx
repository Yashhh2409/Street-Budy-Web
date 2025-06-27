import React from "react";
import RestaurantCard from "./Custom/RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import RestaurantsList from "@/data/RestaurantList";


const AllRestaurantsList = () => {
  return (
    <div className="w-full md:px-48">
      <div className="w-full">
        <div className=" p-4 flex flex-col gap-4">
          <div className="md:flex md:justify-between">
            <div className="flex md:flex-col justify-between items-center my-4 md:my-0">
              <p className="font-bold text-md md:text-xl">All Restaurants</p>
              <p className="text-gray-500 text-sm md:text-md">
                13 Restaurants near you
              </p>
            </div>
            <div className="flex space-x-2 justify-center">
              <button className="border-[2px] border-gray-300 px-2 h-8 text-[12px] md:text-[15px] rounded-md">
                Top Rated
              </button>
              <button className="border-[2px] border-gray-300 px-2 h-8 text-[12px] md:text-[15px] rounded-md">
                Discounted
              </button>
              <button className="border-[2px] border-gray-300 px-2 h-8 text-[12px] md:text-[15px] rounded-md">
                Veg
              </button>
              <button className="border-[2px] border-gray-300 px-2 h-8 text-[12px] md:text-[15px] rounded-md">
                Non-Veg
              </button>
              <button className="border-[2px] border-orange-400 text-orange-400 px-2 h-8 text-[15px] rounded-md">
                <FontAwesomeIcon icon={faFilter} />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-wrap space-x-4 space-y-4">
            {RestaurantsList.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                layout="square"
                Img={restaurant.image}
                Distance={restaurant.distance}
                Icon={restaurant.icon}
                Name={restaurant.name}
                Description={restaurant.description}
                Delivery_in={restaurant.delevery_in}
                Rating={restaurant.rating}
              />
            ))}
          </div>
          <button className="w-fit self-center px-4 py-2 bg-orange-500 font-bold rounded-md text-white">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllRestaurantsList;

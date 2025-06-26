import React from "react";
import RestaurantCard from "./Custom/RestaurantCard";

const RestaurantCardSlider = () => {
  return (
    <div className="w-full md:px-48 py-5">
      <div className=" p-2 flex flex-col gap-4">
        <p className="text-black font-bold">Popular Restaurants</p>
        <div className="flex space-x-3 md:space-x-4 overflow-x-auto no-scrollbar">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCardSlider;

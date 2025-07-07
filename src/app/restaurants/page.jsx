import React from "react";


import RestaurantsList from "@/data/RestaurantList";

import RestaurantsListCard from "@/components/restaurant/RestaurantsListCard";

const Restaurants = () => {
  return (
    <>
      <div className="w-full bg-[#F6E9E1]">
        <div className="">
          <p className="text-center font-bold py-2">Restaurants</p>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="mt-2 flex flex-wrap py-4 md:px-48 gap-4">
          {RestaurantsList.map((restaurant) => (
            <RestaurantsListCard
              key={restaurant.id}
              Icon={restaurant.icon}
              Name={restaurant.name}
              Rating={restaurant.rating}
              Start_from={restaurant.start_from}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;

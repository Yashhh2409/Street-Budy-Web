"use client";


import React, { useContext, useEffect, useState } from "react";
import RestaurantsListCard from "@/components/restaurant/RestaurantsListCard";
import { MyAppContext } from "@/context/MyAppContext";


const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const {Currency} = useContext(MyAppContext);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/restaurants`);
        const data = await response.json();

        const updatedData = data.map((item) => ({
          ...item,
          cover_img: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${
            item.cover_img.startsWith("/") ? "" : "/"
          }${item.cover_img}`,
        }));

        setRestaurantList(updatedData);
      } catch (error) {
        console.error("Failed to fetch restaurants", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <div className="w-full bg-[#F6E9E1]">
        <div className="">
          <p className="text-center font-bold py-2">Restaurants</p>
        </div>
      </div>
      <div className="w-full h-screen">
        <div
          className="mt-2 flex flex-wrap py-4 md:px-48 gap-4"
        >
          {restaurantList.map((restaurant) => (
            <RestaurantsListCard
              key={restaurant.id}
              id={restaurant.id}
              Icon={restaurant.cover_img}
              Name={restaurant.title}
              Rating={restaurant.rating}
              Start_from={restaurant.uprice}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IMAGE_BASE_URL } from "@/utils/constant";

import RestaurantsListCard from "@/components/restaurant/RestaurantsListCard";

import { API_BASE_URL } from "@/utils/constant";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/restaurants`);
        const data = await response.json();

        const updatedData = data.map((item) => ({
          ...item,
          cover_img: `${IMAGE_BASE_URL}${
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

"use client";

import React, { useEffect, useState } from "react";
import FoodTypeCard from "./Custom/FoodTypeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import ShimmerMenu from "./shimmer/ShimmerMenu";
import { useRouter } from "next/navigation";

const CardComponent = () => {
  const [foodCardData, setFoodCardData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchFoodTypes = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/foodtype`);
        const data = await res.json();

        const updatedData = data.map((item) => ({
          ...item,
          img: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.img.startsWith("/") ? "" : "/"}${
            item.img
          }`,
        }));

        setFoodCardData(updatedData);
      } catch (error) {
        console.error("Failed to fetch food types:", error);
      }
    };

    fetchFoodTypes();
  }, []);

  return (
    <section className="w-full h-auto px-4 sm:px-10 md:px-16 lg:px-48 py-8 flex flex-col gap-5">
      <span className="flex justify-between items-center">
        <p className="text-sm md:text-lg font-bold">What's on Your Mind?</p>
        <Link href={"/categories"}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="text-2xl text-orange-600 rounded-full"
          />
        </Link>
      </span>

      <div className="flex space-x-2.5 md:space-x-0.5 overflow-x-auto no-scrollbar">
        {foodCardData.length > 0 ? (
          foodCardData.map((item) => (
            <FoodTypeCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
            />
          ))
        ) : (
          <ShimmerMenu CardsLength={foodCardData.length} />
        )}
      </div>
    </section>
  );
};

export default CardComponent;

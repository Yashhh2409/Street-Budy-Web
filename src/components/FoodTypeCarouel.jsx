"use client";
import React from "react";
import FoodTypeCard from "./Custom/FoodTypeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const foodCardData = [
  { id: "1", img: "/assets/foodTypes/American.png", title: "American" },
  { id: "2", img: "/assets/foodTypes/Bengali.png", title: "Bengali" },
  { id: "3", img: "/assets/foodTypes/caribbean.png", title: "Caribbean" },
  { id: "4", img: "/assets/foodTypes/FastFood.png", title: "Fast Food" },
  { id: "5", img: "/assets/foodTypes/French.png", title: "French" },
  { id: "6", img: "/assets/foodTypes/American.png", title: "American" },
  { id: "7", img: "/assets/foodTypes/Bengali.png", title: "Bengali" },
  { id: "8", img: "/assets/foodTypes/caribbean.png", title: "Caribbean" },
  { id: "9", img: "/assets/foodTypes/FastFood.png", title: "Fast Food" },
  { id: "10", img: "/assets/foodTypes/French.png", title: "French" },
];

const CardComponent = () => {
  return (
    <section className="w-full h-auto px-4 sm:px-10 md:px-16 lg:px-48 py-8 flex flex-col gap-5">
      <span className="flex justify-between items-center">
      <p className="text-sm md:text-lg font-bold">What's on Your Mind?</p>
      <FontAwesomeIcon icon={faArrowCircleRight} className="text-2xl text-orange-600 rounded-full"/>
      </span>
      <div className="flex space-x-2.5 md:space-x-0.5 overflow-x-auto no-scrollbar">
        {foodCardData.map((item) => (
          <FoodTypeCard key={item.id} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default CardComponent;

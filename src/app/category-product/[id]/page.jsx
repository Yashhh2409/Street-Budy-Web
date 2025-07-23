"use client";

import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import FoodItemsCard from "@/components/restaurant/FoodItemsCard";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const tabs = [
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Restaurant",
  },
];

const CategoryProduct = () => {
  const { id } = useParams();

  const [selectedTabs, setSelectedTabs] = useState("Food");

  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <div className="md:mx-48 bg-red-200">
        <div className="flex gap-4 p-4 font-semibold">
          {tabs.map((t) => (
            <div key={t.id}>
              <p
                onClick={() => setSelectedTabs(t.name)}
                className={` cursor-pointer ${
                  selectedTabs === t.name
                    ? "text-orange-500 border-b-3"
                    : "text-gray-800"
                }`}
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>

        <p>{`Category id:${id}`}</p>
        <div className="bg-amber-300 p-4 flex flex-wrap justify-start gap-4">
          <FoodItemsCard />
          <FoodItemsCard />
          <FoodItemsCard />
          <FoodItemsCard />
          <FoodItemsCard />
          <FoodItemsCard />
          <FoodItemsCard />
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;

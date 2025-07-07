"use client";

import FoodItemsCard from "@/components/restaurant/FoodItemsCard";
import {
  faChevronLeft,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState } from "react";
import FoodItems from "@/data/FoodItems";
import Link from "next/link";
import Image from "next/image";

const FilterMenus = [
  {
    id: "1",
    name: "All",
  },
  {
    id: "2",
    name: "Veg",
  },
  {
    id: "3",
    name: "Non-Veg",
  },
];

const SearchPage = ({ params }) => {
  const { id } = React.use(params);

  const [isfilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filterToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const filteredFoodItems = useMemo(() => {
    let filteredFoodItems = FoodItems;

    if (activeFilter === "Veg") {
      return filteredFoodItems.filter((item) => item.isVeg);
    } else if (activeFilter === "Non-Veg") {
      return filteredFoodItems.filter((item) => !item.isVeg);
    }

    if (searchQuery.trim() !== "") {
      filteredFoodItems = FoodItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredFoodItems;
  }, [activeFilter, searchQuery]);

  return (
    <div className="w-full h-">
      <div className="flex items-center py-4 px-4 justify-between border-b-[1px] border-gray-300">
        <Link href={`/restaurant/${id}`}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <div className="flex items-center gap-2">
          <span className="w-full flex items-center gap-2 border-[1px] border-orange-400 rounded-full px-2 py-1">
            <input
              type="text"
              placeholder="Search food in this restaurant"
              className="outline-none truncate px-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <FontAwesomeIcon
            icon={faFilter}
            onClick={filterToggle}
            className="border-2 border-orange-400 rounded-md text-gray-700 p-1"
          />
        </div>
      </div>

      <div className="p-2">
        <p className="font-bold">Popular Categories</p>
        <button className="border-[1px] rounded-md p-1 border-gray-400 mt-2">
          Italian
        </button>
      </div>

      {isfilterOpen && (
        <div className="absolute w-[120px] h-auto bg-white right-8 top-8 rounded-md shadow-md">
          <div className="my-2">
            {FilterMenus.map((menu) => (
              <div
                key={menu.id}
                onClick={() => {
                  setActiveFilter(menu.name);
                  setIsFilterOpen(false);
                }}
                className="flex font-bold items-center gap-2 bg-gray-200 p-2 justify-start px-4 hover:text-orange-400 transition-colors duration-300"
              >
                <input type="radio" />
                <p>{menu.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className=" w-full flex flex-wrap gap-4 my-4 px-2">
        {filteredFoodItems.length === 0 ? (
          
          <div className="w-screen h-[400px] flex items-center justify-center">
            <div className="w-[150px] h-[150px]">
            <Image src={"/assets/Restaurant/no-items-placeholder.png"} width={400} height={300} alt="Image" className="w-full h-full"/>
          </div>
          </div>
        ) : (
          filteredFoodItems.map((item) => (
            <FoodItemsCard
              key={item.id}
              menuName={item.name}
              restaurant={item.restaurant}
              originalPrice={item.originalPrice}
              Price={item.price}
              Img={item.image}
              isVeg={item.isVeg}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;

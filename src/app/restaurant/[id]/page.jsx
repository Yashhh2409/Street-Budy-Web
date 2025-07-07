"use client";
import React, { useMemo, useState } from "react";

import RestaurantsList from "@/data/RestaurantList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import {
  faBullhorn,
  faClock,
  faFilter,
  faHeart,
  faLocationDot,
  faSearch,
  faShareNodes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import RestaurantOfferCarousel from "@/components/restaurant/RestaurantOfferCarousel";
import CardsCarousel from "@/components/CardsCarousel";
import FoodItemsCard from "@/components/restaurant/FoodItemsCard";
import FoodItems from "@/data/FoodItems";
import useMediaQuery from "@/hooks/useMediaQuery";
import Footer from "@/components/Footer";
import MobileRestaurantDetailsBox from "@/components/restaurant/MobileRestaurantDetailsBox";
import DesktopRestaurantDetailsBox from "@/components/restaurant/DesktopRestaurantDetailsBox";

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

const Restaurant = ({ params }) => {
  const { id } = React.use(params);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const [isfilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filterToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const filteredFoodItems = useMemo(() => {
    // Filter by category
    let items = FoodItems;

    if (activeFilter === "Veg") {
      items = items.filter((item) => item.isVeg);
    } else if (activeFilter === "Non-Veg") {
      items = items.filter((item) => !item.isVeg);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  }, [activeFilter, searchQuery]);

  const restaurant = RestaurantsList.find((item) => item.id === id);

  if (!restaurant) return <h1>Not found</h1>;

  return (
    <div className="w-full h-full bg-red-400 md:px-48">
      <div className="bg-purple-400">
        <div
          style={{
            backgroundImage: `url(${restaurant.image})`,
            objectFit: "cover",
          }}
          className="relative w-full h-[250px] rounded-b-3xl flex justify-center"
        >
          {isMobile ? (
            <MobileRestaurantDetailsBox />
          ) : (
           <DesktopRestaurantDetailsBox RestaurantIcon={restaurant.icon} RestaurantName={restaurant.name} RestaurantAddress={restaurant.address} Restaurant_Start_From={restaurant.start_from} RestaurantDistance={restaurant.distance} RestaurantRating={restaurant.rating} Restaurant_Delevery_In={restaurant.delevery_in} />
          )}
        </div>

        <div className="w-full  mt-40 bg-green-400">
          <CardsCarousel />
        </div>

        {/* Filter menu section  */}
        <div className="relative w-full bg-white p-4">
          {isMobile ? (
            <div className="relative">
              <div className="flex justify-between">
                <p className="text-gray-800 font-bold">All Food Items</p>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/search-restaurant-item/${id}`}
                    className="border-2 px-2 rounded-md py-1 border-orange-400"
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-orange-400"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faFilter}
                    onClick={filterToggle}
                    className="border-2 p-2 rounded-md border-orange-400 text-orange-400 text-sm"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between">
              <p className="text-gray-800 font-bold">All Food Items</p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 border-2 px-2 rounded-full py-1 border-orange-400">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-orange-400"
                  />
                  <input
                    type="text"
                    placeholder="Search for your food"
                    className="outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </span>
                <FontAwesomeIcon
                  icon={faFilter}
                  onClick={filterToggle}
                  className="border-2 p-2 rounded-md border-orange-400 text-orange-400 text-sm"
                />
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button className="bg-orange-200 px-1 py-0.5 rounded-md">
              All
            </button>
            <button className="bg-orange-200 px-1 py-0.5 rounded-md">
              Italian
            </button>
          </div>

          <div className=" w-full flex flex-wrap gap-4 my-4">
            {filteredFoodItems.length === 0 ? (
              <div className="w-full flex items-center justify-center">
                <div className="w-[150px] h-[150px]">
                  <Image
                    src={"/assets/Restaurant/no-items-placeholder.png"}
                    width={400}
                    height={300}
                    alt="Image"
                    className="w-full h-full"
                  />
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Restaurant;

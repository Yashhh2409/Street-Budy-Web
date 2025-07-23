"use client";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import {
  faChevronLeft,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import CardsCarousel from "@/components/CardsCarousel";
import FoodItemsCard from "@/components/restaurant/FoodItemsCard";

import useMediaQuery from "@/hooks/useMediaQuery";
import MobileRestaurantDetailsBox from "@/components/restaurant/MobileRestaurantDetailsBox";
import DesktopRestaurantDetailsBox from "@/components/restaurant/DesktopRestaurantDetailsBox";
import { useMyAppContext } from "@/context/MyAppContext";

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
  const numId = parseInt(id, 10);

  const { restaurantList, mcatList, productList, productAttributes } =
    useMyAppContext();

  const isMobile = useMediaQuery("(max-width: 767px)");

  const [isfilterOpen, setIsFilterOpen] = useState(false);
  // const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileSearchOpen, setMobileSearch] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [restaurant, setRestaurant] = useState(null);
  const [maincats, setMainCats] = useState([]);
  const [subcats, setSubCats] = useState([]);
  const [productAttr, setProductAttr] = useState([]);
  const [selectedMcats, setSelectedMcats] = useState(null);

  const filterToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const MobileSearchToggle = () => {
    setMobileSearch((prev) => !prev);
  };

  const SpecificMenu =
    selectedMcats === null
      ? subcats
      : subcats.filter((item) => item.cat_id === selectedMcats);

  // restaurants
  useEffect(() => {
    if (restaurantList.length > 0) {
      const found = restaurantList.find((r) => r.id === numId);
      setRestaurant(found || null);
    }
  }, [restaurantList, numId]);

  // main cats
  useEffect(() => {
    if (mcatList.length > 0) {
      const mainCategories = mcatList.filter((c) => c.store_id === numId);
      setMainCats(mainCategories);
    }
  }, [mcatList, numId]);

  // sub cats
  useEffect(() => {
    const filteredSubCategories = async () => {
      try {
        const subcategories = await productList.filter(
          (p) => p.store_id === numId
        );

        setSubCats(subcategories);
      } catch (error) {
        console.error(error);
      }
    };

    filteredSubCategories();
  }, [productList, numId]);

  // Product attributes
  useEffect(() => {
    if (productAttributes.length > 0) {
      const found = productAttributes.filter((pa) => pa.store_id === numId);
      setProductAttr(found);
    }
  }, [productAttributes, numId]);

  const getProductData = (Pid) => {
    return productAttr.find((attr) => attr.product_id === Pid);
  };

  const searchFilter = subcats.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Price function
  const price = (Pid) => {
    const FoundProduct = productAttr.find((attr) => attr.product_id === Pid);

    if (FoundProduct) {
      const percent = (FoundProduct.normal_price * FoundProduct.discount) / 100;

      const Finalprice = Number(FoundProduct.normal_price) - percent;

      return Finalprice.toFixed(2);
    }
  };

  const discount = (Pid) => {
    const FoundProduct = productAttr.find((attr) => attr.product_id === Pid);

    if(FoundProduct) {
      const discount = FoundProduct.discount;
      return discount;
    }
  }

  const filteredFoodWithSearch = searchQuery ? searchFilter : SpecificMenu;
  
  if (!restaurant) return <h1>Not found</h1>;

  return (
    <div
      className={`w-full h-full ${
        isMobile ? "fixed inset-0 overflow-y-auto" : ""
      } md:px-48`}
    >
      <div className="bg-white">
        <div
          style={{
            backgroundImage: `url(${restaurant.rimg})`,
          }}
          className="relative w-full h-[250px] rounded-b-3xl flex justify-center bg-cover object-bottom"
        >
          {isMobile ? (
            <MobileRestaurantDetailsBox
              RestaurantIcon={restaurant.cover_img}
              RestaurantName={restaurant.title}
              RestaurantAddress={restaurant.full_address}
              Restaurant_Start_From={restaurant.start_from}
              Landmark={restaurant.landmark}
              RestaurantRating={restaurant.rate}
              Restaurant_Delevery_In={restaurant.ukm}
            />
          ) : (
            <DesktopRestaurantDetailsBox
              RestaurantIcon={restaurant.cover_img}
              RestaurantName={restaurant.title}
              RestaurantAddress={restaurant.full_address}
              Restaurant_Start_From={restaurant.start_from}
              Landmark={restaurant.landmark}
              RestaurantRating={restaurant.rate}
              Restaurant_Delevery_In={restaurant.ukm}
            />
          )}

          <Link
            href={"/"}
            className="absolute w-8 h-8 left-5 top-3 bg-orange-400 rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
          </Link>
        </div>

        <div className="w-full mt-40">
          <CardsCarousel />
        </div>

        {/* Filter menu section  */}
        <div className="relative w-full bg-white p-4">
          {isMobile ? (
            <div className="relative">
              <div className="flex justify-between">
                <p className="text-gray-800 font-bold">All Food Items</p>
                <div className="flex items-center gap-3">
                  <div
                    // href={`/search-restaurant-item/${id}`}
                    onClick={MobileSearchToggle}
                    className="border-2 px-2 rounded-md py-1 border-orange-400"
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-orange-400"
                    />
                  </div>
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

          {/* // main categories */}
          <div className="flex flex-wrap gap-2 mt-5">
            <button
              onClick={() => setSelectedMcats(null)}
              className={`${
                selectedMcats === null
                  ? "text-orange-400 font-bold bg-orange-100"
                  : ""
              } px-2 py-1 rounded-md text-sm text-gray-800 text-nowrap`}
            >
              All
            </button>

            {maincats.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedMcats(c.id)}
                className={`${
                  selectedMcats === c.id
                    ? "text-orange-400 font-bold bg-orange-100"
                    : ""
                } px-3 py-1 rounded-md text-sm text-gray-800 text-nowrap`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Sub categories */}
          <div className=" w-full flex flex-wrap gap-4 my-4">
            {filteredFoodWithSearch.length === 0 ? (
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
              filteredFoodWithSearch.map((item) => {
                const ProductData = getProductData(item.id);

                return (
                  <FoodItemsCard
                    key={item.id}
                    menuName={item.title}
                    restaurant={item.restaurant}
                    originalPrice={ProductData?.normal_price || 0}
                    Price={price(item.id)}
                    Img={item.img}
                    Discount={discount(item.id)}
                    isVeg={item.isVeg}
                  />
                );
              })
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

      {isMobileSearchOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 bg-white">
          {/* <MobileSearchBar id={id} filteredFoodWithSearch={filteredFoodWithSearch} maincats={maincats}/> */}

          <div className="flex items-center py-4 px-4 justify-between border-b-[1px] border-gray-300">
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
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

            {/* // main categories */}
            <div className="flex flex-wrap gap-2 mt-5">
              <button
                onClick={() => setSelectedMcats(null)}
                className={`${
                  selectedMcats === null
                    ? "text-orange-400 font-bold bg-orange-100"
                    : ""
                } px-2 py-1 rounded-md text-sm text-gray-800 text-nowrap`}
              >
                All
              </button>

              {maincats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedMcats(c.id)}
                  className={`${
                    selectedMcats === c.id
                      ? "text-orange-400 font-bold bg-orange-100"
                      : ""
                  } px-3 py-1 rounded-md text-sm text-gray-800 text-nowrap`}
                >
                  {c.title}
                </button>
              ))}
            </div>
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
            {filteredFoodWithSearch.length === 0 ? (
              <div className="w-screen h-[400px] flex items-center justify-center">
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
              filteredFoodWithSearch.map((item) => {
                const ProductData = getProductData(item.id);
                return (
                  <FoodItemsCard
                    key={item.id}
                    menuName={item.title}
                    restaurant={item.restaurant}
                    originalPrice={ProductData?.normal_price || 0}
                    Price={price(item.id)}
                    Img={item.img}
                    Discount={discount(item.id)}
                    isVeg={item.isVeg}
                  />
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;

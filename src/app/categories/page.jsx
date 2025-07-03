"use client";

import CategoriesCard from "@/components/categories/CategoriesCard";
import React, { useEffect, useState } from "react";

import { API_BASE_URL, IMAGE_BASE_URL } from "@/utils/constant";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Categories = () => {
  const [foodCardData, setFoodCardData] = useState([]);

  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    const fetchFoodTypes = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/restaurants`);
        const data = await res.json();

        const updatedData = data.map((item) => ({
          ...item,
          img: `${IMAGE_BASE_URL}${item.img.startsWith("/") ? "" : "/"}${
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

  console.log("Food card data : new hai bro", foodCardData);

  return (
    <div className="w-full flex flex-col gap-2 mt-6">
      {isMobile ? (
        <div className="flex items-center gap-4 px-4 w-full bg-[#F6E9E1]">
            <Link href={"/"} >
            <FontAwesomeIcon icon={faChevronLeft}/>
            </Link>
            <p className="w-full text-center py-3 font-bold">Categories</p>
        </div>
      ) : (
        <p className="text-center bg-[#F6E9E1] py-3 font-bold">Categories</p>
      )}
      <div className="md:px-48">
        <div className="flex gap-2 py-4 justify-center items-center flex-wrap">
          {foodCardData.map((card) => (
            <CategoriesCard Img={card.img} catName={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

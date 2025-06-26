"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const banners = [
  { id: "1", img: "/assets/OfferBanners/offerBanner1.png" },
  { id: "2", img: "/assets/OfferBanners/offerBanner2.png" },
  { id: "3", img: "/assets/OfferBanners/offerBanner3.png" },
  { id: "4", img: "/assets/OfferBanners/offerBanner4.png" },
  { id: "5", img: "/assets/OfferBanners/offerBanner5.png" },
];

const ITEMS_PER_PAGE = 3;

const OfferCarousel = () => {
  const [curr, setCurr] = useState(0);

  const next = () => {
    setCurr((prev) => (prev + ITEMS_PER_PAGE) % banners.length);
  };

  const prev = () => {
    setCurr((prev) =>
      prev - ITEMS_PER_PAGE < 0
        ? banners.length - ITEMS_PER_PAGE
        : prev - ITEMS_PER_PAGE
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer); 
  }, [curr]);

  // Get visible banners (loop if needed)
  const visibleBanners = [...banners, ...banners].slice(curr, curr + ITEMS_PER_PAGE);

  return (
    <div className="bg-[#171A29] text-white p-5 px-4 sm:px-10 lg:px-48">
      <div className="relative w-full h-[200px] overflow-hidden">
        <div className="flex space-x-3 transition-transform ease-in-out duration-300">
          {visibleBanners.map((banner, index) => (
            <div
              key={index}
              className="sm:w-1/3 md:w-2/3 lg:w-3/3 h-[200px] rounded-lg overflow-hidden"
            >
              <Image
                src={banner.img}
                alt={`Banner ${banner.id}`}
                width={500}
                height={200}
                priority 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
          <button
            onClick={prev}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
          <button
            onClick={next}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCarousel;

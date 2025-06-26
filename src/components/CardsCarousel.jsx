"use client";

import React from "react";
import Cards from "./Custom/Cards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import { Scrollbar } from "swiper/modules";

const cardData = [
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
];

const CardsCarousel = ({
  Img,
  Offer,
  Restaurant,
  Name,
  OriginalPrice,
  Price,
}) => {
  return (
    <div className="w-full sm:px-4 md:px-48 py-5">
      <div className="bg-[#F6EEE8] p-4">
        <div>
          <p className="text-orange-600 font-bold">Today's Trends</p>
          <p className="text-gray-500 text-sm">
            Here's what you might like to taste
          </p>
        </div>

        <Swiper
          scrollbar={{ hide: true }}
          slidesPerView={5}
          breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
          modules={[Scrollbar]}
          className="mySwiper my-5 flex flex-wrap space-x-4"
        >
          {cardData.map((item) => (
            <SwiperSlide className="px-2 mb-5">
              <Cards
                Img={item.Img}
                Offer={item.offerTag}
                Restaurant={item.RestaurantName}
                Name={item.name}
                OriginalPrice={item.originalPrice}
                Price={item.Price}
                isVeg={item.isVeg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardsCarousel;

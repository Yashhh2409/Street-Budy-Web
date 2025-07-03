"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import RestaurantOfferCard from "./RestaurantOfferCard";

const ReastaurantOffer = [
  {
    id: "1",
    offer: "50",
    start_date: "07 June, 2025",
    end_date: "01 December, 2025",
    min_purchase: "100",
    banner_img: "/assets/OfferBanners/Restaurant_offer.png",
  },
  {
    id: "2",
    offer: "10",
    start_date: "07 May, 2025",
    end_date: "02 July, 2025",
    min_purchase: "80",
    banner_img: "/assets/OfferBanners/Restaurant_offer.png",
  },
];

const RestaurantOfferCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {ReastaurantOffer.map((card) => (
          <SwiperSlide>
            <RestaurantOfferCard offer={card.offer} start_date={card.start_date} end_date={card.end_date} min_purchase={card.min_purchase} banner_img={card.banner_img}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RestaurantOfferCarousel;

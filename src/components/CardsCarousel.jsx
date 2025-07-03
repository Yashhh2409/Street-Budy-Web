"use client";

import React, { useState } from "react";
import Cards from "./Custom/Cards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import { Scrollbar } from "swiper/modules";
import Modal from "./Custom/Modal";

const cardData = [
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
  {
    name: "Pizza Carnival",
    RestaurantName: "Cheesy Restaurant",
    Img: "/assets/images/img-2.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "600",
    Price: "540",
    offerTag: "10% OFF",
    isVeg: true,
  },
  {
    name: "Burger Blast",
    RestaurantName: "Grill Master",
    Img: "/assets/images/img-3.png",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
    originalPrice: "350",
    Price: "280",
    offerTag: "20% OFF",
    isVeg: false,
  },
];

const CardsCarousel = () => {
  const [showModal, SetShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="w-full py-5">
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
              0: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
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
                  onClick={() => {
                    setSelectedCard(item);
                    SetShowModal(true);
                  }}
                  key={item.name}
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
      <Modal
        isVisible={showModal}
        onClose={() => SetShowModal(false)}
        data={selectedCard}
      />
    </>
  );
};

export default CardsCarousel;

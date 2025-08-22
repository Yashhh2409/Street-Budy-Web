"use client";

import React, { useContext, useEffect, useState } from "react";
import Cards from "./Custom/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Modal from "./Custom/Modal";
import useBodyScrollLock from "./Custom/useBodyScrollLock";
import { MyAppContext } from "@/context/MyAppContext";
import ProductDetailsModal from "./Custom/ProductDetailsModal";
import ShimmerMenu from "./shimmer/ShimmerMenu";

// const cardData = [
//   {
//     name: "Pizza Carnival",
//     RestaurantName: "Cheesy Restaurant",
//     Img: "/assets/images/img-2.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "600",
//     Price: "540",
//     offerTag: "10% OFF",
//     isVeg: true,
//   },
//   {
//     name: "Burger Blast",
//     RestaurantName: "Grill Master",
//     Img: "/assets/images/img-3.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "350",
//     Price: "280",
//     offerTag: "20% OFF",
//     isVeg: false,
//   },
//   {
//     name: "Pizza Carnival",
//     RestaurantName: "Cheesy Restaurant",
//     Img: "/assets/images/img-2.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "600",
//     Price: "540",
//     offerTag: "10% OFF",
//     isVeg: true,
//   },
//   {
//     name: "Burger Blast",
//     RestaurantName: "Grill Master",
//     Img: "/assets/images/img-3.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "350",
//     Price: "280",
//     offerTag: "20% OFF",
//     isVeg: false,
//   },
//   {
//     name: "Pizza Carnival",
//     RestaurantName: "Cheesy Restaurant",
//     Img: "/assets/images/img-2.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "600",
//     Price: "540",
//     offerTag: "10% OFF",
//     isVeg: true,
//   },
//   {
//     name: "Burger Blast",
//     RestaurantName: "Grill Master",
//     Img: "/assets/images/img-3.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "350",
//     Price: "280",
//     offerTag: "20% OFF",
//     isVeg: false,
//   },
//   {
//     name: "Pizza Carnival",
//     RestaurantName: "Cheesy Restaurant",
//     Img: "/assets/images/img-2.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "600",
//     Price: "540",
//     offerTag: "10% OFF",
//     isVeg: true,
//   },
//   {
//     name: "Burger Blast",
//     RestaurantName: "Grill Master",
//     Img: "/assets/images/img-3.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "350",
//     Price: "280",
//     offerTag: "20% OFF",
//     isVeg: false,
//   },
//   {
//     name: "Pizza Carnival",
//     RestaurantName: "Cheesy Restaurant",
//     Img: "/assets/images/img-2.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "600",
//     Price: "540",
//     offerTag: "10% OFF",
//     isVeg: true,
//   },
//   {
//     name: "Burger Blast",
//     RestaurantName: "Grill Master",
//     Img: "/assets/images/img-3.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "350",
//     Price: "280",
//     offerTag: "20% OFF",
//     isVeg: false,
//   },
//   {
//     name: "Pizza Carnival",
//     RestaurantName: "Cheesy Restaurant",
//     Img: "/assets/images/img-2.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "600",
//     Price: "540",
//     offerTag: "10% OFF",
//     isVeg: true,
//   },
//   {
//     name: "Burger Blast",
//     RestaurantName: "Grill Master",
//     Img: "/assets/images/img-3.png",
//     Description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius quibusdam assumenda perspiciatis, odio nisi nemo dolorem. Doloribus, nemo fugit?",
//     originalPrice: "350",
//     Price: "280",
//     offerTag: "20% OFF",
//     isVeg: false,
//   },
// ];

const CardsCarousel = () => {
  const { products, Currency, price } = useContext(MyAppContext);

  // const [products, setProducts] = useState([]);
  const [showModal, SetShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  console.log("all Products", products);
  console.log("Selected Cards", selectedCard);

  useBodyScrollLock(showModal);

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
            className="mySwiper my-5 flex space-x-4"
          >
            {products.length === 0 ? (
              <div className="flex w-full items-center ">
                <ShimmerMenu
                  cardsLength={15}
                  className="max-w-[200px] h-[280px]"
                  variant="swiper"
                />
              </div>
            ) : (
              products.map((item, i) => (
                <SwiperSlide key={i} className="px-2 mb-5 cursor-pointer">
                  <Cards
                    onClick={() => {
                      setSelectedCard(item); // full product object
                      SetShowModal(true);
                    }}
                    Img={item.img}
                    Offer={`${Currency} ${item.discount} OFF`}
                    Restaurant={item.store_name}
                    Name={item.product_name}
                    OriginalPrice={item.normal_price}
                    Price={price(item.id)}
                    isVeg={item.isVeg}
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
      <ProductDetailsModal
        isVisible={showModal}
        onClose={() => SetShowModal(false)}
        Item={selectedCard}
      />
      {/* <Modal
        isVisible={showModal}
        onClose={() => SetShowModal(false)}
        Item={selectedCard}
      /> */}
    </>
  );
};

export default CardsCarousel;

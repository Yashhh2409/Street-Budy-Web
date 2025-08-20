import React from "react";
import { SwiperSlide } from "swiper/react";

const ShimmerMenu = ({ cardsLength, className, variant = "flex" }) => {
  const shimmerCards = [];

  for (let i = 0; i < cardsLength; i++) {
    if (variant === "swiper") {
      shimmerCards.push(
      
      
        <SwiperSlide key={i} className="px-2 mb-5 flex items-center">
          <div
            className={`${className} bg-gray-300 rounded-md animate-pulse`}
          ></div>
        </SwiperSlide>
      );
    } else {
      shimmerCards.push(
        <div
          key={i}
          className={`${className} bg-gray-300 rounded-md animate-pulse`}
        ></div>
      );
    }
  }

  // Flex mode wraps inside a flex container
  return variant === "flex" ? (
    <div className="flex gap-2 md:gap-4">{shimmerCards}</div>
  ) : (
    <>{shimmerCards}</>
  );
};

export default ShimmerMenu;

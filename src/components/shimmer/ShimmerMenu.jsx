import React from "react";

const ShimmerMenu = ({ cardsLength = 12 }) => {
  const shimmerCards = [];

  for (let i = 0; i < cardsLength; i++) {
    shimmerCards.push(
      <div
        key={i}
        className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 rounded-md animate-pulse"
      ></div>
    );
  }

  return <div className="flex gap-2 md:gap-4">{shimmerCards}</div>;
};

export default ShimmerMenu;

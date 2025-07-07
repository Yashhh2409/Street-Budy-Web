import CuisineSlider from "@/components/CuisineSlider";
import CuisineCard from "@/components/Custom/CuisineCard";
import React from "react";

import cuisinesData from "@/data/CuisinesList";

const cuisines = () => {
  return (
    <>
      <div className="w-full bg-[#F6E9E1]">
        <div className="">
          <p className="text-center font-bold py-2">Cuisines</p>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="mt-2 flex flex-wrap py-4 md:px-48">
        {cuisinesData.map((cuisine) => (
          <CuisineCard key={cuisine.id} Img={cuisine.img} Name={cuisine.name} />
        ))}
      </div>
      </div>
    </>
  );
};

export default cuisines;

import React from "react";
import CuisineCard from "./Custom/CuisineCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cuisinesData = [
  {
    id: "1",
    name: "Bengali",
    img: "/assets/Cuisines/cuisine-1.png",
  },
  {
    id: "2",
    name: "Indian",
    img: "/assets/Cuisines/cuisine-2.png",
  },
  {
    id: "3",
    name: "Bengali",
    img: "/assets/Cuisines/cuisine-1.png",
  },
  {
    id: "4",
    name: "Indian",
    img: "/assets/Cuisines/cuisine-2.png",
  },
  {
    id: "5",
    name: "Bengali",
    img: "/assets/Cuisines/cuisine-1.png",
  },
  {
    id: "6",
    name: "Indian",
    img: "/assets/Cuisines/cuisine-2.png",
  },
  {
    id: "7",
    name: "Bengali",
    img: "/assets/Cuisines/cuisine-1.png",
  },
  {
    id: "8",
    name: "Indian",
    img: "/assets/Cuisines/cuisine-2.png",
  },
  {
    id: "9",
    name: "Bengali",
    img: "/assets/Cuisines/cuisine-1.png",
  },
  {
    id: "10",
    name: "Indian",
    img: "/assets/Cuisines/cuisine-2.png",
  },

  {
    id: "11",
    name: "Bengali",
    img: "/assets/Cuisines/cuisine-1.png",
  },
  {
    id: "12",
    name: "Indian",
    img: "/assets/Cuisines/cuisine-2.png",
  },
];

const CuisineSlider = () => {

 
  return (
    <div className="w-full md:px-48 my-4">
      <div className="w-full bg-[#F7DFCC] py-4">

      
        <div className="flex justify-between p-3">
          <p className="text-md font-bold">Cuisines</p>
          <div className="w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500">
            <FontAwesomeIcon icon={faAngleRight}/>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap items-center justify-start mb-4">
          {cuisinesData.slice(0, 7).map((cuisine) => (
            <CuisineCard
              key={cuisine.id}
              Img={cuisine.img}
              Name={cuisine.name}
            />
          ))}
      </div>

      </div>
    </div>
  );
};

export default CuisineSlider;

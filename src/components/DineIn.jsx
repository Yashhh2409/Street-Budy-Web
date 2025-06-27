"use client";

import React from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faRoute,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import DineinCard from "./Custom/DineinCard";
import useMediaQuery from "@/hooks/useMediaQuery";

const DineinCards = [
  {
    id: "1",
    name: "Hungry Puppets",
    address: "House: 00, Road: 00 jygcuyuhbukb",
    icon: "/assets/Restaurant/icon-1.png",
    rating: "4.7",
    distance: "100+ km",
  },
  {
    id: "2",
    name: "Chaat Junction",
    address: "House: 12, Road: 45, Near City Park",
    icon: "/assets/Restaurant/icon-2.png",
    rating: "4.5",
    distance: "2.4 km",
  },
  {
    id: "3",
    name: "Hungry Puppets",
    address: "House: 00, Road: 00 jygcuyuhbukb",
    icon: "/assets/Restaurant/icon-1.png",
    rating: "4.7",
    distance: "100+ km",
  },
  {
    id: "4",
    name: "Chaat Junction",
    address: "House: 12, Road: 45, Near City Park",
    icon: "/assets/Restaurant/icon-2.png",
    rating: "4.5",
    distance: "2.4 km",
  },
];

const DineIn = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <div className="w-full px-4 md:px-48">
        <div className="bg-[#F7DFCC] rounded-lg px-5 md:p-5">
          <div className="flex items-center justify-between">
            <div className="w-[100px] md:w-[200px] p-2">
              <Image
                src={"/assets/dinein-illusion.png"}
                alt="img"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold hidden md:block">Want to Dine In?</p>
              <div className="hidden md:flex  gap-2">
                {DineinCards.slice(0, 3).map((card) => (
                  <DineinCard
                  key={card.id}
                    Img={card.icon}
                    Name={card.name}
                    Address={card.address}
                    Rating={card.rating}
                    Distance={card.distance}
                  />
                ))}
              </div>
            </div>

            {isMobile ? (
              <div className="min-w-[160px] text-white font-bold md:w-[150px] my-4 flex flex-col items-center justify-center self-end space-x-4">
                <p className="text-black">Want to Dine In?</p>
                <button className="bg-orange-500 text-sm  px-2 py-0.5 rounded-md">View Restaurants</button>
              </div>
            ) : (
              <div className="w-[120px] md:w-[150px] m-2 flex items-center justify-center space-x-4">
                <p className="font-bold block md:hidden">Want to Dine In?</p>
                <p className="font-bold">View All</p>
                <div className="border-2 rounded-full w-8 h-8 border-orange-400 flex items-center justify-center bg-white">
                  <FontAwesomeIcon
                  icon={faChevronRight}
                  className=" text-orange-400 rounded-full"
                />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DineIn;

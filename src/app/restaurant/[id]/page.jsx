import React from "react";

import RestaurantsList from "@/data/RestaurantList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faClock,
  faHeart,
  faLocationDot,
  faShareNodes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import RestaurantOfferCarousel from "@/components/restaurant/RestaurantOfferCarousel";
import CardsCarousel from "@/components/CardsCarousel";

const Restaurant = ({ params }) => {
  const { id } = params;

  const restaurant = RestaurantsList.find((item) => item.id === id);

  if (!restaurant) return <h1>Not found</h1>;

  return (
    <div className="w-full h-full bg-red-400 md:px-48">
      <div className="bg-purple-400">
        <div
          style={{
            backgroundImage: `url(${restaurant.image})`,
            objectFit: "cover",
          }}
          className="relative w-full h-[250px] rounded-b-3xl flex justify-center"
        >
          <div className="absolute w-[90%] md:w-[97%] md:h-[230px] bg-white -bottom-36 rounded-md overflow-hidden">
            <div className="w-full bg-green-700 text-white font-bold rounded-t-md p-2 flex items-center justify-end gap-3">
              <FontAwesomeIcon
                icon={faBullhorn}
                className="text-2xl -rotate-25"
              />

              <div className="relative w-[75%] place-self-end overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                  <p className="mr-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium tempora ipsum, omnis explicabo optio nostrum non
                    error eaque libero excepturi consequuntur asperiores natus
                    dolorum fuga. Ea debitis sit ullam sapiente?
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute w-[80px] md:w-[200px] h-[80px] md:h-[200px] bg-red-500 rounded-full overflow-hidden shadow-xl border-[2px] border-orange-400 top-2 left-10">
              <Image
                src={restaurant.icon}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-full hover:scale-125 transition-transform duration-300"
              />
            </div>

            <div className="w-full md:w-[77%] place-self-end flex flex-col md:flex-row gap-2 p-2">
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-800 font-bold">{restaurant.name}</p>
                    <p className="text-gray-500">{restaurant.address}</p>
                    <p className="text-gray-500">
                      Start from: ₹ {restaurant.start_from}
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 text-gray-500 text-xl">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareNodes} />
                  </div>
                </div>

                <div className="w-full flex items-center justify-evenly mt-6">
                  <div className="flex flex-col items-center justify-center gap-1 text-md place-self-end">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-orange-400 text-xl"
                    />
                    <p>{restaurant.delevery_in}</p>
                  </div>

                  <div className=" flex flex-col items-center justify-center gap-1 text-md place-self-end">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-orange-400 text-xl"
                    />
                    <p>{restaurant.distance}</p>
                  </div>

                  <div className=" flex flex-col items-center justify-center gap-1 text-md place-self-end">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-orange-400 text-xl"
                    />
                    <p>{restaurant.rating}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <RestaurantOfferCarousel />
              </div>
            </div>
          </div>
        </div>

      <div className="w-full  mt-40 bg-green-400">
        <CardsCarousel />
      </div>
      </div>
    </div>
  );
};

export default Restaurant;

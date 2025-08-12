import React from "react";
import CardComponent from "./FoodTypeCarouel";
import OfferCarousel from "./OfferCarousel";
import CardsCarousel from "./CardsCarousel";
import DineIn from "./DineIn";
import CuisineSlider from "./CuisineSlider";
import RestaurantCardSlider from "./RestaurantCardSlider";
import NewRestaurants from "./NewRestaurants";
import AdBanner from "./AdBanner";
import AllRestaurantsList from "./AllRestaurantsList";
import Footer from "./Footer";

const DesktopPage = () => {
  return (
    <div className="mt-30">
      {/* <DesktopHeader /> */}
      <div>
        <CardComponent />
        <OfferCarousel />
        <div className="md:px-48">
          <CardsCarousel />
        </div>
        <DineIn />

        <div className="md:px-48 my-4">
          <CuisineSlider />
        </div>
        <RestaurantCardSlider />
        <NewRestaurants />
        <AdBanner />
        <AllRestaurantsList />
      </div>
      <Footer />
    </div>
  );
};

export default DesktopPage;

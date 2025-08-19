import React, { useContext, useState } from "react";
import MobileHeader from "./MobileHeader";
import MobileMenuBar from "./Custom/MobileMenuBar";
import CardComponent from "./FoodTypeCarouel";
import OfferCarousel from "./OfferCarousel";
import CardsCarousel from "./CardsCarousel";
import DineIn from "./DineIn";
import CuisineSlider from "./CuisineSlider";
import RestaurantCardSlider from "./RestaurantCardSlider";
import NewRestaurants from "./NewRestaurants";
import AdBanner from "./AdBanner";
import AllRestaurantsList from "./AllRestaurantsList";
import useMediaQuery from "@/hooks/useMediaQuery";
import PopupNotification from "./Custom/PopupNotification";
import GuestUser from "./MobileComps/GuestUser";
import AppDownloadBar from "./Custom/AppDownloadBar";
import { MyAppContext } from "@/context/MyAppContext";

const MobilePage = () => {
  const [screen, setScreen] = useState("home");

    const {showBar} = useContext(MyAppContext);
  

  // const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="">
      {screen === "home" && (
        <>

          <div className={`block md:hidden ${showBar ? "pb-38" : "pb-24"} `}>
            <AppDownloadBar />
            <MobileHeader />
          </div>


          <div className="pb-20">
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
        </>
      )}

      {screen === "orders" && (
        
          <div>
            <AppDownloadBar />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quos recusandae earum accusamus, suscipit ratione in alias perspiciatis aliquid, ex itaque quis obcaecati unde esse error blanditiis officiis corporis voluptas ab explicabo fugiat. Non omnis iusto, sint suscipit amet mollitia? Cumque expedita cum ducimus libero repellendus quam? Sint, magni tempora! Perferendis laudantium id porro voluptas maiores? Sunt cupiditate quaerat qui laborum ut! Nihil maiores est ducimus minus sapiente, voluptate tempora iure fuga eaque commodi, harum ratione officiis dolorum placeat ad earum esse quae totam voluptas repudiandae consequuntur possimus quam consectetur. Quos, rerum dolorem cupiditate ullam, non est dolores sequi reiciendis iusto laboriosam eius vitae repellendus quidem consectetur. At unde iste nihil nisi aliquid, dignissimos inventore impedit ad eum atque et, saepe culpa nulla! Laborum error, iure a, perspiciatis eum ab dolor cupiditate odit consectetur vitae neque sed esse blanditiis magni accusantium distinctio tenetur unde exercitationem. Suscipit accusamus eum optio provident.</p>
          </div>
      )}
      {screen === "wishlist" && <div className="p-5">Wishlist Screen</div>}
      {screen === "cart" && <div className="p-5">Cart Screen</div>}
      {screen === "menu" && (
        <div>
          <GuestUser />
        </div>
      )}

      <MobileMenuBar active={screen} onScreenChange={setScreen} />

      {/* {isMobile && <PopupNotification />} */}
    </div>
  );
};

export default MobilePage;

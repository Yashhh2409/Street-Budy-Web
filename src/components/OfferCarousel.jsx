"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";

const banners = [
  { id: "1", img: "/assets/OfferBanners/offerBanner1.png" },
  { id: "2", img: "/assets/OfferBanners/offerBanner2.png" },
  { id: "3", img: "/assets/OfferBanners/offerBanner3.png" },
  { id: "4", img: "/assets/OfferBanners/offerBanner4.png" },
  { id: "5", img: "/assets/OfferBanners/offerBanner5.png" },
];

// useEffect(() => {
//   const bannerList = fetch()
// }, [])

const OfferCarousel = () => {
  return (
    <section className="bg-[#171A29] text-white px-4 sm:px-10 lg:px-48 py-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="h-[200px] w-full rounded-lg overflow-hidden">
              <Image
                src={banner.img}
                alt={`Banner ${banner.id}`}
                width={600}
                height={200}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OfferCarousel;

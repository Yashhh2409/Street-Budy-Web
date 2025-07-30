import React, { useContext } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { MyAppContext } from "@/context/MyAppContext";

const RestaurantOfferCard = ({
  offer,
  start_date,
  end_date,
  min_purchase,
  banner_img,
}) => {


  const {Currency} = useContext(MyAppContext);

  return (
    <div className="w-full h-[100px] bg-[#FFF1E7] rounded-md flex justify-between p-2">
      <div>
        <span className="flex items-center gap-1">
          <p className="font-bold">"${offer}% Off"</p>
          <FontAwesomeIcon icon={faCopy} />
        </span>
        <p className="text-gray-500 text-sm">
          {start_date} to {end_date}
        </p>
        <p className="text-gray-500 text-sm">
          Min Purchase {Currency}
          {min_purchase}
        </p>
      </div>
      <div className="w-[80px] h-[80px] bg-yellow-300 rounded-full flex items-end justify-end">
        <Image
          src={banner_img}
          width={50}
          height={50}
          alt="img"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default RestaurantOfferCard;

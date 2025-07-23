import React from "react";
import Image from "next/image";
import Link from "next/link";

const FoodTypeCard = ({id, img, title }) => {


  return (
    <Link href={`/category-product/${id}`} className="w-auto sm:p-2 md:p-2 flex flex-col gap-2 md:gap-4 items-center hover:bg-gray-300/25 rounded-md group">
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-md overflow-hidden">
        <Image
          src={img}
          width={96}
          height={96}
          alt={title}
          className="w-full h-full rounded-md border-2 border-gray-300 transition-transform duration-500 group-hover:scale-125 object-cover"
        />
      </div>
      <p className="w-16 md:w-24 text-center text-nowrap truncate text-[12px] md:text-[15px] capitalize">
        {title}
      </p>
    </Link>
  );
};

export default FoodTypeCard;

import Link from "next/link";
import React from "react";

const CardForSlider = ({ item }: any) => {
  // console.log(item.images);

  return (
    <div className="bg-white  rounded-lg p-2 flex flex-col gap-2 w-48 h-56 relative justify-center items-center">
      <div className="absolute rounded-full -top-20 left-3  w-[10.5rem] shadow-xl">
        <Link href={`SingleProduct/${item._id}`}>
          <img
            src={`${process.env.BASE_IMAGE_URL}${item.images[0]}`}
            alt=""
            className="rounded-full w-[11rem]"
          />
        </Link>
      </div>
      <div className="px-2 pt-24 flex flex-col text-center gap-2 pb-6">
        <h2 className="text-xs">{item.name}</h2>
        <h2 className="text-sm">{item.brand}</h2>
      </div>
      <div className="flex justify-center px-4">
        <h2 className="text-xs">
          <span className="text-meBlueText">{item.price} </span>
          <span className="text-gray-600 font-light">تومان</span>
        </h2>
      </div>
    </div>
  );
};

export default CardForSlider;

import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/Md";
import CardForSlider from "./CardForSlider";

const CardSlider = () => {
  return (
    <div className=" w-full p-4 flex bg-neutral-200 my-4 shadow-md" dir="rtl">
      <div className="flex flex-col p-8 gap-32 items-center">
        <h1 className="font-semibold text-xl">مردانه</h1>
        <button className="border border-black p-2 bg-neutral-200 hover:bg-neutral-800 hover:text-white">
          مشاهده همه
        </button>
      </div>
      <div className="flex gap-4">
        <CardForSlider />
        <CardForSlider />
        <CardForSlider />
        <CardForSlider />
      </div>
    </div>
  );
};

export default CardSlider;

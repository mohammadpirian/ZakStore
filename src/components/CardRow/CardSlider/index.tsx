import React from "react";
import CardForSlider from "../CardForSlider";

const CardSlider = () => {
  return (
    <div
      className=" w-full p-4 flex bg-meWhite my-4 shadow-md container"
      dir="rtl"
    >
      <div className="flex flex-col p-8 gap-32 items-center">
        <h1 className="font-semibold text-xl">مردانه</h1>
        <button className="border border-black p-2 bg-meWhite hover:bg-meBlack2 hover:text-meWhite">
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

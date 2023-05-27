import React from "react";
import CardForSlider from "./CardForSlider";

const CardSlider = () => {
  return (
    <div className=" w-full p-4 flex bg-neutral-200" dir="rtl">
      <div className="flex flex-col p-4 gap-32 items-center">
        <h1>زنانه</h1>
        <button>مشاهده همه</button>
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

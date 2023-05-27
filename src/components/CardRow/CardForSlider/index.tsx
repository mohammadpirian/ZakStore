import React from "react";

const CardForSlider = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 flex flex-col gap-2 w-80">
      <div className="relative">
        <img src="./images/products/1.jpg" alt="" className="rounded-lg" />
        <p className="absolute top-3 right-4">مردانه</p>
      </div>
      <div className="px-4 flex pb-6">
        <h2 className="font-semibold">پلیور مردانه کروم مدل یقه اسکی</h2>
      </div>
      <div className="flex justify-end px-4">
        <h2>
          <span className="font-medium">1,144,500 </span>
          <span className="text-gray-600 font-light">تومان</span>
        </h2>
      </div>
    </div>
  );
};

export default CardForSlider;

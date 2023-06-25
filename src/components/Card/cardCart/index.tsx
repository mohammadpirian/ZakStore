import React from "react";

const CardCart = () => {
  return (
    <div className="bg-white p-4 flex rounded-xl justify-between">
      <div className="flex">
        <div className="w-60 p-4 border-2 rounded-xl">
          <img src="./images/products/man/shirt/1-1.jpg" alt="" />
        </div>
        <div className="py-2 px-4 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium">پیراهن مدل mx-7921</h2>
            <div>
              <p className="text-sm text-meHalfBlack">مردانه | پیراهن</p>
              <p className="text-sm text-meHalfBlack">هاکوپیان</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-meHalfBlack">هاکوپیان کلوز</p>
            <p className="text-xs text-meHalfBlack">ارسال زاک استور</p>
            <p className="text-xs text-meHalfBlack">ارسال فوری (شهر تهران)</p>
          </div>
          <p className="text-sm text-meHalfBlack">320000 تومان</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button className=" w-6 h-6">
          <img src="/images/icon/close3.png" alt="" />
        </button>
        <div>
          <p className="text-sm text-meHalfBlack">
            سفارش شما : <span>25</span>
          </p>
          <p className="text-sm text-meHalfBlack">
            مجموع مبلغ : <span>2500000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCart;

// گارانتی 18 ماهه وی دو سل
// موجود در انبار دیجی‌کالا
// ارسال دیجی‌کالا

// ارسال فوری (شهر تهران)

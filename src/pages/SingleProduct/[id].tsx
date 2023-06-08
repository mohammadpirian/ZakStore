import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const SingleProduct = () => {
  const fetchData = async (url: string) => {
    const response = await request.get(url);
    return response.data.data;
  };
  const router = useRouter();
  // console.log(router.query.id);
  const {
    data: dataProduct,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: errorProduct,
  } = useQuery(["dataProduct"], () =>
    fetchData(`/products/${router.query.id}`)
  );

  if (isLoadingProduct) {
    return <div>Loading</div>;
  }
  // console.log(dataProduct);

  return (
    <div className="pt-16 flex p-8 bg-meMain" dir="rtl">
      <div className=" mt-8">
        <img
          src={dataProduct?.product?.images[0]}
          alt=""
          className="w-[32rem] shadow-xl"
        />
      </div>
      <div className="pt-10 px-10 flex flex-col gap-2">
        <p className="text-meBlueText py-4 text-sm">
          {dataProduct?.product.category.name} /
          {dataProduct?.product.subcategory.name}
        </p>
        <h1 className="text-2xl">{dataProduct?.product.name}</h1>
        <p className="text-meHalfBlack mt-4 text-sm">
          برند : {dataProduct?.product.brand}
        </p>
        <p className="text-meHalfBlack text-sm">
          ویژگی : {dataProduct?.product.description}
        </p>
        <p className="mt-4">رنگ بندی :</p>
        <div className="flex gap-2 mt-2">
          <div className="w-6 h-6 shadow-xl rounded-full bg-gray-600"></div>
          <div className="w-6 h-6 shadow-xl rounded-full bg-emerald-600"></div>
          <div className="w-6 h-6 shadow-xl rounded-full bg-orange-600"></div>
          <div className="w-6 h-6 shadow-xl rounded-full bg-white"></div>
        </div>
        <div className="flex mt-6 gap-8 h-24 bg-meWhite justify-center rounded-xl p-4">
          <div className="flex flex-col items-center">
            <img
              src="/images/icon/express-delivery.svg"
              alt=""
              className="w-10"
            />
            <p className="text-xs">امکان تحویل اکسپرس</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/icon/support.svg" alt="" className="w-10" />
            <p className="text-xs">24 ساعته ، 7 روز هفته</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/icon/cash-on-delivery.svg"
              alt=""
              className="w-10"
            />
            <p className="text-xs">امکان پرداخت در محل</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/icon/days-return.svg" alt="" className="w-10" />
            <p className="text-xs">هفت روز ضمانت بازگشت کالا</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/icon/original-products.svg"
              alt=""
              className="w-10"
            />
            <p className="text-xs"> ضمانت اصل بودن کالا</p>
          </div>
        </div>
        <div className="border-t border-meButtonBlack py-4 mt-4">
          <p className="text-xs px-8">
            امکان برگشت کالا در گروه لباس با دلیل "انصراف از خرید" تنها در صورتی
            مورد قبول است که پلمب کالا باز نشده باشد. تمام لباس‌های زاک استور
            ضمانت اورجینال دارند. در صورت وجود مشکل اورجینال، می‌توانید بعد از
            مهلت قانونی ۳۰ روزه، لباس خریداری‌شده را مرجوع کنید.
          </p>
        </div>
      </div>
      <div className="bg-meWhite flex flex-col p-8 rounded-xl h-[28rem] w-96">
        <h2>فروشنده</h2>
        <div className="flex gap-4 border-b py-2 border-meButtonBlack">
          <img src="/images/logo/logo2.png" alt="" className="w-7" />
          <p className="font-semibold">زاک استور</p>
        </div>
        <div className="flex gap-4 border-b py-2 border-meButtonBlack">
          <img src="/images/logo/logo2.png" alt="" className="w-7" />
          <p className="text-sm">ماریا کلوز</p>
        </div>
        <div className="flex flex-col gap-2 border-b py-2 border-meButtonBlack">
          <p className="text-sm font-semibold">موجود در انبار زاک استور</p>
          <p className="text-xs text-meBlueText">
            {dataProduct?.product.quantity} عدد در انبار زاک استور
          </p>
          <p className="text-xs">ارسال زاک استور تراک</p>
          <p className="text-xs">ارسال فوری (شهر تهران)</p>
        </div>
        <div className="flex flex-col gap-16 py-4">
          <p className="flex gap-2 text-xs items-center">
            قیمت محصول :
            <span className="text-base mr-6">{dataProduct?.product.price}</span>{" "}
            <span>تومان</span>
          </p>
          <button className="p-2 bg-meRedBtn text-white rounded-lg">
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

import useGetProductById from "@/hooks/useGetProductById";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useDispatch, useSelector } from "react-redux";
import { handeleAddTOCart, handeleEmptyCart } from "@/Redux/slices/cartSlices";

type RouterId = string | undefined;

const SingleProduct = () => {
  // const fetchData = async (url: string) => {
  //   const response = await request.get(url);
  //   return response.data.data;
  // };
  const cart = useSelector((state) => state.cart.CartProducts);
  console.log(cart);
  const dispatch = useDispatch();

  const router = useRouter();
  const [orderQuantity, setOrderQuantity] = useState(1);

  // console.log(router.query.id);

  // const {
  //   data: dataProduct,
  //   isLoading: isLoadingProduct,
  //   isError: isErrorProduct,
  //   error: errorProduct,
  // } = useQuery(
  //   ["dataProduct", router.query.id],
  //   () => fetchData(`/products/${router.query.id}`),
  //   { enabled: !!router.query.id }
  // );

  const {
    data: product,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: errorProduct,
  } = useGetProductById(router.query.id as RouterId);

  // console.log(router.query);

  if (isLoadingProduct) {
    return (
      <div className="p-40 flex justify-center items-center">Loading...</div>
    );
  }
  // console.log(product?.product.images[0]);

  return (
    <div className="pt-16 flex p-8 bg-meMain" dir="rtl">
      <div className=" mt-8 w-[30%]">
        <Splide dir="ltr">
          {product?.product?.images.map((item: string) => {
            // console.log(item);
            return (
              <SplideSlide key={item}>
                <img
                  src={`${process.env.BASE_IMAGE_URL}${item}`}
                  alt={item}
                  className="w-[32rem] shadow-xl"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="pt-10 px-10 w-[53%] flex flex-col gap-2">
        <p className="text-meBlueText py-4 text-sm">
          {product?.product?.category.name} /
          {product?.product?.subcategory.name}
        </p>
        <h1 className="text-2xl">{product?.product.name}</h1>
        <p className="text-meHalfBlack mt-4 text-sm">
          برند : {product?.product.brand}
        </p>
        <p className=" text-meHalfBlack text-sm">رنگ بندی :</p>
        <div className="flex gap-2 mt-2">
          <div className="w-6 h-6 shadow-xl rounded-full bg-gray-600 border-2"></div>
          <div className="w-6 h-6 shadow-xl rounded-full bg-emerald-600 border-2"></div>
          <div className="w-6 h-6 shadow-xl rounded-full bg-orange-600 border-2"></div>
          <div className="w-6 h-6 shadow-xl rounded-full bg-white border-2"></div>
        </div>
        <p className="text-meHalfBlack text-sm mt-6">
          <span className="text-base text-black ">توضیحات</span> :{" "}
          {product?.product.description}
        </p>

        <div className="flex mt-6 gap-10 h-24 bg-meWhite justify-center rounded-xl p-4">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/icon/express-delivery.svg"
              alt=""
              className="w-10"
            />
            <p className="text-[10px]">امکان تحویل اکسپرس</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/images/icon/support.svg" alt="" className="w-10" />
            <p className="text-[10px]">24 ساعته ، 7 روز هفته</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/icon/cash-on-delivery.svg"
              alt=""
              className="w-10"
            />
            <p className="text-[10px]">امکان پرداخت در محل</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/images/icon/days-return.svg" alt="" className="w-10" />
            <p className="text-[10px]">هفت روز ضمانت بازگشت کالا</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/icon/original-products.svg"
              alt=""
              className="w-10"
            />
            <p className="text-[10px]"> ضمانت اصل بودن کالا</p>
          </div>
        </div>
        <div className="border-t border-meButtonBlack py-4 mt-4">
          <p className="text-xs px-8">
            امکان برگشت کالا در گروه لباس با دلیل انصراف از خرید تنها در صورتی
            مورد قبول است که پلمب کالا باز نشده باشد. تمام لباس‌های زاک استور
            ضمانت اورجینال دارند. در صورت وجود مشکل اورجینال، می‌توانید بعد از
            مهلت قانونی ۳۰ روزه، لباس خریداری‌شده را مرجوع کنید.
          </p>
        </div>
      </div>
      <div className="bg-meWhite flex w-[17%] flex-col p-8 rounded-xl h-[28rem] w-96">
        <h2>فروشنده</h2>
        <div className="flex gap-4 border-b py-2 border-meButtonBlack">
          <img src="/images/logo/logo2.png" alt="" className="w-7" />
          <p className="font-semibold">زاک استور</p>
        </div>
        <div className="flex gap-4 border-b py-2 border-meButtonBlack">
          <img src="/images/logo/logo2.png" alt="" className="w-7" />
          <p className="text-sm">{product?.product.brand} کلوز</p>
        </div>
        <div className="flex flex-col gap-2 border-b py-2 border-meButtonBlack">
          <p className="text-sm font-semibold">موجود در انبار زاک استور</p>
          <p className="text-xs text-meBlueText">
            {product?.product.quantity} عدد در انبار زاک استور
          </p>
          <p className="text-xs">ارسال زاک استور تراک</p>
          <p className="text-xs">ارسال فوری (شهر تهران)</p>
        </div>
        <div className="flex flex-col gap-10 py-4">
          <p className="flex gap-1 text-xs ">
            قیمت محصول :
            <span className="text-sm mr-6 text-meBlueText">
              {product?.product.price}
            </span>{" "}
            <span>تومان</span>
          </p>
          <div className="flex justify-between items-center gap-2">
            <p className="text-xs">اضافه به سبد شما :</p>
            <button
              className="w-6 flex justify-center items-center h-6 bg-meRedBtn hover:bg-red-500 text-white rounded-md"
              onClick={() =>
                orderQuantity < product?.product.quantity &&
                setOrderQuantity(orderQuantity + 1)
              }
            >
              +
            </button>
            <p className="text-xs">{orderQuantity}</p>
            <button
              className="w-6 flex justify-center items-center h-6 bg-meRedBtn hover:bg-red-500 text-white rounded-md"
              onClick={() =>
                orderQuantity > 1 && setOrderQuantity(orderQuantity - 1)
              }
            >
              -
            </button>
          </div>
          <button
            className="p-2 bg-meRedBtn hover:bg-red-500 text-white rounded-lg"
            onClick={() => {

              dispatch(
                handeleAddTOCart({
                  ...product?.product,
                  orderQuantity,
                })
              );
            }}
          >
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

import React from "react";
import CardForSlider from "../CardForSlider";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

const CardSlider = ({ item }: any) => {
  const {
    data: dataProduct,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: errorProduct,
  } = useQuery([item._id], () =>
    fetchData(`/products?page=1&limit=4&category=${item._id}`)
  );

  if (isLoadingProduct) {
    return <div>Loading...</div>;
  }

  // console.log(item);
  if (dataProduct?.products.length > 0) {
    return (
      <div className="w-full flex flex-col justify-center gap-16 items-center">
        <img src="/images/utils/line.png" alt="" className="h-1" />
        <div
          className=" w-full p-4 flex  my-4 items-center container"
          dir="rtl"
        >
          <div className="flex flex-col px-32 gap-20 items-center">
            <h1 className="text-xl">{item.name}</h1>
            <button className="border border-black p-2 bg-meWhite hover:bg-meBlack2 hover:text-meWhite">
              مشاهده همه
            </button>
          </div>
          <div className="flex gap-8 p-8">
            {dataProduct?.products.map((item) => {
              return <CardForSlider key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default CardSlider;

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
    <div className="pt-16 flex p-8" dir="rtl">
      <div>
        <img src={dataProduct?.product.images[0]} alt="" className="w-96" />
      </div>
      <div className="pt-20 px-10">
        <h1 className="text-2xl">{dataProduct?.product.name}</h1>
        <p className="text-meHalfBlack">{dataProduct?.product.brand}</p>
        <p className="text-meHalfBlack">{dataProduct?.product.description}</p>
        <p className="text-meHalfBlack">{dataProduct?.product.price}</p>
        <p className="text-meHalfBlack">{dataProduct?.product.category.name}</p>
        <p className="text-meHalfBlack">
          {dataProduct?.product.subcategory.name}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;

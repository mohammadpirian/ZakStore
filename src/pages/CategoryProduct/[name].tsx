import { SingelCardCategory } from "@/components";
import { CategoryLayout } from "@/layout";
import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import useGetAllProductByCatId from "@/hooks/useGetAllProductByCatId";

type RouterId = string | undefined;

const CategoryProduct = () => {
  const router = useRouter();
  console.log(router.query.id);

  const {
    data: productCat,
    isLoading: isLoadingproductCat,
    isError: isErrorproductCat,
    error: errorproductCat,
  } = useGetAllProductByCatId(router.query.id as RouterId);

  console.log(productCat?.products);

  return (
    <div className="w-[80%]">
      <div className="px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-4" dir="rtl">
        {productCat?.products?.map((item: GetPropsProduct) => {
          return <SingelCardCategory key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

CategoryProduct.getLayout = function (page: ReactNode) {
  return <CategoryLayout>{page}</CategoryLayout>;
};
export default CategoryProduct;

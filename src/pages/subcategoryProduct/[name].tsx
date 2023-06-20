import React, { ReactNode } from "react";
import { CategoryLayout } from "@/layout";
import { useRouter } from "next/router";
import useGetAllProductBySubId from "@/hooks/useGetAllProductBySubId";
import { SingelCardCategory } from "@/components";

type RouterId = string | undefined;

const SubcategoryProduct = () => {
  const router = useRouter();
  console.log(router.query.id);

  const {
    data: productSub,
    isLoading: isLoadingproductSub,
    isError: isErrorproductSub,
    error: errorproductSub,
  } = useGetAllProductBySubId(router.query.id as RouterId);

  console.log(productSub?.products);

  return (
    <div className="w-[80%]">
      {productSub?.products.length == 0 ? (
        <div dir="rtl" className="flex flex-col items-center mb-8">
          <img
            src="/images/errorBanner/noProduct.png"
            alt=""
            className="w-[40rem]"
          />
          <h2 className="text-2xl font-bold mb-4">هم اکنون محصولی در این دسته بندی موجود نیست</h2>
          <p className="text-lg font-semibold text-meBlueText mb-4">از شما بابت صبر و شکیبایی و همراهیتان صمیمانه سپاسگزاریم</p>
          <p className="font-semibold">لطفا بعدا تلاش کنید</p>
        </div>
      ) : (
        <div
          className="px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-4"
          dir="rtl"
        >
          {productSub?.products?.map((item: GetPropsProduct) => {
            return <SingelCardCategory key={item._id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

SubcategoryProduct.getLayout = function (page: ReactNode) {
  return <CategoryLayout>{page}</CategoryLayout>;
};

export default SubcategoryProduct;

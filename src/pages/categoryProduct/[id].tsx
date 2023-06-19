import { SingelCardCategory } from "@/components";
import { CategoryLayout } from "@/layout";
import React, { ReactNode } from "react";
const categoryProduct = () => {
  return <div className="w-[80%]">
    {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"><SingelCardCategory/></div> */}
  </div>;
};

categoryProduct.getLayout = function (page: ReactNode) {
    return <CategoryLayout>{page}</CategoryLayout>;
  };
export default categoryProduct;

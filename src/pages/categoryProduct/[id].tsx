import { CategoryLayout } from "@/layout";
import React, { ReactNode } from "react";

const categoryProduct = () => {
  return <div className="w-[80%]">categoryProduct</div>;
};

categoryProduct.getLayout = function (page: ReactNode) {
    return <CategoryLayout>{page}</CategoryLayout>;
  };
export default categoryProduct;

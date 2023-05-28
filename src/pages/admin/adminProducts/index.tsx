import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const adminProducts = () => {
  return <div></div>;
};

adminProducts.getLayout = function (page:ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default adminProducts;

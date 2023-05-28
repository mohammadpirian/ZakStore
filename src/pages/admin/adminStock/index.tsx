import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const adminStock = () => {
  return <div></div>;
};

adminStock.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default adminStock;

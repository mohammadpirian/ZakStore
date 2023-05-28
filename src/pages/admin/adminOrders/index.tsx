import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const adminOrders = () => {
  return <div></div>;
};

adminOrders.getLayout = function (page:ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default adminOrders;

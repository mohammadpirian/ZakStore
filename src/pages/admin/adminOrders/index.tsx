import { Button } from "@/components";
import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const AdminOrders = () => {
  return <div></div>;
};

AdminOrders.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminOrders;

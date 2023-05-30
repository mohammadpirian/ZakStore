import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const AdminStock = () => {
  return <div></div>;
};

AdminStock.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminStock;

import { Button } from "@/components";
import OrderTable from "@/components/Tables/OrderTables";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";
import Cookies from "universal-cookie";

const AdminOrders = () => {
  return (
    <div className="p-4 bg-meMain mt-4 rounded-xl" dir="rtl">
      <OrderTable />
    </div>
  );
};

AdminOrders.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminOrders;

import StockTable from "@/components/Tables/StockTable";
import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const AdminStock = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded-xl" dir="rtl">
      <StockTable />
    </div>
  );
};

AdminStock.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminStock;

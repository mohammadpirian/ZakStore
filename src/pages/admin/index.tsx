import { AdminNavbar, AuthLayout, AdminSidebar, AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const Admin = () => {
  return <div></div>;
};

Admin.getLayout = function (page:ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;

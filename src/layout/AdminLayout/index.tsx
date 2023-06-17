import React, { ReactNode } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { EditProductModal } from "@/components";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full bg-meMain h-full overflow-y-scroll">
      
      <div className="flex flex-col w-10/12 px-8 bg-meMain ">
        <AdminNavbar />
        {children}
      </div>

      <AdminSidebar />
    </div>
  );
};

export default AdminLayout;

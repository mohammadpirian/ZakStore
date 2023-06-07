import React, { ReactNode } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-10/12 px-8">
        <AdminNavbar />
        {children}
      </div>

      <AdminSidebar />
    </div>
  );
};

export default AdminLayout;

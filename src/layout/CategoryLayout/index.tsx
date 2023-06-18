import { Footer, Navbar } from "@/layout";
import React, { ReactNode } from "react";
import SidebarCategory from "./Sidebar";

interface Props {
  children: ReactNode;
}

const CategoryLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="flex pt-16">
        {children}
        <SidebarCategory />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryLayout;

import Link from "next/link";
import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import {
  MdOutlineInventory,
  MdOutlinePriceChange,
  MdOutlineCategory,
  MdLogout,
} from "react-icons/md";

const AdminSidebar = () => {
  return (
    <div
      className="flex flex-col w-3/12 h-[42rem] p-2 bg-meWhite text-meBlack2 m-4 rounded-xl"
      dir="rtl"
    >
      <div className="flex justify-center p-7 border-b-2">
        <button>
          <img src="images/logo/logo.png" alt="" className="w-40" />
        </button>
      </div>

      <div className="flex flex-col gap-4 items-end p-2 py-4">
        <button className="p-3 px-6 w-full flex gap-2 text-sm items-center bg-meBlack hover:bg-meBlack2 text-meWhite rounded-full ">
          <AiOutlineFolderAdd className="w-6 h-6" />

          <Link href={"/admin/adminProducts"}>
            <span>کالاها</span>
          </Link>
        </button>
        <button className="p-3 px-6 w-full flex gap-2 text-sm items-center bg-meBlack hover:bg-meBlack2 text-meWhite rounded-full">
          <MdOutlineInventory className="w-6 h-6" />
          <Link href={"/admin/adminStock"}>
            <span>موجودی و قیمت ها</span>
          </Link>
        </button>
        <button className="p-3 px-6 w-full flex gap-2 text-sm items-center bg-meBlack hover:bg-meBlack2 text-meWhite rounded-full">
          <MdOutlinePriceChange className="w-6 h-6" />
          <Link href={"/admin/adminOrders"}>
            <span>سفارش ها</span>
          </Link>
        </button>
        <button className="p-3 px-6 w-full flex gap-2 text-sm items-center bg-meBlack hover:bg-meBlack2 text-meWhite rounded-full">
          <MdOutlineCategory className="w-6 h-6" />
          <Link href={"/admin/adminCategory"}>
            <span>دسته بندی ها</span>
          </Link>
        </button>
        <button className="p-3 px-6 w-full flex gap-2 text-sm items-center bg-meBlack hover:bg-meBlack2 text-meWhite rounded-full">
          <MdLogout className="w-6 h-6" />
          <Link href={"/"}>
            <span>خروج</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

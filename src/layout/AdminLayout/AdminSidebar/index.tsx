import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import {
  MdOutlineInventory,
  MdOutlinePriceChange,
  MdOutlineCategory,
  MdLogout,
} from "react-icons/md";

const AdminSidebar = () => {
  const [rout, setrout] = useState("");
  const router = useRouter();

  useEffect(() => {
    setrout(router.pathname);
  }, [router.pathname]);

  console.log(rout);

  return (
    <div
      className="fixed right-0 flex flex-col w-2/12 h-[42rem] p-2 bg-white text-meButtonBlack m-4 rounded-xl"
      dir="rtl"
    >
      <div className="flex justify-center p-5 border-b-2 border-meBlackDot">
        <Link href={"/"}>
          <button>
            <img src="/images/logo/logo.png" alt="" className="w-40" />
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 items-end p-1 py-4">
        <button
          className={`p-2 px-6 w-full flex gap-2 text-sm items-center hover:text-meWhite  hover:bg-meButtonBlack  rounded-full ${
            rout === "/admin/adminProducts"
              ? "bg-meButtonBlack text-meWhite"
              : ""
          }`}
        >
          <AiOutlineFolderAdd className="w-6 h-6" />
          <Link href={"/admin/adminProducts"}>
            <span>کالاها</span>
          </Link>
        </button>
        <button
          className={`p-2 px-6 w-full flex gap-2 text-sm items-center hover:text-meWhite  hover:bg-meButtonBlack  rounded-full ${
            rout === "/admin/adminStock" ? "bg-meButtonBlack text-meWhite" : ""
          }`}
        >
          <MdOutlineInventory className="w-6 h-6" />
          <Link href={"/admin/adminStock"}>
            <span>موجودی و قیمت ها</span>
          </Link>
        </button>
        <button
          className={`p-2 px-6 w-full flex gap-2 text-sm items-center hover:text-meWhite  hover:bg-meButtonBlack  rounded-full ${
            rout === "/admin/adminOrders" ? "bg-meButtonBlack text-meWhite" : ""
          }`}
        >
          <MdOutlinePriceChange className="w-6 h-6" />
          <Link href={"/admin/adminOrders"}>
            <span>سفارش ها</span>
          </Link>
        </button>
        <button
          className={`p-2 px-6 w-full flex gap-2 text-sm items-center hover:text-meWhite  hover:bg-meButtonBlack  rounded-full ${
            rout === "/admin/adminCategory"
              ? "bg-meButtonBlack text-meWhite"
              : ""
          }`}
        >
          <MdOutlineCategory className="w-6 h-6" />
          <Link href={"/admin/adminCategory"}>
            <span>دسته بندی ها</span>
          </Link>
        </button>
        <button
          className={`p-2 px-6 w-full flex gap-2 text-sm items-center hover:text-meWhite  hover:bg-meButtonBlack  rounded-full ${
            rout === "/" ? "bg-meButtonBlack text-meWhite" : ""
          }`}
        >
          <MdLogout className="w-6 h-6" />
          <Link href={"/"}>
            <span>خروج</span>
          </Link>
        </button>
      </div>
      <div className="flex flex-col items-center pt-32">
        <img src="/images/avatar/man.png" alt="" className="w-16" />
        <h2 className="text-lg">محمد پیریان</h2>
        <p className="text-meHalfBlack text-xs">mohammadpiriyan@gmail.com</p>
      </div>
    </div>
  );
};

export default AdminSidebar;

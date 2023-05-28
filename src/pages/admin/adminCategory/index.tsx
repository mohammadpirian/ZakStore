import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const adminCategory = () => {
  return (
    <div dir="rtl" className="bg-meWhite p-4 mt-4 rounded-3xl flex">
      <div className="w-1/2">
        <form
          action=""
          className=" flex flex-col gap-4 items-center border-b-2 border-meBlack2 pb-4"
        >
          <input
            type="text"
            placeholder="دسته بندی را وارد کنید"
            className="p-2 rounded-xl w-4/6"
          />
          <button className=" text-center bg-meGreen text-meWhite rounded-xl p-2 w-4/6">
            اضافه کردن
          </button>
        </form>
        <form
          action=""
          className=" flex flex-col gap-4 items-center border-b-2 border-meBlack2 pb-4"
        >
          <input
            type="text"
            placeholder="دسته بندی را وارد کنید"
            className="p-2 rounded-xl w-4/6"
          />
          <button className=" text-center bg-meGreen text-meWhite rounded-xl p-2 w-4/6">
            اضافه کردن
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

adminCategory.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default adminCategory;

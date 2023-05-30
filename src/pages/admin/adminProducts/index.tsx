import { AdminLayout } from "@/layout";
import React, { ReactNode, useState } from "react";

const AdminProducts = () => {
  const [selectPhotoAdmin, setSelectPhotoAdmin] = useState("انتخاب عکس محصول");
  return (
    <div className="bg-meWhite p-4 mt-4 rounded-3xl flex" dir="rtl">
      <form
        action=""
        className=" flex flex-wrap gap-4 justify-center border-b-2 pb-4 w-full"
      >
        <input
          type="text"
          placeholder="نام محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          placeholder="قیمت محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          placeholder="موجودی محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          placeholder="برند محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          placeholder="توضیحات محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />

        {/* <div className="relative w-4/12">
          <label htmlFor="addPhotoAdmin" className="hidden">
            عکس
          </label>
          <input
            type="file"
            className="w-full h-full"
            id=""
            accept="image/*"
            
          />
        </div> */}

        <div className="relative w-4/12 ">
          <input
            multiple
            type="file"
            className="absolute w-full h-full opacity-0"
            onChange={(e) => console.log(e.target.files)}
          />
          <p className="w-full h-full text-center">{selectPhotoAdmin}</p>
        </div>

        <select name="" id="" className="p-2 rounded-xl w-4/12">
          <option selected hidden>
            دسته بندی
          </option>
        </select>
        <select name="" id="" className="p-2 rounded-xl w-4/12">
          <option selected hidden>
            زیر دسته
          </option>
        </select>
        <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-4/6">
          اضافه کردن
        </button>
      </form>
    </div>
  );
};

AdminProducts.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminProducts;

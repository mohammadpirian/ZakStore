import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Footer = () => {
  const fetchData = async (url: string) => {
    const response = await request.get(url);
    return response.data.data;
  };

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(["data1"], () => fetchData("/categories"));

  if (isLoading1) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="flex justify-between py-4 px-12 border-t container "
      dir="rtl"
    >
      <div className="flex flex-col gap-2">
        <h2 className="border-b p-2">خرید</h2>
        {data1.categories.map((item) => (
          <button className="flex" key={item._id}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b p-2">خدمات مشتریان</h2>
        <a>پاسخ به پرسش های متداول</a>
        <a>رویه بازگرداندن کالا</a>
        <a>شرایط استفاده</a>
        <a>حریم خصوصی</a>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b p-2">اطلاعات زاک استور</h2>
        <a>درباره زاک استور</a>
        <a>تماس با زاک استور</a>
        <a>همکاری با زاک استور</a>
      </div>
      <div className="flex flex-col gap-6 py-12 items-center">
        <img src="/images/logo/logo.png" alt="" className="w-48" />
        <div className="flex flex-col gap-2 py-4 items-center">
        <span><p>mohammadpiriyan@gmail.com</p></span>
          
        <p>شماره تماس : 09385736655</p>
        <p></p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

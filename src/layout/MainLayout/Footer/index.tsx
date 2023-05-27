import React from "react";

const Footer = () => {
  return (
    <div
      className="flex justify-between py-4 px-12 border-t container"
      dir="rtl"
    >
      <div className="flex flex-col gap-2">
        <h2 className="border-b p-2">خرید</h2>
        <a>زنانه</a>
        <a>مردانه</a>
        <a>بچگانه</a>
        <a>زیبایی و سلامت</a>
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
      <div className="flex flex-col gap-2">
        <h2 className="border-b p-2">خرید</h2>
      </div>
    </div>
  );
};

export default Footer;

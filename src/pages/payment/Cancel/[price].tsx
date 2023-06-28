import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const Cancel = () => {
  const router = useRouter();
  console.log(router.query.price);
  // router.replace(`http://localhost:3001/Payment/${totalAll}`)
  const handleSuccess = () => {
    console.log("cancel");
  };

  return (
    <div
      className="flex justify-center bg-red-200 items-center h-screen"
      dir="rtl"
    >
      <div className="flex flex-col gap-4">
        <p>پرداخت شما با موفقیت انجام نشد</p>
        <div className="flex justify-between">
        <Link href="/" className="w-full">
          <button
            onClick={() => handleSuccess()}
            className="bg-red-600 hover:bg-red-700 py-2 rounded-xl w-full text-white"
          >
            بازگشت به صفحه اصلی
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cancel;

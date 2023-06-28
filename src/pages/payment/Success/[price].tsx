import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Success = () => {
  const router = useRouter();
  console.log(router.query.price);
  // router.replace(`http://localhost:3001/Payment/${totalAll}`)
  const handleReturn = () => {
    console.log("success");
  };
    useEffect(()=>{})
  return (
    <div className="flex justify-center items-center h-screen bg-green-200" dir="rtl">
      <div className="flex flex-col gap-4">
        <p>
          پرداخت شما با موفقیت انجام شد
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => handleReturn()}
            className="bg-green-600 hover:bg-green-700 py-2 rounded-xl w-full text-white"
          >
            بازگشت به صفحه اصلی
          </button>
          
        </div>
      </div>
    </div>
  );
};
export default Success;

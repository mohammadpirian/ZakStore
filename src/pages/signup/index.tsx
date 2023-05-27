import React from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link href="/">
        <button className="absolute top-8 right-20 w-48">
          <img src="images/logo.png" alt="" />
        </button>
      </Link>

      <div className="flex w-6/12 h-4/6  shadow-lg rounded-lg">
        <div className="w-[3%] h-full bg-[#966f46] hover:bg-[#9a7854] rounded-l-lg relative cursor-pointer hover:bg-cyan-700">
          <Link href="/login">
            <p className="absolute w-20 -left-8 top-[50%] text-center -rotate-90 text-white">
              ورود
            </p>
          </Link>
        </div>
        <div className="w-[67%]">
          <form
            action=""
            className="flex flex-col gap-8 p-8 items-center justify-center"
          >
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              className="border p-2 rounded-md w-full shadow-md"
              dir="rtl"
            />
            <input
              type="text"
              placeholder="نام خانوادگی خود را وارد کنید"
              className="border p-2 rounded-md w-full shadow-md"
              dir="rtl"
            />
            <input
              type="text"
              placeholder="آدرس خود را وارد کنید"
              className="border p-2 rounded-md w-full shadow-md"
              dir="rtl"
            />
            <input
              type="text"
              placeholder="تلفن همراه خود را وارد کنید"
              className="border p-2 rounded-md w-full shadow-md"
              dir="rtl"
            />

            <button className="bg-[#56b8e2] hover:bg-[#44a4cd] text-lg font-semibold shadow-lg text-neutral-100 mt-20 p-4 w-full rounded-lg">
              ثبت نام
            </button>
          </form>
        </div>
        <div className="w-[40%] h-full">
          <img
            src="./images/loginRegister/signup.jpg"
            alt=""
            className="object-cover h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { AuthLayout } from "@/layout";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link href="/">
        <button className="absolute top-8 right-20 w-48">
          <img src="images/logo.png" alt="" />
        </button>
      </Link>
      <div className="flex w-6/12 h-4/6  shadow-lg rounded-lg">
        <div className="w-[3%] h-full bg-cyan-800 rounded-l-lg relative cursor-pointer hover:bg-cyan-700">
          <Link href="/signup">
            <p className="absolute w-20 -left-7 top-[50%] text-center -rotate-90 text-white">
              ثبت نام
            </p>
          </Link>
        </div>

        <div className="w-[67%] flex flex-col justify-center">
          <form
            action=""
            className="flex flex-col gap-8 p-8 items-center justify-center"
          >
            <input
              type="text"
              placeholder="نام کاربری را وارد کنید"
              className="border p-2 rounded-md w-full shadow-md"
              dir="rtl"
            />
            <input
              type="text"
              placeholder="رمز عبور خود را وارد کنید"
              className="border p-2 rounded-md w-full shadow-md"
              dir="rtl"
            />
            <button className="bg-[#966f46] hover:bg-[#9a7854] text-lg font-semibold shadow-lg text-neutral-100 mt-10 p-4 w-full rounded-lg">
              ورود
            </button>
          </form>
        </div>
        <div className="w-[40%] h-full">
          <img
            src="./images/loginRegister/login.jpg"
            alt=""
            className="object-cover h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

Login.getLayout = function (page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;

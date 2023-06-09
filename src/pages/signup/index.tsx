import React, { ReactNode } from "react";
import Link from "next/link";
import { AuthLayout } from "@/layout";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface IFormInputs {
  name: string;
  family: string;
  address: string;
  phone: string;
}
const Signup = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    // router.push("/admin");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-meCyan">
      <Link href="/">
        <button className="absolute top-8 right-20 w-48">
          <img src="images/logo/logo.png" alt="" />
        </button>
      </Link>

      <div className="flex w-6/12 h-4/6  shadow-lg rounded-lg bg-white ">
        <div className="w-[3%] h-full bg-meBlue hover:bg-meBlue2 rounded-l-lg relative cursor-point">
          <Link href="/loginAdmin">
            <p className="absolute w-20 -left-8 top-[50%] text-center -rotate-90 text-white">
              ورود
            </p>
          </Link>
        </div>
        <div className="w-[67%]">
          <form
            action=""
            className="flex flex-col p-8 gap-2 items-center justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full" dir="rtl">
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="border p-2 rounded-md w-full shadow-md"
                dir="rtl"
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 12,
                })}
              />
              <p className="text-red-700 px-2 text-xs">
                {errors.name?.type === "required" && "نام خود را وارد کنید"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.name?.type === "minLength" &&
                  "نام باید بیشتر از 2 کاراکتر باشد"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.name?.type === "maxLength" &&
                  "نام باید کمتر از 12 کاراکتر باشد"}
              </p>
            </div>
            <div className="w-full" dir="rtl">
              <input
                type="text"
                placeholder="نام خانوادگی خود را وارد کنید"
                className="border p-2 rounded-md w-full shadow-md"
                dir="rtl"
                {...register("family", {
                  required: true,
                  minLength: 2,
                  maxLength: 12,
                })}
              />
              <p className="text-red-700 px-2 text-xs">
                {errors.family?.type === "required" &&
                  "نام خانوادگی خود را وارد کنید"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.family?.type === "minLength" &&
                  "نام خانوادگی باید بیشتر از 2 کاراکتر باشد"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.family?.type === "maxLength" &&
                  "نام خانوادگی باید کمتر از 12 کاراکتر باشد"}
              </p>
            </div>
            <div className="w-full" dir="rtl">
              <input
                type="text"
                placeholder="آدرس خود را وارد کنید"
                className="border p-2 rounded-md w-full shadow-md"
                dir="rtl"
                {...register("address", {
                  required: true,
                  minLength: 2,
                  maxLength: 12,
                })}
              />
              <p className="text-red-700 px-2 text-xs">
                {errors.address?.type === "required" && "آدرس خود را وارد کنید"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.address?.type === "minLength" &&
                  "آدرس باید بیشتر از 2 کاراکتر باشد"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.address?.type === "maxLength" &&
                  "آدرس باید کمتر از 12 کاراکتر باشد"}
              </p>
            </div>

            <div className="w-full" dir="rtl">
              <input
                type="text"
                placeholder="تلفن همراه خود را وارد کنید"
                className="border p-2 rounded-md w-full shadow-md"
                dir="rtl"
                {...register("phone", {
                  required: true,
                  minLength: 9,
                  maxLength: 11,
                })}
              />
              <p className="text-red-700 px-2 text-xs">
                {errors.phone?.type === "required" &&
                  "شماره همراه خود را وارد کنید"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.phone?.type === "minLength" &&
                  "شماره همراه باید بیشتر از 9 کاراکتر باشد"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.phone?.type === "maxLength" &&
                  "شماره همراه باید کمتر از 11 کاراکتر باشد"}
              </p>
            </div>

            <button className="bg-mePurple2 text-white hover:bg-white hover:text-mePurple2 hover:border-2 hover:border-mePurple2 text-lg font-semibold shadow-lg mt-20 p-4 w-full rounded-lg">
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

Signup.getLayout = function (page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Signup;

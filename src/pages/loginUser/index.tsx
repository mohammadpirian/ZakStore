import { AuthLayout } from "@/layout";
import { request } from "@/utils/request";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

interface IFormInputs {
  username: string;
  password: string;
}
const LoginUser = () => {
  const [showError, setShowError] = useState("");
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [Shipping, setShipping] = useState(0);
  const [totalAll, setTotalAll] = useState(0);

  const cart = useSelector((state) => state.cartSlices.CartProducts);
  useEffect(() => {
    const mamad = cart.reduce((sum, item) => sum + item.totalPriceproduct, 0);
    setTotalPriceCart(mamad);
    setShipping(totalPriceCart * 0.05);
    setTotalAll(totalPriceCart + Shipping);
  });
  console.log(totalAll);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const router = useRouter();

  const getLogin = async (data: IFormInputs) => {
    try {
      const response = await request.post("/auth/login", data);
      // console.log(response.data);
      const cookie = new Cookies();
      cookie.set("userToken", response.data.token.accessToken);
      cookie.set("refreshToken", response.data.token.refreshToken);
      cookie.set("userID", response.data.data.user._id);
      router.replace(`http://localhost:7000/Payment/${totalAll}`);
      return response.data;
    } catch (error) {
      // router.push("/loginAdmin");
      setShowError("رمز یا نام کاربری را اشتباه وارد کرده اید");
      console.log(error);
    }
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    getLogin(data);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-meCyan">
      <Link href="/">
        <button className="absolute top-8 right-20 w-48">
          <img src="images/logo/logo.png" alt="" />
        </button>
      </Link>
      <div className="flex w-6/12 h-4/6 bg-white  shadow-lg rounded-lg">
        <div className="w-[3%] h-full bg-meRed rounded-l-lg relative cursor-pointer hover:bg-meRed2">
          <Link href="/signup">
            <p className="absolute w-20 -left-7 top-[50%] text-center -rotate-90 text-white">
              ثبت نام
            </p>
          </Link>
        </div>

        <div className="w-[67%] flex flex-col justify-center">
          <div className="flex justify-center">
            <p className="text-red-600">{showError}</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col gap-8 p-8 items-center justify-center"
          >
            <div className="w-full" dir="rtl">
              <input
                type="text"
                placeholder="نام کاربری را وارد کنید"
                className="border p-2 rounded-md w-full shadow-md"
                dir="rtl"
                {...register("username", { required: true })}
              />

              <p className="text-red-700 px-2 text-xs">
                {errors.username?.type === "required" &&
                  "نام کاربری خود را وارد کنید"}
              </p>
            </div>

            <div className="w-full" dir="rtl">
              <input
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                className="border p-2 rounded-md w-full shadow-md"
                dir="rtl"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />

              <p className="text-red-700 px-2 text-xs">
                {errors.password?.type === "required" &&
                  "رمز عبور را وارد کنید"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.password?.type === "minLength" &&
                  "رمز عبور بیشتر از 6 کاراکتر است"}
              </p>

              <p className="text-red-700 px-2 text-xs">
                {errors.password?.type === "maxLength" &&
                  "رمز عبور کمتر از 12 کاراکتر است"}
              </p>
            </div>

            <button className="bg-meGreen hover:bg-white hover:text-meGreen hover:border-2 hover:border-meGreen  text-lg font-semibold shadow-lg text-neutral-100 mt-10 p-4 w-full rounded-lg">
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
LoginUser.getLayout = function (page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginUser;

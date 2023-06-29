import { request } from "@/utils/request";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { handeleAddTOCart, handeleEmptyCart } from "@/Redux/slices/cartSlices";
import Link from "next/link";

const createOrder = async (dataOrder) => {
  const response = await request.post("/orders", dataOrder);
  return response.data;
};

const Success = () => {
  const [completeOrdering, setCompleteOrdering] = useState(false);
  const dispatch = useDispatch();
  const [postOrder, setPostOrder] = useState(false);
  const router = useRouter();
  const cookie = new Cookies();

  const mutation = useMutation({
    mutationFn: createOrder,
  });

  const cart = useSelector((state) => state.cartSlices.CartProducts);
  console.log(cart);

  const handlePost = (e: any) => {
    const orderProduct = [];
    cart.map((item) => {
      orderProduct.push({ product: item._id, count: item.orderQuantity });
    });
    const dataOrder = {
      user: cookie.get("userID"),
      products: orderProduct,
      deliveryStatus: false,
    };
    mutation.mutate(dataOrder);
  };
  const handleReturn = () => {
    console.log("success");
  };

  if (completeOrdering == false) {
    setCompleteOrdering(true);
    handlePost();
    dispatch(handeleEmptyCart());
  }

  return (
    <div
      className="flex justify-center items-center h-screen bg-green-200"
      dir="rtl"
    >
      <div className="flex flex-col gap-4">
        <p>پرداخت شما با موفقیت انجام شد</p>
        <div className="flex justify-between">
          <Link href="/" className="w-full">
            <button
              onClick={() => handleReturn()}
              className="bg-green-600 hover:bg-green-700 py-2 rounded-xl w-full text-white"
            >
              بازگشت به صفحه اصلی
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Success;

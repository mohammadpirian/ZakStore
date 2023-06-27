import CardCart from "@/components/Card/cardCart";
import React, { useEffect, useState } from "react";
import { handeleAddTOCart, handeleEmptyCart } from "@/Redux/slices/cartSlices";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";
import Link from "next/link";

const Cart = () => {
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [Shipping, setShipping] = useState(0);
  const [totalAll, setTotalAll] = useState(0);
  const cart = useSelector((state) => state.cartSlices.CartProducts);
  console.log(cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const mamad = cart.reduce((sum, item) => sum + item.totalPriceproduct, 0);
    setTotalPriceCart(mamad);
    setShipping(totalPriceCart * 0.05);
    setTotalAll(totalPriceCart + Shipping);
  });

  return (
    <div className="pt-16 bg-meMain flex" dir="rtl">
      <div className="w-9/12 p-4 flex flex-col gap-4">
        {cart.map((item) => {
          return <CardCart key={item._id} item={item} />;
        })}
      </div>
      <div className="w-3/12 p-4 ">
        <div className="bg-white p-4 rounded-xl flex flex-col items-center gap-8">
          <div>
            <p className="">خلاصه سفارش شما</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-sm">مجموع خرید شما :</p>
            <p className="text-sm">
              <span>{totalPriceCart}</span> تومان
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-sm">هزینه حمل و نقل شما :</p>
            <p className="text-sm">
              <span>{Shipping}</span> تومان
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-sm">جمع سبد خرید :</p>
            <p className="text-sm">
              <span>{totalAll}</span> تومان
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base">
                کد تخفیف
              </AccordionTrigger>
              <AccordionContent>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  placeholder="لطفا کد تخفیف را وارد کنید"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link href="/loginUser" className="w-11/12">
          <button className="w-full text-sm bg-red-600 hover:bg-red-700 text-white p-3 rounded-md">
            ثبت سفارش
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

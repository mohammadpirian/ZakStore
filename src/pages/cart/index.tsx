import CardCart from "@/components/Card/cardCart";
import React from "react";

const Cart = () => {
  return (
    <div className="pt-16 bg-meMain flex" dir="rtl">
      <div className="w-9/12 p-4">
      <CardCart/>
      </div>
      <div className="w-3/12 bg-red-400">
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

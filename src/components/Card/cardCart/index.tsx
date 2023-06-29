import React, { useState } from "react";

import { useDispatch } from "react-redux";
import Link from "next/link";
import DeleteProductCartModal from "@/components/Modal/DeleteProductCartModal";

const CardCart = ({ item }) => {
  const [isOpenDeleteProductCartModal, setIsOpenDeleteProductCartModal] =
    useState(false);
  console.log(item);
  const dispatch = useDispatch();
  return (
    <div className="bg-white p-4 flex rounded-xl justify-between">
      <div className="flex">
        <div className="w-40 p-4 border-2 rounded-xl">
          <Link
            href={{
              pathname: `/SingleProduct/${item.name}`,
              query: { id: item._id },
            }}
          >
            <img
              src={`${process.env.BASE_IMAGE_URL}${item?.images[0]}`}
              alt=""
            />
          </Link>
        </div>
        <div className="py-2 px-4 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium">{item?.name}</h2>
            <div>
              <p className="text-sm text-meBlueText">
                {item?.category?.name} | {item?.subcategory?.name}
              </p>

              <div className="flex gap-1">
                <img
                  className="w-4"
                  src="/images/icon/achievement.png"
                  alt=""
                />
                <p className="text-xs text-meHalfBlack">{item?.brand}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.1rem]">
            <div className="flex gap-1">
              <img className="w-4" src="/images/icon/warranty.png" alt="" />
              <p className="text-xs ">گارانتی اصالت کالا {item?.brand}</p>{" "}
            </div>
            <div className="flex gap-1">
              <img className="w-4" src="/images/icon/bag.png" alt="" />
              <p className="text-xs text-meHalfBlack">ارسال زاک استور </p>
            </div>
            <div className="flex gap-1">
              <img className="w-4" src="/images/icon/delivery.png" alt="" />
              <p className="text-xs text-meHalfBlack">
                ارسال فوری (شهر تهران)
              </p>{" "}
            </div>
            <div className="flex gap-1">
              <img className="w-4" src="/images/icon/price.png" alt="" />
              <p className="text-xs text-meHalfBlack">
                {item?.price} تومان
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button
          className=" w-6 h-6"
          onClick={() => setIsOpenDeleteProductCartModal(item)}
        >
          <img src="/images/icon/close3.png" alt="" />
        </button>
        <div>
          <p className="text-xs text-meHalfBlack">
            سفارش شما : <span>{item?.orderQuantity}</span>
          </p>
          <p className="text-xs text-meHalfBlack">
            مجموع مبلغ : <span>{item?.totalPriceproduct}</span>
          </p>
        </div>
      </div>
      {isOpenDeleteProductCartModal && (
        <DeleteProductCartModal
          isOpenDeleteProductCartModal={isOpenDeleteProductCartModal}
          setIsOpenDeleteProductCartModal={setIsOpenDeleteProductCartModal}
        />
      )}
    </div>
  );
};

export default CardCart;

// گارانتی 18 ماهه وی دو سل
// موجود در انبار دیجی‌کالا
// ارسال دیجی‌کالا

// ارسال فوری (شهر تهران)

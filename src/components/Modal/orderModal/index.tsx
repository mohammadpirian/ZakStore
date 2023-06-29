import useGetOrderById from "@/hooks/useGetOrderById";
import { formatDate } from "@/utils/formatDate";
import { request } from "@/utils/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const OrderModal = ({ orderModalDetail, setOrderModalDetail }) => {
  const {
    data: order,
    isLoading: isLoadingorder,
    isError: isErrororder,
    error: errororder,
  } = useGetOrderById(orderModalDetail._id);

  const editOrder = async () => {
    const response = await request.patch(`/orders/${order.order._id}`, {
      deliveryStatus: true,
    });
    toast.success("ویرایش با موفقیت ثبت شد!");
    return response.data;
  };

  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: editOrder,
    onSuccess: () => client.invalidateQueries({ queryKey: ["order"] }),
  });
  //   console.log(order);

  const handleChangeOrderStatus = (order) => {
    console.log(order.order._id);
    mutation.mutate();
  };
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen  justify-center items-center backdrop-blur-sm  z-10  ${
        orderModalDetail ? "flex" : "hidden"
      }`}
      onClick={(e) => e.target == e.currentTarget && setOrderModalDetail(false)}
    >
      <div
        dir="rtl"
        className="w-5/12 h-[80%] bg-white p-4 rounded-xl flex flex-col justify-between shadow-xl overflow-y-scroll no-scrollbar"
      >
        <div className="flex justify-center pt-4">
          <h2 className="text-xl font-medium">سفارش نامه</h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <p>نام مشتری : </p>
            <p>
              {order?.order?.user.firstname} {order?.order?.user.lastname}
            </p>
          </div>
          <div className="flex gap-2">
            <p>آدرس :</p>
            <p>{order?.order?.user.address}</p>
          </div>
          <div className="flex gap-2">
            <p>شماره همراه :</p>
            <p>{order?.order?.user.phoneNumber}</p>
          </div>
          <div className="flex gap-2">
            <p>تاریخ سفارش :</p>
            <p>{formatDate(order?.order?.createdAt)}</p>
          </div>
          <div className="flex gap-2">
            <p>وضعیت سفارش :</p>
            <p>
              {order?.order?.deliveryStatus == false
                ? "منتظر ارسال"
                : "ارسال شده"}
            </p>
          </div>
          <div className="flex gap-2">
            <p>مجموع مبلغ سفارش :</p>
            <p>{order?.order?.totalPrice}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium"> محصولات </h2>
          {order?.order?.products.map((item) => {
            return (
              <div
                key={item._id}
                className="flex flex-col px-2 py-4 border-b w-full"
              >
                <div className="flex gap-3">
                  <p>نام محصول :</p>
                  <p>{item?.product?.name}</p>
                </div>
                <div className="flex gap-3">
                  <p>تعداد سفارش :</p>
                  <p>{item?.count}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-center">
          <button
            className={`p-2 bg-red-600 hover:bg-red-700  text-white w-11/12 rounded-md ${
              order?.order?.deliveryStatus == true ? "hidden" : ""
            }`}
            onClick={() => handleChangeOrderStatus(order)}
          >
            تحویل داده شد
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

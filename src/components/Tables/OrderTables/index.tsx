import OrderModal from "@/components/Modal/OrderModal";
import { formatDate } from "@/utils/formatDate";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";
import Cookies from "universal-cookie";

const OrderTable = () => {
  const [orderModalDetail, setOrderModalDetail] = useState(false);
  const [filterOrder, setFilterOrder] = useState(false);
  const cookie = new Cookies();
  const accessToken = cookie.get("adminToken");

  const fetchData = async (url: string) => {
    const response = await request.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  };

  const {
    data: datauser,
    isLoading: isLoadinguser,
    isError: isErroruser,
    error: erroruser,
  } = useQuery(["datauser"], () => fetchData("/users"));

  const {
    data: dataorders,
    isLoading: isLoadingorders,
    isError: isErrororders,
    error: errororders,
  } = useQuery(["dataorders", filterOrder], () =>
    fetchData(`/orders?deliveryStatus=${filterOrder}&limit=all`)
  );

  if (isLoadingorders || isLoadinguser) {
    return <div>Loading...</div>;
  }
  if (isErroruser || isErrororders) {
    return (
      <div>
        {" "}
        متاسفانه دسترسی به سرور مقدور نمیباشد. لطفا دوباره وارد شوید،ممنون از
        شکیبایی شما.
      </div>
    );
  }

  const columns = [
    {
      name: "نام کاربر",
      selector: (row) =>
        datauser?.users.filter((user) => user._id == row.user)[0].firstname +
        " " +
        datauser?.users.filter((user) => user._id == row.user)[0].lastname,
      sortable: true,
    },
    { name: "مجموع مبلغ", selector: (row) => row.totalPrice, sortable: true },
    {
      name: "زمان ثبت سفارش",
      selector: (row) => formatDate(row.createdAt),
      sortable: true,
    },
    {
      name: "بررسی",
      cell: (row) => (
        <button onClick={() => setOrderModalDetail(row)}>بررسی سفارش</button>
      ),
    },
  ];
  return (
    <div className="" dir="rtl">
      <div>
        <button
          onClick={() => setFilterOrder(false)}
          className={`p-2 text-sm rounded-md ${
            filterOrder == false ? "bg-meButtonBlack text-white" : ""
          }`}
        >
          سفارش های درانتظار
        </button>
        <button
          onClick={() => {
            setFilterOrder(true);
            console.log("mamad");
          }}
          className={`p-2 text-sm rounded-md ${
            filterOrder == true ? "bg-meButtonBlack text-white" : ""
          }`}
        >
          سفارش های مرسوله
        </button>
      </div>
      <DataTable
        columns={columns}
        // data={data}
        data={dataorders?.orders}
        // selectableRows
        fixedHeader
        pagination
      ></DataTable>
      {orderModalDetail && (
        <OrderModal
          orderModalDetail={orderModalDetail}
          setOrderModalDetail={setOrderModalDetail}
        />
      )}
    </div>
  );
};

export default OrderTable;

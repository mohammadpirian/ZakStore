import { Button } from "@/components";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";
import Cookies from "universal-cookie";

const OrderTable = () => {
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
  } = useQuery(["dataorders"], () => fetchData("/orders"));

  if (isLoadingorders || isLoadinguser) {
    return <div>Loading...</div>;
  }

  const columns = [
    {
      name: "نام کاربر",
      selector: (row) =>
        datauser.users.filter((user) => user._id == row.user)[0].firstname +
        datauser.users.filter((user) => user._id == row.user)[0].lastname,
      sortable: true,
    },
    { name: "مجموع مبلغ", selector: (row) => row.totalPrice, sortable: true },
    {
      name: "زمان ثبت سفارش",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "function",
      cell: (row) => <button>بررسی سفارش</button>,
    },
  ];
  return (
    <div className="" dir="rtl">
      <DataTable
        columns={columns}
        // data={data}
        data={dataorders?.orders}
        // selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
};

export default OrderTable;

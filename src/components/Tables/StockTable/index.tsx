import { Button } from "@/components";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";

const StockTable = () => {
  const fetchData = async (url: string) => {
    const response = await request.get(url);
    return response.data.data;
  };

  const {
    data: dataProduct,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: errorProduct,
  } = useQuery(["dataProduct"], () => fetchData("/products?limit=all"));

  const [editRow, setEditRow] = useState(null);
  const [originalData, setOriginalData] = useState(dataProduct?.products);

  if (isLoadingProduct) {
    return <div>Loading...</div>;
  }

  const handleDelete = (row) => {
    request.delete(`/products/${row._id}`);
  };

  const handleSave = async (row, originalData) => {
    setEditRow(null);
    const updatedRow = originalData?.find((item) => item._id === row._id);
    if (!updatedRow) {
      return;
    }

    try {
      // console.log(updatedRow.name);
      await request.patch(`/products/${row._id}`, { name: updatedRow.name });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (row) => {
    setEditRow(row._id);
    // handleSave(row);
  };

  const handleCancel = (row) => {
    setEditRow(null);
  };

  const handleInputChange = (event, row) => {
    const updatedData = dataProduct.products.map((item) => {
      if (item._id === row._id) {
        return { ...item, name: event.target.value };
      }
      return item;
    });
    setOriginalData(updatedData);
  };

  const columns = [
    {
      name: "کالا",
      selector: (row) =>
        editRow === row._id ? (
          <input
            type="text"
            value={
              (originalData &&
                originalData.find((item) => item._id === row._id)?.name) ||
              ""
            }
            onChange={(event) => handleInputChange(event, row)}
          />
        ) : (
          row.name
        ),
      sortable: true,
    },
    { name: "قیمت", selector: (row) => row.price, sortable: true },
    { name: "موجودی", selector: (row) => row.quantity, sortable: true },
    {
      name: "تغییرات",
      cell: (row) => (
        <div>
          {editRow === row._id ? (
            <>
              <button onClick={() => handleSave(row, originalData)}>
                ذخیره
              </button>
              <button onClick={handleCancel}>بیخیال</button>
            </>
          ) : (
            <button onClick={() => handleEdit(row)}>ویرایش</button>
          )}
          <button onClick={() => handleDelete(row)}>حذف</button>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <DataTable
        columns={columns}
        // data={data}
        data={dataProduct?.products}
        // selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
};

export default StockTable;

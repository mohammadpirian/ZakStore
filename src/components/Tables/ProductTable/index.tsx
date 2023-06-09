import { Button } from "@/components";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";

const ProductTable = () => {
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
  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(["data1"], () => fetchData("/categories"));
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery(["data2"], () => fetchData("/subcategories?limit=all"));
  const [records, setRecords] = useState();
  const [editRow, setEditRow] = useState(null);
  const [originalData, setOriginalData] = useState(dataProduct?.products);

  if (isLoadingProduct || isLoading1 || isLoading2) {
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
      name: "عکس محصول",
      cell: (row) => {
        return <img src={row.images[0]} className="w-16" />;
      },
    },
    {
      name: "نام محصول",
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
    {
      name: "گروه بندی",
      selector: (row) =>
        data1.categories.filter((category) => category._id == row.category)[0]
          .name,
      sortable: true,
    },
    {
      name: "زیرگروه",
      selector: (row) =>
        data2.subcategories.filter((sub) => sub._id == row.subcategory)[0].name,
      sortable: true,
    },

    {
      name: "تغییرات",
      cell: (row) => (
        <div>
          {editRow === row._id ? (
            <>
              <button onClick={() => handleSave(row, originalData)}>
                ذخیره
              </button>
              <button className="mx-2" onClick={handleCancel}>
                بیخیال
              </button>
            </>
          ) : (
            <button className="mx-2" onClick={() => handleEdit(row)}>
              ویرایش
            </button>
          )}
          <button onClick={() => handleDelete(row)}>حذف</button>
        </div>
      ),
    },
  ];
  function handleFilter(event) {
    const newData = dataProduct?.products.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  return (
    <div className="w-9/12  bg-white rounded-xl p-4">
      <input
        type="text"
        className="py-2 px-4 bg-gray-100 rounded-lg"
        placeholder="جستجو"
        onChange={handleFilter}
      />
      <div>
        <DataTable
          columns={columns}
          // data={data}
          data={records || dataProduct?.products}
          //   selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </div>
  );
};

export default ProductTable;

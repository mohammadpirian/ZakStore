import { Button } from "@/components";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";

const CategoryTable = () => {
  const fetchData = async (url: string) => {
    const response = await request.get(url);
    return response.data.data;
  };

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(["data1"], () => fetchData("/categories"));

  const [editRow, setEditRow] = useState(null);
  const [originalData, setOriginalData] = useState(data1?.categories);

  if (isLoading1) {
    return <div>Loading...</div>;
  }

  const handleDelete = (row) => {
    request.delete(`/categories/${row._id}`);
  };

  const handleSave = async (row, originalData) => {
    setEditRow(null);
    const updatedRow = originalData?.find((item) => item._id === row._id);
    if (!updatedRow) {
      return;
    }

    try {
      // console.log(updatedRow.name);
      await request.patch(`/categories/${row._id}`, { name: updatedRow.name });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (row: RowCategoryTable) => {
    setEditRow(row._id);
    // handleSave(row);
  };

  const handleCancel = () => {
    setEditRow(null);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    row: RowCategoryTable
  ) => {
    const updatedData = data1.categories.map((item: RowCategoryTable) => {
      if (item._id === row._id) {
        return { ...item, name: event.target.value };
      }
      return item;
    });
    setOriginalData(updatedData);
  };

  const columns = [
    {
      name: "شناسه",
      selector: (row: RowCategoryTable) => row._id,
      sortable: true,
    },
    {
      name: "دسته بندی",

      selector: (row: RowCategoryTable) =>
        editRow === row._id ? (
          <input
            type="text"
            value={
              (originalData &&
                originalData.find(
                  (item: RowCategoryTable) => item._id === row._id
                )?.name) ||
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
      name: "تغییرات",
      cell: (row: RowCategoryTable) => (
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
  return (
    <div className="w-9/12 p-4 bg-meMain rounded-xl">
      <DataTable
        columns={columns}
        // data={data}
        data={data1?.categories}
        // selectableRows
        fixedHeader
        // pagination
      ></DataTable>
    </div>
  );
};

export default CategoryTable;

import { handeleOpenModal } from "@/Redux/slices/modalSlices";
import { EditProductModal } from "@/components/Modal";
import useGetCategory from "@/hooks/useGetCategory";
import { request } from "@/utils/request";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

const ProductTable = () => {
  // const { openModal, product } = useSelector((state) => state.modalReducer);
  const [modal, setModal] = useState(false);
  // const dispatch = useDispatch();
  // console.log(openModal, product);
  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id) => handleDelete(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ["dataProduct"] }),
  });

  const fetchData = async (url: string) => {
    const response = await request.get(url);
    return response.data.data;
  };
  const router = useRouter();
  const {
    data: dataProduct,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: errorProduct,
  } = useQuery(["dataProduct"], () => fetchData("/products?limit=all"));
  const {
    data: category,
    isLoading: isLoadingcategory,
    isError: isErrorcategory,
    error: errorcategory,
  } = useGetCategory();
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery(["data2"], () => fetchData("/subcategories?limit=all"));
  const [records, setRecords] = useState();
  const [editRow, setEditRow] = useState(null);
  const [originalData, setOriginalData] = useState(dataProduct?.products);

  if (isLoadingProduct || isLoadingcategory || isLoading2) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (id) => {
    const response = await request.delete(`/products/${id}`);
    return response.data;
  };

  const handleEdit = (row) => {
    setEditRow(row._id);
    // dispatch(handeleOpenModal(row));
    setModal(row);
    // handleSave(row);
  };

  const columns = [
    {
      name: "عکس محصول",
      cell: (row) => {
        return (
          <img
            src={`${process.env.BASE_IMAGE_URL}${row.images[0]}`}
            className="w-16"
          />
        );
      },
    },
    {
      name: "نام محصول",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "گروه بندی",
      selector: (row) =>
        category.categories.filter(
          (category) => category._id == row.category
        )[0].name,
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
          <button
            className="mx-2"
            onClick={() => {
              handleEdit(row);
            }}
          >
            ویرایش
          </button>
          <button onClick={() => mutate(row._id)}>حذف</button>
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
      {modal && <EditProductModal modal={modal} setModal={setModal} />}
    </div>
  );
};

export default ProductTable;

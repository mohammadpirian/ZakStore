import { AdminLayout } from "@/layout";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { ReactNode, useState } from "react";

const createProduct = async (productForm) => {
  const response = await axios.post(
    "http://localhost:8000/api/products",
    productForm,
    {
      headers: {
        "Content-Type": `multipart/form-data ; boundary=${productForm._boundary}`,
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmUzNjlkODQ0Yzk5MGYzZWE0ODYwMyIsImlhdCI6MTY4NTYwODM0OCwiZXhwIjoxNjg1NjA5MjQ4fQ.pKF_KMSjyvaFq46HGNMgvZ0Xx5OjexaSsnmMvcdkTdo"}`,
      },
    }
  );
  return response.data;
};

const AdminProducts = () => {
  const [selectPhotoAdmin, setSelectPhotoAdmin] = useState("انتخاب عکس محصول");
  const mutation = useMutation(createProduct);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameProduct = e.target.elements.nameProduct.value;
    const priceProduct = e.target.elements.priceProduct.value;
    const quantityProduct = e.target.elements.quantityProduct.value;
    const brandProduct = e.target.elements.brandProduct.value;
    const descriptionProduct = e.target.elements.descriptionProduct.value;
    const imagesProduct = e.target.elements.imagesProduct.files;
    const categoryProduct = e.target.elements.categoryProduct.value;
    const subCategoryProduct = e.target.elements.subCategoryProduct.value;
    // console.log(imagesProduct);
    const productForm = new FormData();
    productForm.append("category", categoryProduct);
    productForm.append("name", nameProduct);
    productForm.append("price", priceProduct);
    productForm.append("quantity", quantityProduct);
    productForm.append("brand", brandProduct);
    productForm.append("description", descriptionProduct);
    productForm.append("subcategory", subCategoryProduct);
    productForm.append("thumbnail", imagesProduct[0]);
    for (let i = 0; i < imagesProduct.length; i++) {
      productForm.append("images", imagesProduct[i]);
    }
    // console.log(Object.fromEntries(productForm));

    mutation.mutate(productForm);
  };

  const fetchData = async (url: string) => {
    const response = await axios.get(url);
    return response.data.data;
  };

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(["data1"], () =>
    fetchData("http://localhost:8000/api/categories")
  );

  // const useGetSubCategory = (categoryId) =>
  //   useQuery(["data2"], () =>
  //     fetchData(
  //       `http://localhost:8000/api/subcategories?category=${categoryId}`
  //     )
  //   );

  // const {
  //   data: data2,
  //   isLoading: isLoading2,
  //   isError: isError2,
  //   error: error2,
  // } = useGetSubCategory(category);

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery(
    ["data2", category],
    () =>
      fetchData(`http://localhost:8000/api/subcategories?category=${category}`),
    { enabled: !!category }
  );

  if (isLoading1) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-meWhite p-4 mt-4 rounded-3xl flex" dir="rtl">
      <form
        onSubmit={handleSubmit}
        action=""
        className=" flex flex-wrap gap-4 justify-center border-b-2 pb-4 w-full"
      >
        <input
          type="text"
          name="nameProduct"
          placeholder="نام محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          name="priceProduct"
          placeholder="قیمت محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          name="quantityProduct"
          placeholder="موجودی محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          name="brandProduct"
          placeholder="برند محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />
        <input
          type="text"
          name="descriptionProduct"
          placeholder="توضیحات محصول را وارد کنید"
          className="p-2 rounded-xl w-4/12"
        />

        <div className="relative w-4/12 ">
          <input
            name="imagesProduct"
            multiple
            type="file"
            className="absolute w-full h-full opacity-0"
            onChange={(e) => console.log(e.target.files)}
          />
          <p className="w-full h-full text-center">{selectPhotoAdmin}</p>
        </div>

        <select
          name="categoryProduct"
          id=""
          className="p-2 rounded-xl w-4/12"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option selected hidden>
            دسته بندی
          </option>
          {data1?.categories.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select
          name="subCategoryProduct"
          id=""
          className="p-2 rounded-xl w-4/12"
        >
          <option selected hidden>
            زیر دسته
          </option>
          {data2?.subcategories.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-4/6">
          اضافه کردن
        </button>
      </form>
    </div>
  );
};

AdminProducts.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminProducts;

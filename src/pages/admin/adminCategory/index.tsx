import CategoryTable from "@/components/Tables/CategoryTable";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";

const createCategory = async (categoryName) => {
  const response = await request.post("/categories", {
    name: categoryName,
  });
  return response.data;
};
// ==================
const createSubCategory = async ({ selectCategory, subCategoryName }) => {
  console.log(subCategoryName);
  const response = await request.post("/subcategories", {
    category: selectCategory,
    name: subCategoryName,
  });
  return response.data;
};

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

const AdminCategory = () => {
  // const [selectCategory, setSelectCategory] = useState("");
  const mutation = useMutation(createCategory);
  const { mutate: mutationsub } = useMutation({
    mutationKey: "subCategory",
    mutationFn: createSubCategory,
  });

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(["data1"], () => fetchData("/categories"));

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryName = e.target.elements.categoryName.value;
    mutation.mutate(categoryName);
  };

  const handleSubmitSub = (e) => {
    e.preventDefault();
    const subCategoryName = e.target.elements.subCategoryName.value;
    const selectCategory = e.target.elements.selectCategory.value;
    console.log(subCategoryName, selectCategory);
    mutationsub({ selectCategory, subCategoryName });
  };

  if (isLoading1) {
    return <div>Loading...</div>;
  }

  return (
    <div dir="rtl" className="  mt-4 rounded-3xl flex gap-4">
      <div className="w-3/12 flex flex-col gap-10">
        <form
          action=""
          className="bg-meMain p-4 py-8 rounded-xl w-full flex flex-col gap-4 items-center  "
          onSubmit={handleSubmit}
        >
          <h2 className="pb-8">اضافه کردن دسته بندی</h2>
          <input
            type="text"
            name="categoryName"
            placeholder="دسته بندی را وارد کنید"
            className="p-2 rounded-xl w-full"
          />
          <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-full">
            اضافه کردن
          </button>
        </form>
        <form
          onSubmit={handleSubmitSub}
          action=""
          className="bg-meMain p-4  flex flex-col py-8 rounded-xl gap-4 items-center"
        >
          <h2 className="pb-7">اضافه کردن زیرگروه</h2>
          <input
            type="text"
            name="subCategoryName"
            placeholder="زیر گروه را وارد کنید"
            className="p-2 rounded-xl w-full"
          />
          <select
            // onChange={(e) => {
            //   setSelectCategory(e.target.value);
            // }}
            name="selectCategory"
            id=""
            className="p-2 rounded-xl w-full"
          >
            <option value="" selected hidden>
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
          <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-full">
            اضافه کردن
          </button>
        </form>
      </div>
      <CategoryTable />
    </div>
  );
};

AdminCategory.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminCategory;

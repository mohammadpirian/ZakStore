import useGetCategory from "@/hooks/useGetCategory";
import React from "react";


const SidebarCategory = () => {
  const {
    data: category,
    isLoading: isLoadingcategory,
    isError: isErrorcategory,
    error: errorcategory,
  } = useGetCategory();
  return (
    <div className="w-[20%] px-4" dir="rtl">
        <p className="text-xs text-meHalfBlack p-4">فروشگاه اینترنتی زاک استور / مردانه</p>
      <div className="border flex flex-col gap-4 p-4 rounded-xl">
        {category.categories &&
          category.categories.map((item: GetCategory) => {
            return (
              <div key={item._id} className="flex flex-col gap-2">
                <button className="flex px-4">{item.name}</button>
                {/* <SubCategory id={item._id} /> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SidebarCategory;

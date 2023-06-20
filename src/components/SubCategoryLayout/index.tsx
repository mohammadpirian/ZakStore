import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/utils/request";
import Link from "next/link";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data.subcategories;
};
const SubCategoryLayout = ({ id }: { id: string | undefined }) => {
  // console.log(id);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery([`data${id}`], () => fetchData(`/subcategories?category=${id}`));

  if (isLoading2) {
    return <div>Loading...</div>;
  }
  return data2?.map((item2: any) => {
    return (
      <Link
        key={item2?._id}
        href={{
          pathname: `/subcategoryProduct/${item2?.name}`,
          query: { id: item2?._id },
        }}
      >
        <button
          key={data2._id}
          onClick={(e) => console.log(e.target)}
          className="hover:bg-gray-100 cursor-pointer px-1 rounded w-full p-2 flex"
        >
          {item2.name}
        </button>
      </Link>
    );
  });
};

export default SubCategoryLayout;

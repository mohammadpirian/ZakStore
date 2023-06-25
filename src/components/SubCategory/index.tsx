import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/utils/request";
import Link from "next/link";

interface Props {
  id: string | undefined;
  setIsDropdownOpen: (isDropdownOpen: boolean) => void;
  isDropdownOpen: boolean;
}

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data.subcategories;
};

const SubCategory = ({ id, setIsDropdownOpen, isDropdownOpen }: Props) => {
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
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex py-1 pl-8 pr-2  hover:bg-gray-100 cursor-pointer px-1 rounded"
        >
          {item2.name}
        </button>
      </Link>
    );
  });
};

export default SubCategory;

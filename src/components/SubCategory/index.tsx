import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data.data.subcategories;
};
const SubCategory = ({ id }: { id: string }) => {
  console.log(id);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery([`data${id}`], () =>
    fetchData(`http://localhost:8000/api/subcategories?category=${id}`)
  );

  if (isLoading2) {
    return <div>Loading...</div>;
  }
  return data2?.map((item2: any) => {
    return (
      <a
        key={data2._id}
        className="hover:bg-gray-100 cursor-pointer px-1 rounded"
      >
        {item2.name}
      </a>
    );
  });
};

export default SubCategory;

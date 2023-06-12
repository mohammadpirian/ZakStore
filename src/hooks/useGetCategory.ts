import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

export default function useGetCategory() {
  const category = useQuery(["category"], () => fetchData("/categories"));
  // console.log(category);
  return category;
}

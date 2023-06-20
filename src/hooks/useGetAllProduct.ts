import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

export default function useGetAllProduct() {
  const productSub = useQuery(
    ["productSub"],
    () => fetchData(`/products?limit=all`)
  );
  return productSub;
}

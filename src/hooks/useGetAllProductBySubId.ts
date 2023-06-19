import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

export default function useGetAllProductBySubId(id: string | undefined) {
  const productSub = useQuery(
    ["productSub", id],
    () => fetchData(`/products?subcategory=${id}`),
    { enabled: !!id }
  );
  return productSub;
}

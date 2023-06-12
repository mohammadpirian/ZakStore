import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

export default function useGetProductById(id: string|undefined) {
  const product = useQuery(
    ["product", id],
    () => fetchData(`/products/${id}`),
    { enabled: !!id }
  );
  return product;
}

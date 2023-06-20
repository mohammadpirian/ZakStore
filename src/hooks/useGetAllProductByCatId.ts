import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

export default function useGetAllProductByCatId(id: string | undefined) {
  const productCat = useQuery(
    ["productCat", id],
    () => fetchData(`/products?category=${id}&limit=all`),
    { enabled: !!id }
  );
  return productCat;
}

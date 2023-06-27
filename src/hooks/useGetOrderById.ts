import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

export default function useGetOrderById(id: string | undefined) {
  const order = useQuery(["order", id], () => fetchData(`/orders/${id}`), {
    enabled: !!id,
  });
  return order;
}

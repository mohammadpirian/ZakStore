import { CardSlider, Slider } from "@/components";
import CategoryRow from "@/components/CategoryRow/CategoryRow";
import { request } from "@/utils/request";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

export default function Home() {
  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(["data1"], () => fetchData("/categories"));

  if (isLoading1) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>ZakStore</title>
      </Head>
      <main className="pt-16 bg-meMain">
        <CategoryRow />
        <Slider />
        {data1?.categories.map((item) => {
          return <CardSlider key={item._id} item={item} />;
        })}
      </main>
    </>
  );
}

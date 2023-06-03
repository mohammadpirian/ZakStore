import { CardSlider, Slider } from "@/components";
import CategoryRow from "@/components/CategoryRow/CategoryRow";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZakStore</title>
      </Head>
      <main className="pt-16 bg-meMain">
        <CategoryRow />
        <Slider />
        <CardSlider />
        <CardSlider />
      </main>
    </>
  );
}

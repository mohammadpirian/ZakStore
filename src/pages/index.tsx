import { CardSlider, Slider } from "@/components";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZakStore</title>
      </Head>
      <main className="pt-24">
        <Slider />
        <CardSlider />
        <CardSlider />
      </main>
    </>
  );
}

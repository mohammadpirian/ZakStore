import { Layout } from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const layoutComponent =
    Component.getLayout ||
    function (page: any) {
      return <Layout>{page}</Layout>;
    };
  return layoutComponent(<Component {...pageProps} />);
}

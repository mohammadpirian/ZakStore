import { Html, Head, Main, NextScript } from "next/document";
import { IconBase } from "react-icons/lib";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ZakStore</title>
        <link rel="icon" href="/images/logo2.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

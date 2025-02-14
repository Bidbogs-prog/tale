import Head from "next/head";
import GiftButton from "./components/giftButton";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="./public/favicon.ico" />
      </Head>
      <GiftButton />;
    </div>
  );
}

import Head from "next/head";
import CoinList from "../Components/Search/CoinList";

export default function Home({ dataCoin }) {
  return (
    <div className="px-2">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CoinList dataCoin={dataCoin} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const dataCoin = await res.json();

  return {
    props: {
      dataCoin,
    },
  };
};

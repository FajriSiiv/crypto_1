import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Details = ({ coin }) => {
  const [color, setColor] = useState(null);
  const data = coin.market_data;

  const router = useRouter();

  useEffect(() => {
    data.price_change_24h_in_currency > 0
      ? setColor("emerald")
      : setColor("rose");
  }, []);

  return (
    <div
      key={coin.id}
      className="flex flex-col justify-center items-center pt-20 "
    >
      <p
        className="px-8 py-2 bg-rose-500 text-white rounded-md absolute top-8 left-8 cursor-pointer"
        onClick={() => router.back()}
      >
        Back
      </p>
      <div className="card flex flex-col justify-center items-center border-[2px] border-purple-400 px-5 py-3">
        <p className="text-5xl pb-3">{coin.name}</p>
        <img src={coin.image.large} width={200} height={200} alt={coin.id} />
        <p className="py-3 text-4xl">${data.current_price.usd}</p>
        <span className={`text-${color}-500 text-3xl`}>
          {data.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch("https://api.coingecko.com/api/v3/coins/" + id);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}

export default Details;

import React from "react";
import Coins from "../Coins";

const CoinList = ({ dataCoin }) => {
  return (
    <div className="d-flex flex-col justify-center items-center text-sm sm:text-base lg:text-xl">
      <h1 className="lg:text-5xl text-2xl text-center pt-14 pb-8 uppercase font-semibold">
        Cryptocurrency
      </h1>
      <div className="flex w-[100%] my-2 py-2 px-2 border-solid border-2 rounded-[3px]">
        <p className="w-[40%] sm:w-[30%] md:w-[25%] mr-2">Cryptocurrency</p>
        <p className="w-[35%] sm:w-[35%] md:w-[15%]">Price</p>
        <p className="sm:w-[20%] hidden md:block md:w-[10%]">Symbol</p>
        <p className="w-[20%] hidden sm:block sm:w-[30%] md:w-[20%]">Volume</p>
        <p className="w-[20%] sm:w-[15%] md:w-[10%]">24H</p>
        <p className="w-[20%] hidden md:block md:w-[20%]">Market Cap</p>
      </div>

      {dataCoin.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            simbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default CoinList;

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Coins = ({
  name,
  price,
  simbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    priceChange > 0 ? setColor("emerald") : setColor("rose");
  }, []);

  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <div
        key={id}
        className="flex items-center w-[100%] my-2 py-2 px-2 border-solid border-2 rounded-[3px] cursor-pointer  text-sm sm:text-base lg:text-xl"
      >
        <div className="w-[10%] sm:w-[5%] mr-2">
          <img
            src={image}
            alt={name}
            width={30}
            height={30}
            className="object-contain "
          />
        </div>
        <h2 className="flex w-[30%] sm:w-[25%] md:w-[20%]">{name}</h2>
        <p className="w-[35%] md:w-[15%]">${price}</p>
        <p className="uppercase sm:w-[20%] hidden md:block md:w-[10%]">
          {simbol}
        </p>
        <p className=" lg:w-[20%] hidden sm:block sm:w-[30%] md:w-[20%]">
          ${volume.toLocaleString()}
        </p>
        <span
          className={`text-${color}-500 lg:w-[10%] w-[20%] text-sm  sm:w-[15%] md:w-[10%]`}
        >
          {priceChange.toFixed(2)}%
        </span>

        <p className="lg:w-[20%] hidden md:block md:w-[20%]">
          ${marketcap.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default Coins;

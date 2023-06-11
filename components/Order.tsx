import Image from "next/image";
import React from "react";
import MoreOptionIcon from "./icons/MoreOptionIcon";

type Props = {
  barberName: string;
  barberImg: string;
  hairStyle: {
    name: string;
    price: string;
  };
  date: string;
  expand: boolean;
};

const Order = ({ barberName, barberImg, hairStyle, date, expand }: Props) => {
  return (
    <div className="relative flex flex-col space-y-2">
     
      <div className="flex gap-2 p-2 border-y">
        <span
          className={`transform cursor-pointer transition-all duration-200 ease-linear ${
            expand ? "rotate-0" : "rotate-180"
          }`}
        >
          <MoreOptionIcon />
        </span>
        <p>Order</p>
      </div>
      <div className="">
        {barberName && barberImg && (
          <div className="flex gap-2">
            <div className="w-10 h-10 overflow-hidden bg-purple-500 rounded-full">
              <Image src={barberImg} alt={barberName} width={50}height={50} />
            </div>
            <span>{barberName}</span>
          </div>
        )}
        {hairStyle && <div>
          <span>{hairStyle.name}</span>
          <span>{hairStyle.price}</span>
        </div>}
      </div>
    </div>
  );
};

export default Order;

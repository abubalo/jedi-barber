import React from "react";
import Image from "next/image"
type Props = {
  user: Record<string, string>;
  hairStyle: {
    name: string;
    price: number;
  };
  date: string;
  expand: boolean;
  duration: string;
  padding?: string
};
const OrderDetail = ({ user, hairStyle, date, expand, duration, padding="p-3"}: Props) => {
  return (
    <>
      <div className={padding}>
        <div className="flex gap-3">
          {user && (
            <div className="w-10 h-10 overflow-hidden bg-purple-500 rounded-md">
              <Image src={user.img} alt={user.name} width={80} height={80} />
            </div>
          )}
          <div className="w-full flex justify-between">
            {hairStyle && (
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{user.name}.</h1>
                <span>{hairStyle.name}</span>
              </div>
            )}
            <div>
              <span>${hairStyle.price}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>{date}</span>
          <span>{duration}</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>${hairStyle.price + 20}</span>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;

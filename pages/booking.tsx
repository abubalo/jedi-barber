import BookingWidget from "@/components/BookingWidget";
import React from "react";

type Props = {};

const booking = (props: Props) => {
  return (
    <div className=" bg-black text-white">
      <div className="container mx-auto w-full h-screen flex justify-between items-center">
        <h1 className="text-2xl font-bold">Get best style you can</h1>
        <BookingWidget />
      </div>
    </div>
  );
};

export default booking;

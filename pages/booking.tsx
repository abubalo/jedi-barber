import BookingWidget from "@/components/bookingWidgets/BookingWidget";
import Overlay from "@/components/Overlay";
import React from "react";

type Props = {};

const booking = (props: Props) => {
  return (
    <div className="text-white bg-black bg-center bg-cover bg-hero2">
      <div className="hidden md:block">
        <Overlay />
      </div>
      <div className="container flex items-center justify-between w-full h-screen mx-auto">
        <h1 className="hidden z-10 text-2xl font-bold md:block">Get best style you can</h1>
        <BookingWidget />
      </div>
    </div>
  );
};

export default booking;

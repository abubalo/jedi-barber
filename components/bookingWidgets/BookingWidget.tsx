import React from "react";
import Barber from "../barber/Barber";
import Button from "../Button";

type Props = {};
    function handleClick(){
        // 
    }

const BookingWidget = (props: Props) => {
  return <div className="z-10 w-full h-screen p-3 overflow-y-auto text-black bg-white rounded-md md:w-1/2 lg:w-1/3 lg:h-90v">
   <Barber />
  </div>;
};

export default BookingWidget;

import React from "react";
import Button from "./Button";

type Props = {};
    function handleClick(){
        // 
    }

const BookingWidget = (props: Props) => {
  return <div className="w-full h-4/5 p-3 bg-white md:w-1/4 text-black">
   <p> hello there</p>
   <Button onClick={handleClick} color={"bg-green-500"} type="button"/>
  </div>;
};

export default BookingWidget;

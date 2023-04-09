import React from "react";
import Button from "./Button";

type Props = {};
    function handleClick(){
        // 
    }

const BookingWidget = (props: Props) => {
  return <div className="w-full p-3 text-black bg-white rounded-md h-4/5 md:w-1/4">
   <p> hello there</p>
   <Button onClick={handleClick} color={"bg-green-500"} type="button"/>
  </div>;
};

export default BookingWidget;

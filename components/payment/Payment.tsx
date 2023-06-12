import React from "react";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

type Props = {
  onPrevStep: () => void;
  onNextStep: () => void;
};
const Payment = ({ onPrevStep, onNextStep }: Props) => {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between p-2 bg-white border-b">
        <h1 className="text-xl font-semibold">Choose an hairstyle</h1>
        <div className="flex gap-2">
          <span
            className="p-2 transform rotate-180 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50"
            onClick={onPrevStep}
          >
            <NextIcon />
          </span>
          {/* <span
            className="p-2 transform rotate-180 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50"
            onClick={onNextStep}
          >
            <PrevIcon />
          </span> */}
        </div>
      </div>
      <div>Payment</div>
    </>
  );
};

export default Payment;

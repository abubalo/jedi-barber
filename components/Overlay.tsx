import React from "react";

type Props = {};

const Overlay = (props: Props) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-screen bg-black bg-opacity-80 z-1"></div>
  );
};

export default Overlay;

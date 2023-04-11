import {useState} from "react";
import Barber from "../barber/Barber";
import Button from "../Button";
import Calender from "../calender/Calender";
import HairStyleGallery from "./HairStyleGallery";

type Props = {};



const BookingWidget = () => {
  
  const [index, setIndex] = useState(0)

  const container ={}
  
  function handleSlider(){
    setIndex(index + 1)
  }
  return (
    <div className="z-10 w-full h-screen overflow-y-auto text-black bg-white rounded-md md:w-1/2 lg:w-1/3 lg:h-90v">
      
      <div className="" onClick={handleSlider}>
        <Barber />
      </div >
      <div onClick={handleSlider}>
        <HairStyleGallery />
      </div>
      <div onClick={handleSlider}>
        <Calender />
      </div>
    </div>
  );
};

export default BookingWidget;

import React from "react";
import Barber from "../barber/Barber";
import Button from "../Button";
import Calender from "../calender/Calender";
import CustomCalendar from "../calender/CustomeCalender";
import HairStyleGallery from "./HairStyleGallery";

type Props = {};

const availableTime=[
  "08:00 am", "80: 40am",
  "09:20 am", "10:00 am",
  "10:40 am", "11:20 am",
  "12:00 am", "11:40 am",
  "13:00 am", "11:40 am",
  "10:40 am", "11:20 am",
  "10:40 am", "11:20 am",
  "10:40 am", "11:20 am",
  
]

const BookingWidget = (props: Props) => {
  return (
    <div className="z-10 w-full h-screen overflow-y-auto text-black bg-white rounded-md md:w-1/2 lg:w-1/3 lg:h-90v">
      {/* <div>
        <Barber />
      </div> */}
      {/* <div>
        <HairStyleGallery />
      </div> */}
      <div>
        <Calender />
      </div>
    </div>
  );
};

export default BookingWidget;

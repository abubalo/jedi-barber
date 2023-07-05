import { useState } from "react";
import Barber from "../barber/Barber";
import Button from "../Button";
import Calender from "../calender/Calender";
import HairStyleGallery from "./HairStyleGallery";
import Order from "../Order";
import Payment from "../payment/Payment";

type Props = {};

const BookingWidget = () => {
  const [index, setIndex] = useState(1);
  const [expand, setExpand] = useState(false);

  const [staff, setStaff] = useState({});
  const [hairStyle, setHairStyle] = useState({});
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [hasPaid, setHasPaid] = useState(false);

  function handleNextStep() {
    setIndex(index + 1);
  }

  function handlePrevStep() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleUserSelect() {
    //
  }

  return (
    <div className="relative z-10 w-full h-screen overflow-y-auto text-black bg-white rounded-md md:w-1/2 lg:w-1/3 lg:h-90v">
      <div className="">
        {index == 1 && <Barber onNextStep={handleNextStep} />}
      </div>

      <div className="">
        {index === 2 && (
          <HairStyleGallery
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
      </div>

      <div className="">
        {index === 3 && (
          <Calender onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
        )}
      </div>
      <div className="">
        {index === 4 && (
          <Payment
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
            user={{ name: "Bryan Johnson", img: "/assets/barber1.jpg" }}
            hairStyle={{ name: "Taper fade", price: 10 }}
            date={"Oct. 12th at 1pm"}
            duration={"45 minutes"}
            expand={expand}
          />
        )}
      </div>

      <div
        className={`sticky bottom-0 w-full bg-gray-50 transition-all duration-200 ease-linear z-30  ${
          expand ? "h-full" : "h-max"
        } ${index === 4 ? "hidden" : "block"}`}
        onClick={() => setExpand(!expand)}
      >
        <Order
          user={{ name: "Bryan Johnson", img: "/assets/barber1.jpg" }}
          hairStyle={{ name: "Taper fade", price: 10 }}
          date={"Oct. 12th at 1pm"}
          duration={"45 minutes"}
          expand={expand}
        />
      </div>
    </div>
  );
};

export default BookingWidget;

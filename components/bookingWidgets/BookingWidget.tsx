import { useState } from "react";
import Barber from "../barber/Barber";
import Button from "../Button";
import Calender from "../calender/Calender";
import HairStyleGallery from "./HairStyleGallery";
import Order from "../Order";

type Props = {};

const BookingWidget = () => {
  const [index, setIndex] = useState(1);
  const [expand, setExpand] = useState(false);

  const [barber, setBarber] = useState({});
  const [hairStyle, setHairStyle] = useState({});
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState("");


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
        {index === 3 && <Calender onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
      </div>

      <div
        className={`sticky bottom-0 w-full bg-gray-50 ${
          expand ? "h-full" : "h-max"
        }`}
        onClick={() => setExpand(!expand)}
      >
        <Order
          barberName={"Kenzo"}
          barberImg={"/src"}
          hairStyle={{ name: "name", price: "$10" }}
          date={""}
          expand={expand}
        />
      </div>
    </div>
  );
};

export default BookingWidget;

import { useState } from "react";
import { format, addDays } from "date-fns";
import {motion} from "framer-motion"
// import { Icon } from "@iconify/react";
import Time from "./Time";
import PrevIcon from "../icons/PrevIcon";
import GetDays from "./Days";

interface Days {
  day: string;
  dayOfWeek: String;
}

type Props = {
  onPrevStep: () => void;
  onNextStep: () => void;
};

const Calender = ({ onPrevStep, onNextStep }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | number>(null);

  const [time, setTime] = useState<string[]>(Time);
  const [SelectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);

  function handleDateInfo(time: number, day: number, month: number) {
    // setTime(time);
    // setDay(day);
    setMonth(month);
  }

  function handleSelectedTime(index: number, time: string) {
    setTime((allTimes) => {
      const newTime = [...allTimes];
      newTime[index] = time;
      return newTime;
    });
    setSelectedTime(time);
    console.log(time);
  }

  function handleSelectedDay(index: number, item: string) {
    // setTime()
  }

  const days: Days[] = [];
  for (let i = 0; i < 6; i++) {
    const day = format(addDays(startDate, i), "d");
    const dayOfWeek = format(addDays(startDate, i), "EEE");
    days.push({ day, dayOfWeek });
  }

  return (
    <motion.div 
    initial={{translateX: "100%"}}
    animate={{translateX:0}}
    exit={{translateX: "-100%"}}
    transition={{ease: "easeInOut", duration: 0.7}}
    className="w-full h-full"
    >
      <motion.div 
      initial={{translateY: -100}}
      animate={{translateY: 0}}
      exit={{translateY: -100}}
      transition={{ease: "linear", duration: 0.5}}
      className="sticky top-0 z-10 flex items-center justify-between p-2 bg-white border-b">
          <h1 className="text-xl font-semibold">Select time</h1>
        <div className="flex gap-2">
          <span
            className="p-2 transform bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50"
            onClick={onPrevStep}
          >
            <PrevIcon />
          </span>
          {/* <span
            className="p-2 transform rotate-180 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50"
            onClick={onNextStep}
          >
            <NextIcon />
          </span>  */}
        </div>
      </motion.div>
      
      <GetDays
          setTime={setTime}
          setSelectedTime={setSelectedTime}
          time={time}
        />
    </motion.div>
    
  );
};

export default Calender;

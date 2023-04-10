import { useState } from "react";
import { format, addDays } from "date-fns";
import NextIcon from "../icons/BackwardIcon";
import DownIcon from "../icons/MoreOptionIcon";
// import { Icon } from "@iconify/react";
import Time from "./Time";

type Props = {};

const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | number>(null);

  const [time, setTime] = useState<string[]>(Time);
  const [SelectedTime, setSelectedTime] = useState<string | null>(null);
  const [Day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);

  function handleDateInfo(time: number, day: number, month: number) {
    // setTime(time);
    setDay(day);
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
  

  const days = [];
  for (let i = 0; i < 6; i++) {
    const day = format(addDays(startDate, i), "d");
    const dayOfWeek = format(addDays(startDate, i), "EEE");
    days.push({ day, dayOfWeek });
  }

  return (
    <div className="w-full h-full">
      <div className="sticky top-0 z-10 flex items-center justify-between p-2 bg-white border-b">
        <NextIcon />
        <h1 className="text-xl font-semibold">Select time</h1>
      </div>
      <div className="h-full p-4 bg-gray-50">
        <div className="flex flex-col space-y-2">
          <div>{format(startDate, "MMMM, yyyy")}</div>
          <div className="flex justify-between gap-2">
            {days.map((item, index) => (
              <span key={index} className="flex flex-col gap-1">
                <span className="flex items-center p-2 px-3 border border-green-700 rounded-full aspect-square">
                  {item.day}
                </span>
                <span className="text-sm text-center">{item.dayOfWeek}</span>
              </span>
            ))}

            <span className="flex items-center justify-center p-2 bg-white border rounded-full cursor-pointer h-min ">
              <DownIcon />
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {time.map((time, index) => (
              <span
                key={index}
                onClick={() => handleSelectedTime(index, time)}
                className={`p-2 border-2 border-gray-100 text-center cursor-pointer bg-white rounded-md ${
                  time.includes("45")
                    ? "cursor-not-allowed border-red-100 bg-transparent"
                    : " "
                }`}
              >
                {time}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;

import { format, addDays } from "date-fns";
import React, { useState } from "react";

type Props = {
  time: string[];
  setTime: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
};

interface Days {
  day: string;
  dayOfWeek: String;
}
const GetDays = ({ time, setTime, setSelectedTime }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isDaySelected, setIsDaySelected] = useState<number | null>(null);
  const [isTimeSelected, setIsTimeSelected] = useState<number | null>(null);

  const days: Days[] = [];

  for (let i = 0; i < 6; i++) {
    const day = format(addDays(startDate, i), "d");
    const dayOfWeek = format(addDays(startDate, i), "EEE");
    days.push({ day, dayOfWeek });
  }

  function handleSelectedTime(index: number, time: string) {
    setTime((allTimes) => {
      const newTime = [...allTimes];
      newTime[index] = time;
      return newTime;
    });

    const invalidTime = time.includes("45")
    if(invalidTime){
      setSelectedTime(time);
    }
    setIsTimeSelected(index);
    console.log(time);
  }

  function handleSelectedDay(index: number, day: string) {
    console.log(day);
    setIsDaySelected(index)
  }

  
  return (
    <>
      <div className="h-full p-4 bg-gray-50">
        <div className="flex flex-col space-y-2">
          <div>{format(startDate, "MMMM, yyyy")}</div>
          <div className="flex justify-between gap-2">
            {days.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className={`p-[0.1rem] flex items-center justify-center border-2 rounded-full cursor-pointer ${isDaySelected === i ? "border-green-500" : "border-transparent "}`}>
                  <span
                    onClick={() => handleSelectedDay(i, item.day)}
                    className="flex items-center p-1 px-2 border rounded-full aspect-square"
                  >
                    {item.day}
                  </span>
                </span>
                <span className="text-sm text-center">{item.dayOfWeek}</span>
              </div>
            ))}

            {/* <span className="flex items-center justify-center p-2 bg-white border rounded-full cursor-pointer h-min ">
              <DownIcon />
            </span> */}
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
                } ${isTimeSelected === index ? "border-green-400" : ""}`}
              >
                {new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDays;

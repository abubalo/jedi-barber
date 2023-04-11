import React, { useState } from "react";
import CancelIcon from "../icons/CancelIcon";
import BarberCard from "./BarberCard";
import {motion} from "framer-motion"

interface Barber {
  id: number;
  name: string;
  image: string;
  available: boolean;
}



const data: Barber[] = [
  {
    id: 1,
    name: "Alicia Benson",
    image: "/assets/barber1.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Remi Alabi",
    image: "/assets/barber2.jpg",
    available: false,
  },
  {
    id: 3,
    name: "Idris basker",
    image: "/assets/barber3.jpg",
    available: false,
  },
  {
    id: 4,
    name: "Kenzo",
    image:
      "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    available: true,
  },
  {
    id: 5,
    name: "Any Barber",
    image: "",
    available: true,
  },
];

const Barber = () => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelected(barberId: number) {
    setSelected(barberId);
    console.log(barberId)
  }

  return (
    <motion.div 
    initial={{translateX: 100}}
    animate={{translateX:0}}
    exit={{translateX: -100}}
    transition={{ease: "backInOut"}}
    className="space-y-2 ">
      <motion.div 
      initial={{translateY: -50}}
      animate={{translateY: 0}}
      exit={{translateY: -50}}
      transition={{ease: "linear"}}
      className="sticky top-0 z-20 flex items-center justify-between p-2 bg-white border-b">
        <h1 className="text-xl font-semibold">Choose Professionals</h1>
        <CancelIcon />
      </motion.div>

      <motion.div 
      initial={{opacity: 0, translateY: 20}}
      animate={{opacity: 1, translateY: 0}}
      className="grid grid-cols-2 gap-2 px-4 ">
        {data.map((barber) => (
          <BarberCard
            key={barber.id}
            name={barber.name}
            src={barber.image}
            available={barber.available}
            selected={selected === barber.id}
            onSelected={() => handleSelected(barber.id)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Barber;

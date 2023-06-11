import React, { useState } from "react";
import BarberCard from "./BarberCard";
import NextIcon from "../icons/NextIcon";
import { motion } from "framer-motion";

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

type Props = {
  onNextStep: () => void;
};
const Barber = ({ onNextStep }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelected(barberId: number) {
    setSelected(barberId);
    console.log(barberId);
  }

  return (
    <motion.div className="space-y-2 ">
      <motion.div
        transition={{ ease: "linear", duration: 0.2 }}
        className="sticky top-0 z-20 flex items-center justify-between p-2 bg-white border-b"
      >
        <h1 className="text-xl font-semibold">Choose Professionals</h1>
        <span onClick={onNextStep} className="p-2 bg-gray-100 rounded-full">
          <NextIcon />
        </span>
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        className="grid grid-cols-2 gap-2 px-4 "
      >
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

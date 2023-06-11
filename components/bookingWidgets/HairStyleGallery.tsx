import { useState } from "react";
import BackwardIcon from "../icons/BackwardIcon";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";
import HairStyleCard from "./HairStylesCard";
import { motion } from "framer-motion";

type Props = {
  onNextStep: () => void;
  onPrevStep: () => void;
};

interface HairStyles {
  id: number;
  name: string;
  time: string;
  image: string;
  price: number;
}

const hairStyles: HairStyles[] = [
  {
    id: 1,
    name: "Buzz Cut",
    time: "10 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 10,
  },
  {
    id: 2,
    name: "Crew Cut",
    time: "15 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 20,
  },
  {
    id: 3,
    name: "Fade",
    time: "20 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 30,
  },
  {
    id: 4,
    name: "Side Part",
    time: "25 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 40,
  },
  {
    id: 5,
    name: "Pompadour",
    time: "30 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 50,
  },
  {
    id: 6,
    name: "Quiff",
    time: "35 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 60,
  },
  {
    id: 7,
    name: "Slicked Back",
    time: "40 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 70,
  },
  {
    id: 8,
    name: "Man Bun",
    time: "45 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 80,
  },
  {
    id: 9,
    name: "Dreadlocks",
    time: "60 minutes",
    image: "/uploads/hairstyles/buzz.jpg",
    price: 90,
  },
  {
    id: 10,
    name: "Mullet",
    time: "90 minutes",
    image: "/uploads/hairstyles/hbuzz.jpg",
    price: 100,
  },
];

const HairStyleGallery = ({ onNextStep, onPrevStep }: Props) => {
  const [selected, setSelected] = useState<null | number>(null);

  function handleSelected(hairStyleId: number) {
    setSelected(hairStyleId);
    console.log(hairStyleId);
  }
  return (
    <motion.div
      // initial={{ opacity: 0}}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0}}
      // transition={{ ease: "linear" }}
      className="w-full h-full space-y-2"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between p-2 bg-white border-b">
        <h1 className="text-xl font-semibold">Choose an hairstyle</h1>
        <div className="flex gap-2">
          <span
            className="p-2 transform rotate-180 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50"
            onClick={onPrevStep}
          >
            <NextIcon />
          </span>
          <span
            className="p-2 transform rotate-180 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50"
            onClick={onNextStep}
          >
            <PrevIcon />
          </span>
        </div>
      </div>
      <motion.div
        initial={{ x : -100 }}
        animate={{ x : 0 }}
        exit={{ x : -100 }}
        // transition={{ duration: 0.2 }}
        className="grid grid-cols-2 gap-2 p-4"
      >
        {hairStyles.map((hairStyle) => (
          <HairStyleCard
            key={hairStyle.id}
            src={hairStyle.image}
            selected={selected == hairStyle.id}
            onSelected={() => handleSelected(hairStyle.id)}
            name={hairStyle.name}
            time={hairStyle.time}
            price={hairStyle.price}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HairStyleGallery;

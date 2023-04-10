import { useState } from "react";
import NextIcon from "../icons/NextIcon";
import HairStyleCard from "./HairStylesCard";

type Props = {};

interface HairStyles{
  id: number;
  name: string;
  time: string;
  image:string;
  price: number;
}
const hairStyles: HairStyles[] = [
  {
    id: 1,
    name: "Buzz Cut",
    time: "10 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair1.jpg"
    price: 10,
  },
  {
    id: 2,
    name: "Crew Cut",
    time: "15 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair2.jpg"
    price: 20,
  },
  {
    id: 3,
    name: "Fade",
    time: "20 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair3.jpg"
    price: 30,
  },
  {
    id: 4,
    name: "Side Part",
    time: "25 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair4.jpg"
    price: 40,
  },
  {
    id: 5,
    name: "Pompadour",
    time: "30 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair5.jpg"
    price: 50,
  },
  {
    id: 6,
    name: "Quiff",
    time: "35 minutes",
    image: "https://i.ytimg.com/vi/jUo5aL2ImF4/maxresdefault.jpg",
    // image: "/assets/hairstyle/hair6.jpg"
    price: 60,
  },
  {
    id: 7,
    name: "Slicked Back",
    time: "40 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair7.jpg"
    price: 70,
  },
  {
    id: 8,
    name: "Man Bun",
    time: "45 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair8.jpg"
    price: 80,
  },
  {
    id: 9,
    name: "Dreadlocks",
    time: "60 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair9.jpg"
    price: 90,
  },
  {
    id: 10,
    name: "Mullet",
    time: "90 minutes",
    image:
      "https://haircutinspiration.com/wp-content/uploads/Temple-Faded-with-Short-Line-Up.jpeg",
    // image: "/assets/hairstyle/hair10.jpg"
    price: 100,
  },
];

const HairStyleGallery = (props: Props) => {
  const [selected, setSelected] = useState<null | number>(null);

  function handleSelected(hairStyleId: number) {
    setSelected(hairStyleId);
    console.log(hairStyleId);
  }
  return (
    <div className="w-full h-full space-y-2">
      <div className="sticky top-0 z-10 flex items-center justify-between p-2 bg-white border-b">
        <h1 className="text-xl font-semibold">Choose an hairstyle</h1>
        <NextIcon />
      </div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {hairStyles.map((hairStyle) => (
          <HairStyleCard
            key={hairStyle.id}
            src={hairStyle.image}
            selected={selected == hairStyle.id}
            onSelected={()=> handleSelected(hairStyle.id)}
            name={hairStyle.name}
            time={hairStyle.time}
            price={hairStyle.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HairStyleGallery;

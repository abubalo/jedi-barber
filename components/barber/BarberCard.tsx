import Image from "next/image";
import {motion} from "framer-motion"
import Check from "../icons/CheckIcon";

type Props = {
  src: string;
  name: string;
  available: boolean;
  selected: boolean;
  onSelected: () => void;
};

const BarberCard = ({
  onSelected,
  selected,
  src,
  name,
  available,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {

    function handleClick(){
        if(available){
            onSelected()
        }
    }
  return (
    <div
      {...rest}
      className={`relative flex flex-col items-center p-6 space-y-2 text-center border-2 border-gray-100 cursor-pointer rounded-md ${
        selected ? "border-green-600" : ""
      } ${available ? "" : "cursor-not-allowed bg-gray-50 opacity-60"}`}
      
      onClick={handleClick}
    >
      {selected && (
        <motion.div 
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0}}
        transition={{ ease: "easeInOut"}}
        className="absolute top-2 left-2" style={{ position: "absolute" }}>
          <Check />
        </motion.div>
      )}
      <div className="w-24 h-24 overflow-hidden rounded-md">
        <Image src={src} width={100} height={100} alt="barber" className="bg-pink-500 bg-cover " />
      </div>
      <div className="">
        <p>{name}</p>
        <small className="italic ">
          {available ? "Available" : "Unavailable"}
        </small>
      </div>
    </div>
  );
};

export default BarberCard;

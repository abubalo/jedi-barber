import {motion} from "framer-motion"
import CheckIcon from "../icons/CheckIcon";
import Check from "../icons/CheckIcon";
import NextIcon from "../icons/NextIcon";

type Props = {
  src: string;
  name: string;
  time: string;
  price:number;
  selected: boolean;
  onSelected: () => void;
};

const HairStyleCard = ({
  onSelected,
  selected,
  src,
  name,
  time,
  price,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {

    function handleClick(){
        
    }
  return (
    <div
      {...rest}
      className={`relative flex flex-col items-center p-6 space-y-2 text-center border-2 border-gray-100 cursor-pointer rounded-md ${
        selected ? "border-green-600" : ""
      }`}
      
      onClick={onSelected}
    >
      {selected && (
        <motion.div 
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0}}
        transition={{ ease: "easeInOut"}}
        className="absolute top-2 left-2" style={{ position: "absolute" }}>
          <CheckIcon />
        </motion.div>
      )}
      <div className="w-24 h-24 overflow-hidden rounded-md">
        <img src={src} alt="barber" className="bg-pink-500 bg-cover aspect-square" />
      </div>
      <div className="">
        <p>{name}</p>
        <small className="italic ">
          {time}
        </small>
      </div>
    </div>
  );
};

export default HairStyleCard;

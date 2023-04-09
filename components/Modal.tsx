import { ReactNode, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

const Modal = ({ isOpen, setIsOpen, children }: Props) => {
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            onClick={()=> setIsOpen(false)}
            className="fixed bg-black bg-opcity-5 top-0 left-0 right-0 bottom-0"
          ></div>
          <div className="fixed bg-white p-4 rounded-md border top=1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            {children}
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

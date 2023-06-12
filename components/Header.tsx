import Image from "next/image";
import React from "react";
import Button from "./Button";
import {motion} from "framer-motion"
import Link from "next/link";

type Props = {};


function Header({}: Props) {
  return (
    <header className="container fixed left-0 right-0 z-50 flex items-center justify-between w-full py-4 mx-auto text-white">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
      <span>
        <Image src="/assets/jedi-logo.png" width={100} height={100} alt="jedi logo" />
      </span>
      <Link href={"/about"} className="px-8 py-3 transition-all duration-150 border-2 border-white rounded-full cursor-pointer hover:text-black hover:bg-white">About</Link>
      <Link href={"/consultation"} className="px-8 py-3 transition-all duration-150 border-2 border-white rounded-full cursor-pointer hover:text-black hover:bg-white">Consultation</Link>
      <Link href={"/booking"} className="px-8 py-3 transition-all duration-150 border-2 border-white rounded-full cursor-pointer hover:text-black hover:bg-white">Book now</Link>
      {/* <Button type="button" onClick={smm} color={"text-green-300"} text={"Sign up"} bg={"bg-purple-500"}/> */}
    </header>
  );
}

export default Header;

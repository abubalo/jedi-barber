import { AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";
import Header from "./Header";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <Header />
      {children}
    </AnimatePresence>
  );
};

export default Layout;

import React, { JSXElementConstructor } from "react";
import Login from "./login";
import Header from "./header";
import Footer from "./Footer";
import { useSession } from "next-auth/react";

const Laylout = ({ children }: Element) => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {children}
      {session && <Footer />}
    </>
  );
};

export default Laylout;

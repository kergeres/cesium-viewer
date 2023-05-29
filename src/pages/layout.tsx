import React, { JSXElementConstructor } from "react";
import Login from "./login";
import Header from "./header";
import Footer from "./footer";
import { useSession } from "next-auth/react";

const Layout = ({ children = <Login /> }) => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {children}
      {session && <Footer />}
    </>
  );
};

export default Layout;

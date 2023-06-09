import React from "react";
import Login from "./login";
import Footer from "./footer";

import Header from "./header";
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

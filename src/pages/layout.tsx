import React from "react";
import Login from "./login";
import Header from "./header";
import { useSession } from "next-auth/react";
// eslint - disable - next - line;
import Footer from "./footer";

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

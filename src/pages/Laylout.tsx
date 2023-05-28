import React from "react";
import Login from "./login";
import Header from "./header";

const Laylout = ({ children = "" }: any) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default Laylout;

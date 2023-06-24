import React from "react";
import Login from "./login";
import GitHubIcon from "@mui/icons-material/GitHub";

import Header from "./header";
import { useSession } from "next-auth/react";
import { BottomNavigation } from "@mui/material";

const Layout = ({ children = <Login /> }) => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {children}
      {session && (
        <BottomNavigation
          sx={{
            backgroundColor: "#3c4043",
            bottom: 0,
            position: "absolute",
            width: "100vw",
          }}
          showLabels
        >
          <a target="_blank" href="https://github.com/kergeres">
            <GitHubIcon sx={{ m: 2 }}></GitHubIcon>
          </a>
        </BottomNavigation>
      )}
    </>
  );
};

export default Layout;

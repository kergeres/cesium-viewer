import { BottomNavigation } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
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
  );
}

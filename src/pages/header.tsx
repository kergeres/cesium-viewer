import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "./login";
export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    signOut().then((e) => {
      console.log(e);
    });
    if (!session) {
      router.back();
      console.log("kilepek");
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => handleLogout()} color="inherit">
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

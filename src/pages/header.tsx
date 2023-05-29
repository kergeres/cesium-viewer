import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button, Grid } from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function Home(props: Props) {
  const { window } = props;
  // ic mobile
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    signOut().then((e) => {
      console.log(e);
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {session && (
          <Button onClick={() => handleLogout()} color="inherit">
            LogOut
          </Button>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          {session && (
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={() => handleLogout()} color="inherit">
                  LogOut
                </Button>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ m: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

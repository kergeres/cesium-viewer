import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "./layout";
import { Box, Button, Typography } from "@mui/material";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // if user is logged in navigate to viewer (cesium map)
  if (session) {
    router.push("/viewer");
    return null;
  } else {
    return (
      <Layout>
        <Box
          sx={{
            p: 5,
            border: "1px solid white",
            marginLeft: "50%",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            display: "flex",
            transform: "translate(-50%, -50%)",
            top: "45%",
            position: "absolute",
            width: { xs: "80%", md: "auto" },
          }}
        >
          <Typography>Welcome, to see the magic, please sign in</Typography>
          <Button sx={{ mt: 3 }} variant="contained" onClick={() => signIn()}>
            Sign in
          </Button>
        </Box>
      </Layout>
    );
  }
};

export default Login;

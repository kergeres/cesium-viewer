import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Laylout from "./Laylout";
import { Box, Button, Typography } from "@mui/material";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    signIn().then((e) => {
      console.log(e);
    });
  };

  useEffect(() => {
    if (session?.user) {
      console.log(session);
    }
  }, [router, session]);

  if (session) {
    router.push("/dashboard");
    return;
  } else {
    return (
      <Laylout>
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
          <Typography>welcome, to see the magic, please sign in</Typography>
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => handleLogin()}
          >
            Sign in
          </Button>
          {/* <button onClick={() => signOut()}>kilep</button> */}
        </Box>
      </Laylout>
    );
  }
};

export default Login;

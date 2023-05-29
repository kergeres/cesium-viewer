import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Laylout from "./Laylout";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    signIn().then((e) => {
      console.log(e);
    });
  };
  const componentStyle = {
    height: "500px", // Példa: 200 pixeles magasság
    padding: "80px",
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
        <div style={componentStyle}>
          <p>you should log in</p>
          <button onClick={() => handleLogin()}>belep</button>
          <button onClick={() => signOut()}>kilep</button>
          login
        </div>
      </Laylout>
    );
  }
};

export default Login;

import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

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

      router.push("/wrapper");
    }
  }, [router, session]);

  return (
    <div>
      <p>you should log in</p>
      <button onClick={() => handleLogin()}>belep</button>
      <button onClick={() => signOut()}>kilep</button>
      login
    </div>
  );
};

export default Login;

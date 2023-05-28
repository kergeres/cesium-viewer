import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Layout() {
  const router = useRouter();

  useEffect(() => {
    // Átirányítás a /login oldalra
    router.push("/login");
  }, []);

  return <div>Továbbirányítás a bejelentkezéshez...</div>;
}

export default Layout;

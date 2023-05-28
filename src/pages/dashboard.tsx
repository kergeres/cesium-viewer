import React, { useEffect } from "react";
import Laylout from "./Laylout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const componentStyle = {
    height: "500px", // Példa: 200 pixeles magasság
    padding: "80px",
  };

  if (!session) {
    // Visszatérünk null-lal, ha nincs bejelentkezett felhasználó
    return null;
  } else {
    return (
      <Laylout>
        <div style={componentStyle}>Dashboard</div>
      </Laylout>
    );
  }
};

export default Dashboard;

import LoginPage from "./LoginPage";
import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const logIn = () => {
    setLoggedIn(true);
  };
  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      setLoggedIn(true);
    }
  }, []);
  if (loggedIn) {
    // const { data: session, status } = useSession();

    // if (status === "authenticated") {
    return <Dashboard />;
    // }
  } else {
    return <LoginPage logIn={logIn} />;
  }
}

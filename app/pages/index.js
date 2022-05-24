import LoginPage from "./LoginPage";
import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [credentials, setCredentials] = useState(false);
  const logIn = () => {
    setCredentials(window.localStorage.getItem("username"));
  };
  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      setCredentials(window.localStorage.getItem("username"));
    }
  }, []);
  if (credentials) {
    // const { data: session, status } = useSession();

    // if (status === "authenticated") {
    return <Dashboard credentials={credentials} />;
    // }
  } else {
    return <LoginPage logIn={logIn} />;
  }
}

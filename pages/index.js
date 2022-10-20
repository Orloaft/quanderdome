import { MainMenu } from "../components/MainMenu/MainMenu";
import Dashboard from "./Dashboard";
import { useEffect, useState, createContext } from "react";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import axios from "axios";

export const UserContext = createContext();
export default function Home() {
  const [credentials, setCredentials] = useState({ username: "" });

  //on initial render if temporary usernme is stored then set the state variable and render dashboard
  useEffect(() => {
    if (window.sessionStorage.getItem("authToken")) {
      axios
        .get(`/api/users/${window.sessionStorage.getItem("authToken")}`)
        .then((res) => setCredentials({ username: res.data.username }))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user: credentials, setCredentials }}>
      <ThemeProvider>
        {(credentials.username && <Dashboard />) || <MainMenu />}
      </ThemeProvider>
    </UserContext.Provider>
  );
}

import LoginPage from "./LoginPage";
import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [credentials, setCredentials] = useState(false);
  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
    document.documentElement.setAttribute("data-theme", "dark");
    if (!e.target.checked) {
      document.documentElement.removeAttribute("data-theme");
    }
  };
  const logIn = () => {
    setCredentials(window.localStorage.getItem("username"));
  };
  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      setCredentials(window.localStorage.getItem("username"));
    }
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      }

      window.localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  if (credentials) {
    // const { data: session, status } = useSession();

    // if (status === "authenticated") {
    return (
      <>
        {darkTheme !== undefined && (
          <form action="#">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={(e) => {
                  handleToggle(e);
                }}
              />
              <span className="slider"></span>
            </label>
          </form>
        )}
        <Dashboard credentials={credentials} />;
      </>
    );
    // }
  } else {
    return (
      <>
        {darkTheme !== undefined && (
          <form action="#">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </form>
        )}
        <LoginPage logIn={logIn} />;
      </>
    );
  }
}

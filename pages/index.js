import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { Particles } from "../components/Particles/Particles";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [credentials, setCredentials] = useState(false);
  //pass the temporary user name from localstorage
  const logIn = () => {
    setCredentials(window.localStorage.getItem("username"));
  };
  // handle darkmode toggle
  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
    document.documentElement.setAttribute("data-theme", "dark");
    if (!e.target.checked) {
      document.documentElement.removeAttribute("data-theme");
    }
  };
  const signOut = () => {
    window.localStorage.removeItem("username");
    setCredentials(false);
  };
  //on initial render if temporary usernme is stored then set the state variable and render dashboard
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
    return (
      <>
        {darkTheme !== undefined && (
          <form className="toggle-form" action="#">
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
        <Dashboard
          darkTheme={darkTheme}
          credentials={credentials}
          signOut={signOut}
        />
      </>
    );
    // }
  } else {
    return (
      // dark theme toggle component
      <>
        {darkTheme !== undefined && (
          <form className="toggle-form" action="#">
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
        <LoginPage darkTheme={darkTheme} logIn={logIn} />
      </>
    );
  }
}

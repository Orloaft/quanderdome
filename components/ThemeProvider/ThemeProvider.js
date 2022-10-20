import { useState, useEffect } from "react";

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(undefined);
  // handle darkmode toggle
  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
    document.documentElement.setAttribute("data-theme", "dark");
    if (!e.target.checked) {
      document.documentElement.removeAttribute("data-theme");
    }
  };
  useEffect(() => {
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
      {children}
    </>
  );
};

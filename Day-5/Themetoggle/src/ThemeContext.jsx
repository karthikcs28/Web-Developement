import { createContext, useState } from "react";

export const ThemeContext = createContext();

console.log("🟣 ThemeContext created");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  console.log("🟢 ThemeProvider rendered with theme:", theme);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      console.log("🔁 Theme changed to:", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

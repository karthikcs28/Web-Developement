import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("🟡 ThemeToggle rendered, current theme:", theme);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button
        onClick={() => {
          console.log("🟠 Toggle button clicked");
          toggleTheme();
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;

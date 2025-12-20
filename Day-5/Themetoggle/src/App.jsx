import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  console.log("🟢 AppContent rendered with theme:", theme);

  return (
    <div
      style={{
        padding: 40,
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh"
      }}
    >
      <h2>Context API Demo</h2>
      <ThemeToggle />
    </div>
  );
}

function App() {
  console.log("🟢 App rendered");

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

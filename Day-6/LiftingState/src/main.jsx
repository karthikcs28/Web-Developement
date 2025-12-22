import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles.css"

console.log("[MAIN] App started")

createRoot(document.getElementById("root")).render(<App />)

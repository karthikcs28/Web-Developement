import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./styles.css"

console.log("[MAIN] Import phase completed")
console.log("[MAIN] Initializing React root")

const rootElement = document.getElementById("root")
console.log("[MAIN] Root element found:", rootElement)

createRoot(rootElement).render(
  <BrowserRouter>
    {console.log("[ROUTER] BrowserRouter mounted")}
    <App />
  </BrowserRouter>
)

console.log("[MAIN] Application render triggered")

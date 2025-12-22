import { Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


console.log("[APP] App component loaded")


export default function App() {
return (
<AppProvider>
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Layout>
</AppProvider>
)
}
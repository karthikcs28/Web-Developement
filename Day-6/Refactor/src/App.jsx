import { Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
export default function App() {
return (
<AppProvider>
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/Contact" element={<Contact />} />
</Routes>
</Layout>
</AppProvider>
)
}
import { NavLink } from "react-router-dom"

console.log("[NAVBAR] Loaded")

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Karthik's Portfolio</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

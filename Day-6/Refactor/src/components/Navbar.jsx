import { NavLink } from "react-router-dom"
export default function Navbar() {
return (
<nav className="nav">
<h2>Portfolio</h2>
<div>
<NavLink to="/">Home</NavLink>
<NavLink to="/projects">Projects</NavLink>
<NavLink to="/contact">Contact</NavLink>
</div>
</nav>
)
}
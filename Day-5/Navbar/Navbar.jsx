import { useState, useEffect } from "react";
import "./App.css";

function Navbar() {
  console.log("🟢 Navbar rendered");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      console.log("📱 Mobile view detected");
    } else {
      console.log("🖥️ Desktop view detected");
    }
  }, []);

  const toggleMenu = () => {
    setOpen(prev => {
      console.log(prev ? "❌ Menu closed" : "✅ Menu opened");
      return !prev;
    });
  };

  return (
    <header className="navbar">
      <div className="logo">MyApp</div>

      <nav className={`nav-links ${open ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Cart</a>
        <a href="#">Profile</a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  console.log("🟢 Navbar rendered");

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("🟡 Navbar mounted");

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      console.log(
        mobile ? "📱 Mobile view active" : "🖥️ Desktop view active"
      );
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("❌ Navbar unmounted");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // ✅ IMPORTANT

  const toggleMenu = () => {
    setMenuOpen(prev => {
      console.log(prev ? "❌ Menu closed" : "✅ Menu opened");
      return !prev;
    });
  };

  return (
    <header className="navbar">
      <div className="logo">MyApp</div>

      {(menuOpen || !isMobile) && (
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Cart</a>
          <a href="#">Profile</a>
        </nav>
      )}

      {isMobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      )}
    </header>
  );
}

export default Navbar;

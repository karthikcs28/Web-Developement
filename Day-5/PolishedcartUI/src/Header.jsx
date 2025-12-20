function Header({ totalItems, openCart }) {
  console.log("🟢 Header rendered");

  return (
    <header className="header">
      <h1>Shopiee By Karthik</h1>

      <div className="cart-btn" onClick={openCart}>
        🛒 <span>{totalItems}</span>
      </div>
    </header>
  );
}

export default Header;

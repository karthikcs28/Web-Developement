function Header({ totalItems }) {
  console.log("🟢 Header rendered");

  return (
    <header className="header">
      <h1 className="logo">Shopee By Karthik</h1>

      <div className="cart-icon">
        🛒
        <span className="cart-count">{totalItems}</span>
      </div>
    </header>
  );
}

export default Header;

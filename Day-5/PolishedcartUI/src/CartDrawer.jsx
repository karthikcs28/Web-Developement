function CartDrawer({ open, close, cart, updateQty, checkout }) {
  console.log("🟢 CartDrawer rendered");

  const summary = cart.reduce(
    (acc, i) => {
      acc.totalItems += i.qty;
      acc.totalPrice += i.qty * i.price;
      return acc;
    },
    { totalItems: 0, totalPrice: 0 }
  );

  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={close}></div>

      <div className={`drawer ${open ? "show" : ""}`}>
        <div className="drawer-header">
          <h2>Cart</h2>
          <button onClick={close}>Go Back</button>
        </div>

        {cart.length === 0 && <p className="empty">Cart is empty</p>}

        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.title}</span>

            <div className="qty">
              <button onClick={() => updateQty(item.id, -1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
            </div>
          </div>
        ))}

        <div className="drawer-footer">
          <p>Total: ₹ {summary.totalPrice.toFixed(2)}</p>
          <button onClick={checkout}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;

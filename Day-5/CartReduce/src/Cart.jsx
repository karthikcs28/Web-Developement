import "./Cart.css";

function Cart({ cart, updateQty }) {
  console.log("🟢 Cart rendered");

  const summary = cart.reduce(
    (acc, item) => {
      acc.totalItems += item.qty;
      acc.totalPrice += item.qty * item.price;
      return acc;
    },
    { totalItems: 0, totalPrice: 0 }
  );

  console.log("🧾 Cart Summary:", summary);

  return (
    <aside className="cart">
      <h2>Cart</h2>

      {cart.length === 0 && <p className="empty">Your cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>

          <div className="qty">
            <button onClick={() => updateQty(item.id, -1)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, 1)}>+</button>
          </div>

          <span> ={(item.price * item.qty).toFixed(3)}</span>
        </div>
      ))}

      <div className="summary">
        <p>Total Items: {summary.totalItems}</p>
        <p>Total Price: {summary.totalPrice.toFixed(3)} Rs</p>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </aside>
  );
}

export default Cart;

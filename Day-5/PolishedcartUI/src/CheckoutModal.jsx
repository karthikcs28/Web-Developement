function CheckoutModal({ close, clearCart }) {
  console.log("🟢 CheckoutModal opened");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Order Placed ✅</h2>
        <p>Your order has been placed successfully.</p>

        <button
          onClick={() => {
            console.log("🧹 Clearing cart");
            clearCart();
            close();
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CheckoutModal;

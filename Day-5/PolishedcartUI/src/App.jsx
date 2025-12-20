import { useEffect, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";

function App() {
  console.log("🟢 App rendered");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [openCart, setOpenCart] = useState(false);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    console.log("💾 Saving cart to localStorage", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log("🛒 Add to cart:", product.title);

    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        return prev.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, change) => {
    console.log("🔄 Update qty:", id, change);

    setCart(prev =>
      prev
        .map(i =>
          i.id === id ? { ...i, qty: i.qty + change } : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      <Header totalItems={totalItems} openCart={() => setOpenCart(true)} />

      <ProductList addToCart={addToCart} />

      <CartDrawer
        open={openCart}
        close={() => setOpenCart(false)}
        cart={cart}
        updateQty={updateQty}
        checkout={() => setCheckout(true)}
      />

      {checkout && (
        <CheckoutModal
          close={() => setCheckout(false)}
          clearCart={() => setCart([])}
        />
      )}
    </>
  );
}

export default App;

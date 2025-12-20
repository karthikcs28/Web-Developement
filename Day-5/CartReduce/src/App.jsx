import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Header from "./Header";
import "./Cart.css";

function App() {
  console.log("🟢 App rendered");

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);

      if (found) {
        console.log("➕ Increase qty:", product.title);
        return prev.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      console.log("🆕 New product added:", product.title);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, change) => {
    console.log("🔄 Update quantity:", id, change);

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
      <Header totalItems={totalItems} />

      <main className="layout">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} updateQty={updateQty} />
      </main>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./Cart.css";

function ProductList({ addToCart }) {
  console.log("🟢 ProductList rendered");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("🟡 Fetching products");

    fetch("https://dummyjson.com/products?limit=8")
      .then(res => res.json())
      .then(data => {
        console.log("✅ Products loaded");
        setProducts(data.products);
      });
  }, []);

  return (
    <section className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h4>{product.title}</h4>
          <p className="price"> ₹ {product.price}</p>

          <button
            onClick={() => {
              console.log("🛒 Add to cart:", product.title);
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;

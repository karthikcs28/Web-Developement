import { useEffect, useState } from "react";

function ProductList({ addToCart }) {
  console.log("🟢 ProductList rendered");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("🟡 Fetching products from API");

    fetch("https://dummyjson.com/products?limit=8")
      .then(res => res.json())
      .then(data => {
        console.log("✅ Products loaded");
        setProducts(data.products);
      });
  }, []);

  return (
    <section className="products">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <img src={p.thumbnail} alt={p.title} />
          <h4>{p.title}</h4>
          <p>₹ {p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;

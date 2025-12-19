import { useState, useMemo } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 70000 },
  { id: 2, name: "Mobile", category: "Electronics", price: 30000 },
  { id: 3, name: "Headphones", category: "Electronics", price: 4000 },
  { id: 4, name: "Chair", category: "Furniture", price: 6000 },
  { id: 5, name: "Table", category: "Furniture", price: 12000 },
  { id: 6, name: "Sofa", category: "Furniture", price: 45000 }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [count, setCount] = useState(0);

  console.log("🔄 App rendered");

  const filteredProducts = useMemo(() => {
    console.log("⚙️ Filtering products");
    console.log("   Search:", search);
    console.log("   Category:", category);

    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  }, [search, category]);

  console.log("📦 Filtered products count:", filteredProducts.length);

  return (
    <div className="container">
      <h1>Product Grid</h1>

      <div className="controls">
        <input
          placeholder="Search product"
          value={search}
          onChange={e => {
            console.log("✏️ Search changed:", e.target.value);
            setSearch(e.target.value);
          }}
        />

        <select
          value={category}
          onChange={e => {
            console.log("📂 Category changed:", e.target.value);
            setCategory(e.target.value);
          }}
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Furniture</option>
        </select>

        <button
          onClick={() => {
            console.log("➕ Counter clicked");
            setCount(count + 1);
          }}
        >
          Unrelated Counter: {count}
        </button>
      </div>

      <div className="grid">
        {filteredProducts.map(p => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <span>₹{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

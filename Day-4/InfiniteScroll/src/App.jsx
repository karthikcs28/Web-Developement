import { useState, useEffect, useRef } from "react";
import "./App.css";

const ACCESS_KEY = "xB-_Pz81uGBz1J7sLARITcd8xWZZ6Rpe97z4El2Ob3Y";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("nature");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  console.log("🔄 App Rendered");
  console.log("📄 Current Page:", page);
  console.log("🔍 Current Query:", query);
  console.log("🖼️ Images Count:", images.length);

  useEffect(() => {
    if (loading || !hasMore) {
      console.log("⏸️ Fetch skipped | loading:", loading, "| hasMore:", hasMore);
      return;
    }

    console.log("🚀 Fetching images...");
    setLoading(true);

    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=10&client_id=${ACCESS_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        console.log("✅ API Response received");
        console.log("📦 Fetched Results:", data.results.length);

        if (!data.results || data.results.length === 0) {
          console.log("🛑 No more images available");
          setHasMore(false);
        } else {
          setImages(prev => {
            const existingIds = new Set(prev.map(img => img.id));
            const uniqueImages = data.results.filter(
              img => !existingIds.has(img.id)
            );

            console.log("🧹 Deduplicated Images Added:", uniqueImages.length);
            console.log(
              "❌ Duplicates Skipped:",
              data.results.length - uniqueImages.length
            );

            return [...prev, ...uniqueImages];
          });
        }

        setLoading(false);
      })
      .catch(err => {
        console.error("❌ Fetch error:", err);
        setLoading(false);
      });
  }, [page, query]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        console.log("👀 Observer triggered → Loading next page");
        setPage(prev => prev + 1);
      }
    });

    const current = loaderRef.current;
    if (current) {
      console.log("📌 Observer attached");
      observer.observe(current);
    }

    return () => {
      if (current) {
        console.log("🧹 Observer detached");
        observer.unobserve(current);
      }
    };
  }, [hasMore, loading]);

  const handleSearch = e => {
    e.preventDefault();
    console.log("🔁 New Search Submitted:", query);

    setImages([]);
    setPage(1);
    setHasMore(true);
  };

  return (
    <div className="container">
      <h1 className="title">Infinite Image Scroll</h1>

      <form className="search-box" onSubmit={handleSearch}>
        <input
          value={query}
          onChange={e => {
            console.log("✏️ Search Input Changed:", e.target.value);
            setQuery(e.target.value);
          }}
          placeholder="Search images..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="grid">
        {images.map(img => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description || "Unsplash image"}
          />
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="loader">
          {loading ? "Loading..." : "Scroll to load more"}
        </div>
      )}

      {!hasMore && <p className="end">No more images 🚀</p>}
    </div>
  );
}

export default App;

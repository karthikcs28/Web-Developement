import { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
import "./App.css";

const PostItem = memo(function PostItem({ post, onSelect }) {
  console.log("🔹 PostItem rendered:", post.id);

  return (
    <div className="post" onClick={() => onSelect(post.id)}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
});

const PostList = memo(function PostList({ posts, onSelect }) {
  console.log("🔸 PostList rendered");

  return (
    <div>
      {posts.map(post => (
        <PostItem
          key={post.id}
          post={post}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
});

function App() {
  console.log("🔴 App rendered");

  const LIMIT = 10;
  const MAX_POSTS = 100;

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const loaderRef = useRef(null);

  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return;

    console.log("📡 Fetching posts from API (page:", page, ")");

    setLoading(true);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${page}`
    );
    const data = await res.json();

    setPosts(prev => {
      const existingIds = new Set(prev.map(p => p.id));
      const uniquePosts = data.filter(p => !existingIds.has(p.id));
      return [...prev, ...uniquePosts];
    });

    if (page * LIMIT >= MAX_POSTS) {
      setHasMore(false);
    }

    setPage(p => p + 1);
    setLoading(false);
  }, [page, loading, hasMore]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        console.log("👀 Loader visible → infinite scroll triggered");
        fetchPosts();
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [fetchPosts, loading, hasMore]);

  const expensiveValue = useMemo(() => {
    console.log("💥 Expensive calculation running");
    return posts.length * 50;
  }, [posts]);

  const handleSelect = useCallback((id) => {
    console.log("✅ Post clicked:", id);
  }, []);

  const filteredPosts = useMemo(() => {
    console.log("🔍 Filtering posts");
    return posts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, posts]);

  return (
    <div className="container">
      <h2>React Performance & Infinite Scroll Demo</h2>

      <button className="btn" onClick={() => setCount(c => c + 1)}>
        Increment Count ({count})
      </button>

      <p className="info">Expensive Value: {expensiveValue}</p>

      <input
        className="search"
        placeholder="Search posts"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <PostList
        posts={filteredPosts}
        onSelect={handleSelect}
      />

      {hasMore && (
        <div ref={loaderRef} className="loader">
          {loading ? "Loading..." : "Scroll to load more"}
        </div>
      )}

      {!hasMore && (
        <div className="loader">No more posts</div>
      )}
    </div>
  );
}

export default App;

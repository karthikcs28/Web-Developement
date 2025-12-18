import { useRef, useState } from "react";
import "./App.css";

function LoginWithLoader() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      await new Promise(resolve => setTimeout(resolve, 2000));

      setSuccess("Login successful");

      emailRef.current.value = "";
      passwordRef.current.value = "";

    } catch {
      setError("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          disabled={loading}
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}

export default LoginWithLoader;

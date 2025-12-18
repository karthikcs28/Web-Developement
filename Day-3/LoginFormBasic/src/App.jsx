import { useRef, useState } from "react";
import "./App.css";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = () => {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setSuccess("Login successful!");

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
        />

        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />

        <button onClick={handleLogin}>Login</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}

export default LoginForm;

import { useState } from "react";
import "./Login.css";

export default function Login({ navigate, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isActive = email.trim() && password.trim();

  const handleLogin = () => {
    if (!isActive) return;
    setUser({ name: email.split("@")[0] || "User", email });
    navigate("settings");
  };

  return (
    <div className="login-screen">
      <button className="back-btn" onClick={() => navigate("welcome")}>
        ← Back
      </button>
      <h1>Signin to your<br />PopX account</h1>
      <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

      <div className="field-wrap">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field-wrap">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className={`login-btn ${isActive ? "login-btn--active" : ""}`}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

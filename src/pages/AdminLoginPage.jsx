import { useState } from "react";
import { useApp, VIEWS } from "../context/AppContext";

export default function AdminLoginPage() {
  const { navigate } = useApp();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      username === "admin" &&
      password === "123456"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate(VIEWS.ADMIN);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        padding: "24px",
        minHeight: "100vh",
      }}
    >
      <h1>Admin Login</h1>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }}
      />

      <button
        onClick={login}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "10px"
        }}
      >
        Login
      </button>
    </div>
  );
}
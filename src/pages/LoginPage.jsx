import { useState } from "react";
import { useApp, VIEWS } from "../context/AppContext";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const { navigate } = useApp();

  const handleLogin = () => {
    if (mobile.length < 10) {
      alert("Enter valid mobile number");
      return;
    }

    localStorage.setItem("customerMobile", mobile);

    navigate(VIEWS.HOME);
  };

  return (
    <div
      style={{
        padding: "24px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Sama Pravah</h1>
      <p>Enter your mobile number</p>

      <input
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile Number"
        style={{
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          marginBottom: "16px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "14px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
        }}
      >
        Continue
      </button>
    </div>
  );
}
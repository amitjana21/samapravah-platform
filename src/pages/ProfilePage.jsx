import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useApp, VIEWS } from "../context/AppContext";

export default function ProfilePage() {
  const { navigate } = useApp();

  const [profile, setProfile] = useState({
    name: "",
    mobile: "",
    address: "",
    area: ""
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("customerProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      const mobile =
        localStorage.getItem("customerMobile") || "";

      setProfile((prev) => ({
        ...prev,
        mobile
      }));
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem(
      "customerProfile",
      JSON.stringify(profile)
    );

    alert("Profile Saved Successfully");
  };

  const logout = () => {
    localStorage.removeItem("customerMobile");
    localStorage.removeItem("customerProfile");

    navigate(VIEWS.LOGIN);

    window.location.reload();
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  };

  return (
    <div className="page">
      <Header title="My Profile" />

      <div style={{ padding: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={profile.name}
          onChange={(e) =>
            setProfile({
              ...profile,
              name: e.target.value
            })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={profile.mobile}
          disabled
          style={{
            ...inputStyle,
            background: "#f3f4f6"
          }}
        />

        <input
          type="text"
          placeholder="Address"
          value={profile.address}
          onChange={(e) =>
            setProfile({
              ...profile,
              address: e.target.value
            })
          }
          style={inputStyle}
        />

        <select
          value={profile.area}
          onChange={(e) =>
            setProfile({
              ...profile,
              area: e.target.value
            })
          }
          style={inputStyle}
        >
          <option value="">Select Area</option>

          <option value="Lake Town">Lake Town</option>
          <option value="Bangur">Bangur</option>
          <option value="Dum Dum">Dum Dum</option>
          <option value="Nagerbazar">Nagerbazar</option>
          <option value="Salt Lake">Salt Lake</option>
          <option value="New Town">New Town</option>
          <option value="Kestopur">Kestopur</option>
          <option value="VIP Road">VIP Road</option>
        </select>

        <button
          onClick={saveProfile}
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            marginBottom: "10px"
          }}
        >
          Save Profile
        </button>

        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: "14px",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import StatusTimeline from "../components/StatusTimeline";
import Header from "../components/Header";
import { getBookingsByMobile } from "../firebase/getBookingsByMobile";

export default function MyBookingsPage() {
  const [mobile, setMobile] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  // STEP 3: Auto Load Customer Bookings
  useEffect(() => {
    const savedMobile = localStorage.getItem("customerMobile");
    if (savedMobile) {
      setMobile(savedMobile);
      loadBookings(savedMobile);
    }
  }, []);

  const loadBookings = async (mobileNumber) => {
    setLoading(true);
    const data = await getBookingsByMobile(mobileNumber);
    setBookings(data || []);
    setLoading(false);
  };

  // STEP 4: Simplify Search Function
  const searchBookings = async () => {
    if (!mobile) return;
    // Save to localStorage so it auto-loads next time
    localStorage.setItem("customerMobile", mobile);
    loadBookings(mobile);
  };

  // Status Color Helper
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "#f59e0b";
      case "Accepted": return "#2563eb";
      case "Technician Assigned": return "#7c3aed";
      case "On The Way": return "#ea580c";
      case "Completed": return "#059669";
      default: return "#64748b";
    }
  };

  return (
    <div className="page" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Header title="My Bookings" />

      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        
        {/* STEP 5: Make Search Optional (Hides if already "logged in") */}
        {!localStorage.getItem("customerMobile") && (
          <>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
            />

            <button
              onClick={searchBookings}
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
                marginBottom: "20px"
              }}
            >
              {loading ? "Searching..." : "Search Bookings"}
            </button>
          </>
        )}

        {/* Show a "Logout/Change Number" option if logged in */}
        {localStorage.getItem("customerMobile") && (
          <div style={{ marginBottom: "20px", textAlign: "right" }}>
            <button 
              onClick={() => {
                localStorage.removeItem("customerMobile");
                window.location.reload();
              }}
              style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
            >
              Logout / Change Number
            </button>
          </div>
        )}

        {/* Empty State */}
        {bookings.length === 0 && !loading && (
          <div style={{ textAlign: "center", marginTop: "30px", color: "#64748b" }}>
            No bookings loaded.
          </div>
        )}

        <div style={{ marginTop: "10px" }}>
          {bookings.map((b) => (
            <div
              key={b.id}
              style={{
                background: "#fff",
                padding: "16px",
                borderRadius: "12px",
                marginBottom: "16px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              {/* Step 1: Improved Info Section */}
              <p style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                Booking ID: {b.id}
              </p>

              <h3 style={{ marginTop: "8px" }}>{b.customerName}</h3>

              <div style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.6" }}>
                <p><strong>Service:</strong> {b.serviceName || b.service}</p>
                <p><strong>Issue:</strong> {b.issueType}</p>
                <p><strong>Date:</strong> {b.date}</p>
                <p><strong>Time:</strong> {b.timeSlot}</p>
                <p><strong>Address:</strong> {b.address}</p>
              </div>

              {/* Step 1: Better Status Badge */}
              <div style={{ marginTop: "12px", marginBottom: "12px" }}>
                <span
                  style={{
                    background: `${getStatusColor(b.status)}20`,
                    color: getStatusColor(b.status),
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {b.status}
                </span>
              </div>

              {/* Status Timeline */}
              <StatusTimeline status={b.status} />

              {/* Step 2: Upgrade Technician Card */}
              {b.technicianName && (
                <div
                  style={{
                    marginTop: "15px",
                    padding: "14px",
                    background: "#f0fdf4",
                    borderRadius: "12px",
                    border: "1px solid #bbf7d0",
                  }}
                >
                  <h4 style={{ marginBottom: "10px", color: "#059669" }}>
                    👨‍🔧 Technician Assigned
                  </h4>
                  <p><strong>{b.technicianName}</strong></p>
                  <p>{b.technicianPhone}</p>

                  <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                    <a
                      href={`tel:${b.technicianPhone}`}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "10px",
                        background: "#2563eb",
                        color: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600"
                      }}
                    >
                      📞 Call
                    </a>
                    <a
                      href={`https://wa.me/${b.technicianPhone}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "10px",
                        background: "#22c55e",
                        color: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600"
                      }}
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Step 3: Show Uploaded Problem Photo */}
              {b.imageBase64 && (
                <div style={{ marginTop: "15px" }}>
                  <p><strong>Uploaded Image</strong></p>
                  <img
                    src={b.imageBase64}
                    alt="Issue"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      marginTop: "8px",
                      border: "1px solid #eee"
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
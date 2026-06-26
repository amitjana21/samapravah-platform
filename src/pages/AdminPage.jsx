import { useEffect, useState, useMemo } from "react";
import Header from "../components/Header";
import { getBookings } from "../firebase/getBookings";
import { updateBooking } from "../firebase/updateBooking";
import { TECHNICIANS } from "../data/technicians";
import { useApp, VIEWS } from "../context/AppContext";

export default function AdminPage() {
  const { navigate } = useApp();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") !== "true") {
      navigate(VIEWS.ADMIN_LOGIN);
    } else {
      loadBookings();
    }
  }, [navigate]);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const data = await getBookings();
      setBookings(data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    await updateBooking(id, { status });
    loadBookings();
  };

  const stats = useMemo(() => {
    const total = bookings.length;
    const assigned = bookings.filter((b) => b.status === "Technician Assigned").length;
    const completed = bookings.filter((b) => b.status === "Completed").length;
    const pending = total - (assigned + completed);
    return { total, assigned, completed, pending };
  }, [bookings]);

  if (loading) return <div className="page p-4">Loading...</div>;

  return (
    <div className="page admin-page" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Header title="Admin Panel" />

      <div style={{ padding: "16px", maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Metrics Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "12px", marginBottom: "24px" }}>
          <MetricCard label="Total" value={stats.total} color="#1e293b" />
          <MetricCard label="Pending" value={stats.pending} color="#f59e0b" />
          <MetricCard label="Assigned" value={stats.assigned} color="#2563eb" />
          <MetricCard label="Done" value={stats.completed} color="#059669" />
        </div>

        {/* Action Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 style={{ margin: 0 }}>All Bookings</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={loadBookings} style={styles.headerBtn}>🔄 Refresh</button>
            <button onClick={() => {
                localStorage.removeItem("adminLoggedIn");
                navigate(VIEWS.ADMIN_LOGIN);
                window.location.reload();
              }} style={{ ...styles.headerBtn, background: "#dc2626" }}>🚪 Logout</button>
          </div>
        </div>

        {bookings.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }}>No bookings found</p>
        ) : (
          bookings.map((b) => (
            <div key={b.id} style={styles.card}>
              <div style={{ marginBottom: "14px" }}>
                <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "bold" }}>ID: {b.id.slice(-8).toUpperCase()}</span>
                <h3 style={{ margin: "4px 0", color: "#1e293b" }}>{b.customerName}</h3>
              </div>

              <div style={{ fontSize: "14px", lineHeight: "1.8", marginBottom: "12px" }}>
                <div><strong>Mobile:</strong> {b.mobile}</div>
                <div><strong>Service:</strong> {b.serviceName} ({b.issueType})</div>
                <div><strong>Address:</strong> {b.address}</div>
                <div><strong>Schedule:</strong> {b.date} | {b.timeSlot}</div>
                
                {/* --- UPDATED STATUS SPAN --- */}
                <div style={{ marginTop: "8px" }}>
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      background:
                        b.status === "Completed"
                          ? "#dcfce7"
                          : b.status === "On The Way"
                          ? "#fef3c7"
                          : "#dbeafe",
                      color:
                        b.status === "Completed"
                          ? "#166534"
                          : b.status === "On The Way"
                          ? "#92400e"
                          : "#1d4ed8",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "12px",
                      marginLeft: "4px"
                    }}
                  >
                    {b.status}
                  </span>
                </div>
              </div>

              {b.imageBase64 && (
                <img src={b.imageBase64} alt="Issue" style={styles.image} />
              )}

              {b.technicianName && (
                <div style={styles.techBanner}>
                  <strong>Technician:</strong> {b.technicianName} ({b.technicianPhone})
                </div>
              )}

              <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <a href={`tel:${b.mobile}`} style={{ ...styles.contactBtn, background: "#2563eb" }}>📞 Call</a>
                <a href={`https://wa.me/91${b.mobile}`} target="_blank" rel="noreferrer" style={{ ...styles.contactBtn, background: "#22c55e" }}>💬 WhatsApp</a>
              </div>

              <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "15px" }}>
                <select
                  defaultValue=""
                  onChange={async (e) => {
                    if (!e.target.value) return;
                    const tech = TECHNICIANS.find((t) => t.id === Number(e.target.value));
                    if (!tech) return;
                    await updateBooking(b.id, {
                      technicianName: tech.name,
                      technicianPhone: tech.phone,
                      status: "Technician Assigned",
                    });
                    loadBookings();
                  }}
                  style={styles.select}
                >
                  <option value="">{b.technicianName ? `Reassign (${b.technicianName})` : "Assign Technician"}</option>
                  {TECHNICIANS.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <button onClick={() => updateStatus(b.id, "Accepted")} style={styles.statusBtn}>Accept</button>
                  <button onClick={() => updateStatus(b.id, "On The Way")} style={{ ...styles.statusBtn, background: "#f59e0b" }}>On Way</button>
                  <button onClick={() => updateStatus(b.id, "Completed")} style={{ ...styles.statusBtn, background: "#059669" }}>Complete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Sub-components
const MetricCard = ({ label, value, color }) => (
  <div style={{ background: "#fff", padding: "14px", borderRadius: "12px", textAlign: "center", border: "1px solid #e2e8f0" }}>
    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>{label}</div>
    <div style={{ fontSize: "22px", fontWeight: "bold", color: color, marginTop: "4px" }}>{value}</div>
  </div>
);

const styles = {
  headerBtn: { padding: "10px 16px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer", fontWeight: "600" },
  card: { background: "#fff", padding: "20px", borderRadius: "16px", marginBottom: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" },
  image: { width: "100%", borderRadius: "12px", maxHeight: "200px", objectFit: "cover", margin: "12px 0" },
  techBanner: { padding: "10px", background: "#f8fafc", borderRadius: "8px", marginBottom: "12px", fontSize: "13px", border: "1px dashed #cbd5e1" },
  contactBtn: { flex: 1, padding: "10px", color: "#fff", borderRadius: "8px", textDecoration: "none", textAlign: "center", fontSize: "14px", fontWeight: "600" },
  select: { width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#f8fafc", marginBottom: "12px" },
  statusBtn: { flex: 1, padding: "10px", border: "none", borderRadius: "10px", background: "#2563eb", color: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: "600" }
};
// STEP 1 — Logo Import
import logo from "../../assets/logo.png";

export default function Hero({ onBookService, onTrackBooking }) {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
          color: "#fff",
        }}
      >
        {/* STEP 2 — Logo in Hero Section */}
        <img
          src={logo}
          alt="Sama Pravah"
          style={{
            width: "140px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Sama Pravah
        </h1>

        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Trusted Home Services At Your Doorstep</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px" }}>
          AC Repair, Plumbing, Electrical, Cleaning, Carpenter, CCTV and more.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={onBookService}
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              border: "none",
              background: "#fff",
              color: "#2563eb",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Book Service
          </button>

          <button
            onClick={onTrackBooking}
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.4)",
              background: "transparent",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Track Booking
          </button>

          <a
            href="https://wa.me/918777732521"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              background: "#22c55e",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            WhatsApp Now
          </a>
        </div>

        {/* STEP 3 — Add Business Statistics */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "50px",
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>500+</h2>
            <p>Services Delivered</p>
          </div>

          <div>
            <h2 style={{ margin: 0 }}>100+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2 style={{ margin: 0 }}>15+</h2>
            <p>Technicians</p>
          </div>

          <div>
            <h2 style={{ margin: 0 }}>8+</h2>
            <p>Service Areas</p>
          </div>
        </div>
      </section>

      {/* STEP 5 — Add Trust Strip */}
      <section
        style={{
          background: "#fff",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            fontWeight: "600",
          }}
        >
          <span>✓ Verified Technicians</span>
          <span>✓ Same Day Service</span>
          <span>✓ Transparent Pricing</span>
          <span>✓ Service Warranty</span>
        </div>
      </section>
    </>
  );
}

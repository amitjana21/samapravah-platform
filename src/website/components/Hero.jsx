import { COMPANY_NAME, WHATSAPP_NUMBER } from "../../config/appConfig";
import { getWhatsAppUrl } from "../../utils/formatPhone";
import logo from "../../assets/logo.png";

export default function Hero({ onBookService, onTrackBooking }) {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="website-fade-in"
        style={{
          padding: "90px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
          color: "#fff",
        }}
      >
        {/* STEP 2 — Logo in Hero Section */}
        <img
          src={logo}
          alt={`${COMPANY_NAME} logo`}
          loading="lazy"
          style={{
            width: "140px",
            marginBottom: "20px",
          }}
        />

        <h1
          className="website-hero-title"
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          {COMPANY_NAME}
        </h1>

        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Trusted Home Services At Your Doorstep</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px" }}>
          AC Repair, Plumbing, Electrical, Cleaning, Carpenter, CCTV and more.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="website-action-hover"
            onClick={onBookService}
            type="button"
            aria-label="Book a Sama Pravah home service"
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
            className="website-action-hover"
            onClick={onTrackBooking}
            type="button"
            aria-label="Track your Sama Pravah booking"
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
            className="website-action-hover"
            href={getWhatsAppUrl(WHATSAPP_NUMBER)}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Sama Pravah on WhatsApp"
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

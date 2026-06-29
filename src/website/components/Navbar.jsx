import { COMPANY_NAME, PHONE, SUPPORT_HOURS } from "../../config/appConfig";
import { formatPhone } from "../../utils/formatPhone";
import { scrollToTop } from "../../utils/scrollToTop";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#ffffff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          {/* STEP 1 — Logo in Navbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer"
            }}
            onClick={scrollToTop}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                scrollToTop();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Scroll to top"
          >
            <img
              src={logo}
              alt={`${COMPANY_NAME} logo`}
              loading="lazy"
              style={{
                height: "50px",
                width: "50px",
                objectFit: "contain",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#2563eb",
                }}
              >
                {COMPANY_NAME}
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                }}
              >
                Home Services Platform
              </div>
            </div>
          </div>

          <nav
            className="website-desktop-nav"
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <a className="website-link-hover" href="#services" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Services</a>
            <a className="website-link-hover" href="#about" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>About</a>
            <a className="website-link-hover" href="#whyus" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Why Us</a>
            <a className="website-link-hover" href="#areas" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Areas</a>
            <a className="website-link-hover" href="#faq" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>FAQ</a>
            <a className="website-link-hover" href="#contact" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* STEP 4 — Sticky Action Bar */}
      <div
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        📞 Call: {formatPhone(PHONE)} &nbsp;&nbsp; | &nbsp;&nbsp;
        💬 WhatsApp Support Available &nbsp;&nbsp; | &nbsp;&nbsp;
        {SUPPORT_HOURS}
      </div>
    </>
  );
}

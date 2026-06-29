import { PHONE, SUPPORT_HOURS, WHATSAPP_NUMBER } from "../../config/appConfig";
import { formatPhone, getTelUrl, getWhatsAppUrl } from "../../utils/formatPhone";

export default function EmergencyBanner() {
  return (
    <section
      className="website-fade-in"
      aria-label="Emergency home service support"
      style={{
        padding: "30px 20px",
        background: "#eff6ff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
          color: "#fff",
          borderRadius: "18px",
          padding: "28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "18px",
          alignItems: "center",
          boxShadow: "0 18px 35px rgba(37,99,235,0.22)",
        }}
      >
        <div>
          <h2 style={{ margin: "0 0 8px", fontSize: "28px" }}>
            Need emergency service?
          </h2>
          <p style={{ margin: 0, lineHeight: "1.7", opacity: 0.95 }}>
            Call or WhatsApp us for urgent AC, plumbing, electrical, and
            appliance support. Support hours: {SUPPORT_HOURS}.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <a
            className="website-action-hover"
            href={getTelUrl(PHONE)}
            aria-label="Call Sama Pravah for emergency service"
            style={{
              padding: "13px 18px",
              borderRadius: "12px",
              background: "#fff",
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "800",
            }}
          >
            Call {formatPhone(PHONE)}
          </a>
          <a
            className="website-action-hover"
            href={getWhatsAppUrl(WHATSAPP_NUMBER)}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Sama Pravah for emergency service"
            style={{
              padding: "13px 18px",
              borderRadius: "12px",
              background: "#22c55e",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "800",
            }}
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}

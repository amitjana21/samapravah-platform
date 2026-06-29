import { STARTING_PRICES } from "../../constants/services";

export default function PricingPreview() {
  return (
    <section
      id="pricing"
      className="website-fade-in"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", color: "#0f172a", margin: 0 }}>
        Pricing Preview
      </h2>
      <p
        style={{
          maxWidth: "680px",
          margin: "14px auto 0",
          color: "#64748b",
          lineHeight: "1.7",
        }}
      >
        Transparent starting prices help you plan before a technician visit.
        Final pricing depends on inspection and parts.
      </p>

      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {STARTING_PRICES.map(([service, price]) => (
          <article
            key={service}
            className="website-card-hover"
            style={{
              background: "#f8fafc",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ color: "#0f172a", margin: 0 }}>{service}</h3>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#2563eb",
                marginTop: "12px",
              }}
            >
              {price}
            </div>
            <p style={{ color: "#64748b", marginBottom: 0 }}>
              Starting Price
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

import { SERVICE_ICON_MAP, WEBSITE_SERVICES } from "../../constants/services";

export default function ServicesSection({ onBookService }) {
  return (
    <section
      id="services"
      className="website-fade-in"
      style={{
        padding: "70px 20px",
        textAlign: "center",
      }}
    >
      <h2>Our Services</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        {WEBSITE_SERVICES.map((service) => (
          <div
            key={service}
            className="website-card-hover"
            onClick={onBookService}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onBookService();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Book ${service} service`}
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {SERVICE_ICON_MAP[service]}
            </h3>
            <p style={{ fontWeight: "600" }}>{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

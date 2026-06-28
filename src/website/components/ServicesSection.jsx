export default function ServicesSection({ onBookService }) {
  return (
    <section
      id="services"
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
        {[
          "Electrical",
          "Plumbing",
          "AC Repair",
          "Cleaning",
          "Carpenter",
          "CCTV",
          "Fridge Repair",
          "Washing Machine",
        ].map((service) => (
          <div
            key={service}
            onClick={onBookService}
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {
                {
                  Electrical: "⚡",
                  Plumbing: "🚰",
                  "AC Repair": "❄️",
                  Cleaning: "🧹",
                  Carpenter: "🪚",
                  CCTV: "📹",
                  "Fridge Repair": "🧊",
                  "Washing Machine": "🧺",
                }[service]
              }
            </h3>
            <p style={{ fontWeight: "600" }}>{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

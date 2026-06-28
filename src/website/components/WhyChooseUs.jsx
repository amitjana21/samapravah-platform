export default function WhyChooseUs() {
  return (
    <>
      {/* WHY CHOOSE US */}
      <section
        id="whyus"
        className="website-fade-in"
        style={{
          padding: "70px 20px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2>Why Choose Sama Pravah?</h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Verified Technicians",
            "Same Day Service",
            "Transparent Pricing",
            "Customer Support",
            "Affordable Charges",
            "Service Warranty",
          ].map((item) => (
            <div
              key={item}
              className="website-card-hover"
              style={{
                background: "#f8fafc",
                padding: "25px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              <h3 style={{ color: "#2563eb" }}>✓</h3>
              <p style={{ fontWeight: "600" }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        className="website-fade-in"
        style={{
          padding: "70px 20px",
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2>Starting Prices</h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            ["⚡ Electrical Visit", "₹299"],
            ["🚰 Plumbing Visit", "₹299"],
            ["❄️ AC Service", "₹499"],
            ["🧹 Deep Cleaning", "₹699"],
            ["🪚 Carpenter Visit", "₹299"],
            ["📹 CCTV Installation", "₹999"],
          ].map(([service, price]) => (
            <div
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
              <h3>{service}</h3>

              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#2563eb",
                  marginTop: "10px",
                }}
              >
                {price}
              </div>

              <p style={{ color: "#64748b" }}>Starting Price</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

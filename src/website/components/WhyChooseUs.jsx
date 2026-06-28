export default function WhyChooseUs() {
  return (
    <>
      {/* WHY CHOOSE US */}
      <section
        id="whyus"
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
              style={{
                background: "#f8fafc",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              <h3 style={{ color: "#2563eb" }}>✓</h3>
              <p style={{ fontWeight: "600" }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEP 6 — Add How It Works */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2>How It Works</h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Book Service",
            "Technician Assigned",
            "Visit & Inspection",
            "Problem Fixed",
          ].map((step, index) => (
            <div
              key={step}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "16px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h2>{index + 1}</h2>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
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
              style={{
                background: "#f8fafc",
                padding: "24px",
                borderRadius: "16px",
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

      {/* CUSTOMER REVIEWS */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2>Customer Reviews</h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              name: "Amit - Lake Town",
              review: "AC repaired within 2 hours. Very professional technician.",
            },
            {
              name: "Priya - Salt Lake",
              review: "Plumbing work completed neatly and at affordable cost.",
            },
            {
              name: "Souvik - New Town",
              review: "Excellent support and quick service booking.",
            },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: "#fff",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3>⭐⭐⭐⭐⭐</h3>

              <p
                style={{
                  marginTop: "15px",
                  lineHeight: "1.6",
                }}
              >
                "{item.review}"
              </p>

              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

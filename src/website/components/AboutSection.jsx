export default function AboutSection() {
  const highlights = [
    {
      title: "Company Introduction",
      text: "Sama Pravah is a local home services platform built to make daily repairs, maintenance, and installations simpler for families and businesses.",
    },
    {
      title: "Our Mission",
      text: "To deliver reliable, transparent, and timely home services through trained technicians and a booking experience customers can trust.",
    },
    {
      title: "Our Vision",
      text: "To become the most dependable home services company for Kolkata and nearby communities, known for service quality and customer care.",
    },
  ];

  return (
    <section
      id="about"
      className="website-fade-in"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#2563eb",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            About Us
          </p>

          <h2
            style={{
              fontSize: "34px",
              lineHeight: "1.2",
              margin: "0 0 18px",
              color: "#0f172a",
            }}
          >
            Trusted local service provider for everyday home needs
          </h2>

          <p
            style={{
              color: "#475569",
              fontSize: "17px",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            From urgent repairs to planned maintenance, Sama Pravah connects
            customers with verified technicians for AC repair, plumbing,
            electrical work, cleaning, carpentry, CCTV, and appliance services.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="website-card-hover"
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "22px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px",
                  color: "#0f172a",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  lineHeight: "1.7",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

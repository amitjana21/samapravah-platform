import FAQAccordion from "./FAQAccordion";

export default function Footer() {
  const services = [
    "Electrical",
    "Plumbing",
    "AC Repair",
    "Cleaning",
    "Carpenter",
    "CCTV",
  ];

  const areas = [
    "Lake Town",
    "Salt Lake",
    "New Town",
    "Bangur",
    "Dum Dum",
    "Baguiati",
  ];

  return (
    <>
      <FAQAccordion />

      <footer
        id="contact"
        className="website-fade-in"
        style={{
          background: "#0f172a",
          color: "#fff",
          padding: "70px 20px 28px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "34px",
          }}
        >
          <div>
            <h3
              style={{
                marginTop: 0,
                fontSize: "24px",
              }}
            >
              Sama Pravah
            </h3>
            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              A trusted home services company providing verified technicians
              for everyday repair, maintenance, and installation needs.
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {["Facebook", "Instagram", "YouTube"].map((item) => (
                <span
                  key={item}
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "999px",
                    padding: "8px 12px",
                    color: "#cbd5e1",
                    fontSize: "13px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginTop: 0 }}>Services</h4>
            {services.map((service) => (
              <p
                key={service}
                style={{
                  color: "#cbd5e1",
                  margin: "10px 0",
                }}
              >
                {service}
              </p>
            ))}
          </div>

          <div>
            <h4 style={{ marginTop: 0 }}>Service Areas</h4>
            {areas.map((area) => (
              <p
                key={area}
                style={{
                  color: "#cbd5e1",
                  margin: "10px 0",
                }}
              >
                {area}
              </p>
            ))}
          </div>

          <div>
            <h4 style={{ marginTop: 0 }}>Contact Information</h4>
            <p style={{ color: "#cbd5e1" }}>📞 8777732521</p>
            <p style={{ color: "#cbd5e1" }}>📧 info@samapravah.com</p>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              Serving Kolkata, North Kolkata, Salt Lake, New Town, and nearby
              localities.
            </p>
          </div>
        </div>

        <hr
          style={{
            maxWidth: "1200px",
            margin: "36px auto 24px",
            opacity: 0.2,
          }}
        />

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Sama Pravah. All rights reserved.
        </p>
      </footer>
    </>
  );
}

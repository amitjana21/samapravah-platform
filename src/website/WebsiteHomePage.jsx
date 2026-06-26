import { useApp, VIEWS } from "../context/AppContext";
// STEP 1 — Logo Import
import logo from "../assets/logo.png";

export default function WebsiteHomePage() {
  const { navigate } = useApp();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
        scrollBehavior: "smooth",
      }}
    >
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
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src={logo}
              alt="Sama Pravah"
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
                Sama Pravah
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
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <a href="#services" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Services</a>
            <a href="#whyus" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Why Us</a>
            <a href="#areas" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Areas</a>
            <a href="#contact" style={{ textDecoration: "none", color: "#475569", fontWeight: "600" }}>Contact</a>
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
        📞 Call: 8777732521 &nbsp;&nbsp; | &nbsp;&nbsp;
        💬 WhatsApp Support Available
      </div>

      {/* HERO SECTION */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
          color: "#fff",
        }}
      >
        {/* STEP 2 — Logo in Hero Section */}
        <img
          src={logo}
          alt="Sama Pravah"
          style={{
            width: "140px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Sama Pravah
        </h1>

        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Trusted Home Services At Your Doorstep</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px" }}>
          AC Repair, Plumbing, Electrical, Cleaning, Carpenter, CCTV and more.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate(VIEWS.BOOKING)}
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
            onClick={() => navigate(VIEWS.MY_BOOKINGS)}
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
            href="https://wa.me/918777732521"
            target="_blank"
            rel="noreferrer"
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

      {/* SERVICES SECTION */}
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
              onClick={() => navigate(VIEWS.BOOKING)}
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

      {/* SERVICE AREAS */}
      <section
        id="areas"
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2>Service Areas</h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "16px",
          }}
        >
          {[
            "Lake Town",
            "Bangur",
            "Salt Lake",
            "New Town",
            "Baguiati",
            "Dum Dum",
            "Kestopur",
            "Nagerbazar",
          ].map((area) => (
            <div
              key={area}
              style={{
                background: "#fff",
                padding: "18px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              📍 {area}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        style={{
          padding: "70px 20px",
          background: "#ffffff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[
            [
              "How quickly can a technician arrive?",
              "Usually within the same day depending on availability.",
            ],
            [
              "Do you provide service warranty?",
              "Yes, selected services include warranty support.",
            ],
            [
              "What payment methods are accepted?",
              "Cash, UPI, Google Pay, PhonePe and Paytm.",
            ],
            [
              "Which areas do you serve?",
              "Lake Town, Salt Lake, New Town, Dum Dum, Bangur and nearby areas.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              style={{
                marginBottom: "24px",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <strong>{q}</strong>

              <p style={{ marginTop: "10px" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEP 7 — Launch Ready Footer */}
      <footer
        id="contact"
        style={{
          background: "#0f172a",
          color: "#fff",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          <div>
            <h3>Sama Pravah</h3>
            <p>
              Trusted Home Services At Your
              Doorstep.
            </p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>📞 8777732521</p>
            <p>📧 info@samapravah.com</p>
          </div>

          <div>
            <h4>Coverage Areas</h4>
            <p>Lake Town</p>
            <p>Salt Lake</p>
            <p>New Town</p>
            <p>Dum Dum</p>
          </div>
        </div>

        <hr
          style={{
            margin: "30px 0",
            opacity: 0.2,
          }}
        />

        <p
          style={{
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Sama Pravah
        </p>
      </footer>

      {/* STEP 4 — Floating WhatsApp Button (Updated with instruction styling) */}
      <a
        href="https://wa.me/918777732521"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          background: "#25D366",
          color: "#fff",
          padding: "16px 22px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "700",
          zIndex: 9999,
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
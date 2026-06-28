export default function Footer() {
  return (
    <>
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
    </>
  );
}

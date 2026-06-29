import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  EMAIL,
  PHONE,
  SOCIAL_MEDIA_URLS,
} from "../../config/appConfig";
import { FEATURED_SERVICE_AREAS } from "../../constants/areas";
import { FEATURED_SERVICES } from "../../constants/services";
import { formatPhone } from "../../utils/formatPhone";
import FAQAccordion from "./FAQAccordion";

export default function Footer() {
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
              {COMPANY_NAME}
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
              {Object.entries(SOCIAL_MEDIA_URLS).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  aria-label={`${COMPANY_NAME} ${name}`}
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "999px",
                    padding: "8px 12px",
                    color: "#cbd5e1",
                    fontSize: "13px",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginTop: 0 }}>Services</h4>
            {FEATURED_SERVICES.map((service) => (
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
            {FEATURED_SERVICE_AREAS.map((area) => (
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
            <p style={{ color: "#cbd5e1" }}>📞 {formatPhone(PHONE)}</p>
            <p style={{ color: "#cbd5e1" }}>📧 {EMAIL}</p>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              {COMPANY_ADDRESS}
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
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </footer>
    </>
  );
}

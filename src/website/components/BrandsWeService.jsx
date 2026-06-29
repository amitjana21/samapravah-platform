import { COMPANY_NAME } from "../../config/appConfig";
import WebsiteImage from "./WebsiteImage";

const brands = [
  "LG",
  "Samsung",
  "Voltas",
  "Daikin",
  "Whirlpool",
  "Bosch",
  "Havells",
  "Godrej",
];

function brandLogo(name, index) {
  const colors = ["#2563eb", "#0ea5e9", "#0f172a", "#64748b"];
  const color = colors[index % colors.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="120" viewBox="0 0 220 120">
      <rect width="220" height="120" rx="18" fill="#f8fafc"/>
      <rect x="12" y="12" width="196" height="96" rx="14" fill="white" stroke="#e2e8f0"/>
      <text x="110" y="68" text-anchor="middle" font-family="Arial" font-size="28" font-weight="700" fill="${color}">${name}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

export default function BrandsWeService() {
  return (
    <section
      className="website-fade-in"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", color: "#0f172a", margin: 0 }}>
        Brands We Service
      </h2>
      <p
        style={{
          maxWidth: "700px",
          margin: "14px auto 0",
          color: "#64748b",
          lineHeight: "1.7",
        }}
      >
        {COMPANY_NAME} technicians support popular home appliance and equipment
        brands using practical, service-first diagnostics.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: "16px",
        }}
      >
        {brands.map((brand, index) => (
          <WebsiteImage
            key={brand}
            src={brandLogo(brand, index)}
            alt={`${brand} service placeholder logo`}
            className="website-card-hover"
            wrapperStyle={{
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              height: "110px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

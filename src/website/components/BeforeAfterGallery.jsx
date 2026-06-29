import WebsiteImage from "./WebsiteImage";

const projects = [
  {
    title: "AC Service",
    area: "Salt Lake",
    before: "Before filter cleaning",
    after: "After cooling restored",
  },
  {
    title: "Deep Cleaning",
    area: "Lake Town",
    before: "Before kitchen cleanup",
    after: "After detailed cleaning",
  },
  {
    title: "Plumbing Repair",
    area: "New Town",
    before: "Before leak repair",
    after: "After fitting replacement",
  },
];

function galleryImage(label, color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="520" height="320" viewBox="0 0 520 320">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${color}" stop-opacity="0.95"/>
          <stop offset="1" stop-color="#0f172a" stop-opacity="0.85"/>
        </linearGradient>
      </defs>
      <rect width="520" height="320" rx="22" fill="url(#g)"/>
      <circle cx="420" cy="80" r="52" fill="white" opacity="0.16"/>
      <rect x="44" y="190" width="290" height="18" rx="9" fill="white" opacity="0.28"/>
      <rect x="44" y="222" width="220" height="16" rx="8" fill="white" opacity="0.22"/>
      <text x="44" y="150" font-family="Arial" font-size="34" font-weight="700" fill="white">${label}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

export default function BeforeAfterGallery() {
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
        Before & After
      </h2>
      <p
        style={{
          maxWidth: "700px",
          margin: "14px auto 0",
          color: "#64748b",
          lineHeight: "1.7",
        }}
      >
        A quick look at how professional service improves comfort, safety, and
        everyday usability.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
        }}
      >
        {projects.map((project) => (
          <article
            key={`${project.title}-${project.area}`}
            className="website-card-hover"
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <WebsiteImage
                src={galleryImage("Before", "#64748b")}
                alt={`${project.title} before service placeholder image`}
                wrapperStyle={{ height: "180px" }}
              />
              <WebsiteImage
                src={galleryImage("After", "#2563eb")}
                alt={`${project.title} after service placeholder image`}
                wrapperStyle={{ height: "180px" }}
              />
            </div>
            <div style={{ padding: "22px" }}>
              <h3 style={{ margin: "0 0 8px", color: "#0f172a" }}>
                {project.title}
              </h3>
              <p style={{ margin: "0 0 12px", color: "#64748b" }}>
                {project.area}
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "8px",
                  color: "#475569",
                  lineHeight: "1.6",
                }}
              >
                <span>Before: {project.before}</span>
                <span>After: {project.after}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

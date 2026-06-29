import { useEffect, useState } from "react";

const stats = [
  { label: "Services Delivered", value: 500, suffix: "+" },
  { label: "Happy Customers", value: 100, suffix: "+" },
  { label: "Verified Technicians", value: 15, suffix: "+" },
  { label: "Service Areas", value: 8, suffix: "+" },
];

export default function TrustStats() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const startedAt = performance.now();
    const duration = 1200;

    const animate = (now) => {
      const nextProgress = Math.min((now - startedAt) / duration, 1);
      setProgress(nextProgress);

      if (nextProgress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      aria-label="Sama Pravah trust statistics"
      className="website-fade-in"
      style={{
        padding: "34px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "16px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="website-card-hover"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "24px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#2563eb",
                fontSize: "34px",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {Math.round(item.value * progress)}
              {item.suffix}
            </strong>
            <span style={{ color: "#475569", fontWeight: "700" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

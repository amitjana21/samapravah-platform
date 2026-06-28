export default function HowItWorks() {
  const steps = [
    {
      title: "Book Service",
      text: "Choose the service you need and submit a booking request in minutes.",
    },
    {
      title: "Technician Assigned",
      text: "A verified technician is assigned based on your service need and area.",
    },
    {
      title: "Service Completed",
      text: "The technician visits, inspects the issue, and completes the work professionally.",
    },
    {
      title: "Secure Payment",
      text: "Pay safely using cash or UPI after the service details are confirmed.",
    },
  ];

  return (
    <section
      className="website-fade-in"
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0f172a",
          margin: 0,
        }}
      >
        How It Works
      </h2>

      <p
        style={{
          maxWidth: "680px",
          margin: "14px auto 0",
          color: "#64748b",
          lineHeight: "1.7",
        }}
      >
        A simple, transparent process from booking to completion.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "20px",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="website-card-hover"
            style={{
              background: "#fff",
              padding: "28px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                background: "#dbeafe",
                color: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "18px",
              }}
            >
              {index + 1}
            </div>
            <h3
              style={{
                margin: "0 0 10px",
                color: "#0f172a",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                margin: 0,
                color: "#64748b",
                lineHeight: "1.7",
              }}
            >
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

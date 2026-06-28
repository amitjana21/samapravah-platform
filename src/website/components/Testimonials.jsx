export default function Testimonials() {
  const testimonials = [
    {
      name: "Amit Sen",
      location: "Lake Town",
      review: "The AC service was quick, clean, and handled by a polite technician.",
    },
    {
      name: "Priya Das",
      location: "Salt Lake",
      review: "Transparent pricing and neat plumbing work. Booking was very easy.",
    },
    {
      name: "Souvik Roy",
      location: "New Town",
      review: "Excellent customer support and a technician arrived the same day.",
    },
    {
      name: "Madhumita Ghosh",
      location: "Bangur",
      review: "Electrical repair was completed professionally with proper explanation.",
    },
    {
      name: "Rahul Agarwal",
      location: "Dum Dum",
      review: "Reliable cleaning service with good attention to detail and timing.",
    },
    {
      name: "Ananya Chatterjee",
      location: "Baguiati",
      review: "CCTV installation was smooth and the team explained everything clearly.",
    },
  ];

  return (
    <section
      id="testimonials"
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
        Customer Testimonials
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "14px auto 0",
          color: "#64748b",
          lineHeight: "1.7",
        }}
      >
        Homeowners across our service areas trust Sama Pravah for timely,
        professional support.
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
        {testimonials.map((item) => (
          <div
            key={`${item.name}-${item.location}`}
            className="website-card-hover"
            style={{
              background: "#fff",
              padding: "26px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                color: "#f59e0b",
                fontSize: "18px",
                letterSpacing: "1px",
                marginBottom: "14px",
              }}
            >
              ★★★★★
            </div>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
                margin: "0 0 18px",
              }}
            >
              "{item.review}"
            </p>

            <strong
              style={{
                color: "#0f172a",
                display: "block",
              }}
            >
              {item.name}
            </strong>
            <span
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              {item.location}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

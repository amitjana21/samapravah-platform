export default function ServiceAreas() {
  return (
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
  );
}

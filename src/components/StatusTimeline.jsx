const STEPS = [
    "Pending",
    "Accepted",
    "Technician Assigned",
    "On The Way",
    "Completed"
  ];
  
  export default function StatusTimeline({ status }) {
    const currentIndex = STEPS.indexOf(status);
  
    return (
      <div style={{ marginTop: "12px" }}>
        {STEPS.map((step, index) => (
          <div
            key={step}
            style={{
              color: index <= currentIndex ? "green" : "#999",
              marginBottom: "6px",
              fontWeight: index <= currentIndex ? "600" : "400"
            }}
          >
            {index <= currentIndex ? "✓" : "○"} {step}
          </div>
        ))}
      </div>
    );
  }
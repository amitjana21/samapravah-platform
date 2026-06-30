const TIMELINE_STEPS = [
  "Booking Received",
  "Confirmed",
  "Technician Assigned",
  "On The Way",
  "Work Started",
  "Completed",
];

const STATUS_TO_STEP = {
  Pending: "Booking Received",
  Accepted: "Confirmed",
  Confirmed: "Confirmed",
  Assigned: "Technician Assigned",
  "Technician Assigned": "Technician Assigned",
  "On The Way": "On The Way",
  "On the Way": "On The Way",
  "In Progress": "Work Started",
  "Work Started": "Work Started",
  Completed: "Completed",
};

export default function BookingTimeline({ status }) {
  const normalizedStatus = STATUS_TO_STEP[status] || "Booking Received";
  const currentIndex = TIMELINE_STEPS.indexOf(normalizedStatus);
  const isCancelled = status === "Cancelled";

  return (
    <div
      aria-label={`Booking timeline. Current status: ${status || "Pending"}`}
      style={{
        marginTop: "16px",
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
        gap: "8px",
      }}
    >
      {TIMELINE_STEPS.map((step, index) => {
        const isDone = !isCancelled && index <= currentIndex;
        const isCurrent = !isCancelled && index === currentIndex;

        return (
          <div
            key={step}
            style={{
              minWidth: 0,
              textAlign: "center",
              color: isDone ? "#2563eb" : "#94a3b8",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                height: "4px",
                background: isDone ? "#2563eb" : "#e2e8f0",
                borderRadius: "999px",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                margin: "0 auto 6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: isDone ? "#dbeafe" : "#f1f5f9",
                border: isCurrent ? "2px solid #2563eb" : "1px solid #cbd5e1",
                fontSize: "13px",
                fontWeight: "800",
              }}
            >
              {isDone ? "✓" : index + 1}
            </div>
            <span
              style={{
                display: "block",
                fontSize: "11px",
                lineHeight: "1.25",
                fontWeight: isCurrent ? "800" : "600",
                overflowWrap: "anywhere",
              }}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

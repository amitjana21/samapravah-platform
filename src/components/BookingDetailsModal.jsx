import BookingTimeline from "./BookingTimeline";

export default function BookingDetailsModal({
  booking,
  onClose,
  onCancel,
  onRebook,
  onSupport,
  getStatusColor,
}) {
  if (!booking) return null;

  const canCancel = booking.status === "Pending";
  const serviceName = booking.serviceName || booking.service || "Home Service";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-details-title"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.55)",
        zIndex: 10000,
        padding: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 24px 60px rgba(15,23,42,0.28)",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 6px",
                color: "#64748b",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Booking ID: {booking.id}
            </p>
            <h2 id="booking-details-title" style={{ margin: 0, color: "#0f172a" }}>
              {serviceName}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking details"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1px solid #e2e8f0",
              background: "#f8fafc",
              color: "#0f172a",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          <span
            style={{
              display: "inline-flex",
              background: `${getStatusColor(booking.status)}20`,
              color: getStatusColor(booking.status),
              padding: "7px 12px",
              borderRadius: "999px",
              fontWeight: "800",
              fontSize: "13px",
            }}
          >
            {booking.status || "Pending"}
          </span>

          <BookingTimeline status={booking.status} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            {[
              ["Customer", booking.customerName],
              ["Mobile", booking.mobile],
              ["Issue", booking.issueType],
              ["Preferred Date", booking.date],
              ["Time Slot", booking.timeSlot],
              ["Area", booking.area],
              ["Address", booking.address],
              ["Description", booking.description],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "14px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    color: "#64748b",
                    fontSize: "12px",
                    fontWeight: "800",
                  }}
                >
                  {label}
                </p>
                <p style={{ margin: 0, color: "#0f172a", lineHeight: "1.5" }}>
                  {value || "Not provided"}
                </p>
              </div>
            ))}
          </div>

          {booking.imageBase64 && (
            <div style={{ marginTop: "18px" }}>
              <p style={{ fontWeight: "800", color: "#0f172a" }}>
                Uploaded Problem Photo
              </p>
              <img
                src={booking.imageBase64}
                alt={`Uploaded issue for booking ${booking.id}`}
                loading="lazy"
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                }}
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "22px",
            }}
          >
            {canCancel && (
              <button type="button" onClick={() => onCancel(booking)} style={dangerButtonStyle}>
                Cancel Booking
              </button>
            )}
            <button type="button" onClick={() => onRebook(booking)} style={primaryButtonStyle}>
              Rebook
            </button>
            <button type="button" onClick={onSupport} style={secondaryButtonStyle}>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const primaryButtonStyle = {
  flex: "1 1 150px",
  padding: "12px 14px",
  border: "none",
  borderRadius: "12px",
  background: "#2563eb",
  color: "#fff",
  fontWeight: "800",
  cursor: "pointer",
};

const secondaryButtonStyle = {
  ...primaryButtonStyle,
  background: "#0f172a",
};

const dangerButtonStyle = {
  ...primaryButtonStyle,
  background: "#ef4444",
};

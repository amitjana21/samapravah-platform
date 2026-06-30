import { useEffect, useState } from "react";
import BookingTimeline from "../components/BookingTimeline";
import EmptyState from "../components/EmptyState";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { getBookingsByMobile } from "../firebase/getBookingsByMobile";
import { SERVICES } from "../data/services";

const PULL_DISTANCE = 72;

export default function MyBookingsPage() {
  const [mobile, setMobile] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [pullStart, setPullStart] = useState(null);
  const [pullDistance, setPullDistance] = useState(0);

  const savedMobile = localStorage.getItem("customerMobile");

  useEffect(() => {
    if (savedMobile) {
      setMobile(savedMobile);
      loadBookings(savedMobile);
    }
  }, [savedMobile]);

  const activeMobile = mobile || savedMobile || "";

  const loadBookings = async (mobileNumber, options = {}) => {
    if (!mobileNumber) return;

    if (options.refresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      const data = await getBookingsByMobile(mobileNumber);
      setBookings(data || []);
    } finally {
      setLoading(false);
      setRefreshing(false);
      setPullDistance(0);
    }
  };

  const searchBookings = () => {
    if (!mobile) return;
    localStorage.setItem("customerMobile", mobile);
    loadBookings(mobile);
  };

  const refreshBookings = () => {
    if (!activeMobile || loading || refreshing) return;
    loadBookings(activeMobile, { refresh: true });
  };

  const onTouchStart = (event) => {
    if (window.scrollY > 0 || selectedBooking) return;
    setPullStart(event.touches[0].clientY);
  };

  const onTouchMove = (event) => {
    if (pullStart === null || selectedBooking) return;
    const distance = event.touches[0].clientY - pullStart;
    setPullDistance(Math.max(0, Math.min(distance, 96)));
  };

  const onTouchEnd = () => {
    if (pullDistance >= PULL_DISTANCE) {
      refreshBookings();
    } else {
      setPullDistance(0);
    }
    setPullStart(null);
  };

  if (selectedBooking) {
    return (
      <BookingDetailsPage
        booking={selectedBooking}
        onBack={() => setSelectedBooking(null)}
      />
    );
  }

  return (
    <div
      className="page"
      style={{ background: "#f8fafc", minHeight: "100vh" }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Header title="My Bookings" />

      <main style={{ padding: "18px", maxWidth: "760px", margin: "0 auto" }}>
        <PullRefreshIndicator
          distance={pullDistance}
          refreshing={refreshing}
        />

        {!savedMobile && (
          <section style={searchPanelStyle}>
            <label htmlFor="booking-mobile" style={labelStyle}>
              Mobile Number
            </label>
            <input
              id="booking-mobile"
              type="tel"
              inputMode="numeric"
              placeholder="Enter mobile number"
              value={mobile}
              maxLength={10}
              onChange={(event) => setMobile(event.target.value.replace(/\D/g, ""))}
              style={inputStyle}
            />
            <button
              type="button"
              onClick={searchBookings}
              disabled={loading || !mobile}
              style={{
                ...primaryButtonStyle,
                opacity: loading || !mobile ? 0.65 : 1,
              }}
            >
              {loading ? "Searching..." : "Search Bookings"}
            </button>
          </section>
        )}

        {savedMobile && (
          <div style={toolbarStyle}>
            <button type="button" onClick={refreshBookings} style={ghostButtonStyle}>
              {refreshing ? "Refreshing..." : "Pull down or tap to refresh"}
            </button>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem("customerMobile");
                setMobile("");
                setBookings([]);
              }}
              style={{ ...ghostButtonStyle, color: "#ef4444" }}
            >
              Change Number
            </button>
          </div>
        )}

        {loading && <LoadingSpinner label="Loading your bookings" />}

        {!loading && bookings.length === 0 && (
          <EmptyState
            title="No bookings found"
            message={
              activeMobile
                ? "There are no service requests linked to this mobile number yet."
                : "Enter your mobile number to view your service requests."
            }
          />
        )}

        {!loading && bookings.length > 0 && (
          <section aria-label="Booking list" style={listStyle}>
            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onOpen={() => setSelectedBooking(booking)}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

function BookingCard({ booking, onOpen }) {
  const service = getServiceMeta(booking);
  const statusColor = getStatusColor(booking.status);

  return (
    <button
      type="button"
      onClick={onOpen}
      style={cardButtonStyle}
      aria-label={`Open booking ${booking.id}`}
    >
      <span style={{ ...serviceIconStyle, background: service.background }}>
        {service.icon}
      </span>

      <span style={{ minWidth: 0, flex: 1 }}>
        <span style={serviceNameStyle}>{service.name}</span>
        <span style={bookingIdStyle}>Booking ID: {booking.id}</span>
        <span style={bookingMetaStyle}>{booking.date || "Date not selected"}</span>
      </span>

      <span style={cardRightStyle}>
        <span
          style={{
            ...statusBadgeStyle,
            background: `${statusColor}18`,
            color: statusColor,
          }}
        >
          {booking.status || "Pending"}
        </span>
        <span aria-hidden="true" style={arrowStyle}>
          &gt;
        </span>
      </span>
    </button>
  );
}

function BookingDetailsPage({ booking, onBack }) {
  const service = getServiceMeta(booking);
  const technician = booking.technicianName || booking.technician;

  return (
    <div className="page" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Header title="Booking Details" />

      <main style={{ padding: "18px", maxWidth: "760px", margin: "0 auto" }}>
        <button type="button" onClick={onBack} style={backButtonStyle}>
          Back to bookings
        </button>

        <section style={detailsHeroStyle}>
          <div style={{ ...serviceIconStyle, width: "54px", height: "54px", background: service.background }}>
            {service.icon}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={bookingIdStyle}>Booking ID: {booking.id}</p>
            <h2 style={detailsTitleStyle}>{service.name}</h2>
            <span
              style={{
                ...statusBadgeStyle,
                background: `${getStatusColor(booking.status)}18`,
                color: getStatusColor(booking.status),
              }}
            >
              {booking.status || "Pending"}
            </span>
          </div>
        </section>

        <section style={detailsSectionStyle}>
          <h3 style={sectionTitleStyle}>Status Timeline</h3>
          <BookingTimeline status={booking.status} />
        </section>

        <section style={detailsGridStyle}>
          <DetailItem label="Customer Name" value={booking.customerName} />
          <DetailItem label="Mobile" value={booking.mobile} />
          <DetailItem label="Address" value={booking.address} wide />
          <DetailItem label="Date" value={booking.date} />
          <DetailItem label="Time Slot" value={booking.timeSlot} />
          <DetailItem label="Description" value={booking.description} wide />
          {technician && (
            <DetailItem
              label="Assigned Technician"
              value={
                booking.technicianPhone
                  ? `${technician} (${booking.technicianPhone})`
                  : technician
              }
              wide
            />
          )}
        </section>
      </main>
    </div>
  );
}

function DetailItem({ label, value, wide = false }) {
  return (
    <div style={{ ...detailItemStyle, gridColumn: wide ? "1 / -1" : "auto" }}>
      <p style={detailLabelStyle}>{label}</p>
      <p style={detailValueStyle}>{value || "Not provided"}</p>
    </div>
  );
}

function PullRefreshIndicator({ distance, refreshing }) {
  if (!distance && !refreshing) return null;

  return (
    <div style={pullIndicatorStyle}>
      {refreshing ? "Refreshing bookings..." : distance >= PULL_DISTANCE ? "Release to refresh" : "Pull to refresh"}
    </div>
  );
}

function getServiceMeta(booking) {
  const service = SERVICES.find(
    (item) =>
      item.id === booking.serviceId ||
      item.name === booking.serviceName ||
      item.name === booking.service
  );
  const name = booking.serviceName || booking.service || service?.name || "Home Service";

  return {
    name,
    icon: service?.name?.slice(0, 1).toUpperCase() || name.slice(0, 1).toUpperCase(),
    background: service?.gradient || "linear-gradient(135deg,#2563eb,#22c55e)",
  };
}

function getStatusColor(status) {
  switch (status) {
    case "Pending":
      return "#f59e0b";
    case "Accepted":
    case "Confirmed":
      return "#2563eb";
    case "Technician Assigned":
    case "Assigned":
      return "#7c3aed";
    case "On The Way":
    case "On the Way":
      return "#ea580c";
    case "In Progress":
    case "Work Started":
      return "#0d9488";
    case "Completed":
      return "#059669";
    default:
      return "#64748b";
  }
}

const searchPanelStyle = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "16px",
  marginBottom: "16px",
  boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  color: "#334155",
  fontSize: "13px",
  fontWeight: "800",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  boxSizing: "border-box",
  marginBottom: "12px",
};

const primaryButtonStyle = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  fontWeight: "800",
  cursor: "pointer",
};

const toolbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  alignItems: "center",
  marginBottom: "14px",
};

const ghostButtonStyle = {
  background: "transparent",
  border: "none",
  color: "#2563eb",
  fontSize: "13px",
  fontWeight: "800",
  cursor: "pointer",
  padding: "8px 0",
};

const listStyle = {
  display: "grid",
  gap: "12px",
};

const cardButtonStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "16px",
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  boxShadow: "0 10px 28px rgba(15,23,42,0.07)",
  textAlign: "left",
  cursor: "pointer",
};

const serviceIconStyle = {
  width: "48px",
  height: "48px",
  flex: "0 0 auto",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: "900",
  fontSize: "20px",
};

const serviceNameStyle = {
  display: "block",
  color: "#0f172a",
  fontSize: "16px",
  fontWeight: "900",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const bookingIdStyle = {
  display: "block",
  margin: "4px 0",
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "800",
  overflowWrap: "anywhere",
};

const bookingMetaStyle = {
  display: "block",
  color: "#475569",
  fontSize: "13px",
  fontWeight: "700",
};

const cardRightStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flex: "0 0 auto",
};

const statusBadgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 9px",
  borderRadius: "999px",
  fontSize: "11px",
  fontWeight: "900",
  whiteSpace: "nowrap",
};

const arrowStyle = {
  color: "#94a3b8",
  fontSize: "20px",
  fontWeight: "900",
};

const pullIndicatorStyle = {
  marginBottom: "12px",
  color: "#2563eb",
  fontSize: "13px",
  fontWeight: "800",
  textAlign: "center",
};

const backButtonStyle = {
  background: "transparent",
  border: "none",
  color: "#2563eb",
  cursor: "pointer",
  fontWeight: "900",
  padding: "0 0 14px",
};

const detailsHeroStyle = {
  display: "flex",
  gap: "14px",
  alignItems: "center",
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "18px",
  boxShadow: "0 10px 28px rgba(15,23,42,0.07)",
};

const detailsTitleStyle = {
  margin: "0 0 8px",
  color: "#0f172a",
  fontSize: "22px",
};

const detailsSectionStyle = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "18px",
  marginTop: "14px",
};

const sectionTitleStyle = {
  margin: "0 0 4px",
  color: "#0f172a",
  fontSize: "16px",
};

const detailsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
  marginTop: "14px",
};

const detailItemStyle = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  padding: "14px",
};

const detailLabelStyle = {
  margin: "0 0 6px",
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "900",
};

const detailValueStyle = {
  margin: 0,
  color: "#0f172a",
  fontSize: "14px",
  lineHeight: "1.55",
  overflowWrap: "anywhere",
};

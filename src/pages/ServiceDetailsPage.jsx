import Header from "../components/Header";
import { useApp, VIEWS } from "../context/AppContext";
import { SERVICE_DETAILS } from "../data/serviceDetails";

export default function ServiceDetailsPage() {
  const { selectedService, startBooking } = useApp();

  if (!selectedService) return null;

  const details = SERVICE_DETAILS[selectedService.id];

  return (
    <div className="page">
      <Header title={selectedService.name} />

      <div style={{ padding: "20px" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "20px"
          }}
        >
          {selectedService.emoji}
        </div>

        <h2>{selectedService.name}</h2>

        <p>
          <strong>Starting Price:</strong> {details?.price}
        </p>

        <p>
          <strong>Duration:</strong> {details?.duration}
        </p>

        <h3>What's Included</h3>

        <ul>
          {details?.includes?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            background: "#f8fafc",
            borderRadius: "10px"
          }}
        >
          <strong>Why Choose Sama Pravah?</strong>

          <ul>
            <li>Verified Technicians</li>
            <li>Transparent Pricing</li>
            <li>Local Support</li>
            <li>Quick Response</li>
          </ul>
        </div>

        <button
          onClick={() => startBooking(selectedService)}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "14px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "12px"
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
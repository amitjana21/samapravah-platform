import { useState } from "react";
import { saveBooking } from "../firebase/bookings";
import { useApp, VIEWS } from "../context/AppContext";

export default function WebsiteBookingPage() {
    const { navigate } = useApp();
  const [form, setForm] = useState({
    service: "",
    name: "",
    mobile: "",
    area: "",
    address: "",
    date: "",
  });

  const update = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // STEP 2 — Replace submit()
  const submit = async () => {
    if (!form.service || !form.name || !form.mobile || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    const bookingData = {
      serviceId: form.service,
      serviceName: form.service,
      issueType: "General",

      customerName: form.name,
      mobile: form.mobile,

      address: form.address,

      area: form.area,

      date: form.date,

      source: "Website",

      description: "",

      status: "Pending",
    };

    try {
      const result = await saveBooking(bookingData);

      if (result.success) {
        const goTrack = window.confirm(
            `Booking Submitted Successfully!\n\nBooking ID: ${result.id}\n\nPress OK to Track Booking`
          );
          
          if (goTrack) {
            navigate(VIEWS.MY_BOOKINGS);
          }

        setForm({
          service: "",
          name: "",
          mobile: "",
          area: "",
          address: "",
          date: "",
        });
      } else {
        alert("Booking Failed");
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "40px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h1>Book Home Service</h1>

      <p>Fill the form below and our technician will contact you shortly.</p>

      <div style={{ marginTop: "30px" }}>
        <label>Service</label>
        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Service</option>
          <option>Electrical</option>
          <option>Plumbing</option>
          <option>AC Repair</option>
          <option>Cleaning</option>
          <option>Carpenter</option>
          <option>CCTV</option>
        </select>

        <label>Name</label>
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          style={inputStyle}
        />

        <label>Mobile</label>
        {/* STEP 3 — Add Mobile Validation */}
        <input
          value={form.mobile}
          maxLength={10}
          onChange={(e) => update("mobile", e.target.value.replace(/\D/g, ""))}
          style={inputStyle}
        />

        <label>Area</label>
        <select
          value={form.area}
          onChange={(e) => update("area", e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Area</option>
          <option>Lake Town</option>
          <option>Bangur</option>
          <option>Salt Lake</option>
          <option>Baguiati</option>
          <option>New Town</option>
        </select>

        <label>Address</label>
        <textarea
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          style={{
            ...inputStyle,
            height: "120px",
          }}
        />

        <label>Preferred Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={submit}
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "16px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Book Service
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "8px",
  marginBottom: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
};
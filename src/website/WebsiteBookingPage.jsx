import { useState } from "react";
import { saveBooking } from "../firebase/bookings";
import { useApp, VIEWS } from "../context/AppContext";
import { WEBSITE_BOOKING_AREAS } from "../constants/areas";
import { FEATURED_SERVICES } from "../constants/services";
import { BOOKING_STATUS } from "../constants/status";

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

      status: BOOKING_STATUS.PENDING,
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
        <label htmlFor="website-service">Service</label>
        <select
          id="website-service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          style={inputStyle}
          required
          aria-required="true"
        >
          <option value="">Select Service</option>
          {FEATURED_SERVICES.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>

        <label htmlFor="website-name">Name</label>
        <input
          id="website-name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          style={inputStyle}
          required
          aria-required="true"
          autoComplete="name"
        />

        <label htmlFor="website-mobile">Mobile</label>
        {/* STEP 3 — Add Mobile Validation */}
        <input
          id="website-mobile"
          type="tel"
          value={form.mobile}
          maxLength={10}
          onChange={(e) => update("mobile", e.target.value.replace(/\D/g, ""))}
          style={inputStyle}
          required
          aria-required="true"
          inputMode="numeric"
          autoComplete="tel"
        />

        <label htmlFor="website-area">Area</label>
        <select
          id="website-area"
          value={form.area}
          onChange={(e) => update("area", e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Area</option>
          {WEBSITE_BOOKING_AREAS.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>

        <label htmlFor="website-address">Address</label>
        <textarea
          id="website-address"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          style={{
            ...inputStyle,
            height: "120px",
          }}
          required
          aria-required="true"
          autoComplete="street-address"
        />

        <label htmlFor="website-date">Preferred Date</label>
        <input
          id="website-date"
          type="date"
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
          style={inputStyle}
        />

        <button
          type="button"
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

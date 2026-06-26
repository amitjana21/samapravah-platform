import { useState, useEffect } from 'react';
import { useApp, VIEWS } from '../context/AppContext';
import { SERVICES, TIME_SLOTS, getServiceById } from '../data/services';
import Header from '../components/Header';
import { saveBooking } from '../firebase/bookings';

export default function BookingPage() {
  const { selectedService, submitBooking } = useApp();
  const today = new Date().toISOString().slice(0, 10);

  const [form, setForm] = useState({
    serviceId: selectedService?.id || '',
    issueType: '',
    customerName: '',
    mobile: '',
    address: '',
    date: today,
    timeSlot: TIME_SLOTS[0],
    description: '',
    imagePreview: null,
    imageBase64: null,
  });

  const service = getServiceById(form.serviceId);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  useEffect(() => {
    if (selectedService?.id) {
      setForm((f) => ({ ...f, serviceId: selectedService.id, issueType: '' }));
    }
  }, [selectedService?.id]);

  const onImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      set('imagePreview', r.result);
      set('imageBase64', r.result);
    };
    r.readAsDataURL(file);
  };

  const submit = async (e) => {
    e.preventDefault();
  
    if (
      !form.serviceId ||
      !form.customerName ||
      !form.mobile ||
      !form.address
    ) {
      alert("Please fill all required fields");
      return;
    }
  
    const bookingData = {
      serviceId: form.serviceId,
      serviceName: service?.name || form.serviceId,
      issueType: form.issueType || "General",
      customerName: form.customerName.trim(),
      mobile: form.mobile.trim(),
      address: form.address.trim(),
      date: form.date,
      timeSlot: form.timeSlot,
      description: form.description.trim(),
      imageBase64: form.imageBase64 || null,
      status: "Pending",
      createdAt: new Date(),
    };
  
    try {
      // SAVE TO FIREBASE
      const result = await saveBooking(bookingData);
  
      if (result.success) {
        const bookingId = result.id;
  
        // WHATSAPP MESSAGE
        const message = `
  *New Service Booking - Sama Pravah*
  
  Booking ID: ${bookingId}
  
  Customer Name: ${bookingData.customerName}
  Phone: ${bookingData.mobile}
  
  Service: ${bookingData.serviceName}
  Issue: ${bookingData.issueType}
  
  Date: ${bookingData.date}
  Time Slot: ${bookingData.timeSlot}
  
  Address:
  ${bookingData.address}
  
  Problem Description:
  ${bookingData.description || "N/A"}
  
  Status: Pending
  `;
  
        // YOUR WHATSAPP NUMBER
        const whatsappNumber = "918777732521";
  
        const whatsappUrl =
          `https://wa.me/${whatsappNumber}?text=` +
          encodeURIComponent(message);
  
        // OPEN WHATSAPP
        window.open(whatsappUrl, "_blank");
  
        alert("Booking submitted successfully!");
  
        // OPTIONAL RESET
        setForm({
          serviceId: '',
          issueType: '',
          customerName: '',
          mobile: '',
          address: '',
          date: today,
          timeSlot: TIME_SLOTS[0],
          description: '',
          imagePreview: null,
          imageBase64: null,
        });
  
      } else {
        alert("Failed to save booking");
        console.error(result.error);
      }
  
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="page booking-page">
      <Header title="Book Service" back={VIEWS.HOME} />

      <form className="form-card" onSubmit={submit}>
        <div className="form-section">
          <h2 className="form-section__title">Select Service</h2>
          <div className="chip-group">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`chip ${form.serviceId === s.id ? 'chip--selected' : ''}`}
                onClick={() => {
                  set('serviceId', s.id);
                  set('issueType', '');
                }}
              >
                {s.emoji} {s.name}
              </button>
            ))}
          </div>
        </div>

        {service && (
          <div className="form-section">
            <h2 className="form-section__title">Problem Type</h2>
            <div className="chip-group">
              {service.issues.map((issue) => (
                <button
                  key={issue}
                  type="button"
                  className={`chip chip--accent ${form.issueType === issue ? 'chip--selected' : ''}`}
                  onClick={() => set('issueType', issue)}
                >
                  {issue}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="form-section">
          <h2 className="form-section__title">Your Details</h2>
          <div className="form-field">
            <label className="form-field__label" htmlFor="name">
              Full Name *
            </label>
            <input
              id="name"
              className="form-field__input"
              type="text"
              placeholder="Enter your name"
              value={form.customerName}
              onChange={(e) => set('customerName', e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-field__label" htmlFor="mobile">
              Mobile Number *
            </label>
            <input
              id="mobile"
              className="form-field__input"
              type="tel"
              inputMode="numeric"
              placeholder="10-digit mobile"
              maxLength={10}
              value={form.mobile}
              onChange={(e) => set('mobile', e.target.value.replace(/\D/g, ''))}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-field__label" htmlFor="address">
              Full Address *
            </label>
            <textarea
              id="address"
              className="form-field__input form-field__input--textarea"
              placeholder="House no., street, landmark, city, pincode"
              value={form.address}
              onChange={(e) => set('address', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-section__title">Date & Time</h2>
          <div className="form-row">
            <div className="form-field">
              <label className="form-field__label" htmlFor="date">
                Date *
              </label>
              <input
                id="date"
                className="form-field__input"
                type="date"
                min={today}
                value={form.date}
                onChange={(e) => set('date', e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-field__label" htmlFor="slot">
                Time Slot *
              </label>
              <select
                id="slot"
                className="form-field__input"
                value={form.timeSlot}
                onChange={(e) => set('timeSlot', e.target.value)}
              >
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-section__title">Additional Info</h2>
          <div className="form-field">
            <label className="form-field__label" htmlFor="desc">
              Describe the problem
            </label>
            <textarea
              id="desc"
              className="form-field__input form-field__input--textarea"
              placeholder="Optional details for the technician"
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
            />
          </div>
          <div className="form-field">
            <span className="form-field__label">Upload Photo (Optional)</span>
            <label className="upload-zone">
              <input type="file" accept="image/*" onChange={onImage} />
              {form.imagePreview ? (
                <img src={form.imagePreview} alt="Problem" className="upload-zone__preview" />
              ) : (
                <span className="upload-zone__text">📷 Tap to add a photo of the issue</span>
              )}
            </label>
          </div>
        </div>

        <div className="form-submit">
          <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={!form.serviceId}>
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}

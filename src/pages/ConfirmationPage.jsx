import { useMemo } from 'react';
import { useApp, VIEWS } from '../context/AppContext';
import { StatusTrack } from '../components/StatusBadge';
import Header from '../components/Header';
import { formatBookingWhatsAppMessage, getWhatsAppBookingUrl } from '../utils/whatsapp';

export default function ConfirmationPage() {
  const { confirmedBooking, navigate } = useApp();

  const whatsappUrl = useMemo(
    () => (confirmedBooking ? getWhatsAppBookingUrl(confirmedBooking) : ''),
    [confirmedBooking]
  );

  const whatsappPreview = useMemo(
    () => (confirmedBooking ? formatBookingWhatsAppMessage(confirmedBooking) : ''),
    [confirmedBooking]
  );

  if (!confirmedBooking) {
    return (
      <div className="page confirm">
        <Header title="Confirmation" back={VIEWS.HOME} />
        <div className="empty">
          <p className="empty__text">No booking found.</p>
          <button type="button" className="btn btn--primary btn--block" onClick={() => navigate(VIEWS.HOME)}>
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const b = confirmedBooking;

  return (
    <div className="page confirm">
      <Header title="Confirmed" back={VIEWS.HOME} />

      <div className="confirm__hero">
        <div className="confirm__icon">✓</div>
        <h1 className="confirm__title">Booking Confirmed!</h1>
        <p className="confirm__subtitle">Thank you, {b.customerName}</p>
      </div>

      <div className="confirm__id">
        <span className="confirm__id-label">Booking ID</span>
        <span className="confirm__id-value">{b.id}</span>
      </div>

      <div className="surface-card detail-list">
        <div className="detail-list__row">
          <span className="detail-list__label">Service</span>
          <span className="detail-list__value">{b.serviceName}</span>
        </div>
        <div className="detail-list__row">
          <span className="detail-list__label">Issue</span>
          <span className="detail-list__value">{b.issueType}</span>
        </div>
        <div className="detail-list__row">
          <span className="detail-list__label">Visit</span>
          <span className="detail-list__value">{b.estimatedVisit}</span>
        </div>
        <div className="detail-list__row">
          <span className="detail-list__label">Address</span>
          <span className="detail-list__value">{b.address}</span>
        </div>
        <div className="detail-list__row">
          <span className="detail-list__label">Mobile</span>
          <span className="detail-list__value">{b.mobile}</span>
        </div>
      </div>

      <section className="whatsapp-card" aria-labelledby="whatsapp-card-title">
        <div className="whatsapp-card__head">
          <span className="whatsapp-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <div>
            <h2 id="whatsapp-card-title" className="whatsapp-card__title">
              Continue on WhatsApp
            </h2>
            <p className="whatsapp-card__desc">
              Send your booking to our team for faster confirmation and updates.
            </p>
          </div>
        </div>

        <pre className="whatsapp-card__preview">{whatsappPreview}</pre>

        <a
          href={whatsappUrl}
          className="btn btn--whatsapp btn--lg btn--block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Continue on WhatsApp
        </a>
      </section>

      <div className="surface-card detail-list">
        <p className="form-section__title" style={{ marginBottom: '12px' }}>
          Track Status
        </p>
        <StatusTrack status={b.status} />
      </div>

      <div className="confirm__actions">
        <button type="button" className="btn btn--primary btn--lg btn--block" onClick={() => navigate(VIEWS.MY_BOOKINGS)}>
          View My Bookings
        </button>
        <button type="button" className="btn btn--secondary btn--block" onClick={() => navigate(VIEWS.HOME)}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

import { useApp, VIEWS } from '../context/AppContext';
import { SERVICES, TRUST_BADGES, PRICING_POINTS } from '../data/services';
import { ServiceCardTile } from '../components/ServiceCard';
import Header from '../components/Header';

export default function HomePage() {
  const { startBooking, navigate } = useApp();

  return (
    <div className="page home">
      <Header variant="hero" />

      <section className="home-hero">
        <span className="home-hero__pill">🇮🇳 Trusted across India</span>
        <h1 className="home-hero__title">
          Home services,
          <br />
          <em>done right.</em>
        </h1>
        <p className="home-hero__desc">
          Book verified professionals for cleaning, repairs & installations — transparent pricing at your doorstep.
        </p>
        <div className="home-hero__actions">
          <button type="button" className="btn btn--primary btn--lg btn--block" onClick={() => navigate(VIEWS.SERVICES)}>
            Explore Services
          </button>
          <button type="button" className="btn btn--secondary btn--lg btn--block" onClick={() => navigate(VIEWS.BOOKING)}>
            Book Now
          </button>
        </div>
        <div className="home-hero__trust">
          <span>✓ Verified pros</span>
          <span>₹ Fair pricing</span>
          <span>⚡ Same-day</span>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2 className="section__title">Popular Services</h2>
          <button type="button" className="btn btn--ghost" onClick={() => navigate(VIEWS.SERVICES)}>
            See all
          </button>
        </div>
        <div className="service-scroll">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCardTile key={s.id} service={s} onClick={startBooking} />
          ))}
        </div>
      </section>

      <section className="trust-block">
        <h2 className="trust-block__title">Why Sama Pravah?</h2>
        <div className="trust-grid">
          {TRUST_BADGES.map((b) => (
            <div key={b.title} className="trust-item">
              <span className="trust-item__icon">{b.icon}</span>
              <span className="trust-item__title">{b.title}</span>
              <p className="trust-item__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-block">
        <div className="pricing-block__header">
          <h2 className="pricing-block__title">Transparent Pricing</h2>
          <p className="pricing-block__subtitle">Know the cost before we start — no hidden charges.</p>
        </div>
        {PRICING_POINTS.map((p) => (
          <div key={p.label} className="pricing-row">
            <div className="pricing-row__info">
              <strong>{p.label}</strong>
              <small>{p.note}</small>
            </div>
            <span className="pricing-row__price">{p.price}</span>
          </div>
        ))}
        <p className="pricing-block__donation">💚 5% of profits donated to community welfare initiatives</p>
      </section>

      <section className="cta-block">
        <h3 className="cta-block__title">Need help at home?</h3>
        <p className="cta-block__text">Book in 60 seconds. Pay only after service.</p>
        <button type="button" className="btn btn--primary btn--lg btn--block" onClick={() => navigate(VIEWS.BOOKING)}>
          Book a Service Now
        </button>
      </section>
    </div>
  );
}

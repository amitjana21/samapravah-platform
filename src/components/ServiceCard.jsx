const SOFT_BG = {
  cleaning: '#e0f2fe',
  plumbing: '#dbeafe',
  electrical: '#fef3c7',
  ac: '#cffafe',
  fridge: '#e0e7ff',
  'washing-machine': '#ede9fe',
  cctv: '#f1f5f9',
  'damp-proofing': '#d1fae5',
  carpenter: '#ffedd5',
};

export function ServiceCardRow({ service, onClick }) {
  return (
    <button type="button" className="service-card" onClick={() => onClick?.(service)}>
      <div
        className="service-card__visual"
        style={{ background: SOFT_BG[service.id] || 'var(--color-primary-soft)' }}
      >
        {service.emoji}
      </div>
      <div className="service-card__body">
        <span className="service-card__tag">{service.brand}</span>
        <span className="service-card__name">{service.name}</span>
        <span className="service-card__meta">From ₹{service.priceFrom}</span>
      </div>
      <span className="service-card__action">Book Now</span>
    </button>
  );
}

export function ServiceCardTile({ service, onClick }) {
  return (
    <button
      type="button"
      className="service-tile"
      onClick={() => onClick?.(service)}
      style={{ '--tile-bg': SOFT_BG[service.id] || 'var(--color-primary-soft)' }}
    >
      <span className="service-tile__emoji">{service.emoji}</span>
      <span className="service-tile__name">{service.name}</span>
      <span className="service-tile__price">₹{service.priceFrom}+</span>
      <span className="service-tile__cta">Book Now</span>
    </button>
  );
}

import { SERVICES } from '../data/services';
import { useApp } from '../context/AppContext';
import { ServiceCardRow } from '../components/ServiceCard';
import Header from '../components/Header';

export default function ServicesPage() {
  const { openServiceDetails } = useApp();

  return (
    <div className="page services-page">
      <Header title="All Services" />
      <p className="services-page__intro">Tap a service to book a verified professional at your home.</p>
      <div className="service-list">
        {SERVICES.map((s) => (
          <ServiceCardRow
          key={s.id}
          service={s}
          onClick={openServiceDetails}
        />
        ))}
      </div>
    </div>
  );
}

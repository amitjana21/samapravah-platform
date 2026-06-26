import { useApp, VIEWS } from '../context/AppContext';

const TABS = [
  { id: VIEWS.HOME, label: 'Home', icon: '🏠' },
  { id: VIEWS.SERVICES, label: 'Services', icon: '🔧' },
  { id: VIEWS.MY_BOOKINGS, label: 'Bookings', icon: '📋' },
  { id: VIEWS.PROFILE, label: 'Profile', icon: '👤' },
  { id: VIEWS.ADMIN, label: 'Admin', icon: '⚙️' },
];

export default function BottomNav() {
  const { view, navigate } = useApp();

  if (view === VIEWS.CONFIRMATION) return null;

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <div className="bottom-nav__inner">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`bottom-nav__item ${view === tab.id ? 'bottom-nav__item--active' : ''}`}
            onClick={() => navigate(tab.id)}
          >
            <span className="bottom-nav__icon" aria-hidden="true">
              {tab.icon}
            </span>
            <span className="bottom-nav__label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

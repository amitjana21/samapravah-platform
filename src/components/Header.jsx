import { useApp, VIEWS } from '../context/AppContext';
import { SUPPORT_PHONE } from '../config/contact';

export default function Header({ title, back, variant = 'default' }) {
  const { navigate } = useApp();
  const isHero = variant === 'hero';

  return (
    <header className={`header ${isHero ? 'header--hero' : ''}`}>
      {back ? (
        <button
          type="button"
          className="header__action"
          onClick={() => navigate(back)}
          aria-label="Go back"
        >
          ←
        </button>
      ) : (
        <button
          type="button"
          className="header__action"
          onClick={() => navigate(VIEWS.HOME)}
          aria-label="Home"
        >
          <span className="header__logo">SP</span>
        </button>
      )}
      <h1 className="header__title">{title || 'Sama Pravah'}</h1>
      <a href={`tel:${SUPPORT_PHONE}`} className="header__action header__call" aria-label="Call support">
        📞
      </a>
    </header>
  );
}

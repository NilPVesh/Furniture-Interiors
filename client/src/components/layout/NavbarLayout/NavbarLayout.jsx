import { NavLink, Link } from 'react-router-dom';
import styles from './NavbarLayout.module.scss';

const NavbarLayout = ({
  brand = 'Vishwakarma Furniture & Interiors',
  brandTo = '/',
  links = [],
  actions,
  mobileOpen = false,
  onToggleMobile,
  onNavigate,
  className = '',
}) => (
  <header className={[styles.navbar, className].filter(Boolean).join(' ')}>
    <div className={styles.inner}>
      <div className={styles.bar}>
        <Link to={brandTo} className={styles.brand} onClick={onNavigate}>
          {brand}
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={onToggleMobile}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={[styles.nav, mobileOpen ? styles.open : ''].filter(Boolean).join(' ')}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')
            }
            end={link.end}
            onClick={onNavigate}
          >
            {link.label}
          </NavLink>
        ))}
        {actions ? <div className={styles.actions}>{actions}</div> : null}
      </nav>
    </div>
  </header>
);

export default NavbarLayout;

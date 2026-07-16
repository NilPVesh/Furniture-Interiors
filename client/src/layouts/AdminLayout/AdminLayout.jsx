import { NavLink, Outlet, Link } from 'react-router-dom';
import { SidebarLayout } from '../../components/layout';
import styles from './AdminLayout.module.scss';

const adminLinks = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/customers', label: 'Customers' },
  { to: '/admin/analytics', label: 'Analytics' },
  { to: '/admin/settings', label: 'Settings' },
];

const AdminLayout = () => {
  const sidebar = (
    <div className={styles.sidebarInner}>
      <Link to="/admin" className={styles.brand}>
        <span className={styles.brandMark}>VF</span>
        <span className={styles.brandText}>Admin Portal</span>
      </Link>

      <nav className={styles.nav} aria-label="Admin">
        {adminLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <Link to="/" className={styles.storeLink}>View Store</Link>
        <button type="button" className={styles.logout}>Logout</button>
      </div>
    </div>
  );

  return (
    <SidebarLayout sidebar={sidebar}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </SidebarLayout>
  );
};

export default AdminLayout;

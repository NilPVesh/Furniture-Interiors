import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavbarLayout, Footer } from '../../components/layout';
import { Button } from '../../components/common';
import styles from './CustomerLayout.module.scss';

const customerLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/profile', label: 'Profile' },
];

const footerLinks = [
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/wishlist', label: 'Wishlist' },
  { to: '/orders', label: 'My Orders' },
];

const CustomerLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.shell}>
      <NavbarLayout
        brand="Vishwakarma Furniture & Interiors"
        brandTo="/"
        links={customerLinks}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((open) => !open)}
        onNavigate={() => setMobileOpen(false)}
        actions={
          <>
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button size="sm" variant="ghost">Login</Button>
            </Link>
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <Button size="sm" variant="primary">Register</Button>
            </Link>
          </>
        }
      />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer brand="Vishwakarma Furniture & Interiors" links={footerLinks} />
    </div>
  );
};

export default CustomerLayout;

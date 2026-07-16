import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Footer.module.scss';

const Footer = ({
  brand = 'Vishwakarma Furniture & Interiors',
  links = [],
  copyright,
  className = '',
}) => (
  <footer className={[styles.footer, className].filter(Boolean).join(' ')}>
    <Container size="xl">
      <div className={styles.grid}>
        <div>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.tagline}>Crafted spaces. Timeless furniture.</p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>
      </div>
      <p className={styles.copy}>
        {copyright || `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}
      </p>
    </Container>
  </footer>
);

export default Footer;

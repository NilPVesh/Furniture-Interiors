import { Link } from 'react-router-dom';
import { Button, SectionHeader } from '../../../components/common';
import { Container, PageWrapper } from '../../../components/layout';
import { ProductGrid } from '../../../components/product';
import styles from './Home.module.scss';

const featuredProducts = [
  { id: '1', name: 'Walnut Lounge Sofa', category: 'Sofa', price: '45,000', status: 'Made to Order', to: '/products/1' },
  { id: '2', name: 'Teak Dining Table', category: 'Dining', price: '62,000', status: 'In Stock', to: '/products/2' },
  { id: '3', name: 'Oak Console Desk', category: 'Office', price: '28,500', status: 'In Stock', to: '/products/3' },
];

const Home = () => (
  <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.brand}>Vishwakarma Furniture & Interiors</h1>
        <p className={styles.headline}>
          Bespoke furniture and considered interiors for homes that feel lived-in and lasting.
        </p>
        <div className={styles.ctaRow}>
          <Link to="/products"><Button size="lg">Explore Collection</Button></Link>
          <Link to="/contact"><Button size="lg" variant="secondary">Talk to Us</Button></Link>
        </div>
      </div>
    </section>

    <PageWrapper>
      <Container size="xl">
        <SectionHeader
          title="Featured Pieces"
          subtitle="A curated glimpse of our latest made-to-order and ready stock."
          actions={<Link to="/products"><Button variant="outline">View all</Button></Link>}
        />
        <ProductGrid products={featuredProducts} />
      </Container>
    </PageWrapper>
  </div>
);

export default Home;

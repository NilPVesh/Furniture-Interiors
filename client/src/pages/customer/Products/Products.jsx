import { Button, PageHeader, SearchBar, Pagination, Breadcrumb } from '../../../components/common';
import { Container, PageWrapper } from '../../../components/layout';
import { ProductGrid } from '../../../components/product';
import styles from './Products.module.scss';

const products = [
  { id: '1', name: 'Walnut Lounge Sofa', category: 'Sofa', price: '45,000', status: 'Made to Order', to: '/products/1' },
  { id: '2', name: 'Teak Dining Table', category: 'Dining', price: '62,000', status: 'In Stock', to: '/products/2' },
  { id: '3', name: 'Oak Console Desk', category: 'Office', price: '28,500', status: 'In Stock', to: '/products/3' },
  { id: '4', name: 'Linen Accent Chair', category: 'Seating', price: '18,900', status: 'In Stock', to: '/products/4' },
  { id: '5', name: 'Sheesham Bed Frame', category: 'Bedroom', price: '54,000', status: 'Made to Order', to: '/products/5' },
  { id: '6', name: 'Marble Side Table', category: 'Tables', price: '12,500', status: 'In Stock', to: '/products/6' },
];

const Products = () => (
  <PageWrapper>
    <Container size="xl">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />
      <PageHeader
        title="Products"
        subtitle="Browse furniture crafted for comfort, proportion, and longevity."
        actions={<Button variant="secondary">Filters</Button>}
      />
      <div className={styles.toolbar}>
        <SearchBar placeholder="Search furniture..." />
      </div>
      <ProductGrid products={products} />
      <div className={styles.pager}>
        <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
      </div>
    </Container>
  </PageWrapper>
);

export default Products;

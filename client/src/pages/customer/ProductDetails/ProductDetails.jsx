import { Button, Breadcrumb, PageHeader } from '../../../components/common';
import { Container, PageWrapper } from '../../../components/layout';
import { ProductImage, ProductPrice, ProductStatusBadge } from '../../../components/product';
import styles from './ProductDetails.module.scss';

const ProductDetails = () => (
  <PageWrapper>
    <Container size="xl">
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: 'Walnut Lounge Sofa' },
        ]}
      />
      <div className={styles.layout}>
        <ProductImage aspect="square" alt="Walnut Lounge Sofa" />
        <div>
          <PageHeader
            title="Walnut Lounge Sofa"
            subtitle="Deep-seat comfort with solid walnut frame and custom upholstery options."
          />
          <div className={styles.meta}>
            <ProductPrice amount="45,000" compareAt="52,000" />
            <ProductStatusBadge status="Made to Order" />
          </div>
          <p className={styles.copy}>
            Designed for living rooms that favour calm proportions and tactile materials.
            Available in fabric or leather finishes with optional chaise configurations.
          </p>
          <div className={styles.actions}>
            <Button size="lg">Add to Cart</Button>
            <Button size="lg" variant="outline">Add to Wishlist</Button>
          </div>
        </div>
      </div>
    </Container>
  </PageWrapper>
);

export default ProductDetails;

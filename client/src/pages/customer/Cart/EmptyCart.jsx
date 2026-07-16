import { Link } from 'react-router-dom';
import { Button, PageHeader, EmptyState } from '../../../components/common';
import { Container, PageWrapper } from '../../../components/layout';
import styles from './EmptyCart.module.scss';

const EmptyCart = () => (
  <PageWrapper>
    <Container size="md">
      <div className={styles.page}>
        <PageHeader title="Cart" subtitle="Review items before checkout." />
        <EmptyState
          title="Your cart is empty"
          description="Browse the collection and add furniture to get started."
          action={
            <Link to="/products">
              <Button>Continue Shopping</Button>
            </Link>
          }
        />
      </div>
    </Container>
  </PageWrapper>
);

export default EmptyCart;

import { PageHeader, EmptyState } from '../../../components/common';
import { Container, PageWrapper } from '../../../components/layout';
import { WishlistCard } from '../../../components/customer';
import styles from './Wishlist.module.scss';

const items = [
  { id: '1', name: 'Linen Accent Chair', price: '18,900' },
  { id: '2', name: 'Marble Side Table', price: '12,500' },
];

const Wishlist = () => (
  <PageWrapper>
    <Container size="lg">
      <PageHeader title="Wishlist" subtitle="Pieces you are considering for your home." />
      {items.length ? (
        <div className={styles.list}>
          {items.map((item) => (
            <WishlistCard
              key={item.id}
              name={item.name}
              price={item.price}
              onAddToCart={() => {}}
              onRemove={() => {}}
            />
          ))}
        </div>
      ) : (
        <EmptyState title="Your wishlist is empty" description="Save products to revisit them later." />
      )}
    </Container>
  </PageWrapper>
);

export default Wishlist;

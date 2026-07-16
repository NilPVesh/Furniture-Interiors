import { PageHeader, EmptyState } from '../../../components/common';
import { Container, PageWrapper } from '../../../components/layout';
import { OrderCard } from '../../../components/customer';
import styles from './Orders.module.scss';

const orders = [
  { orderId: 'VF-1042', date: '12 Jul 2026', status: 'In Production', total: '45,000', itemCount: 1 },
  { orderId: 'VF-1038', date: '02 Jun 2026', status: 'Delivered', total: '28,500', itemCount: 2 },
];

const Orders = () => (
  <PageWrapper>
    <Container size="lg">
      <PageHeader title="My Orders" subtitle="Track commissions and past purchases." />
      {orders.length ? (
        <div className={styles.list}>
          {orders.map((order) => (
            <OrderCard key={order.orderId} {...order} />
          ))}
        </div>
      ) : (
        <EmptyState title="No orders yet" description="When you place an order, it will appear here." />
      )}
    </Container>
  </PageWrapper>
);

export default Orders;

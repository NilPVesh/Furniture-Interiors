import Badge from '../../common/Badge/Badge';
import styles from './OrderCard.module.scss';

const OrderCard = ({
  orderId,
  date,
  status,
  total,
  itemCount,
  onClick,
  className = '',
}) => (
  <article
    className={[styles.card, className].filter(Boolean).join(' ')}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
  >
    <div>
      <p className={styles.id}>Order #{orderId}</p>
      <p className={styles.meta}>{date} · {itemCount} items</p>
    </div>
    <div className={styles.right}>
      <Badge variant="walnut">{status}</Badge>
      <p className={styles.total}>₹{total}</p>
    </div>
  </article>
);

export default OrderCard;

import styles from './ProductPrice.module.scss';

const ProductPrice = ({ amount, currency = '₹', compareAt, className = '' }) => (
  <div className={[styles.price, className].filter(Boolean).join(' ')}>
    <span className={styles.current}>{currency}{amount}</span>
    {compareAt ? <span className={styles.compare}>{currency}{compareAt}</span> : null}
  </div>
);

export default ProductPrice;

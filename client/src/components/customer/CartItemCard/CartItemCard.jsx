import Button from '../../common/Button/Button';
import ProductImage from '../../product/ProductImage/ProductImage';
import ProductPrice from '../../product/ProductPrice/ProductPrice';
import styles from './CartItemCard.module.scss';

const CartItemCard = ({
  image,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
  className = '',
}) => (
  <article className={[styles.card, className].filter(Boolean).join(' ')}>
    <ProductImage src={image} alt={name} aspect="square" />
    <div className={styles.body}>
      <div className={styles.top}>
        <h3>{name}</h3>
        <ProductPrice amount={price} />
      </div>
      <div className={styles.controls}>
        <div className={styles.qty}>
          <Button size="sm" variant="secondary" onClick={onDecrease}>-</Button>
          <span>{quantity}</span>
          <Button size="sm" variant="secondary" onClick={onIncrease}>+</Button>
        </div>
        {onRemove ? <Button size="sm" variant="ghost" onClick={onRemove}>Remove</Button> : null}
      </div>
    </div>
  </article>
);

export default CartItemCard;

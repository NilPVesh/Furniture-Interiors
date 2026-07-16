import Button from '../../common/Button/Button';
import ProductImage from '../../product/ProductImage/ProductImage';
import ProductPrice from '../../product/ProductPrice/ProductPrice';
import styles from './WishlistCard.module.scss';

const WishlistCard = ({
  image,
  name,
  price,
  onRemove,
  onAddToCart,
  className = '',
}) => (
  <article className={[styles.card, className].filter(Boolean).join(' ')}>
    <ProductImage src={image} alt={name} aspect="square" />
    <div className={styles.body}>
      <h3>{name}</h3>
      <ProductPrice amount={price} />
      <div className={styles.actions}>
        {onAddToCart ? <Button size="sm" onClick={onAddToCart}>Add to Cart</Button> : null}
        {onRemove ? <Button size="sm" variant="ghost" onClick={onRemove}>Remove</Button> : null}
      </div>
    </div>
  </article>
);

export default WishlistCard;

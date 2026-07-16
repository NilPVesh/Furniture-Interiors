import { Link } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductStatusBadge from '../ProductStatusBadge/ProductStatusBadge';
import styles from './ProductCard.module.scss';

const ProductCard = ({
  to,
  image,
  name,
  category,
  price,
  compareAt,
  status,
  onClick,
  className = '',
}) => {
  const content = (
    <>
      <ProductImage src={image} alt={name} aspect="portrait" />
      <div className={styles.body}>
        {category ? <p className={styles.category}>{category}</p> : null}
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.meta}>
          <ProductPrice amount={price} compareAt={compareAt} />
          {status ? <ProductStatusBadge status={status} /> : null}
        </div>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={[styles.card, className].filter(Boolean).join(' ')}>
        {content}
      </Link>
    );
  }

  return (
    <article
      className={[styles.card, className].filter(Boolean).join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {content}
    </article>
  );
};

export default ProductCard;

import styles from './ProductImage.module.scss';

const ProductImage = ({ src, alt = 'Product image', aspect = 'square', className = '' }) => (
  <div className={[styles.frame, styles[aspect], className].filter(Boolean).join(' ')}>
    {src ? (
      <img src={src} alt={alt} />
    ) : (
      <div className={styles.placeholder} aria-hidden="true" />
    )}
  </div>
);

export default ProductImage;

import styles from './Card.module.scss';

const Card = ({ children, className = '', padded = true }) => (
  <div className={[styles.card, padded ? styles.padded : '', className].filter(Boolean).join(' ')}>
    {children}
  </div>
);

export default Card;

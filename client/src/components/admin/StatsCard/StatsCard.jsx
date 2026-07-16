import styles from './StatsCard.module.scss';

const StatsCard = ({ label, value, hint, trend, className = '' }) => (
  <div className={[styles.card, className].filter(Boolean).join(' ')}>
    <p className={styles.label}>{label}</p>
    <p className={styles.value}>{value}</p>
    {hint || trend ? (
      <p className={[styles.hint, trend === 'up' ? styles.up : '', trend === 'down' ? styles.down : ''].filter(Boolean).join(' ')}>
        {hint}
      </p>
    ) : null}
  </div>
);

export default StatsCard;

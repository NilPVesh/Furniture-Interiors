import styles from './Badge.module.scss';

const Badge = ({ children, variant = 'neutral', className = '' }) => (
  <span className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')}>
    {children}
  </span>
);

export default Badge;

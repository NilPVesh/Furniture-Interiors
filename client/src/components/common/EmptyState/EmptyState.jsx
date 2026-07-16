import styles from './EmptyState.module.scss';

const EmptyState = ({ title = 'Nothing here yet', description, action, className = '' }) => (
  <div className={[styles.empty, className].filter(Boolean).join(' ')}>
    <h3>{title}</h3>
    {description ? <p>{description}</p> : null}
    {action ? <div className={styles.action}>{action}</div> : null}
  </div>
);

export default EmptyState;

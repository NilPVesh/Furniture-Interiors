import styles from './ErrorState.module.scss';

const ErrorState = ({ title = 'Something went wrong', description, action, className = '' }) => (
  <div className={[styles.error, className].filter(Boolean).join(' ')} role="alert">
    <h3>{title}</h3>
    {description ? <p>{description}</p> : null}
    {action ? <div className={styles.action}>{action}</div> : null}
  </div>
);

export default ErrorState;

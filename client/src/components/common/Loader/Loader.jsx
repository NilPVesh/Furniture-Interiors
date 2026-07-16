import styles from './Loader.module.scss';

const Loader = ({ label = 'Loading...', className = '' }) => (
  <div className={[styles.loader, className].filter(Boolean).join(' ')} role="status">
    <div className={styles.bar} />
    {label ? <p>{label}</p> : null}
  </div>
);

export default Loader;

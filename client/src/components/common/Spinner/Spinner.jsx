import styles from './Spinner.module.scss';

const Spinner = ({ size = 'md', className = '' }) => (
  <span
    className={[styles.spinner, styles[size], className].filter(Boolean).join(' ')}
    role="status"
    aria-label="Loading"
  />
);

export default Spinner;

import styles from './PageWrapper.module.scss';

const PageWrapper = ({ children, className = '' }) => (
  <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>{children}</div>
);

export default PageWrapper;

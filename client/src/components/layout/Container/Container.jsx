import styles from './Container.module.scss';

const Container = ({ children, size = 'lg', className = '' }) => (
  <div className={[styles.container, styles[size], className].filter(Boolean).join(' ')}>
    {children}
  </div>
);

export default Container;

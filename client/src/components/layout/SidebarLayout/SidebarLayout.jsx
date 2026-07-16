import styles from './SidebarLayout.module.scss';

const SidebarLayout = ({ sidebar, children, className = '' }) => (
  <div className={[styles.layout, className].filter(Boolean).join(' ')}>
    <aside className={styles.sidebar}>{sidebar}</aside>
    <div className={styles.content}>{children}</div>
  </div>
);

export default SidebarLayout;

import styles from './FiltersPanel.module.scss';

const FiltersPanel = ({ title = 'Filters', children, actions, className = '' }) => (
  <aside className={[styles.panel, className].filter(Boolean).join(' ')}>
    <div className={styles.header}>
      <h3>{title}</h3>
      {actions}
    </div>
    <div className={styles.body}>{children}</div>
  </aside>
);

export default FiltersPanel;

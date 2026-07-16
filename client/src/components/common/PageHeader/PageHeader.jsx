import styles from './PageHeader.module.scss';

const PageHeader = ({ title, subtitle, actions, className = '' }) => (
  <header className={[styles.header, className].filter(Boolean).join(' ')}>
    <div>
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
    {actions ? <div className={styles.actions}>{actions}</div> : null}
  </header>
);

export default PageHeader;

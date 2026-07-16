import styles from './SectionHeader.module.scss';

const SectionHeader = ({ title, subtitle, actions, className = '' }) => (
  <div className={[styles.header, className].filter(Boolean).join(' ')}>
    <div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
    {actions ? <div className={styles.actions}>{actions}</div> : null}
  </div>
);

export default SectionHeader;

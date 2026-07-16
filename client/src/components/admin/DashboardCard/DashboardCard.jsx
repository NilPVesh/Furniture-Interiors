import Card from '../../common/Card/Card';
import styles from './DashboardCard.module.scss';

const DashboardCard = ({ title, children, actions, className = '' }) => (
  <Card className={[styles.card, className].filter(Boolean).join(' ')}>
    <div className={styles.header}>
      <h3>{title}</h3>
      {actions}
    </div>
    <div className={styles.body}>{children}</div>
  </Card>
);

export default DashboardCard;

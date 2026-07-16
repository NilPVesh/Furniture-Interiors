import { PageHeader } from '../../../components/common';
import { GridLayout } from '../../../components/layout';
import { StatsCard, DashboardCard } from '../../../components/admin';
import styles from './Analytics.module.scss';

const Analytics = () => (
  <div className={styles.page}>
    <PageHeader title="Analytics" subtitle="Sales and engagement snapshot." />
    <GridLayout columns={3} gap="md">
      <StatsCard label="Conversion Rate" value="3.8%" hint="+0.4% vs last month" trend="up" />
      <StatsCard label="Avg. Order Value" value="₹31,200" hint="-2% vs last month" trend="down" />
      <StatsCard label="Wishlist Adds" value="214" hint="+27 this week" trend="up" />
    </GridLayout>

    <div className={styles.section}>
      <GridLayout columns={2} gap="md">
        <DashboardCard title="Top Categories">
          <ul className={styles.list}>
            <li><span>Sofa</span><strong>38%</strong></li>
            <li><span>Dining</span><strong>24%</strong></li>
            <li><span>Bedroom</span><strong>18%</strong></li>
          </ul>
        </DashboardCard>
        <DashboardCard title="Traffic Sources">
          <ul className={styles.list}>
            <li><span>Direct</span><strong>42%</strong></li>
            <li><span>Instagram</span><strong>31%</strong></li>
            <li><span>Referral</span><strong>27%</strong></li>
          </ul>
        </DashboardCard>
      </GridLayout>
    </div>
  </div>
);

export default Analytics;

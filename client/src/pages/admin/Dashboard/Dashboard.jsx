import { Link } from 'react-router-dom';
import { Button, PageHeader } from '../../../components/common';
import { GridLayout } from '../../../components/layout';
import { StatsCard, DashboardCard, DataTable, ActionButtons } from '../../../components/admin';
import styles from './Dashboard.module.scss';

const recentOrders = [
  { id: 'VF-1042', customer: 'Ananya Sharma', total: '₹45,000', status: 'In Production' },
  { id: 'VF-1041', customer: 'Rohan Mehta', total: '₹28,500', status: 'Confirmed' },
  { id: 'VF-1040', customer: 'Neha Kapoor', total: '₹62,000', status: 'Delivered' },
];

const Dashboard = () => (
  <div className={styles.page}>
    <PageHeader
      title="Dashboard"
      subtitle="Overview of store performance and recent activity."
      actions={
        <Link to="/admin/products/add">
          <Button>Add Product</Button>
        </Link>
      }
    />

    <GridLayout columns={4} gap="md">
      <StatsCard label="Revenue" value="₹4.2L" hint="+12% this month" trend="up" />
      <StatsCard label="Orders" value="128" hint="+8 new today" trend="up" />
      <StatsCard label="Products" value="64" hint="6 low stock" />
      <StatsCard label="Customers" value="312" hint="+18 this week" trend="up" />
    </GridLayout>

    <div className={styles.section}>
      <DashboardCard
        title="Quick Links"
        actions={<Link to="/admin/analytics"><Button size="sm" variant="ghost">Analytics</Button></Link>}
      >
        <div className={styles.quickLinks}>
          <Link to="/admin/products">Manage products</Link>
          <Link to="/admin/orders">Review orders</Link>
          <Link to="/admin/customers">View customers</Link>
        </div>
      </DashboardCard>
    </div>

    <div className={styles.section}>
      <DataTable
        title="Recent Orders"
        columns={[
          { key: 'id', label: 'Order' },
          { key: 'customer', label: 'Customer' },
          { key: 'total', label: 'Total' },
          { key: 'status', label: 'Status' },
        ]}
        rows={recentOrders}
        actions={() => <ActionButtons onView={() => {}} onEdit={() => {}} />}
      />
    </div>
  </div>
);

export default Dashboard;

import { PageHeader, SearchBar } from '../../../components/common';
import { DataTable, ActionButtons } from '../../../components/admin';
import styles from './Customers.module.scss';

const rows = [
  { id: '1', name: 'Ananya Sharma', email: 'ananya@example.com', orders: 3, joined: 'Jan 2026' },
  { id: '2', name: 'Rohan Mehta', email: 'rohan@example.com', orders: 1, joined: 'Mar 2026' },
  { id: '3', name: 'Neha Kapoor', email: 'neha@example.com', orders: 5, joined: 'Nov 2025' },
];

const Customers = () => (
  <div className={styles.page}>
    <PageHeader title="Customers" subtitle="Customer directory and order history overview." />
    <div className={styles.toolbar}>
      <SearchBar placeholder="Search customers..." />
    </div>
    <DataTable
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'orders', label: 'Orders' },
        { key: 'joined', label: 'Joined' },
      ]}
      rows={rows}
      actions={() => <ActionButtons onView={() => {}} />}
    />
  </div>
);

export default Customers;

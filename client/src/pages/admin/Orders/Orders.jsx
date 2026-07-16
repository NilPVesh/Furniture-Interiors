import { PageHeader, SearchBar, Badge, Select } from '../../../components/common';
import { DataTable, ActionButtons, FiltersPanel } from '../../../components/admin';
import styles from './Orders.module.scss';

const rows = [
  { id: 'VF-1042', customer: 'Ananya Sharma', date: '12 Jul 2026', total: '₹45,000', status: <Badge variant="walnut">In Production</Badge> },
  { id: 'VF-1041', customer: 'Rohan Mehta', date: '10 Jul 2026', total: '₹28,500', status: <Badge variant="info">Confirmed</Badge> },
  { id: 'VF-1040', customer: 'Neha Kapoor', date: '02 Jul 2026', total: '₹62,000', status: <Badge variant="success">Delivered</Badge> },
];

const Orders = () => (
  <div className={styles.page}>
    <PageHeader title="Orders" subtitle="Track and manage customer orders." />
    <div className={styles.layout}>
      <FiltersPanel>
        <Select
          placeholder="Status"
          options={[
            { value: 'confirmed', label: 'Confirmed' },
            { value: 'production', label: 'In Production' },
            { value: 'delivered', label: 'Delivered' },
          ]}
        />
      </FiltersPanel>
      <div>
        <div className={styles.toolbar}>
          <SearchBar placeholder="Search orders..." />
        </div>
        <DataTable
          columns={[
            { key: 'id', label: 'Order' },
            { key: 'customer', label: 'Customer' },
            { key: 'date', label: 'Date' },
            { key: 'total', label: 'Total' },
            { key: 'status', label: 'Status' },
          ]}
          rows={rows}
          actions={() => <ActionButtons onView={() => {}} onEdit={() => {}} />}
        />
      </div>
    </div>
  </div>
);

export default Orders;

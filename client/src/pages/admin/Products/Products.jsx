import { Link, useNavigate } from 'react-router-dom';
import { Button, PageHeader, SearchBar, Pagination, Select } from '../../../components/common';
import { DataTable, ActionButtons, FiltersPanel } from '../../../components/admin';
import styles from './Products.module.scss';

const rows = [
  { id: '1', name: 'Walnut Lounge Sofa', category: 'Sofa', price: '₹45,000', status: 'Active' },
  { id: '2', name: 'Teak Dining Table', category: 'Dining', price: '₹62,000', status: 'Active' },
  { id: '3', name: 'Oak Console Desk', category: 'Office', price: '₹28,500', status: 'Draft' },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <PageHeader
        title="Products"
        subtitle="Create, edit, and organise your catalogue."
        actions={
          <Link to="/admin/products/add">
            <Button>Add Product</Button>
          </Link>
        }
      />

      <div className={styles.layout}>
        <FiltersPanel title="Filters">
          <Select
            placeholder="Category"
            options={[
              { value: 'sofa', label: 'Sofa' },
              { value: 'dining', label: 'Dining' },
              { value: 'office', label: 'Office' },
            ]}
          />
          <Select
            placeholder="Status"
            options={[
              { value: 'active', label: 'Active' },
              { value: 'draft', label: 'Draft' },
            ]}
          />
        </FiltersPanel>

        <div>
          <div className={styles.toolbar}>
            <SearchBar placeholder="Search products..." />
          </div>
          <DataTable
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'category', label: 'Category' },
              { key: 'price', label: 'Price' },
              { key: 'status', label: 'Status' },
            ]}
            rows={rows}
            actions={(row) => (
              <ActionButtons
                onView={() => navigate(`/admin/products/${row.id}/edit`)}
                onEdit={() => navigate(`/admin/products/${row.id}/edit`)}
                onDelete={() => {}}
              />
            )}
          />
          <div className={styles.pager}>
            <Pagination currentPage={1} totalPages={2} onPageChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

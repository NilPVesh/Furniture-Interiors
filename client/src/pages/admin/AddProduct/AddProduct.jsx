import { Link } from 'react-router-dom';
import { Button, Input, TextArea, Select, PageHeader, Breadcrumb, Checkbox, Card } from '../../../components/common';
import { FormField, FormLabel } from '../../../components/forms';
import styles from './AddProduct.module.scss';

const AddProduct = () => (
  <div className={styles.page}>
    <Breadcrumb
      items={[
        { label: 'Dashboard', to: '/admin' },
        { label: 'Products', to: '/admin/products' },
        { label: 'Add Product' },
      ]}
    />
    <PageHeader
      title="Add Product"
      subtitle="Create a new catalogue entry."
      actions={
        <Link to="/admin/products">
          <Button variant="secondary">Cancel</Button>
        </Link>
      }
    />

    <Card>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.grid}>
          <FormField>
            <FormLabel htmlFor="name" required>Product Name</FormLabel>
            <Input id="name" name="name" placeholder="e.g. Walnut Lounge Sofa" />
          </FormField>
          <FormField>
            <FormLabel htmlFor="category" required>Category</FormLabel>
            <Select
              id="category"
              name="category"
              options={[
                { value: 'sofa', label: 'Sofa' },
                { value: 'dining', label: 'Dining' },
                { value: 'bedroom', label: 'Bedroom' },
              ]}
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="price" required>Price</FormLabel>
            <Input id="price" name="price" placeholder="45000" />
          </FormField>
          <FormField>
            <FormLabel htmlFor="status">Status</FormLabel>
            <Select
              id="status"
              name="status"
              defaultValue="active"
              options={[
                { value: 'active', label: 'Active' },
                { value: 'draft', label: 'Draft' },
                { value: 'made-to-order', label: 'Made to Order' },
              ]}
            />
          </FormField>
        </div>
        <FormField>
          <FormLabel htmlFor="description">Description</FormLabel>
          <TextArea id="description" name="description" placeholder="Describe the product..." />
        </FormField>
        <Checkbox label="Featured on homepage" name="featured" />
        <div className={styles.actions}>
          <Button type="submit">Save Product</Button>
          <Button type="button" variant="secondary">Save as Draft</Button>
        </div>
      </form>
    </Card>
  </div>
);

export default AddProduct;

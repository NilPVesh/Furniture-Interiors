import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, TextArea, Select, PageHeader, Breadcrumb, Card } from '../../../components/common';
import { FormField, FormLabel } from '../../../components/forms';
import styles from './EditProduct.module.scss';

const EditProduct = () => {
  const [form, setForm] = useState({
    name: 'Walnut Lounge Sofa',
    category: 'sofa',
    price: '45000',
    status: 'made-to-order',
    description: 'Deep-seat comfort with solid walnut frame.',
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <div className={styles.page}>
      <Breadcrumb
        items={[
          { label: 'Dashboard', to: '/admin' },
          { label: 'Products', to: '/admin/products' },
          { label: 'Edit Product' },
        ]}
      />
      <PageHeader
        title="Edit Product"
        subtitle="Update product details."
        actions={
          <Link to="/admin/products">
            <Button variant="secondary">Back</Button>
          </Link>
        }
      />

      <Card>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.grid}>
            <FormField>
              <FormLabel htmlFor="name" required>Product Name</FormLabel>
              <Input id="name" value={form.name} onChange={handleChange('name')} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="category" required>Category</FormLabel>
              <Select
                id="category"
                value={form.category}
                onChange={handleChange('category')}
                options={[
                  { value: 'sofa', label: 'Sofa' },
                  { value: 'dining', label: 'Dining' },
                ]}
              />
            </FormField>
            <FormField>
              <FormLabel htmlFor="price" required>Price</FormLabel>
              <Input id="price" value={form.price} onChange={handleChange('price')} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="status">Status</FormLabel>
              <Select
                id="status"
                value={form.status}
                onChange={handleChange('status')}
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
            <TextArea
              id="description"
              value={form.description}
              onChange={handleChange('description')}
            />
          </FormField>
          <div className={styles.actions}>
            <Button type="submit">Update Product</Button>
            <Button type="button" variant="danger">Delete</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EditProduct;

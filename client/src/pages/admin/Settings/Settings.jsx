import { useState } from 'react';
import { Button, Input, TextArea, PageHeader, Card } from '../../../components/common';
import { FormField, FormLabel } from '../../../components/forms';
import styles from './Settings.module.scss';

const Settings = () => {
  const [form, setForm] = useState({
    storeName: 'Vishwakarma Furniture & Interiors',
    supportEmail: 'hello@vfishinteriors.com',
    address: 'Showroom & Workshop, Bengaluru',
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <div className={styles.page}>
      <PageHeader title="Settings" subtitle="Store profile and preference placeholders." />
      <Card>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormField>
            <FormLabel htmlFor="storeName">Store Name</FormLabel>
            <Input id="storeName" value={form.storeName} onChange={handleChange('storeName')} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="supportEmail">Support Email</FormLabel>
            <Input
              id="supportEmail"
              type="email"
              value={form.supportEmail}
              onChange={handleChange('supportEmail')}
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="address">Studio Address</FormLabel>
            <TextArea id="address" value={form.address} onChange={handleChange('address')} />
          </FormField>
          <Button type="submit">Save Settings</Button>
        </form>
      </Card>
    </div>
  );
};

export default Settings;

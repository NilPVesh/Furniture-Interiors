import { useState } from 'react';
import { Button, Input, PageHeader, Card } from '../../../components/common';
import { FormField, FormLabel } from '../../../components/forms';
import { Container, PageWrapper, GridLayout } from '../../../components/layout';
import styles from './Profile.module.scss';

const Profile = () => {
  const [personal, setPersonal] = useState({
    name: 'Ananya Sharma',
    email: 'ananya@example.com',
    phone: '+91 98765 43210',
  });
  const [address, setAddress] = useState({
    address: '12 Residency Road',
    city: 'Bengaluru',
    pincode: '560025',
  });

  return (
    <PageWrapper>
      <Container size="lg">
        <PageHeader title="Profile" subtitle="Manage your account details." />
        <GridLayout columns={2} gap="md">
          <Card>
            <h3 className={styles.sectionTitle}>Personal Information</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <FormField>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input
                  id="name"
                  value={personal.name}
                  onChange={(e) => setPersonal((prev) => ({ ...prev, name: e.target.value }))}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={personal.email}
                  onChange={(e) => setPersonal((prev) => ({ ...prev, email: e.target.value }))}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <Input
                  id="phone"
                  value={personal.phone}
                  onChange={(e) => setPersonal((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </FormField>
              <Button type="submit">Save Changes</Button>
            </form>
          </Card>
          <Card>
            <h3 className={styles.sectionTitle}>Shipping Address</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <FormField>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input
                  id="address"
                  value={address.address}
                  onChange={(e) => setAddress((prev) => ({ ...prev, address: e.target.value }))}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input
                  id="city"
                  value={address.city}
                  onChange={(e) => setAddress((prev) => ({ ...prev, city: e.target.value }))}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="pincode">Pincode</FormLabel>
                <Input
                  id="pincode"
                  value={address.pincode}
                  onChange={(e) => setAddress((prev) => ({ ...prev, pincode: e.target.value }))}
                />
              </FormField>
              <Button type="submit" variant="secondary">Update Address</Button>
            </form>
          </Card>
        </GridLayout>
      </Container>
    </PageWrapper>
  );
};

export default Profile;

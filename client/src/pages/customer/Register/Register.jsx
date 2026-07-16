import { Link } from 'react-router-dom';
import { Button, Input, PageHeader } from '../../../components/common';
import { FormField, FormLabel } from '../../../components/forms';
import { Container, PageWrapper } from '../../../components/layout';
import styles from './Register.module.scss';

const Register = () => (
  <PageWrapper>
    <Container size="sm">
      <div className={styles.card}>
        <PageHeader title="Create Account" subtitle="Join Vishwakarma Furniture & Interiors." />
        <form onSubmit={(e) => e.preventDefault()}>
          <FormField>
            <FormLabel htmlFor="name" required>Full Name</FormLabel>
            <Input id="name" name="name" placeholder="Full name" />
          </FormField>
          <FormField>
            <FormLabel htmlFor="email" required>Email</FormLabel>
            <Input id="email" name="email" type="email" placeholder="Email" />
          </FormField>
          <FormField>
            <FormLabel htmlFor="password" required>Password</FormLabel>
            <Input id="password" name="password" type="password" placeholder="Password" />
          </FormField>
          <FormField>
            <FormLabel htmlFor="confirmPassword" required>Confirm Password</FormLabel>
            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm password" />
          </FormField>
          <Button type="submit" fullWidth>Register</Button>
        </form>
        <p className={styles.footer}>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </Container>
  </PageWrapper>
);

export default Register;

import { Link } from 'react-router-dom';
import { Button, Input, PageHeader, Checkbox } from '../../../components/common';
import { FormField, FormLabel } from '../../../components/forms';
import { Container, PageWrapper } from '../../../components/layout';
import styles from './Login.module.scss';

const Login = () => (
  <PageWrapper>
    <Container size="sm">
      <div className={styles.card}>
        <PageHeader title="Login" subtitle="Welcome back to Vishwakarma Furniture & Interiors." />
        <form onSubmit={(e) => e.preventDefault()}>
          <FormField>
            <FormLabel htmlFor="email" required>Email</FormLabel>
            <Input id="email" type="email" name="email" placeholder="Enter email" />
          </FormField>
          <FormField>
            <FormLabel htmlFor="password" required>Password</FormLabel>
            <Input id="password" type="password" name="password" placeholder="Enter password" />
          </FormField>
          <Checkbox label="Remember me" name="remember" defaultChecked={false} />
          <div className={styles.actions}>
            <Button type="submit" fullWidth>Login</Button>
          </div>
        </form>
        <p className={styles.footer}>
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </Container>
  </PageWrapper>
);

export default Login;

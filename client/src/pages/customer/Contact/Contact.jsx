import { Button, Input, TextArea, PageHeader } from '../../../components/common';
import { FormField, FormLabel } from '../../../components/forms';
import { Container, PageWrapper } from '../../../components/layout';
import styles from './Contact.module.scss';

const Contact = () => (
  <PageWrapper>
    <Container size="md">
      <PageHeader
        title="Contact Us"
        subtitle="Tell us about your space, timeline, and the pieces you have in mind."
      />
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <FormField>
          <FormLabel htmlFor="name" required>Name</FormLabel>
          <Input id="name" name="name" placeholder="Your name" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="email" required>Email</FormLabel>
          <Input id="email" name="email" type="email" placeholder="you@example.com" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="message" required>Message</FormLabel>
          <TextArea id="message" name="message" placeholder="How can we help?" />
        </FormField>
        <Button type="submit">Send Message</Button>
      </form>
    </Container>
  </PageWrapper>
);

export default Contact;

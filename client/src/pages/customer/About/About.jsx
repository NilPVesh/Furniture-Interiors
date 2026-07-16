import { PageHeader, Card } from '../../../components/common';
import { Container, PageWrapper, GridLayout } from '../../../components/layout';
import styles from './About.module.scss';

const About = () => (
  <PageWrapper>
    <Container size="lg">
      <PageHeader
        title="About Us"
        subtitle="Vishwakarma Furniture & Interiors designs and builds spaces with craft at the centre."
      />
      <div className={styles.content}>
        <p>
          From made-to-order sofas to complete interior programmes, we work with materials that age well
          and details that feel considered in daily use.
        </p>
        <p>
          Our studio balances traditional joinery with contemporary planning so every project feels
          personal, practical, and enduring.
        </p>
      </div>
      <GridLayout columns={3} gap="md">
        <Card>
          <h3>Craft</h3>
          <p className={styles.muted}>Solid wood frames, hand-finished surfaces, and tailored upholstery.</p>
        </Card>
        <Card>
          <h3>Interiors</h3>
          <p className={styles.muted}>Room planning, material boards, and end-to-end execution.</p>
        </Card>
        <Card>
          <h3>Care</h3>
          <p className={styles.muted}>Aftercare guidance and long-term support for every commission.</p>
        </Card>
      </GridLayout>
    </Container>
  </PageWrapper>
);

export default About;

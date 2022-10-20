import type { NextPage } from 'next';
import { Button, Col, Container, Row } from '@nextui-org/react';

const Home: NextPage = () => {
  return (
    <Container fluid>
      <Row justify="center" align="center">
        <Button>Click me</Button>
      </Row>
    </Container>
  );
};

export default Home;

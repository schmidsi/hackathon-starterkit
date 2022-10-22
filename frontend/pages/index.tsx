import type { NextPage } from 'next';
import { Button, Col, Container, Row } from '@nextui-org/react';

const Home: NextPage = () => {
  // const { loading, error, data } = useQuery(
  //   gql`
  //     query MyQuery {
  //       transfers {
  //         id
  //         from
  //         to
  //         tokenId
  //       }
  //       _meta {
  //         block {
  //           number
  //         }
  //       }
  //     }
  //   `,
  // );

  // console.log(loading, error, data);

  return (
    <Container fluid>
      <Row justify="center" align="center">
        <Button>Click me</Button>
      </Row>
    </Container>
  );
};

export default Home;

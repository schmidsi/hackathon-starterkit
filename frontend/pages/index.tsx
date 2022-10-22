import type { NextPage } from 'next';
import { Button, Col, Container, Row } from '@nextui-org/react';
import { gql, useQuery } from 'urql';

const Home: NextPage = () => {
  // const { loading, error, data } = useQuery(
  //
  // );

  // console.log(loading, error, data);

  const [result, reexecuteQuery] = useQuery({
    query: gql`
      query MyQuery {
        transfers {
          id
          from
          to
          tokenId
        }
        _meta {
          block {
            number
          }
        }
      }
    `,
  });

  const { data, fetching, error } = result;

  console.log({ data, fetching, error });

  return (
    <Container fluid>
      <Row justify="center" align="center">
        <Button>Click me</Button>
      </Row>
      {data?.transfers.map((transfer) => (
        <Row key={transfer.id}>
          {transfer.from} {transfer.to}
        </Row>
      ))}
    </Container>
  );
};

export default Home;

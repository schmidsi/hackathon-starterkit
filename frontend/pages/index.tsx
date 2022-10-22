import type { NextPage } from 'next';
import { Button, Col, Container, Row } from '@nextui-org/react';
import { gql, useQuery } from 'urql';

import { AccountDocument, TransfersDocument } from '../.graphclient';

const Home: NextPage = () => {
  // const { loading, error, data } = useQuery(
  //
  // );

  // console.log(loading, error, data);

  const [{ data, fetching, error }] = useQuery({
    query: TransfersDocument,
  });

  const account = useQuery({ query: AccountDocument });

  console.log(account[0]?.data?._ethereum?.account);

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

import type { NextPage } from 'next';
import { Badge, Button, Col, Container, Row } from '@nextui-org/react';
import { gql, useMutation, useQuery } from 'urql';

import {
  AccountDocument,
  ConnectDocument,
  MintDocument,
  TransfersDocument,
} from '../.graphclient';

const Home: NextPage = () => {
  const [{ data, fetching, error }] = useQuery({
    query: TransfersDocument,
  });

  const [connectResult, connect] = useMutation(ConnectDocument);
  const [mintResult, mint] = useMutation(MintDocument);

  const result = useQuery({ query: AccountDocument });
  const account = result[0]?.data?._ethereum?.account;

  const doConnect = async () => {
    console.log('doConnect');
    await connect();
  };

  const doMint = async () => {
    console.log('doMint');
    await mint();
  };

  return (
    <Container fluid>
      <Row justify="center" align="center">
        {account ? (
          <>
            <Badge>{account}</Badge>
            <Button onClick={doMint}>Mint</Button>
          </>
        ) : (
          <Button onPress={doConnect}>Connect</Button>
        )}
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

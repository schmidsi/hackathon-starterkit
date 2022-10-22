import { Resolvers } from '../.graphclient';

console.log('loading resolverfs');

export const resolvers: Resolvers = {
  Ethereum: {
    account: () => {
      console.log('calling account');
      return '0xdeadbeef';
    },
  },
  Query: {
    _ethereum: () => {
      console.log('calling etherum');

      return { account: '0xdeadbeefdeadbeef' };
      // return null;
      // return resolvers.Ethereum;
    },
  },
};

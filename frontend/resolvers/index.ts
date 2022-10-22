import { ethers } from 'ethers';
import { Resolvers } from '../.graphclient';

console.log('loading resolverfs');

let provider: ethers.providers.Web3Provider;
let signer: ethers.providers.JsonRpcSigner;

export const resolvers: Resolvers = {
  Ethereum: {
    account: async () => {
      console.log('calling account');

      if (signer) {
        return signer.getAddress();
      } else if ((window as any).ethereum) {
        provider = new ethers.providers.Web3Provider((window as any).ethereum);
        signer = provider.getSigner();

        return signer.getAddress();
      } else {
        return undefined;
      }
    },
  },
  Query: {
    _ethereum: () => {
      console.log('calling etherum');

      return {};
      // return null;
      // return resolvers.Ethereum;
    },
  },
  Mutation: {
    connect: async () => {
      console.log('trigger connect');

      provider = new ethers.providers.Web3Provider((window as any).ethereum);

      console.log(provider);

      // MetaMask requires requesting permission to connect users accounts
      await provider.send('eth_requestAccounts', []);

      signer = provider.getSigner();

      return true;
    },
  },
};

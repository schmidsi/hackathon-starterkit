import { ethers } from 'ethers';
import { Resolvers } from '../.graphclient';

let provider: ethers.providers.Web3Provider;
let signer: ethers.providers.JsonRpcSigner;

export const resolvers: Resolvers = {
  Ethereum: {
    // TODO: Why is account typing incorrect?
    account: async () => {
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
      // Returning and empty object triggers the Ethereum.account resolver above
      return {};
    },
  },
  Mutation: {
    connect: async () => {
      provider = new ethers.providers.Web3Provider((window as any).ethereum);

      console.log(provider);

      // MetaMask requires requesting permission to connect users accounts
      await provider.send('eth_requestAccounts', []);

      signer = provider.getSigner();

      return true;
    },
  },
};

import '@nomicfoundation/hardhat-toolbox';
import '@graphprotocol/hardhat-graph';

import './tasks/deploy';
import './tasks/mint';
import './tasks/balanceOf';
import './tasks/fund';

const config = {
  solidity: '0.8.9',
  subgraph: {
    name: 'mynft',
    indexEvents: true,
  },
  paths: {
    subgraph: '../subgraph',
  },
};

export default config;

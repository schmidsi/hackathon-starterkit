import "@nomicfoundation/hardhat-toolbox";
import "@graphprotocol/hardhat-graph";

const config = {
  solidity: "0.8.9",
  subgraph: {
    name: "lock",
    indexEvents: true
  },
  paths: {
    subgraph: "../subgraph",
  },
};

export default config;

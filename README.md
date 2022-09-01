# Fullstack Hackathon Starter Kit

This starter kit aims to be a very minimalistic boilerplate to quickly get started with fullstack dapp development with Hardhat and The Graph.

## Features

- [x] Using PNPM workspaces
- [x] Hardhat Typescript project
- [x] Subgraph generation with [@graphprotocol/hardhat-graph]
- [x] Local development with local hardhat node and a graph-node connected to it
- [ ] Frontend

## Quick Start

- Clone the repo
- Install dependencies: `pnpm install`
- Terminal 1: Run a hardhat node: `cd contracts && pnpm localnode`
- Terminal 2: Run the graph node: `cd subgraph && pnpm graph-node`
- Terminal 3:
  - Deploy the contracts: `cd contracts && pnpm hardhat run scripts/deploy.ts --network localhost`
  - Create the subgraph: `cd ../subgraph && pnpm create:local`
  - Deploy the subgraph: `pnpm deploy:local`

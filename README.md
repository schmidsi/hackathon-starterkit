# Fullstack Hackathon Starter Kit

This starter kit aims to be a very minimalistic boilerplate to quickly get started with fullstack dapp development with Hardhat and The Graph.

## Prerequisited

- [PNPM installed](https://pnpm.io/installation)
- [Docker installed](https://www.docker.com)

## Features

- [x] Using PNPM workspaces
- [x] Hardhat Typescript project
- [x] Subgraph generation with [@graphprotocol/hardhat-graph]
- [x] Local development with local hardhat node and a graph-node connected to it
- [ ] Frontend

## Quick Start

- Clone the repo
- Install dependencies: `pnpm install`
- Terminal 1: Run local dev environment: `pnpm dev`
- Terminal 2:
  - Deploy the contracts: `pnpm contracts:deploy`
  - Create the subgraph: `pnpm subgraph:create`
  - Deploy the subgraph: `pnpm subgraph:deploy`

## Troubleshooting

### Check if local node is running:

```bash
curl --location --request POST 'localhost:8545/' \
--header 'Content-Type: application/json' \
--data-raw '{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByNumber",
	"params":[
        "latest",
		true
	],
	"id":1
}'
```

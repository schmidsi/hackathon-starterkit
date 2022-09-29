# Fullstack Hackathon Starter Kit

This starter kit aims to be a very minimalistic boilerplate to quickly get
started with fullstack dapp development with Hardhat and The Graph.

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

### Regenesis detected

Graph Node caches the genesis hash of the blockchain and also some data. If the
local hardhat chain is restarted, this changes and can lead to problems and the
Graph Node is not starting.

#### Symptoms

- Log entires like:
  `ERRO the genesis block hash for chain localhost has changed from bad817bf8af7290df9cb9e829980994c499b8317549874293f0e18dcc27a7dad to 0x5452afcffdfeb2cbe0d72e23a3b622f455ed4a0acdaadc08490b90951794eb46 since the last time we ran, component: BlockStore`
  and
  `ERRO Not starting block ingestor (chain is defective), network_name: localhost`
- Block query stays on 0:

```graphql
{
  _meta {
    block {
      number
    }
  }
}
```

#### Solution

- Stop the docker compose (^C)
- Run `pnpm clean`
- Restart local dev environment: `pnpm dev`
- Redeploy everything: `pnpm quickstart`
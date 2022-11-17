# Fullstack Hackathon Starter Kit

This starter kit aims to be a very minimalistic boilerplate to quickly get
started with fullstack dapp development with Hardhat and The Graph.

## Prerequisited

- [PNPM installed](https://pnpm.io/installation)
- [Docker installed](https://www.docker.com)

## Features

- ✅ Using PNPM workspaces
- ✅ Hardhat Typescript project
- ✅ Subgraph generation with [@graphprotocol/hardhat-graph]
- ✅ Local development with local hardhat node and a graph-node connected to it
- 🛠 Frontend

## Quick Start

- Clone the repo
- Install dependencies: `pnpm install`
- Terminal 1: Run local dev environment: `pnpm dev`
- Terminal 2: Deploy contract & subgraph: `pnpm quickstart`
- Navigate to
  [http://localhost:8000/subgraphs/name/mynft/graphql](http://localhost:8000/subgraphs/name/mynft/graphql)
  to explore the newly deployed subgraph

### Other commands

- Deploy the contracts: `pnpm contracts:deploy`
- Deploy the subgraph: `pnpm subgraph:deploy`
- Cleanup database: `pnpm clean`

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

### Graph Client is built for server

#### Symptom

After running `pnpm dev` in [/frontend](./frontend/) the following error
appears:

```
Module not found: Can't resolve 'fs'
```

#### Solution

Rebuild the Graph Client

```bash
cd frontend && pnpm graphclient:build
```

### Account in MetaMask does not have ETH

```bash
pnpm hardhat fund 0xa85D5BEe27EC7f436A06634Fe6D2A8c3477Eb6C5 --network localhost
```

# Notes

- Live queries: ~Does not seem to work~ Works now after restart Next server
  - Can we have a trigger to refresh? Usually it is watching in the front-end
    for an event or when accounts change.
- Query result from URQL is not typed :(
- Resolver type errors
- Move common additional resolvers like \_ethereum, connect, etc to external
  repo/plugin
- Urlq vs Apollo vs React Query?

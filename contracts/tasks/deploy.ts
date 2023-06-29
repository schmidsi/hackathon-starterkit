import * as fs from 'fs';
import { task } from 'hardhat/config';
// import { ethers } from 'hardhat';

task('deploy', 'Deploys the passed contract').setAction(async (_, hre) => {
  await hre.run('compile');
  const MyNFT = await hre.ethers.getContractFactory('MyNFT');
  const myNFT = await MyNFT.deploy();

  await myNFT.deployed();

  console.log(`MyNFT deployed to ${myNFT.address}`);

  // await hre.run("graph", { contractName: "MyNFT", address: myNFT.address });
  // Emulate the above command
  const addresses = fs.readFileSync(`../subgraph/networks.json`);

  const newAddresses = {
    ...JSON.parse(addresses.toString()),
    localhost: {
      // TODO
      MyNFT: {
        address: myNFT.address,
      },
    },
  };

  fs.writeFileSync(
    `../subgraph/networks.json`,
    JSON.stringify(newAddresses, null, 2),
  );
});

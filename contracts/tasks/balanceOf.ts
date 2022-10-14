import { task } from 'hardhat/config';
import networks from 'subgraph/networks.json';

task('balanceOf', 'Balance of address')
  .addOptionalVariadicPositionalParam('address', 'Address')
  .setAction(async ({ address }, hre) => {
    const MyNFT = await hre.ethers.getContractFactory('MyNFT');

    const who = address || (await hre.ethers.getSigners())[0].address;

    const myNFT = MyNFT.attach(
      (networks as any)[hre.network.name].MyNFT.address,
    );

    const result = await myNFT.balanceOf(who);

    console.log(`${who} owns ${result} tokens`);
  });

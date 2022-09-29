import { task } from "hardhat/config";
import networks from "subgraph/networks.json";

task("mint", "Deploys the passed contract")
  .addOptionalVariadicPositionalParam("to", "Receiver")
  .setAction(async ({ to }, hre) => {
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");

    const mintTo = to || (await hre.ethers.getSigners())[0].address;

    const myNFT = MyNFT.attach(
      (networks as any)[hre.network.name].MyNFT.address
    );

    const tx = await myNFT.mint(mintTo);
    const receipt = await tx.wait();

    console.log(`Minted 1 NFT to ${mintTo}`);
  });

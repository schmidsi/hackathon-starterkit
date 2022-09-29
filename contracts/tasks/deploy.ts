import { task } from "hardhat/config";

task("deploy", "Deploys the passed contract")
  .setAction(async (_, hre) => {
    await hre.run("compile");
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();

    await myNFT.deployed();

    console.log(`MyNFT deployed to ${myNFT.address}`);

    await hre.run("graph", { contractName: "MyNFT", address: myNFT.address });
  });

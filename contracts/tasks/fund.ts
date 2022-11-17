import { task } from 'hardhat/config';
import networks from 'subgraph/networks.json';

task('fund', 'Fund an address')
  .addVariadicPositionalParam('address', 'Address')
  .setAction(async ({ address }, hre) => {
    const provider = await hre.ethers.provider;
    const accounts = await provider.listAccounts();
    const signer = await provider.getSigner(accounts[0]);

    const tx = await signer.sendTransaction({
      to: address[0],
      value: hre.ethers.utils.parseEther('1', 'ether'),
    });

    console.log(`Sent 1 ETH to ${address}`);
  });

import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyNFT", function () {
  async function deployFixture() {
    const [alice, bob] = await ethers.getSigners();

    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();

    return { myNFT, alice, bob };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { myNFT } = await loadFixture(deployFixture);

      expect(await myNFT.totalSupply()).to.equal(0);
    });
  });
});

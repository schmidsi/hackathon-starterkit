// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Import this file to use console.log
// import "hardhat/console.sol";

contract MyNFT is ERC721 {
    uint256 private _totalSupply = 0;

    constructor() ERC721("My NFT", "MYNFT") {}

    function mint(address to) public {
        _safeMint(to, totalSupply());
        _totalSupply = totalSupply() + 1;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
}

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token{
  string public name = "Nathaniel Favour Token";
  string public symbol = "NFT";
  uint public totalSupply = 1000000;
  mapping(address => uint) balances;

  constructor() {
      //set the address of the person that deployed the contatct to have that number of tokens
    balances[msg.sender] = totalSupply;
  }

  function transfer(address to, uint amount) external {
      //check if the tokens for the perosn that deployed the contract is greateer than what you want to transfer
      // if not enought return the error message
    require(balances[msg.sender] >= amount, "Not enough tokens");
    //if condition is satisfied, subtract the tokens from the perosn that deployed the contract
    balances[msg.sender] -= amount;
    //then add tokens to the person that wants the contract
    balances[to] += amount;
  }

  function balanceOf(address account) external view returns (uint) {
      //get the currenct balance of deployed contract address
    return balances[account];
  }
}
pragma solidity ^0.5.0;
import "./AthToken.sol";

contract TokenSale {

  address admin;
  AthToken public tokenContract;
  uint256 public tokenPrice;

  constructor(AthToken _tokenContract, uint256 _tokenPrice) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
    tokenPrice = _tokenPrice;
  }
}



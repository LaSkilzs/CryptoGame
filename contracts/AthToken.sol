pragma solidity ^0.5.0;


contract AthToken {

  uint256 public tokenSupply;
  string public name = "AthToken";
  string public symbol = "ATH";

  mapping(address => uint256) public balanceOf;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor(uint256 _initial_supply) public {
    balanceOf[msg.sender] = _initial_supply;
    tokenSupply = _initial_supply;
  }

  function transfer(address _to, uint _value) public returns(bool success){
    require(balanceOf[msg.sender] >= _value, 'value transfer is invalid');
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;

    emit Transfer(msg.sender, _to, _value);
    return true;
  }
}

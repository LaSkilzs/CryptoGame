pragma solidity ^0.5.0;


contract AthToken {

  uint256 public tokenSupply;
  string public name = "AthToken";
  string public symbol = "ATH";



  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);

  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) allowed;

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

  function approve(address _spender, uint256 _value) public returns(bool success){
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }

   function allowance(address owner, address spender) external view returns(uint) {
        return allowed[owner][spender];
    }

    function transferFrom(address _from, address _to,  uint256 _value)public returns(bool success){
      require(_value <= balanceOf[_from], 'transfer can not be greater than balance');
      require(_value <= allowed[_from][msg.sender], 'transfer can not be greater than amount');
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }


}

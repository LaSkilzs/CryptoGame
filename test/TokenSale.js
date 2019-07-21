const TokenSale = artifacts.require("./TokenSale.sol");

contract("TokenSale", accounts => {
  let tokenInstance;
  let tokenPrice = 1000000000000000; // in wei
  it("initializes the contract with the correct values", () => {
    return TokenSale.deployed()
      .then(instance => {
        tokenInstance = instance;
        return tokenInstance.address;
      })
      .then(address => {
        assert.notEqual(address, 0x0, "has contract address");
        return tokenInstance.tokenContract();
      })
      .then(address => {
        assert.notEqual(address, 0x0, "has token contract address");
        return tokenInstance.tokenPrice();
      })
      .then(price => {
        assert.equal(price, tokenPrice, "token price is correct");
      });
  });
});

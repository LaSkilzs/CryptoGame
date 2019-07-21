var AthToken = artifacts.require("./AthToken.sol");

contract("AthToken", function(accounts) {
  it("sets inital total supply on deployment", () => {
    return AthToken.deployed().then(data => {
      tokenInstance = data;
      return tokenInstance.tokenSupply().then(supply => {
        assert.equal(
          supply.toNumber(),
          1000000,
          "sets total supply too 1000000"
        );
      });
    });
  });
});

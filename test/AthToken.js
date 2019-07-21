var AthToken = artifacts.require("./AthToken.sol");

contract("AthToken", function(accounts) {
  let tokenInstance;

  it("sets inital contract to correct values", () => {
    return AthToken.deployed()
      .then(data => {
        tokenInstance = data;
        return tokenInstance.name();
      })
      .then(name => {
        assert.equal(name, "AthToken", "has the correct name");
        return tokenInstance.symbol();
      })
      .then(symbol => {
        assert.equal(symbol, "ATH", "has correct symbol");
      });
  });

  it("sets inital total supply on deployment", () => {
    return AthToken.deployed().then(data => {
      tokenInstance = data;
      return tokenInstance
        .tokenSupply()
        .then(supply => {
          assert.equal(
            supply.toNumber(),
            1000000,
            "sets total supply too 1000000"
          );
          return tokenInstance.balanceOf(accounts[0]);
        })
        .then(function(adminBalance) {
          assert.equal(
            adminBalance.toNumber(),
            1000000,
            "it sets inital account to admin and all token supply"
          );
        });
    });
  });
});

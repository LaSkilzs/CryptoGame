const AthToken = artifacts.require("./AthToken.sol");

contract("AthToken", function(accounts) {
  let tokenInstance;

  it("transfers token ownership", () => {
    return AthToken.deployed()
      .then(instance => {
        tokenInstance = instance;
        return tokenInstance.transfer.call(accounts[1], 999999999999999);
      })
      .then(assert.fail)
      .catch(error => {
        assert(
          error.message.indexOf("revert") >= 0,
          "error message must contain revert"
        );
        return tokenInstance.transfer(accounts[1], 250000, {
          from: accounts[0]
        });
      })
      .then(success => {
        assert.equal(success.receipt.status, true, "it returns true");
        return tokenInstance.transfer(accounts[1], 250000, {
          from: accounts[0]
        });
      })
      .then(receipt => {
        assert.equal(receipt.logs.length, 1, "triggers one event");
        assert.equal(receipt.logs[0].event, "Transfer", "triggers one event");
        assert.equal(
          receipt.logs[0].args._to,
          accounts[1],
          "logs the account the tokens came from"
        );
        assert.equal(
          receipt.logs[0].args._from,
          accounts[0],
          "logs the account the tokens went to"
        );
        assert.equal(
          receipt.logs[0].args._value.toNumber(),
          250000,
          "logs the transfer amount"
        );
        return tokenInstance.balanceOf(accounts[1]);
      })
      .then(balance => {
        assert.equal(
          balance.toNumber(),
          500000,
          "adds the number of tokens to the accounts"
        );
        return tokenInstance.balanceOf(accounts[0]);
      })
      .then(balance => {
        assert.equal(
          balance.toNumber(),
          500000,
          "deducts the number of tokens from accounts"
        );
      });
  });
});

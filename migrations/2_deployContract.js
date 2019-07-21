const AthToken = artifacts.require("./AthToken.sol");
const TokenSale = artifacts.require("./TokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(AthToken, 1000000).then(() => {
    return deployer.deploy(TokenSale, AthToken.address, 1000000000000000);
  });
  // deployer.deploy(AthToken, 1000000);
  // deployer.deploy(TokenSale, AthToken.address);
};

const AthToken = artifacts.require("./AthToken.sol");

module.exports = function(deployer) {
  deployer.deploy(AthToken, 1000000);
};

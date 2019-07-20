const path = require("path");

module.exports = {
  contract_build_directory: path(__dirname, "client/src/contracts/build"),
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*" // Any network (default: none)
    }
  }
};

require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")
const secrets = require("./secrets")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    mumbai: {
      url: secrets.mumbaiUrl,
      accounts: [secrets.privateKey],
    },
    polygon: {
      url: secrets.maticUrl,
      accounts: [secrets.privateKey],
    },
    arbitrum: {
      url: secrets.arbitrumUrl,
      accounts: [secrets.privateKey],
    }
  },
  etherscan: {
    apiKey: secrets.arbiscanKey,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  }
};

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://dashboard.alchemy.com/apps/dav598szpfcwopxm",
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
}
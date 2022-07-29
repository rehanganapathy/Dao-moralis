require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");

dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */

task("acconuts","List of accounts", async (taskArgs,hre) =>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
} )

module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan:{
    apiKey: process.env.API_KEY,
  }
};

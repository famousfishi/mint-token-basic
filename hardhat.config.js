require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths:{
    artifacts: './src/artifacts'
  },
  networks:{
    hardhat:{
      chainId: 1337
    },
    rinkeby:{
      url: "https://rinkeby.infura.io/v3/a3ddf80139b24097a6f1dbd13f5d1c8d",
      accounts: [`0x8ec8d4145fcd3942b05c4016677ad5064549a52db13faf177bdcc92c7dbfc669`]
    }
  }
};

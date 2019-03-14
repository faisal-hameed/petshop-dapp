const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider("candy maple cake sugar pudding cream honey rich smooth crumble sweet treat", "https://rinkeby.infura.io/v3/f342ad1be78745b0aae9ac0afb51c5d7")
      },
      network_id: '4',
      //gas: 4500000,
      //gasPrice: 10000000000
      //from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    },
  }
};

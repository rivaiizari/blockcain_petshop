module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "0xB33D891A9e7C96058136B61C2110470eb6130d74" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift random still equip guess kite slot ghost'; 
let testAccounts = [
"0x58f33037632bdf1e68b761fec27cf9a5dca7efd5c4d260b76c6cfb9cd7db8e44",
"0xa0f4f44d02842c17e2e8200a2364a2774f74f70542561e1264f897e63e4bab2c",
"0x0f6cead18cf8ca3779b97f53f19a8dd5e8ada269dbd85ac2b38f989a3b8b300f",
"0x13e41592d87fe709def7a93f95a1da740c6454d5fc9afb2e2a4d8761165652f6",
"0x5d5eb6cf54fe033e1c8193a2aa27990710d8c49d94f94b623fb66d95c530d158",
"0x2f42ba14a9b41a95b2b1557ab2895fb4f543c1f66adbd367be300a5cebebf2e6",
"0x6888f654f80fc8461d54a675c30045fbf50d7fae77382ea5d31a5ec52c93d6ba",
"0xd10b06a44fba8cfcebf8f7f16d9b5e48edd0f8ad90befcd1250759c614e01d79",
"0xb09dd54515e8a4159068ba587be9adbd0c081edb0df6591e67592a71bd6f347b",
"0x735ab90f278844f65ed732d3a882659135e617826aa69a302c7722c71795d51d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

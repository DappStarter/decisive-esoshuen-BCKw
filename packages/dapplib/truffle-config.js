require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain purpose hunt opera bubble slogan'; 
let testAccounts = [
"0x66ad1c6f8a5212a40b77cd46d9a7f11d0a1c98abe1a4a83029c88fe22c38298a",
"0xc2265825017779f83b66715c362b7263865a079e1be35c040e4ad4ad0932ead7",
"0x331603389e4b640275a8e0bdbff324033927f510f0a7d938f9a17e78418f043e",
"0x623bc7b1c36f582c8128e85fa12f0bc4304886701da0f706f8e5d97220856f96",
"0x0b729e6514b81ce0590a6ab87da19e8a2b938fe5225333202c64643717294bab",
"0x0ac8d7a07738a97c259a91ffb9be13dcccfee9dc6709bdefab7538029a7e8932",
"0xf367652cae1af5692fdf3c4c7b4c66d6865ccffc949eab2d911bad550073c4cb",
"0xf741b6f3b62da9c2d355b9237655442e7f1d82fb29f81c6c9816bd1d24b2b4f4",
"0xcfa9881d3bfd85fddd64b95ea588db5d27b54b327f51e0bc640539068b308986",
"0x8e600669bb783ee46665d6f2230f599a42d6d93c0b7ad124decadf3acd4b689b"
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
            version: '^0.8.0'
        }
    }
};


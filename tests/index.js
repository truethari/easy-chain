const { generateWallet, CHAINS } = require("../dist");

const wallet = generateWallet(CHAINS.ETHEREUM);
console.log("Wallet Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);

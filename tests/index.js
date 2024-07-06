const { generateWallet, CHAINS } = require("../dist");

async function createWallet() {
  const ethWallet = await generateWallet(CHAINS.ETHEREUM);
  console.log("wallet:", ethWallet.address);
  console.log("private Key:", ethWallet.privateKey);

  const cosmWallet = await generateWallet(CHAINS.COSMOS);
  console.log("wallet:", cosmWallet.address);
  console.log("mnemonic:", cosmWallet.mnemonic);
}

createWallet().catch(console.error);

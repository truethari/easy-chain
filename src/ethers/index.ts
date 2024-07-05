import { ethers } from "ethers";

/**
 * Generates a new Ethereum wallet.
 * @returns {object} An object containing the wallet address and private key.
 */
export function generateWallet(): object {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}

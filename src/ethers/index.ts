import { Wallet } from "ethers";
import type { IEthereumWallet } from "../types";

/**
 * Creates a new Ethereum wallet.
 * @returns { address: string, privateKey: string } An object containing the wallet address and private key.
 */
export async function createWallet(): Promise<IEthereumWallet> {
  const wallet = Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}

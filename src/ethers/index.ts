import { Wallet } from "ethers";
import type { TCreateWalletResponse } from "../types";

/**
 * Generates a new Ethereum wallet.
 * @returns { address: string, privateKey: string } An object containing the wallet address and private key.
 */
export async function generateWallet(): Promise<TCreateWalletResponse> {
  const wallet = Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}

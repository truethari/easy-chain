import { Secp256k1HdWallet, Bip39, Random } from "cosmwasm";
import type { ICosmosWallet } from "../types";

/**
 * Creates a new Cosmos wallet.
 * @returns { address: string, mnemonic: string } An object containing the wallet address and private key.
 */
export async function createWallet(): Promise<ICosmosWallet> {
  const mnemonic = Bip39.encode(Random.getBytes(16)).toString();
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "cosmos",
  });
  const [{ address }] = await wallet.getAccounts();
  return {
    mnemonic,
    address,
  };
}

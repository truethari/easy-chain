import { SUPPORTED_CHAINS } from "../utils/constants";
import { createWallet as createWalletETH } from "../ethers";
import { createWallet as createWalletCosmos } from "../cosmwasm";

import type { TChain, IEthereumWallet, ICosmosWallet } from "../types";

/**
 * Creates a new wallet for the specified chain.
 * @param {TChain} chain The chain for which to generate a wallet.
 * @returns {IEthereumWallet | ICosmosWallet} An object containing the wallet address and private key.
 */
export async function generateWallet(chain: TChain): Promise<IEthereumWallet | ICosmosWallet> {
  switch (chain) {
    case SUPPORTED_CHAINS.ETHEREUM:
      return createWalletETH();
    case SUPPORTED_CHAINS.POLYGON:
      return createWalletETH();
    case SUPPORTED_CHAINS.COSMOS:
      return createWalletCosmos();
    default:
      throw new Error(
        "Unsupported chain. Please import { CHAINS } from 'web3m' and use one of the supported chains."
      );
  }
}

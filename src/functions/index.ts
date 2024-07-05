import { SUPPORTED_CHAINS } from "../utils/constants";
import { generateWallet as generateWalletETH } from "../ethers";

import type { TChain } from "../types";

/**
 * Generates a new wallet for the specified chain.
 * @param {TChain} chain The chain for which to generate a wallet.
 * @returns {object} An object containing the wallet address and private key.
 */
export function generateWallet(chain: TChain): object {
  switch (chain) {
    case SUPPORTED_CHAINS.ETHEREUM:
      return generateWalletETH();
    case SUPPORTED_CHAINS.POLYGON:
      return generateWalletETH();
    default:
      throw new Error(
        "Unsupported chain. Please import { CHAINS } from 'web3m' and use one of the supported chains."
      );
  }
}

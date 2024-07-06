export type TChain = "ETHEREUM" | "POLYGON" | "COSMOS";

export interface IEthereumWallet {
  address: string;
  privateKey: string;
}

export interface ICosmosWallet {
  address: string;
  mnemonic: string;
}

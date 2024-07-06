export type TChain = "ETHEREUM" | "POLYGON" | "COSMOS";

export type TCreateWalletResponse = {
  address: string;
  privateKey?: string;
  mnemonic?: string;
};

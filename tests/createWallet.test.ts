// createWallet.test.ts
import { generateWallet, CHAINS } from "../src";
import { IEthereumWallet, ICosmosWallet } from "../src/types";

jest.mock("../src", () => ({
  generateWallet: jest.fn(),
  CHAINS: {
    ETHEREUM: "ethereum",
    COSMOS: "cosmos",
  },
}));

describe("createWallet", () => {
  it("should generate wallets for Ethereum and Cosmos chains", async () => {
    const mockEthWallet: IEthereumWallet = { address: "0xEthAddress", privateKey: "ethPrivateKey" };
    const mockCosmWallet: ICosmosWallet = { address: "cosmosAddress", mnemonic: "cosmosMnemonic" };

    // Mock the generateWallet function
    (generateWallet as jest.Mock)
      .mockResolvedValueOnce(mockEthWallet)
      .mockResolvedValueOnce(mockCosmWallet);

    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // Define the createWallet function here or import it from its file if it's in a separate file
    async function createWallet() {
      const ethWallet: IEthereumWallet = (await generateWallet(CHAINS.ETHEREUM)) as IEthereumWallet;
      console.log("wallet:", ethWallet.address);
      console.log("private Key:", ethWallet.privateKey);

      const cosmWallet: ICosmosWallet = (await generateWallet(CHAINS.COSMOS)) as ICosmosWallet;
      console.log("wallet:", cosmWallet.address);
      console.log("mnemonic:", cosmWallet.mnemonic);
    }

    await createWallet();

    // Check that generateWallet was called with the correct arguments
    expect(generateWallet).toHaveBeenCalledWith(CHAINS.ETHEREUM);
    expect(generateWallet).toHaveBeenCalledWith(CHAINS.COSMOS);

    // Check that console.log was called with the correct arguments
    expect(consoleLogSpy).toHaveBeenCalledWith("wallet:", mockEthWallet.address);
    expect(consoleLogSpy).toHaveBeenCalledWith("private Key:", mockEthWallet.privateKey);
    expect(consoleLogSpy).toHaveBeenCalledWith("wallet:", mockCosmWallet.address);
    expect(consoleLogSpy).toHaveBeenCalledWith("mnemonic:", mockCosmWallet.mnemonic);

    // Restore the original console.log function
    consoleLogSpy.mockRestore();
  });
});

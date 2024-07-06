# Easy-Chain Blockchain Toolkit

[![tests](https://github.com/truethari/easy-chain/actions/workflows/pull-request.yaml/badge.svg?branch=master)](https://github.com/truethari/easy-chain/actions/workflows/pull-request.yaml)

This project is an npm package designed to support multiple blockchain networks with various functionalities such as wallet generation, transaction management, and more. Currently, it supports generating wallets for Ethereum and Cosmos chains using TypeScript and Ethers.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run:

```bash
npm install easy-chain
```

## Usage

First, import the package into your project:

```ts
import { generateWallet, CHAINS } from "easy-chain";
```

Then, you can use the functionalities provided by the package. For example, to generate wallets for different blockchain networks:

```ts
async function createWallet() {
  const ethWallet = await generateWallet(CHAINS.ETHEREUM);
  console.log("Ethereum Wallet Address:", ethWallet.address);
  console.log("Ethereum Private Key:", ethWallet.privateKey);

  const cosmWallet = await generateWallet(CHAINS.COSMOS);
  console.log("Cosmos Wallet Address:", cosmWallet.address);
  console.log("Cosmos Mnemonic:", cosmWallet.mnemonic);
}

createWallet().catch(console.error);
```

## API

`generateWallet(chain: string): Promise<Wallet>`
Generates a wallet for the specified blockchain network.

- `chain`: The blockchain network for which to generate the wallet. Use the CHAINS constants provided by the package.

### Wallet Types

Ethereum Wallet

```ts
interface EthereumWallet {
  address: string;
  privateKey: string;
}
```

Cosmos Wallet

```ts
interface CosmosWallet {
  address: string;
  mnemonic: string;
}
```

## Examples

Here is an example of how to generate wallets for Ethereum and Cosmos:

```ts
import { generateWallet, CHAINS } from "easy-chain";

async function createWallet() {
  const ethWallet = await generateWallet(CHAINS.ETHEREUM);
  console.log("Ethereum Wallet Address:", ethWallet.address);
  console.log("Ethereum Private Key:", ethWallet.privateKey);

  const cosmWallet = await generateWallet(CHAINS.COSMOS);
  console.log("Cosmos Wallet Address:", cosmWallet.address);
  console.log("Cosmos Mnemonic:", cosmWallet.mnemonic);
}

createWallet().catch(console.error);
```

## Testing

To run tests for the project, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/truethari/easy-chain/blob/master/LICENSE) file for details.

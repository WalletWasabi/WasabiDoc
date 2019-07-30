# Wasabi Documentation

[Wasabi Wallet](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is Wasabi Wallets open source documentation repository.
Here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves these difficult problems, and how you can use these tools to defend yourself. 

If you would like to support the project by educating your peers, this documentation repository is the right place for your efforts! 
Do you have a question that is not yet covered, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues). 
If you have a good answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls). 
For more details on how to contribute, see the [contribution checklist](/docs/ContributionChecklist.md) or the to-do-list.

In the [docs](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs) you will find the three main pillars of this repository:

## [Why Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/why-wasabi)
Why is privacy important and how to preserve it.


## [Using Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/using-wasabi)
How to use Wasabi Wallet.


## [Wasabi FAQ](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/FAQ)
Frequently asked guestions.

</br>

If you are looking for the developers repository, it can be found here [WalletWasabi](https://github.com/zkSNACKs/WalletWasabi).


## Setup

Prerequisite: [Node.js](https://nodejs.org/en/download/)

Install the dependencies:

```bash
npm install
```

## Development

Start the local build:

```bash
npm start
```

## Deployment

Deploy the site manually:

```bash
npm run deploy
```

The command above creates a production build and pushes it to the GitHub Pages branch.

To just create the production build you can use this command:

```bash
npm run build
```

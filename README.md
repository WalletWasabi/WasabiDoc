# Wasabi Documentation

[Wasabi](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is the open source documentation repository of Wasabi Wallet, here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves these difficult problems, and how you can use these tools to defend yourself. If you would like to support the project by educating your peers, this documentation repository is the right place for your efforts! If you have a question that is not yet covered, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues). If you have a good answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls). For more details on how to contribute, see the [contribution checklist](/docs/ContributionChecklist.md)

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

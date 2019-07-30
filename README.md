# Wasabi Documentation

[Wasabi](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is the open source documentation repository of Wasabi Wallet, here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves these difficult problems, and how you can use these tools to defend yourself. If you would like to support the project by educating your peers, this documentation repository is the right place for your efforts! If you have a question that is not yet covered, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues). If you have a good answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls). For more details on how to contribute, see the [contribution checklist](/docs/ContributionChecklist.md)

## Build the Documentation

### Setup

Prerequisite: [Node.js](https://nodejs.org/en/download/)

Install the dependencies:

```bash
npm install
```

### Development

Start the local build:

```bash
npm start
```

### Deployment

Deploy the site manually:

```bash
npm run deploy
```

The command above creates a production build and pushes it to the GitHub Pages branch.

To just create the production build you can use this command:

```bash
npm run build
```

## Contribute to the Documentation

Just like the Wasabi wallet software, this documentation is libre and open source under the [MIT license](LICENSE). Not only do we appreciate the contributoin of peers, but we desperately need it! If you have a question, [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues) and if you know the answer, then [make a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).

The documentation has three main pillars, each of them have a separate folder for proper structure: [Why Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/why-wasabi), [Using Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/using-wasabi), and [Building Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/building-wasabi), as well as an independent [Frequently Asked Question](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/FAQ). Please consider this repsoitory structure for hyperlinks, and use relative links whenever possible, for example `[What is a CoinJoin?](FAQ-Introduction.md#what-is-a-coinjoin)`.

The graphical documentation is built with [VuePress](https://vuepress.vuejs.org/), the sidebar navigation can be [edited here](https://github.com/zkSNACKs/WasabiDoc/blob/master/docs/.vuepress/config.toml).

### Spelling Conventions 

- Wasabi [capitalized]
- CoinJoin [capitalized, one word]










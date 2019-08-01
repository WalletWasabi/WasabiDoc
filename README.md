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
</br>
</br>
For those who are relatively new to Bitcoin and privacy, here we explain what problem exists and why this is important to fix it.
This is the introduction to the over-arching reason why we are so enthusiastic about Bitcoin in general and Wasabi specifically.


## [Using Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/using-wasabi)
How to use Wasabi Wallet.
</br>
</br>
For those who seek to understand the nuances of Wasabi and how they can use this tool to reclaim and protect their privacy. Here we have a step by step guide to all the aspects, starting at beginner level, all the way up to power user features and advanced privacy practices.


## [Wasabi FAQ](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/FAQ)
Frequently asked questions.
</br>
</br>
In addition to this main documentation, here we have the most commonly asked questions and answers. Specific questions are answered with linked reference to the main documentation. This is for all the users who need a precise answer to a common question.

</br>

If you are looking for the developers repository, it can be found here [WalletWasabi](https://github.com/zkSNACKs/WalletWasabi).

</br>

## Contribute to the Documentation

Just like the Wasabi wallet software, this documentation is libre and open source under the [MIT license](LICENSE). Not only do we appreciate the contributoin of peers, but we desperately need it! If you have a question, [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues) and if you know the answer, then [make a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).

The documentation has three main pillars, each of them have a separate folder for proper structure: [Why Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/why-wasabi), [Using Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/using-wasabi), and [Building Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/building-wasabi), as well as an independent [Frequently Asked Question](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/FAQ). Please consider this repsoitory structure for hyperlinks, and use relative links whenever possible, for example `[What is a CoinJoin?](FAQ-Introduction.md#what-is-a-coinjoin)`.

The graphical documentation is built with [VuePress](https://v1.vuepress.vuejs.org/), and the sidebar navigation can be [edited here](https://github.com/zkSNACKs/WasabiDoc/blob/master/docs/.vuepress/config.js).

If you have front end skills and would like to help improve the theme/look of the website, we welcome your input! Check out the [VuePress documentation](https://v1.vuepress.vuejs.org/) for details on how it works.

On the other hand, if you'd like to contribute to the content of the site, know that you do not need to understand/deal with VuePress at all! You can make PRs pertaining to the markdown files in the `/docs/` directory, and if accepted, the merged changes will automatically be integrated into the documentation website by VuePress.

<br>

## Build the Documentation Locally
The Wasabi documentation website is built using an open source static site generator called VuePress. It is extrememly customizable and offers great defaults out-of-the-box. Check out the [VuePress documentation](https://v1.vuepress.vuejs.org/) for details on how to use it powerfully.

In order to build the website locally, you'll need [Node.js](https://nodejs.org/en/download/).

### Serve locally
1. Install dependencies
2. Serve locally (by default on port 8080)

```bash
npm install
npm start
```

<br>

---
### Spelling Conventions

- Wasabi [capitalized]
- CoinJoin [capitalized, one word]

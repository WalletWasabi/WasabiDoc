<p align="center">
  <a href="https://docs.wasabiwallet.io">
    <img src="docs/.vuepress/public/WasabiWalletDocs.png" alt="Wasabi Wallet Documentation" title="Wasabi Wallet Documentation" class="Image" />
  </a>
</p>

[Wasabi Wallet](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements a trustless privacy technique, called [Chaumian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is Wasabi Wallet's open-source [documentation](https://docs.wasabiwallet.io) repository.
Here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves some of the existing problems, and how you can use this tool to defend yourself.

If you would like to support the project by educating other people, this documentation repository is the right place for your efforts!
If you have a question regarding the documentation, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues).
If you have an answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).
For more details on how to contribute, see the [contribution checklist](https://docs.wasabiwallet.io/building-wasabi/ContributionChecklist.html) or the [to-do](https://docs.wasabiwallet.io/building-wasabi/ToDo.html) list.

If you need help regarding the software specifically, please check out [Discussions](https://github.com/zkSNACKs/WalletWasabi/discussions) in Wasabi Wallet's [main repository](https://github.com/zkSNACKs/WalletWasabi).

[![Build Status](https://dev.azure.com/zkSNACKs/WasabiDoc/_apis/build/status/zkSNACKs.WasabiDoc?branchName=master)](https://dev.azure.com/zkSNACKs/WasabiDoc/_build/latest?definitionId=4&branchName=master)

---

# 🏛️ The pillars of the documentation

* ## [Why Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/why-wasabi/)
  * Why privacy is important.
* ## [Using Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/using-wasabi/)
  * How to use Wasabi Wallet.
* ## [Building Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/building-wasabi/)
  * How to contribute to Wasabi.
* ## [Wasabi FAQ](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/FAQ/)
  * Frequently asked questions.
* ## [Wasabi Glossary](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/glossary/)
  * Explanations of common words.

---

# 📄 Contribute to the Documentation

Just like the Wasabi wallet software, this documentation is libre and open-source under the [MIT license](LICENSE).
Not only do we appreciate everyone's contribution, but we desperately need it!

* [VuePress](#vuepress)
* [Writing Conventions](#writing-conventions)
* [Reference files](#reference-files)
* [Embedding images](#embedding-images)
* [Embedding shields](#embedding-shields)
* [Embedding videos](#embedding-videos)
* [Text Highlights](#text-highlights)
* [Frequently asked questions](#frequently-asked-questions)
* [Variables](#variables)

---

## VuePress

The [Wasabi documentation website](https://docs.wasabiwallet.io) is built using an open-source static site generator called VuePress.
Its [configuration](https://github.com/zkSNACKs/WasabiDoc/blob/master/docs/.vuepress/config.js) and [theme](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/.vuepress/styles) are extremely customizable, and it offers great defaults out-of-the-box.
Check out the [VuePress website](https://v1.vuepress.vuejs.org/) for details on how to use it.

To contribute to the content of the website, you can make PRs related to the markdown files in the `/docs/` directory, and if merged, the changes will automatically be integrated into the documentation website by VuePress.
Know that you do not need to understand/deal with VuePress at all in this case.

## Writing Conventions

- Wasabi [capitalized]
- CoinJoin [capitalized, one word]
- Every sentence must start in a new line.
- For a paragraph, add an `empty line` or `</br>` in the markdown.

## Reference files

Please consider this repository structure for hyperlinks, and use relative links whenever possible, for example:

```
[What is a CoinJoin?](FAQ-Introduction.md#what-is-a-coinjoin)
```

## Embedding images

The images are stored in the [`/docs/.vuepress/public/`](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/.vuepress/public) directory.
They can be embedded via the following markdown tags:

```
![Alternative text of the image](/IMAGENAME.png "Title of the image")
```

## Embedding shields

To insert the shield images inline with the text, use these HTML tags:

```html
<img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" />
<img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" />
<img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" />
<img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" />
```

## Embedding videos

Youtube videos and playlists can be embedded via the following custom markdown tags:

```md
@[youtube](VIDEO_ID)
@[youtubePlaylist](PLAYLIST_ID)
```

Optionally you can also specify the start position of a video in seconds (e.g. starts at 100 seconds):

```md
@[youtube](VIDEO_ID,100)
```

And the index of the video of a playlist (e.g. starts the third video):

```md
@[youtubePlaylist](PLAYLIST_ID,VIDEO_ID)
```

## Text Highlights

There are three types of text highlights that can be used to display different colored boxes.

A green box displaying a [friendly tip](https://docs.wasabiwallet.io/using-wasabi/PasswordBestPractices.html):

```
:::tip
foo
:::
```

A yellow box with a [cautious warning](https://docs.wasabiwallet.io/using-wasabi/WalletRecovery.html#back-up-wallet-file-and-password):

```
:::warning
foo
:::
```

A red box with a [clear danger](https://docs.wasabiwallet.io/using-wasabi/RestoreElectrum.html), you can also add a title `foo` to any container:

```
:::danger foo
bar
:::
```

## Frequently asked questions

Use this markdown box with the headers to write the FAQ:
```
:::details
### question

answer answer answer.
answer answer answer.
:::
```

When you want to [highlight text](README.md#text-highlights) within a question, then you need to [nest containers](https://github.com/markdown-it/markdown-it-container/issues/6#issuecomment-213789283) by adding more `:` for the outer block start/end. The outer `details` container has now four `::::`, and the inner `warning` container has still three `:::`.

```
::::details
### question

answer answer answer.

:::warning
answer answer answer.
:::
::::
```

## Variables

To have a single place to maintain universal strings like the current Wasabi version number, we use variables in the Markdown (i.e.  `${currentVersion}`and `${zksnacksPublicKeyFingerprint}`).
These variables are managed in [`docs/.vuepress/variables.js`](https://github.com/zkSNACKs/WasabiDoc/blob/master/docs/.vuepress/variables.js).
Occurrences of `${variableName}` get substituted before the Markdown is processed.

# Build the Documentation Locally

In order to build the website locally, you'll need [Node.js](https://nodejs.org/) >= 10.16 (or basically the latest LTS version).

## Serve locally

1. Install dependencies
2. Serve locally (by default on port 8080)

```bash
npm install
npm start
```

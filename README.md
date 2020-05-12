# Wasabi Documentation

[Wasabi Wallet](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.
It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is Wasabi Wallet's open source [documentation](https://docs.wasabiwallet.io) repository.
Here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves some of the existing problems, and how you can use this tool to defend yourself.

If you would like to support the project by educating other people, this documentation repository is the right place for your efforts!
If you have a question regarding the documentation, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues).
If you have an answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).
For more details on how to contribute, see the [contribution checklist](https://docs.wasabiwallet.io/building-wasabi/ContributionChecklist.html) or the [to-do](https://docs.wasabiwallet.io/building-wasabi/ToDo.html) list.

If you have a bug regarding the software specifically, please [open an issue](https://github.com/zkSNACKs/WalletWasabi/issues/new/choose) in Wasabi Wallet's [main repository](https://github.com/zkSNACKs/WalletWasabi).

---

## The pillars of the documentation

### [Why Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/why-wasabi/)

**Why privacy is important.**

An introduction to the over-arching reason why we are so enthusiastic about Bitcoin in general and Wasabi specifically.

### [Using Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/using-wasabi/)

**How to use Wasabi Wallet.**

A step by step guide to all the aspects, starting at beginner level, all the way up to power user features and advanced privacy practices.

### [Building Wasabi](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/building-wasabi/)

**How to contribute to Wasabi.**

All the knowledge needed to give new contributors a swift start on their path to black-belt of the Dojo.

### [Wasabi FAQ](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/FAQ/)

**Frequently asked questions.**

Most common questions answered with linked reference to the main documentation.

### [Wasabi Glossary](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/glossary/)

**Glossary.**

Explanations of common words used in Wasabi and regarding Bitcoin privacy.

---

## Contribute to the Documentation

[![Build Status](https://dev.azure.com/zkSNACKs/WasabiDoc/_apis/build/status/zkSNACKs.WasabiDoc?branchName=master)](https://dev.azure.com/zkSNACKs/WasabiDoc/_build/latest?definitionId=4&branchName=master)

Just like the Wasabi wallet software, this documentation is libre and open source under the [MIT license](LICENSE).
Not only do we appreciate everyone's contribution, but we desperately need it!

### VuePress

The [Wasabi documentation website](https://docs.wasabiwallet.io) is built using an open source static site generator called VuePress.
Its [configuration](https://github.com/zkSNACKs/WasabiDoc/blob/master/docs/.vuepress/config.js) and [theme](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/.vuepress/styles) are extremely customizable, and it offers great defaults out-of-the-box.
Check out the [VuePress website](https://v1.vuepress.vuejs.org/) for details on how to use it.

To contribute to the content of the website, you can make PRs related to the markdown files in the `/docs/` directory, and if merged, the changes will automatically be integrated into the documentation website by VuePress.
Know that you do not need to understand/deal with VuePress at all in this case.

### Writing Conventions

- Wasabi [capitalized]
- CoinJoin [capitalized, one word]
- Every sentence must start in a new line.
- For a paragraph, add an `empty line` or `</br>` in the markdown.

### Reference files

Please consider this repository structure for hyperlinks, and use relative links whenever possible, for example:

```
[What is a CoinJoin?](FAQ-Introduction.md#what-is-a-coinjoin)
```

### Embedding images

The images are stored in the [`/docs/.vuepress/public/`](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/.vuepress/public) directory.
They can be embedded via the following markdown tags:

```
![](/IMAGENAME.png)
```

### Embedding shields

To insert the shield images inline with the text, use these HTML tags:

```html
<img src="/ShieldCheckmark.png" alt="checkmark" class="shield" />
<img src="/ShieldGreen.png" alt="green" class="shield" />
<img src="/ShieldYellow.png" alt="yellow" class="shield" />
<img src="/ShieldRed.png" alt="red" class="shield" />
```

### Embedding videos

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

### Text Highlights

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

### Frequently asked questions

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

### Variables

To have a single place to maintain universal strings like the current Wasabi version number, we use variables in the Markdown (i.e.  `${currentVersion}`and `${zksnacksPublicKeyFingerprint}`).
These variables are managed in [`docs/.vuepress/variables.js`](https://github.com/zkSNACKs/WasabiDoc/blob/master/docs/.vuepress/variables.js).
Occurrences of `${variableName}` get substituted before the Markdown is processed.

---

## Build the Documentation Locally

In order to build the website locally, you'll need [Node.js](https://nodejs.org/) >= 10.16 (or basically the latest LTS version).

### Serve locally

1. Install dependencies
2. Serve locally (by default on port 8080)

```bash
npm install
npm start
```

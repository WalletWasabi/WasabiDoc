# Wasabi Wallet 2.0 Documentation

[Wasabi Wallet](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements a trustless privacy technique, called [WabiSabi CoinJoin](https://eprint.iacr.org/2021/206).

This is Wasabi Wallet's open-source [documentation](https://docs.wasabiwallet.io) repository.
Here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves some of the existing problems, and how you can use this tool to defend yourself.

If you would like to support the project by educating other people, this documentation repository is the right place for your efforts!
If you have a question regarding the documentation, please [open an issue](https://github.com/WalletWasabi/WasabiDoc/issues).
If you have an answer to a question, please [open a pull request](https://github.com/WalletWasabi/WasabiDoc/pulls).
For more details on how to contribute, see the [contribution checklist](https://docs.wasabiwallet.io/building-wasabi/ContributionChecklist.html).

If you need help regarding the software specifically, please check out [Discussions](https://github.com/WalletWasabi/WalletWasabi/discussions) in Wasabi Wallet's [main repository](https://github.com/WalletWasabi/WalletWasabi).

[![Build Status](https://dev.azure.com/zkSNACKs/WasabiDoc/_apis/build/status/zkSNACKs.WasabiDoc?branchName=master)](https://dev.azure.com/zkSNACKs/WasabiDoc/_build/latest?definitionId=4&branchName=master)

---

# 🏛️ The pillars of the documentation

* ## [Getting Started](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/getting-started/)
  * Getting started guide.
* ## [Why Wasabi](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/why-wasabi/)
  * Why privacy is important.
* ## [Using Wasabi](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/using-wasabi/)
  * How to use Wasabi Wallet.
* ## [Building Wasabi](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/building-wasabi/)
  * How to contribute to Wasabi.
* ## [Wasabi FAQ](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/FAQ/)
  * Frequently asked questions.
* ## [Wasabi Glossary](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/glossary/)
  * Explanations of common words.

---

# 📄 Contribute to the Documentation

Just like the Wasabi Wallet software, this documentation is libre and open-source under the [MIT license](LICENSE).
Not only do we appreciate everyone's contribution, but we desperately need it!

* [VuePress](#vuepress)
* [Writing Conventions](#writing-conventions)
* [Reference files](#reference-files)
* [Embedding images](#embedding-images)
* [Embedding videos](#embedding-videos)
* [Text Highlights](#text-highlights)
* [Frequently asked questions](#frequently-asked-questions)
* [Variables](#variables)

---

## VuePress

The [Wasabi documentation website](https://docs.wasabiwallet.io) is built using an open-source static site generator called VuePress.
Its [configuration](https://github.com/WalletWasabi/WasabiDoc/blob/master/docs/.vuepress/config.js) and [theme](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/.vuepress/styles) are extremely customizable, and it offers great defaults out-of-the-box.
Check out the [VuePress website](https://v1.vuepress.vuejs.org/) for details on how to use it.

To contribute to the content of the website, you can make PRs related to the markdown files in the `/docs/` directory, and if merged, the changes will automatically be integrated into the documentation website by VuePress.
Know that you do not need to understand/deal with VuePress at all in this case.

## Writing Conventions

- Wasabi [capitalized]
- coinjoin [not capitalized, one word]
- WabiSabi [capitalized, one word]
- Every sentence must start in a new line.
- For a paragraph, add an `empty line` or `<br>` in the markdown.

## Reference files

Please consider this repository structure for hyperlinks, and use relative links whenever possible, for example:

```
[What is a coinjoin?](FAQ-Introduction.md#what-is-a-coinjoin)
```

## Embedding images

The images are stored in the [`/docs/.vuepress/public/`](https://github.com/WalletWasabi/WasabiDoc/tree/master/docs/.vuepress/public) directory.
They can be embedded via the following markdown tags:

```
![Alternative text of the image](/IMAGENAME.png "Title of the image")
```

## Embedding videos

Youtube videos and playlists can be embedded via the following custom markdown tags:

```md
[![Title of the video](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://youtu.be/VIDEO_ID)
```

Optionally you can also specify the start position of a video in seconds (e.g. starts at 100 seconds):

```md
[![Title of the video](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://youtu.be/VIDEO_ID?t=123)
```

And the index of the video of a playlist (e.g. starts the third video):

```md
[![Title of the playlist](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://youtu.be/VIDEO_ID?list=PLAYLIST_ID)
```

If the image doesn't appear, that usually happens with older videos, use hqdefault.jpg instead of maxresdefault.jpg

In case that the thumbnail doesn't fit well with the documentation, a default image can be added as custom thumbnail, located at `/Logo_without_text_with_bg_dark_with_yt.png`.
Currently, all thumbnails have been set to this default image as a temporary solution because videos are old, sometimes not under our control, and the thumbnails were irrelevant.

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

A red box with a [clear danger](https://docs.wasabiwallet.io/using-wasabi/ExternalRestore.html), you can also add a title `foo` to any container:

```
:::danger foo
bar
:::
```

## Frequently asked questions

Use this markdown box with the headers to write the FAQ:
```
### question

answer answer answer.
answer answer answer.
```

## Variables

To have a single place to maintain universal strings like the current Wasabi version number, we use variables in the Markdown (i.e.  `${currentVersion}`and `${zksnacksPublicKeyFingerprint}`).
These variables are managed in [`docs/.vuepress/config.ts`](https://github.com/WalletWasabi/WasabiDoc/blob/master/docs/.vuepress/config.ts).
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

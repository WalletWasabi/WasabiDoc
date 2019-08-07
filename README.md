# Wasabi Documentation

[Wasabi Wallet](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.
It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is Wasabi Wallets open source [documentation](https://docs.wasabiwallet.io) repository.
Here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves some of the existing problems, and how you can use this tool to defend yourself.

If you would like to support the project by educating other people, this documentation repository is the right place for your efforts!
If you have a question that is not yet covered, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues).
If you have an answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).
For more details on how to contribute, see the [contribution checklist](https://docs.wasabiwallet.io/building-wasabi/ContributionChecklist.html) or the [to-do](https://docs.wasabiwallet.io/building-wasabi/ToDo.html) list.

The developers repository can be found [here](https://github.com/zkSNACKs/WalletWasabi).

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

---

## Contribute to the Documentation

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

Just like the Wasabi wallet software, this documentation is libre and open source under the [MIT license](LICENSE).
Not only do we appreciate the contribution of everyone, but we desperately need it!

If you have a question, [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues) and if you know the answer, then [make a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://dennisreimann.de"><img src="https://avatars2.githubusercontent.com/u/886?v=4" width="100px;" alt="Dennis Reimann"/><br /><sub><b>Dennis Reimann</b></sub></a><br /><a href="#design-dennisreimann" title="Design">🎨</a></td>
    <td align="center"><a href="http://towardsliberty.com"><img src="https://avatars1.githubusercontent.com/u/30683012?v=4" width="100px;" alt="Max Hillebrand"/><br /><sub><b>Max Hillebrand</b></sub></a><br /><a href="#content-MaxHillebrand" title="Content">🖋</a> <a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=MaxHillebrand" title="Documentation">📖</a> <a href="#example-MaxHillebrand" title="Examples">💡</a> <a href="#maintenance-MaxHillebrand" title="Maintenance">🚧</a> <a href="#projectManagement-MaxHillebrand" title="Project Management">📆</a> <a href="#review-MaxHillebrand" title="Reviewed Pull Requests">👀</a> <a href="#video-MaxHillebrand" title="Videos">📹</a></td>
    <td align="center"><a href="http://thunder-development.org"><img src="https://avatars2.githubusercontent.com/u/39974688?v=4" width="100px;" alt="thunderBiscuit"/><br /><sub><b>thunderBiscuit</b></sub></a><br /><a href="#ideas-thunderBiscuit" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://mayank.ch"><img src="https://avatars1.githubusercontent.com/u/10330103?v=4" width="100px;" alt="Mayank Chhabra"/><br /><sub><b>Mayank Chhabra</b></sub></a><br /><a href="#design-mayankchhabra" title="Design">🎨</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.

### VuePress

The [Wasabi documentation website](https://docs.wasabiwallet.io) is built using an open source static site generator called VuePress.
Its [configuration](https://github.com/zkSNACKs/WasabiDoc/blob/master/docs/.vuepress/config.js) and [theme](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/.vuepress/styles) are extremely customizable, and it offers great defaults out-of-the-box.
Check out the [VuePress website](https://v1.vuepress.vuejs.org/) for details on how to use it.

To contribute to the content of the website, you can make PRs related to the markdown files in the `/docs/` directory, and if merged, the changes will automatically be integrated into the documentation website by VuePress.
Know that you do not need to understand/deal with VuePress at all in this case.

### Writing Conventions

- Wasabi [capitalized]
- CoinJoin [capitalized, one word]
- Every sentense must start in a new line.
- For a paragraph, add an `empty line` or `</br>` in the markdown.

### Reference files

Please consider this repsoitory structure for hyperlinks, and use relative links whenever possible, for example:

```
[What is a CoinJoin?](FAQ-Introduction.md#what-is-a-coinjoin)
```

### Embedding images

The images are stored in the [`/docs/.vuepress/public/`](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs/.vuepress/public) directory.
They can be embedded via the following markdown tags:

```
![](/IMAGENAME.png)
```

### Embedding videos

Youtube videos and playlists can be embedded via the following custom markdown tags:

```md
@[youtube](VIDEO_ID)
@[youtubePlaylist](PLAYLIST_ID)
```

Optionally you can also specify the start position of a video in seconds: (e.g. starts at 100 seconds)

```md
@[youtube](VIDEO_ID,100)
```

And the index of the video of a playlist: (e.g. starts the third video)
```md
@[youtubePlaylist](PLAYLIST_ID,3)
```

---

## Build the Documentation Locally

In order to build the website locally, you'll need [Node.js](https://nodejs.org/).

### Serve locally

1. Install dependencies
2. Serve locally (by default on port 8080)

```bash
npm install
npm start
```

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
[![All Contributors](https://img.shields.io/badge/all_contributors-26-orange.svg?style=flat-square)](#contributors)

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

A green box displaying a [friendly tip](https://docs.wasabiwallet.io/using-wasabi/AddressReuse.html):

```
:::tip
foo
:::
```

A yellow box with a [cautious warning](https://docs.wasabiwallet.io/using-wasabi/AddressReuse.html):

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

### Thanks goes to the Wasabikas, Osu!

Checkout what each emoji means [here](https://allcontributors.org/docs/en/emoji-key).

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://towardsliberty.com"><img src="https://avatars1.githubusercontent.com/u/30683012?v=4" width="100px;" alt="Max Hillebrand"/><br /><sub><b>Max Hillebrand</b></sub></a><br /><a href="#content-MaxHillebrand" title="Content">🖋</a> <a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=MaxHillebrand" title="Documentation">📖</a> <a href="#example-MaxHillebrand" title="Examples">💡</a> <a href="#maintenance-MaxHillebrand" title="Maintenance">🚧</a> <a href="#projectManagement-MaxHillebrand" title="Project Management">📆</a> <a href="#review-MaxHillebrand" title="Reviewed Pull Requests">👀</a> <a href="#video-MaxHillebrand" title="Videos">📹</a></td>
    <td align="center"><a href="https://dennisreimann.de"><img src="https://avatars2.githubusercontent.com/u/886?v=4" width="100px;" alt="Dennis Reimann"/><br /><sub><b>Dennis Reimann</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=dennisreimann" title="Code">💻</a> <a href="#design-dennisreimann" title="Design">🎨</a></td>
    <td align="center"><a href="http://thunder-development.org"><img src="https://avatars2.githubusercontent.com/u/39974688?v=4" width="100px;" alt="thunderBiscuit"/><br /><sub><b>thunderBiscuit</b></sub></a><br /><a href="#ideas-thunderBiscuit" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://mayank.ch"><img src="https://avatars1.githubusercontent.com/u/10330103?v=4" width="100px;" alt="Mayank Chhabra"/><br /><sub><b>Mayank Chhabra</b></sub></a><br /><a href="#design-mayankchhabra" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/6102bitcoin"><img src="https://avatars0.githubusercontent.com/u/42300012?v=4" width="100px;" alt="6102bitcoin"/><br /><sub><b>6102bitcoin</b></sub></a><br /><a href="#ideas-6102bitcoin" title="Ideas, Planning, & Feedback">🤔</a> <a href="#content-6102bitcoin" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nopara73"><img src="https://avatars0.githubusercontent.com/u/9156103?v=4" width="100px;" alt="nopara73"/><br /><sub><b>nopara73</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=nopara73" title="Code">💻</a> <a href="#ideas-nopara73" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-nopara73" title="Maintenance">🚧</a> <a href="#review-nopara73" title="Reviewed Pull Requests">👀</a> <a href="#talk-nopara73" title="Talks">📢</a></td>
    <td align="center"><a href="https://github.com/molnard"><img src="https://avatars2.githubusercontent.com/u/9844978?v=4" width="100px;" alt="Dávid Molnár"/><br /><sub><b>Dávid Molnár</b></sub></a><br /><a href="#blog-molnard" title="Blogposts">📝</a> <a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=molnard" title="Code">💻</a> <a href="#review-molnard" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-molnard" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://geeks.ms/blogs/lontivero"><img src="https://avatars1.githubusercontent.com/u/127973?v=4" width="100px;" alt="Lucas Ontivero"/><br /><sub><b>Lucas Ontivero</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=lontivero" title="Code">💻</a> <a href="#review-lontivero" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-lontivero" title="Maintenance">🚧</a> <a href="#projectManagement-lontivero" title="Project Management">📆</a></td>
    <td align="center"><a href="http://nicolas-dorier.com/"><img src="https://avatars0.githubusercontent.com/u/3020646?v=4" width="100px;" alt="Nicolas Dorier"/><br /><sub><b>Nicolas Dorier</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=NicolasDorier" title="Code">💻</a> <a href="#ideas-NicolasDorier" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-NicolasDorier" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://lightning-rod.net/"><img src="https://avatars3.githubusercontent.com/u/15256660?v=4" width="100px;" alt="Ben Carman"/><br /><sub><b>Ben Carman</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=benthecarman" title="Code">💻</a> <a href="https://github.com/zkSNACKs/WasabiDoc/issues?q=author%3Abenthecarman" title="Bug reports">🐛</a> <a href="#review-benthecarman" title="Reviewed Pull Requests">👀</a> <a href="#design-benthecarman" title="Design">🎨</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/yahiheb"><img src="https://avatars0.githubusercontent.com/u/52379387?v=4" width="100px;" alt="yahiheb"/><br /><sub><b>yahiheb</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=yahiheb" title="Code">💻</a> <a href="#review-yahiheb" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=yahiheb" title="Tests">⚠️</a> <a href="https://github.com/zkSNACKs/WasabiDoc/issues?q=author%3Ayahiheb" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/danwalmsley"><img src="https://avatars3.githubusercontent.com/u/4672627?v=4" width="100px;" alt="danwalmsley"/><br /><sub><b>danwalmsley</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=danwalmsley" title="Code">💻</a> <a href="#review-danwalmsley" title="Reviewed Pull Requests">👀</a> <a href="#design-danwalmsley" title="Design">🎨</a> <a href="#ideas-danwalmsley" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=danwalmsley" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/varsnotwars"><img src="https://avatars0.githubusercontent.com/u/20197359?v=4" width="100px;" alt="Luis Silva"/><br /><sub><b>Luis Silva</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=varsnotwars" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jmacato"><img src="https://avatars0.githubusercontent.com/u/16554748?v=4" width="100px;" alt="Jumar Macato"/><br /><sub><b>Jumar Macato</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=jmacato" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Zolgarr"><img src="https://avatars2.githubusercontent.com/u/42039790?v=4" width="100px;" alt="zolgarr"/><br /><sub><b>zolgarr</b></sub></a><br /><a href="#content-zolgarr" title="Content">🖋</a> <a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=zolgarr" title="Documentation">📖</a> <a href="#video-zolgarr" title="Videos">📹</a> <a href="#tutorial-zolgarr" title="Tutorials">✅</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/raindogdance"><img src="https://avatars2.githubusercontent.com/u/35657440?v=4" width="100px;" alt="raindogdance"/><br /><sub><b>raindogdance</b></sub></a><br /><a href="#tutorial-raindogdance" title="Tutorials">✅</a> <a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=raindogdance" title="Documentation">📖</a> <a href="#content-raindogdance" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/wintercooled"><img src="https://avatars1.githubusercontent.com/u/25693053?v=4" width="100px;" alt="Matthew Haywood"/><br /><sub><b>Matthew Haywood</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=wintercooled" title="Documentation">📖</a> <a href="#content-wintercooled" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Mixelated"><img src="https://avatars3.githubusercontent.com/u/11422373?v=4" width="100px;" alt="Marc"/><br /><sub><b>Marc</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=Mixelated" title="Documentation">📖</a> <a href="#content-Mixelated" title="Content">🖋</a></td>
    <td align="center"><a href="http://bullbitcoin.com"><img src="https://avatars3.githubusercontent.com/u/7997682?v=4" width="100px;" alt="Francis Pouliot"/><br /><sub><b>Francis Pouliot</b></sub></a><br /><a href="#business-francispouliot" title="Business development">💼</a> <a href="#ideas-francispouliot" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://twitter.com/xavierfiechter"><img src="https://avatars0.githubusercontent.com/u/31884704?v=4" width="100px;" alt="Xavier Fiechter"/><br /><sub><b>Xavier Fiechter</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=xavierfiechter" title="Documentation">📖</a> <a href="#content-xavierfiechter" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://keybase.io/guggero"><img src="https://avatars0.githubusercontent.com/u/1008879?v=4" width="100px;" alt="Oliver Gugger"/><br /><sub><b>Oliver Gugger</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=guggero" title="Code">💻</a> <a href="https://github.com/zkSNACKs/WasabiDoc/issues?q=author%3Aguggero" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://joinmarket.me/blog/"><img src="https://avatars2.githubusercontent.com/u/4278257?v=4" width="100px;" alt="Adam Gibson"/><br /><sub><b>Adam Gibson</b></sub></a><br /><a href="#ideas-AdamISZ" title="Ideas, Planning, & Feedback">🤔</a> <a href="#example-AdamISZ" title="Examples">💡</a> <a href="#review-AdamISZ" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.riccardomasutti.com"><img src="https://avatars1.githubusercontent.com/u/46527252?v=4" width="100px;" alt="Riccardo Masutti"/><br /><sub><b>Riccardo Masutti</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=RiccardoMasutti" title="Documentation">📖</a> <a href="#content-RiccardoMasutti" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/CryptoRafe"><img src="https://avatars0.githubusercontent.com/u/51679301?v=4" width="100px;" alt="CryptoRafe"/><br /><sub><b>CryptoRafe</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=CryptoRafe" title="Documentation">📖</a> <a href="#content-CryptoRafe" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kravens"><img src="https://avatars1.githubusercontent.com/u/9646902?v=4" width="100px;" alt="kravens"/><br /><sub><b>kravens</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=kravens" title="Documentation">📖</a> <a href="#content-kravens" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.michaeltoth.me"><img src="https://avatars3.githubusercontent.com/u/1676164?v=4" width="100px;" alt="Michael Toth"/><br /><sub><b>Michael Toth</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=michaeltoth" title="Documentation">📖</a> <a href="#content-michaeltoth" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/PulpCattel"><img src="https://avatars0.githubusercontent.com/u/51127079?v=4" width="100px;" alt="Luke"/><br /><sub><b>Luke</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=PulpCattel" title="Documentation">📖</a></td>
    <td align="center"><a href="https://JonathanCross.com"><img src="https://avatars3.githubusercontent.com/u/5115470?v=4" width="100px;" alt="Jonathan Cross"/><br /><sub><b>Jonathan Cross</b></sub></a><br /><a href="https://github.com/zkSNACKs/WasabiDoc/commits?author=jonathancross" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.

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

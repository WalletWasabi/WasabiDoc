---
{
  "title": "Future Of Wasabi Wallet",
  "description": "This document aims to describe some ideas for the future of Wasabi Wallet and to explain the reasoning behind going towards these objectives. Plans might change without notice and this only represents our thinking at 2021 December. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop.",
  "sidebarDepth": "1"
}
---

# Ideas And Plans For The Future Of Wasabi Wallet

---

Wasabi Wallet is a privacy focused Bitcoin wallet that is based on the [WabiSabi Framework](https://eprint.iacr.org/2021/206).
While privacy can be achieved today with it, the mainchain costs, inconvenience and scalability will inevitably push us to look in to Lightning Network and other 2nd layer solutions.
This document aims to describe some ideas for the future of Wasabi Wallet and to explain the reasoning behind going towards these objectives. Plans might change without notice and this only represents our thinking at 2021 December.
Wasabi does not support and does not plan to support other currencies in the future.

Wasabi is software. Therefore it must not neglect general software quality issues.
The better software Wasabi is, the more users it will retain.

Wasabi is also a Bitcoin wallet, therefore it must improve general Bitcoin wallet related features as well.
New issues will constantly come up as new users try to use the software.

![Future of Wasabi Wallet in 2021 December](https://user-images.githubusercontent.com/51679301/147867076-bc6e74ed-13f6-455e-8fdb-72ff8e6a03d7.jpg)

[[toc]]

---

## Maintenance

One of the main priorities of Wasabi developers are the stability, performance, code quality, and user experience of Wasabi.
Great care is taken here to build a robust, powerful and simple privacy tool that will attract users, because the more users a network-reliant privacy software has, the better privacy it offers.

In Wasabi, this is most apparent during CoinJoins.
The more users that participate in a round, the higher the anonymity set the CoinJoin achieves, and the more frequent the rounds will be.

### CoinJoin

#### Round Interoperability

### Wallet

#### Simple Send Improvements

Improving simple send using current Bitcoin anonymity techniques is also an interesting topic.
These do not even have to disrupt the current user workflow, they can mostly "just happen" in the background.
Send in CoinJoin [https://github.com/zkSNACKs/Meta/issues/6](https://github.com/zkSNACKs/Meta/issues/6), [https://github.com/nopara73/ZeroLink/issues/75](https://github.com/nopara73/ZeroLink/issues/75) has great potential.

#### Privacy Calculation

In every CoinJoin round, more than half of the inputs are remixes, which not only results in perfect mixes for those inputs, but also results in anonymity set growth somewhere between the scales of addition and multiplication, instead of simple addition as the ZeroLink paper anticipated.

Whether the anonymity set gain is closer to addition or multiplication depends on how other users behave.
Right now, Wasabi simply counts the worst case scenario: as addition.
However, this is happening in a low Bitcoin fee environment, so this is not to be taken for granted in the future.
Additional measures are necessary.

Accurate Anonymity Set Calculation: [https://github.com/zkSNACKs/Meta/issues/35](https://github.com/zkSNACKs/Meta/issues/35)

#### Bitcoin Address Format

Currently Wasabi Wallet uses bech32 addresses only.
These addresses might not be fully supported by the whole Bitcoin ecosystem.
It would be beneficial to make pull requests to open-source softwares to support sending money to bech32 addresses: [https://github.com/zkSNACKs/WalletWasabi/issues/951](https://github.com/zkSNACKs/WalletWasabi/issues/951)

Wasabi, in theory could use P2SH over P2WPKH, wrapped SegWit addresses, ([https://github.com/zkSNACKs/Meta/issues/7](https://github.com/zkSNACKs/Meta/issues/7))since the ability to spend to bech32 addresses is not yet universal.
On the other hand, this could be considered a backward-looking short-sighted improvement.

A way of facilitating funds to make their way into the wallet would be to introduce transitionary P2WPKH over P2SH addresses.
Those would not be checked against Golomb-Rice filters.
Instead, a single backend query would establish its balance only once, and then immediately sweep the money to a bech32 wallet-managed address: [https://github.com/zkSNACKs/Meta/issues/34](https://github.com/zkSNACKs/Meta/issues/34).

### User Experience

Improving the user friendliness, the accuracy of coin awareness, and what happens on the blockchain can be also beneficial.

#### QR-Scanner

QR code reader works in Windows. WIP for Linux and Mac. // Link to Pindurs PRs and issues.

## Marketing

While education, content creation and marketing have little place in a technical document, they are still important parts of the big picture.

### Education

Through education, Wasabi can obtain new users.
The more Wasabi users there are, the better their privacy.
Advancing this issue can take various, often opportunistic forms.
A few ideas:

- Add Infographics to software [https://github.com/zkSNACKs/Meta/issues/32](https://github.com/zkSNACKs/Meta/issues/32)
- Implement Bitcoin Academy [https://github.com/zkSNACKs/Meta/issues/33](https://github.com/zkSNACKs/Meta/issues/33)

### Events

### Contribution games

### Merchandise Shop

## Scaling

### Mobile Wallet

In theory, Wasabi could support smart phones (Android, iOS).
In practice, these platforms and their tools are not mature enough just yet.
The concept of network-analysis resistant smartphone wallets is not yet proven.

If we attempted to port Wasabi's code today, the wallet would use too much storage space, battery and network.
However, technology is improving quickly, thus, timing has special importance in this matter. [https://github.com/zkSNACKs/Meta/issues/9](https://github.com/zkSNACKs/Meta/issues/9)

### Localization

In the paper [Anonymity Loves Company: Usability and the Network Effect](https://www.freehaven.net/anonbib/cache/usability:weis2006.pdf) the authors note:

> We show that in anonymizing networks, even if you were smart enough and had enough time to use every system perfectly, you would nevertheless be right to choose your system based in part on its usability for other users.

Therefore, Wasabi should also pay attention to fields that help to increase the number of Wasabi users, bringing greater privacy for everyone.
Since most of the world does not speak English, localization ([https://github.com/zkSNACKs/Meta/issues/22](https://github.com/zkSNACKs/Meta/issues/22)) of Wasabi is something to consider.

### Tooling

#### RPC

Wasabi offers a daemon and an RPC interface.
Full information can be found [here](/using-wasabi/Daemon.md) and [here](/using-wasabi/RPC.md).

#### Daemon/API

Wasabi offers a daemon and an RPC interface.
Full information can be found [here](/using-wasabi/Daemon.md) and [here](/using-wasabi/RPC.md).

#### Documentation

#### WAT?

#### Tutorials

#### Companies?

#### Integration

#### Libraries

#### .NET Ecosystem

Wasabi could roll out a NuGet package, enabling developers to build applications with Wasabi.
It would be also beneficial and not difficult to integrate Wasabi into existing .NET softwares directly, like [BTCPay](https://github.com/btcpayserver/btcpayserver).

#### Bitcoin Full Node integration

Improve full node integration to minimize reliance to backend.

### Hardware Wallets

Wasabi uses the [Bitcoin Core Hardware Wallet Interface [HWI]](https://github.com/bitcoin-core/HWI) ([PR #1341](https://github.com/zkSNACKs/WalletWasabi/pull/1341) & [PR #1905](https://github.com/zkSNACKs/WalletWasabi/pull/1905)) however in this mode coinjoining is currently not possible.

## Innovation

### P2EP

Pay to EndPoint: [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/18), [https://github.com/zkSNACKs/Meta/issues/23](https://github.com/zkSNACKs/Meta/issues/23)

### Contact list

### Chat

A loss of privacy in fields that are traditionally considered to be outside the scope of a Bitcoin wallet, such as sharing addresses through unsecure chat clients pose privacy threats, which we cannot consider entirely out of Wasabi's scope. Wasabi should look into ways of extending the scope of its privacy protection to other, not closely Bitcoin related fields, such as end-to-end encrypted messaging.
Simple P2P, Encrypted Messaging: [https://github.com/zkSNACKs/Meta/issues/14](https://github.com/zkSNACKs/Meta/issues/14)

### Lightning Network

At this point, it is too early to start leveraging LN in a privacy oriented wallet.
However, if Bitcoin is successful in the future, there will be a need to think about these questions.
Lightning Network integration might eventually be unavoidable for any Bitcoin wallet if they want to stay in business, because blockchains don't scale.

// LN privacy research grant




- JoinMarket: [https://github.com/zkSNACKs/Meta/issues/5](https://github.com/zkSNACKs/Meta/issues/5)
- Friend CoinJoin Network: [https://github.com/zkSNACKs/Meta/issues/17](https://github.com/zkSNACKs/Meta/issues/17)
- Merge Avoidance with [BIP 47](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki) Payment Codes: [https://github.com/zkSNACKs/Meta/issues/10](https://github.com/zkSNACKs/Meta/issues/10)
- Clusterfuck Wallet Strategies: [https://github.com/zkSNACKs/Meta/issues/11](https://github.com/zkSNACKs/Meta/issues/11), [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/18), [https://github.com/nopara73/ZeroLink/issues/42](https://github.com/nopara73/ZeroLink/issues/42)
- GroupSend: [https://github.com/zkSNACKs/Meta/issues/29](https://github.com/zkSNACKs/Meta/issues/29)

## Coin Control and Privacy Feedback Improvements

- New Type of Bitcoin UI: [https://github.com/zkSNACKs/Meta/issues/8](https://github.com/zkSNACKs/Meta/issues/8)
- Input Joining Avoidance Strategy by Killing Kittens: [https://github.com/nopara73/ZeroLink/issues/65](https://github.com/nopara73/ZeroLink/issues/65)
- Improve History of a Coin: [https://github.com/zkSNACKs/WalletWasabi/issues/612](https://github.com/zkSNACKs/WalletWasabi/issues/612)
- Interactive Privacy Suggestions when Spending - [https://github.com/zkSNACKs/WalletWasabi/issues/729](https://github.com/zkSNACKs/WalletWasabi/issues/729)

## General Wallet Features

- Pay to Many: [https://github.com/zkSNACKs/WalletWasabi/issues/733](https://github.com/zkSNACKs/WalletWasabi/issues/733)
- Advanced RBF (ethical concerns here): [https://github.com/zkSNACKs/Meta/issues/15](https://github.com/zkSNACKs/Meta/issues/15)
- Sweep Private Key: [https://github.com/zkSNACKs/WalletWasabi/issues/486](https://github.com/zkSNACKs/WalletWasabi/issues/486)
- Paper Wallet Generation: [https://github.com/zkSNACKs/WalletWasabi/issues/727](https://github.com/zkSNACKs/WalletWasabi/issues/727)

## Extending the Scope of Privacy

Other features indirectly related to Bitcoin which may be beneficial for the privacy of Wasabi users:

- In-Wallet Block Explorer Query over Tor: [https://github.com/zkSNACKs/Meta/issues/19](https://github.com/zkSNACKs/Meta/issues/19)
- Integrated VPN Service For Oppressed Countries: [https://github.com/zkSNACKs/Meta/issues/16](https://github.com/zkSNACKs/Meta/issues/16)
- Basic PGP Client: [https://github.com/zkSNACKs/Meta/issues/13](https://github.com/zkSNACKs/Meta/issues/13)
- Add Folder Encryption [https://github.com/zkSNACKs/Meta/issues/36](https://github.com/zkSNACKs/Meta/issues/36)
- Protect Data Folders [https://github.com/zkSNACKs/Meta/issues/39](https://github.com/zkSNACKs/Meta/issues/39)

## Conclusion

We outline our ideas and future plans, to help the reader get familiar with our thinking process.
This document can be analyzed and used by anyone who would like to achieve the strongest privacy in Bitcoin today without falling prey to misinformation that is rampant in the space.

Of course, it is unavoidable that the reader will still be susceptible to the authors unconscious biases, and we apologize for that in advance.

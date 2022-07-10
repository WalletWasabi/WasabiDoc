---
{
  "title": "Future Of Wasabi Wallet",
  "description": "This document aims to describe some ideas for the future of Wasabi Wallet and to explain the reasoning behind going towards these objectives. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop.",
  "sidebarDepth": "1"
}
---

# Ideas And Plans For The Future Of Wasabi Wallet

---

Wasabi Wallet is a privacy focused, non-custodial Bitcoin wallet that is based on the [WabiSabi Framework](https://eprint.iacr.org/2021/206).

While privacy can be achieved today with Wasabi Wallet, Bitcoins mainchain costs, inconvenience and unscalability will inevitably push us to look in to Lightning Network and other 2nd layer solutions.

This document aims to describe some ideas for the future of Wasabi Wallet and to explain the reasoning behind going towards these objectives. 
Plans might change without notice and this only represents our thinking at 2021 December.

Wasabi does not support and does not plan to support other currencies in the future, it will always be bitcoin-only.

Wasabi Wallet is software, therefore it must not neglect general software quality issues.
The better software Wasabi is, the more users it will retain.

Wasabi is also a Bitcoin wallet, therefore it must improve general Bitcoin wallet related features as well.
New issues will constantly come up as new users try to use the software.

![Future of Wasabi Wallet in 2021 December](https://user-images.githubusercontent.com/51679301/147867076-bc6e74ed-13f6-455e-8fdb-72ff8e6a03d7.jpg)

https://www.youtube.com/watch?v=aQPNYH3fGAo&ab_channel=WasabiWallet

https://www.youtube.com/watch?v=3etnPUl6HhQ&t=1s&ab_channel=WasabiWallet

https://www.youtube.com/watch?v=9KULN-RkKSE&t=761s&ab_channel=WasabiWallet

[[toc]]

---

## Maintenance

One of the main priorities of Wasabi developers are the stability, performance, code quality, and user experience of Wasabi.
Great care is taken here to build a robust, powerful and simple privacy tool that will attract users, because the more users a network-reliant privacy software has, the better privacy it offers.
In Wasabi, this is most apparent during coinjoins.
The more users that participate in a round, the higher the anonymity set the coinjoin achieves, and the more frequent the rounds will be.

### Coinjoin

Even though Wasabi develoers have done a lot of work to optimize WabiSabi coinjoins privacy and efficiency, the work is still in the beginning. 

#### Send in coinjoins

Being able to send payments in coinjoin is a great blockspace efficiency and privacy improvement for both the sender and the receiver.
Change amount and maybe in some cases the payment amount should be split into standard denominations.
With Wabisabi pay to endpoint users can send each other money without the sender knowing the address of the receiver, or the receiver knowing the inputs of the sender.
This also enables anonymous transaction batching.
GroupSend: [https://github.com/zkSNACKs/Meta/issues/29](https://github.com/zkSNACKs/Meta/issues/29)

#### Round Interoperability

Because bitcoin blocks have a size limit, it is not possible to add thousands of inputs and outputs to a coinjoin transaction.
To enable exponentially groving privacy we need some of the users to remix, making the coinjoin rounds interconnected, resulting in anonymity set growth somewhere between the scales of addition and multiplication for all the rounds participants. 
If that doesn't happen enough by default, the coordinator has ways to incentivize users, for example by giving fee discounts for remixed inputs.

### Wallet

Wasabi Wallet devs should keep up with the latest changes in other Bitcoin wallets and implement the most important features to Wasabi, while also developing new features. 

#### Coin Control

Wasabi Wallet was one of the first wallets that implemented coin control, that demonstrated the UTXOs to the user, giving them a lot of options on how to control their funds. 
Later developers realized that especially new users found this inconvenient, scary and confusing, so they decided to design a new wallet that uses Automated Coin Selection, enabling them to remove the old coin control whenever there is enough private coins to make a payment.
Currently Wasabi only shows the cluster control window when the user doesn't have enough of it's balance as private.
NOTE: Developers might enable Coin Control for the advanced users in the future.

#### Simple Send Improvements

For non-coinjoined coins, improving simple send using WabiSabi is also an interesting topic.
These do not even have to disrupt the current user workflow, they can mostly "just happen" in the background.
Send in coinjoin [https://github.com/zkSNACKs/Meta/issues/6](https://github.com/zkSNACKs/Meta/issues/6), [https://github.com/nopara73/ZeroLink/issues/75](https://github.com/nopara73/ZeroLink/issues/75) has great potential.

#### P2M

Wasabi should enable users to make payments to multiple addresses in the same transaction, in a convenient and privacy preserving way. 
This would save users sats in mining fees but it comes with the cost of all recipients being able to see the other outputs in the transaction.
If the transaction doesn't have a lot of them, this might be a privacy issue. 
Some users might be ok with that but combining P2M with Send in Coinjoins would definitely make it more private for everyone.
Pay to Many: https://github.com/zkSNACKs/WalletWasabi/issues/733

#### Advanced RBF

Advanced Replace-By-Fee: [https://github.com/zkSNACKs/Meta/issues/15](https://github.com/zkSNACKs/Meta/issues/15)

#### Sweep Private Key

This could be helpful especially for the holders of physical coins, paper wallets or OpenDimes.
Sweep private key: [https://github.com/zkSNACKs/WalletWasabi/issues/486](https://github.com/zkSNACKs/WalletWasabi/issues/486).
Since Wasabi doesn't support old address formats, a single backend query could establish wallet balance only once, and then immediately sweep the money to a bech32 wallet-managed address: [https://github.com/zkSNACKs/Meta/issues/34](https://github.com/zkSNACKs/Meta/issues/34).

#### Privacy Calculation

If in every coinjoin round, more than half of the inputs are remixes, it not only results in perfect mixes for those inputs, but also results in anonymity set growth somewhere between the scales of addition and multiplication, instead of simple addition as the ZeroLink paper anticipated.
Whether the anonymity set gain is closer to addition or multiplication depends on how other users behave.
Right now, Wasabi simply counts the worst case scenario: as addition.
However, this is happening in a low Bitcoin fee environment, so this is not to be taken for granted in the future.
Additional measures are necessary.
Accurate Anonymity Set Calculation: [https://github.com/zkSNACKs/Meta/issues/35](https://github.com/zkSNACKs/Meta/issues/35)

#### Bitcoin Address Format

Currently Wasabi Wallet uses bech32 addresses (bc1q...) only but developers are working on enabling P2TR (bc1p...).

Older address formats (1... and 3...) are not checked against Golomb-Rice filters.
Instead, a single backend query could establish its balance only once, and then immediately sweep the money to a bech32 wallet-managed address: [https://github.com/zkSNACKs/Meta/issues/34](https://github.com/zkSNACKs/Meta/issues/34).

### User Experience

Improving the user friendliness of the software, the accuracy of coin awareness, and presenting what happens on the blockchain can be beneficial.

#### QR-Scanner

QR code reader works in Windows. WIP for Linux and Mac. // Link to Pindurs PRs and issues.

## Marketing

While education, content creation and marketing have little place in a technical documentation, they are still important parts of the big picture.

### Education

Education is a vitally important aspect of Bitcoin privacy in general and Wasabi specifically.
Through education, Wasabi can obtain new users.
The more Wasabi users there are, the better their privacy.
Advancing this issue can take various, often opportunistic forms.

- Add Infographics to software [https://github.com/zkSNACKs/Meta/issues/32](https://github.com/zkSNACKs/Meta/issues/32)
- Implement Bitcoin Academy [https://github.com/zkSNACKs/Meta/issues/33](https://github.com/zkSNACKs/Meta/issues/33)

### Events

Wasabi Wallet contributors are encouraged to participate and maybe even create Bitcoin and privacy related events, to make sure they stay up to date about the latest research and features.

### Contribution games

The company behind Wasabi Wallet (zkSNACKs Ltd.) have been doing contribution games for years and they have proven to be very beneficial for the contributors, for developers and for the users that end up enjoying the improved wallet.
Current ones can be found in the [blog](https://blog.wasabiwallet.io/coming-soon-contribution-games/)

### Merchandise Shop

Besides of the online Bitcoin privacy that Wasabi Wallet offers, we could spin up a merchandise store that offers shirts, mugs, hats and some of the best meat-space privacy tools like curtains and underware.

## Scaling

For now the focus has been on a robust and easy to use non-custodial Bitcoin desktop wallet with built-in coinjoins.
While Bitcoin continues to grow, we have to also spread out the privacy that WabiSabi provides to other devices, platforms and wallets.
In the paper [Anonymity Loves Company: Usability and the Network Effect](https://www.freehaven.net/anonbib/cache/usability:weis2006.pdf) the authors note:

> We show that in anonymizing networks, even if you were smart enough and had enough time to use every system perfectly, you would nevertheless be right to choose your system based in part on its usability for other users.
Therefore, Wasabi should also pay attention to fields that help to increase the number of Wasabi users, bringing greater privacy for everyone.

### Mobile Wallet

In theory, Wasabi could support smart phones (Android, iOS).
In practice, these platforms and their tools are not mature enough just yet.
The concept of network-analysis resistant smartphone wallets is not yet proven.

If we attempted to port Wasabi's code today, the wallet would use too much storage space, battery and network.
However, technology is improving quickly, thus, timing has special importance in this matter. [https://github.com/zkSNACKs/Meta/issues/9](https://github.com/zkSNACKs/Meta/issues/9)

### Localization

Since most of the world does not speak English, localization ([https://github.com/zkSNACKs/Meta/issues/22](https://github.com/zkSNACKs/Meta/issues/22)) of Wasabi is something to consider after Mobile Wallet.

### Tooling

Developers are aiming to modularize WabiSabi coinjoin to enable other projects, wallets and companies to implement it.

#### RPC

Wasabi offers a daemon and an RPC interface.
Full information can be found [here](/using-wasabi/Daemon.md) and [here](/using-wasabi/RPC.md).

#### Daemon/API

Wasabi offers a daemon and an RPC interface.
Full information can be found [here](/using-wasabi/Daemon.md) and [here](/using-wasabi/RPC.md).

#### Documentation

Working on it! 

#### WAT?

#### Tutorials

https://www.youtube.com/watch?v=bQKU2khua-8&t=442s&ab_channel=WasabiWallet

#### Companies

Wasabi developers are aiming to make revenue sharing possible with other companies. 
By them integrating WabiSabi, they receive sats everytime their users participates in a coinjoin and pays coordinator fees.

#### Integration

Developers are aiming to make revenue sharing possible with other companies. 
By them integrating WabiSabi, they receive sats everytime their users participates in a coinjoin and pays coordinator fees.
It would be also beneficial and not difficult to integrate Wasabi into existing .NET softwares directly, like [BTCPay](https://github.com/btcpayserver/btcpayserver).

#### Libraries

#### Bitcoin Full Node integration

Improve full node integration to minimize reliance to backend.

### Hardware Wallets

Wasabi uses the [Bitcoin Core Hardware Wallet Interface [HWI]](https://github.com/bitcoin-core/HWI) ([PR #1341](https://github.com/zkSNACKs/WalletWasabi/pull/1341) & [PR #1905](https://github.com/zkSNACKs/WalletWasabi/pull/1905)) however in this mode coinjoining is currently not possible. We should fix this.

## Innovation

Wasabi should continue developing and implementing new in-house features that has become industry standards during the years, like discreet mode, coin control and coinjoins.

### P2EP

Pay to EndPoint: [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/18), [https://github.com/zkSNACKs/Meta/issues/23](https://github.com/zkSNACKs/Meta/issues/23)

### Clusterfuck

Clusterfuck Wallet Strategies: [https://github.com/zkSNACKs/Meta/issues/11](https://github.com/zkSNACKs/Meta/issues/11), [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/18), [https://github.com/nopara73/ZeroLink/issues/42](https://github.com/nopara73/ZeroLink/issues/42)

### Contact list

Wouldn't it be handy to send payments without having to ask for an invoice or an address from the recipient?
With Keysend or P2EP and PGP we could have a contact list from which you can choose a recipient and your client automatically fetches a new address from that persons wallet.
Basic PGP Client: [https://github.com/zkSNACKs/Meta/issues/13](https://github.com/zkSNACKs/Meta/issues/13)

### Chat

A loss of privacy in fields that are traditionally considered to be outside the scope of a Bitcoin wallet, such as sharing addresses through unsecure chat clients pose privacy threats, which we cannot consider entirely out of Wasabi's scope. 
Wasabi should look into ways of extending the scope of its privacy protection to other, not closely Bitcoin related fields, such as end-to-end encrypted messaging.
Simple P2P, Encrypted Messaging: [https://github.com/zkSNACKs/Meta/issues/14](https://github.com/zkSNACKs/Meta/issues/14)

### Lightning Network

At this point, it might be too early to start practically leveraging LN in a privacy oriented wallet, but because blockchains don't scale, Lightning Network integration could eventually be unavoidable for any Bitcoin wallet that wants to stay in business.
This is why [zkSNACKs Ltd.](https://zksnacks.com/) has put out a [grant](https://blog.wasabiwallet.io/1-btc-ln-privacy-grant/) for designing a privacy oriented, non-custodial LN wallet.

<br>

## Extending the Scope of Privacy

Other features indirectly related to Bitcoin which may be beneficial for the privacy of Wasabi users:

- In-Wallet Block Explorer Query over Tor: [https://github.com/zkSNACKs/Meta/issues/19](https://github.com/zkSNACKs/Meta/issues/19)
- Integrated VPN Service For Oppressed Countries: [https://github.com/zkSNACKs/Meta/issues/16](https://github.com/zkSNACKs/Meta/issues/16)
- Add Folder Encryption: [https://github.com/zkSNACKs/Meta/issues/36](https://github.com/zkSNACKs/Meta/issues/36) and [https://github.com/zkSNACKs/Meta/issues/39](https://github.com/zkSNACKs/Meta/issues/39)
- Payment Codes: [https://github.com/zkSNACKs/Meta/issues/10](https://github.com/zkSNACKs/Meta/issues/10)
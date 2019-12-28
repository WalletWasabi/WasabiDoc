---
{
  "title": "Technical Overview of Wasabi Wallet",
  "description": "An in depth guide over many nuances of Wasabi, how to use it properly, and where further improvements are needed. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop.",
  "sidebarDepth": "1"
}
---

# A Technical Overview of Wasabi Wallet, Future Ideas, Plans and Strategy

## Abstract

Wasabi Wallet is a privacy focused Bitcoin wallet that is based on the [ZeroLink Fungibility Framework](https://github.com/nopara73/ZeroLink/).
While statistical privacy can be achieved today with it, the cost, convenience, intuitiveness and strength of this privacy can be greatly improved.
Wasabi must also improve its accessibility and its general Bitcoin wallet features.
Furthermore Wasabi should look into ways of extending the scope of its privacy protection to other, not closely Bitcoin related fields, such as end-to-end encrypted messaging.
Finally, Wasabi also needs to concentrate on its stability, performance, UX and code quality.
This document aims to outline a starting plan to progress towards these objectives.

## Table Of Contents

[[toc]]

---

## I. Introduction

Wasabi's main focuses are Bitcoin and privacy, thus section [IV. Bitcoin Privacy Improvements](#iv-bitcoin-privacy-improvements).
However, a loss of privacy in fields that are traditionally considered to be outside the scope of a Bitcoin wallet, such as sharing addresses through unsecure chat clients or checking transactions in a block explorer through the clearnet also pose privacy threats, ergo Wasabi cannot consider them entirely out of its scope, thus section [VII. Extending the Scope of Privacy](#vii-extending-the-scope-of-privacy).
In the paper [Anonymity Loves Company: Usability and the Network Effect](https://www.freehaven.net/anonbib/cache/usability:weis2006.pdf) the authors note: 

> We show that in anonymizing networks, even if you were smart enough and had enough time to use every system perfectly, you would nevertheless be right to choose your system based in part on its usability for other users.

Therefore Wasabi should also pay attention to fields that help to increase the number of Wasabi users, bringing greater privacy for everyone, thus sections [III. Education](#iii-education) and [VI. Accessibility](#vi-accessibility).

Furthermore, Wasabi is software, therefore it must not neglect general software quality issues, thus section [II. Stability, Performance, UX, Code Quality](#ii-stability-performance-ux-code-quality).
The better software Wasabi is, the more users it will retain.

Wasabi is also a Bitcoin wallet, therefore it must improve general Bitcoin wallet related features as well, thus section [V. General Wallet Features](#v-general-wallet-features).

Finally, there are development opportunities, where the developers of Wasabi recognize that they could easily add some unique wallet features that no other wallets have, like in-wallet multi-wallet support or copypaste malware defense, thus section [VIII. Unique Wallet Features](#viii-unique-wallet-features).

Note that the developers of Wasabi are currently occupied by section [II. Stability, Performance, UX, Code Quality](#ii-stability-performance-ux-code-quality).
This enjoys the highest priority. New issues will constantly come up as new users try to use the software.
At this point it is unclear if Wasabi will ever have the resources to tackle other sections in this document.

### Wasabi Wallet Under the Hood

Wasabi is an [open-source](https://github.com/zkSNACKs/WalletWasabi/), desktop Bitcoin wallet, working on Windows, Linux and macOS, written in [.NET Core](https://en.wikipedia.org/wiki/.NET_Core) (C#), which is cross platform and open source .NET.
Wasabi uses [NBitcoin](https://github.com/MetacoSA/NBitcoin/) as its Bitcoin library, to which Wasabi developers are frequent contributors: [@lontivero](https://github.com/lontivero), [@nopara73](https://github.com/nopara73).
Wasabi uses [Avalonia](https://github.com/AvaloniaUI/Avalonia/) library as its UI framework where Wasabi developer [@danwalmsley](https://github.com/danwalmsley) is a maintainer.
Wasabi does not support and does not plan to support other currencies in the future.

Let's look at what is going on under the hood for Wasabi, what design decisions and tradeoffs the developers made, so we can later understand where it can be improved.

After setting up Wasabi and generating a wallet, Wasabi welcomes the user with a load wallet screen.
Unlike other wallets, Wasabi has a convenient way to use multiple wallets.
Privacy centric users may be already used to achieve coin separation this way.
However Wasabi provides a convenient in-wallet coin separation interface too, more information will be provided about that later on.
Since coin separation can be easily achieved without multiple wallet files, initially the developers did not plan for such a wallet management system, our UX design choices naturally lead us down this road.

![](/WalletManagerLoadWallet.png)

Wasabi has a status bar that shows meta information about the state of the wallet.
To better understand the architecture of the wallet it is helpful to go through them.

The "Tor" label shows the status of the Tor daemon.
Tor is an anonymity network which Wasabi ships with by default and runs in the background.
The user can also opt to use their own Tor instance. All Internet traffic goes through Tor and by default all this traffic stays inside the onion network.
Exit nodes are only involved in fallback scenarios.
For example if the Tor hidden service of the backend becomes unavailable for the user, the wallet falls back communicating with the backend's clearnet endpoint, still over Tor.
Wasabi also frequently utilizes multiple Tor streams where applicable.
For example, registration of CoinJoin inputs and outputs is done through different Tor streams to avoid linking.

![](/StatusBarTorRunning.png)

Wasabi's backend is used to facilitate [Chaumian CoinJoin](https://github.com/nopara73/ZeroLink#ii-chaumian-coinjoin) coordination between the mixing participants and to serve Golomb-Rice filters to the clients, similarly to [BIP 158](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients).
More information will be provided about the difference soon.
Before that, it is worth pointing out that the design choice of building a light wallet was made because such a wallet can attract orders of magnitude more users compared to a wallet on top of a full node, and more users means larger and faster CoinJoins.
Historically, all light wallets were vulnerable to some kind of network observer due to unprivate utxo fetching.
A few years ago, the only type of wallet that wasn't vulnerable was a full node, like Bitcoin Core.
The first iteration of Wasabi was [HiddenWallet](https://github.com/zkSNACKs/WalletWasabi/tree/hiddenwallet-v0.6), which was a full-block SPV wallet that aimed to leverage usability without compromising privacy through the omission of initial blockchain downloading compared to a full node.
In theory, it was a light wallet.
In practice, it was hard to compete with Bitcoin Core's micro-optimizations and it was still painful to wait for wallet synchronization every time the wallet was opened.
[Read more about network level Bitcoin wallet privacy here.](/using-wasabi/NetworkLevelPrivacy.md)

![](/StatusBarBackendConnected.png)

Back to Wasabi.
After loading the wallet, the user can generate a receive address.
Some important design choices were made here.
First, Wasabi had to be a Segregated Witness only wallet, so the registration of unconfirmed CoinJoin outputs into a new CoinJoin round is done to prevent malleability attacks.
However, the developers of Wasabi decided to make the wallet native segwit (bech32) only, not supporting wrapped segwit.
This way, the backend server can leverage this and only generate filters regarding bech32 addresses.
This makes Wasabi's filter size a few megabytes today, instead of >4GB.
At first glance, this may be seen as hazardous to privacy, however Wasabi user utxos can be identified as Wasabi utxos by the huge CoinJoins that only Wasabi does anyway, so minimal to no additional privacy loss happens there.
In the future, as more and more wallets adopt bech32, Wasabi developers will have to look at how to scale the performance and network usage of the wallet.
Failing that, Wasabi's initial sync will slow down.

The [Bitcoin Wiki](https://en.bitcoin.it/wiki/Bech32_adoption#Software_Wallets) and [When Segwit](https://whensegwit.com/#who) show the wallets that can be used to send to and receive from Wasabi.


![](/Receive.png)

Wasabi also maintains a connection to the Bitcoin P2P network over Tor.
After Wasabi receives the filters from the backend, it can download the required blocks (there are false positives, too) one block from one peer.
Wasabi then stores the block in its entirety on disk so it won't fetch it again.
Storing blocks on the disk may take up too much space when the wallet is used extensively.
There is room for improvement there as well.
Wasabi only connects to onion peers, which facilitates end to end encryption, and it connects to them on a different Tor streams.
After every block download Wasabi disconnects the peer.

Furthermore, if you have a full node running in the background Wasabi won't download blocks from peers, but rather will use the full node to fetch the block from instead.

![](/StatusBarPeers.png)

Wasabi receives incoming transactions from the nodes it is connected to.
This is, while privacy preserving, a relatively insecure way of handling this, and should be improved in the future.
Generally, unconfirmed transactions are considered to be insecure regardless.

![](/StatusBarReady.png)

Unlike in other Bitcoin wallets, generating a label for each Bitcoin address is not optional, but required.
That is because Wasabi has an intra-wallet blockchain analysis tool built into it, which tries to cluster utxos (Wasabi calls them coins).
Based on these clusters, the user can make an educated decision on which coins to merge.

![](/ReceiveLabelingRequired.png)

Wasabi also has a History tab like any other Bitcoin wallet.

![](/History.png)

Unlike other Bitcoin wallets, the user cannot spend from Wasabi without selecting coins, since ["Coin Control Is Must Learn If You Care About Your Privacy In Bitcoin"](https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2), at least for today.
The label field of the Send tab is also compulsory.

![](/Send.png)

By clicking on the Max button, one can spend all selected coins. Spending whole coins is beneficial to privacy.
The Bitcoin fee rates are fetched from the backend server, the source of these fees are Bitcoin Core's `estimatesmartfee`'s `CONSERVATIVE` output.
Every fee query happens over Tor with a new Tor identity.
When clicking send, the wallet will broadcast the transaction to a random peer, then disconnects the peer.
This is currently [the optimal way to broadcast transactions from a privacy point of view,](/using-wasabi/NetworkLevelPrivacy.md) but a more ideal way would be to implement the [Dandelion](/using-wasabi/BIPs.md#bip-156-dandelion-privacy-enhancing-routing) protocol for transaction broadcasting when the Bitcoin network adopts it.

![](/SendAmountFeePassword.png)

Coins in Wasabi have Privacy and History properties.
The anonymity set is just a momentary estimation, however, by examining the mixes and other people's transactions we will be able to show accurate values.
The History is the calculated clusters from the labels based on typical Blockchain analysis heuristics. For example, if the user joins together a "foo" labeled coin with a "bar" labeled coin at sending, then the change coin history will show "change of (foo), change of (bar)". From this, users are able to make educated decisions as to which coins not to join together at any cost. Human input is invaluable.

![](/SendAnonset.png)

Wasabi has a CoinJoin tab as well, its use is straightforward.
The user queues their coins for CoinJoin and waits for others to join the mix.

![](/CoinJoin.png)

If the user does not wish to proceed, they can dequeue their coins.

![](/CoinJoinStatus.png)

After a mix has successfully executed, the resulting CoinJoin transaction will look like the [following real example](https://blockstream.info/tx/a0855875fd3d19522568ad673e4b52e11691d837021d74eef0d177f9e0950bf2):

![](/TXCoinJoin.png)

Wasabi also has a Tor website where one can see real time statistics about the mixes: [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/)

To this day, Wasabi's CoinJoins have created >22941 BTC outputs with equal value.

## II. Stability, Performance, UX, Code Quality

As was discussed above, the main priority of Wasabi developers is currently the stability, performance, code quality and user experience of Wasabi.
Great care must be taken here because the more users a network reliant privacy software has, the better privacy it offers.
The more users there are, the better the software is.
In Wasabi, this is most apparent during CoinJoins.
The more users participating in a round, the higher the anonymity set the CoinJoin achieves and the more frequent the rounds will be.
In our calculations, if Wasabi would acquire the volume of the most popular Bitcoin mixers, Wasabi could provide a 100 anonymity set round with the denomination of 0.1 BTC every 3 to 5 minutes.
This section consists of many small issues, waiting to be solved one-by-one.
Since solving these issues is often more effective than discussing them, they won't be discussed in this document.

## III. Education

While education, content creation and marketing have little place in a technical document, they are still important parts of the big picture.
Through education, Wasabi can obtain new users.
The more Wasabi users there are, the better their privacy.
Advancing this issue can take various, often opportunistic forms.
A few ideas:

- Add Infographics to software [https://github.com/zkSNACKs/Meta/issues/32](https://github.com/zkSNACKs/Meta/issues/32)
- Implement Bitcoin Academy [https://github.com/zkSNACKs/Meta/issues/33](https://github.com/zkSNACKs/Meta/issues/33)

## IV. Bitcoin Privacy Improvements

At the Blockchain level Wasabi currently helps its users achieve the desired level of privacy in three main ways: mixing, coin control and intra-wallet clustering.

Coin mixing happens through Chaumian CoinJoin, as described in the [ZeroLink](https://github.com/nopara73/ZeroLink/) protocol.
In a nutshell, Wasabi users register their transaction inputs and desired outputs with a coordinator, and the cooperation of these users results in a large CoinJoin transaction.
The coordinator cannot steal from, nor deanonymize the users.
However, with ZeroLink, in order to statistically avoid post-mix deanonymization, coins must not be joined together.
This, however, is unfeasible in practice.
Thus, various strategies are needed to mitigate this deanonymization risk.

One such strategy is Wasabi's current compulsory coin control feature.
It helps the users to not join coins together and spend whole coins, but it does not force them, so it is not perfect.

Another is Wasabi's intra-wallet clustering system, where the users must use required labels.
This helps the user to make an educated decision if they must join inputs together at send.

Another thing that the author of ZeroLink did not anticipate was the frequent remixing of already-mixed coins.
In every round, more than half of the inputs are remixes, which not only results in perfect mixes for those inputs, but also results in anonymity set growth somewhere between the scales of addition and multiplication, instead of simple addition as the ZeroLink paper anticipated.
Whether the anonymity set gain is closer to addition or multiplication depends on how other users behave.
Right now, Wasabi simply counts the worst case scenario: so it shows the user addition.
As of today, mixes are so interconnected that not even extensive input joining can deanonymize the users.
However, this is happening in a low Bitcoin fee environment, so this is not to be taken for granted in the future.
Additional measures are necessary.

The ideas described in this section are just ideas.
Many of them are not compatible with each other, not proven or require further research.

It is also worth pointing out that if [Confidential Transactions](https://people.xiph.org/~greg/confidential_values.txt) somehow make their way into Bitcoin, there would be no need for most of the improvements described in this section.

### Mixing Improvements

#### Unequal Input Mixing

One of the most exciting advancements could be achieved by improving the mixing itself.
The intuition behind Unequal Input Mixing, ([https://github.com/zkSNACKs/Meta/issues/4](https://github.com/zkSNACKs/Meta/issues/4), [https://github.com/nopara73/ZeroLink/issues/74](https://github.com/nopara73/ZeroLink/issues/74)) that could replace today's fixed denomination mixing, is clear, and its benefits are huge.
However this requires further research.

The currently identified advantages of unequal input mixing compared to fixed denomination mixing are discussed briefly below, using the following notation:

```
UIM - Unequal Input Mixing
FDM - Fixed Denomination Mixing
```

1. UIM's main goal is to optimize the cost/anonymity set.
2. In FDM, those who don't have enough money to mix will not be able to mix.
In UIM, this is no longer an issue.
3. In FDM, peers often join together their utxos in order to reach the desired denomination.
This exposes common ownership.
There is no such an issue in UIM.
Because of this, joining utxos together after the mix is no longer such a big deal.
4. In UIM, mixing can be done over and over again until the desired anonymity set is reached.
In FDM, mixing cannot be repeated, because the mixed output of the mix will never reach the sufficient input level of the next mix (due to network fees).
In FDM, if the user would decide to participate with an already mixed coin, they would have to add another input in order to meet the mix requirements, which exposes common ownership.
5. People with lot of money would get matched together and would not have to wait weeks/months to mix everything out.

#### Mix to Self vs Mixing to Others

Mix to Others ([https://github.com/zkSNACKs/Meta/issues/6](https://github.com/zkSNACKs/Meta/issues/6), [https://github.com/nopara73/ZeroLink/issues/75](https://github.com/nopara73/ZeroLink/issues/75)) also has great potential, since it could completely replace Simple Send.
It is, however, dubious whether there will ever be enough liquidity for this.

### Simple Send Improvements

Improving simple send using current Bitcoin anonymity techniques is also an interesting topic.
These do not even have to disrupt the current user workflow, they can mostly "just happen" in the background.
Some additional thoughts and details on this section can be found [here](https://github.com/zkSNACKs/Meta/issues/23#issuecomment-430514345).

- JoinMarket: [https://github.com/zkSNACKs/Meta/issues/5](https://github.com/zkSNACKs/Meta/issues/5)
- Friend CoinJoin Network: [https://github.com/zkSNACKs/Meta/issues/17](https://github.com/zkSNACKs/Meta/issues/17)
- Merge Avoidance with [BIP 47](/using-wasabi/BIPs.md#bip-47-reusable-payment-codes-for-hierarchical-deterministic-wallets) Payment Codes: [https://github.com/zkSNACKs/Meta/issues/10](https://github.com/zkSNACKs/Meta/issues/10)
- Clusterfuck Wallet Strategies: [https://github.com/zkSNACKs/Meta/issues/11](https://github.com/zkSNACKs/Meta/issues/11), [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/1), [https://github.com/nopara73/ZeroLink/issues/42](https://github.com/nopara73/ZeroLink/issues/42), [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/18)
- Pay to EndPoint: [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/18), [https://github.com/zkSNACKs/Meta/issues/18](https://github.com/zkSNACKs/Meta/issues/18), [https://github.com/zkSNACKs/Meta/issues/23](https://github.com/zkSNACKs/Meta/issues/23)
- GroupSend: [https://github.com/zkSNACKs/WalletWasabi/issues/760](https://github.com/zkSNACKs/WalletWasabi/issues/760)

### Coin Control and Privacy Feedback Improvements

Improving the user friendliness, the accuracy of coin awareness and what happens on the blockchain can be also beneficial.

- New Type of Bitcoin UI: [https://github.com/zkSNACKs/Meta/issues/8](https://github.com/zkSNACKs/Meta/issues/8)
- Input Joining Avoidance Strategy by Killing Kittens: [https://github.com/nopara73/ZeroLink/issues/65](https://github.com/nopara73/ZeroLink/issues/65)
- Improve History of a Coin: [https://github.com/zkSNACKs/WalletWasabi/issues/612](https://github.com/zkSNACKs/WalletWasabi/issues/612)
- Accurate Anonymity Set Calculation: [https://github.com/zkSNACKs/WalletWasabi/issues/728](https://github.com/zkSNACKs/WalletWasabi/issues/728)
- Interactive Privacy Suggestions when Spending - [https://github.com/zkSNACKs/WalletWasabi/issues/729](https://github.com/zkSNACKs/WalletWasabi/issues/729)

### Lightning Network Leverage

At this point, it is too early to start leveraging LN in a privacy oriented wallet.
However, if Bitcoin is successful in the future, there will be a need to think about these questions, since [blockchains don't scale.](https://medium.com/@nopara73/how-to-scale-a-blockchain-a997dcb12775)

- CoinJoinXT
- Open Lightning Channels with ZeroLink in Wasabi - [https://github.com/zkSNACKs/Meta/issues/3](https://github.com/zkSNACKs/Meta/issues/3), [https://github.com/nopara73/ZeroLink/issues/58](https://github.com/nopara73/ZeroLink/issues/58)

## V. General Wallet Features

Wasabi today has all the features a Bitcoin wallet needs that are not related to privacy. There may be other useful features to add, however.
- Pay to Many: [https://github.com/zkSNACKs/WalletWasabi/issues/733](https://github.com/zkSNACKs/WalletWasabi/issues/733)
- Advanced RBF (ethical concerns here): [https://github.com/zkSNACKs/Meta/issues/15](https://github.com/zkSNACKs/Meta/issues/15)
- Lightning Network integration eventually will be unavoidable for any Bitcoin wallet if they want to stay in business, since blockchains don't scale: [https://github.com/zkSNACKs/Meta/issues/2](https://github.com/zkSNACKs/Meta/issues/2)
- Sweep Private Key: [https://github.com/zkSNACKs/WalletWasabi/issues/486](https://github.com/zkSNACKs/WalletWasabi/issues/486)
- Paper Wallet Generation: [https://github.com/zkSNACKs/WalletWasabi/issues/727](https://github.com/zkSNACKs/WalletWasabi/issues/727)
- Read QR Code (currently it only shows it): [https://github.com/zkSNACKs/WalletWasabi/issues/731](https://github.com/zkSNACKs/WalletWasabi/issues/731)
- Bitcoin URL Support: [https://github.com/zkSNACKs/WalletWasabi/issues/732](https://github.com/zkSNACKs/WalletWasabi/issues/732)

## VI. Accessibility

The more users use the wallet the more privacy it can provide.

### Localization

Since most of the world does not speak English, localization ([https://github.com/zkSNACKs/Meta/issues/22](https://github.com/zkSNACKs/Meta/issues/22)) of Wasabi is something to consider.

### Traditional Bitcoin Addresses vs Bech32 Adoption

Wasabi wallet uses bech32 addresses only.
These addresses are not fully supported by the whole Bitcoin ecosystem.
It would be beneficial to make pull requests to open source softwares to support sending money to bech32 addresses: [https://github.com/zkSNACKs/WalletWasabi/issues/951](https://github.com/zkSNACKs/WalletWasabi/issues/951)

Wasabi, in theory could use P2SH over P2WPKH, wrapped segwit addresses, ([https://github.com/zkSNACKs/Meta/issues/7](https://github.com/zkSNACKs/Meta/issues/7)) since the ability to spend to bech32 addresses is not quite there yet.
On the other hand, this could be considered a backward-looking short-sighted improvement.

A way of facilitating funds to make their way into the wallet would be to introduce transitionary P2WPKH over P2SH addresses those would not be checked against Golomb-Rice filters, but rather a single backend query would establish its balance only once, then immediately sweeping the money to a bech32 wallet-managed address: [https://github.com/zkSNACKs/Meta/issues/34](https://github.com/zkSNACKs/Meta/issues/34)

### Smartphone

In theory, Wasabi could support smart phones (Android, iOS).
In practice, these platforms and their tools are not mature enough just yet.
The concept of network analysis resistant smartphone wallets is not yet proven.
If we would try to port Wasabi's code today, the wallet would use too much storage space, battery and network.
However, technology is improving quickly, thus, timing has special importance in this matter. [https://github.com/zkSNACKs/Meta/issues/9](https://github.com/zkSNACKs/Meta/issues/9)

### Web Wallet

The question of a web-wallet is also something to think about.
However, it may not be possible to build a network analysis resistant web wallet, nor to build a secure web wallet in general.
Nevertheless [this question](https://github.com/zkSNACKs/Meta/issues/20) deserves more thought.

### Hardware Wallet

Wasabi has [hardware wallet integration](https://github.com/zkSNACKs/WalletWasabi/pull/134) however in this mode CoinJoining is not possible.

### Bitcoin Core

Some of the users use full nodes, mainly Bitcoin Core as their personal wallet, because this is the ultimate way of minimizing trust.
Wasabi could ship with a bitcoind, much the same way as it does with Tor.

### Daemon/API

Another way to improve the software is to let developers play with it through a daemon (RPC?) process.
This however may lead to enterprise adoption, which is good for liquidity, but there is a risk of centralization and thus Sybil attacks.
May become more likely.
For example an exchange could decide to add CoinJoins and if they acquire 50% of liquidity in Wasabi, this way many of the wallet assumptions about anonymity sets would become less accurate. [https://github.com/zkSNACKs/Meta/issues/12](https://github.com/zkSNACKs/Meta/issues/12)
Wasabi already has a public web API.
However developers should not build wallets on top of it, since breaking changes must be expected.
Misc things like Twitter bots are fine: [http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/swagger/index.html](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/swagger/index.html) ([https://wasabiwallet.io/swagger/index.html](https://wasabiwallet.io/swagger/index.html))

### .NET Ecosystem

Wasabi could roll out a NuGet package, enabling developers to build applications with Wasabi.
It would be also beneficial and not difficult to integrate Wasabi into existing .NET softwares directly, like [BTCPay](https://github.com/btcpayserver/btcpayserver).

## VII. Extending the Scope of Privacy

Other non closely Bitcoin related features may be beneficial for the privacy of Wasabi users.

- In-Wallet Block Explorer Query over Tor: [https://github.com/zkSNACKs/Meta/issues/19](https://github.com/zkSNACKs/Meta/issues/19)
- Integrated VPN Service For Oppressed Countries: [https://github.com/zkSNACKs/Meta/issues/16](https://github.com/zkSNACKs/Meta/issues/16)
- Basic PGP Client: [https://github.com/zkSNACKs/Meta/issues/13](https://github.com/zkSNACKs/Meta/issues/13)
- Simple P2P, Encrypted Messaging: [https://github.com/zkSNACKs/Meta/issues/14](https://github.com/zkSNACKs/Meta/issues/14)
- Add Folder Encryption [https://github.com/zkSNACKs/Meta/issues/36](https://github.com/zkSNACKs/Meta/issues/36)
- Protect Data Folders [https://github.com/zkSNACKs/Meta/issues/39](https://github.com/zkSNACKs/Meta/issues/39)

## VIII. Unique Wallet Features

Unique wallet features are a set of unorganized ideas that are not closely related to privacy.
These are by no means necessary for Wasabi, but what fun is there in programming if the developers are not allowed to play with their creativity once in a while?

- Clipboard Hijacker Malware Defense: [https://github.com/zkSNACKs/WalletWasabi/issues/496](https://github.com/zkSNACKs/WalletWasabi/issues/496), [https://github.com/zkSNACKs/WalletWasabi/pull/697](https://github.com/zkSNACKs/WalletWasabi/pull/697)

## IX. Conclusion

In this document, we gave a comprehensive overview of Wasabi Wallet.
Unlike the creators of many other products, we deliberately decided to honestly and extensively describe and discuss Wasabi's shortcomings, tradeoffs and design decisions.
We outlined our ideas and our future technical plans and helped the reader get familiar with our thinking process.
This document can be analyzed and used by anyone who would like to achieve the strongest privacy in Bitcoin today without falling prey to misinformation that is rampant in the space.
Of course, it is unavoidable that the reader will still be susceptible to the authors unconscious biases, and we apologize for that in advance.

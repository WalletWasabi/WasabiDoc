---
{
  "title": "Privacy and Wasabi",
  "description": "Explanations of common words used in Wasabi and regarding Bitcoin privacy with links to the docs for more details. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

## Privacy and Wasabi

:::details
### #twoweeks

The #twoweeks is a fun inside joke often used in the Wasabi documentation and, more generally, in the Internet community.
In the case of Wasabi documentation, it usually indicates the arrival of a new function or update, to which the future date is still uncertain.

Eg. "Lightning Network is coming to Wasabi in #twoweeks"
:::

:::details
### Address Reuse

Address reuse refers to the use of the same address for multiple transactions, this is very bad for privacy.
Read more: [Address reuse](/why-wasabi/AddressReuse.md)
:::

:::details
### Anonymity Set (anonset)

The anonymity set is effectively the size of the group you are hiding in during a CoinJoin.
It's the quantity of equal value outputs of one CoinJoin transaction.
Read more: [What is the anonymity set?](/FAQ/FAQ-UseWasabi.md#what-is-the-anonymity-set)
:::

:::details
### Block filters

A filter representing a compact list of addresses in one block.
Wasabi checks locally if any block filter contains transactions with addresses of the wallet.
No public keys are sent to any third party server, thus it is very private.
Read more: [BIP 158: Compact Block Filters for Light Clients](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki)
:::

:::details
### Blockchain Analysis

Blockchain analysis is used by transaction surveillance companies to follow the transaction history of coins.
Techniques like the common-input-ownership heuristic or change detection are used to create a cluster of transactions belonging to one user.
Read more: [Blockchain Analysis](/why-wasabi/TransactionSurveillanceCompanies.md#blockchain-analysis)
:::

:::details
### Bloom Filter

A filter used primarily by SPV clients to request only block headers and merkle proofs of a given transaction from full nodes.
This is very bad for privacy, as third party servers learn about which addresses you are interested in.
Read more: [BIP 37: Connection Bloom Filtering](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)
:::

:::details
### Change Address Detection

Many Bitcoin transactions have change outputs.
It would be a serious privacy leak if the change address can be somehow found, as it would link the ownership of the (now spent) inputs with a new output.
Read more: [Change coins](/using-wasabi/ChangeCoins.md)
:::

:::details
### Chaumian CoinJoin

A Chaumian CoinJoin is a special type of CoinJoin that utilizes Chaumian [or Schnorr] blind signatures to prevent the central coordinator from spying on the linkage between inputs and outputs.
Read more: [Use of blind signatures in CoinJoin](/using-wasabi/CoinJoin.md#zerolink-protocol-step-by-step)
:::

:::details
### Cluster

Which entities know about which coins.
For example, this coin belongs to a cluster that is known by a KYC exchange and Alice.
Read more: [What is the cluster history?](/FAQ/FAQ-UseWasabi.md#what-is-the-cluster-history)
:::

:::details
### Coin Control

Coin control is a must learn if you care about your privacy in Bitcoin.
As can be understood from the name, this is a proper control of one's coins.
Read more: [Coin Control Best Practices](/FAQ/FAQ-UseWasabi.md#coin-control-best-practices)
:::

:::details
### CoinJoin (CJ)

CoinJoin is a trustless method for combining multiple Bitcoin payments from multiple spenders into a single transaction to make it more difficult for outside parties to determine which spender paid which recipient.
Read more: [What is a CoinJoin?](/FAQ/FAQ-Introduction.md#what-is-a-coinjoin)
:::

:::details
### CoinJoined coins

Coins that have successfully participated in a CoinJoin (with the exception of the change) and thus lose their association to a previous cluster.
Read more: [What is the privacy I get after mixing with Wasabi?](/FAQ/FAQ-Introduction.md#what-is-the-privacy-i-get-after-mixing-with-wasabi)
:::

:::details
### Common-Input-Ownership heuristic

This is a heuristic or assumption which says that if a transaction has more than one input then all those inputs are owned by the same entity.
:::

:::details
### Coordinator

The coordinator is a server which creates CoinJoins and accepts UTXOs in the mix.
Read more: [How does my wallet communicate with the Wasabi coordinator server?](/FAQ/FAQ-UseWasabi.md#how-does-my-wallet-communicate-with-the-wasabi-coordinator-server)
:::

:::details
### Daemon

A daemon is a command line interface to run Wasabi without the GUI (Graphical User Interface).
Read more: [Headless Wasabi Daemon](/using-wasabi/Daemon.md)
:::

:::details
### Dust

Dust is an UTXO that is uneconomical to spend.
Also, small portions of bitcoin can lead to serious consequences for one's privacy, for example the so called `forced address reuse attack`.
Read more: [What is the dust threshold](/FAQ/FAQ-UseWasabi.html#what-is-the-dust-threshold)
:::

:::details
### Know Your Customer (KYC)

KYC (Know Your Customer) is the process of a business being forced to identify and verify the identity of its clients, and to share this information with a government.
The term is also used to refer to the bank regulation which governs these activities.
Read more: [AML/KYC Information](/why-wasabi/TransactionSurveillanceCompanies.md#aml-kyc-information)
:::

:::details
### Privacy Mode

Privacy Mode is a Wasabi feature that hides sensitive and critical information on the wallet itself, which is useful for screenshots.
Read more: [Privacy Mode](/using-wasabi/PrivacyMode.md)
:::

:::details
### Observers

A way to track who knows about the ownership of your coins.
Not to be confused with a description of a transaction.
Read more: [The importance of labeling](/using-wasabi/Receive.md#the-importance-of-labeling)
:::

:::details
### Pay to EndPoint (P2EP)

Pay to EndPoint is when the receiver is reachable over the internet and the sender communicates with the receiver to coordinate a more advanced transaction.
The Tor onion service, IP address or domain of the receiver is included in a BIP21 Bitcoin URI payment link.
:::

:::details
### Peers

Peers in our documentation refers mainly to Bitcoin and Wasabi Wallet users, but it also means people.
They are literally peers in the network, or in the CoinJoin.
:::

:::details
### RPC

RPC, or Remote Procedure Call, is an interface to interact with Wasabi Wallet programmatically.
Read more: [RPC Interface](/using-wasabi/RPC.md)
:::

:::details
### Shield (or anonymity set shield)

We often talk about
<img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" />,
<img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" />,
<img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" /> and
<img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" />
shields... but what are they?
Coins in your wallet have shields.

Each shield represents the [Anonymity Set](/FAQ/FAQ-UseWasabi.md#what-is-the-anonymity-set) level of a given coin.
By default the anonymity set levels are `2`, `21` and `50`, however, this can be [changed in the settings](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target).

Essentially, when we talk about shields, we mean a specific privacy level set by the user.
:::

:::details
### Taint

Taint is equivalent to the 'trail' that a Bitcoin transaction leaves during the course of its journey.
The taint analysis of a Bitcoin transaction evaluates the association between an address involved in the chain of transactions.
Read more: [Blockchain Analysis](/why-wasabi/TransactionSurveillanceCompanies.md#blockchain-analysis)
:::

:::details
### The Onion Router (Tor)

Tor (The Onion Router) is free and open-source software for enabling anonymous communication.
It is widely used by Wasabi.
Read more: [How does Tor protect my network level privacy?](/FAQ/FAQ-GeneralBitcoinPrivacy.md#how-does-tor-protect-my-network-level-privacy)
:::

:::details
### Transaction Surveillance Company

A transaction surveillance company is one which attempts to spy on all Bitcoin users.
Their business model is usually to sell the data to any government, corporation or individual willing to pay for their services.
Read more: [Transaction Surveillance Companies](/why-wasabi/TransactionSurveillanceCompanies.md)
:::

:::details
### Tumbling / Tumbler

Tumbling is a synonym of 'Mixing'.
Similarly, Tumbler is the synonym of 'Mixer'.
:::

:::details
### Wallet fingerprinting

A careful analyst sometimes deduces which software created a certain transaction, because many different wallet softwares don't always create transactions in exactly the same way.
Read more: [Technical Overview of Wasabi Wallet](/building-wasabi/TechnicalOverview.md)
:::

:::details
### Wasabika

Wasabikas are builders, users and supporters of Wasabi in general.
:::

:::details
### XPUB (Extended Public Key)

An xpub, also know as Extended Public Key, is a part of BIP-32 that will allow you to observe your wallet without the private key (xpriv).
Read more: [Wasabi's Solution](/why-wasabi/AddressReuse.html#wasabi-s-solution)
:::

:::details
### ZeroLink

ZeroLink is a framework to holistically design a privacy and fungibility setup for Bitcoin.
This encompasses more than just a single CoinJoin transaction, but also includes network level privacy defense against third party spying.

Read more: [ZeroLink: the Bitcoin Fungibility Framework](/using-wasabi/CoinJoin.md#zerolink-protocol-step-by-step)
:::

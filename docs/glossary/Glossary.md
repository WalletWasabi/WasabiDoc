---
{
  "title": "Glossary",
  "description": "Explanations of common words used in Wasabi and regarding Bitcoin privacy with links to the docs for more details. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Glossary

This glossary contains the explanations of common words used in Wasabi and regarding Bitcoin privacy in general.
Every item contains a link to the respective full document for more details.

## Bitcoin in general

:::details
### Bitcoin Improvement Proposal (BIP)

Bitcoin Improvement Proposal.
A design document for introducing features or information to Bitcoin.
Read more: [Wasabi Supported BIPs](/using-wasabi/BIPs.md)
:::

:::details
### Cold Storage

Refers to keeping a reserve of important Bitcoin secrets offline.
Cold storage is achieved when Bitcoin private keys are created and stored in a secure offline environment.
Cold storage is important for anyone with bitcoin holdings.
Online computers are vulnerable to hackers and should not be used to store a significant amount of bitcoin.
Read more: [Cold Wasabi Protocol](/using-wasabi/ColdWasabi.md)
:::

:::details
### Fees

The sender of a transaction includes a fee to the network for processing the requested transaction.
Most transactions require a minimum fee.
Read more: [What fee should I select?](/FAQ/FAQ-UseWasabi.md#what-fee-should-i-select)
:::

:::details
### Fungibility

Fungibility is a desirable property of Bitcoin UTXOs that are indistinguishable from each other.
Read more: [Transaction surveillance companies attempting to destroy fungibility](/why-wasabi/TransactionSurveillanceCompanies.md#attempt-to-destroy-fungibility)
:::

:::details
### Hardware Wallet (HW)
A hardware wallet is a special type of Bitcoin wallet which generates and stores the user's private keys in a tailor made hardware device.
Read more: [Hardware Wallet FAQs](/FAQ/FAQ-UseWasabi.md#hardware-wallet)
:::

:::details
### Lightning Network (LN)

Lightning Network is a proposed implementation of Hashed Timelock Contracts (HTLCs) with bi-directional payment channels which allows payments to be securely routed across multiple peer-to-peer payment channels.
This allows the formation of a network where any peer on the network can pay any other peer even if they don't directly have a channel open between each other.
Read more: [Use Lightning](/why-wasabi/10Commandments.md#_10-use-lightning)
:::

:::details
### Mempool

The Bitcoin Mempool (memory pool) is a collection of all transaction data in a block that have been verified by Bitcoin nodes, but are not yet confirmed.
Read more: [How does Wasabi know of incoming transactions to the mempool?](/FAQ/FAQ-UseWasabi.html#how-does-wasabi-know-of-incoming-transactions-to-the-mempool)
:::

:::details
### Multisignature (multisig)

Multisignature (m-of-n multisig) refers to requiring more than one key to authorize a Bitcoin transaction.
Only with `m` signatures of `n` public keys can the bitcoin be spent.
Read more: [Can I generate a multi signature script?](/FAQ/FAQ-UseWasabi.md#can-i-generate-a-multi-signature-script)
:::

:::details
### Output

Output, transaction output, or TxOut is an output in a transaction which contains two fields: a value field for transferring zero or more satoshis and a pubkey script for indicating what conditions must be fulfilled for those satoshis to be further spent.
:::

:::details
### Partially Signed Bitcoin Transaction (PSBT)

PSBT is a binary transaction format which contains the information necessary for a signer to produce signatures for the transaction and holds the signatures for an input while the input does not have a complete set of signatures.
The signer can be offline as all necessary information will be provided in the transaction.
Read more: [BIP 174 Partially Signed Bitcoin Transaction Format](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
:::

:::details
### Pay-to-Witness-Public-Key-Hash (P2WPKH)

The signature of a P2WPKH contains the same information as a Pay-to-Public-Key-Hash (P2PKH) spending, but is located in the witness field instead of the scriptSig field.
The scriptPubKey is also modified.
Read more: [BIP 84 derivation scheme for P2WPKH based accounts](/using-wasabi/BIPs.md#bip-84-derivation-scheme-for-p2wpkh-based-accounts)
:::

:::details
### Replace by Fee (RBF)

Replacing one version of an unconfirmed transaction with a different version of the transaction that pays a higher transaction fee.
:::

:::details
### satoshi (sat)

A satoshi is the smallest denomination of bitcoin that can be recorded on the blockchain.
It is the equivalent of 0.00000001 bitcoin and is named after the creator of Bitcoin, Satoshi Nakamoto.
Read more: [How can I display the fee in satoshi per byte?](/FAQ/FAQ-UseWasabi.md#how-can-i-display-the-fee-in-satoshis-per-byte)
:::

:::details
### Simplified Payment Verification (SPV)

SPV is a method for verifying particular transactions were included in a block without downloading the entire block.
The method is used by some lightweight Bitcoin clients.
Read more: [Wasabi Wallet under the hood](/building-wasabi/TechnicalOverview.md#wasabi-wallet-under-the-hood)
:::

:::details
### Unspent Transaction Output (UTXO)

UTXO is an unspent transaction output that can be spent as an input in a new transaction.
Read more: [How can I select UTXOs for CoinJoin?](/FAQ/FAQ-UseWasabi.md#how-can-i-select-utxos-for-coinjoin)
:::


## Privacy and Wasabi

:::details
### Address reuse

Address reuse refers to the use of the same address for multiple transactions, this is very bad for privacy.
Read more: [Address reuse](/using-wasabi/AddressReuse.md)

:::details
### Anonymity Set (anonset)

The anonymity set is effectively the size of the group you are hiding in during a CoinJoin.
It's the quantity of equal value outputs of one CoinJoin transaction.
Read more: [What is the anonimity set?](/FAQ/FAQ-UseWasabi.md#what-is-the-anonymity-set)
:::

:::details
### Bloom Filter

A filter used primarily by SPV clients to request only block headers and merkle proofs of a given transaction from full nodes.
Read more: [BIP 37: Connection Bloom Filtering](/using-wasabi/BIPs.md#bip-37-connection-bloom-filtering)
:::

:::details
### Change address detection

Many Bitcoin transactions have change outputs.
It would be a serious privacy leak if the change address can be somehow found, as it would link the ownership of the (now spent) inputs with a new output.
Read more: [Change coins](/using-wasabi/ChangeCoins.md)
:::

:::details
### Cluster

Which entities know about which coins.
For example, this coin belongs to a cluster that is known by Coinbase and Alice.
Read more: [What is the cluster history?](/FAQ/FAQ-UseWasabi.md#what-is-the-cluster-history)
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
### Coin Control

Coin control is a must learn if you care about your privacy in Bitcoin.
As can be understood from the name, this is a proper control of one's coins.
Read more: [Coin Control Best Practices](/FAQ/FAQ-UseWasabi.md#coin-control-best-practices)
:::

:::details
### Common-input-ownership heuristic

This is a heuristic or assumption which says that if a transaction has more than one input then all those inputs are owned by the same entity.
Read more: [Wasabi Wallet under the hood](/building-wasabi/TechnicalOverview.md#wasabi-wallet-under-the-hood)
:::

:::details
### Coordinator

The coordinator is a server which creates CoinJoins and accepts UTXOs in the mix.
Read more: [Wasabi Wallet under the hood](/FAQ/FAQ-UseWasabi.md#how-does-my-wallet-communicate-with-the-wasabi-coordinator-server)
:::

:::details
### Dust

Dust is an UTXO that is uneconomical to spend.
Also, small portions of bitcoin can lead to serious consequences about one's privacy.
An example would be the so called `forced address reuse attack`.
Read more: [What is the dust threshold](/FAQ/FAQ-UseWasabi.html#what-is-the-dust-threshold)
:::

:::details
### Know Your Customer (KYC)

KYC (Know Your Customer) is the process of a business being forced to identify and verify the identity of its clients, and to share this information with a government.
The term is also used to refer to the bank regulation which governs these activities.
Read more: [AML/KYC Information](/why-wasabi/TransactionSurveillanceCompanies.md#aml-kyc-information)
:::

:::details
### Label

A way to track who knows about the ownership of your coins.
Not to be confused with a description of a transaction.
Read more: [The importance of labeling](/using-wasabi/Receive.md#the-importance-of-labeling)
:::

:::details
### Lurking Wife Mode (LWM)

Lurking Wife Mode is a Wasabi feature that hides sensitive and critical information on the wallet itself, which is useful for screenshots.
Read more: [Lurking Wife Mode](/using-wasabi/LurkingWifeMode.md)
:::

:::details
### Pay to EndPoint (P2EP)

Pay to EndPoint is sending of bitcoins where the receiver adds one of his own coins as input for a two party CoinJoin.
Read more: [Pay to EndPoint](/using-wasabi/PayToEndPoint.md)
:::

:::details
### Peers

Peers in our documentation refers mainly to Bitcoin and Wasabi Wallet users, but it also means people.
They are literally peers in the network, or in the CoinJoin.
:::

:::details
### XPUB (Extended Public Key)

An xpub, also know as Extended Public Key, is a part of BIP-32 that will allow you to observe your wallet without the private key (xpriv).
Read more: [Wasabi's Solution](/why-wasabi/BitcoinPrivacy.md#wasabi-s-solution-4)
:::

:::details
### Taint

Taint is equivalent to the 'trail' that a Bitcoin transaction leaves during the course of its journey.
The taint analysis of a Bitcoin transaction evaluates the association between an address involved in the chain of transactions.
Read more: [Blockchain Analysis](/why-wasabi/TransactionSurveillanceCompanies.md#blockchain-analysis)
:::

:::details
### The Onion Router (TOR)

Tor (The Onion Router) is free and open-source software for enabling anonymous communication.
It is widely used by Wasabi.
Read more: [How does Tor protect my network level privacy?](/FAQ/FAQ-GeneralBitcoinPrivacy.md#how-does-tor-protect-my-network-level-privacy)
:::

:::details
### Tumbling / Tumbler

Tumbling is a synonym of 'Mixing'.
Similarly, Tumbler is the synonym of 'Mixer'.
:::

:::details
### #twoweeks

The #twoweeks is a fun inside joke often used in the Wasabi documentation and, more generally, in the Internet community.
In the case of Wasabi documentation, it usually indicates the arrival of a new function or update, to which the future date is still uncertain.

Eg. "Lightning Network is coming to Wasabi in #twoweeks"
:::

:::details
### Wallet fingerprinting

A careful analyst sometimes deduces which software created a certain transaction, because many different wallet softwares don't always create transactions in exactly the same way.
Read more: [Technical Overview of Wasabi Wallet](/building-wasabi/TechnicalOverview.md)
:::

:::details
### Wasabika

Wasabikas are essentially builders and users of Wasabi in general.
:::

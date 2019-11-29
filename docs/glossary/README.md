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
### BIP

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
### Hardware Wallet
A hardware wallet is a special type of Bitcoin wallet which generates and stores the user’s private keys in a tailor made hardware device.
Read more: [Hardware Wallet FAQs](/FAQ/FAQ-UseWasabi.md#hardware-wallet)
:::

:::details
### Lightning Network

Lightning Network is a proposed implementation of Hashed Timelock Contracts (HTLCs) with bi-directional payment channels which allows payments to be securely routed across multiple peer-to-peer payment channels.
This allows the formation of a network where any peer on the network can pay any other peer even if they don’t directly have a channel open between each other.
Read more: [Use Lightning](/why-wasabi/10Commandments.md#_10-use-lightning)
:::

:::details
### Mempool

The Bitcoin Mempool (memory pool) is a collection of all transaction data in a block that have been verified by Bitcoin nodes, but are not yet confirmed.
Read more: [How does Wasabi know of incoming transactions to the mempool?](/FAQ/FAQ-UseWasabi.html#how-does-wasabi-know-of-incoming-transactions-to-the-mempool)
:::

:::details
### Multisignature

Multisignature (m-of-n multisig) refers to requiring more than one key to authorize a bitcoin transaction.
Only with `m` signatures of `n` public keys can the bitcoin be spend.
Read more: [Can I generate a multi signature script?](/FAQ/FAQ-UseWasabi.md#can-i-generate-a-multi-signature-script)
:::

:::details
### Output

Output, transaction output, or TxOut is an output in a transaction which contains two fields: a value field for transferring zero or more satoshis and a pubkey script for indicating what conditions must be fulfilled for those satoshis to be further spent.
:::

:::details
### Pay-to-Witness-Public-Key-Hash (P2WPKH)

The signature of a P2WPKH contains the same information as a Pay-to-Public-Key-Hash (P2PKH) spending, but is located in the witness field instead of the scriptSig field.
The scriptPubKey is also modified.
Read more: [BIP 84 derivation scheme for P2WPKH based accounts](/using-wasabi/BIPs.md#bip-84-derivation-scheme-for-p2wpkh-based-accounts)
:::

:::details
### satoshi

A satoshi (sat) is the smallest denomination of bitcoin that can be recorded on the blockchain.
It is the equivalent of 0.00000001 bitcoin and is named after the creator of Bitcoin, Satoshi Nakamoto.
Read more: [How can I display the fee in satoshi per byte?](/FAQ/FAQ-UseWasabi.md#how-can-i-display-the-fee-in-satoshis-per-byte)
:::

:::details
### Simplified Payment Verification (SPV)

SPV or simplified payment verification is a method for verifying particular transactions were included in a block without downloading the entire block.
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

Address reuse is a serious privacy leak.
If an output address has been reused the same private key can spend now several coins, thus it is clear that all of these coins belong to one entity.
Further, it is very likely to be a payment output, not a change output.
This is because change addresses are created automatically by wallet software but payment addresses are manually sent between humans.
Read more: [Address reuse](/using-wasabi/AddressReuse.md)

:::details
### Anonimity Set (or anonset)

The anonymity set is effectively the size of the group you are hiding in during a CoinJoin.
It's the quantity of equal value outputs of one CoinJoin transaction.
Read more: [What is the anonimity set?](/FAQ/FAQ-UseWasabi.md#what-is-the-anonymity-set)
:::

:::details
### Change address detection

Many Bitcoin transactions have change outputs.
It would be a serious privacy leak if the change address can be somehow found, as it would link the ownership of the (now spent) inputs with a new output.
Read more: [Change coins](/using-wasabi/ChangeCoins.md)
:::

:::details
### CoinJoin

CoinJoin is a trustless method for combining multiple Bitcoin payments from multiple spenders into a single transaction to make it more difficult for outside parties to determine which spender paid which recipient.
Read more: [What is a CoinJoin?](/FAQ/FAQ-Introduction.md#what-is-a-coinjoin)
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

The coordinator is zkSNACKs' server which creates CoinJoins and accepts UTXOs in the mix.
Read more: [Wasabi Wallet under the hood](/FAQ/FAQ-UseWasabi.md#how-does-my-wallet-communicate-with-the-wasabi-coordinator-server)
:::

:::details
### Dust

Dust is an UTXO that is uneconomical to spend.
Also, small portion of bitcoins can lead to serious consequences about one's privacy.
An example would be the so called 'forced address reuse attack'.
Read more: [What is the dust threshold](/FAQ/FAQ-UseWasabi.html#what-is-the-dust-threshold)
:::

:::details
### KYC

Know your customer (KYC) is the process of a business being forced to identify and verify the identity of its clients, and to share this information with a government.
The term is also used to refer to the bank regulation which governs these activities.
Read more: [AML/KYC Information](/why-wasabi/TransactionSurveillanceCompanies.md#aml-kyc-information)
:::

:::details
### XPUB (or Extended Public Key)

An xpub, also know as Extended Public Key, is a part of BIP-32 that will allow you to observe your wallet without the private key (xpriv).
Read more: [Wasabi's Solution](/why-wasabi/BitcoinPrivacy.md#wasabi-s-solution-4)
:::

:::details
### #twoweeks

The #twoweeks is a fun inside joke often used in the Wasabi documentation and, more generally, in the Internet community.
In the case of Wasabi documentation, it usually indicates the arrival of a new function or update, to which the future date is still uncertain.

Eg. "Lightning Network is coming to Wasabi in #twoweeks"
:::

:::details
### Wallet fingerprinting

A careful analyst sometimes deduce which software created a certain transaction, because the many different wallet softwares don't always create transactions in exactly the same way.
Read more: [Technical Overview of Wasabi Wallet](/building-wasabi/TechnicalOverview.md)
:::

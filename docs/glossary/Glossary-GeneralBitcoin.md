---
{
  "title": "Bitcoin Glossary",
  "description": "Explanations of common words used in Wasabi and regarding Bitcoin privacy with links to the docs for more details. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

## Bitcoin in general

:::details
### Address

A Bitcoin invoice address commits to a public key or script which defines who can spend the coin.
It is specified in the output of a transaction, and it should only be used once.
Wasabi uses the bech32 format to encode native segregated witness addresses.
Read more: [Bitcoin addresses](/using-wasabi/Receive.md#bitcoin-public-keys-and-addresses)
:::

:::details
### Bitcoin Improvement Proposal (BIP)

Bitcoin Improvement Proposal.
A design document for introducing features or information to Bitcoin.
Read more: [Wasabi Supported BIPs](/using-wasabi/BIPs.md)
:::

:::details
### Change

In a spending transaction where the provided input coins are larger than the value sent to the destination address, then the leftover change is sent to a new address of the same wallet.
Read more: [Change coins](/using-wasabi/ChangeCoins.md)
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
### Hot Wallet

A hot wallet is a software wallet that runs on a computer which is connected to the Internet.
Wasabi is a hot wallet by default.
:::

:::details
### Input

Input, transaction input, or TxIn is an input in a Bitcoin transaction which contains two fields: a unique transaction hash and an index number, which references one utxo of a previous transaction which is spent in this transaction.
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

Output, transaction output, or TxOut is an output in a Bitcoin transaction which contains two fields: a value field for transferring zero or more satoshis and a pubkey script for indicating what conditions must be fulfilled for those satoshis to be further spent.
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


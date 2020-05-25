---
{
  "title": "Supported BIPs",
  "description": "A collection and explanation of all the Bitcoin Improvement Proposals that are supported by Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Supported BIPs

[[toc]]

---

Wasabi Wallet strives toward establishing solid industry best practices and standards.
Here is a list of all the supported and integrated Bitcoin Improvement Proposals:

## What is supported

:::details
### BIP 21: URI Scheme

[BIP 21: URI Scheme](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki)
:::

:::details
### BIP 32: Hierarchical Deterministic Wallets

[BIP 32: Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
:::


:::details
### BIP 38: Password-Protected Private Key

[BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki)
:::

:::details
### BIP 39: Mnemonic Code for Generating Deterministic Keys

[BIP 39: Mnemonic Code for Generating Deterministic Keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
:::

:::details
### BIP 44: Multi-Account Hierarchy for Deterministic Wallets

[BIP 44: Multi-Account Hierarchy for Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
:::

:::details
### BIP 72: bitcoin: uri extensions for Payment Protocol

[BIP 72: bitcoin: uri extensions for Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki)
:::

:::details
### BIP 79: Bustapay: A Practical CoinJoin Protocol

[BIP 79: Bustapay: A Practical CoinJoin Protocol](https://github.com/bitcoin/bips/blob/master/bip-0079.mediawiki)

Wasabi deviates from BIP 79 in some aspects.
The exact details of the implementation are [documented here](https://docs.btcpayserver.org/features/payjoin/payjoin-spec)
:::

:::details
### BIP 84: Derivation scheme for P2WPKH Based Accounts

[BIP 84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki) defines a standard derivation scheme for hierarchical deterministic wallets BIP 32, specifically for segregated witness P2WPKH [BIP 173](BIPs.md#bip-173-base32-address-format-for-native-v0-16-witness-outputs).
This allows to generate one root master seed that can derive a tree of public keys with different paths [BIP 44](BIPs.md#bip-44-multi-account-hierarchy-for-deterministic-wallets).
`m / purpose' / coin_type' / account' / change / address_index`.
Wasabi specifically uses this standard `m/84'/0'/0'`.
On the TestNet and on the RegTest Wasabi deviates from the standard and uses `m/84'/0'/0'` instead of `m/84'/1'/0'`.
:::

:::details
### BIP 125: Opt-In full Replace-by-Fee Signaling

[BIP 125: Opt-In full Replace-by-Fee Signaling](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki) is activated for a subset of transactions chosen randomly, so to decrease wallet fingerprinting.
:::

:::details
### BIP 141: Segregated Witness (Consensus Layer)

[BIP 141: Segregated Witness (Consensus Layer)](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)
:::

:::details
### BIP 143: Transaction Signature Verification for Version 0 Witness Program

[BIP 143: Transaction Signature Verification for Version 0 Witness Program](https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki)
:::

:::details
### BIP 144: Segregated Witness (Peer Services)

[BIP 144: Segregated Witness (Peer Services)](https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki)
:::

:::details
### BIP 158: Compact Block Filters for Light Clients

[BIP 158 Block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) are the reverse of [BIP 37 Bloom filters](BIPs.md#bip-37-connection-bloom-filters).
The client connects to a Bitcoin node and say "Hey, for every block, I would like a condensed list of the affected addresses."
The Bitcoin node would then give the same filter that it gives to every client, because the client has thus far revealed nothing!
Once a block filter has come in and the client believes that there is a transaction that affects the client, it pings a single random node for a single full block.
It then parses the block, and finds the transaction.
This has been proven to be by far the best way to do light clients privately, and is the way Wasabi works today.
:::

:::details
### BIP 173: Base32 address format for native v0-16 witness outputs

[BIP 173: Base32 address format for native v0-16 witness outputs](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)
:::

:::details
### BIP 174: Partially Signed Bitcoin Transaction Format

[BIP 174: Partially Signed Bitcoin Transaction Format](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
:::

:::details
### Hardware Wallet Interface

[Hardware Wallet Interface](https://github.com/bitcoin-core/HWI)
:::

## What is not supported

:::details
### BIP 37: Connection Bloom Filtering

[BIP 37 Bloom filters](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki) are filters that a client will send to a Bitcoin full node which says "Hey, if you see any transactions that get caught in these filters, they may or may not be mine!".
What would happen next is that a Bitcoin node would start sending tons and tons of transactions to the client, and the client would proceed to distinguish the 99% irrelevant transactions against the 1% relevant ones.
This was quite brilliant of an idea at the time, but has since been proven to not protect user privacy, at the expense of wasting a ton of bandwidth and subjecting users to other risks.
:::

:::details
### BIP 69: Lexicographical Indexing of Transaction Inputs and Outputs

[BIP 69: Lexicographical Indexing of Transaction Inputs and Outputs](https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki) is a standard to sort inputs and outputs deterministically.
This was intended to improve privacy, but it only does so if all wallets use this standard.
Because only a small number of wallets do use it however, this leads to an easy wallet fingerprint.
Thus, Wasabi doesn't support this standard.
:::

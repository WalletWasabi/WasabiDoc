---
{
  "title": "Supported BIPs",
  "description": "A collection and explanation of all the Bitcoin Improvement Proposals that are supported by Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Supported BIPs

- [What is supported today](BIPs.md#what-is-supported-today)
- [What will be supported in #twoweeks](BIPs.md#what-will-be-supported-in-twoweeks)
- [What is not supported](BIPs.md#what-is-not-supported)

---

Wasabi Wallet strives toward establishing solid industry best practices and standards.
Here is a list of all the supported and integrated Bitcoin Improvement Proposals:

## What is supported today

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

[BIP 158 Block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) are the reverse of [BIP 37 Bloom filters](BIPs.md#bip-37-connection-bloom-filters) - the client will connect to a Bitcoin node and say "Hey, for every block, I would like a condensed list of addresses that were affected."
What would happen next is that a Bitcoin node would give the same filter that it gives to every client, because the client has thus far revealed nothing!
Once a block filter has come in and the client believes that there is a transaction that affects the client, the client pings a single random node for a single full block.
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


## What will be supported in #twoweeks

:::details
### BIP 47: Reusable Payment Codes for Hierarchical Deterministic Wallets

[BIP 47](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki) defines a technique for creating a payment code which can be publicly advertised and associated with a real-life identity without creating the loss of security or privacy inherent to P2PKH address reuse.

This BIP is a particular application of [BIP 43](https://github.com/bitcoin/bips/blob/master/bip-0043.mediawiki) and is intended to supplement HD wallets which implement BIP44.
:::


:::details
### BIP 156: Dandelion - Privacy Enhancing Routing

[BIP 156 Dandelion](https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki) is a transaction routing mechanism that provides formal anonymity guarantees against attacks on Bitcoin's transaction spreading protocol.
When a node generates a transaction without Dandelion, it transmits that transaction to its peers with independent, exponential delays.
This approach, known as diffusion in academia, allows network adversaries to link transactions to IP addresses.

Dandelion mitigates this class of attacks by sending transactions over a randomly selected path before diffusion.
Transactions travel along this path during the "stem phase" and are then diffused during the "fluff phase" (hence Dandelion).
We have shown that this routing protocol provides near-optimal anonymity guarantees among schemes that do not introduce additional encryption mechanisms. 
:::

:::details
### BIP 157: Client Side Block Filtering

[BIP 157](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki) describes a new light client protocol in Bitcoin that improves upon currently available options.
The standard light client protocol in use today, defined in [BIP 37](BIP.md#bip-37-connection-bloom-filters), has known flaws that weaken the security and privacy of clients and allow denial-of-service attack vectors on full nodes.
The new protocol overcomes these issues by allowing light clients to obtain compact probabilistic filters of block content from full nodes and download full blocks if the filter matches relevant data.

New P2P messages empower light clients to securely sync the blockchain without relying on a trusted source.
This BIP also defines a filter header, which serves as a commitment to all filters for previous blocks and provides the ability to efficiently detect malicious or faulty peers serving invalid filters.
The resulting protocol guarantees that light clients with at least one honest peer are able to identify the correct block filters.
:::

:::details
### BIP 322: Generic Message Signing Format

[BIP 322](https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki) is a standard for interoperable generic signed messages based on the Bitcoin Script format.
:::

:::details
### BIP 325: Signet

[BIP 325](https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki) is a new model for a testing network of Bitcoin that is based on block signing, not block mining.

:::details
### BIP Schnorr

[BIP Schnorr](https://github.com/sipa/bips/blob/bip-schnorr/bip-schnorr.mediawiki) is a digital signature scheme which has many benefits over the status-quo ECDSA.
One advantage is that any N-of-N and M-of-N multisignature can be easily made to look like a single-sig when included on the blockchain.
:::

:::details
### BIP Taproot

[BIP Taproot](https://github.com/sipa/bips/blob/bip-schnorr/bip-taproot.mediawiki) is a way to combine [Schnorr signatures](BIPs.md#bip-schnorr) with [MAST](https://bitcoinmagazine.com/articles/the-next-step-to-improve-bitcoin-s-flexibility-scalability-and-privacy-is-called-mast-1476388597/).
The Schnorr signature can be used to spend the coin, but also a MAST tree can be revealed only when the user wants to use it.
The schnorr signature can be any N-of-N or use any scriptless script contract.
The consequence of taproot is a much larger anonymity set for interesting smart contracts, as any contract such as Lightning Network, CoinSwap, multisignature, etc would appear indistinguishable from regular single-signature on-chain transaction.

The taproot scheme is so useful because it is almost always the case that interesting scripts have a logical top level branch which allows satisfaction of the contract with nothing other than a signature by all parties.
Other branches would only be used where some participant is failing to cooperate.
:::

:::details
### BIP Tapscript

[BIP Tapscript](https://github.com/sipa/bips/blob/bip-schnorr/bip-tapscript.mediawiki) defines a slight variation on Bitcoin’s existing Script language to be used in [BIP Taproot](BIPs.md#bip-taproot) merkle spends.
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

[BIP 69: Lexicographical Indexing of Transaction Inputs and Outputs](https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki)
:::

:::details
### BIP 70: Payment Protocol

[BIP 70: Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki)
:::



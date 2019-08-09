# Supported BIPs

[[toc]]

---

Wasabi Wallet strives toward establishing solid industry best practices and standards.
Here is a list of all the supported and integrated Bitcoin Improvement Proposals:

## What is supported today

- [BIP 21: URI Scheme](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki)
- [BIP 32: Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
- [BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki)
- [BIP 39: Mnemonic Code for Generating Deterministic Keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [BIP 44: Multi-Account Hierarchy for Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
- [BIP 72: bitcoin: uri extensions for Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki)
- [BIP 84: Derivation scheme for P2WPKH Based Accounts](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki)
- [BIP 141: Segregated Witness (Consensus Layer)](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)
- [BIP 142: Address Format for Segregated Witness](https://github.com/bitcoin/bips/blob/master/bip-0142.mediawiki)
- [BIP 143: Transaction Signature Verification for Version 0 Witness Program](https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki)
- [BIP 144: Segregated Witness (Peer Services)](https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki)
- [BIP 158: Compact Block Filters for Light Clients](BIP.md#bip-158-compact-block-filters-for-light-clients)
- [BIP 173: Base32 address format for native v0-16 witness outputs](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)
- [BIP 174: Partially Signed Bitcoin Transaction Format](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
- [Hardware Wallet Interface](https://github.com/bitcoin-core/HWI)

## What will be supported in #twoweeks

- [BIP 156: Dandelion - Privacy Enhancing Routing](https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki)
- [BIP 157: Client Side Block Filtering](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki)
- [BIP 322: Generic Message Signing Format](https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki)
- [BIP Schnorr](https://github.com/sipa/bips/blob/bip-schnorr/bip-schnorr.mediawiki)
- [BIP Taproot](https://github.com/sipa/bips/blob/bip-schnorr/bip-taproot.mediawiki)
- [BIP Tapscript](https://github.com/sipa/bips/blob/bip-schnorr/bip-tapscript.mediawiki)

## What is not supported

- [BIP 37: Connection Bloom Filtering](BIP.md#bip-37-connection-bloom-filters)
- [BIP 69: Lexicographical Indexing of Transaction Inputs and Outputs](https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki)
- [BIP 70: Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki)
- [BIP 125: Opt-In full Replace-by-Fee Signaling](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki)

## Explanation

### [BIP 37: Connection Bloom Filters](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)

Bloom filters (BIP37) are filters that a client will send a Bitcoin full node which says "Hey, if you see any transactions that get caught in this filter, they may or may not be mine!".
What would happen next is that a Bitcoin node would start sending tons and tons of transactions to the client, and the client would proceed to distinguish the 99% irrelevant transactions against the 1% relevant ones.
This was quite brilliant of an idea at the time, but has since been proven to not protect user privacy, at the expense of wasting a ton of bandwidth and subjecting users to other risks.

### [BIP 158: Compact Block Filters for Light Clients](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki)

Block Filters (BIP 158) are the reverse of Bloom filters (BIP 37) - the client will connect to a Bitcoin node and say "Hey, for every block, I would like a condensed list of addresses that were affected."
What would happen next is that a Bitcoin node would give the same filter that it gives to every client, because the client has thus far revealed nothing!
Once a block filter has come in and the client believes that there is a transaction that affects the client, the client pings a single random node for a single full block.
It then parses the block, and finds the transaction.
This has been proven to be by far the best way to do light clients privately, and is the way Wasabi works today.

---
{
  "title": "Address Reuse",
  "description": "On the nuances of address reuse, why it is bad and how to fix it. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Address Reuse

[[toc]]

The first rule of Bitcoin privacy:

> Never reuse addresses!

The second rule of Bitcoin privacy:

> NEVER reuse addresses!!

## Problem

_**Easy wallet clustering**_

A Bitcoin address commits to the spending condition of this UTXO.
For example, in Wasabi each address is a [native SegWit pay to witness public key hash P2WPKH](https://programmingblockchain.gitbook.io/programmingblockchain/other_types_of_ownership/p2wpkh_pay_to_witness_public_key_hash), meaning that this coin can only be spent with a single valid signature of the corresponding private key.
If the same address is used for several UTXOs, it means that the same private key can spend all these coins.
It is very easy to find all the UTXOs with the same address, and thus to find out how many bitcoin this private key holds. 

Further, in a transaction in which one output has a reused address, then it is very likely that this output is the payment destination, and not the change.
Most wallets automatically generate new change addresses for every transaction, but payment addresses are selected manually by the user.

Read more about the privacy concerns of address reuse in the [separate entry](https://en.bitcoin.it/wiki/Address_reuse) and the [privacy chapter](https://en.bitcoin.it/Privacy#Address_reuse) of the Bitcoin wiki.

There are different types of address reuse.

### Publicly advertised addresses (donations)

Here, one person sends one address to a public forum, like in the bio of a social media network or on a website, and anyone can send bitcoin to this address.

### Dusting

With a [forced address reuse attack](https://en.bitcoin.it/Privacy#Forced_address_reuse), an attacker sends a small amount of bitcoin to an already existing address of an old coin.
The attacker hopes that this dust coin is consolidated with another coin, thus linking the two in a cluster.

### Intentionally malicious

Since Wasabi is libre and open source, anyone can modify a fork of Wasabi to make sure the same two addresses are recycled in every CoinJoin registration.
This is someone intentionally deanonymizing himself, such a behavior might have quite dubious motives.

## Wasabi's Solution

_**Remove used address from GUI**_

Wasabi uses the industry best practice [BIP 44 hierarchical deterministic wallet](/using-wasabi/BIPs.md#bip-44-multi-account-hierarchy-for-deterministic-wallets) where, from one master secret, a tree structure of child private keys are generated.
It is deterministic because the same parent secret always calculates the same child private keys. When given a hardened child private key, then the parent private key cannot be calculated.
In the `Receive` tab, a new address is generated every time, and as soon as a coin is sent to it, this specific address is removed from the GUI. 

To protect against forced address reuse attack (Dusting), Wasabi has a modifiable dust limit, where the wallet does not show coins below a certain threshold value.


---
{
  "title": "Address Reuse",
  "description": "On the nuances of address reuse, why it is bad and how to fix it. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Address Reuse

The first rule of Bitcoin privacy:

> Never reuse addresses!

The second rule of Bitcoin privacy:

> NEVER reuse addresses!!

[[toc]]

---

## Problem

### Easy wallet clustering

If an address is used more than once, it means that the same private key can spend all its coins.
It is very easy to find all the UTXOs of an address, and thus to find out how many bitcoin the private key holds.

Further, in a transaction where one output has a reused address, then it is very likely that this output is the payment destination, and not the change.
Most wallets automatically generate new change addresses for every transaction, but payment addresses are selected manually by the user.

Read more about the privacy concerns of address reuse in the [separate entry](https://en.bitcoin.it/wiki/Address_reuse) and the [privacy chapter](https://en.bitcoin.it/Privacy#Address_reuse) of the Bitcoin wiki.

There are different types of address reuse:

### Publicly advertised addresses (donations)

Here, a person publishes a single address to a public forum, like in the bio of a social media network or on a website, and anyone can send bitcoin to this address.

### Dusting

With a [forced address reuse attack](https://en.bitcoin.it/Privacy#Forced_address_reuse), an attacker sends a small amount of bitcoin to an already existing address.
The attacker hopes that this dust coin is consolidated with another coin, thus linking the two in a cluster.

### Intentionally malicious

Since Wasabi is libre and open-source, anyone can modify a fork of Wasabi to make sure the same two addresses are recycled in every CoinJoin registration.
This is someone intentionally deanonymizing himself, and he might have quite dubious motives.

## Wasabi's Solution

### Remove used address from GUI

Wasabi uses the industry best practice [BIP 44 Multi-Account Hierarchy for Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), where from one master secret a tree structure of child private keys are generated.
It is deterministic because the same parent secret always calculates the same child private keys.
BIP 44 HD wallets use an alternative key derivation function called "hardened derivation", which alters the relationship between parent keys and child keys in a way that increases security significantly.
When given a hardened child private key, then the parent private key cannot be calculated.
An address gets removed from the GUI in the `Receive` tab as soon as a coin is received to it.

To protect against forced address reuse attack (Dusting), Wasabi has a modifiable [dust limit](/FAQ/FAQ-UseWasabi.md#what-is-the-dust-threshold), where the wallet does not show coins below a certain threshold value.

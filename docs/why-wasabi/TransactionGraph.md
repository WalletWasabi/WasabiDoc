---
{
  "title": "Transaction Graph",
  "description": "On how Bitcoin transactions are interconnected, how this is dangerous for privacy, and how to fix it. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Transaction Graph

[[toc]]

---

## Problem

### Public transaction history

Because of the input and output model of Bitcoin, there is a chain of digital signatures all the way from the coinbase reward to the current UTXO.
This transaction history can reveal sensitive information about the spending patterns of individuals.
The receiver of a coin can look back into the transaction history of the sender.
And the sender can see the future spending of the receiver.

## Wasabi's Solution

### Zero Link CoinJoins

In order to obfuscate the link between inputs and outputs, Wasabi uses the [Zero Link](https://github.com/nopara73/zerolink) CoinJoin protocol.
The Wasabi central coordinator cannot steal and cannot spy, it simply helps many peers to build a huge transaction, with many inputs, and many outputs.
The non-private inputs can be linked to their previous transaction history.
However, the equal value CoinJoin outputs with an anonymity set cannot be tied to the inputs.

This means that when sending an anonset coin, the receiver does not know about the transaction history before the CoinJoin.
And when the receiver does a CoinJoin himself, then the sender cannot spy on the later spending patterns.
An outside observer can only guess the correct link at a rate of 1 in the anonset, for example, 1-in-100, or 1%.

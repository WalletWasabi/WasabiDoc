---
{
  "title": "Coins",
  "description": "On the nuances of Bitcoin's coin model with unspent transaction outputs, the privacy problems and how to fix it. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Coins

Bitcoin has an accounting model of [unspent transaction outputs [UTXO]](https://bitcoin.org/en/blockchain-guide#introduction).
A transaction has inputs: the coins that are spent, and outputs: the coins that are received.
The input of one transaction has to be an output of a previous transaction that is not yet spent.
Each UTXO is the tip of the chain of links between inputs and outputs, all the way back to a [coinbase transaction](https://en.bitcoin.it/wiki/Coinbase) that pays the miner.

## Problem

_**UTXOs are not fungible**_

Each UTXO is a unique snow flake with a public transaction history.
For example, when Alice sends a coin to Bob, then Bob does not just have any random UTXO, but he has specifically the coin that Alice has sent him.
When Bob sends this coin to Charlie, than Charlie can look back two hops to see the transaction from Alice to Bob.
If Bob does not want Charlie to know that the transaction between Alice and Bob happened, then Bob needs to send Charlie a different coin.

Further, when Alice has one non-private coin and one private coin, and she selects both of them as the input of one transaction, then it might be clear that the previously private coin also belongs to Alice.
This means that coin consolidation can lead to an overall decrease of privacy, especially when using an automatic coin selection algorithm.

## Wasabi's Solution

_**Manual coin labeling and selection**_

Contrarily to many other wallets, Wasabi does not show only the total value of bitcoins in the wallet. Rather, in the `Send` and `CoinJoin` tab is a list of all the UTXOs individually.
Because it is required to label every receiving address, the history of this coin is clear at first glance.
In order to spend a specific coin, it is manually selected, which prevents the wrong coin being included in the transaction.


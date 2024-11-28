---
{
  "title": "Coins",
  "description": "On the nuances of Bitcoin's coin model with unspent transaction outputs, the privacy problems and how to fix it. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Coins

Bitcoin has an accounting model of [unspent transaction output [UTXO]](https://developer.bitcoin.org/devguide/block_chain.html).
A transaction has inputs: the coins that are being spent, and outputs: the corresponding newly created coins (unspent).
The input of a transaction has to be an unspent output of a previous transaction.
Each UTXO is the tip of the chain of links between inputs and outputs, all the way back to a [coinbase transaction](https://en.bitcoin.it/wiki/Coinbase) that pays the miner.

[[toc]]

---

## Problem

### UTXOs are not fungible

Each UTXO is a unique snowflake with a public transaction history.
For example, when Alice sends a coin to Bob, then Bob does not just have any random UTXO, but he has specifically the coin that Alice has sent him.
When Bob sends this coin to Charlie, then Charlie can check the history of the coin and see the transaction from Alice to Bob.
But due to the pseudonymity of Bitcoin, he does not necessarily find out that Alice is involved.

Further, when Alice has one non-private coin and one private coin, and she selects both of them as the inputs of a transaction, the linking of these two coins strongly suggests that the coin that was private also belongs to Alice.
This means that coin consolidation can lead to an overall decrease in privacy, especially when using an automatic coin selection algorithm.

## Wasabi's Solution

### Manual coin labeling and selection

Using Wasabi it is mandatory to label every receiving and destination address.
This helps the user to know where their coins came from so that they can judge whether there are privacy concerns when sending a specific coin to a specific receiver.
The default _Send_ workflow uses the auto coin selection algorithm, which is based on the labeling system.

Read more [here](/using-wasabi/Receive.md#the-importance-of-labeling).

### Privacy suggestions

When sending bitcoin, the transaction may have (potential) privacy leaks that the user is not aware of.
The privacy suggestions inform the user about this with warnings, and provide clickable suggestions to improve the transaction (if possible).
The clickable suggestions make it easy for the user to adjust the transaction to make it (more) private.
When sending in Wasabi, the user will see the _Privacy Suggestions_ in the shield icon at the top right corner at the _Preview Transaction_ screen, which displays the options when hovering over it with the cursor.

Read more [here](/using-wasabi/Send.md#privacy-suggestions).

## Heuristics identifying change

One prime goal of [transaction surveillance companies](/why-wasabi/TransactionSurveillanceCompanies.md) is to identify the change coin of a Bitcoin transaction, as this is vital information for building a cluster of coins belonging to one entity.
There are several heuristics, practical assumptions which are not guaranteed to be accurate or optimal, that are used to deanonymize users:

### Address reuse

When several coins have the same address, then they are owned by the same entity.
Thus if a transaction has a reused address in the output, it is very likely to be the payment amount from one entity to another.
Thus the other output of this transaction is likely to be the change of the entity providing the inputs of the transaction.

:::warning Remember
Never [reuse addresses](/why-wasabi/AddressReuse.md#problem)!
:::

### Wallet fingerprinting

Different software wallets have different methods of creating Bitcoin transactions.
So if it is known that a transaction was created by a specific wallet, then it can be checked how this wallet handles change.

Wasabi tries to build the most common form of transaction structure, thus reducing the likelihood of identifying any given transaction as being from Wasabi.
However, Wasabi CoinJoins are very easily fingerprinted, and any coin associated is clearly managed with Wasabi Wallet.

### Round numbers

When making a payment, then often the destination address receives a round number of bitcoin.
Because the input is usually a non-round number, the other output will also be a non-round number.
This makes it clear that the non-round number output is the change back to the sender.

```
A [0.1293 0112 btc]  -->  B [0.0500 0000 btc]
                          C [0.0792 9962 btc] (= change)
```

:::tip
In order to protect your privacy, add or remove (when possible) a couple of sats from the payment amount to obfuscate which output is your change and which one is the payment.
:::

### CoinJoin

A CoinJoin has many unequal value inputs, and creates several equal value anonset outputs, as well as unequal value outputs, making it clear that these are the change outputs.

:::tip
This is why the CoinJoin change has only 1 [anonset](/glossary/Glossary-PrivacyWasabi.md#anonymity-set-anonset).
:::

```
                C [1 btc]
A [6 btc]  -->  D [1 btc]
B [3 btc]       E [5 btc] (= change A)
                F [2 btc] (= change B)

```

### Replace by Fee

[BIP 125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki) allows for one unconfirmed transaction to be double-spent and replaced by a second transaction that pays a higher fee.
However, the output that is reduced in the second transaction is likely to be the change output, as the sender pays the fee.

```
First transaction

A [1.3576 1516 btc]  -->  B [1.0135 6515 btc]
                          C [0.3440 4861 btc] 

Second transaction (RBF)

A [1.3576 1516 btc]  -->  B [1.0135 6515 btc]
                          C [0.3440 4721 btc] (= change)
```

---
{
  "title": "Send",
  "description": "A step by step guide on how to send bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Send

[[toc]]

## Coins

A coin is an unspent transaction output (UTXO), a chunk of bitcoin which can be sent in a future transaction.
In the Wasabi wallet `Send` tab, you see a list of all the coins you can spend because you have their private keys.
You can get a coin by first [receiving](/using-wasabi/Receive.md) them from someone else, for example by earning them or buying them for fiat currency.
You can spend one or more whole coins by selecting it in the `Send` tab, if your payment amount is below the value of the selected coins, then you will receive a [change coin](/using-wasabi/Change.md) back.

![](/Send.png)

## Clusters

Every time you receive a payment, you first must [label the observers](/using-wasabi/Receive.md#the-importance-of-labeling) who know this address is yours.
This transaction metadata is used to build a cluster of which parties know about your coins.
For example, if you receive a coin from Alice, then the cluster is `Alice`. 
If you now send half of this coin to Bob, then the cluster of the change coin is `Alice, Bob`.
The goal is to reduce the number of observers who know about your coins.

## Anonymity Set

When you do a Wasabi [CoinJoin](/using-wasabi/CoinJoin.md), many peers register coins in the input of the transaction, and in the output there are several equal value coins, for example 100 coins worth exactly 0.1 bitcoin.
This means that when looking at one of these CoinJoin outputs, there is a 1 in 100 chance to find the corresponding input.
Thus the higher the anonymity set, the more your post-mix coin is delinked from the pre-mix history.
Wasabi shows you three levels of anonymity set, the yellow shield, the green shield and the check mark shield.
By default they have an anonymity set of `2`, `21` and `50`, however, this can be [changed in the settings](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target).

## Receiving Address

## Payment Amount

## Mining Fee

## Password

## How to send bitcoin step by step

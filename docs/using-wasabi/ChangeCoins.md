---
{
  "title": "Change Coins",
  "description": "Details about the privacy of different types of change and strategies for using them. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Change coins

[[toc]]

---

## Types of change

### Non-Coinjoin change

Let's assume you want to send 0.5 bitcoin to Alice.
You put Alice's address in the `Receiving Address` field, and set the spending `Amount` to 0.5 bitcoin.
This will be one output of the transaction.

Since your chosen UTXO is worth 2 bitcoins, after sending 0.5 bitcoin to Alice there will be 1.5 bitcoins change from the original amount.
This leftover amount will automatically go to a new address in your wallet, and this is called the change output.

This leftover 1.5 bitcoins change UTXO is connected to the input UTXO of the transaction, and thus also has an `anonymity set` of 1.
As a result, when you send this leftover/change coin in a new transaction, it is clear to any observer that you were part of the transaction that sent 0.5 bitcoin to someone.

This process is applicable to any Bitcoin transaction where the `sent` amount is less than the total value of the input UTXO.

### Coinjoin change

In some few cases, especially for the wealthiest user of a coinjoin, there will be an `anonymity score 1` output in a coinjoin transaction.
Eventhough it is not trivial to link those to the inputs of the same user, they should be handled with care.
Wasabi will not automatically spend those change coins in a payment, but instead register them again in a future coinjoin round.

## Why change is an issue

Change is not inherently bad, it's a fundamental part of how Bitcoin and the UTXO model works.
However, when sending a coin that is change from an earlier transaction, then the receiver can easily deduce that the sender was also part of the previous transaction that generated the change.

Whenever you are merging coins in one transaction, it becomes clear to any outside observer that these coins belong to the same entity, thus linking the previous transaction history.
Thus [identifying change](/why-wasabi/Coins.md#heuristics-identifying-change) based on some heuristics is a top goal of transaction surveillance.

You want to avoid merging coins with different anonymity set values whenever possible, because this will link these coins and reduce their anonymity set to the lowest value.

## Your options to use change privately

### Avoid change in the first place

Whenever possible, choose UTXO's for transactions where the destination addresses receive the entire value of your UTXO's, and you don't get any change back.
This can easily be done by clicking the shield icon in the top right corner of the transaction preview screen, and adjusting the payment amount to be slightly higher or lower.
This might not be possible in some cases where you have to pay a specific value of a payment request.

### Make it difficult to deduce the change

There are [common heuristics identifying change outputs](/why-wasabi/Coins.md#heuristics-identifying-change), try to avoid these with every transaction.
Don't reuse addresses, don't send precise amounts but randomize them, don't use replace by fee, and try to send to bech32 addresses.

### Spend the change to the same entity as in the initial transaction.

If in the first transaction you have 0.10 bitcoin and send Alice 0.04 bitcoin, you get 0.06 bitcoin back as change in a new address, which Alice can see belongs to you.
Now, in a second transaction where you want to send Alice 0.05 bitcoin, you can select that 0.06 bitcoin change coin without losing any privacy, because Alice already knows this is your coin.

In this second transaction you will get back 0.01 bitcoin as change, which again, will still be known to Alice.
If in a third transaction you want to send Alice 0.02 bitcoin, then you can consolidate the 0.01 bitcoin change with a new 0.10 bitcoin mixed coin, thus getting 0.09 bitcoin change.

Now Alice will know that you owned the 0.10 bitcoin and that you currently own the 0.09 bitcoin change, but she cannot find out about your premix transaction history.

Wasabi will automatically check if you have a coin with the same label for the current payment recipient, and will use those coins to be spent.

### Spend the change with another entity, where you don't mind if each of the two know that you transact with the other entity

When you send a transaction to Alice, then she knows that the change output goes back to you.
You can use this change to send bitcoin to Bob, and if he has bad privacy habits, Alice can find out you sent to him.
But if you have a trusted relationship with the two, then this is alright, and not part of your threat model.

### Coinjoin more

Since Wasabi 2.0 has a minimum amount for coinjoin of only 5000 sats, any change coin with an amount larger than that will be registered in a future coinjoin round.
If you wait long enough, Wasabi will make sure that you don't have any anonscore 1 change coin in your wallet, but only private coins not linked to any previous payment.

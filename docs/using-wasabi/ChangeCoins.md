---
{
  "title": "Change Coins",
  "description": "Details about the privacy of different types of change and strategies how to use them. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Change coins

[[toc]]

## Why change is an issue

You want to avoid merging `anonymity set 1 coins` with `anonymity set > 1 coins` wherever possible, because this will link your `anonymity set > 1 coin` to the coin you merge it with.
Note that, this is also true if you merge them in a mix, however that is slightly less problematic, because some blockchain analysis techniques become [computationally infeasible](https://www.comsys.rwth-aachen.de/fileadmin/papers/2017/2017-maurer-trustcom-coinjoin.pdf).

It is also important that you do not send different coins to the same receiving address (even if performed as separate transactions) as this will also link the coins together, damaging your privacy.

## Types of change

There are two different types of zero link change:

When you have a KYC coin with red anonset 1 and you register it for CoinJoin, then you get one anonset 100 green coin and one red anonset 1 change.
This change is very clearly tied to your KYC input coin, but the CoinJoin output is pretty good with anonset 100.
If you combine that red coin with the green, then it's clear that both of them belong to you, and thus the anonset of the output in this transaction becomes the lowest common denominator, in this case anonset 1.

When you take a 100 anonset coin, and you register it again for CoinJoin, then you get one coin with anonset 200, and one change with anonset 100.
This change has anonset 100 because it can be linked to the input of the second CoinJoin, but this coin has anonset 100 already.
This change can still reveal premix history which is another CoinJoin, therefore you cannot go further back.
So, it might be ok to send this second change output to some place, or even consolidate it, because it still has anonset.

When you consolidate several small change coins in a regular transaction, then every outside observer knows that they belong to the same cluster.
However, you can consolidate within a CoinJoin by simply selecting all these coins in the `CoinJoin` tab.
Because the Wasabi CoinJoin transaction shuffles inputs, for an outside observer it is not clear which inputs belong to the same Alice.
However, the coordinator gets the input proof of **ALL** the coins that Alice has provided during the input registration phase.
Thus the coordinator knows that this is a consolidation transaction.
It is wise to assume that every one knows what the coordinator knows.
So consolidating in a CoinJoin is better, but it might still reveal the common ownership of the coins.

## Your options

### Avoid change in the first place.
Whenever possible, send transactions where the destination addresses receive the entire value, and you don't get any change back.
This can easily be done by clicking the `Max` button in the `Send` tab, which will automatically deduct the mining fee and send the highest amount possible to the destination.
This might not be possible in some cases where you have to pay a specific value of a payment request.
However, in other cases it is possible, for example donations or when depositing to an exchange.
Consider supporting invaluable projects like [the tor project](https://donate.torproject.org/cryptocurrency) or [the electronic frontier foundation](https://supporters.eff.org/donate/donate), you can find a list of organizations that accept bitcoin donations [here](https://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projects).

### Spend the change to the same entity as the initial transaction, but always use a new address.
So if in the first transaction you have 0.1 bitcoin and send Alice 0.04 bitcoin, you get 0.06 bitcoin back as change.
Now in the second transaction where you want to send Alice 0.05 bitcoin, you can select that 0.06 bitcoin change coin without loosing any privacy, because Alice already knows this is your coin.
In this second transaction you will get back 0.01 bitcoin as change.
If in a third transaction you want to send Alice 0.02 bitcoin, then you can consolidate the 0.01 bitcoin change with a new 0.1 bitcoin mixed coin, thus getting 0.09 bitcoin change.
Now Alice will know that you owned that 0.1 bitcoin and the 0.09 bitcoin change, but she cannot find out about your premix transaction history.

### Spend the change to another entity, if these two won't make you trouble knowing you interact with both of them.
For example when with a 0.1 bitcoin mixed coin you buy coffee from Alice for 0.01 bitcoin, you get back 0.09 bitcoin change that Alice knows is yours.
If in the next transaction you spend the 0.09 bitcoin change in the pizza restaurant of Bob, then Alice might find out that you go to Bob's restaurant, and if she doesn't like that, then she can refuse to serve you coffee the next time, or even worse.
But if instead you spend the 0.09 bitcoin change in a transaction to Carol, a good friend of Alice, then Alice might not care and will still give you coffee for the next round.

### Consolidate several change coins, but in a CoinJoin directly.
If you would consolidate many change coins in a regular non-CoinJoin transaction in the `Send` tab, then any outside observer can easily see that one user controls all these coins.
Because there are hundreds of randomly ordered inputs in a Wasabi CoinJoin transaction, it is no longer easy to find out which coins belong to one single user.
However, during the [input registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase), your wallet provides an input proof for all the registered coins to the coordinator.
Thus the coordinator knows that you control all these coins, and although zkSNACKs claims to not keep any logs, it is a reasonable assumption that everyone knows what the coordinator knows.
In this CoinJoin you get an equal value mixed coin, which is no longer tied to any of your change coins, and a change output that can be tied to these inputs.
So consolidating your change in a CoinJoin is strictly better than consolidating in a regular sending transaction, but it still leaks sensitive information to the coordinator.

### Mix with Joinmarket.
In [Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) as a market taker you can specify exactly what denomination of equal value outputs are generated in the CoinJoin.
So you can send the Wasabi change to your Joinmarket wallet and take an offer to mix for some rounds.
The coin you will receive after the tumbling algorithm can have sufficient anonymity set, and you can use it for spending again.

### Open a lightning network channel.
The lightning network can be a very private way of sending bitcoin, and you can choose the channel size to be exactly the size of your change coin.
However, it is very important that you do not link this non-private coin to your main lightning node public key.
So a good strategy is to create a new lightning node and public key, send the whole change coin into this fresh wallet, and open a channel of this amount to a random peer on the network.
Then route a payment either to a merchant for goods and services, or to your own main lightning node for further use.
After the balance of the channel is entirely on the other side, cooperatively close the channel with your peer, so that he gets the only output in the closing transaction.
Since Wasabi does not yet support lightning network functionality, you must use a different wallet for this task.


---
{
  "title": "Change Coins",
  "description": "Details about the privacy of different types of change and strategies how to use them. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Change coins

[[toc]]


## Types of change

### Non CoinJoin change

When you want to buy some coffee from Alice, then in the `Send` tab you select one or more of your own coins, and they are the input of the transaction, for example one red shield `anonymity set 1` coin worth 2 bitcoin.
You put Alice's address in the `Receiving Address` field, and set the spending `Amount`, for example 0.5 bitcoin, this will be the first output of the transaction.
The left over amount of 1.5 bitcoin will automatically go to a new address that you control, and this is the change output.
This change coin is tied to the input of the transaction, and thus also has `anonymity set 1`.
So when you send this change coin in a new transaction, the receiver knows that you were part of the transaction to Alice.

### First round CoinJoin change

When you have a KYC red shield `anonymity set 1` coin and you register it for CoinJoin, you get one green coin `anonymity set 100` and one red shield `anonymity set 1` change coin.
This change is clearly tied to your KYC input coin, but the green coin is not.
If you combine the red coin with the green one in a transaction, then it's clear that both of them belong to you, and thus the anonset of the output in this transaction becomes the lowest common denominator, in this case anonset 1.

### Second round CoinJoin change

When you take a 100 anonset coin, and you register it again for CoinJoin, then you get one coin with anonset 200, and one change with anonset 100.
This change still has anonset 100 because it is the change output of a second CoinJoin that used a 100 anonset coin as input.
This change can still reveal premix history which is another CoinJoin, therefore you cannot go further back.
So, it is ok to send this change output to some place, or even consolidate it, because it still has anonset 100.

## Why change is an issue

Change is not inherently bad, it's a fundamental part of how Bitcoin and the UTXO model works.
However, when spending a change coin, then the receiver can easily deduce that the sender was also part of the previous transaction that generated the change.
Whenever you are merging coins in one transaction, it becomes clear to any outside observer that these coins belong to the same entity, thus linking the previous transaction history.
You want to avoid merging `anonymity set 1` coins with `anonymity set > 1` mixed coins whenever possible, because this will link these coins and negate the privacy of the mixed coins gained through the CoinJoin.

## Your options to use change privately

### Avoid change in the first place.
Whenever possible, send transactions where the destination addresses receive the entire value, and you don't get any change back.
This can easily be done by clicking the `Max` button in the `Send` tab, which will automatically deduct the mining fee and send the highest amount possible to the destination.
This might not be possible in some cases where you have to pay a specific value of a payment request.
However, in other cases it is possible, for example donations or when depositing to an exchange.
Consider supporting invaluable projects like [The Tor Project](https://donate.torproject.org/cryptocurrency) or [the Electronic Frontier Foundation](https://supporters.eff.org/donate/donate), you can find a list of organizations that accept bitcoin donations [here](https://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projects).

### Spend the change to another entity, if these two won't make you trouble knowing you interact with both of them.
For example when you buy coffee with a 0.1 bitcoin mixed coin from Alice for 0.01 bitcoin, you get back 0.09 bitcoin change that Alice knows is yours.
If in the next transaction you spend the 0.09 bitcoin change in the pizza restaurant of Bob, then Alice might find out that you go to Bob's restaurant, and if she doesn't like that, then she can refuse to serve you coffee the next time, or even worse.
But if instead you spend the 0.09 bitcoin change in a transaction to Carol, a good friend of Alice, then Alice might not care and will still give you coffee for the next round.

### Mix with JoinMarket.
In [JoinMarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) as a market taker you can specify exactly what denomination of equal value outputs are generated in the CoinJoin.
So you can send the Wasabi change to your JoinMarket wallet and take an offer to mix for some rounds.
The coin you will receive after the tumbling algorithm can have sufficient anonymity set, and you can use it for spending again.

### Open a Lightning Network channel.
The Lightning Network can be a very private way of sending bitcoin, and you can choose the channel size to be exactly the size of your change coin.
However, it is very important that you do not link this non-private coin to your main Lightning node public key.
So a good strategy is to create a new lightning node and public key, send the whole change coin into this fresh wallet, and open a channel of this amount to a random peer on the network.
Then route a payment either to a merchant for goods and services, or to your own main Lightning node for further use.
After the balance of the channel is entirely on the other side, cooperatively close the channel with your peer, so that he gets the only output in the closing transaction.
Since Wasabi does not yet support Lightning Network functionality, you must use a different wallet for this task.

### Atomic swap into Lightning Network
There are some services that provide an atomic swap where you send the whole change coin to a multisignature hashed time locked contract on-chain.
In exchange you receive a payment routed through the Lightning Network into one of your payment channels.
The swap is atomic, meaning either you receive the lightning payment, or you get the bitcoin back on-chain, so the service provider cannot steal from you.
If you use a regular lightning invoice to receive the funds, then the service provider knows your node public key and the channel he sends the bitcoin to.
For much superior privacy, use rendezvous routing so that the sender does not gain knowledge of your receiving node.
Also ensure that the communication with the swap server is done over the tor network.

### Consolidate several change coins, but in a CoinJoin directly.
If you would consolidate many change coins in a regular non-CoinJoin transaction in the `Send` tab, then any outside observer can easily see that one user controls all these coins.
But when consolidating in a CoinJoin directly, because there are hundreds of randomly ordered inputs in a Wasabi CoinJoin transaction, it is no longer easy to find out which coins belong to one single user.
However, a well resourced attacker can perform [CoinJoin sudoku](/FAQ/FAQ-GeneralBitcoinPrivacy.md#what-is-a-coinjoin-sudoku) to find out which several inputs fund the change output.
Further, during the [input registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase), your wallet provides an input proof for all the registered coins to the coordinator.
Thus the coordinator knows that you control all these coins, and although zkSNACKs claims to not keep any logs, it is a reasonable assumption that everyone knows what the coordinator knows.
In this CoinJoin you get an equal value mixed coin, which is no longer tied to any of your previous change coins (inputs), and a change output that can be tied to these inputs.
So consolidating your change in a CoinJoin is strictly more private and efficient than consolidating in a regular sending transaction, but it still leaks sensitive information.

### Spend the change to the same entity as the initial transaction, but always use a new address.
So if in the first transaction you have 0.1 bitcoin and send Alice 0.04 bitcoin, you get 0.06 bitcoin back as change.
Now in the second transaction where you want to send Alice 0.05 bitcoin, you can select that 0.06 bitcoin change coin without loosing any privacy, because Alice already knows this is your coin.
In this second transaction you will get back 0.01 bitcoin as change.
If in a third transaction you want to send Alice 0.02 bitcoin, then you can consolidate the 0.01 bitcoin change with a new 0.1 bitcoin mixed coin, thus getting 0.09 bitcoin change.
Now Alice knows that you owned the 0.1 bitcoin and and that you currently own the 0.09 bitcoin change, but she cannot find out about your premix transaction history.

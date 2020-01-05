---
{
  "title": "What to do with Change Coins",
  "description": "Details about the privacy of different types of change and strategies for using them. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

## What to do with "change" coins

[[toc]]


## Types of change

### Non-CoinJoin change

Let's assume you want to send 0.5 bitcoins to Alice.
In the `Send` tab you select one or more UTXO, these are the inputs of the transaction.
For example, let's assume that you choose a red-shield / anonymity set 1 UTXO worth 2 bitcoins.
You put Alice's address in the `Receiving Address` field, and set the spending `Amount`.
In this example, we are sending 0.5 bitcoins.
This will be the first output of the transaction.

Since your chosen UTXO contained 2 bitcoins, after sending 0.5 to Alice there will be 1.5 bitcoin remaining from the original amount.
This left over amount will automatically go to a new address in your wallet, and this is called the change output.

This leftover 1.5 bitcoin change UTXO is connected to the input UTXO of the transaction, and thus also has an `anonymity set` of 1.
As a result, when you send this leftover/change coin in a new transaction, it is clear to any observer that you were part of the transaction that sent 0.5 bitcoin to Alice.

This process is applicable to any bitcoin transaction where the "send" amount is less than the total number of bitcoins associated with a given address/UTXO. 

### First round CoinJoin change

When you have a KYC red-shield `anonymity set 1` UTXO and you register it for a CoinJoin round, you will afterwards receive 1 green-shield `anonymity set 'x'` UTXO, and one red-shield `anonymity set 1` change UTXO. The number represented by 'x' shown in the green-shield will reflect the anonymity set size for that round.

In this example, lets assume that the current minimum amount that can be registered for a CoinJoin round is 0.10 bitcoin. You happen to have a UTXO worth 0.105 bitcoin, and you select it to be CoinJoined.  

 After this CoinJoin round has concluded, you will receive 2 separate UTXO's. The larger UTXO will have a green-shield that indicates the size of the anonymity set achieved in that CoinJoin round. The other, much smaller UXTO will be the amount (change) that was left over, and it will have a red-shield indicating an anonymity set of '1' as it did not participate in the CoinJoin. 

Remember, all inputs and outputs to a CoinJoin round must be exactly the same size. Otherwise, it would be easy to trace any of the output UTXO's back to its original/input UTXO. So, in the vast majority of CoinJoin rounds, there will be at least a small amount of leftover/change after the round has completed.

The small UXTO that is leftover/change from a CoinJoin round is clearly tied to your KYC input UTXO, but the green-shield UTXO is not. If afterwards, you combine the red-shield UTXO with the green-shield UTXO in a single transaction, then it is clear that both came from the same owner. Since your identity was already known in the red-shield/anonset 1 UTXO, it is now linked with certainty to your CoinJoined UTXO.

Whenever you combine and send more than one UTXO in a single transaction, the lowest anonymity set among the inputs becomes the overriding anonymity set for all of the UTXOs used in that transaction.


### Second round CoinJoin change

When you take a 100 anonset UTXO, and you CoinJoin it again with a new 100 anonset round, then you receive one UTXO with new, combined anonset of 200, and one leftover/change UTXO with same anonset as the input UTXO: 100.

The change UTXO still has an anonset 100 because it is the leftover, non-CoinJoined change output of a second CoinJoin that used the 100 anonset UTXO as beginning input.
This change can still reveal premix history which is another CoinJoin, but ownership analysis cannot go further back than the first CoinJoin.

It is ok to use and spend this change output. Depending on who you are sending to, and what level of privacy you desire in that transaction, you could choose to send your coins with an anonset of 100, or for even more privacy, you can choose to send the coins with an anonset of 200. Just remember that if you combine the two in same transaction, your effective anonymity set will be the lower anonymity set number of the selected coins. 

## Why change is an issue

Change is not inherently bad, it's a fundamental part of how Bitcoin and the UTXO model works.
However, when sending a coin that is change from an earlier transaction, then the receiver can easily deduce that the sender was also part of the previous transaction that generated the change.

Whenever you are merging coins in one transaction, it becomes clear to any outside observer that these coins belong to the same entity, thus linking the previous transaction history.

You want to avoid merging `anonymity set 1` coins with `anonymity set > 1` mixed coins whenever possible, because this will link these coins and negate the privacy of the mixed coins gained through the CoinJoin.

## Your options to use change privately

### Avoid change in the first place.
Whenever possible, choose UTXO's for transactions where the destination addresses receive the entire value of your UTXO's, and you don't get any change back.
This can easily be done by clicking the `Max` button in the `Send` tab, which will automatically deduct the mining fee and send the highest amount possible to the destination.
This might not be possible in some cases where you have to pay a specific value of a payment request.

However, in other cases it is possible, for example donations or when depositing to an exchange.
Consider supporting invaluable projects like [The Tor Project](https://donate.torproject.org/cryptocurrency) or [the Electronic Frontier Foundation](https://supporters.eff.org/donate/donate). You can find a list of organizations that accept bitcoin donations [here](https://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projects).

### Spend the change with another entity, where you don't mind if each of the two know that you also sent coins to the other person.
For example, if you buy something from Alice that costs 0.03 bitcoin, and you choose a UTXO in your wallet containing 0.1 bitcoin to use for payment.
UTXO in your wallet containing 0.10 bitcoin to use for payment. Alice receives her 0.03 bitcoin, and the remaining change (0.07) bitcoin is assigned to another address in your wallet. Since Alice knows the details of the transaction, she knows that the 0.07 bitcoin at that address belongs to you. 

If you then send that 0.07 bitcoin to someone else that Alice doesn't like, she can see it and could potentially use that information against you. But if instead you spend the 0.07 bitcoin change in a transaction to Carol, who you know is a good friend of Alice, then Alice probably won't mind.

### Mix with JoinMarket.
In [JoinMarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) as a `market taker` you can specify exactly what denomination of equal value outputs are generated in the CoinJoin.
So you can send the Wasabi change to your JoinMarket wallet and take an offer to mix for some number of rounds.

The coins you will receive after the JoinMarket tumbling algorithm will have a sufficient anonymity set, and you can use them for spending again.

### Open a Lightning Network channel.
The Lightning Network can be a very private way of sending bitcoin, and you can choose the channel size to be exactly the size of your change coin.
However, it is very important that you do not link this non-private coin to your main Lightning node public key.

So, a good strategy is to create a new lightning node and public key, send the whole change coin into this fresh wallet, and open a channel of this amount to a random peer on the network. Then route a payment either to a merchant for goods and services, or to your own main Lightning node for further use.  

After the balance of the channel is entirely on the other side, cooperatively close the channel with your peer, so that he gets the only output in the closing transaction.  

Since Wasabi does not yet support Lightning Network functionality, you must use a different wallet for this task.

### Atomic swap into Lightning Network
There are some services that provide an atomic swap where you send the whole change coin to a multisignature hashed time locked contract on-chain.
In exchange, you receive a payment routed through the Lightning Network into one of your payment channels.  

The swap is atomic, meaning either you receive the lightning payment, or you get the bitcoin back on-chain, so the service provider cannot steal from you.
If you use a regular lightning invoice to receive the funds, then the service provider knows your node's public key and the channel he sends the bitcoin to.  

For much better privacy, use rendezvous routing so that the sender does not gain knowledge of your receiving node. Also ensure that the communication with the swap server is done over the tor network.

### Consolidate several change coins, but in a CoinJoin directly.
If you consolidate many change coins in a regular non-CoinJoin transaction in the `Send` tab, then any outside observer can easily see that one user controls all these coins.
But when consolidating in a CoinJoin directly, because there are hundreds of randomly ordered inputs in a Wasabi CoinJoin transaction, it is no longer easy to find out which coins belong to one single user.

However, a well resourced attacker can perform [CoinJoin sudoku](/FAQ/FAQ-GeneralBitcoinPrivacy.md#what-is-a-coinjoin-sudoku) to find out which of the many inputs fund the change output.
Further, during the [input registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase), your wallet provides an input proof for all the registered coins to the coordinator.
Thus the coordinator knows that you control all these coins, and although zkSNACKs claims to not keep any logs, it is a reasonable assumption that everyone knows what the coordinator knows.

In this CoinJoin you get an equal value mixed coin, which is no longer tied to any of your previous change coins (inputs), and a change output that can be tied to these inputs.
So consolidating your change in a CoinJoin is significantly more private and efficient than consolidating in a regular sending transaction, but it still leaks sensitive information.

### Spend the change to the same entity as in the initial transaction, but always use a new address.
So, if in the first transaction you have 0.10 bitcoin and send Alice 0.04 bitcoin, you get 0.06 bitcoin back as change in a new address, which Alice can see belongs to you.
Now, in a second transaction where you want to send Alice 0.05 bitcoin, you can select that 0.06 bitcoin change coin without losing any privacy, because Alice already knows this is your coin.

In this second transaction you will get back 0.01 bitcoin as change, which again, will still be known to Alice.
If, in a third transaction you want to send Alice 0.02 bitcoin, then you can consolidate the 0.01 bitcoin change with a new 0.10 bitcoin mixed coin, thus getting 0.09 bitcoin change.

Now Alice will know that you owned the 0.10 bitcoin and that you currently own the 0.09 bitcoin change, but she cannot find out about your premix transaction history.

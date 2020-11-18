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

### Non-CoinJoin change

Let's assume you want to send 0.5 bitcoin to Alice.
In the `Send` tab you select one or more UTXO, these are the inputs of the transaction.
For example, let's assume that you choose a <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> 1 anonymity set UTXO worth 2 bitcoins.
You put Alice's address in the `Receiving Address` field, and set the spending `Amount` to 0.5 bitcoin.
This will be one output of the transaction.

Since your chosen UTXO is worth 2 bitcoins, after sending 0.5 bitcoin to Alice there will be 1.5 bitcoins change from the original amount.
This leftover amount will automatically go to a new address in your wallet, and this is called the change output.

This leftover 1.5 bitcoins change UTXO is connected to the input UTXO of the transaction, and thus also has an `anonymity set` of 1.
As a result, when you send this leftover/change coin in a new transaction, it is clear to any observer that you were part of the transaction that sent 0.5 bitcoin to someone.

This process is applicable to any Bitcoin transaction where the `sent` amount is less than the total value of the input UTXO.

:::tip
Since Wasabi v1.1.11, it is possible to define a custom change address for transactions.
You can activate this in the settings.
:::

### First round CoinJoin change

Let's say that you have a KYC <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> `anonymity set 1` UTXO, and you register it for a CoinJoin round.
Afterwards, depending on the value of your UTXO in relation to the minimum CoinJoin amount and on the value of UTXOs of the other participants, you will receive two or more UTXOs.
One of those will be the change leftover from the round, and it will retain the <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> `anonymity set 1` designation.
The remaining UTXO(s) will have either a <img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" />, <img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" /> or <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> shield.
You can see the `anonymity set` value of any UTXO by hovering your mouse-pointer over its associated shield.


In this example, let's assume that the current minimum amount that can be registered for a CoinJoin round is 0.1 bitcoin.
You happen to have a UTXO worth 0.105 bitcoin, and you select it to be coinjoined.

After this CoinJoin round has concluded, you will receive 2 separate UTXOs.
The larger UTXO will (most probably) have a colored shield (<img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" />, <img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" /> or <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> based on your [Privacy Level Settings](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target)) that indicates the level of the anonymity set achieved in that CoinJoin round.
The other, much smaller UTXO will be the amount (change) that was left over, and it will have a <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> indicating an anonymity set of `1` as it does not have the equal value denomination of the CoinJoin.

Remember, to have anonymity set UTXOs, all denomination outputs of a CoinJoin round must be equal.
For non-equal change outputs, an attacker can do subset sum analysis and find a link between inputs and change outputs.
In some cases, when the change is close to the minimum denomination, this calculation can become computationally infeasible, meaning that there are too many possible interpretations that cannot be calculated.
Thus, in practice, such a change coin can have privacy too.
But in most cases, especially when coinjoining large amounts, this link can be done easily.
Thus, it is best to assume that the change coin has no anonymity set.

The small UTXO that is leftover/change from a CoinJoin round is clearly tied to your KYC input UTXO, but the <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> UTXO is not.
If afterwards, you combine the <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> UTXO with a <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> UTXO in a single transaction, then it is clear that both came from the same owner.
Since your identity was already known in the <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> `anonymity set 1`, it can now be linked to your coinjoined UTXO.

Whenever you combine and send more than one UTXO in a single transaction, the lowest anonymity set among the inputs becomes the overriding anonymity set for all of the UTXOs used in that transaction.


### Second round CoinJoin change

When you take a <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> 100 anonymity set UTXO, and you CoinJoin it again in a new 100 participant round, then you receive one <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> UTXO with combined anonymity set of 200, and one <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> leftover/change UTXO with the same anonymity set as the input UTXO: 100.
The change UTXO still has an anonymity set of 100 because with subset sum analysis it can potentially be linked to its corresponding input, which is a previous CoinJoin output with 100 anonymity set.
This change can still reveal premix history which is another CoinJoin, but ownership analysis cannot go further back than the first CoinJoin.

It is ok to use and spend this change output.
Depending on who you are sending to, and what level of privacy you desire in that transaction, you could choose to send your coins with an anonset of 100, or for even more privacy, you can choose to send the coins with an anonset of 200.
Just remember that if you consolidate the two in the same transaction, your effective anonymity set will be the lowest anonymity set number of the selected coins, in this case 100.

## Why change is an issue

Change is not inherently bad, it's a fundamental part of how Bitcoin and the UTXO model works.
However, when sending a coin that is change from an earlier transaction, then the receiver can easily deduce that the sender was also part of the previous transaction that generated the change.

Whenever you are merging coins in one transaction, it becomes clear to any outside observer that these coins belong to the same entity, thus linking the previous transaction history.
Thus [identifying change](/why-wasabi/Coins.md#heuristics-identifying-change) based on some heuristics is a top goal of transaction surveillance.

You want to avoid merging coins with different anonymity set values whenever possible, because this will link these coins and reduce their anonymity set to the lowest value.

## Your options to use change privately

### Avoid change in the first place.

Whenever possible, choose UTXO's for transactions where the destination addresses receive the entire value of your UTXO's, and you don't get any change back.
This can easily be done by clicking the `Max` button in the `Send` tab, which will automatically deduct the mining fee and send the highest amount possible to the destination.
This might not be possible in some cases where you have to pay a specific value of a payment request.

However, in other cases it is possible, for example donations or when depositing to an exchange.
Consider supporting invaluable projects like [The Tor Project](https://donate.torproject.org/cryptocurrency) and [the Electronic Frontier Foundation](https://supporters.eff.org/donate/donate), or [Bitcoin developers that are accepting donations](https://bitcoindevlist.com).
You can also find a list of organizations that accept Bitcoin donations [here](https://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projects).

### Make it difficult to deduce the change.

There are [common heuristics identifying change outputs](/why-wasabi/Coins.md#heuristics-identifying-change), try to avoid these with every transaction.
Don't reuse addresses, don't send precise amounts but randomize them, don't use replace by fee, and try to send to bech32 addresses.

### Spend the change to the same entity as in the initial transaction.

If in the first transaction you have 0.10 bitcoin and send Alice 0.04 bitcoin, you get 0.06 bitcoin back as change in a new address, which Alice can see belongs to you.
Now, in a second transaction where you want to send Alice 0.05 bitcoin, you can select that 0.06 bitcoin change coin without losing any privacy, because Alice already knows this is your coin.

In this second transaction you will get back 0.01 bitcoin as change, which again, will still be known to Alice.
If in a third transaction you want to send Alice 0.02 bitcoin, then you can consolidate the 0.01 bitcoin change with a new 0.10 bitcoin mixed coin, thus getting 0.09 bitcoin change.

Now Alice will know that you owned the 0.10 bitcoin and that you currently own the 0.09 bitcoin change, but she cannot find out about your premix transaction history.

### Spend the change with another entity, where you don't mind if each of the two knows that you transact with the other entity.

When you send a transaction to Alice, then she knows that the change output goes back to you.
You can use this change to send bitcoin to Bob, and if he has bad privacy habits, Alice can find out you sent to him.
But if you have a trusted relationship with the two, then this is alright, and not part of your thread model.

### Mix with JoinMarket.

In [JoinMarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) as a `market taker` you can specify exactly what denomination of equal value outputs are generated in the CoinJoin.
So you can send the Wasabi change to your JoinMarket wallet and take an offer to CoinJoin for several rounds.

The coins you will receive after the JoinMarket tumbling algorithm will have a sufficient anonymity set, and you can use them for spending again.

### Open a Lightning Network channel.

The Lightning Network can be a very private way of sending bitcoin, and you can choose the channel size to be exactly the size of your change coin.
However, it is very important that you do not link this non-private coin to your main Lightning node public key.

So, a good strategy is to create a new Lightning node and public key, send the whole change coin into this fresh wallet, and open a private non-announced channel of this amount to a random peer on the network.
Then route a payment either to a merchant for goods and services, or to your own main Lightning node for further use.

After the balance of the channel is entirely on the other side, cooperatively close the channel with your peer, so that he gets the only output in the closing transaction.

Since Wasabi does not yet support Lightning Network functionality, you must use a different wallet for this task.

### Atomic swap into Lightning Network

There are some services that provide an atomic swap where you send the whole change coin to a multisignature hashed time-locked contract on-chain.
In exchange, you receive a payment routed through the Lightning Network into one of your payment channels.

The swap is atomic, meaning either you receive the lightning payment, or you get the bitcoin back on-chain, so the service provider cannot steal from you.
If you use a regular Lightning invoice to receive the funds, then the service provider knows your node's public key and the channel he sends the bitcoin to.

For much better privacy, use rendezvous routing so that the sender does not gain knowledge of your receiving node.
Also, ensure that the communication with the swap server is done over the Tor network.

### Consolidate several change coins, but in a CoinJoin directly.

If you consolidate many change coins in a regular non-CoinJoin transaction in the `Send` tab, then any outside observer can easily see that one user controls all these coins.
But when consolidating in a CoinJoin directly, because there are hundreds of randomly ordered inputs in a Wasabi CoinJoin transaction, it is no longer easy to find out which coins belong to one single user.

However, a well-resourced attacker can perform [subset sum analysis](/FAQ/FAQ-GeneralBitcoinPrivacy.md#what-is-a-coinjoin-sudoku) to find out which of the many inputs fund the change output.
Further, during the [input registration phase](/using-wasabi/CoinJoin.md#input-registration), the same Tor identity Alice provides input proofs for **all** the registered coins to the coordinator.
Thus the coordinator knows that you control all these coins, and although zkSNACKs claims to not keep any logs, it is a reasonable assumption that everyone knows what the coordinator knows.

For these reasons it is not recommended that you consolidate change coins.
That said, consolidating your change in a CoinJoin is strictly more private and efficient than consolidating in a regular sending transaction.

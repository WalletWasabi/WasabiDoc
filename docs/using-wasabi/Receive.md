---
{
  "title": "Receive",
  "description": "A step by step guide on how to receive bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Receive bitcoin

[[toc]]

## Bitcoin public keys and addresses

The Bitcoin protocol utilizes [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) to defend and verify the property rights of the individuals holding and transacting bitcoin.
A private key is a large random number that should be kept secret.
With the [elliptic curve digital signature algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), based on the private key you can calculate a public key.
If someone has only the public key, it is computationally infeasible [pretty much impossible] to calculate the private key.
Whoever knows the private key can calculate a cryptography signature over a message, which proves that the private key was known by the signer, without actually revealing the secret.

For data size efficiency, in Bitcoin the public key is [hashed](https://en.wikipedia.org/wiki/Cryptographic_hash_function) and encoded into a [bech32](/using-wasabi/BIPs.md#bip-173-base32-address-format-for-native-v0-16-witness-outputs) address.
This address commits to the public key, which commits to the private key.
In a Bitcoin transaction, the output creates a new unspent transaction output which is "locked up" by an address.
The input of the transaction spends a UTXO by providing a valid signature of the public key that the address committed to.

:::tip
Wasabi Wallet does not "store your money", rather it stores your public keys and the encrypted secret that requires a password to decrypt the private keys, it creates addresses for receiving bitcoin, and it signs transactions that spend your bitcoin.
:::

## The problem with address reuse

Whenever you use the same address to lock up different UTXOs, then all these coins can be spent by anyone who knows the private key.
This makes it obvious for anyone that this one entity [you] owns all these coins, which is very bad for privacy.
The first rule of Bitcoin privacy is [never reuse addresses](/using-wasabi/AddressReuse.md)!

:::tip
This is why Wasabi removes the address from the `Receive` tab as soon as it has received a coin.
:::

## The importance of labeling

Satoshis are the base unit currency of the Bitcoin network and are truly fungible, meaning that any 100 000 000 satoshis are always equal to 1 bitcoin.
Just like with gold atoms, it doesn't matter which specific gold atoms you have, as long as it's gold, it's gold.
However, an unspent transaction output, a bitcoin, is a chunk of money and is not fungible, because it has a different amount of satoshis in it, a different public key locking it up, a unique transaction history, and a unique index number.
This is just like a gold coin, with a unique amount of gold atoms, and either a pretty mintage, or an old chipped broken coin.
Because UTXOs are not fungible, it is very important to know exactly which coin is which, and that is done by carefully labeling.

:::tip
In Wasabi it is mandatory to give every address a label of which entities know about this address, so that later you know where you got the coin from and you know how to spend it.
:::

![](/ReceiveLabelingRequired.png)

Wasabi is not like most of other bitcoin wallets, it is a privacy oriented wallet and every feature and every design decision is based mainly (sometimes exclusively) on privacy cost/benefits analysis.
For that reason many features depend on each other and a correct understanding of how they play together is critical to achieve and improve the privacy of our transactions.

### Coin control

Coin control is a key feature that enables all the rest of features.
How could we CoinJoin our coins if we weren't able to select those coins we want to participate with?
How could we know which coins are being spend in a transaction without a coin control?
How could we decide what to reveal to a KYC exchange without this feature?
Well, it is not possible.

Wasabi is a coins-oriented wallet in the sense that coins are the most important unit of information information to take decisions about privacy.

### Labels

As a privacy-oriented solution the focus is always on minimizing how much we reveal about our financial activity to others. 
For that reason when we create a new address to receive bitcoins, we are forced to label that coin!
And what kind of information do we have to provide here?
The label has to tell us who is/are the one/s that know about that coin.

For example, if I create a new address to receive a 0.5 BTC payment from Andrew for an old laptop that I sold to him then the label has to be: `Andrew`.

Most of other wallets out there don't care much about privacy (or at least no so much as Wasabi does) and for that reason the don't allow us to attach this critical data to our coins.

Wasabi does not label transactions, but the coins that are associated with them.
The label is not for describing the `reason for payment`, but rather to list the `involved parties`. 
Understanding this difference between labeling a coin (Wasabi) and describing a transaction (Many other wallets) is critical important for your privacy.

### Clusters

Following with the previous example, if I have to send a fraction (`0.1 BTC`) of the coin received in exchange for my laptop to a Charlie then that transaction label has to be: `Charlie`.
In that way, the change (`0.3999xxx BTC`) will be known by Andrew and Charlie because they both will be able to follow the change.
That's exactly what Wasabi displays in the coins list (cluster column), Wasabi tells us who are the ones that know about each of our coins in order to allow us to decide what to do with our coins.

Let's make now another example.
Imagine you have other coins, let say one known by Alice, other known by Coinbase and finally one know by Charlie.
Imagine you need to sell a few sats to Charlie, which coin/s should you send?
The obvious election is the one already known by Charlie because doing that he cannot learn anything new about our wallet, moreover, nobody can learn anything new!
But what if the coin is not big enough and we need to use more than one coin?
You can use the one known by Alice or the one known by Coinbase but, are you okay with Charlie knowing about your deposit (or withdrawal) from the exchange?
Are you okay with Alice knowing about your deal with Charlie?
In case none of those combinations are acceptable for you then you should CoinJoin your coins.

### CoinJoined coins

Those that participate in a Wasabi CoinJoin transaction receive at least one coin with a anonymity set level that depends on the number of participants in that transaction.
By default Wasabi tries to create transactions with 100 unknown participants so, the received coin can have 100 anonymity set what means that it is really hard for an observer to know who that coin belong to.
For that reason a coin with high anonymity set loses the cluster original cluster which it belonged.

### Automatic selection

As we can see now the correct labeling of coins allows Wasabi to display useful information about who know about our wallet and how much they know.
It also allow Wasabi to select coins for you if you want (not recommended).
Basically, if you select all your coins Wasabi will select those that minimize the number of people that will learn more about your wallet.

It #twoweeks Wasabi will implement a selection strategy that chooses the coins based on the receiver knowledge of our coins by sending him/her those that are already known by him/her, etc.

### Final words about labels and examples

4 coins with good labels:

```
Andrew
David, Me
Carlos, Sofia
Coinbase
```

2 coins with bad labels:

```
Payment from Andrew for my old laptop
From my old wallet
```

In case we take the two first coins with good labels and send that to María, look how the change cluster will be displayed: `Maria, Andrew, David, Me` (this people knows about the coin).
Now, look how this will be displayed if I use the two coins with bad labels: `Maria, Payment from Andrew for my old laptop, From my old wallet` (what the heck is this telling me!?)

So, think in coins, think in who knows and think that you have to take decisions about privacy based on what you are going to reveal to whom.
Wasabi doesn't care about why you transact with bitcoins, it only cares about who you transact with because it need to take care of your privacy.

## Generating addresses step-by-step

1. Start Wasabi and open the wallet that you want to receive coins into.
2. Go to the `Receive` tab.
3. Specify a label of the entities who know about this address.
4. Click on `Generate Address`.
5. Optionally change the label in the right click menu if new entities learn about the address.

![](/ReceiveAddressDropDown.png)
![](/ReceiveAddressMenu.png)

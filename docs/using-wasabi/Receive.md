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

Wasabi is not like other Bitcoin wallets, it is a privacy-oriented wallet and every feature and every design decision is based mainly (sometimes exclusively) on privacy costs/benefits analysis.
For that reason many of its features depend on each other and a correct understanding of how they play together is critical to achieve and improve the privacy of our transactions.

### Coin control

Coin control is a key feature that enables all the other features.
How could we CoinJoin our coins if we aren't able to select the ones we want to participate with?
How could we know which coins are being spent in a transaction?
How could we decide what to reveal to a KYC exchange?
Well, without coin control it is not possible.

Wasabi is a coins-oriented wallet in the sense that coins are the most important unit of information to take decisions to protect privacy.

### Labels

As a privacy-oriented solution the focus is always on minimizing how much we reveal about our financial activity.
For that reason when we create a new address to receive bitcoins or when we send a transaction that generates a change coin, we are forced to label that coin!
And what kind of information do we have to provide here?
The label has to tell us who is/are the one/s that know about that coin.

For example, if I create a new address to receive a `0.5 BTC` payment from Andrew for a laptop that I sold to him then the label has to be: `Andrew`.

Most of the wallets out there don't care much about privacy (or at least not as much as Wasabi does) and for that reason they don't allow us to attach this critical data to our coins.

Wasabi does not label transactions, but the addresses that control the coins.
The label is not for describing the `reason for payment`, but rather to list the `involved parties`.
Understanding this difference between labeling an address (Wasabi) and describing a transaction (many other wallets) is very important for our privacy.

### Clusters

Following with the previous example, if I have to send a fraction (`0.1 BTC`) of the previously received coin to a Charlie then that transaction label has to be: `Charlie`.
In that way, the change (`0.4 BTC`) will be known by Andrew and Charlie because they both will be able to follow the change.
That's exactly what Wasabi displays in the coins list (cluster column), Wasabi tells us who are the ones that know about each of our coins in order to allow us to decide what to do with the coins.

Let's make another example:
Imagine you have three coins, one known by Alice, one known by a KYC exchange and finally one known by Charlie.
Imagine you need to sell few sats to Charlie, which coin/s should you send?
The obvious selection is the one already known by Charlie because by doing that he cannot learn anything new about our wallet, moreover, neither Alice nor the KYC exchange can learn anything new!
But what if the coin is not big enough and we need to use more than one coin?
You can use the one known by Alice or the one known by the KYC exchange, but are you okay with Charlie knowing about your deposit/withdrawal from the exchange?
Are you okay with Alice knowing about your deal with Charlie?
In case none of those combinations are acceptable for you then you should CoinJoin your coins.

### CoinJoined coins

Those that participate in a Wasabi [CoinJoin](/using-wasabi/CoinJoin.md) transaction receive at least one coin with an anonymity set level that depends on the number of participants in that transaction.
By default Wasabi tries to create transactions with 100 unknown participants, so the received coin can have 100 anonymity set which means it is really hard for an observer to know who that coin belongs to.
For that reason a coin with a high anonymity set loses the cluster which it originally had.

### Automatic selection

As we can see now the correct labeling of coins allows Wasabi to display useful information about who knows about our wallet and how much they know.
It also allows Wasabi to select coins for you if you want (not recommended).
Basically, if you select all your coins and the amount you want to send is smaller than the total, Wasabi will select only enough coins to minimize the number of people that will learn more about your wallet.

### Final words about labels and examples

4 coins with good labels:

```
Andrew
David, Me
Carlos, Sofia
KYC exchange
```

2 coins with bad labels:

```
Payment from Andrew for my laptop
From my old wallet
```

In case we take the two first coins with good labels and send them to María, look how the change cluster will be displayed: `Maria, Andrew, David, Me` (these people know about the coin).
Now, look how this will be displayed if I use the two coins with bad labels: `Maria, Payment from Andrew for my laptop, From my old wallet` (Is this high-quality info about the privacy level of my coin? Of course not).

So, think about coins, think about who knows and make sure to take decisions about privacy based on what you are going to reveal and to whom.
Wasabi doesn't care about why you transact with bitcoins, it only cares about who you transact with, because this is what helps you reclaim your privacy.

## Generating addresses step-by-step

1. Start Wasabi and open the wallet that you want to receive coins into.
2. Go to the `Receive` tab.
3. Specify a label of the entities who know about this address.
4. Click on `Generate Address`.
5. Optionally change the label in the right click menu if new entities learn about the address.

![](/ReceiveAddressDropDownMenu.png)

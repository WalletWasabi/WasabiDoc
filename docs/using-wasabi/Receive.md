---
{
  "title": "Receive",
  "description": "A step-by-step guide on how to receive bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Receive bitcoin

[[toc]]

[![Receive bitcoin in Wasabi Wallet](https://img.youtube.com/vi/Wjc00GBn-OQ/maxresdefault.jpg)](https://youtu.be/Wjc00GBn-OQ "Receive bitcoin in Wasabi Wallet")

## Generating addresses step-by-step

1. Start Wasabi and open the wallet that you want to receive coins into.
2. Click the `Receive` button in the main view's top right corner.
3. Type in the name of the entities who know that this address is yours.
If you have already used a label before, simply choose it from the suggested labels.

![Receive label in Wasabi](/ReceiveLabelingRequired.png "Receive label in Wasabi")

4. Press `Continue` and the wallet will generate a new address. 

![Bitcoin address in Wasabi](/UnusedReceiveAddress.png "Bitcoin address in Wasabi")

## Bitcoin public keys and addresses

The Bitcoin protocol utilizes [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) to defend and verify the property rights of the individuals holding and transacting bitcoin.
A private key is a large random number that should be kept secret.
With the [elliptic curve digital signature algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), based on the private key you can calculate a public key.
If someone has only the public key, it is computationally infeasible [pretty much impossible] to calculate the private key.
Whoever knows the private key can calculate a cryptography signature over a message, which proves that the private key was known by the signer, without actually revealing the secret.

For data size efficiency, in Bitcoin, the public key is [hashed](https://en.wikipedia.org/wiki/Cryptographic_hash_function) and encoded into a [bech32](/using-wasabi/BIPs.md#bip-173-base32-address-format-for-native-v0-16-witness-outputs) address.
This address commits to the public key, which commits to the private key.
In a Bitcoin transaction, the output creates a new unspent transaction output which is "locked up" by an address.
The input of the transaction spends a UTXO by providing a valid signature of the public key that the address committed to.

:::tip
Wasabi Wallet does not "store your money", rather it stores your public keys and an encrypted secret that requires your password to derive the private keys.
It creates addresses for receiving bitcoin, and it signs transactions that spend your bitcoin.
:::

## The problem with address reuse

Whenever you use the same address to lock up different UTXOs, then all these coins can be spent by anyone who knows the same private key.
This makes it obvious for anyone that this one entity [you] owns all these coins, which is very bad for privacy.
The first rule of Bitcoin privacy is [never reuse addresses](/why-wasabi/AddressReuse.md)!

:::tip
This is why Wasabi removes the address from the `Unused Receive Address` list as soon as it has received a coin.
:::

## The importance of labeling

Satoshis are the base unit currency of the Bitcoin network and are truly fungible, meaning that any 100 000 000 satoshis are always equal to 1 bitcoin.
Just like with gold atoms, it doesn't matter which specific gold atoms you have, as long as it's gold, it's gold.
However, an unspent transaction output, a bitcoin, is a chunk of money and is not fungible, because it has a different amount of satoshis in it, a different public key locking it up, a unique transaction history, and a unique index number.
This is just like a gold coin, with a unique amount of gold atoms, and either a pretty mintage or an old chipped broken coin.
Because UTXOs are not fungible, it is very important to know exactly which coin is which, and that is done by carefully labeling.

For example, if I create a new address to receive a `0.5 BTC` payment from Andrew for a laptop that I sold to him then the label has to be: `Andrew`.

The label is not for describing the `reason for payment`, but rather to list those who know that this address is yours.
Understanding this difference between labeling an address and describing a transaction is very important for your privacy.

:::tip
In Wasabi it is mandatory to give every receive address a label of those who know that this address is yours, so that later you know what to do with it, and it also helps the auto coin selection algorithm when sending.
:::

### Clusters

Following the previous example, if I have to send a fraction (`0.1 BTC`) of the previously received coin to Charlie then in the `Send` tab the observers should be: `Charlie`.
In that way, the change (`0.4 BTC`) will be known by Andrew and Charlie because they both will be able to follow the change.
That's exactly what Wasabi displays in the coins list (cluster column), Wasabi tells us who are the ones that know about each of our coins in order to allow us to decide what to do with the coins.

Let's take a look at another example:
Imagine you have three coins, one known by Alice, one known by a KYC exchange and finally one known by Charlie.
Imagine you need to sell a few sats to Charlie, which coin/s should you send?
The obvious selection is the one already known by Charlie because by doing that he cannot learn anything new about our wallet, moreover, neither Alice nor the KYC exchange can learn anything new!
But what if the coin is not big enough and we need to use more than one coin?
You can use the one known by Alice or the one known by the KYC exchange, but are you okay with Charlie knowing about your deposit/withdrawal from the exchange?
Are you okay with Alice knowing about your deal with Charlie?
In case none of those combinations are acceptable for you then you should CoinJoin your coins.

### Coinjoined coins

Those inputs that participate in a Wasabi [coinjoin](/using-wasabi/CoinJoin.md) transaction get transformed into arbitrary sized outputs with an increased anonymity score.
By default, Wasabi tries to create big coinjoin transactions with many inputs and outputs, but the individual coins' privacy varies depending on the final amounts and values of the inputs and outputs of other participants.
The higher the anonymity score of a coin, the harder it is for an observer to know who that coin belongs to.
For that reason, coins with a high anonymity score are usually the ones preferred when making a payment transaction.
When coins achieve the target anonymity score of the selected coinjoin strategy, their values will the visible under the Privacy Progress bar.

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
Now, look how this will be displayed if I use the two coins with bad labels: `Maria, Payment from Andrew for my laptop, From my old wallet` (Is this high-quality info about the privacy level of my coin? Not really.).

So, think about coins, think about who knows and make sure to make decisions about privacy based on what you are going to reveal and to whom.
Wasabi doesn't care about why you transact with bitcoins, it only cares about who you transact with because this is what helps you reclaim your privacy.

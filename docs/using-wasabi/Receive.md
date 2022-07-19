---
{
  "title": "Receive",
  "description": "A step-by-step guide on how to receive bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Receive bitcoin

[[toc]]

---

## Generating addresses step-by-step

1. Start Wasabi and open the wallet that you want to receive coins into.
2. Click the `Receive` button in the main view's top right corner.
3. Type in the name of the entities who know about this address.
Optionally you can click on the suggested labels, in case you've used them before.

![Set known by in Wasabi Wallet](/ReceiveLabelingRequired.png "Set known by in Wasabi Wallet")

4. Press `Continue`

![Wasabi Wallet testnet address](/ReceiveAddress.png "Wasabi Wallet testnet address")

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
This is why Wasabi removes the address from the `Receive` tab as soon as it has received a coin.
:::

## The importance of labeling

Satoshis are the base unit currency of the Bitcoin network and are truly fungible, meaning that any 100 000 000 satoshis are always equal to 1 bitcoin.
Just like with gold atoms, it doesn't matter which specific gold atoms you have, as long as it's gold, it's gold.
However, an unspent transaction output, a bitcoin, is a chunk of money and is not fungible, because it has a different amount of satoshis in it, a different public key locking it up, a unique transaction history, and a unique index number.
This is just like a gold coin, with a unique amount of gold atoms, and either a pretty mintage or an old chipped broken coin.
Because UTXOs are not fungible, it is very important to know exactly which coin is which, and that is done by carefully labeling.

:::tip
In Wasabi it is mandatory to give every receive address a label of those who know that this address is yours, so that later you know what to do with it, and it also helps the auto coin selection algorithm when sending.
:::

![Set known by in Wasabi Wallet](/ReceiveLabelingRequired.png "Set known by in Wasabi Wallet")

### Known by Entities

For example, if I create a new address to receive a `0.5 BTC` payment from Andrew for a laptop that I sold to him then the label has to be: `Andrew`.

Wasabi does not label transactions, but the addresses that control the coins.
The label is not for describing the `reason for payment`, but rather to list the `involved parties`.
Understanding this difference between labeling an address and describing a transaction is very important for our privacy.

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

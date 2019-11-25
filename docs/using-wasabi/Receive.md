---
{
  "title": "Receive",
  "description": "A step by step guide on how to receive bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Receive bitcoin

[[toc]]

## Bitcoin public keys and addresses

The Bitcoin protocol utilizes [private public key asymmetric cryptograhpy](https://en.wikipedia.org/wiki/Public-key_cryptography) to defend and verify the property rights of the individuals holding and transacting bitcoin.
A private key is a large random number, and it is very important to keep this number a secret.
With the [elliptic curve digital signature algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), based on the private key you can calculate a public key.
If someone has only the public key, it is computationally infeasible [pretty much impossible] to calculate the private key.
Whoever has knowledge of the private key can calculate a cryptography signature over a message, which proves that the private key was known by the signer, without actually revealing the secret.

For data size efficiency, in Bitcoin the public key is [hashed](https://en.wikipedia.org/wiki/Cryptographic_hash_function) and encoded into a [bech32](/using-wasabi/BIPs.md#bip-173-base32-address-format-for-native-v0-16-witness-outputs) address.
This address commits to the public key, which commits to the private key.
In a Bitcoin transaction, the output creates a new unspent transaction output which is "locked up" by an address.
The input of the transaction spends a UTXO by providing a valid signature of the public key that the address committed to.

:::tip
Wasabi wallet does not "store your money", rather it stores your private and public keys, it creates addresses for receiving bitcoin, and it signs transactions that spend your bitcoin.
:::

## The problem with address reuse

When ever you use the same address to lock up several different UTXOs, then all these coins can be spend by the one who knows the private key.
This makes it obvious for anyone that this one entity [you] owns all these coins, which is very bad for privacy.
The first rule of Bitcoin privacy is [never reuse addresses](/using-wasabi/AddressReuse.md)!

:::tip
This is why Wasabi removes the address from the `Receive` tab as soon as it has received a coin.
:::

## The importance of labeling


![](/ReceiveLabelingRequired.png)

## Generating addresses step-by-step

1. Start Wasabi and open the wallet that you want to receive coins into.
2. Go to the `Receive` tab.
3. Specify a label of the entities who know about this address.
4. Click on `Generate Address` and it is automatically copied to your clipboard.
5. Optionally change the label in the right click menu if new entities learn about the address.

![](/ReceiveAddressDropDown.png)
![](/ReceiveAddressMenu.png)

---
{
  "title": "Send",
  "description": "A step by step guide on how to send bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Send

[[toc]]

## How to send bitcoin step by step

1. Select the coins you want to spend.
2. Specify a destination address.
3. If necessary label the observers of this transaction.
4. Specify the amount to send to the destination address, press the `Max` button to send the whole coins.
5. Select a mining fee.
6. Enter the password.
7. Click `Send Transaction`.

![](/Send.png)

## Coins

A coin is an unspent transaction output (UTXO), a chunk of bitcoin which can be send in a future transaction.
In the Wasabi wallet `Send` tab, you see a list of all the coins you can spend because you have their private keys.
You can get a coin by first [receiving](/using-wasabi/Receive.md) them from someone else, for example by earning them or buying them for fiat currency.
You can spend one or more coins by selecting them in the `Send` tab, if your payment amount is below the value of the selected coins, then you will receive a [change coin](/using-wasabi/Change.md) back.

## Clusters

Every time you receive a payment, you first must [label the observers](/using-wasabi/Receive.md#the-importance-of-labeling) who know this address is yours.
This transaction metadata is used to build a cluster of which people know about your coins.
For example, if you receive a coin from Alice, then the cluster is `Alice`.
If you now send half of this coin to Bob, then the cluster of your change coin is `Alice, Bob`.
The goal is to know the observers who know about your coins.

## Anonymity Set

In a Wasabi [CoinJoin](/using-wasabi/CoinJoin.md), many peers register coins in the input of the transaction, and in the output there are several equal value coins, for example 100 coins worth exactly 0.1 bitcoin.
This means that when looking at one of these CoinJoin outputs, there is a 1 in 100 chance to find the corresponding input.
Thus the higher the anonymity set, the more your post-mix coin is delinked from the pre-mix history.
Wasabi shows you three levels of anonymity sets: the yellow shield, the green shield and the check-mark shield.
By default they have an anonymity set of `2`, `21` and `50`, however, this can be [changed in the settings](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target).

![](/SendAnonset.png)

## Receiving Address

When sending bitcoin, you need to know the destination address of the receiver.
This commits to the spending condition that the receiver agrees to have for this coin.
The address can be a public key hash [starting with 1...], a script hash [starting with 3...], or a native segwit bech32 public key hash [starting with bc1q...].
Make sure that you ask the receiver for a [new address](/using-wasabi/AddressReuse.md) for every payment to protect your privacy and theirs.
Wasabi will calculate the checksum and notify you if the provided address is wrong.

## Label

Similar to the `Receive` tab, you must label every new address with the observers who know that this is your address.
In the `Send` tab an address is automatically generated to receive the change amount.
A label is not required when you send an entire coin, as there will be no change left.
The observer of a sending transaction is of course the receiver of it, as well as any other third party that will find out about it, for example a payment processor or an exchange.
This metadata will be used to build an accurate cluster of observers who know about your coins.

## Amount

In the `Amount` text box you can specify how many bitcoins the receiving address will gain.
If it is below the value of the selected inputs, then the leftover value will be sent to an automatically generated change address of yours.
You can send a whole coin by selecting the `Max` button, which will build a transaction with only one output, the receiving address, and no change.
You can also see the current US Dollar value of the sending amount.

If you specify a rounded amount, like `0.01000000 bitcoin`, then the change output will not be rounded, like `0.08968413 bitcoin`.
This makes it easy for an observer to conclude that the spending amount was the `0.01 bitcoin`, and that the other output is the change back to the sender.
So in order to increase your privacy, you can set a non-rounded amount, like `0.01016843`.

## Mining Fee

Every transaction must specify a fee which incentives the miner to include it in a block, it is calculated by `value of inputs - value of outputs`.
The higher the fee per virtual byte (vbyte) transaction size, the more likely miners are to confirm this transaction.
Wasabi uses Bitcoin Core's `smart fee` algorithm to estimate the time it will take to confirm at the given fee level.
You can change the fee by moving the slider, or even specify it manually by activating this functionality in the [settings](/FAQ/FAQ-UseWasabi.html#how-do-i-set-custom-fee-rate).
By clicking on the fee in the brackets below the slider, you can cycle through `total bitcoin amount`, `sats per vbyte`, `percentage fee of sending amount` or `US Dollar equivalent`.

![](/SendFeeSlider.png)

In some cases, there is very little demand for block space, and then Wasabi will set the minimum fee of `1 sat/vbyte`.

![](/SendNoFee.png)

## Password

In order to spend a coin, the transaction must be signed by the private key corresponding to that coin.
Wasabi stores your master private key on the computer, encrypted with the password that you specified during the [wallet generation](/using-wasabi/WalletGeneration.md#what-password-to-choose).
To spend a coin you need to type in or copy and paste the password, which decrypts the master private key, which is used to sign the transaction.
Afterwards the password is wiped from memory.

## Broadcast

Once the transaction is signed, Wasabi will connect to a random Bitcoin P2P node over Tor and provide this transaction, then it will immediately disconnect.
This first node will gossip the transaction throughout the network, also to miners who include it in a block.

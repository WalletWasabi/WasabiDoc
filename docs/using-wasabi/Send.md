---
{
  "title": "Send",
  "description": "A step by step guide on how to send bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Send

[[toc]]

![](/Send.png)

## Coins

A coin is an unspent transaction output (UTXO), a chunk of bitcoin which can be sent in a future transaction.
In the Wasabi wallet `Send` tab, you see a list of all the coins you can spend because you have their private keys.
You can get a coin by first [receiving](/using-wasabi/Receive.md) them from someone else, for example by earning them or buying them for fiat currency.
You can spend one or more whole coins by selecting it in the `Send` tab, if your payment amount is below the value of the selected coins, then you will receive a [change coin](/using-wasabi/Change.md) back.

## Clusters

Every time you receive a payment, you first must [label the observers](/using-wasabi/Receive.md#the-importance-of-labeling) who know this address is yours.
This transaction metadata is used to build a cluster of which parties know about your coins.
For example, if you receive a coin from Alice, then the cluster is `Alice`. 
If you now send half of this coin to Bob, then the cluster of the change coin is `Alice, Bob`.
The goal is to reduce the number of observers who know about your coins.

## Anonymity Set

When you do a Wasabi [CoinJoin](/using-wasabi/CoinJoin.md), many peers register coins in the input of the transaction, and in the output there are several equal value coins, for example 100 coins worth exactly 0.1 bitcoin.
This means that when looking at one of these CoinJoin outputs, there is a 1 in 100 chance to find the corresponding input.
Thus the higher the anonymity set, the more your post-mix coin is delinked from the pre-mix history.
Wasabi shows you three levels of anonymity set, the yellow shield, the green shield and the check mark shield.
By default they have an anonymity set of `2`, `21` and `50`, however, this can be [changed in the settings](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target).

![](/SendAnonset.png)

## Receiving Address

When sending bitcoin, you need to know the destination address of the receiver.
This commits to the spending condition that the receiver agrees to have for this coin.
The address can be a public key hash [starting with 1...], a script hash [starting with 3...], or a native segwit bech32 public key hash [starting with bc1q...].
Make sure that you ask the receiver for a [new address](/using-wasabi/AddressReuse.md) for every payment to protect your privacy.
Wasabi will calculate the checksum and notify you if the provided address is wrong.

## Label

Similar to the `Receive` tab, you must label every new address with the observers who know that this is your address.
In the `Send` tab an address is generated to receive the change amount, thus a label is not required when you send the max amount.
The observer of a sending transaction is of course the receiver of it, as well as any other third party that will find out about it, for example a payment processor or exchange.
This metadata will be used to build an curate cluster of who knows about your coins.

## Amount

In the amount text box you can specify how many bitcoins the receiving address will gain.
If it is blow the value of the selected inputs, then the leftover will be send to an automatically generated change address of yours.
You can send a whole coin by selecting the `Max` button, which will build a transaction with only one output, the receiving address, and no change.
You can also see the current US Dollar value of the sending amount.

If you specify a rounded amount, like `0.01000000 bitcoin`, then the change output will not be rounded, like `0.08968413 bitcoin`.
This makes it easy to find out that the spending amount was the `0.01 bitcoin`, and that the other output is the change back to the sender.
So in order to increase your privacy, you can set a non-rounded amount, like `0.01016843`.

## Mining Fee

Every transaction must specify a fee which incentives the miner to include it in a block, it is calculated by `value of inputs - value of outputs`.
The higher the fee per virtual byte transaction size, the more likely miners are to confirm this transaction.
Wasabi uses Bitcoin Core's `smart fee` algorithm to estimate the hours it will take to confirm at the given fee level.
You can change the fee by moving the slider, or even specify it manually by activating this functionality in the settings.
By clicking on the fee in the brackets below the slider, you can cycle through total bitcoin amount, sats per vbyte, percentage fee of sending amount or US Dollar equivalent.

![](/SendFeeSlider.png)

In some cases, there is very little demand for blockspace, and then Wasabi will set the minimum fee of `1 sat/vbyte`.

![](/SendNoFee.png)

## Password

## How to send bitcoin step by step

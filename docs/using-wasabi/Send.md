---
{
  "title": "Send",
  "description": "A step-by-step guide on how to send bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Send

[[toc]]

---

## How to send bitcoin step-by-step

1.  Click the Send button.
1.  Specify a destination address.
1.  Specify the amount of bitcoin to send to the destination address. Optionally, you can specify the dollar amount to send.
1.  Label the recipient by entering the name of the person or company who you are sending to.
1.  Preview Transaction.
    -  Verify the amount, recipient, and the address.
    -  Review the estimated time for confirmation and the transaction fees. Optionally, you can change the transaction fee or confirmation time.
    -  Review suggestions to improve your privacy by clicking the shield icon in the top right corner. For example, you may want to increase or decrease your payment to avoid change.
1.  Click `Confirm`.
1. Type in your password, then click `Continue`.

![Wasabi Wallet Home Screen](/Send.png "Wasabi Wallet Home Screen")

## Coins

A coin is an unspent transaction output (UTXO): a chunk of bitcoin that can be sent in a future transaction.
Unlike fiat currencies which have fixed denominations, each UTXO contains a variable amount of bitcoin.
You can get coins by first [receiving](/using-wasabi/Receive.md) them from someone else.
When you want to send some bitcoin you simply enter the amount to send and the address after clicking the `Send` button.
Wasabi Wallet does the job of automatically selecting the appropriate combination of coins to include as inputs in the transaction.

## Clusters

Every time you receive a payment, you first must [label the observers](/using-wasabi/Receive.md#the-importance-of-labeling) who know this address is yours.
This transaction metadata is used to build a cluster of which people know about your coins.
For example, if you receive a coin from Alice, then the cluster is `Alice`.
If you now send half of this coin to Bob, then the cluster of your change coin is `Alice, Bob`.
The goal is to know the observers who know about your coins and try to reduce their number for each coin.

## Anonymity Set
A typical bitcoin transaction will contain one input and two outputs - one of the outputs is the coin you are sending and the other output is the change coin that goes back to your wallet.
Your change coin can be linked to this one input.
There is a 1 in 1 chance to find this link and no plausible deniability.
Thus, Wasabi denotes this coin's anonymity set as `1`.

In a Wasabi [coinjoin](/using-wasabi/CoinJoin.md), many peers register coins in the input of the transaction, and in the output there are several equal value coins.
For example, the output may contain 20 coins worth exactly 0.3 bitcoin.
This means that when looking at one of these coinjoin outputs, there is a 1 in 20 chance to find the corresponding input: thus an anonymity set of 20.
Therefore, the higher the anonymity set, the more your post-coinjoin coin is delinked from the pre-coinjoin history.

There are three coinjoin strategies to choose from in Wasabi Wallet which effect the target anonymity score for your coins.
These three strategies are `Minimize Cost`, `Maximize Speed`, and `Maximize Privacy`.
Each of these strategies come with different trade-offs.

Alternatively, custom coinjoin settings can be configured.


![Coinjoin Strategy](/CoinjoinStrategy.png "Coinjoin Strategy")

## Receiving Address

When sending bitcoin, you need to know the destination address of the receiver.
This commits to the spending condition that the receiver agrees to have for this coin.
The address can be a public key hash [starting with `1`], a script hash [starting with `3`], or a native SegWit bech32 public key hash [starting with `bc1q`].
Make sure that you ask the receiver for a [new address](/why-wasabi/AddressReuse.md) for every payment to protect your privacy and theirs.
Wasabi will calculate the checksum and notify you if the provided address is wrong.

## Observers

It is a requirement to provide one or more [labels](/using-wasabi/Receive.md#the-importance-of-labeling) each time you initiate a transfer of bitcoin.
These labels should be the observers of the transaction.
An observer of a sending transaction is, of course, the receiver, as well as any other third party that knows that you are the sender of this transaction.
For example, you should include as a label the payment processor or the bitcoin exchange if you use their services.
This metadata will be used to build an accurate cluster of observers who know about your coins.

## Amount

In the `Amount` text box you can specify how many bitcoins the receiving address will gain.
If it is below the value of the selected inputs, then the leftover value will be sent to an automatically generated change address of yours.
You can send a whole coin by selecting the `Max` button, which will build a transaction with only one output, the receiving address, and no change.
You can also see the current US Dollar value of the sending amount.

:::tip Avoid sending rounded values
If you specify a rounded amount, like `0.0100 0000 bitcoin`, then the change output will not be rounded, like `0.0896 8413 bitcoin`.
This makes it easy for an observer to conclude that the spending amount was the `0.01 bitcoin`, and that the other output is the change back to the sender.
So in order to increase your privacy, you can set a non-rounded amount, like `0.0101 6843`.
:::

![Wasabi Wallet send transaction](/SendAmountFeePassword.png "Wasabi Wallet send transaction")

## Mining Fee

Every transaction must specify a fee which incentives the miner to include it in a block, it is calculated by `value of inputs - value of outputs`.
The higher the fee per virtual byte (vbyte) transaction size, the more likely miners are to confirm this transaction.
Wasabi uses Bitcoin Core's `smart fee` algorithm to estimate the time it will take to confirm at the given fee level.
You can change the fee by moving the slider, or even specify it manually by activating this functionality in the [settings](/FAQ/FAQ-UseWasabi.html#how-do-i-set-custom-fee-rate).
By clicking on the fee in the brackets below the slider, you can cycle through displaying the `total bitcoin amount`, `sats per vbyte`, `percentage fee of sending amount` or `US Dollar equivalent`.

![Wasabi Wallet custom mining fee](/SendFeeSlider.png "Wasabi Wallet custom mining fee")

In some cases, there is very little demand for block space, and then Wasabi will set the minimum fee of `1 sat/vbyte`.

:::tip High-priority transaction fees

When using Bitcoin Core's `smart fee` algorithm to estimate the time a transaction will take to confirm given the current mempool, the algorithm considers the historic data for transactions in the mempool and in recent blocks.

If, after you select the highest fee for a `send`, other people decide to send coins using even higher fees than you selected, their transactions will be placed ahead of yours in the mempool.

The placement of a transaction in line to be confirmed in the mempool is an ongoing auction for block space.

As such, a fee that is high enough to be confirmed in the next block when you create a transaction can be outbid by people sending coins after you who also want to be in the next block, which places your transaction farther back in line to be confirmed.

If you have a transaction that is high-priority and you really want it to be confirmed ASAP:

1. Go into your Wasabi `Settings` and turn on `Manual fee entry`.
2. Use [a mempool monitor](https://mempool.space) (available [Tor onion website](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/)) to see what fees are likely to get a transaction to be confirmed in the next block.
3. Select a fee that is well above the current highest fee....perhaps double or triple it....if it is very important to you that the transaction is confirmed soon.

For a deeper dive into the fee estimation process, [this article](https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0) is worth reading.
:::

## Custom Change Address

In the `Settings` tab you can activate the option to set a custom change address.

![Wasabi Wallet custom change address setting](/SettingsCustomChange.png "Wasabi Wallet custom change address setting")

This will show a second address field in the `Send` tab, where you can paste an address that will be used for the change output of the transaction.
The specified sending amount will go to the first address, the value of `input coins - payment amount - fee` will go to this change address.
If no address is pasted in this field, then it will pull an address from this same wallet, the same way as the default.

![Set Custom Change address in Wasabi Wallet](/SendCustomChange.png "Set Custom Change address in Wasabi Wallet")

## Password

In order to spend a coin, the transaction must be signed by the private key corresponding to that coin.
Wasabi stores a secret on the computer, encrypted with the password that you specified during the [wallet generation](/using-wasabi/WalletGeneration.md#what-password-to-choose).
To spend a coin you need to type in the password, which decrypts the encrypted secret, and then derive the child private key that signs the transaction.
Afterwards, the password is wiped from memory.

## Broadcast

Once the transaction is signed, Wasabi will connect to a random Bitcoin P2P node over Tor and provide this transaction, then it will immediately disconnect.
This first node will gossip the transaction throughout the network, then miners can include it in a block.

If for some reason the first broadcast fails, then if you have Wasabi connected to [your own Bitcoin full node](/using-wasabi/BitcoinFullNode.md) this node will broadcast the transaction to the network.
If this also fails, then the transaction is sent to the backend coordinator with a new Tor identity, who then broadcasts the transaction to the network.

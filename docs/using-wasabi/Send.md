---
{
  "title": "Send",
  "description": "A step-by-step guide on how to send bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Send

[[toc]]

---

@[youtube](vCI5aza-lv0)

## How to send bitcoin step-by-step

1.  Click the `Send` button.

![Wasabi Wallet Send Button](/SendButton.png "Wasabi Wallet Send Button")

2.  Enter the destination address.

![Wasabi Wallet Send To Field](/SendToField.png "Wasabi Wallet Send To Field")

3.  Specify the amount of bitcoin to send to the destination address.
Optionally, you can specify the dollar amount to send instead.

![Wasabi Wallet Send Amount Field](/SendAmountField.png "Wasabi Wallet Send Amount Field")

4. Click `Continue`.

![Wasabi Wallet Send](/Send.png "Wasabi Wallet Send")

5.  Label the recipient by entering the name of the person or company who you are sending to.

![Wasabi Wallet Send Recipient Label](/SendRecipientLabel.png "Wasabi Wallet Send Recipient Label")

6.  Preview Transaction.
    -  Verify the amount, recipient, and the address.
    -  Review the estimated time for confirmation and the transaction fee.
    Optionally, you can change the transaction fee or confirmation time by clicking on the edit fee icon.

    ![Wasabi Wallet Send Change Fee](/SendChangeFee.png "Wasabi Wallet Send Change Fee")

    -  Review the suggestions to improve your privacy by clicking the shield icon in the top right corner.
    For example, you may want to slightly increase or decrease your payment amount to avoid change.

    ![Wasabi Wallet Send Privacy Suggestion](/SendPrivacySuggestion.png "Wasabi Wallet Send Privacy Suggestion")

7.  Click `Confirm`.

![Wasabi Wallet Send Preview Transaction](/SendPreviewTransaction.png "Wasabi Wallet Send Preview Transaction")

8. Type in your password, then click `Continue`.

![Wasabi Wallet Send Password](/SendPassword.png "Wasabi Wallet Send Password")

9. Transaction successfully sent!

![Wasabi Wallet Payment Successful](/PaymentSuccessful.png "Wasabi Wallet Payment Successful")

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
The address can be a public key hash [starting with `1`], a script hash [starting with `3`], a native SegWit bech32 public key hash [starting with `bc1q`], or a Taproot bech32m public key [starting with `bc1p`].
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
You can also see and enter the current US Dollar value of the sending amount.

:::tip Avoid sending rounded values
If you specify a rounded amount, like `0.0100 0000 bitcoin`, then the change output will not be rounded, like `0.0896 8413 bitcoin`.
This makes it easy for an observer to conclude that the spending amount was the `0.01 bitcoin`, and that the other output is the change back to the sender.
So in order to increase your privacy, you can set a non-rounded amount, like `0.0101 6843`.
:::

![Send Amount Field](/SendAmountField.png "Send Amount Field")

## Mining Fee

Every transaction must specify a fee which incentives the miner to include it in a block, it is calculated by `value of inputs - value of outputs`.
The higher the fee per virtual byte (vByte) transaction size, the more likely miners are to confirm this transaction.
Wasabi uses Bitcoin Core's `smart fee` algorithm to estimate the time it will take to confirm at the given fee level.
You can change the fee by moving the slider, or specify it manually by using the `Advanded` option. [Advanced fee rate](/FAQ/FAQ-UseWasabi.html#how-do-i-set-custom-fee-rate).

![Wasabi Wallet Fee Slider](/SendFeeSlider.png "Wasabi Wallet Fee Slider")

In some cases, there is very little demand for block space, and then Wasabi will set the minimum fee of `1 sat/vByte`.

:::tip High-priority transaction fees

If you have a transaction that is high-priority and you really want it to be confirmed ASAP:

1. Use [a mempool monitor](https://mempool.space) (available [Tor onion website](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/)) to see what fees are likely to get a transaction to be confirmed in the next block.
2. Select a fee that is well above the current highest fee (perhaps double or triple it) if it is very important to you that the transaction is confirmed soon.

For a deeper dive into the fee estimation process, [this article](https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0) is worth reading.
:::

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

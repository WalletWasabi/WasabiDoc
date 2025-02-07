---
{
  "title": "Send",
  "description": "A step-by-step guide on how to send bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Send

[[toc]]

[![Send in Wasabi Wallet](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/vCI5aza-lv0 "Send in Wasabi Wallet")

## How to send bitcoin step-by-step

1.  Click the `Send` button.

![Wasabi Wallet Send Button](/SendButton.png "Wasabi Wallet Send Button")

2.  Enter/paste the destination address.

![Wasabi Wallet Send To Field](/SendToField.png "Wasabi Wallet Send To Field")

3.  Specify the amount of bitcoin to send to the destination address.
Optionally, you can specify the dollar amount to send instead.

![Wasabi Wallet Send Amount Field](/SendAmountField.png "Wasabi Wallet Send Amount Field")

4. Label the recipient by entering the name of the person or company who you are sending to.

![Wasabi Wallet Send Recipient Label](/SendRecipientLabel.png "Wasabi Wallet Send Recipient Label")


5. Click `Continue`.

![Wasabi Wallet Send](/Send.png "Wasabi Wallet Send")

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

8. Type in your passphrase, then click `Send`.

![Wasabi Wallet Send Passphrase](/SendPassword.png "Wasabi Wallet Send Passphrase")

9. Transaction successfully sent!

![Wasabi Wallet Payment Successful](/PaymentSuccessful.png "Wasabi Wallet Payment Successful")

## Clusters

Every time you receive a payment, you first must [label the observers](/using-wasabi/Receive.md#the-importance-of-labeling) who know this address is yours.
This transaction metadata is used to build a cluster of which people know about your coins.
For example, if you receive a coin from Alice, then the cluster is `Alice`.
If you now send half of this coin to Bob, then the cluster of your change coin is `Alice, Bob`.
The goal is to know the observers who know about your coins and try to reduce their number for each coin.

## Destination Address

When sending bitcoin, you need to know the destination address of the receiver.
This commits to the spending condition that the receiver agrees to have for this coin.
The address can be a public key hash [starting with `1`], a script hash [starting with `3`], a native SegWit bech32 public key hash [starting with `bc1q`], or a Taproot bech32m public key [starting with `bc1p`].
Make sure that you ask the receiver for a [new address](/why-wasabi/AddressReuse.md) for every payment to protect your privacy and theirs.
Wasabi will calculate the checksum and notify you if the provided address is wrong/contains a typo.

## Observers

In Wasabi it is mandatory to provide one or more [labels](/using-wasabi/Receive.md#the-importance-of-labeling) each time you initiate a transfer of bitcoin.
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

Wasabi's fee estimation is based on Bitcoin Core's `smart fee` algorithm with some additions: it uses the mempool.space fee histogram to remove estimations that overpay, and Wasabi also makes sure to be included in the top 300 MB mempool to not be dropped from default Bitcoin Core mempools.

You can change the fee by moving the slider, or by manually setting the [transaction fee rate](/FAQ/FAQ-UseWasabi.md#how-do-i-set-custom-fee-rate).

![Wasabi Wallet Fee Slider](/SendFeeSlider.png "Wasabi Wallet Fee Slider")

In some cases, there is very little demand for block space, and then Wasabi will set the minimum fee of `1 sat/vByte`.

:::tip High-priority transaction fees

If you have a transaction that is high-priority and you really want it to be confirmed ASAP:

1. Use [a mempool monitor](https://mempool.space) (available [Tor onion website](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/)) to see what fees are likely to get a transaction to be confirmed in the next block.
2. Select a fee that is well above the current highest fee (perhaps double or triple it) if it is very important to you that the transaction is confirmed soon.

For a deeper dive into the fee estimation process, [this article](https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0) is worth reading.
:::

## Privacy Suggestions

Since Wasabi version [2.0.4](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.4) the _Preview Transaction_ dialog contains privacy suggestions.
The privacy suggestions help the user to improve their transaction.
They are displayed when hovering over the triangle or shield in the top right corner.
The suggestions are based on the current coin selection for this transaction.
For example, the suggestions will warn the user when the transaction contains non-private coins.

There are warnings for:
- Interlinking labels
- Using non-private coins
- Using semi-private coins
- Creating change
- Consolidating 10 coins or more
- Using unconfirmed coins
- Using coinjoining coins

There are clickable suggestions to:
- Manage labels (when interlinking labels)
- Only use private coins
- Not use non-private coins (only use private and semi-private)
- Avoid change

The suggestions to only use private or semi-private coins are shown only if the amount decreases at most by 15%.
The suggestion to avoid change is shown only if the amount increases/decreases at most by 15%.

:::tip
Each suggestion has a tooltip.
Hover over the suggestion to see more information.
:::

## Password

In order to spend a coin, the transaction must be signed by the private key corresponding to that coin.
Wasabi stores a secret on the computer, encrypted with the passphrase that you specified during the [wallet generation](/using-wasabi/WalletGeneration.md#important-info-about-your-wallet-password).
To spend a coin you need to type in the passphrase, which decrypts the encrypted secret, and then derive the child private key that signs the transaction.
Afterwards, the passphrase is wiped from memory.

## Broadcast

Once the transaction is signed, Wasabi will connect to a random Bitcoin P2P node over Tor and provide this transaction, then it will immediately disconnect.
This first node will gossip the transaction throughout the network, then miners can include it in a block.

If for some reason the first broadcast fails, then if you have Wasabi connected to [your own Bitcoin full node](/using-wasabi/BitcoinFullNode.md) this node will broadcast the transaction to the network.
If this also fails, then the transaction is sent to the backend coordinator with a new Tor identity, who then broadcasts the transaction to the network.

## Speed Up or Cancel Transaction

Pending (unconfirmed) Bitcoin transactions can be replaced by sending a new transaction that pays a higher fee rate using the same (or some) coins/UTXOs.
This can be used to speed up or cancel a transaction.
The miners are incentivized to mine the transaction with the higher fee rate, as this will earn them more money.
If the new higher fee rate paying transaction is confirmed, the old transaction can be considered "replaced".

Since Wasabi version [2.0.4](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.4) it is possible to easily speed up or cancel a pending transaction.
Speeding up and cancelling are similar to each other, the main difference being that a _Cancel Transaction_ will send the coins to a new address owned by the user/wallet (this is all done automatically).
The transaction is then "cancelled" because the bitcoin (minus the fees) is returned to the user's wallet.

Speeding up or cancelling a transaction costs additional fees, because a new bitcoin transaction with a higher fee rate (than the previous transaction) has to be sent.

Wasabi first tries to utilize [RBF](glossary/Glossary-GeneralBitcoin.html#replace-by-fee-rbf), if that's not possible it tries to do [CPFP](glossary/Glossary-GeneralBitcoin.html#child-pays-for-parent-cpfp).

To Speed Up or Cancel a Transaction, right-click on the pending transaction in the history.

![History Right Click](/HistoryRightClick.png "History Right Click")

Click one of the two options and then confirm that you want to pay the additional fee for this action.
After which the succesfully speed up/cancelled dialog is displayed.

In the history, the transaction will now have a rocket (speeded up) or a cross (cancelled) icon.
The transaction is still pending, but it should be confirmed sooner than the initial transaction.

[![How to speed up Bitcoin transaction](https://img.youtube.com/vi/55KURak5r58/maxresdefault.jpg)](https://youtu.be/55KURak5r58)

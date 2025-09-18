---
{
  "title": "Use of Wasabi FAQ",
  "description": "Frequently asked questions about the nuances of how to use Wasabi properly. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Use of Wasabi

## General

### How do I start using Wasabi?

1. [Download & Install](/using-wasabi/InstallPackage.md) Wasabi (like with any other software) from the [official website](https://wasabiwallet.io).
2. [Create a new wallet](/using-wasabi/WalletGeneration.md) or use an already existing one, by [importing or recovering](/using-wasabi/WalletRecovery.md) your own wallet.
3. [Receive](/using-wasabi/Receive.md) some bitcoin.
4. Wait, and let the wallet do some [coinjoins](/using-wasabi/CoinJoin.md).
Your wallet's privacy progress % will increase.
5. Enjoy your private bitcoin funds!
[Spend](/using-wasabi/Send.md) some, send to your [hardware wallet](/using-wasabi/ColdWasabi.md) (for cold storage) or leave them in Wasabi for a while.

### How do I generate a new wallet?

You can [generate as many new wallets](/using-wasabi/WalletGeneration.md) as you'd like, for no extra cost and without asking for permission.

Click the `Add Wallet` button in the bottom left corner of the main view or in the searchbar.

![Add new wallet in Wasabi](/AddWalletButton.png "Add a new wallet in Wasabi")

Click `Create a new wallet`.

![Create a new wallet in Wasabi](/AddWallet.png "Create a new wallet in Wasabi")

As with everything in Wasabi, you are required to label this new wallet.
Make sure that you are precise so that you know what this wallet is for and click `Continue`.

![Name a new wallet in Wasabi](/AddWalletWalletName.png "Name a new wallet in Wasabi")

Select the desired Wallet Backup Type.

![Add Wallet Backup Type](/WalletBackupType.png "Add Wallet Backup Type")

Now you will see the 12 recovery words, or multiple 20 recovery words sets when using Multi-share Backup.
This is the mnemonic seed that you should back up, together with the passphrase you create in the next phase, in order to recover your wallet.
When you've backed everything up, click `Continue`.

![Wasabi Wallet recovery words](/AddWalletRecoveryWords.png "Wasabi Wallet recovery words")

In this page you should confirm the words, as a check that you've written down your mnemonic seed in the correct order. 
Once you're done, click `Continue`.

![Confirm recovery words](/AddWalletConfirmRecoveryWords.png "Confirm recovery words")

Add a passphrase. 
It is used to encrypt the private key (extracted from the extended private key) on the computer and needed to open the wallet and to recovered it in the future.
Make sure that you properly back up and write down this passphrase.

Confirm the passphrase and click `Continue`.

![Add a passphrase in Wasabi](/AddWalletAddPassphrase.png "Add a passphrase in Wasabi")

:::danger Careful!!
Without knowledge of the passphrase, you CANNOT spend your bitcoin!!
:::

Make sure, and triple-check that you have done a proper backup of BOTH the passphrase AND the mnemonic.
If you only have the recovery words, but not the passphrase, then you will NOT be able to open your wallet or to recover it.

In order to protect your backup, consider storing the passphrase and recovery words in different locations.

Now you get to choose your wallets coinjoin strategy.
Select one and click `Continue`.

![Wasabi Wallet coinjoin strategies](/CoinjoinStrategy.png "Wasabi Wallet coinjoin strategies")

### Can I rename my Wallet?

Yes.
A wallet can be renamed at the _Wallet Settings_.

Alternatively, the wallet file can be manually renamed by doing the following:
Type `Wallet Folder` in the search bar at the top of the main view to access the `Wallets` folder and rename the `.json` wallet file.
Or you can navigate to the `Wallets` folder (inside the [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder)) and rename the `.json` wallet file.

:::tip
You need to mark the “show hidden files” setting to see the Wasabi data folder.
:::

:::warning
To avoid problems, make sure you close Wasabi Wallet before proceeding to rename any of your wallets.
:::

### What is the password used for?

The password (named _passphrase_ since Wasabi version [2.0.7](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.7)) you set is used:
* As a 13th word (passphrase) as described in [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
* To encrypt the private key of the extended private key as described in [BIP 38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki) to get an encrypted secret which is stored on the computer.

Wasabi stores only the BIP38 encrypted blob, so you'll need to type in the passphrase to open the wallet and to spend from Wasabi.

:::danger
The passphrase will unlock your bitcoin to anyone who has access to the recovery words backup or the computer!
If your backup gets compromised, this passphrase is the only thing protecting your precious sats.
:::

### What password should I use?

:::danger
It is **VERY** important to use a [random and long passphrase](/using-wasabi/PasswordBestPractices.md).
:::

Since it is very difficult for humans to generate true randomness, it is good to use a tool to help find a strong passphrase.
This can be the [Diceware english wordlist](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases) for true off-line password generation.
A secure password manager software might also be used, but be careful here.

### Where can I find the Wasabi data folder?

You can easily reach it from inside Wasabi by typing `Data Folder` in the search bar at the top of the main view.

Or you can manually navigate to it (depending on which OS you have):

* Windows: `/Users/{your username}/AppData/Roaming/WalletWasabi/Client`
* Linux: `/home/{your username}/.walletwasabi/client`
* macOS: `/Users/{your username}/.walletwasabi/client`

:::tip
You need to mark the “show hidden files” setting to see it.
:::

### Can I spend my bitcoin without the password?

:::danger
NO!!!
Without knowledge of your passphrase, even when you have the wallet file and recovery words, you CANNOT spend your bitcoin!
:::

When creating a new wallet, after labeling it properly, the next step is to select a long and random passphrase.
Every time you want to spend your coins from Wasabi, you MUST provide this passphrase.
So even if you have these words securely engraved in metal, without the passphrase, you cannot restore the backup of your wallet.

:::tip
Always back up your mnemonic recovery words, and your passphrase in two separate secure locations.
:::

### Why BIP 38?

[BIP 38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki) is a good standard, a well-tested and very secure way to encrypt a private key.
It is also implemented in the [NBitcoin library](https://github.com/MetacoSA/NBitcoin), which is used by Wasabi.
Additionally, there is no standard way (BIP) to encrypt HD wallets.
Take into account that it is not only encryption what BIP 38 provides but also a brute-force protection.

### Can I import a watch-only extended public key?

Yes, but not yet in the GUI, you will need to manually create a new wallet file.

Open a text editor and paste the following wallet structure:

```
{
  "EncryptedSecret": null,
  "ChainCode": null,
  "MasterFingerprint": null,
  "ExtPubKey": "",
  "TaprootExtPubKey": "",
  "PasswordVerified": true,
  "MinGapLimit": 21,
  "AccountKeyPath": "84'/0'/0'",
  "TaprootAccountKeyPath": "86'/0'/0'",
  "BlockchainState": {
    "Network": "Main",
    "Height": "0"
  },
  "HdPubKeys": [
  ]
}
```

Then paste your _SegWit Extended Account Public Key_ in-between the quotes of the field `"ExtPubKey": "paste segwit xpub here",` and your _Taproot Extended Account Public Key_ in-between the quotes of the field `TaprootExtPubKey": "paste taproot xpub here",`

:::warning
Watch-only wallets are not officially supported.
Only take action if you're completely certain of what you're doing.
:::

You can also change the derivation path fields if you want to import a different derivation path.
But this is only for advanced usage. 
Notice that Wasabi only works with SegWit v0 bech32, and SegWit v1 bech32m (Taproot) addresses.

Save this file in your [`Wallets` data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) as a json file like this: `WalletName.json`.
The `WalletName` will be displayed in the GUI.

Then start Wasabi and load the wallet to synchronize it.

For watch only wallets, the `Send` button is disabled.

### What does the privacy progress mean?

The privacy progress tile represents the percentage of how private the wallet is.
It considers the anonymity score weighted amounts instead of just amounts that reached the anonymity score threshold.
The private value is the total amount that reached the anonscore threshold.

### Why does the privacy progress change if I select a different coinjoin strategy?

[The privacy progress](/FAQ/FAQ-UseWasabi.md#what-does-the-privacy-progress-mean) is influenced by the anonymity score target.
If the coinjoin strategy is changed to one with a different anonnymity score target, this will cause the privacy progress to increase or decrease.

### What does the bar with the colored segments mean?

The colored segments make up the `Privacy Bar`.
The Privacy Bar is supposed to give the user an easy overview of the wallet's coins and its privacy progress.
The color of each segment indicates the private coins (green), semi-private coins (light green), or non-private coins (grey).

![Wasabi Wallet Privacy Bar](/PrivacyBar.png "Wasabi Wallet Privacy Bar")

### What is the box (music box) at the bottom of the wallet's main view?

This box (a.k.a. musicbox) is used for the coinjoins.
It can be used to manually start, pause and stop coinjoining.
It also shows some information about the current coinjoin round. 

![Wasabi Wallet Music Box](/MusicBoxCoinjoinStopped.png "Wasabi Wallet Music Box")

### Does Wasabi support Taproot?

Wasabi supports Taproot.

And since Wasabi version [2.2.0.0](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.2.0.0) it is possible to generate Taproot addresses in the GUI.

(Before that, the user could have Taproot coins from coinjoin or change outputs.)

## Synchronization

### What are BIP-158 block filters?

A [BIP-158 block filter](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) is a data structure that contains a hash of all the addresses referenced in a block.
It is much smaller than the whole block itself.
The Wasabi coordinator generates these block filters, and sends them out to any wallet that requests them.
A wallet client checks locally if the block filter matches any of the addresses in the wallet.
If not, then the filter is stored for later reference and for syncing new wallets.
If yes, then the wallet connects to a random Bitcoin peer-to-peer full node over Tor to request this entire block.

### How does Wasabi download a relevant block?

There are two ways Wasabi can get a block:

1. If you are connected to [your own full node](/using-wasabi/BitcoinFullNode.md) then it will fetch the block from there.

2. By default from a random Bitcoin P2P node, connected through a new Tor identity only for this one download request.

Read more [here](/using-wasabi/WalletLoad.md).

### How do I know if the synchronization is finished?

Once Tor and the indexer (backend) are properly connected and you have peers, you will see a checkmark at the bottom right corner of the main view.
The timer of the loading wallet page runs out when all the block filters and all the relevant blocks are downloaded and the wallet is synchronized.

![Wasabi Wallet Status Bar](/WalletSynchronizing.png "Wasabi Wallet Status Bar")

### Why does the Tor status have a warning triangle icon?

If the Tor network is having [issues](https://status.torproject.org/), Wasabi notifies this and displays a warning triangle icon.
For example, when Tor is experiencing a DDoS attack.
Hover over the icon with the cursor to display more information.

![Tor Status Warning Icon](/TorStatusWarningIcon.png "Tor Status Warning Icon")

### How long does the initial, and a subsequent synchronization take?

It usually only takes a couple of seconds to scan the block filters, and to download and parse the blocks.
However, for large wallets with many transactions, this synchronization can take up to several hours.
The speed and reliability of the loading process is constantly improved.
For especially old wallets, it might be worth considering to generate a new wallet with a shorter transaction history.

### Can I shutdown my computer while a wallet is synchronizing?

Yes.
If you shutdown your computer or kill Wasabi while a wallet is synchronizing then the synchronization will continue where it left off or it will start again, the next time you open that wallet.

### How do I resync (rescan) my wallet?

Since Wasabi version [2.5.0](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.5.0) there is a _Resync Wallet_ button at the _Tools_ tab at _Wallet Settings_.

You can rescan an existing Wasabi wallet manually by editing the `Height` in the wallet file.

- Start Wasabi.
- Type `Wallet Folder` in the search bar and open it.
- Close Wasabi.
- Open the wallet file in your favorite text editor.
- Set the `Height` to 0.

```json
{ // only relevant parts are shown
  "AccountKeyPath": "84'/0'/0'",
  "TaprootAccountKeyPath": "86'/0'/0'",
  "BlockchainState": {
    "Network": "Main",
    "Height": "0",

  }
}
```

- Save the file with the changes.
- Start Wasabi again, open your wallet and wait for the synchronization.

:::tip
Changing the Height to 0 will trigger a full resync of your wallet, and that can take some time depending on the size of your wallet (how many transactions it had).

For example if the problem happened 3 days ago then you can go back a week or so to resync the wallet:

`new_height = current_height - (7 * 144)`

:::

:::tip
If you are doing a re-synchronization because you expect some missing funds, but after resync you still think your balance is not correct then try to increase the [gap limit](/FAQ/FAQ-UseWasabi.md#how-do-i-change-the-gap-limit-of-a-wallet) of the wallet.
:::

### Can Wasabi work with a pruned bitcoin node?

No.
Wasabi client doesn't work with pruned nodes.

### Can I run a Wasabi headless daemon?

Yes.
See [this chapter](/using-wasabi/Daemon.md) for more details.

## Receive

### Why is it bad to re-use addresses?

Bitcoin is designed so that for every payment you can use a new address that is not tied to any of your previous addresses.
When you use a new address for every coin, then it becomes much much more difficult to find out that these coins are yours.
However, when you use [the same address for every coin](/why-wasabi/AddressReuse.md), then everyone knows that all coins can be spent by one individual who has the private key - you!
Thus, when someone finds out that you control this address, maybe you published it in your social media profile for donations, or you sent a coin to another peer who knows you, then he knows also how many bitcoin you have in that same address.
Take good care to whom you tell your addresses, and every time use a different address.

Every time a coin is received, the address is removed from the GUI so that you are not tempted to use it again.

Wasabi uses [BIP 44 multi-account hierarchy for deterministic wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) so that you can generate countless addresses and have them all securely backed-up in the 12 recovery words.

:::danger
**NEVER RE-USE ADDRESSES**
:::

### How do I generate a new receiving address?

You can generate a new address using the `Receive` button in the main view's top right corner.
By default it returns a SegWit (bech32) address, the drop-down can be used to generate a Taproot (bech32m) address.
First you must set a label for it, so that you later know who knows that this address is yours.
Be precise in the label of the observers who know this address is yours, as this is an important part of good [coin selection](/why-wasabi/Coins.md) privacy best practices.
Do not write anything else on the label exept the name of the entities that know this address belongs to you.
Then you can click on `Continue` which will now show you the address, and you can copy it to the clipboard.
After a coin has been sent to this address, it is removed from the GUI.
This is a good feature to help protect you against [address reuse](/why-wasabi/AddressReuse.md).

![Wasabi Wallet Known By label](/ReceiveLabelingRequired.png "Wasabi Wallet Known By label")

### Where can I find previously generated addresses?

Generated addresses which haven't received any funds yet, are displayed at the `Addresses Awaiting Payment` list.
Click on the `Receive` button > `Addresses Awaiting Payment`. 

SegWit and Taproot addresses are two different lists, use the receive button drop-down to see the desired type.

![Addresses Awaiting Payment](/AddressesAwaitingPayment.png "Addresses Awaiting Payment")

### What is the gap limit?

The gap limit is the maximum number of consecutive unused addresses that your wallet will generate when recovering it.
Wasabi automatically increases this value if needed when you generate new receiving addresses.
When you import the wallet file into a new Wasabi client, then it will use this `MinGapLimit` to find your coins in the wallet.

### How do I change the gap limit of a wallet?

You can change the gap limit of an already existing Wasabi wallet by editing the wallet file.
Open the wallet folder by typing `Wallet Folder` in the search bar.
Then, open the wallet file in your favourite text editor.

Close Wasabi and edit the `MinGapLimit` setting (which is `21` by default) in the wallet file.
The value depends on the settings of other tools that use the wallet too (e.g. use `100` for [BTCPay Server](https://docs.btcpayserver.org/FAQ/Wallet/#the-gap-limit-problem)).

You might also need to reset the height of your wallet, so that it gets reindexed.
This can be done by setting the `BlockchainState->Height` to `0`:

```json
{ // only relevant parts are shown
  "MinGapLimit": 100,
  "BlockchainState": {
    "Network": "Main",
    "Height": "0"
  }
}
```

Save and then start Wasabi again, open the wallet and wait for the synchronization.
You should see all your transactions and the correct balance.

If you are recovering a wallet with the 12 recovery words, then in the advanced section you can increase the gap limit from a default of 100.

### Why do I have to label my address?

Bitcoin addresses look like cyphertext, they are not easily remembered and it's not clear how they were used previously.
When you do not label all your addresses, there is no meta-data for you to understand the context of your coins.
Thus receiving addresses and sending transactions should be carefully labeled with the observers who know that this address belongs to you.
This helps you know where your coins came from so that you can judge whether there are privacy concerns when sending a specific coin to a specific receiver.

![Wasabi Wallet known by label](/ReceiveLabelingRequired.png "Wasabi Wallet known by label")

When labeling a newly generated address or a sending transaction you should ask yourself: "Who knows this address is mine?" or "Whom will I share this address with?" or "From whom am I receiving bitcoin?" or "To whom am I sending bitcoin?".
Labels should contain the comma-separated names of people/entities that may be aware of the transaction and could follow its trail like:

`Name of the sender or the receiver, name of the exchange, name of the payment processor`

So, a good label could be:

`Alice, <name of KYC exchange>, BTCPay Server`

or:

`Alice & Bob` (This is one entity which is not the same as `Alice, Bob` as they are multiple entities and thus separated by a comma)

### How can I change the label of my receive address?

You can change the label of your _Address Awaiting Payment_ by clicking on the edit icon.
This is useful when you have generated a receiving address with a specific label, but then the sender (anyone that knows this address is yours) has changed.
Take care with whom you have shared this address, because if you send it to several people, they all know this address belongs to you, and they might all send many coins to the same address.
This is very bad for your privacy because of [address reuse](/why-wasabi/AddressReuse.md), and it confuses you with the labeling of each unique coin.

![Edit Address Label](/AddressesAwaitingPaymentEditLabel.png "Edit Address Label")

### How can I edit the labels of my address after a transaction has gone through?

To date there is no possibility to change the label of an address after it has sent or received bitcoins.

### Are there privacy concerns regarding whom I send my address?

Yes.
Whomever you send your address, he knows that this address, and any coin sent to it, belongs to you.
Thus it is important to have labeled receiving addresses with their observers, so that you know which address is known by whom.
It is important that you avoid sending the same address to several different individuals.
There is a risk that both of them send coins to this same destination, thus unnecessarily linking the payments.

:::danger
It is especially important to **NEVER** send your extended public key to any third party (anyone).
This is a complete de-anonymization of your entire wallet!!
:::

### Why does Wasabi only use SegWit bech32 addresses?

Wasabi was created after the activation of SegWit, and it makes sense to support the most advanced address type, which has numerous benefits.
For example, the malleability fix and the large savings on mining fees for SegWit transactions.

### Why do some third party services say the Wasabi address is invalid?

Some wallets/exchanges do not yet support native SegWit bech32 addresses and may give an error message (e.g. "unknown bitcoin address").
Please contact these services to upgrade their infrastructure to support the latest industry standards.
Wasabi cannot generate non-SegWit addresses, so one solution is to manage your funds with a wallet which does support legacy addresses.
To check Bech32 adoption and wallets/exchanges support you can follow the [Bitcoin Wiki](https://en.bitcoin.it/wiki/Bech32_adoption#Software_Wallets) and [Bitcoin Optech](https://bitcoinops.org/en/compatibility/#segwit-addresses).

### Where can I find my address QR code?

When a new address is generated the QR code, address and label are displayed.
The QR code of an already generated address can be found at the `Addresses Awaiting Payment` list.
Click on the QR code icon at the _Addresses Awaiting Payment_.

![QR code icon](/AddressesAwaitingPaymentQRCodeIcon.png "QR code icon")

The QR Code is displayed and can be saved as a png file by clicking on the Save icon, which appears on hover.

![Address Awaiting Payment](/AddressAwaitingPayment.png "Address Awaiting Payment")

### What derivation paths does Wasabi use?

Wasabi follows [BIP 84: Derivation scheme for P2WPKH Based Accounts](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki) (`m/84'/0'/0'`) and [BIP 86: Key Derivation for Single Key P2TR Outputs](https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki) (`m/86'/0'/0'`).

On TestNet Wasabi uses the paths `m/84'/1'/0'` and `m/86'/1'/0'`.
On RegTest it uses `m/84'/0'/0'` and `m/86'/0'/0'`, and not the standard `m/84'/1'/0'` and `m/86'/1'/0'` paths.
Due to the coinjoin implementation, the key depth can be rather large, thus when recovering, the gap limit should be elevated to at least 100.

### Can I generate a multi signature script?

No.

Multi signature scripts define that there need to be m-of-n signatures provided in order to spend this UTXO.
For example in a 2-of-3, Alice alone cannot spend the sats, she needs the collaboration of either Bob or Charlie.
In current implementations, a legacy and SegWit v0 multisig address is clearly distinguishable, there are three public keys and two signatures, and not one single public key and signature.
This means that your anonymity set, the crowd you hide in, gets a lot smaller.
If some one knows that you use a multisig wallet, then they can narrow down their search for your coins.
Thus, use of multisig decreases your privacy, and Wasabi is not implementing tools that degrade your privacy.

Yet multisig is a popular feature, and many Wasabikas do request it for extra security, willing to trade-off some privacy.
[Electrum Wallet](https://electrum.org) is a fantastic wallet with many features, but only private if you connect to your own Electrum server full node.
Electrum can be used to create different types of m-of-n multisig scripts, including the use of hardware wallets.

Schnorr key and signature aggregation with MuSig increase privacy of multisig wallets, since only one public key, not n, are committed on the blockchain.
On November 14th, 2021 at block 709632, Taproot was activated in the Bitcoin consensus layer so there are no major privacy concerns standing in the way of Wasabi multisig anymore.
At the moment, it is still not available as of yet.

### How does Wasabi know of incoming transactions to the mempool?

When Wasabi is running, it connects to random Bitcoin peer to peer nodes and listens for their gossip of all transactions on the network.
Based on this information Wasabi builds its own local mempool of unconfirmed transactions.
So when you have Wasabi running, you will be notified about an incoming receiving transaction as soon as it is gossiped on the network.
But when Wasabi is offline, it does not listen to the network and it will not know about your unconfirmed transaction when you next launch Wasabi.
In this case you have to wait until your transaction is confirmed in a block, and based on the [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki), Wasabi will download that whole block including your transaction from a random P2P node.

### Can I export all my receive addresses?

Wasabi doesn't provide a way to export all generated addresses (used and unused), however they are listed by using the [listkeys](/using-wasabi/RPC.md#listkeys) RPC command.

It is not possible to view previously used addresses in the GUI, as here only [unused addresses](/FAQ/FAQ-UseWasabi.md#where-can-i-find-previously-generated-addresses) are shown.

## Send

### How do I set a destination address?

In the `Send` dialog, there is a box called `To`, enter here the bitcoin address, Silent Payment address or PayJoin URL.
If you have an address in the clipboard, then it can be pasted by using the paste button or right click.
You can also type in the address manually, there is a checksum to help you identify typos.
Be careful and double-check the address, there is no way to revert this transaction and change the destination.
So make sure that the coins get into the right hands.

![Send To Field](/SendToField.png "Send To Field")

### How do I set the payment amount?

At the `Send` dialog, enter the bitcoin or dollar amount in the `Amount` field.

![Send Amount](/SendAmountField.png "Send Amount")

:::tip Dollar amounts are approximately
When entering a dollar amount, Wasabi calculates the bitcoin amount according to the current BTC/USD exchange rate.
This dollar amount can differ a bit compared to other wallets/exchanges.
:::

### Can I pay to many addresses?

Unfortunately pay to many is not yet implemented in the GUI.
However, you can use the [RPC server `send` call](/using-wasabi/RPC.md#send) and specify multiple destination addresses.

### Can I set a custom change address?

No. That is currently not possible.

### Can I set the change address type?

By default, the change address type is random between SegWit & Taproot.
This can be set to SegWit or Taproot only in the _Wallet Settings_.

### Does Wasabi support sending RBF?

All _send_ transactions signal RBF by default.
A pending transaction may be bumped (with RBF) by using the [_Speed Up Transaction_ feature](/FAQ/FAQ-UseWasabi.md#how-can-i-speed-up-a-pending-unconfirmed-transaction-cpfp-rbf).

### Why does Wasabi choose a new random node every time I send a transaction?

When you broadcast a transaction from a full node, that transaction is flooded onto the network.
Essentially, all nearby nodes are passed your transaction, and those nodes will pass to all of their nearby nodes, etc.
However, if a malicious adversary were to get enough relay nodes in the network, they could pretty easily connect the initial location of a transaction by simply observing from which node the transaction appeared first.
For this reason, broadcasting transaction through your own node may reveal your IP address.

So to fix this, Wasabi broadcasts your transaction to a random node over Tor, so this node cannot detect your IP address.
When you want to send another transaction, Wasabi destroys the original Tor circuit and establishes a new Tor identity and connection with a brand new node.
This reduces the risk of a passive bystander being able to link two transactions together that appear from the same location.

### What fee should I select?

Wasabi fetches fee esimations from mempool.space (default) or blockchain.info.
The lower the fee is, the longer the estimated wait; and the higher the fee, the faster the confirmation will come.
There are several different confidence levels, each of them gives an educated guess how soon the transaction will confirm.
But the provided time frames are only a rough estimation, and not at all a precise metric.

![Wasabi Wallet mining fee settings](/SendFeeSlider.png "Wasabi Wallet mining fee settings")

Because confirmation fee estimation is more an art than a science, you can also set the fee manually.
Then you can go after your gut feeling, [mempool analysis](https://mempool.space/), or just putting the minimum of 1 sat/vByte.

For a transaction to yourself, for example from your hot coinjoin wallet to your hardware wallet, you don't need to have fast confirmation, so you can set a relatively low fee.
But to send from the hot coinjoin wallet to the coffee shop, you might want to get faster confirmation, thus paying a higher fee.
This really depends on your own time preference in every unique moment.

:::tip Remember
These sats are precious, so don't overpay on fees!
:::

### How do I set custom fee rate?

At the `Preview Transaction` dialog, click on the icon `Change transaction fee or confirmation time`.

![Send Fee Icon](/SendFeeIcon.png "Send Fee Icon")

At the transaction fee slider dialog, click on `Advanced` and manually type the fee rate (sat/vByte) you want.

![Wasabi Wallet custom fee rate](/SendCustomFee.png "Wasabi Wallet custom fee rate")

### How does Wasabi select which coins to send?

If the user has coins with the same label as the recipient of the outgoing transaction (coins received in the past from the same recipient), then Wasabi automatically selects these coins.
If they are not enough, then Wasabi will also select private and semi private coins if necessary.
If there are not enough private and semi-private coins for this transaction, then Wasabi will select non-private coins also.
The user can change which non-private coins will be used, based on the labelling system.

When an address contains multiple unspent transaction outputs (UTXOs) due to address reuse, Wasabi automatically selects all UTXOs associated with that address as inputs for the transaction.

### How is the transaction broadcast?

Wasabi has 3 different mechanisms to broadcast a transaction, it will try in the following order:
1. Broadcast to the connected trusted node
2. Broadcast to the Bitcoin P2P network
3. Broadcast to an external site.

1: The transaction is broadcast by the RPC if the user has specified a trusted node. The Bitcoin node will then propagate the transaction to the network.

2: Wasabi will use its connected peers to broadcast a transaction in the following way:

- Check that there are enough connected nodes 
- Randomly select a subset of the connected nodes: 20% of number of connected nodes + 1, with a minimum of 2.
This means that if there are 12 peers connected, it will be broadcast to 3 nodes.
- Broadcast the transaction to the selected nodes (timeout if this takes more than 10 seconds)
- Receive confirmation from these nodes that the transaction was propagated (timeout if this takes more than 21 seconds)
- Disconnect from the nodes that were used for broadcasting

3: The transaction is broadcast to an external site (default is Mempool Space) using a new Tor identity.

Once a transaction is sent, Wasabi will always open a new Tor circuit with a new random node on the network, in order to avoid revealing too much information to one party.

### What is the cluster history?

Clusters are a property of a Bitcoin wallet with mandatory labeling.
When you use Wasabi, you must label every coin that you receive with the observers.
The reason why this is important, is that your "wallet" is really just a collection of coins (similar to a physical wallet, not to a bank account).
When you receive coins from somewhere to a labeled address, Wasabi will store the label locally on your device, for example:

`----> 0.65 BTC (Bob)`

Now if you receive money from Alice who uses an exchange, then your label would look like this:

`----> 2.1 BTC (Alice, exchange)`

Now here is where things can be a bit tricky for folks unfamiliar with Bitcoin.
Suppose you wanted to send all of your coins to a hardware wallet.
So you think to yourself "What's the harm in sending my money to one address?"

This is how the transaction will look like:

```
0.65 BTC (Bob)           ----->  2.75 BTC (Bob, Alice, exchange)
2.1 BTC (Alice, exchange)
```

The problem with this transaction, is Bob knows you, and knows that the 0.65 BTC is in your possession, and can monitor your transaction behavior.
But when you combine (consolidate) your coins in this way, you reveal to Bob that you also have 2.1 BTC from somewhere else, and you reveal to the exchange that you have 0.65 bitcoin from somewhere else.

When you [CoinJoin](/using-wasabi/CoinJoin.md) coins with Wasabi, you actually de-link the trail from Bob/exchange, to the coins in your wallet.
Those specific coins will be private after coinjoining.
They can now be spent without having to worry about your boss or the exchange tracking your behavior.

So the idea around clusters is to make it easier for users to follow the transaction graph.
The transaction graph is the history of where a coin has been, and is important if different histories need to be separated.
For example, if you buy coins anonymously in a P2P way, you should try to avoid mixing those coins with coins you got in a public way (donation, exchange, etc.).

### Why Wasabi did not send some of my selected coins?

Because they were not necessary for the transaction.
Wasabi Wallet will use only the necessary coins to make the transaction.

Example: If you select 10 coins with total value of 2 btc and you want to send 1 btc but the sum of 4 coins is enough to make the transaction, then Wasabi will use only those 4 coins.

This is good for privacy, and also saves you some transaction fees.

### How can I bump the transaction fee with child pays for parent (CPFP)?

Since Wasabi version [2.0.4](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.4) this FAQ is now obsolete because of the new [_Speed Up Transaction_ feature](/FAQ/FAQ-UseWasabi.md#how-can-i-speed-up-a-pending-transaction) that can be used.

### How can I speed up a pending/unconfirmed transaction (CPFP/RBF)?

A pending (unconfirmed) transaction can be speeded up by using the _Speed Up Transaction_ feature which will send a new transaction with a higher fee rate to replace the current one.

To speed up a transaction:

- Right click on the pending transaction in the wallet history and click _Speed Up Transaction_.

![Speed Up Tx History](/HistoryRightClick.png "Speed Up Tx History")

- Confirm you want to pay the additional fee for speeding it up.

![Speed Up Tx Confirm](/SpeedUpTxConfirm.png "Speed Up Tx Confirm")

- Enter your passphrase to send the new transaction.
- Transaction succesfully speeded up!

Read more [here](/using-wasabi/Send.md#speed-up-or-cancel-transaction).

> The _Speed Up Transaction_ tool is not available for coinjoins, or when using a hardware wallet.

:::warning
Wasabi currently doesn't take into account if the transaction contains unconfirmed coinjoin outputs and that the speeding up will have little to no effect.
:::

### How can I cancel a pending/unconfirmed transaction?

A pending (unconfirmed) transaction can be cancelled by using the _Cancel Transaction_ feature which will send a new transaction with a higher fee rate to replace the current one.
The replacement transaction is sent to a new address of the user himself, so the bitcoin comes back to the user's wallet and the transaction can be considered "cancelled".

To cancel a transaction:

- Right click on the pending transaction in the wallet history and click _Cancel Transaction_.

![Cancel Tx History](/HistoryRightClick.png "Cancel Tx History")

- Confirm you want to pay the additional fee for cancelling it.

![Cancel Tx Confirm](/CancelTxConfirm.png "Cancel Tx Confirm")

- Enter your passphrase to send the new transaction.
- Transaction cancelled!

Read more [here](/using-wasabi/Send.md#speed-up-or-cancel-transaction).

> The _Cancel Transaction_ tool is not available for coinjoins, or when using a hardware wallet.

### Why is there no `Send` button, only the `Receive` button is displayed?

When the wallet has a balance of 0, the `Send` button is hidden because there is no bitcoin to send.
So this happens when a new wallet has just been generated and it hasn't received any bitcoin yet.
Receive some bitcoin and then the `Send` button will automatically be displayed.

There is also no `Send` button with watch-only wallets.

### Can I send (privately) from my wallet when the privacy progress is below 100%?

Yes, you can always send from your wallet.
However, a best practice is to only send private funds.
Making your wallet 100% private [takes some time](/FAQ/FAQ-UseWasabi.md#how-long-does-it-take-to-make-my-wallet-100-private), but in the mean time you can always send the (private) funds.

So when your wallet is partially private (between 0 and 100% privacy progress) it is a best practice to only use the available private funds, to preserve your privacy.
In the privacy progress tile, `PRIVATE` shows the currently available private BTC amount.
So that is the amount (minus the mining fees) which can be sent privately, even if the privacy progress is not yet 100%.
When sending, the wallet automatically selects the private funds first.

For example:

When `PRIVATE` is 0.00338462 BTC, that means I can send less than that privately.
Even when the `Privacy Progress` is below 100%.
So when sending, less than 0.00338462 BTC (to cover the mining fees) should be entered as the `Amount` in order to only use the private funds.

![Wasabi Wallet Privacy Progress Tile](/PrivacyProgressTile.png "Wasabi Wallet Privacy Progress Tile")

:::tip Use the Privacy Suggestions
Since Wasabi version [2.0.4](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.4), there are privacy suggestions to only send private or semi-private coins.
:::

Read more [here](/using-wasabi/Send.md#privacy-suggestions).

## CoinJoin

### What is the minimum amount required to coinjoin?

The coordinator sets the minimum amount of bitcoin required to participate in a coinjoin round.

The default is 0.00005000 BTC (5000 sats) + mining fees.

### What is the maximum amount I can coinjoin?

The coordinator sets the maximum amount of bitcoin an input can have to participate in a coinjoin round.

The default maximum is a 43000 BTC UTXO.

### What are the fees for the coinjoin?

As of Wasabi version [2.2.0.0](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.2.0.0), the Wasabi client will only participate in 
coinjoin rounds where it only pays for the mining fees.

Previous versions also included the coordination fee concept, where the coordinator could charge a fee for providing the service.
This has now been removed, so it will not participate in coinjoin rounds that charge a coordination fee.

Read more [here](/using-wasabi/CoinJoin.md#fees).

### What is the anonymity set?

The anonymity set is effectively the size of the group you are hiding in.

If 3 people take part in a CoinJoin (with equal size inputs) and there are 3 outputs then each of those output coins has an anonymity set of 3.

```
0.1 BTC (Alice)       0.1 BTC (Anon set 3)
0.3 BTC (Bob)     ->  0.1 BTC (Anon set 3)
0.4 BTC (Charlie)     0.1 BTC (Anon set 3)
                      0.2 BTC (Change Coin Bob)
                      0.3 BTC (Change Coin Charlie)
```

There is no way to know which of the anon set output coins are owned by which of the input owners.

All an observer knows is that a specific anon set output coin is owned by one of the owners of one of the input coins, that is 3 people - hence an anonymity set of 3.

Your Wasabi software has limited information on what the actually achieved anonymity set is, so the anonymity set that the software presents you is just an estimation, not an accurate value.
With Wasabi we are trying to do lower estimations, rather than higher ones.

### What is the anonymity score?

The anonymity score is a way to estimate the level of entropy of a UTXO in an unequal-but-highly-composable output value coinjoin.

It is different than anonymity set. 
For example, if the outputs are [1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.4, 0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1] then, even when each of those 1s have anonscore 4, there are still lots of combinations of outputs that sum up to 1, so the anonset should be much higher but the anonscore is extremely conservative and takes into account many other things.

### What is the difference between anonymity set and anonymity score?

The anonscore evolved into existence from the anonset, but with some differences.
What differs is the kind of coinjoins they are applied to, where anonset was for Wasabi 1 and anonscore is for current Wasabi 2.
In Wasabi 1 coinjoins there are unequal inputs, some equal outputs, and change coins. 
In Wasabi 2 coinjoins there are many equal inputs, many equal outputs, and (sometimes) some unique value outputs, that are not necessarily change coins.
In fact most of the times they are well mixed coins.

Basically the anonymity score is an extremely conservative anonymity set calculation.

### What are the equal denominations created in a coinjoin round?

The standard denominations are:
`5000`, `6561`, `8192`, `10000`, `13122`, `16384`, `19683`, `20000`, `32768`, `39366`, `50000`, `59049`, `65536`, `100000`, `118098`, `131072`, `177147`, `200000`, `262144`, `354294`, `500000`, `524288`, `531441`, `1000000`, `1048576`, `1062882`, `1594323`, `2000000`, `2097152`, `3188646`, `4194304`, `4782969`, `5000000`, `8388608`, `9565938`, `10000000`, `14348907`, `16777216`, `20000000`, `28697814`, `33554432`, `43046721`, `50000000`, `67108864`, `86093442`, `100000000`, `129140163`, `134217728`, `200000000`, `258280326`, `268435456`, `387420489`, `500000000`, `536870912`, `774840978`, `1000000000`, `1073741824`, `1162261467`, `2000000000`, `2147483648`, `2324522934`, `3486784401`, `4294967296`, `5000000000`, `6973568802`, `8589934592`, `10000000000`, `10460353203`, `17179869184`, `20000000000`, `20920706406`, `31381059609`, `34359738368`, `50000000000`, `62762119218`, `68719476736`, `94143178827`, `100000000000`, `137438953472` sats.

So, there are 79 denominations from 0.00005000 BTC up to 1374.38953472 BTC.

### What is happening in the input registration phase?

During this phase the client selects which coin(s) will be registered for coinjoin.
Wasabi then generates the related input proofs.
After that, a unique Tor identity will be generated for each input, which will be used to send the input ownership proof to the coordinator.

The coordinator now verifies that this input is allowed to register (i.e. there is still room for more inputs, the coin is confirmed, the input proof is valid etc.).
If all checks are valid, the coordinator creates and sends back the credentials.

Since the goal is to have at least the minimum input count in one round, the [input registration phase](/using-wasabi/CoinJoin.md#input-registration) can fail if too few participants registered in the available time frame.

### What is happening in the connection confirmation phase?

Because the input registration phase takes some time, the coordinator needs to ensure that everyone is still online and ready to continue.
So in the [connection confirmation phase](/using-wasabi/CoinJoin.md#connection-confirmation) every Alice sends a signal to the coordinator that she is still online, and when all Alices do so, or after a timeout and the number of online Alices is still larger than the minimum number of inputs, this phase ends.

### What is happening in the output registration phase?

In this [phase](/using-wasabi/CoinJoin.md#output-registration), every client needs to change the value of their credentials to the desired output values.
For example, the client presents to the coordinator two old credentials and two newly created ones.
The two pairs sum up to the exact same value, which the coordinator can verify, without knowing the amount value of the credentials.
This process may repeat multiple times.

The client now creates a new Tor identity called Bob, which is not tied to Alice.
Bob now sends the coordinator an unblinded credential (signed by the coordinator) and a bitcoin address.

### What is happening in the signing phase?

After all inputs and outputs are registered, the coordinator has all the information to build the coinjoin transaction.
This raw (unsigned) transaction is sent to all Alices, each of them verifies that the transaction is valid and then signs it.
The signatures are sent back to the coordinator who accumulates all of them.
The [signing phase](/using-wasabi/CoinJoin.md#signing) is concluded when the coordinator receives all the valid signatures for all registered inputs.

### What is happening during the blame round?

If the signing phase fails from becoming successful due to some Alices disrupting the round, then a [blame round](/using-wasabi/CoinJoin.md#blame-round) will be created with the successful Alices.
In the blame round a new coinjoin will be constructed by repeating the coinjoin phases.
All Alices have to sign this new transaction and send their signature to the coordinator.

### What is happening in the broadcasting phase?

In the [broadcasting phase](/using-wasabi/CoinJoin.md#broadcasting) the coordinator sends the signed final CoinJoin transaction to several random Bitcoin peer to peer nodes, and it is gossiped throughout the network to the miners.

### Is there any additional anonymity using multiple wallets for CoinJoins?

You'd gain 1 less anonymity set than if you'd only mix with one wallet (and Wasabi doesn't display that).
On the other hand, the systemic anonymity is slightly improved if a few people are mixing with multiple wallets, because that removes the certainty on this Blockchain analysis assumption.

### I'd like to experience coinjoin but I'm not comfortable using real Bitcoin. What can I do?

You can try to make a coinjoin via Wasabi on the Bitcoin [TestNet4](/using-wasabi/Testnet.md) (an alternative Bitcoin network, to be used for testing).
Go to `Settings` > `Bitcoin` and change the network to `TestNet4`.
Then restart your Wasabi and create a new wallet, this is needed because Wasabi differentiates between "Main wallets" and "TestNet wallets".
This wallet will synchronize for the TestNet, and generate TestNet addresses.
You can get tBTC from faucets like [this one](https://faucet.testnet4.dev/) or [https://coinfaucet.eu/en/btc-testnet4/](https://coinfaucet.eu/en/btc-testnet4/).

### Does Wasabi have to stay on during coinjoin?

Yes, Wasabi needs to stay on during coinjoins, you cannot be offline and still participate in coinjoins.

A coinjoin transaction is different from a normal transaction (where you are the only person signing), as it requires multiple participants to sign the same transaction.

Here is how Wasabi handles different scenarios:

|  | During [input registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase) | After input registration phase |
|:---:|:---:|:---:|
| You close Wasabi | Your registered coins are automatically dequeued | Wasabi will make you wait until the round finishes |
| Wasabi goes offline | Your registered coins are automatically timed out by the coordinator after some time | The coin(s) that disrupted the round will likely be banned by the coordinator from participating in another coinjoin for a period of time. (This is to prevent [DoS attacks](https://github.com/nopara73/ZeroLink/#d-dos-attack)) |

### What if there's a power outage during CoinJoin? Do I lose my coins?

No you don't.
CoinJoins are atomic, they either happen or they don't.
If your wallet crashes or your computer goes offline during CoinJoin you simply don't participate in this CoinJoin, look at table [here](/FAQ/FAQ-UseWasabi.md#does-wasabi-have-to-stay-on-during-coinjoin) for more info.

### How much anonymity set do I need?

The amount of privacy needed depends on your individual threat model, who is trying to deanonymize you?
It is commonly said that an anonymity set of 50 is sufficient to evade low-level blockchain forensics analysis, but it might not protect you against large adversaries.
At least one round to re-mix your coins can increase your privacy drastically.
With Wasabi this can be achieved in a matter of hours.

### How does my wallet communicate with the Wasabi coordinator server?

Wasabi communicates to the coordinator server to participate in coinjoins.
By default, all communication is done over Tor.

- [Can the coordinator attack me?](/FAQ/FAQ-Introduction.md#can-the-coordinator-attack-me)
- [Is the backend's coordinator code open-source?](/FAQ/FAQ-Introduction.md#is-the-backend-s-coordinator-code-open-source)

Then, there are five different phases in a coinjoin.
You can follow these links to have a full explanation on that:
1. [Input registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase)
2. [Connection confirmation phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-connection-confirmation-phase)
3. [Output registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-output-registration-phase)
4. [Signing phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-signing-phase)
5. [Broadcasting phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase)

### What is the address of the coordinator?

The coordinator possibly gets paid in every coinjoin.
Wasabi is using a fresh unused coordinator address for every coinjoin round.

### What is the maximum number of coins that can be registered in a coinjoin?

Wasabi Wallet's default client is configured to register 1 up to 10 inputs per coinjoin round.
However, as the coordinator cannot enforce this, a custom client could use a different configuration.

### How many coins/outputs do I get from a coinjoin?

Wasabi Wallet's default client is configured to register 1 up to 10 outputs per coinjoin round.
However, as the coordinator cannot enforce this, a custom client could use a different configuration.

### Can I manually select which coins to register for coinjoin?

No, that is currently not possible.
The automatic coinjoin robot registers the coins, based on multiple factors.

:::tip
You can enable the [non-private coin isolation](/FAQ/FAQ-UseWasabi.md#what-does-the-non-private-coin-isolation-mean-in-the-coinjoin-settings) setting, in case you want to prevent possible input heuristics (from outside observers) of anonscore 1 coins into the same coinjoin round.
:::

### How to exclude/freeze coins from coinjoin?

Since Wasabi version [2.0.8](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.8) it is possible to exclude coins from participating in coinjoin in the GUI.

Click on the music box menu items -> select _Exclude Coins_ -> select the coins to exclude.

![Music Box Menu Items](/MusicBoxMenuItems.png "Music Box Menu Items")

The coins will remain excluded until they are manually deselected.

Alternatively, coins can be excluded from coinjoin using the [excludefromcoinjoin](/using-wasabi/RPC.html#excludefromcoinjoin) RPC call.

### Can I coinjoin to another wallet?

Yes, since Wasabi version [2.0.7.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.7.2) it is possible to coinjoin to another wallet.

The output wallet must be loaded in Wasabi, as it is not possible to coinjoin to an external wallet.
It will coinjoin as usual, but use the other wallet's addresses for the coinjoin outputs.

Go to the _Wallet Settings_ -> _Coinjoin_ tab -> select the wallet you want to coinjoin to.

![Coinjoin To Wallet](/WalletSettingsCoinjoinToWallet.png "Coinjoin To Wallet")

:::warning
This feature does **not** take into account the anonymity score of coins.
It will always send all coinjoin outputs to the other wallet, regardless of whether they are (sufficiently) private or not.
:::

### How long does it take to make my wallet 100% private?

Depending on many factors, such as the `Anonymity score target`, the `Coinjoin strategy`, the amount of bitcoin, and the liquidity of the coordinator, this can take from a few hours to several days or even more.

### What coinjoin strategy should I select?

There is no answer for all, or a "best" strategy, it depends on the user's privacy needs.
The coinjoin strategy should be selected according to the user's preference:

- If you want to maximize privacy, then select `Enhance Privacy` (which comes with a cost as it will do more coinjoins).
- If you want to "just" coinjoin your funds, then select `Default Strategy`.
- If you want to minimize costs, then select `Reduce Costs` (which will only coinjoin during the cheaper parts of the week).

![Wasabi Coinjoin Strategy](/CoinjoinStrategy.png "Wasabi Coinjoin Strategy")

Or the user can create their own custom strategy by manually changing the settings.

>The `Default Strategy` is sufficient for most users 

### What is the coinjoin strategy?

A coinjoin strategy has specific pre-configured coinjoin settings.

There are multiple coinjoin settings which the user is able to configure according to their own prefence.
Each coinjoin strategy has different specific settings for optimal performance.
After a coinjoin strategy is selected, its settings are applied.
It is supposed to make it easy for the user to select their preference, without having to know about the specific settings and how to configure them themselves.

Read more [here](/using-wasabi/CoinJoin.md).

### What are the differences/settings per coinjoin strategy?

|  | Enhance privacy | Default strategy | Reduce costs | 
|:---:|:---:|:---:|:---:|
| Non-private coin isolation | enabled  | enabled | not enabled |
| Anonymity score target | random between 30 and 50 | 10 | 5 |

### What does the `Stop coinjoin threshold` mean in the coinjoin settings?

It is the confirmed wallet balance under which coinjoin will automatically stop/not start.

A use case is that it might not be economical to coinjoin with this amount (fee amount compared to coinjoin amount).

For example, if the confirmed balance is 0.005 BTC, `Automatically start coinjoin` is enabled and the `Stop coinjoin threshold` is 0.01 BTC, the user will have to manually press Play to start coinjoining.
The default _Stop coinjoin threshold_ is 0.01 BTC.

![Stop coinjoin threshold](/StopCoinjoinThreshold.png "Stop coinjoin threshold")

### What does the `Non-private coin isolation` mean in the coinjoin settings?

When the `Non-private coin isolation` is enabled, only a single coin can be non-private (anonymity score 1) out of the registered coins into coinjoin.
To prevent possible coinjoin input heuristics from outside observers.
The `Non-private coin isolation` is enabled by default when the `Default Strategy` or `Enhance Privacy` coinjoin strategy is selected.

![Non Private Coin Isolation](/NonPrivateCoinIsolation.png "Non Private Coin Isolation")

### Do coinjoin transactions signal RBF?

No.
Coinjoin transactions do not signal RBF.

### Why do my coins occasionally get banned from participating in coinjoin?

A coinjoin consists of multiple users registering inputs (coins) and blinded outputs.
Once the appropriate number of participants have registered, the actual transaction (the coinjoin) is constructed by the coordinator, and given to all participants in the span of a short time frame (default 60 seconds).
At this point, all registered participants must sign off on the coinjoin, and if a single one of the participants fails to sign their input, the entire coinjoin must be restarted.

So this introduces a problem, or an attack vector - a malicious user could purposefully register coins, only to wait for the signing phase and not sign.
This would halt the entire coinjoin process for all other participants and Wasabi would no longer work.
This is also known as [denial of service attack](https://github.com/nopara73/ZeroLink/#d-dos-attack).

So a simple solution looks like this - the coordinator could collect signatures from all inputs, and if one or more input refuses to sign, the coordinator could record that input and temporarily (or even permanently) ban that coin from participation.
This is a nice solution, as it mitigates a single coin from ruining all coinjoins, but it too comes with trade-offs.

For example, most of the time, users fail to sign a coinjoin for non-malicious reasons.
Perhaps their Tor connection went down in precisely that moment, or perhaps their WiFi had a temporary flicker at the wrong time.
Further, some users don't even realize that the signing phase is happening, and sometimes shut down their computer at exactly the wrong moment.
All of these things hinder a successful coinjoin for all other participants, but by pure accident.

If you are one of the victims of this temporary banning then simply wait for the ban to expire and try again.
The best thing you can do to avoid the issue is to have a strong internet connection and keep your computer online throughout the whole process.

:::tip Note:
Banning does not mean freezing.
You can send banned coins to anyone you want.
This is a temporary ban on your coins from participating with the coordinator.
:::

### How do I find a coordinator?

There are several ways to find a coordinator:

- Users can do their own discovery with tools like [Wasabi Nostr](https://github.com/Kukks/wasabinostr), which discovers Wabisabi coordinators over Nostr.
- Public announcement websites, such as [Wabisator](https://wabisator.com), [Liquisabi](https://liquisabi.com), [Liquisabi bot (X)](https://x.com/liquisabi) and [Liquisabi bot (Nostr)](https://primal.net/p/npub1u4rl3zlfa2efxslhypf4v6r8va5e0c9smxyr5676pxkyk0chn33s0teswa).
- A coordinator can advertise themselves, like on social media.
- Run coordinators in your social circles

:::warning Don't trust, verify
The listed public announcement websites are community run projects, use them with caution.
It is best to do the discovery yourself.
:::

### How do I change the coordinator?

Since Wasabi version [2.0.8](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.8), the coordinator can be changed in the GUI in the _Coordinator_ tab in the settings.

Go to settings -> select coordinator tab -> paste/enter the URI -> restart Wasabi -> Wasabi will now use this coordinator.

![Settings Coordinator URI](/SettingsCoordinatorURI.png "Settings Coordinator URI")

Alternatively, the `CoordinatorUri` can be changed in the config file.

## Backup and Recovery

### How do I back up my mnemonic words?

:::tip
Write down your recovery words!
:::

Wasabi uses [BIP 39: mnemonic code for generating deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) to enable easy backups of all private keys in the wallet.
The mnemonic is displayed as 12 recovery words that are only shown once during the wallet generation.

![Wasabi Wallet recovery words](/AddWalletRecoveryWords.png "Wasabi Wallet recovery words")

:::danger
In order to restore a wallet, you need BOTH the recovery words AND the passphrase!
:::

It is a good idea to keep the two in separate analog backups, such as a laminated paper written with pencil.
In order to defend against nature destroying fragile paper, you can consider stamping the words into metal.
Use two different backups and locations for the mnemonic and passphrase, because whoever has both [including a physical attacker] has full access to your sats.
Find a secure physical location to store the backups, maybe a home safe, or an expert security deposit box.

Please see [Wasabi Backup Best Practices](/using-wasabi/BackupBestPractices.md) for more information about backups.

### How do I back up my wallet file?

Although you can back up your private keys with the mnemonic words and passphrase, this is only a last resort recovery.
If you want to also secure your address labels, the anonscore and additional metadata, then you can do a digital backup.
Simply copy the `Wallets` folder with the `wallet.json` files from your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) onto suitable hardware, for example an encrypted USB stick.
Note that this file has the encrypted private key (extracted from the extended private key), meaning that you only need the passphrase to spend the bitcoin.
This also contains the extended public key, the public keys, and the address labels, meaning that it completely links all the coins, both pre and post mix, with clear proof.

:::warning
Make sure to back up your passphrase separately because it is necessary to spend your bitcoin.
:::

:::tip
The wallet file backup is sensitive, in terms of privacy, but not critical in terms of loss of funds (if a passphrase was used when generating the wallet).
So it is good advice to encrypt this wallet file.
:::

### What do I need to recover my wallet?

To recover your wallet you need either your Recovery Words + Passphrase, or the Wallet File + Passphrase, as shown in the table below.

| | Recovery Words | Wallet File | Passphrase
:------------ | :-------------:| :-------------:| :-------------:
Recovery Words | :x: | :x: | :heavy_check_mark:
Wallet File | :x: | :x: | :heavy_check_mark:
Passphrase | :heavy_check_mark: | :heavy_check_mark: | :x:

:::tip
If no passphrase was entered at the wallet creation, then the Recovery Words or Wallet File alone are enough to recover the wallet.
:::

### Can I recover my wallet without the password?

No.
The passphrase/password you set is used as a 13th word (passphrase) as described in BIP39, you should back it up when you generate a wallet.
It is necessary to spend your bitcoin or to recover your wallet, as shown in [this table](/FAQ/FAQ-UseWasabi.md#what-do-i-need-to-recover-my-wallet).

### What should I do if I forget my password?

Try every possibility you can think of to find your passphrase, you have an unlimited number of tries.
If that still doesn't work, you might want to try external password crackers or recovery tools, but be careful to only use well-tested, well-reviewed ones.

### I lost the recovery words but I still have the .json file and the password. Is my wallet still recoverable?

Yes, but in this case it is advisable to create a new wallet and back up the new recovery words and the passphrase, then move your bitcoin there.

The .json file contains the encrypted secret that requires the passphrase to derive your private keys.
That gives you access to your bitcoin.

### Can I verify the Recovery Words of an existing wallet?

Yes.
Go to `Wallet Settings` > `Verify Recovery Words`.
Type in your recovery words in the correct order, click on `Verify` and it will show you if they are correct or not.

![Wasabi Wallet Verify Recovery Words](/VerifyRecoveryWords.png "Wasabi Wallet Verify Recovery Words")

## Hardware Wallet

[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/aU8ysH9JH9M)

[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/kocEpndQcsg)

[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/sM2uhyROpAQ)

### What hardware wallets does Wasabi support?

Wasabi uses the Bitcoin Core [Hardware Wallet Interface (HWI)](https://github.com/bitcoin-core/HWI) which allows it to support a variety of hardware wallets.
For the complete list of all the officially supported hardware wallets, click [here](https://github.com/WalletWasabi/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-hardware-wallets).

### Why does Wasabi use the Hardware Wallet Interface?

Wasabi uses the [Bitcoin Core Hardware Wallet Interface [HWI]](https://github.com/bitcoin-core/HWI), a python library tool for proper integration of off-line signing devices.
It provides a standard way for any software wallet to communicate with any hardware wallet without needing any device specific drivers.
HWI was developed and carefully reviewed over several years, with outstanding contributions by [Andrew Chow](https://github.com/achow101).
Wasabi implements C# code that executes the HWI tool.
Wasabi uses this powerful tool because there are no other dependencies necessary to support all the existing and future hardware wallets.

### Does Wasabi support the hidden wallets of hardware wallets?

Partially.
Only device side passphrase is supported.
PC side passphrase is not.
This means that the hidden wallet feature can be used with Trezor T, Ledger Nano S, Nano S Plus, Nano X and ColdCard.
After the 12 or 24 words, enter the passphrase as the 13th or 25th word on the hardware wallet.
It’s part of [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

### How can I generate a Wasabi skeleton wallet file in ColdCard?

On the ColdCard you go to `Advanced > MicroSD Card > Export Wallet > Wasabi Wallet` and it will save a skeleton json-file to the MicroSD card in the hardware wallet.

Read more [here](/using-wasabi/ColdWasabi.md).

### How can I import the Wasabi skeleton wallet file?

Take the MicroSD card from the ColdCard and plug it in the computer with the Wasabi Wallet software.
In Wasabi Wallet go to `Add Wallet` and select `Import a wallet`.
Now select the Wasabi skeleton json-file from the MicroSD card, if this fails you can manually enter the file location in Wasabi Wallet window and load the file.

Read more [here](/using-wasabi/ColdWasabi.md#connecting-coldcard-via-sd-card).

### How can I generate a receiving address of my hardware wallet?

In Wasabi Wallet you load your previously imported wallet (from Wasabi skeleton, or USB detection) and go to the `Receive` dialog, here you enter a label for the observers of the incoming transaction and click `Continue`.
In the receive dialog, previously generated addresses (which haven't received any funds yet) can be viewed and copied at `Addresses Awaiting Payment`.

Read more [here](/using-wasabi/ColdWasabi.md).

### How can I sign a transaction with a USB connected hardware wallet?

To send a transaction you will need to connect your hardware wallet and unlock the device (using PIN or password).

- Go to `Send`, enter the address to send to and the amount of bitcoin to spend.
- Enter the label of whom you are sending to.
- At the `Preview Transaction` screen, check if all the information is correct.
- After you have checked that everything is correct, click `Send Now` to sign it with the connected hardware wallet and broadcast the transaction to the network.

Read more [here](/using-wasabi/ColdWasabi.md#connecting-via-usb).

### How can I build and export a transaction to ColdCard?

- Enable `PSBT workflow` in the _Wallet Settings_.
- Go to `Send` and enter the destination address and amount.
- Click `Continue`.
- Enter the label of whom you are sending to.
- At the Preview Transaction screen, check that everything is correct.
- Click on `Save PSBT file` and save the file to the MicroSD card.
- You can then insert the MicroSD card (containing the PSBT) in the Coldcard for manual verification and signing.

Read more [here](/using-wasabi/ColdWasabi.md#connecting-coldcard-via-sd-card).

### How can I sign a transaction on the ColdCard?

On the ColdCard (Mk2, firmware 2.1.1 and up) you enter the PIN code to unlock the hardware wallet and press `Ready To Sign` with the MicroSD card containing the previously generated transaction or PSBT-file.
Verify the address and amount and the ColdCard will then create a signed.psbt and final.txn file on the MicroSD card.
The finalized transaction (`xxx-final.txn`) can now be broadcast by Wasabi Wallet with the `Broadcaster` tool, or even a radio or satellite dish if someone is listening!

Read more [here](/using-wasabi/ColdWasabi.md#connecting-coldcard-via-sd-card).

### How can I import and broadcast a final transaction from ColdCard?

In the top search bar, go to `Broadcaster` and then select `Import Transaction`, now you can select the previously finalized (and signed) transaction file from the MicroSD card.
If this fails you can manually type the path to this file in Wasabi Wallet to load the transaction.
Now click `Broadcast Transaction` to send it off over Tor to a random Bitcoin node so it can flood over to the miners for confirmation in a block.

Read more [here](/using-wasabi/ColdWasabi.md#connecting-coldcard-via-sd-card).

:::tip
A `Broadcast` button will be displayed next to the `Send` button, when _PSBT workflow_ is enabled, for an easier workflow.
:::

### Can I coinjoin bitcoins on my hardware wallet?

No, that is currently not possible.
A coinjoin is a multi round interactive process, and requires fast signing by the participants, thus the keys need to be on a hot computer.
Thus currently you have to send the bitcoins from your hardware wallet to a `hot` Wasabi Wallet, do the coinjoin and then send them back to a new address on the Hardware wallet for cold-storage.
Or use the _coinjoin to wallet_ feature, as explained [here](/FAQ/FAQ-UseWasabi.md#can-i-coinjoin-to-another-wallet).

Read more [here](/using-wasabi/ColdWasabi.md#cold-wasabi-protocol).

### Does Ledger Live send my public keys and addresses to a third party server?

Only if you add your accounts in the app, but not if you update your device firmware or install apps.
When using the Ledger Live software wallet to manage your coins, you send all of your used, and 20 unused addresses to Ledger's nodes. [Source](https://support.ledger.com/hc/en-us/articles/360010892360)

Your extended public key, however, is not shared with Ledger's node, but rather stored encrypted on your local machine.

Read more [here](https://support.ledger.com/hc/en-us/articles/360011069619).

Ledger could potentially analyze information from API calls to their nodes to link addresses to individual users, though Ledger says no logs are kept during normal operation.

To avoid any privacy leak, you can use a Ledger hardware wallet in combination with Wasabi as a software interface, and because Wasabi does not leak your addresses, your transaction history is not shared with anyone.

### After I coinjoined my coins and reached 100% privacy, I sent them to my hardware wallet and now the coins have anonscore 1. Why?

Everything is working as expected.

The anonymity score (number) is tied to your wallet that you used to coinjoin, if you send a coinjoined coin to another Wasabi Wallet of yours (hardware wallet or normal wallet) it will have an anonscore of 1 because this wallet doesn't know all of the coinjoin history.

You should put a meaningful label when you generate a receive address in your hardware wallet, e.g. "private UTXO" (something that reminds you that you got this UTXO from your Wasabi Wallet and that it was coinjoined).

### Can I use Trezor One with Wasabi?

No. Unfortunately, Trezor One is not supported by Wasabi Wallet.
For the complete list of all the officially supported hardware wallets, click [here](https://github.com/WalletWasabi/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-hardware-wallets).

### Can I use BitBox with Wasabi?

Yes, since Wasabi version [2.0.7](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.7) BitBox02-BtcOnly is supported.

The device by default asks for a "Pairing code", currently, there is no such function in Wasabi. 
Therefore, either disable the feature or unlock the device with BitBoxApp or hwi-qt before using it with Wasabi.

### How can I type in the passphrase of my Trezor T?

After connecting the Trezor T to your computer and upon trying to load your wallet, you get a message on the Trezor T to choose where to type your passphrase, on the device or the host (computer), choose the first option (device) then enter the passprase using the touchscreen of your Trezor T.
Wasabi wallet will now load this passphrase protected wallet.

### I have coinjoined with a Trezor device on Trezor Suite, but in Wasabi I cannot see my coins?

Trezor uses only Taproot for coinjoin, with a non-standard derivation path.
So Wasabi does not know about the existence of the Trezor Suite coinjoin coins.

### How can I use Hardware Wallets on Linux (udev rules)?

Since Wasabi version [2.0.8](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.8) the Wasabi package contains the required udev rules, so they don't need to be manually installed.

On older versions, you need to create a set of `udev rules` for the hardware wallet to be reachable.

Udev rules instructions can be found [here](https://github.com/bitcoin-core/HWI/blob/master/hwilib/udev/README.md).

## History

### How can I check the transactions history?

The wallet's main page displays the history of all transactions made with this specific wallet.
It includes receiving, sending, and coinjoin transactions.

![Wasabi Wallet History](/History.png "Wasabi Wallet History")

### How can I see coinjoins in the history list?

Coinjoin transactions are indicated with a shield icon:

![History Coinjoin](/HistoryCoinjoin.png "History Coinjoin")

When the wallet has made multiple coinjoins, the coinjoins will be clustered.
Coinjoin clusters are indicated with a double shield icon.
To see the individual coinjoins, the cluster can be expanded by clicking the arrow on the left:

![History Coinjoin Expanded](/HistoryCoinjoinExpanded.png "History Coinjoin Expanded")

A coinjoin is a payment within the same wallet, thus it only shows the fee leaving the wallet.

### Can I sort the history items?

Yes, the history items can be sorted by clicking on the transactions sort button:

![Sort Date Column](/HistorySort.png "Sort History")

### Can I search for a transaction ID in the history?

Yes.
This can be done by pasting the transaction ID into the search bar or by manually typing part of the transaction ID.
After clicking the result, the transaction will be highlighted in the history.

![SearchBar Search TX](/SearchBarTXIDSearch.png "SearchBar Search TX")

:::tip
It will only show results of the wallets which are currently open.
:::

### Can I export a list of transactions?

There is currently no convenient way to export a list with transaction details inside the GUI.
However, you can see the `wallet.json` files inside the `Wallets` folder (you can find it in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder)) which contains all the public keys, labels and anonset.

You can use the [Wasabi RPC server `gethistory` call](/using-wasabi/RPC.md#gethistory) to get a list of all transactions, including date, block height, amount, label and tx id.

## Settings

### How do I connect my own full node to Wasabi?

Wasabi can connect to a specified full node using the Bitcoin RPC.

Go to `Settings` -> `Bitcoin` tab -> enable `Connect to Bitcoin Node RPC` -> specify the RPC endpoint and RPC credential string.
The RPC credential string can be the username & password, or the cookie file of the node.

![Settings Bitcoin RPC](/SettingsBitcoinRPC.png "Settings Bitcoin RPC")

The Bitcoin RPC status is shown in the bottom right corner status icon (the status icon displays a warning triangle in case the full node is not connected).

![Status Icon Bitcoin RPC](/StatusIconBitcoinRPC.png "Status Icon Bitcoin RPC")

Read more [here](/using-wasabi/BitcoinFullNode.html#how-does-wasabi-use-your-bitcoin-full-node) about how Wasabi uses the full node.

### How can I turn off Tor?

You can turn off `Network anonymization (Tor)` in the Settings.
Note that this is a privacy concern, especially when you coinjoin and when you broadcast a transaction.
In the first case, the coordinator would know the links between your inputs and outputs based on your IP address.
In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.

:::danger
It is recommended to always use Tor!
The setting to turn it off is only intended for debugging and trouble shooting.
::::

### How can I change the anonymity score target?
 
The anonscore target is a wallet specific setting which is determined by the `Coinjoin Strategy`, but can also be manually changed in the `Wallet Settings` dialog.

- On the main view click the three dots on the top right corner after loading a wallet.
- Choose `Wallet Settings`.
- Go to the `Coinjoin` tab.
- Set the `Anonymity score target` to the desired value and click `Done`.

![Wallet Settings Anonymity score target](/AnonymityScoreTarget.png "Wallet Settings Anonymity score target")

Alternatively, you can change the anonymity score target by editing the wallet file.
Go to the SearchBar and click `Wallet Folder` and open the wallet json file and edit the `AnonScoreTarget` value.

```json
"AnonScoreTarget": 10,
```

### What is the dust threshold?

Dust can mean [a lot of things](https://bitcoin.stackexchange.com/questions/10986/what-is-meant-by-bitcoin-dust), depending on how you look at it.
It can be a non-economical input, that is a UTXO that has less value than the fees it would cost to spend this coin.
A dust attack is actually about [forced address reuse](https://en.bitcoin.it/Privacy#Forced_address_reuse), the malicious actor sends very small amounts into old addresses and consolidation of these dust UTXOs can link several coins in a wallet cluster.

Specifically in the context of Wasabi, with the dust attack limit setting you can limit the value of spam coins shown in the GUI.
Coins from other wallets (no self-spend) below the dust attack limit that you receive to a used address are not shown.
For example: When it is set to `0.0000 5000 BTC`, and you receive a coin worth `0.0000 4000 BTC` from a different wallet to an already used address, then this transaction and the coin in the coin list will not be shown.

![Dust attack limit](/SettingsDustAttackLimit.png "Dust attack limit")

### Where can I find the logs?

In the SearchBar you can see there are several logs available.
* The `Logs` shows the general log information about Wasabi Wallet.
* The `Tor Logs` shows the Tor specific logs.

![Wasabi Wallet SearchBar Help&Support and Open](/SearchBarHelpSupportOpen.png "Wasabi Wallet SearchBar Help&Support & Open")

Alternatively, you can find the logs inside your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).

### How to activate/deactivate discreet mode?

You can activate/deactivate Discreet Mode by clicking the Discreet Mode icon in the bottom left corner of the main view.

Read more [here](/using-wasabi/DiscreetMode.md).

![Discreet Mode Icon](/DiscreetModeActivate.png "Discreet Mode Icon")

### How can I change to the white theme?

You can change from the default dark to the white theme by disabling `Dark Mode` in the Settings.
Alternatively, you can switch to `Dark Mode` in the `.walletwasabi/client/UIConfig.json` [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
Open the `UIConfig.json` file and change the line from `"DarkModeEnabled": true` to `"DarkModeEnabled": false`.
Save the file and restart Wasabi.
Please note that Wasabi is designed for the dark theme, and some color schemes might not look beautiful in the white mode.

![Wasabi Wallet white theme](/WhiteMode.png "Wasabi Wallet white theme")

## Coin Control Best Practices

### What are coins?

Bitcoin uses a system of [inputs and outputs](/why-wasabi/Coins.md) to keep track of who owns how many sats.
Every transaction specifies one or more inputs, the chunk of bitcoin being spent, and one or more outputs, the destination of who receives the bitcoin.
A coin is also called an unspent transaction output (UTXO), meaning that this output has not been used as the input of a new transaction - it is yet to be spent.
In order to spend a UTXO, the valid signature and script has to be provided in the transaction.
This ensures that only with knowledge of the correct private key can this coin be sent to a new address.
This chain of links between inputs being spent and outputs being generated is verified by every full node, and stored on the blockchain.

### How can I enable (manual) coin control?

The default [send workflow](/using-wasabi/Send.md#how-to-send-bitcoin-step-by-step) uses the automatic coin selection algorithm by default, which is optimized in a way that "traditional" coin control is obsolete.

However, since Wasabi version [2.1.0.0](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.1.0.0) the user can use the _Manual Control_ option to select which coins to be used for the transaction.

![Send Button SubAction](/SendButtonSubAction.png "Send Button SubAction")

:::warning This is an advanced feature
Do NOT use the manual coin control if you do not know what you are doing.
Misusing it can have seriously bad privacy consequences.
:::

Both the _Automatic_ and _Manual Control_ flows have the _Review coins_ option at the Preview Transaction screen to see the selected coins.
This can be useful to see the selection when using _Automatic_ or to review when using _Manual Control_ as Wasabi does not send unnecessary coins (i.e. if you selected more coins than that were needed for the amount).

This can be brought up by pressing and holding the `alt` keystroke (or `option` on mac device) at the Preview Transaction screen, which will bring up the _Review coins_ button to click on.

![Send Review Coins](/SendPreviewTransactionReviewCoins.png "Send Review Coins")

### Can I consolidate anonset coins?

It is advisable to limit the recombining of mixed coins because it can only decrease the privacy of these coins.
This reveals that all the consolidated UTXOs are controlled by one entity, which was not known before the consolidation.
That said, if you combine only a couple of mixed coins, you might not reveal your pre-coinjoin transaction history, especially when you did several re-mixes.
So consolidating some private coins is OK to do.

:::warning Take great care!
Never consolidate non-private coins with private (mixed) coins, as this negates the privacy benefits of the coinjoin.
:::

[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/Tk8-N1kHa4g)

### How can I send my anonset coins to my hardware wallet?

Most hardware wallets communicate with servers to provide you with your balance.
This reveals your public key to the server, which damages your privacy - the hardware wallet company can now link together all your addresses.
As a result **it is not recommended** that you send your mixed coins to an address associated with your hardware wallet unless you are confident that you have set up your hardware wallet in a way that it does not communicate with a 3rd party server (see below).

You can, however, manage your hardware wallet with the Wasabi interface.
Alternatively, you can use your hardware wallet with Electrum, and in order to not leak any information to third-party servers run your own [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server), [ElectrumX](https://github.com/kyuupichan/electrumx) or [Electrs](https://github.com/romanz/electrs).

### What can I do with small change?

There are no hard and fast rules for [what to do with the change](/using-wasabi/ChangeCoins.md).
Generally try to avoid having change by using the [_change avoidance_ suggestions when sending](/using-wasabi/Send.md#how-to-send-bitcoin-step-by-step).
Generally change should be coinjoined, Wasabi automatically coinjoins the change if possible (if the change is more than the [coinjoin minimum](/FAQ/FAQ-UseWasabi.md#what-is-the-minimum-amount-required-to-coinjoin)).

You should treat change as a kind of toxic waste (handled with great care).
You can spend the change to the same entity as the initial transaction, without loosing much privacy.
Only spend the change to another entity, if these two won't make you trouble knowing you interact with both of them.
If needed, you can consolidate several change coins, but we advise you to do it in a coinjoin.
In JoinMarket you can specify the exact amount of coinjoin, so it can be exactly the amount of the change.
Or open a new Lightning Network node (not your main Lightning node), create a channel to a random peer on the network and route the funds back to you.

:::tip
For more information, see this [dedicated chapter](/using-wasabi/ChangeCoins.md).
:::

## Music Box

### What does `Awaiting the blame round` mean?

If some other participant disrupted the round by failing to sign the coinjoin transaction, this message briefly appears before a new coinjoin, known as the [blame round](/using-wasabi/CoinJoin.md#blame-round), is created with the responsive participants from the failed round.

### What does `Insufficient funds eligible for coinjoin` mean?

This message is displayed when some coins cannot coinjoin, for example when they are unconfirmed or below the [minimum coinjoin amount](/FAQ/FAQ-UseWasabi.md#what-is-the-minimum-amount-required-to-coinjoin).

### What does `Some funds are rejected from coinjoining` mean?

If an input has failed to sign during a previous round it registered to, it will be [temporarily banned](/FAQ/FAQ-UseWasabi.md#why-do-my-coins-occasionally-get-banned-from-participating-in-coinjoin) to prevent denial of service attacks.
Coinjoin coordinators may also reject funds for risk management purposes.
You can view the ban time at the `Wallet Coins` dialog via the search bar or with the keyboard shortcut “CTRL + C + D”.

## Advanced Usage

### Can I change the default ports for the Wasabi's bundled Tor?

Yes. 
Since Wasabi version [2.0.6](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.6) it is possible to specify the Tor SOCKS5 and the Tor control ports.
This can be done by specifying the port(s) at startup with the [startup parameters](/using-wasabi/StartupParameters.md#non-config-file-configurations).

### Where does the BTC exchange rate come from?

By default, Wasabi fetches the exchange rate from mempool.space.

The _Exchange Rate Provider_ can be set in the Settings at the _Connections_ tab.
It can fetch the exchange rate from one of the following providers: mempool.space, blockchain.info, CoinGecko or Gemini.

## Silent Payments

### What are Silent Payments?

Silent Payments allow you to create a single, static address to share with friends, use for donations, or post for tips *without sacrificing privacy*.

This is what a Silent Payment address looks like:
`sp1qq2exrz9xjumnvujw7zmav4r3vhfj9rvmd0aytjx0xesvzlmn48ctgqnqdgaan0ahmcfw3cpq5nxvnczzfhhvl3hmsps683cap4y696qecs7wejl3`

When someone wants to send you a payment, they use the unique public key that is a part of your Silent Payment address, and combine it with the public keys of the outputs they want to send to generate a unique, one-time address that looks on-chain just like any other Taproot address.
A Silent Payment is in fact indistinguishable from a standard transaction, and therefore will cost the same in terms of mining fees and can be relayed and mined just like any transaction.

The receiver then needs to read the blockchain, and using some secrets he - but only he - will be able to recognize payments made to his Silent Payment address and unlock the funds.

The main advantages of Silent Payments are:
*  Simpler user experience: users just need to worry about a single, static address instead of the hurdles of generating new addresses for every receive.
*  Better receiver privacy: address re-use with Silent Payments is impossible, as no two senders can generate the same on-chain address.
*  Better sender privacy: receivers have no way of connecting sends from the same receiver together, providing better privacy for even the sender.
*  No server required: anyone with a wallet supporting Silent Payments can send and receive funds without address reuse, without communication (contrary to a coinjoin which requires interactivity), and without running complex infrastructure.

More information on [Silent Payments](https://silentpayments.xyz/)

### How can I send a Silent Payment in Wasabi?

Just like you would send a normal Bitcoin transaction! Paste the Silent Payment address in the Send window, Wasabi will handle the rest.

### How can I receive a Silent Payment?

Currently, Wasabi cannot be used to generate a Silent Payment address and recognize payments sent to it.
A comprehensive list of wallets supporting silent payments is available [here](https://silentpayments.xyz/docs/wallets/).
Soon, Wasabi will be able to _receive_ Silent Payments too.

### Why Wasabi doesn’t support receiving Silent Payments?

Receiving Silent Payments is a complex engineering problem. 
Additional information (called the tweaks) have to be computed by the server and sent to clients for each block, along with the filters. 
This creates more load on both the client and the backend (indexer), and Wasabi is a software with a lot of users! 
We need to be sure that the feature is fully ready and won’t endanger stability of classic wallet functionalities.

The work is ongoing and this feature should be available in an up-to-come release.
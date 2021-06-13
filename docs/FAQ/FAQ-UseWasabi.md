---
{
  "title": "Use of Wasabi FAQ",
  "description": "Frequently asked questions about the nuances of how to use Wasabi properly. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Use of Wasabi

## Wallet Manager

@[youtube](XykixYdbFpA)

:::details
### How do I generate a new wallet?

You can [generate as many new wallets](/using-wasabi/WalletGeneration.md) as you'd like, for no extra cost and without asking for permission.
Go to the `Wallet Manager` tab and the `Generate Wallet` menu.
As with everything in Wasabi, you are required to label this new wallet.
Make sure that you are precise so that you know what this wallet is for.
The password is used to encrypt the private key (extracted from the extended private key) on the computer.

:::danger Careful!!
Without knowledge of the password, you CANNOT spend your bitcoin!!
:::

Make sure that you properly back up and write down this password.
Please also read and agree to the [terms and conditions, the privacy policy and the legal statement](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi/Legal/Assets/LegalDocuments.txt).
Now you can continue with clicking `Generate`.

![Generate new wallet in Wasabi](/WalletManagerGenerateWallet.png "Generate new wallet in Wasabi")

Now you will see the 12 recovery words, this is the mnemonic seed that you can use to back up and recover your wallet.
Make sure, and triple-check that you have done a proper backup of BOTH the password AND the mnemonic.
When you only have the recovery words, but not the password, then you will NOT be able to recover your wallet.
In order to protect your paper backup, consider storing the password and recovery words in two different locations.
You have successfully setup your wallet when you click `I wrote down my Recovery Words!`

![Wasabi Wallet recovery words](/WalletManagerRecoveryWords.png "Wasabi Wallet recovery words")
:::

::::details
### Can I rename my Wallet?

Yes you can.
Go to `Wallets` folder (inside the [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder)) and rename the .json Wallet file.
Then go to `WalletBackups` folder (inside [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder)) and rename the .json Wallet file.

:::tip
You need to mark the “show hidden files” setting to see the Wasabi data folder.
:::

:::warning
To avoid problems, make sure you close Wasabi Wallet before proceeding to rename any of your wallets.
:::
::::

::::details
### What is the password used for?

The password you set is used:
* As a 13th word (passphrase) as described in [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
* To encrypt the private key of the extended private key as described in [BIP 38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki) to get an encrypted secret which is stored on the computer.

Wasabi stores only the BIP38 encrypted blob, so you'll need to type in the password to spend or CoinJoin from Wasabi.

:::danger
The password will unlock your bitcoin to anyone who has access to the recovery words backup or the computer!
If your backup gets compromised, this password is the only thing protecting your precious sats.
:::
::::

::::details
### What password should I use?

:::danger
It is **VERY** important to use a [random and long password](/using-wasabi/PasswordBestPractices.md).
:::

Since it is very difficult for humans to generate true randomness, it is good to use a tool to help find a strong password.
This can be the [Diceware english wordlist](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases) for true off-line password generation.
A secure password manager software might also be used, but be careful here.
::::

::::details
### Where can I find the Wasabi data folder?

* Windows: `/Users/{your username}/AppData/Roaming/WalletWasabi/Client`
* Linux: `/Home/.walletwasabi/client`
* macOS: `/Users/{your username}/.walletwasabi/client`

:::tip
You need to mark the “show hidden files” setting to see it.
:::

You can also easily reach it from inside Wasabi: `File > Open > Data Folder`.
::::

::::details
### Can I spend my bitcoin without the password?

:::danger
NO!!!
Without knowledge of your password, even when you have the wallet file and recovery words, you CANNOT spend your bitcoin!
:::

When creating a new wallet, after labeling it properly, the next step is to select a long and random password.
Every time you want to spend your coins from Wasabi, you MUST provide this password.
So even if you have these words securely engraved in metal, without the password, you cannot restore the backup of your wallet.

:::tip
Always back up your mnemonic recovery words, and your password in two separate secure locations.
:::
::::

:::details
### Why BIP 38?

[BIP 38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki) is a good standard, a well-tested and very secure way to encrypt a private key.
It is also implemented in the [NBitcoin library](https://github.com/MetacoSA/NBitcoin), which is used by Wasabi.
Additionally, there is no standard way (BIP) to encrypt HD wallets.
Take into account that it is not only encryption what BIP 38 provides but also a brute-force protection.
:::

:::details
### Does Wasabi support the hidden wallets of hardware wallets?

Partially.
Only device side passphrase is supported.
PC side passphrase is not.
This means the hidden wallet feature can be used with Trezor T, Ledger Nano S and ColdCard, but it cannot be used with Trezor One.
After the 12 or 24 words, enter the passphrase as the 13th or 25th word.
It’s part of [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
:::

:::details
### I forgot my lockscreen PIN, what should I do?

As described in the settings, you can just delete it.
Open the `UiConfig.json` file inside your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) and set these entries as follows:

```
"LockScreenActive": false,
"LockScreenPinHash": ""
```
:::

:::details
### What are the terms and conditions?

The most important parts of the legal documents are summarized in the following points:
- The service is open-source under the MIT license.
- The service is provided on a non-custodial basis.
Safekeeping of keys are the sole responsibility of the user.
- The user is solely responsible to act according to their local laws and regulations.
- We do not store any personally identifiable information.
Moreover, our trustless software architecture prevents us from gathering this information in the first place.
- A transaction fee is only charged by the service provider for CoinJoin transactions.
- We only provide written support, and NEVER ask for recovery words, passwords or similar security critical information.

Read the whole document of [terms and conditions, privacy policy, and legal statement here](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi/Legal/Assets/LegalDocuments.txt)
:::

:::details
### Can I import a watch-only extended public key?

Yes, but not yet in the GUI, you will need to manually create a new wallet file.

Open a text editor and paste the following wallet structure:

```
{
  "EncryptedSecret": null,
  "ChainCode": null,
  "MasterFingerprint": null,
  "ExtPubKey": "",
  "PasswordVerified": true,
  "MinGapLimit": 21,
  "AccountKeyPath": "84'/0'/0'",
  "BlockchainState": {
    "Network": "Main",
    "Height": "0"
  },
  "HdPubKeys": [
  ]
}
```

Then paste your extended public key in-between the quotes of the field `"ExtPubKey": "paste xpub here",`.

You can also change the `"AccountKeyPath": "84'/0'/0'",` field if you want to import a different derivation path.
But notice that Wasabi only works with native SegWit bech32 addresses.

Save this file in your [`Wallets` data folder](/FAQ/FAQ-UseWasabi.html#where-can-i-find-the-wasabi-data-folder) as a json file like this: `WalletName.json`.
The `WalletName` will be displayed in the GUI.

Then start Wasabi and load the wallet to synchronize it.

For watch only wallets, the `Send` tab is disabled.
However, you can use the `Build Transaction` tab in the `Advanced` section of the `Wallet Explorer` to build an unsigned PSBT transaction.
When this is signed on the device with the private key (like an offline laptop running Electrum wallet or a hardware wallet), then you can broadcast the signed transaction using the `Broadcast Transaction` tab in the `Tools` menu.
:::

## Synchronization

@[youtube](qguwAvA5Fx4)

:::details
### What are BIP-158 block filters?

A [BIP-158 block filter](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) is a data structure that contains a hash of all the addresses referenced in a block.
It is much smaller than the whole block itself.
The Wasabi coordinator generates these block filters, and sends them out to any wallet that requests them.
A wallet client checks locally if the block filter matches any of the addresses in the wallet.
If not, then the filter is stored for later reference and for syncing new wallets.
If yes, then the wallet connects to a random Bitcoin peer-to-peer full node over Tor to request this entire block.
:::

:::details
### How does Wasabi download a relevant block?

There are two ways Wasabi can get a block:

1. If you are connected to [your own full node](/using-wasabi/BitcoinFullNode.md) then it will fetch the block from there.

2. By default from a random Bitcoin P2P node, connected through a new Tor identity only for this one download request.

Read more [ħere](/using-wasabi/WalletLoad.md)
:::

:::details
### How do I know if the synchronization is finished?

You know that Tor is properly connected, that all the block filters and all the relevant blocks are downloaded when you see that the status bar is `Ready`.

![Wasabi Wallet Status Bar](/StatusBar.png "Wasabi Wallet Status Bar")
:::

:::details
### What does it mean "Missing Filters"?

The `Missing Filters` label indicates that Wasabi is still downloading the [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) and it's synchronizing your wallet.
You have to wait until the status bar is `Ready`.
::::

:::details
### How long does the initial, and a subsequent synchronization take?

It usually only takes a couple of seconds to scan the block filters, and to download and parse the blocks.
However, for large wallets with many transactions, this synchronization can take up to several minutes.
The speed and reliability of the loading process is constantly improved.
For especially old wallets, it might be worth considering to generate a new wallet with a shorter transaction history.
:::

:::details
### Can Wasabi work with a pruned bitcoin node?

Yes.
Wasabi is a hybrid, if your node doesn't have a block, then it acquires it from someone else.
:::

## Receive

@[youtube](9i7CceIdFg4)

::::details
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
::::

:::details
### How do I generate a new receiving address?

You can generate a new bech32 address in the `Receive` tab of Wasabi Wallet.
First you must set a label for it, so that you later know who has sent you bitcoin to this address.
Be precise in the label of the observers who know this address is yours, this is an important part of good [coin control](/why-wasabi/Coins.md) privacy best practices.
Then you can click on `Generate` which will now show you the address, and immediately copy it to the clipboard.
After a coin has been sent to this address, it is removed from the GUI, this is a good feature to help protect you against [address reuse](/why-wasabi/AddressReuse.md).

![Wasabi Wallet Observers label](/ReceiveLabelingRequired.png "Wasabi Wallet Observers label")
:::

:::details
### What is the gap limit?

The gap limit is the maximum number of consecutive unused addresses that your wallet will generate when recovering it.
Wasabi automatically increases this value if needed when you generate new receiving addresses.
When you import the wallet file into a new Wasabi client, then it will use this `MinGapLimit` to find your coins in the wallet.
:::

:::details
### How do I change the gap limit of a wallet?

You can set the gap limit of an already existing Wasabi wallet by editing the wallet's settings file.
Access the settings file via the `File->Open->Wallets Folder` menu.

Close Wasabi and edit the `MinGapLimit` setting (which is `21` by default).
The value depends on the settings of other tools that use the wallet too (e.g. use `100` for [BTCPay Server](https://docs.btcpayserver.org/FAQ/FAQ-Wallet/#missing-payments-in-my-software-or-hardware-wallet)).

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

Start Wasabi again, open the wallet and wait for the synchronization.
You should see all your transactions and the correct balance.

If you are recovering a wallet with the 12 recovery words, then in the advanced section you can increase the gap limit from a default of 100.
:::

:::details
### Why do I have to label my address?

Bitcoin addresses look like cyphertext, they are not easily remembered and it's not clear how they were used previously.
When you do not label all your addresses, there is no meta-data for you to understand the context of their coins.
Thus receiving addresses and sending transactions should be carefully labeled with the observers who know about them.
This helps you know where your coins came from so that you can judge whether there are privacy concerns when sending a specific coin to a specific receiver.

![Wasabi Wallet known by label](/ReceiveLabelingRequired.png "Wasabi Wallet known by label")

When labeling a newly generated address or a sending transaction you should ask yourself: "Who knows this address is mine?" or "Whom will I share this address with?" or "From whom am I receiving bitcoin?" or "To whom am I sending bitcoin?".
Observers should contain the comma-separated names of people/entities that may be aware of the transaction and could follow its trail like:

`Name of the sender or the receiver, name of the exchange, name of the payment processor`

So, a good label could be:

`Alice, <name of KYC exchange>, BTCPay Server`

or:

`Alice & Bob` (This is one entity which is not the same as `Alice, Bob` as they are multiple entities and thus separated by a comma)
:::

:::details
### How can I change the observers of my receive address?

You can change the observers of your receive address in the right click menu by clicking `Change Observers`, then type in the new label.
This is useful when you have generated a receiving address with a specific label, but then the cause for receiving has changed.
Take care with whom you have shared this address, because if you send it to several people, they might all send many coins to the same address.
This is very bad for your privacy because of [address reuse](/why-wasabi/AddressReuse.md), and it confuses you with the labeling of each unique coin.

![Wasabi Wallet address details](/ReceiveAddressDropDownMenu.png "Wasabi Wallet address details")
:::

:::details
### How can I edit the observers of my address after a transaction has gone through?

To date there is no possibility to change the label of an address after it has sent or received bitcoins.
:::

::::details
### Are there privacy concerns regarding whom I send my address?

Yes.
Whomever you send your address, he knows that this address, and any coin sent to it, belongs to you.
Thus it is important to have labeled receiving addresses with their observers, so that you know which address is known by whom.
It is important that you avoid sending the same address to several different individuals.
There is a risk that both of them send coins to this same destination, thus unnecessarily linking the payments.

:::danger
It is especially important to **NEVER** send your extended public key to any third party server.
This is a complete de-anonymization of your entire wallet!!
:::
::::

:::details
### Why does Wasabi only use SegWit bech32 addresses?

Wasabi was created after the activation of SegWit, and it makes sense to support the most advanced address type, which has numerous benefits.
For example, due to the malleability fix of SegWit, you can now remix CoinJoin outputs which are currently unconfirmed.
There are also large savings on mining fees for SegWit transactions.
:::

:::details
### Why do some third party services say the Wasabi address is invalid?

Some wallets/exchanges do not yet support native SegWit bech32 addresses and may give an error message (e.g. "unknown bitcoin address").
Please contact these services to upgrade their infrastructure to support the latest industry standards.
Wasabi cannot generate non-SegWit addresses, so one solution is to manage your funds with a wallet which does support legacy addresses.
To check Bech32 adoption and wallets/exchanges support you can follow the [Bitcoin Wiki](https://en.bitcoin.it/wiki/Bech32_adoption#Software_Wallets), [When Segwit](https://whensegwit.com/#who), and [Bitcoin Optech](https://bitcoinops.org/en/compatibility/#segwit-addresses).
:::

:::details
### Where can I find my address QR code and public key?

You can see the address QR code, public key and the key path in the drop down menu of the `Receive` tab.
Click on the arrow on the left side of the address to reveal the extra details.
You can save the png file of the QR code in the right click menu.

![Wasabi Wallet address' QR code](/ReceiveAddressDropDownMenu.png "Wasabi Wallet address' QR code")
:::

:::details
### What derivation paths does Wasabi use?

Wasabi follows [BIP 84: Derivation scheme for P2WPKH Based Accounts](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki), so the main path is `m/84'/0'/0'`.
On TestNet and RegTest Wasabi uses `m/84'/0'/0'`, and not the standard `m/84'/1'/0'`.
Due to the CoinJoin implementation, the key depth can be rather large, thus when recovering the gap limit should be elevated to at least 100.
:::

:::details
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

Schnorr key and signature aggregation with MuSig increases the privacy, since only one public key, not n, are committed on the blockchain.
So when Taproot is activated in the Bitcoin consensus layer, in #twoweeks, there are no privacy concerns standing in the way of Wasabi multisig!
:::

:::details
### How does Wasabi know of incoming transactions to the mempool?

When Wasabi is running, it connects to random Bitcoin peer to peer nodes and listens for their gossip of all transactions on the network.
Based on this information Wasabi builds its own local mempool of unconfirmed transactions.
So when you have Wasabi running, you will be notified about an incoming receiving transaction as soon as it is gossiped on the network.
But when Wasabi is offline, it does not listen to the network and it will not know about your unconfirmed transaction when you next launch Wasabi.
In this case you have to wait until your transaction is confirmed in a block, and based on the [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki), Wasabi will download that whole block including your transaction from a random P2P node.
:::

## Send

@[youtube](PRlAAxunmdU)

@[youtube](AdmlM-Qvco0)

:::details
### What are coins?

Bitcoin uses a system of [inputs and outputs](/why-wasabi/Coins.md) to keep track who owns how many sats.
Every transaction specifies one or more inputs, the chunk of bitcoin being spent, and one or more outputs, the destination of who receives the bitcoin.
A coin is also called an unspent transaction output (UTXO), meaning that this output has not been used as the input of a new transaction - it is yet to be spent.
In order to spend a UTXO, the valid signature and script has to be provided in the transaction.
This ensures that only with knowledge of the correct private key can this coin be sent to a new address.
This chain of links between inputs being spent and outputs being generated is verified by every full node, and stored on the blockchain.
:::

:::details
### Why is coin control so important?

Coin control is a feature in Wasabi that allows the user to choose which coins are to be spent as inputs in an outgoing transaction.
Coin control is aimed to avoid as much as possible transactions where privacy leaks are caused by amounts, change addresses, the transaction graph and the common-input-ownership heuristic.

Satoshis, the base currency in the Bitcoin network, are fungible units of account.
It's just a number that shows how much value is being transferred, and the number `100` is "the same" any time the number `100` is used.
The 9000 sats you spend on stickers are equal to the 9000 sats you spend on coffee.
Just like 1 gram of gold atoms are equal to any other 1 gram of gold atoms.

However, the unspent transaction outputs, the "coins" that hold the satoshi themselves are not fungible.
Every UTXO is a unique snowflake that has its own transaction history, as well as an independent spending condition.
The coin worth 2 bitcoin and locked by Alice's public key is not the same as the UTXO worth 5 bitcoin locked by the 2-of-3 multi signature of Bob, Charlie and David.
So when sending bitcoin, it's important to consider which actual outputs are being sent in the transaction.

It might be a problem when Alice sends the coin she received for a months worth of labor, in exchange for a coffee in Bob's store.
Now Bob knows the amount Alice gets paid, and this is none of his business.
Alice can protect herself against this by using a [CoinJoin](/using-wasabi/CoinJoin.md) UTXO, because now Bob cannot know the previous transactions from Alice.
:::

:::details
### How do I set a destination address?

In the `Send` tab, there is a text box for the `Address` right under the coin list.
If you have an address in the clipboard, then it is automatically pasted when you click on the box.
You can also type in the address manually, there is a checksum to help you identify typos.
Be careful and double-check the address, there is no way to revert this transaction and change the destination.
So make sure that the coins get into the right hands.

![Wasabi Wallet Send tab](/SendAmountFeePassword.png "Wasabi Wallet Send tab")
:::

:::details
### Can I pay to many addresses?

Unfortunately pay to many is not yet implemented in the GUI.
However, you can use the [RPC server `send` call](/using-wasabi/RPC.md#send) and specify multiple receiving addresses.
:::

:::details
### How can I set a custom change address?

You can activate the option to set a custom change address in the `Settings` tab.

![Wasabi Wallet custom change address setting](/SettingsCustomChange.png "Wasabi Wallet custom change address setting")

Then simply paste the address you want to send the change to in the `Send` tab GUI.
Read more [here](/using-wasabi/Send.md#custom-change-address).

![Set Custom Change address in Wasabi Wallet](/SendCustomChange.png "Set Custom Change address in Wasabi Wallet")
:::

:::details
### How do I set the payment amount?

After you select one or more coins as inputs in `Send` tab, say two anonset coins worth 0.1 bitcoin each.
You can manually set the exact amount that the destination address will receive in the output of the transaction, say 0.15 bitcoin.
Then Wasabi will help you with automatically calculating the precise change output value with `inputs - destination output - transaction fee`.

![Wasabi Wallet Send tab](/SendAmountFeePassword.png "Wasabi Wallet Send tab")
:::

::::details
### How can I use the MAX button?

When you select one or more coins as inputs in `Send` tab, say two anonset coins worth each 0.1 bitcoin.
You can click the `MAX` button and the transaction will have only one output with the destination address, and no change output.
Wasabi will calculate the precise value for the destination output with `inputs - transaction fee`.
This means you send the entire two coins to the receiving address, and there is no change coming back to your own wallet, you are sending a "whole coin".

![Wasabi Wallet Send tab](/SendAmountFeePassword.png "Wasabi Wallet Send tab")

The blockchain spy heuristic is that this is a transaction to yourself, for example to your hardware wallet for long-term hodling.
Most of the time this assumption is correct - the amount of an external payment is rarely exactly the same as the value of the sum of coins in the input, thus requiring change.
It does not matter what value the coin has when you send it to yourself, thus there is no change.
But you can use this assumption to your advantage by sending the MAX amount to your external destination, for example for pizza at the tribe gathering.
If the change would be only a small amount, maybe you accept the overpayment as price for your privacy.
If the input is not high enough value for the payment, maybe the receiver accepts a slight underpayment.
You can also use payment rails like Lightning Network to send the small value change privately off-chain.

:::tip
When using the MAX button, it looks like you send back to yourself.
This can be used to spy on you!
But you can also use it to your advantage when paying others.
:::
::::

:::details
### Why does Wasabi choose a new random node every time I send a transaction?

When you broadcast a transaction from a full node, that transaction is flooded onto the network.
Essentially, all nearby nodes are passed your transaction, and those nodes will pass to all of their nearby nodes, etc.
However, if a malicious adversary were to get enough relay nodes in the network, they could pretty easily connect the initial location of a transaction by simply observing from which node the transaction appeared first.
For this reason, broadcasting transaction through your own node may reveal your IP address.

So to fix this, Wasabi broadcasts your transaction to a random node over Tor, so this node cannot detect your IP address.
When you want to send another transaction, Wasabi destroys the original Tor circuit and establishes a new Tor identity and connection with a brand new node.
This reduces the risk of a passive bystander being able to link two transactions together that appear from the same location.
:::

::::details
### What fee should I select?

Wasabi uses the [smartfee](https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0) estimation algorithm provided by bitcoind.
This integrates both data from recent blocks, as well as the local mempool to estimate the current and future demand for blockspace.
The lower the fee is, the longer the estimated wait; and the higher the fee, the faster the confirmation will come.
There are several different confidence levels, each of them gives an educated guess how soon the transaction will confirm.
But the provided time frames are only a rough estimation, and not at all a precise metric.

![Wasabi Wallet mining fee settings](/SendFeeSlider.png "Wasabi Wallet mining fee settings")

Because confirmation fee estimation is more an art than a science, you can also set the fee manually.
Then you can go after your gut feeling, [mempool chart analysis](https://jochen-hoenicke.de/queue/#0,24h), or just putting the minimum of 1 sat/vByte.

![Wasabi Wallet minimum mining fee](/SendNoFee.png "Wasabi Wallet minimum mining fee")

For a transaction to yourself, for example from your hot CoinJoin wallet to your hardware wallet, you don't need to have fast confirmation, so you can set a relatively low fee.
But to send from the hot CoinJoin wallet to the coffee shop, you might want to get faster confirmation, thus paying a higher fee.
This really depends on your own time preference in every unique moment.

:::tip Remember
These sats are precious, so don't overpay on fees!
:::
::::

:::details
### How do I set custom fee rate?

Go to `Settings` and under the UI category turn on `Manual fee entry`.
In the `Send` tab, simply click on the `Fee` box and manually type the fee rate (sat/vByte) you want.
:::

:::details
### How can I display the fee in satoshis per vByte?

The fee you pay to get confirmation on the Bitcoin blockchain is denominated in satoshis per virtual byte.
This means that the larger your transaction size, meaning the number of inputs and outputs, the more total bitcoin you have to pay for confirmation.
If you want faster confirmation, then you have to pay proportionally more sats per vByte.

You can toggle the display of the fee between `sat/vByte` & `percentage of transferred value` & `total bitcoin` & `total USD` by clicking on the text of the fee.
:::

:::details
### How do I select coins for spending?

Unlike other Bitcoin wallets, the user cannot spend from Wasabi without selecting coins, since ["Coin Control Is Must Learn If You Care About Your Privacy In Bitcoin"](https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2), at least for today.
In order to spend some coins, simply select them by clicking their checkboxes from the list.
Wasabi will automatically build a transaction with the best combination of the selected coins.

![Wasabi Wallet Send tab](/Send.png "Wasabi Wallet Send tab")
:::

:::details
### How is the transaction broadcast?

Wasabi connects only to Bitcoin nodes that provide a Tor onion service, so end-to-end encryption is enforced between the peers, without involving any exit node.
Each peer is connected to through a different Tor stream.
Transactions are broadcast to only one random peer over Tor and immediately after that this peer is disconnected.

If for some reason this fails, and a local [Bitcoin full node](/using-wasabi/BitcoinFullNode.md) is connected, then this is used to broadcast the transaction.
By default it is gossiped to 8 peers over clearnet, but this depends on how the full node is configured by the user.

If this too fails, Wasabi will (in the last resort) send the transaction through a new Tor identity to the coordinator backend for broadcasting.

Once a transaction is sent, Wasabi will always open a new Tor circuit with a new random node on the network, in order to avoid giving away too much information to one party.
When you send two consecutive transactions via Wasabi, you can be sure that they appear in two very different places on the network.

Wasabi might implement [BIP 156](https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki) the Dandelion protocol for transaction broadcasting when the Bitcoin network adopts it.
:::

:::details
### What is the cluster history?

Clusters are a property of a Bitcoin wallet with strong coin-control and good labeling.
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
The coin will have an anonymity set > 1, and typically will have a <img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" /> shield.
This coin can now be spent without having to worry about your boss or the exchange tracking your behavior.

However, when you mix a coin, there is often change.
This change is marked <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> and has an anonymity set = 1 (with a couple of small exceptions regarding remixing).
The change is completely linked to your coins before the mix, and so needs to be dealt with properly.
If you combine the tiny bit of change you received from Bob and from the exchange, they still know how much money you had (but not where you are spending it).

So the idea around clusters is to make it easier for users to follow the transaction graph.
The transaction graph is the history of where a coin has been, and is important if different histories need to be separated.
For example, if you buy coins anonymously in a P2P way, you should try to avoid mixing those coins with coins you got in a public way (donation, exchange, etc.).
:::

:::details
### What's the difference between Send and Build Transaction?

The only difference is that `Build Transaction` does not propagate the transaction, it simply builds it.
For a hot Wasabi with private keys, it will build and sign a final transaction, that can be broadcasted at any time.
For a cold Wasabi with private keys on a hardware wallet, it will build an unsigned transaction, which must be signed offline on the hardware wallet before it is valid.
:::

:::details
### Why Wasabi did not send some of my selected coins?

Because they were not necessary for the transaction.
Wasabi Wallet will use only the necessary coins to make the transaction.

Example: If you select 10 coins with total value of 2 btc and you want to send 1 btc but the sum of 4 coins is enough to make the transaction, then Wasabi will use only those 4 coins.

This is good for privacy, and also saves you some transaction fees.
:::

:::details
### How can I bump the transaction fee with child pays for parent (CPFP)?

If you have sent or received a transaction with a low fee and it does not get confirmed within reasonable time, then you can do child pays for parent to get it confirmed faster.
The trick is, to make a new transaction which spends the unconfirmed coin that you have received with a higher fee.
This can be either a payment transaction from you to another person, or a self spend transaction.

The transaction will get confirmed based on the fee level of the combined parent and child transactions.
For example, if the initial transaction pays a 1 sat/vbyte fee and the child transaction pays a 5 sat/vbyte fee, then the combined fee level is the average of both, thus 3 sat/vbyte.
(Assuming both transactions are roughly the same size.)
:::

## CoinJoin

@[youtube](ypfZT9GlqTw)

:::details
### What's the legal status of Wasabi/CoinJoin?

USA: On May 9, 2019, the Financial Crimes Enforcement Network (FinCEN) issued an interpretive guidance that stated the following in section 4.5.1(b):
> An anonymizing software provider is not a money transmitter. FinCEN regulations exempt from the definition of money transmitter those persons providing "the delivery, communication, or network access services used by a money transmitter to support money transmission services."

Wasabi is an Anonymizing software provider so it is not a money transmitter, thus not under Bank Secrecy Act (BSA) regulations.
Basically we can continue to operate like now and [it is compliant](/why-wasabi/LegalConcern.md).

Here's a great explanation about it:

@[youtube](tLOMcU8MhWM,1305)
:::

:::details
### Why aren't there smaller equal denomination outputs like 0.05 BTC?

There are many reasons for that.
The most prominent one may be DoS attack issues.
In fact ZeroLink's DoS protection have been designed with 1BTC in mind, not with 0.1BTC, so we may even have to elevate it if someone with sufficient resources would decide to go for DoS attacking Wasabi.

Everything in Bitcoin (and life) is about trade offs.
When we build CoinJoin transactions on the Bitcoin Blockchain, remember that we always have to pay the miner fees.
Miner fees are not dependent on the value of Bitcoin being transferred, rather, only on the size of the transaction in vBytes.
So that means constructing a CoinJoin with 0.1 BTC outputs, with 100 participants, and constructing a CoinJoin with 0.01 BTC Outputs with 100 participants will cost the same in terms of miner fees.

So let's dig into the numbers a bit further.
What does it cost (from the miner perspective) to participate in a CoinJoin? Well most users will provide 1 input, and 2 outputs (change + mixed UTXO) and we can calculate the vbytes like so:

```
1 * (68 vbytes) + 2 * (33 vbytes) = 134 vbytes
```

But it is important to note that many users provide 2 inputs (UTXOs) or even sometimes 3 or 4, so we should really put a multiplier of 1.5x on the inputs:

```
1.5 * (68 vbytes) + 2 * (33 vbytes) = 168 vbytes
```

Excellent, this is the Cost-per-participant of an equal-output CoinJoin.
Now let's consider the variable miner fees in sat/vbyte that we might pay to get the CoinJoin mined within a reasonable time (<24 hours):

```
Minimum: 2 sat/vbyte: 336 satoshis per participant
Average: 10 sat/vbyte: 1,680 satoshis per participant
High: 100 sat/vbyte: 16,800 satoshis per participant
```

So now let's examine how much (as a percentage) users have to pay for different denominations of equal output coinjoins.
We will take the example of 1 BTC, 0.1 BTC (current setting) and 0.01 BTC (proposed):
First 1 BTC:

```
Minimum: 2 sat/vbyte: 336 satoshis per participant (0.000336 %)
Average: 10 sat/vbyte: 1,680 satoshis per participant (0.00168 %)
High: 100 sat/vbyte: 16,800 satoshis per participant (0.0168 %)
```

Notice that for such a large amount, the miner, even in extreme cases only takes < 0.02% (not 2%!) from every Wasabi user.
Let's observe for 0.1 BTC:

```
Minimum: 2 sat/vbyte: 336 satoshis per participant (0.00336 %)
Average: 10 sat/vbyte: 1,680 satoshis per participant (0.0168 %)
High: 100 sat/vbyte: 16,800 satoshis per participant (0.168 %)
```

Here, we already observe that in some extreme cases, the miner is earning almost 0.2%!
Recall that Wasabi has a coordinator fee that is capped at 0.3%, so in these extreme cases the total fee paid by the user (you) is closer to 0.5%.
Now we proceed to go to a smaller denomination, 0.01 BTC:

```
Minimum: 2 sat/vbyte: 336 satoshis per participant (0.0336 %)
Average: 10 sat/vbyte: 1,680 satoshis per participant (0.168 %)
High: 100 sat/vbyte: 16,800 satoshis per participant (1.68 %)
```

Notice that in the average case, users are regularly paying almost 0.5% for CoinJoining, and only 60% of this is going to the Wasabi Coordinator.
In the extreme case, which simply cannot be overlooked as the network is volatile in terms of daily usage, the miner is earning 5.5x what Wasabi coordinator is charging, and the users are burdened with a 2% fee for CoinJoin!
This is simply ridiculous!
So there you have it! Here is the trade-off with CJ output denominations and why it currently makes sense for 0.1 BTC, but not for much lower.
:::

:::details
### What are the fees for the CoinJoin?

You pay a coordinator fee of 0.003% * anonymity set.
If the anonymity set of a coin is 50 then you pay 0.003% * 50 (=0.15%).
If you set the target anonymity set to 53 then Wasabi will continue mixing until this is reached, so you may end up with an anonymity set of say 60, and you will pay 0.003% * 60 (=0.18%).

There are also edge cases where you do not pay the full coordinator fee or where you pay more.
For example if you're the smallest registrant to a round, you will never pay a coordinator fee.
Also when you are remixing and you cannot pay the full coordinator fee with your input, then you only pay as much as you have.
But if your input is larger than the minimum, and the change amount leftover would be too small, then that is also added to the coordinator fee.
Currently the minimum change amount to be paid out is 0.3% of the base denomination (~0.1BTC.)

It is also possible that you get more back from mixing than you put in.
This happens when network fees go down between the start of the round and its end.
In this case, the difference is split between the active outputs of the mix.
:::

:::details
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
:::


:::details
### What are the equal denominations created in one mixing round?

In every CoinJoin round the minimum to register is roughly 0.1 BTC, you need to have at least this much to participate.
Within the same transaction, Wasabi also efficiently generates larger value zero link CoinJoin denominations.
They are 0.2, 0.4, 0.8, 1.6, 3.2, and so on...
The possible values of equal output that can be created are 0.1 x 2^n where n is a positive integer.
This is the mathematically most efficient way to get anonymity set for any amount you desire.
For example, with a 0.7 BTC input you would expect the following outputs: ~0.1, ~0.2, ~0.4 BTC.

@[youtube](PKtxzSLPWFU)

@[youtube](3Ezru07J674)
:::

:::details
### What is the best time to CoinJoin?

You can CoinJoin whenever you want.
That said, the ideal way to CoinJoin would be when:

1. Mempool is clean.
CoinJoins are unfairly cheap when the mempool is empty.
Remember to take a look at websites like [Johoe's Bitcoin Mempool Statistics](https://jochen-hoenicke.de/queue/#0,24h) or [mempool.space](https://mempool.space/tv) to see mempool statistics in real time.

2. Your inputs are the same or little higher as the minimal denomination for the current round.
[Change is an issue](/using-wasabi/ChangeCoins.md#why-change-is-an-issue).
For this reason, whenever possible it is recommended to CoinJoin with exactly the required denomination for the current round (roughly 0.1 BTC) to not get any change back.

3. Mix at different times.
To avoid traffic detection and behavioral analysis, you should CoinJoin at different times (days and hours).
:::

:::details
### Why are the denominations such an odd number?

The output value changes each round to ensure that you can enqueue a coin and have it remix (mix over and over again - increasing the anonymity set, improving privacy).
As a result the round mixing amount will often be a specific number which generally decreases as the rounds proceed, with a reset once a lower bound is reached.
The range is roughly between 0.105 and 0.095 bitcoin, and it is reset manually by the developers.
:::

:::details
### What is happening in the input registration phase?

During this phase you have the opportunity to register coins that you want to mix in this round.
Your Wasabi client connects to the coordinator server with a unique Tor identity called Alice, and with it you send the input proofs, the cleartext change output, and the blinded anonset CoinJoin address.
When all the proofs are valid, the coordinator signs the blinded output without knowing which address this is, and sends this back to Alice.
Since the goal is to have 100 peers in one round, the [input registration phase](/using-wasabi/CoinJoin.md#input-registration) can take some time.
But regardless of how many participants, one hour after the last CoinJoin this phase is complete.
:::

:::details
### What is happening in the connection confirmation phase?

Because the input registration phase can take up to one hour, the coordinator needs to ensure that everyone is still online and ready to continue.
So in the [connection confirmation phase](/using-wasabi/CoinJoin.md#connection-confirmation) every Alice sends a signal to the coordinator, and when all have checked in, this phase concludes.
:::

:::details
### What is happening in the output registration phase?

You use some secret parameters to unblind the blinded CoinJoin output to reveal the cleartext address that still contains the signature of the coordinator.
Wasabi creates a new Tor identity called Bob, and with it you send the unblinded anonset output together with the signature to the coordinator.
The coordinator can now verify his own signature, thus he knows that previously he has confirmed that Alice had all valid inputs.
Immediately after that, Bob disconnects and the [output registration phase](/using-wasabi/CoinJoin.md#output-registration) is complete.
:::

:::details
### What is happening in the signing phase?

After all Alices have registered their inputs and change outputs, and all Bobs their anonset outputs, the coordinator has all the information to build the CoinJoin transaction and include his fee output.
This raw transaction is sent to all Alices, each of them verifies the transaction is valid and then signs it.
The signature is sent back to the coordinator who accumulates all of them and builds the signed final CoinJoin transaction.
The [singing phase](/using-wasabi/CoinJoin.md#signing) is concluded when the coordinator receives all the signatures.
:::

:::details
### What is happening in the broadcasting phase?

In the [broadcasting phase](/using-wasabi/CoinJoin.md#broadcasting) the coordinator sends the signed final CoinJoin transaction to several random Bitcoin peer to peer nodes, and it is gossiped throughout the network to the miners.
:::

:::details
### Is there any additional anonymity using multiple wallets for CoinJoins?

You'd gain 1 less anonymity set than if you'd only mix with one wallet (and Wasabi doesn't display that).
On the other hand, the systemic anonymity is slightly improved if a few people are mixing with multiple wallets, because that removes the certainty on this Blockchain analysis assumption.
:::

:::details
### How is the anonymity set target determined for CoinJoins?

`2*2 = 4` and `3*3 = 9`. `2->3: 50% increase`, `4->9:125%` increase.
So remixing with larger anonsets is exponentially more effective than smaller anonsets.
Regarding why do we want 100 number, is among some other reasons, because that was our calculation to be that would make rounds happen in every 2-5 minutes, considering the liquidity of some custodial mixers.
Regarding DoS attack, right now our DoS configuration is set to be pretty permissive and this seems to be sufficient for the time being.
If a DoS attack would happen, Wasabi team would just harden it in the config file and would kick the bad actors out.
Now if even that would fail, then we can start thinking about lowering the required peers and also other methods.
:::

:::details
### I'd like to experience CoinJoin but I'm not comfortable using real Bitcoin. What can I do?

You can try to make a CoinJoin via Wasabi on the Bitcoin [TestNet](/using-wasabi/Testnet.md) (an alternative Bitcoin blockchain, to be used for testing).
Go to `Settings` and change the network to `TestNet`.
Then restart your Wasabi, and it will synchronize for the TestNet, and generate TestNet addresses.
You can get tBTC from faucets like:
[testnet-faucet.mempool.co](https://testnet-faucet.mempool.co/)
or
[coinfaucet.eu/en/btc-testnet](https://coinfaucet.eu/en/btc-testnet/)
:::

:::details
### Does Wasabi have to stay on during CoinJoin?

Yes, Wasabi needs to stay on during CoinJoins, you cannot be offline and still participate in CoinJoins.

A CoinJoin transaction is different from a normal transaction, where you are the only person signing, and requires many people to sign the same transaction.

Here is how Wasabi handles different scenarios:

|  | During [input registration phase](FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase) | After input registration phase |
|:---:|:---:|:---:|
| You close Wasabi | Your registered coins are automatically dequeued | Wasabi will make you wait until the round finishes |
| Wasabi goes offline | Your registered coins are automatically timed out by the coordinator after 1 minute | Your registered coins will be banned for 24h from participating in another CoinJoin. (This is to prevent [DoS attacks](https://github.com/nopara73/ZeroLink/#d-dos-attack)) |
:::

:::details
### What if there's a power outage during CoinJoin? Do I lose my coins?

No you don't.
CoinJoins are atomic, they either happen or they don't.
If your wallet crashes or your computer goes offline during CoinJoin you simply don't participate in this CoinJoin, look at table [here](/FAQ/FAQ-UseWasabi.md#does-wasabi-have-to-stay-on-during-coinjoin) for more info.
:::

:::details
### How much anonymity set do I need?

The amount of privacy needed depends on your individual threat model, who is trying to deanonymize you?
It is commonly said that an anonymity set of 50 is sufficient to evade low-level blockchain forensics analysis, but it might not protect you against large adversaries.
At least one round to re-mix your coins can increase your privacy drastically.
With Wasabi this can be achieved in a matter of hours (or minutes if there are a lot of users).
:::

:::details
### How many rounds should I CoinJoin?

There is no simple answer for this, it depends on your individual threat model.
If you want more anonymity you should CoinJoin multiple times.
More rounds of CoinJoin is better for your privacy, but more expensive.
:::

:::details
### Are coins automatically requeued after the round is complete?

That depends on the anonymity set target.
If the coins' anonymity sets are below the specified target after a round is complete, then the coins are requeued automatically for the next round.
But when the anonymity sets are above the target after a round, then the coins will no longer be registered automatically.
However, you can manually enqueue them for a new round at any time.
:::

:::details
### How can I select UTXOs for CoinJoin?

Go to [`CoinJoin`](/using-wasabi/CoinJoin.md) tab and select your desired UTXO by clicking the checkbox, then type in the password.
It will be queued and registered for the next CoinJoin round.
:::

:::details
### How does my wallet communicate with the Wasabi coordinator server?

Wasabi communicates in many ways to the coordinator server, and it is always over the Tor network.

First of all, Wasabi uses [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) to ensure network level privacy.
You can follow these FAQs to have a full explanation on the theme:
- [What are BIP-158 Block Filters?](/FAQ/FAQ-UseWasabi.md#what-are-bip-158-block-filters)
- [What software supplies the block filters that Wasabi uses?](/FAQ/FAQ-Introduction.md#what-software-supplies-the-block-filters-that-wasabi-uses)
- [Can the coordinator attack me?](/FAQ/FAQ-Introduction.md#can-the-coordinator-attack-me)
- [Is the backend's coordinator code open-source?](/FAQ/FAQ-Introduction.md#is-the-backend-s-coordinator-code-open-source)

Then, there are five different phases in a CoinJoin.
You can follow these links to have a full explanation on that:
1. [Input registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase)
2. [Connection confirmation phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-connection-confirmation-phase)
3. [Output registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-output-registration-phase)
4. [Signing phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-signing-phase)
5. [Broadcasting phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase)

The backend server also sends you information about the current mempool for fee estimation as well as the US Dollar exchange rate.
:::

:::details
### How long does it take to mix my coins?

It depends on many things, the longest period is the wait for all peers to register their coins.
Every round has a goal of 100 anonymity set.
Wasabi is developed in a way that there's a round at least once every one hour.
If the 100 peers registered earlier, then there can be many rounds per hour.
When all peers are registered, then the signing phase is done within a couple of seconds.

Summing up: the faster peers register in the CoinJoins, the faster the mixes are.
:::

:::details
### What is the coordinator address?

The coordinator gets paid in every CoinJoin.
Since January 31st, 2020, Wasabi is using a fresh unused coordinator address for every CoinJoin.

Old static addresses:
- `bc1qa24tsgchvuxsaccp8vrnkfd85hrcpafg20kmjw`
- `bc1qs604c7jv6amk4cxqlnvuxv26hv3e48cds4m0ew`
:::

:::details
### What is the maximum number of coins that can be registered in a CoinJoin?

Wasabi Wallet will register up to 7 coins in a CoinJoin.
The sum of these 7 coins must be above the minimum registration amount.
:::

:::details
### Why did Wasabi not register some of my enqueued coins?

Because they were not necessary for the CoinJoin.
Wasabi Wallet will use only the necessary coins to CoinJoin (up to 7 coins).
This is good for your privacy, and also saves you fees.

Example: If you select 10 coins with total value of 0.2 btc but the sum of 4 coins is enough to CoinJoin, then Wasabi will use only those 4 coins.
:::

## Backup and Recovery

::::details
### How do I back up my mnemonic words?

:::tip
Write down your recovery words!
:::

Wasabi uses [BIP 39: mnemonic code for generating deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) to enable easy backups of all private keys in the wallet.
The mnemonic is displayed as 12 recovery words that are only shown once during the wallet generation.

![Wasabi Wallet recovery words](/WalletManagerRecoveryWords.png "Wasabi Wallet recovery words")

:::danger
In order to restore a wallet, you need BOTH the mnemonic words AND the password!
:::

It is a good idea to keep the two in separate analog backups, such as a laminated paper written with pencil.
In order to defend against nature destroying fragile paper, you can consider stamping the words into metal.
Use two different backups and locations for the mnemonic and password, because whoever has both [including a physical attacker] has full access to your sats.
Find a secure physical location to store the backups, maybe a home safe, or an expert security deposit box.

Please see [this great guide](https://github.com/6102bitcoin/FAQ/blob/master/seed.md#3-Storing-your-Seed) on how to properly store your seed.
::::

::::details
### How do I back up my wallet file?

Although you can back up your private keys with the mnemonic words and password, this is only a last resort recovery.
If you want to also secure your address labels, the anonset and additional metadata, then you can do a digital backup.
Simply copy the `WalletBackups` folder with the `wallet.json` files from your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) onto suitable hardware, for example an encrypted USB stick.
Note that this file has the encrypted private key (extracted from the extended private key), meaning that you only need the password to spend the bitcoin.
This also contains the extended public key, the public keys, and the address labels, meaning that it completely links all the coins, both pre and post mix, with clear proof.

:::warning
Make sure to back up your password separately because it is necessary to spend your bitcoin.
:::

:::tip
The wallet file backup is sensitive, in terms of privacy, but not critical in terms of loss of funds (if a password was used when generating the wallet).
So it is good advice to encrypt this wallet file.
:::
::::

:::details
### Can I recover my wallet without the password?

No.
The password you set is used as a 13th word (passphrase) as described in BIP39, you should back it up when you generate a wallet.
It is necessary to spend your bitcoin or to recover your wallet.
:::

:::details
### What should I do if I forget my password?

Try to use the [Password Finder Tool](/using-wasabi/PasswordFinder.md) to find your password.
Having a close guess of what the password is increases the possibility that you get your password.
:::

:::details
### I lost the recovery words but I still have the .json file and the password. Is my wallet still recoverable?

Yes, but in this case it is advisable to create a new wallet and back up the new recovery words and the password, then move your bitcoin there.

The .json file contains the encrypted secret that requires the password to derive your private keys.
That gives you access to your bitcoin.
:::

## Hardware Wallet

@[youtube](aU8ysH9JH9M)

@[youtube](kocEpndQcsg)

@[youtube](sM2uhyROpAQ)

::::details
### What hardware wallets does Wasabi support?

Wasabi uses the Bitcoin Core [Hardware Wallet Interface (HWI)](https://github.com/bitcoin-core/HWI) which allows it to support a variety of hardware wallets.
For the complete list of all the officially supported hardware wallets, click [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-hardware-wallets).
::::

:::details
### Why does Wasabi use the Hardware Wallet Interface?

Wasabi uses the [Bitcoin Core Hardware Wallet Interface [HWI]](https://github.com/bitcoin-core/HWI), a python library tool for proper integration of off-line signing devices.
It provides a standard way for any software wallet to communicate with any hardware wallet without needing any device specific drivers.
HWI was developed and carefully reviewed over several years, with outstanding contributions by [Andrew Chow](https://github.com/achow101).
Wasabi implements C# code that executes the HWI tool.
Wasabi uses this powerful tool because there are no other dependencies necessary to support all the existing and future hardware wallets.
:::

:::details
### How can I generate a Wasabi skeleton wallet file in ColdCard?

On the ColdCard you go to `> Advanced > MicroSD Card > Wasabi Wallet` and it will save a skeleton json-file to the MicroSD card in the hardware wallet.

Read more [here](/using-wasabi/ColdWasabi.md).
:::

:::details
### How can I import the Wasabi skeleton wallet file?

Take the MicroSD card from the ColdCard and plug it in the computer with the Wasabi Wallet software.
In Wasabi Wallet go to the Wallet Manager, select Hardware Wallet option and in the bottom right corner click `Import Coldcard`.
Now select the Wasabi skeleton json-file from the MicroSD card, if this fails you can manually enter the file location in Wasabi Wallet window and load the file.
Read more [here](/using-wasabi/ColdWasabi.md#connecting-via-sd-card).
:::

:::details
### How can I generate a receiving address of my hardware wallet?

In Wasabi Wallet you load your previously imported wallet (from Wasabi skeleton, or USB detection) and go to the `Receive` tab, here you enter a label for the observers of the incoming transaction and click `Generate Receive Address`.
In the tab below the newly generated receive address can be viewed / copied.
Read more [here](/using-wasabi/ColdWasabi.md).
:::

:::details
### How can I sign a transaction with a USB connected hardware wallet?

To send a transaction you will need to connect your hardware wallet and unlock the device (using PIN or password).
Then go to the `Send` tab where you can specify the address to send to, the amount of bitcoin to spend and which coins to use as inputs.
After filling in all transaction details you click `Send Transaction` to sign it with the connected hardware wallet and broadcast to the network.
Read more [here](/using-wasabi/ColdWasabi.md#connecting-via-usb)
:::

:::details
### How can I build and export a transaction to ColdCard?

In the Wallet Explorer on the right side of the GUI, select `YourWallet>Advanced>Build Transaction`.
This brings up the `Build Transaction` tab where you can specify the address, amount of bitcoin and coins to use.
Then by clicking `Build Transaction` a new tab will open containing the raw transaction data, here you click `Export Binary PSBT` to save the partially signed bitcoin transaction (PSBT) to a file.
This file should be moved to the MicroSD card that you can then insert in the ColdCard for manual verification and signing.
Read more [here](/using-wasabi/ColdWasabi.md#connecting-via-sd-card).
:::

:::details
### How can I sign a transaction on the ColdCard?

On the ColdCard (Mk2, firmware 2.1.1 and up) you enter the PIN code to unlock the hardware wallet and press `> Ready To Sign` with the MicroSD card containing the previously generated transaction or PSBT-file.
Verify the address and amount and the ColdCard will then create a signed.psbt and final.txn file on the MicroSD card.
The finalized transaction (`xxx-final.txn`) can now be broadcast by Wasabi Wallet with the `Broadcast Transaction` tool, or even a radio or satellite dish if someone is listening!
Read more [here](/using-wasabi/ColdWasabi.md#connecting-via-sd-card).
:::

:::details
### How can I import and broadcast a final transaction from ColdCard?

In the top menu bar, go to `Tools > Broadcast Transaction` and in this tab click `Import Transaction`, now you can select the previously finalized (and signed) transaction file from the MicroSD card.
If this fails you can manually type the path to this file in Wasabi Wallet to load the transaction.
Now click `Broadcast Transaction` to send it off over Tor to a random Bitcoin node so it can flood over to the miners for confirmation in a block.
Read more [here](/using-wasabi/ColdWasabi.md#connecting-via-sd-card).
:::

:::details
### Can I CoinJoin bitcoins on my hardware wallet?

No.
A CoinJoin is a multi round interactive process, and requires fast signing by the participants, thus the keys need to be on a hot computer.
Thus you have to send the bitcoins (in small portions > 0.1 BTC if needed) from your hardware wallet to a `hot` Wasabi Wallet, do the CoinJoin and then send them back to a new address on the Hardware wallet for cold-storage.
Read more [here](/using-wasabi/ColdWasabi.md#cold-wasabi-protocol)
:::

:::details
### Does Ledger Live send my public keys and addresses to a third party server?

Only if you add your accounts in the app, but not if you update your device firmware or install apps.
When using the Ledger Live software wallet to manage your coins, you send all of your used, and 20 unused addresses to Ledger's nodes. [Source](https://support.ledger.com/hc/en-us/articles/360010892360)

Your extended public key, however, is not shared with Ledger's node, but rather stored encrypted on your local machine.
Read more [here](https://support.ledger.com/hc/en-us/articles/360011069619).

Ledger could potentially analyze information from API calls to their nodes to link addresses to individual users, though Ledger says no logs are kept during normal operation.

To avoid any privacy leak, you can use a Ledger hardware wallet in combination with Wasabi as a software interface, and because Wasabi does not leak your addresses, your transaction history is not shared with anyone.
:::

:::details
### After I CoinJoined my coins and reached green anonset, I sent them to my hardware wallet address. When I check my HW via Wasabi, the coins are now red. Why?

Everything is working as expected.

The anonymity set info (number) is tied to your wallet that you used to CoinJoin, if you send a mixed coin to another Wasabi Wallet of yours (hardware wallet or normal wallet) it will have an anonymity set 1 <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> because this wallet doesn't know that the coin was coinjoined.

You should put a meaningful label when you generate a receive address in your hardware wallet, e.g. "coinjoined utxo with anonymity set 70" (something that reminds you that you got this utxo from your Wasabi Wallet and it was coinjoined).
:::

:::details
### How can I enter the PIN of my Trezor One?

You can enter the PIN to unlock your Trezor One the same way you use the Trezor browser wallet.
As soon as you plug in the Trezor One in your laptop and open Wasabi, it will show 9 empty buttons, and on the Trezor One screen you will see 9 boxes with numbers in random order.
Inside Wasabi, click on the boxes that correspond to your PIN in the order shown on the Trezor One screen.
:::

:::details
### How can I type in the passphrase of my Trezor One?

The Trezor One was a pioneer in offline signing devices, however it has one critical design flaw.
It requires to use the hot computer to input some data, like the PIN or passphrase.
This is contrary to the threat model of offline signing devices where the hot computer should not be trusted.
Wasabi does support the empty button PIN input field, as this is secure to use on the hot wallet.
However, Wasabi does not support to use the hot computer keyboard to type in the passphrase.
:::

:::details
### How can I type in the passphrase of my Trezor T?

After connecting the Trezor T to your computer and upon trying to load your wallet, you get a message on the Trezor T to choose where to type your passphrase, on the device or the host (computer), choose the first option (device) then enter the passprase using the touchscreen of your Trezor T.
Wasabi wallet will now load this passphrase protected wallet.
:::

:::details
### How can I use Hardware Wallets on Linux (udev rules)?

On Linux, you need to create a set of `udev rules` for the hardware wallet to be reachable.

Udev rules instructions can be found [here](https://github.com/bitcoin-core/HWI/blob/master/hwilib/udev/README.md).
:::

## History

:::details
### How can I check the transactions history?

In the `History` tab you see a list of all the transactions made with this Wasabi wallet.
It includes the value being sent out of the wallet, meaning the payment to an external address and the fee.
If the number is red, then you have sent sats out of the wallet - if the number is green, then you have received and stacked sats.
A CoinJoin is a payment within the same wallet, thus it only shows the coordination and mining fee leaving the wallet.
You also have a list of all the transaction identification numbers for detailed reference.
The check mark indicates that the transaction is confirmed in the longest proof-of-work blockchain.

![Wasabi Wallet History tab](/History.png "Wasabi Wallet History tab")
:::

:::details
### Can I export a list of transactions?

There is currently no convenient way to export a list with transaction details inside the GUI.
However, you can see the `wallet.json` files inside the `WalletBackups` folder (you can find it in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder)) which contains all the public keys, labels and anonset.

You can use the [Wasabi RPC server `gethistory` call](/using-wasabi/RPC.md#gethistory) to get a list of all transactions, including date, block height, amount, label and tx id.
:::

## Settings

:::details
### How do I connect my own full node to Wasabi?

There are three different ways of using your [Bitcoin full node with Wasabi](/using-wasabi/BitcoinFullNode.md):

- If you have a full node already running on the same computer as Wasabi, it will automatically be detected and used by default.
- If you have a full node on a remote computer, then you can connect to it by specifying the local network IP address or Tor onion service in the Wasabi `Settings` tab.

![Wasabi Wallet Remote P2P Bitcoin Endpoint full node](/SettingsBitcoinCoreRemote.png "Wasabi Wallet Remote P2P Bitcoin Endpoint full node")

- If you are not yet running a full node, Wasabi has the bitcoind binaries included, and with one click in the `Settings`, you can start Bitcoin Knots together with Wasabi.

![Wasabi Wallet local Bitcoin Knots full node integration](/SettingsBitcoinCore.png "Wasabi Wallet local Bitcoin Knots full node integration")

@[youtube](gWo2RAkIVrE)
:::

::::details
### How can I turn off Tor?

You can turn off Tor in the Settings.
Note that this is a privacy concern, especially when you CoinJoin and when you broadcast a transaction.
In the first case, the coordinator would know the links between your inputs and outputs based on your IP address.
In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.

:::danger
It is recommended to always use Tor!
The setting to turn it off is only intended for debugging and trouble shooting.
::::

:::details
### How can I change the anonset target?

In the `Settings` tab at the bottom you can change the three `PrivacyLevel` values of the desired anon set of the
<img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" />,
<img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" /> and
<img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" />
shield button in the GUI.
The `MixUntilAnonymitySet` is the last selected value from previous use.

Alternatively, open the config file from the wallet GUI, go to `File`>`Open`>`Config File` and in the last 4 lines you see:

```json
"MixUntilAnonymitySet": 50,
"PrivacyLevelSome": 2,
"PrivacyLevelFine": 21,
"PrivacyLevelStrong": 50
```

Remember that you pay a fee proportional to the anonymity set gained.

@[youtube](gWo2RAkIVrE)
:::

:::details
### What is the dust threshold?

Dust can mean [a lot of things](https://bitcoin.stackexchange.com/questions/10986/what-is-meant-by-bitcoin-dust), depending on how you look at it.
It can be a non-economical input, that is a UTXO that has less value than the fees it would cost to spend this coin.
A dust attack is actually about [forced address reuse](https://en.bitcoin.it/Privacy#Forced_address_reuse), the malicious actor sends very small amounts into old addresses and consolidation of these dust UTXOs can link several coins in a wallet cluster.

Specifically in the context of Wasabi, with the dust threshold settings you can limit the value of coins shown in the GUI.
When you set it to `0.0000 5000 bitcoin`, and when you receive a coin worth `0.0000 4000 bitcoin`, then this coin will not be shown in the coin list.

![Wasabi Wallet Dust threshold settings](/SettingsDustThreshold.png "Wasabi Wallet Dust threshold settings")
:::

:::details
### Where can I find the logs?

In the top left menu `File > Open` you can see there are several logs available.
* The `Log File` shows you the general information about Wasabi Wallet.
* The `Tor Log File` shows the Tor specific logs.

![Wasabi Wallet open log file](/MenuFileOpen.png "Wasabi Wallet open log file")

Alternatively, you can find the logs inside your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
:::

:::details
### How to activate/deactivate Privacy Mode?

You can activate/deactivate Privacy Mode from `Settings` or by clicking the eye icon on the `Wallet Explorer` header in the top right corner.
You can read more about Privacy Mode [here](/using-wasabi/PrivacyMode.md).
:::

:::details
### How can I change to the white theme?

You can change from the default dark to the white theme in the `.walletwasabi/client/Gui/Settings/` [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
Open the `GlobalSettings.json` file and change the line from `"theme": "Visual Studio Dark"` to `"theme": "Visual Studio Light"`.
Save the file and restart Wasabi.
Please note that Wasabi is designed for the dark theme, and some color schemes might not look beautiful in the white mode.

![Wasabi Wallet white theme](/WhiteMode.png "Wasabi Wallet white theme")
:::

## Coin Control Best Practices

@[youtube](iyJ81JRvLQk)

@[youtube](k4VzJ6dUT9I)

::::details
### Can I consolidate anonset coins?

It is advisable to limit the recombining of <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> <img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" /> <img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" /> mixed coins because it can only decrease the privacy of these coins.
This reveals that all the consolidated UTXOs are controlled by one entity, which was not known before the consolidation.
That said, if you combine only a couple of mixed coins, you might not reveal your pre-CoinJoin transaction history, especially when you did several re-mixes.

:::warning Take great care!
Never consolidate <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> unmixed coins with <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> <img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" /> <img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" /> mixed coins, as this negates the privacy benefits of the CoinJoin.
:::

@[youtube](Tk8-N1kHa4g)
::::

:::details
### How can I send my anonset coins to my hardware wallet?

Most hardware wallets communicate with servers to provide you with your balance.
This reveals your public key to the server, which damages your privacy - the hardware wallet company can now link together all your addresses.
As a result **it is not recommended** that you send your mixed coins to an address associated with your hardware wallet unless you are confident that you have set up your hardware wallet in a way that it does not communicate with a 3rd party server (see below).

You can, however, manage your hardware wallet with the Wasabi interface.
Alternatively, you can use your hardware wallet with Electrum, and in order to not leak any information to thir-party servers run your own [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server), [ElectrumX](https://github.com/kyuupichan/electrumx) or [Electrs](https://github.com/romanz/electrs).
:::

::::details
### What can I do with small change?

There are no hard and fast rules for [what to do with the change](/using-wasabi/ChangeCoins.md).
Generally try to avoid the change and use the `Max` button extensively to send whole coins.
The most problematic type of change is what has `anonymity set 1` <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" />.
You should treat it as a kind of toxic waste [handled with great care].
You can spend the change to the same entity as the initial transaction, without loosing any privacy.
Only spend the change to another entity, if these two won't make you trouble knowing you interact with both of them.
If needed, you can consolidate several change coins, but we advise you to do it in a CoinJoin.
In JoinMarket you can specify the exact amount of CoinJoin, so it can be exactly the amount of the change.
Or open a new Lightning Network node (not your main Lightning node), create a channel to a random peer on the network and route the funds back to you.

:::tip
For more information, see this [dedicated chapter](/using-wasabi/ChangeCoins.md).
:::
::::

:::details
### How can I mix large amounts?

Wasabi creates anonymity set for multiple denominations in one round, these are 0.1, 0.2, 0.4, 0.8, 1.6, 3.2, ... bitcoin!
Read more: [What are the equal denominations created in one mixing round?](/FAQ/FAQ-UseWasabi.md#what-are-the-equal-denominations-created-in-one-mixing-round)

@[youtube](3Ezru07J674)
:::

:::details
### Which coins can I select for CoinJoins?

You can select any coin, as long as the total sum of up to 7 coins reaches the minimum to register (usually ~0.1 BTC).
:::

::::details
### Why do my coins occasionally get banned from participating in CoinJoin?

A CoinJoin consists of multiple users registering inputs (coins) and blinded outputs.
Once the appropriate number of participants have registered, the actual transaction (the CoinJoin) is constructed by the coordinator, and given to all participants in the span of about 60 seconds.
At this point, all registered participants must sign off on the CoinJoin, and if a single one of the participants fails to sign their input, the entire CoinJoin must be restarted.

So this introduces a problem, or an attack vector - a malicious user could purposefully register coins, only to wait for the signing phase and not sign.
This would halt the entire CoinJoin process for all other participants and Wasabi would no longer work.
This is also known as [denial of service attack](https://github.com/nopara73/ZeroLink/#d-dos-attack).

So a simple solution looks like this - the coordinator could collect signatures from all inputs, and if one or more input refuses to sign, the coordinator could record that input and temporarily (or even permanently) ban that coin from participation.
This is a nice solution, as it mitigates a single coin from ruining all CoinJoins, but it too comes with trade-offs.

For example, most of the time, users fail to sign a CoinJoin for non-malicious reasons.
Perhaps their Tor connection went down in precisely that moment, or perhaps their WiFi had a temporary flicker at the wrong time.
Further, some users don't even realize that the signing phase is happening, and sometimes shut down their computer at exactly the wrong moment.
All of these things hinder a successful CoinJoin for all other participants, but by pure accident.

If you are one of the victims of this temporary banning then simply wait for the ban to expire and try again.
The best thing you can do to avoid the issue is to have a strong internet connection and keep your computer online throughout the whole process.

:::tip Note:
Banning does not mean freezing.
You can send banned coins to anyone you want.
This is a temporary ban on your coins in participation of the CoinJoin.
:::
::::

:::details
### What does spent coin status mean?

The `spent` coin status is a symptom of corrupted wallet state.
This used to be the largest known bug in Wasabi Wallet.
It affected about 1-5% of users.
This issue was introduced to Wasabi with the [v1.1.4 release](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.4) in April, 2019 by adding a wallet cache, that resulted in 12 times faster wallet load.
It was [thought to be fixed](https://reddit.com/r/WasabiWallet/comments/c2hco8/announcement_spent_coin_and_lost_unconfirmed/) in June by adding an autocorrection mechanism, but some users were still reporting this issue.

It ultimately got fixed in [v1.1.10](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.10) by introducing an upgraded version of [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) and changing the wallet cache architecture.
:::

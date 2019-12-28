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

You can generate as many new wallets as you'd like, for no extra cost and without asking for permission.
Go to the `Wallet Manager` tab and the `Generate Wallet` menu.
As with everything in Wasabi, you are required to label this new wallet.
Make sure that you are precise so that you know what this is for later.
The password is used to encrypt the private key (extracted from the extended private key) on the computer.
**Careful!!**
**Without knowledge of the password, you CANNOT spend your bitcoin!!**
Make sure that you properly back up and write down this password.
Please also read and agree to the terms and conditions, the privacy policy and the legal issues.
Now you can continue with clicking `Generate`.

![](/WalletManagerGenerateWallet.png)

Now you will see the 12 recovery words, this is the mnemonic seed that you can use to backup and recover your wallet.
Make sure, and triple check, that you have done a proper backup of BOTH the password AND the mnemonic.
When you only have the recovery words, but not the password, then you will NOT be able to recover your wallet.
In order to protect your paper backup, consider storing the password and recovery words in two different locations.
You have successfully setup your wallet when you click `I wrote down my Recovery Words!`

![](/WalletManagerRecoveryWords.png)
:::

::::details
### What password should I use?
The password you set is used as a 13th word (passphrase) as described in [BIP 39](../using-wasabi/BIPs.md#bip-39-mnemonic-code-for-generating-deterministic-keys), and is used to encrypt the private key of the extended private key as described in [BIP 38](../using-wasabi/BIPs.md#bip-38-password-protected-private-key) to get an encrypted private key which is stored on the computer.
This is the password that will unlock your bitcoin to anyone who has access to the backup or computer.
You will need to type in the password before you can spend from a Wasabi wallet.
So if your backup gets compromised, this password is the only thing protecting your precious sats.

:::danger
It is **VERY** important to use a random and long password.
:::

Since it is very difficult for humans to generate true randomness, it is good to use a tool to help find a strong password.
This can be the [Diceware english wordlist](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases), for true off-line password.
For Diceware in other languages follow [this link](http://world.std.com/~reinhold/diceware.html#Diceware%20in%20Other%20Languages|outline).
A secure password manager software might also be used, but be careful here.
::::

::::details
### How do I back up my mnemonic words?

:::tip
Write down your recovery words!
:::

Wasabi uses [BIP 39: mnemonic code for generating deterministic keys](/using-wasabi/BIPs.md#bip-39-mnemonic-code-for-generating-deterministic-keys) to enable easy backups of all private keys in the wallet.
The mnemonic is displayed as 12 recovery words that are only shown once during the wallet generation.

![](/WalletManagerRecoveryWords.png)

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
### Where can I find the Wasabi data folder?

* Windows: `/Users/{your username}/AppData/Roaming/WalletWasabi/Client`
* Linux: `/Home/.walletwasabi/client`
* MacOS: `/Users/{your username}/.walletwasabi/client`

:::tip
You need to mark the “show hidden files” setting to see it.
:::

You can also easily reach it from inside Wasabi: `File > Open > Data Folder`.
::::

::::details
### How do I backup my wallet file?

Although you can backup your private keys with the mnemonic words and password, this is only a last resort recovery.
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

::::details
### Can I spend my bitcoin without the password?

:::danger
NO!!! Without knowledge of your password, even when you have the wallet file and recovery words, you can NOT spend your bitcoin!
:::

When creating a new wallet, after labeling it properly, the next step is to select a long and random password.
This is used to encrypt the private key (extracted from the extended private key) on your computer, which has an insecure operating system and is connected to the Internet.
Every time you want to spend your coins from Wasabi, you MUST provide this password.
So even if you have these words securely engraved in metal, without the password, you cannot restore the backup of your wallet.

:::tip
Always backup your mnemonic recovery words, and your password in two separate secure locations.
:::
::::

:::details
### Why BIP 38?

[BIP 38](/using-wasabi/BIPs.md#bip-38-password-protected-private-key) is a good standard, a well-tested and very secure way to encrypt a private key.
It is also implemented in the [NBitcoin library](https://github.com/MetacoSA/NBitcoin) so, it's easy to use.
Additionally, there is no standard way (bip) to encrypt HD wallets.
Take into account that it is not only encryption what [BIP 38](/using-wasabi/BIPs.md#bip-38-password-protected-private-key) provides but also a brute-force protection.
:::

:::details
### Does Wasabi support Trezor's and Ledger's hidden wallets?

Yes.
After the 12 or 24 words, enter the passphrase as the 13th or 25th word.
It’s part of [BIP 39](/using-wasabi/BIPs.md#bip-39-mnemonic-code-for-generating-deterministic-keys).
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

## Synchronization

@[youtube](qguwAvA5Fx4)

::::details
### What are BIP-158 block filters?

When you do not run a full node, you need to communicate with some third party node to find out how much money you have.
There are very bad wallets that simply send the extended public key, and thus all your addresses and your entire transaction history, to a selected, or random server.
This means that this trusted third party has full knowledge of a lot of your sensitive financial data.

:::danger This is not acceptable
Do not send your extended public key to a third party server!
:::

::: tip
This is why Wasabi uses [BIP-158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients) to ensure [network level privacy](/using-wasabi/NetworkLevelPrivacy.md).
It's as good as running a full node.
:::

The Wasabi coordinator will send your wallet comparatively small block filters, and you check locally if the block contains a transaction with your coins.
If not, then the filter is stored for later reference and for syncing new wallets.
If yes, then the wallet connects to a random Bitcoin peer-to-peer full node to request this entire block.
Your wallet does not communicate with the Wasabi server to download the block, because there's no need to trust it.
For every block download, Wasabi establishes a new and unique tor identity, meaning that it is not easy to link that it is the same entity downloading all these blocks.
The P2P node that serves you the block does not know if you are a regular Bitcoin full node, or a Wasabi light client node.
You are yet another peer in the network.

It is important to note that although the privacy is as good as with a full node, you do not verify that the coins are actually valid.
In order to do this, you must run a full node and verify the entire timechain.
With the block filters, you trust that the Wasabi server gives you the correct filters, and does not withhold any of them.
You also do not have proof that the block you download from a P2P node is actually in the valid chain, but you can verify the proof of work in the block header.
::::

:::details
### How does Wasabi download a relevant block?

Wasabi uses [BIP 158](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients) block filter to find out if a specific block contains a transaction of a specific wallet.
If so, then by default Wasabi connects to a random Bitcoin peer to peer full node over tor, and requests only to download this block.
For each block, it generates a new and separate tor identity.

If you are running your own node, then you can pull this block directly from the timechain that you have fully verified your self.
If the node is on the same computer, then it is connected automatically by default.
You can also specify the local IP or tor hidden service of your remote full node.
:::

:::details
### How do I know if the synchronization is finished?

You know that tor is properly connected, that all the block filters and all the relevant blocks are downloaded when you see that the status bar is `Ready`.

![](/StatusBar.png)
:::

:::details
### What does it mean "Missing Filters"?

The `Missing Filters` label indicates that Wasabi is still downloading the [BIP 158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients) and it's synchronizing your wallet.
You have just to wait until the status bar is `Ready`.
::::

:::details
### How long does the initial, and a subsequent synchronization take?

It usually only takes a couple seconds to scan the block filters, download and parse the blocks.
However, for large wallets with a many transactions, this synchronization can take up to several minutes.
We are constantly improving the speed and reliability of the loading process.
For especially old wallets, it might be worth considering to start a new wallet with a shorter transaction history.
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
However, when you use the same address for every coin, then everyone knows that all coins can be spent by one individual who has the private key - you!
Thus, when someone finds out that you have that address, maybe you published it in your social media profile for donations, or you sent a coin to another peer who knows you, then he knows also how many bitcoin you have in that same address.
Take good care to whom you tell your addresses, and every time use a different address.

Because you have all the private keys, for all these addresses, you can produce a valid signature for any of them.
So you can prove that these are your bitcoin, without relying on reputation that you have any other coins.
You can easily generate and store billions of private keys and addresses in a convenient [BIP 44 multi-account hierarchy for deterministic wallets](/using-wasabi/BIPs.md#bip-44-multi-account-hierarchy-for-deterministic-wallets) so that you can backup everything in your 12 word mnemonic phrase.

This is what is used in Wasabi.
You have a mnemonic backup, and an unlimited number of new addresses.
Every time a coin is received, the address is removed from the GUI so that you are not tempted to use it again.

:::danger
**NEVER RE-USE ADDRESSES**
:::
::::

:::details
### How do I generate a new receiving address?

You can generate a new bech32 address in the `Receive` tab of Wasabi Wallet.
First you must set a label for it, so that you later know who has sent you bitcoin to this address.
Be precise in the reason for the payment, labeling is an important part of good [coin control](/FAQ/FAQ-UseWasabi.md#why-is-coin-control-so-important) privacy best practices.
Then you can click on `Generate` which will now show you the address, and immediately copy it to the clipboard.
After a coin has been sent to this address, it is removed from the GUI, this is a good feature to help protect you against [address reuse](/FAQ/FAQ-UseWasabi.md#why-is-it-bad-to-re-use-addresses).

![](/ReceiveLabelingRequired.png)

If you generate more than 21 unused addresses, a notification will appear saying `Warning! MinGapLimit increased from 21 to 22.` and so on.
The `MinGapLimit` is the maximum number of consecutive unused addresses in your sequence of addresses, Wasabi automatically increases this value if needed when you generate new receiving addresses.
When you import the wallet file into a new Wasabi client, then it will use this `MinGapLimit` to find all your coins in the wallet.
:::

:::details
### Why do I have to label my address?

Bitcoin addresses look like cyphertext, they are not easily remembered and it's not clear how they were used previously.
When you do not label all your addresses, there is no meta-data for you to understand the context of their coins.
Thus receiving addresses and sending transactions that generate a change coin should be carefully labeled.
This helps you know where your coins came from so that you can judge whether there are privacy concerns when sending a specific coin to a specific receiver.

![](/ReceiveLabelingRequired.png)

When labeling a newly generated address or a sending transaction that generates a change coin you should ask yourself: "Who knows this address is mine?" or "Who will I share this address with?" or "From whom I am receiving bitcoin?" or "To whom I am sending bitcoin?"
Labels should contain the comma-separated names of people/entities that may be aware of the transaction and could follow its trail like:

`Name of the sender or the receiver, name of the exchange, name of the payment processor`

So, a good label could be:

`Alice, Bitfinex, BTCPay Server`

or:

`Alice & Bob` (This is one entity which is not the same as `Alice, Bob` as they are multiple entities and thus separated by a comma)
:::

:::details
### How can I change the label of my receive address?

You can change the label of your receive address in the right click menu by clicking `Change Label`, then type in the new label.
This is useful for when you have generated a receiving address with a specific label, but then the cause for receiving is no longer present.
Take care with whom you have shared this address, because if you send it to several people, they might all send many coins to the same address.
This is very bad for your privacy because of [address reuse](/using-wasabi/AddressReuse.md), and it confuses you with the labeling of each unique coin.

![](/ReceiveAddressMenu.png)
:::

:::details
### How can I edit the label of my address after a transaction has gone through?

To date there is no possibility to change the label of an address after it has sent or received bitcoins.
:::

::::details
### Are there privacy concerns regarding whom I send my address?

Yes.
Whomever you send your address, he knows that this address, and any coin sent to it, belongs to you.
Thus it is important to have labeled receiving addresses, so that you know which address is for what purpose.
It is important that you avoid sending the same address to several different individuals.
There is a risk that both of them send coins to this same destination, thus unnecessarily linking the payments.

:::danger
It is especially important to **NEVER** send your extended public key to any third party server.
This is a complete de-anonymization of your entire wallet!!
:::
::::

:::details
### Why does Wasabi only use SegWit bech32 addresses?

Wasabi generates Bech32 addresses only, also known as bc1 addresses or native SegWit addresses.
These addresses start with the characters `bc1...` Some wallets/exchanges do not yet support this type of address and may give an error message (e.g. "unknown bitcoin address").
The solution is to manage your funds with a wallet which does support Bech32.
To check Bech32 adoption and exchange/wallet support you can follow [Bitcoin.it Wiki](https://en.bitcoin.it/wiki/Bech32_adoption) and [When Segwit? website](https://whensegwit.com/#who).

Be careful, if you send all your coins from an old wallet to a new wallet (from the table above) in one transaction then you will merge all your coins which is bad for privacy - instead, **send the coins individually** or if possible **import the seed in the new wallet**.
:::

:::details
### Where can I find my address QR code and public key?

You can see the address QR code, public key and the key path in the drop down menu of the `Receive` tab.
Click on the arrow on the left side of the address to reveal the extra details.
You can save the png file of the QR code in the right click menu.

![](/ReceiveAddressDropDown.png)
:::

:::details
### What derivation paths does Wasabi use?

Wasabi follows [BIP 84: Derivation scheme for P2WPKH Based Accounts](/using-wasabi/BIPs.md#bip-84-derivation-scheme-for-p2wpkh-based-accounts), so the main path is `m/84'/0'/0'`.
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

Anyway, since Wasabi is using the Hardware Wallet Interface with Partially Signed Bitcoin Transactions (PSBT), the implementation might come in #twoweeks, check the [ToDo list](/building-wasabi/ToDo.md).
Schnorr key and signature aggregation with MuSig increases the privacy, since only one public key, not n, are committed on the timechain.
So when Schnorr is activated in the Bitcoin consensus layer, in #twoweeks, there are no privacy concerns standing in the way of Wasabi multisig!
:::

:::details
### How does Wasabi know of incoming transactions to the mempool?

When Wasabi is running, it connects to random Bitcoin peer to peer nodes and listens for their gossip of all transactions on the network.
Based on this information Wasabi builds its own local mempool of unconfirmed transactions.
So when you have Wasabi running, you will be notified about an incoming receiving transaction as soon as it is gossiped on the network.
But when Wasabi is offline, it does not listen to the network and it will not know about your unconfirmed transaction when you next start up Wasabi.
In this case you have to wait until your transaction is confirmed in a block, and based on the [BIP 158 block filters](/BIPs.md#bip-158-compact-block-filters-for-light-clients) Wasabi will download that whole block including your transaction from a random P2P node.
:::

## Send

@[youtube](PRlAAxunmdU)

@[youtube](AdmlM-Qvco0)

:::details
### What are coins?

Bitcoin uses a system of inputs and outputs to keep track who owns how many sats.
Every transaction specifies one or more inputs, the chunk of bitcoin being spent, and one or more outputs, the destination of who receives the bitcoin.
A coin is also called an unspent transaction output UTXO, meaning that this output has not been used as the input of a new transaction - it is yet to be spent.
In order to spend a UTXO, the valid signature and script has to be provided in the transaction.
This ensures that only with knowledge of the correct private key can this coin be sent to a new address.
This chain of links between inputs being spent and outputs being generated is verified by every full node, and stored on the timechain.
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
Alice can protect herself against this by using a CoinJoin UTXO, because now Bob can not know the previous transactions from Alice.
:::

:::details
### How do I set a destination address?

In the `Send` tab, there is a text box for the `Address` right under the coin list.
If you have an address in the clipboard, then it is automatically pasted when you click on the box.
You can also type in the Bech32 address manually, there is a checksum to help you identify typos.
Be careful and double check the address, there is no way to revert this transaction and change the destination.
So make sure that the coins get into the right hands.
:::

:::details
### Can I pay to many addresses?

Unfortunately pay to many is not not yet implemented.
But this is on the [ToDo list](/building-wasabi/ToDo.md)!
Coming in #twoweeks.
:::

:::details
### How do I set the payment amount?

After you select one or more coins as inputs in `Send` tab, say two anonset coins worth 0.1 bitcoin each.
You can manually set the exact amount that the destination address will receive in the output of the transaction, say 0.15 bitcoin.
Then Wasabi will help you with automatically calculating the precise change output value with `inputs - destination output - confirmation fee`.

![](/SendAmountFeePassword.png)
:::

::::details
### How can I use the MAX button?

When you select one or more coins as inputs in `Send` tab, say two anonset coins worth each 0.1 bitcoin.
You can click the `MAX` button and the transaction will have only one output with the destination address, and no change output.
Wasabi will calculate the precise value for the destination output with `inputs - confirmation fee`.
This means you send the entire two coins to the receiving address, and there is no change coming back to your own wallet, you are sending a "whole coin".

![](/SendAmountFeePassword.png)

The timechain spy heuristic is that this is a transaction to yourself, for example to your hardware wallet for long-term hodling.
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

So to fix this Wasabi broadcasts your transactions to a random node, and messages that node through TOR, so the node cannot detect your IP address.
When you want to subsequently send another transaction on the network, Wasabi destroys the original TOR bridge and connection to the node and establishes a new TOR bridge and connection with a brand new node.
This reduces the risk of a passive bystander being able to link two transactions together that appear from the same location.
:::

::::details
### What fee should I select?

Wasabi uses the [smartfee](https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0) estimation algorithm provided by bitcoind.
This integrates both data from recent blocks, as well as the local mempool to estimate the current and future demand for blockspace.
The lower the fee is, the longer the estimated wait; and the higher the fee, the faster the confirmation will come.
There are several different confidence levels, each of them gives an educated guess how soon the transaction will confirm.
But the provided time frames are only a rough estimation, and not at all a precise metric.

![](/SendFeeSlider.png)

Because confirmation fee estimation is more an art than a science, you can also set the fee manually.
Then you can go after your gut feeling, [mempool chart analysis](https://jochen-hoenicke.de/queue/#0,24h), or just putting the minimum of 1 sat/vByte.

![](/SendNoFee.png)

For a transaction to yourself, for example from your hot CoinJoin wallet to your hardware wallet, you don't need to have fast confirmation, so you can set a low fee.
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
### How can I display the fee in satoshis per byte?

The fee you pay to get confirmation on the Bitcoin timechain is denominated in satoshis per virtual byte.
This means that the larger your transaction size, meaning the number of inputs and outputs, the more total bitcoin you have to pay for confirmation.
If you want faster confirmation, then you have to pay proportionally more sats per vByte.

You can toggle the display of the fee between `sat/vByte` & `percentage of transfered value` & `total bitcoin` & `total USD` by clicking on the text of the fee.
:::

:::details
### How do I select coins for spending?

Unlike other Bitcoin wallets, the user cannot spend from Wasabi without selecting coins, since ["Coin Control Is Must Learn If You Care About Your Privacy In Bitcoin"](https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2), at least for today.
The label field of the `Send` tab is also compulsory.
The received coins will appear in your `Send` tab and you'll have to manually select which coins you'll want to spend from.
By clicking on the `Max` button, one can spend all selected coins.
Spending whole coins is beneficial to privacy.
![](/Send.png)
:::

:::details
### How is the tansaction broadcasted?

Wasabi previously did not maintain its P2P connections over Tor.
Since Wasabi is a non-listening node, broadcasting transactions through other P2P nodes over the clearnet would’ve let the peer to link your IP address to the transaction.
This is why we were broadcasting our transactions to our backend server over Tor.
Now, we started tunneling all our P2P traffic through Tor, too:
We did it in a way that we only connect to onion nodes, so end to end encryption is now enforced between us and our peers.
All this without involving any exit node.
We connect to each peer through a different Tor stream.
This enabled us to replace our transaction broadcasting mechanism.
Now, we broadcast transactions to only one peer over Tor and immediately after that we disconnect the peer.

If Wasabi cannot broadcast a transaction through a random node over Tor, it will (in the last resort) send the transaction to the coordinator backend for broadcasting.

Once a transaction is sent, Wasabi will always open a new Tor circuit with a new random node on the network, in order to avoid giving away too much information to one party.
When you send two consecutive transactions via Wasabi, you can be sure that they appear in two very different places on the network.

Wasabi will implement the [Dandelion](/using-wasabi/BIPs.md#bip-156-dandelion-privacy-enhancing-routing) protocol for transaction broadcasting when the Bitcoin network adopts it.
:::

:::details
### What is the cluster history?

Clusters are a property of a Bitcoin wallet with strong coin-control and good labeling.
When you use Wasabi, you must label every coin that you receive.
The reason why this is important, is that your "wallet" is really just a collection of coins (similar to a physical wallet, not to a bank account).
When you receive coins from somewhere to a labeled address, Wasabi will store the label locally on your device, for example:

`----> 0.65 BTC (From my Boss Bob)`

Now if you receive money from Alice who uses an exchange, then your label would look like this:

`----> 2.1 BTC (From Alice, from exchange)`

Now here is where things can be a bit tricky for folks unfamiliar with Bitcoin.
Suppose you wanted to send all of your coins to a hardware wallet.
So you think to yourself "What's the harm in sending my money to one address?"

This is how the transaction will look like:

```
0.65 BTC (From my Boss Bob)     ----->  2.75 BTC (From my Boss Bob & from exchange)
2.1 BTC (Alice, from exchange)
```

The problem with this transaction, is your boss knows you, and knows that the 0.65 BTC is in your possession, and can monitor your transaction behavior.
But when you combine (consolidate) your coins in this way, you reveal to your boss that you also have 2.1 BTC from somewhere else, and you reveal to the exchange that you have 0.65 bitcoin from somewhere else.

When you CoinJoin (mix) coins with Wasabi, you actually de-link the trail from your boss/exchange, to the coins in your wallet.
The coin will have an anonymity set > 1, and typically will have a green shield.
This coin can now be spent without having to worry about your boss or the exchange tracking your behavior.

However, when you mix a coin, there is often change.
This change is marked in a red `x` and has an anonymity set = 1 (with a couple of small exceptions regarding remixing).
The change is completely linked to your coins before the mix, and so needs to be dealt with properly.
If you combine the tiny bit of change you received from your boss and from the exchange, they still know how much money you had (but not where you are spending it).

So the idea around clusters is to make it easier for users to follow the transaction graph.
The transaction graph is the history of where a coin has been, and is important if different histories need to be separated.
For example, if you buy coins anonymously in a P2P way, you should try to avoid mixing those coins with coins you got in a public way (donation, exchange, etc.).
:::

:::details
### What's the difference between Send and Build Transaction?

The only difference is that `Build Transaction` does not propagate the transaction, it simply builds it.
It works differently for watch-only and hardware wallets than normal wallets.

In summary:

.|Hot wallet|Watch-only wallet|Hardware wallet
:---:|:---|:---|:---
Build tx|Send tab, Build tx tab|Send tab, Build tx tab|Send tab, Build tx tab
Sign tx|Send tab, Build tx tab||Send tab
Broadcast tx|Send tab||Send tab

:::

:::details
### Why Wasabi did not send some of my selected coins?

Because they were not necessary for the transaction.
Wasabi Wallet will use only the necessary coins to make the transaction.

Example: If you select 10 coins with total value of 2 btc and you want to send 1 btc but the sum of 4 coins is enough to make the transaction, then Wasabi will use only those 4 coins.
:::

## CoinJoin

@[youtube](ypfZT9GlqTw)

:::details
### What's the legal status of Wasabi/CoinJoin?

USA: On May 9, 2019, the Financial Crimes Enforcement Network (FinCEN) issued an interpretive guidance that stated the following in section 4.5.1(b):
> An anonymizing software provider is not a money transmitter. FinCEN regulations exempt from the definition of money transmitter those persons providing "the delivery, communication, or network access services used by a money transmitter to support money transmission services."

Wasabi is an Anonymizing software provider so it is not a money transmitter, thus not under Bank Secrecy Act (BSA) regulations.
Basically we can continue to operate like now and it is compliant.

Here's a great explanation about it:

@[youtube](tLOMcU8MhWM,1305)
:::

::::details
### Why aren't there smaller equal denomination outputs like 0.05 BTC?

There are many reasons for that.
The most prominent one may be DoS attack issues.
In fact ZeroLink's DoS protection have been designed with 1BTC in mind, not with 0.1BTC, so we may even have to elevate it if someone with sufficient resources would decide to go for DoS attacking Wasabi.

Everything in Bitcoin (and life) is about trade offs.
When we build CoinJoin transactions on the Bitcoin Blockchain, remember that we always have to pay the miner fees.
Miner fees are not dependent on the value of Bitcoin being transferred, rather, only on the size of the transaction in (v)bytes.
So that means constructing a CoinJoin with 0.1 BTC outputs, with 100 participants, and constructing a CoinJoin with 0.01 BTC Outputs with 100 participants will cost the same in terms of miner fees.

So let's dig into the numbers a bit further.
What does it cost (from the miner perspective) to participate in a CoinJoin? Well most users will provide 1 input, and 2 outputs (change + mixed UTXO) and we can calculate the vbytes like so:
:::tip
1 * (68 vbytes) + 2 * (33 vbytes) = 134 vbytes
:::
But it is important to note that many users provide 2 inputs (UTXOs) or even sometimes 3 or 4, so we should really put a multiplier of 1.5x on the inputs:
:::tip
1.5 * (68 vbytes) + 2 * (33 vbytes) = 168 vbytes
:::
Excellent, this is the Cost-per-participant of an equal-output CoinJoin.
Now let's consider the variable miner fees in sat/vbyte that we might pay to get the CoinJoin mined within a reasonable time (<24 hours):
:::tip
Minimum: 2 sat/vbyte: 336 satoshis per participant
Average: 10 sat/vbyte: 1,680 satoshis per participant
High: 100 sat/vbyte: 16,800 satoshis per participant
:::
So now let's examine how much (as a percentage) users have to pay for different denominations of equal output coinjoins.
We will take the example of 1 BTC, 0.1 BTC (current setting) and 0.01 BTC (proposed):
First 1 BTC:
:::tip
Minimum: 2 sat/vbyte: 336 satoshis per participant (0.000336 %)
Average: 10 sat/vbyte: 1,680 satoshis per participant (0.00168 %)
High: 100 sat/vbyte: 16,800 satoshis per participant (0.0168 %)
:::
Notice that for such a large amount, the miner, even in extreme cases only takes <0.02% (note this is not 2%!).
Let's observe for 0.1 BTC:
:::tip
Minimum: 2 sat/vbyte: 336 satoshis per participant (0.00336 %)
Average: 10 sat/vbyte: 1,680 satoshis per participant (0.0168 %)
High: 100 sat/vbyte: 16,800 satoshis per participant (0.168 %)
:::
Here, we already observe that in some extreme cases, the miner is earning almost 0.2%!
Recall that Wasabi has a coordinator fee that is capped at 0.3%, so in these extreme cases the total fee paid by the user (you) is closer to 0.5%.
Now we proceed to go to a smaller denominaton, 0.01 BTC:
:::tip
Minimum: 2 sat/vbyte: 336 satoshis per participant (0.0336 %)
Average: 10 sat/vbyte: 1,680 satoshis per participant (0.168 %)
High: 100 sat/vbyte: 16,800 satoshis per participant (1.68 %)
:::

Notice that in the average case, users are regularly paying almost 0.5% for CoinJoining, and only 60% of this is going to the Wasabi Coordinator.
In the extreme case, which simply cannot be overlooked as the network is volatile in terms of daily usage, the miner is earning 5.5x what Wasabi coordinator is charging, and the users are burdened with a 2% fee for CJ!
This is simply ridiculous!
So there you have it! Here is the trade-off with CJ output denominations and why it currently makes sense for 0.1 BTC, but not for much lower.
::::

:::details
### What are the fees for the CoinJoin?

You pay a coordinator fee of 0.003% * anonymity set.
If the anonymity set of a coin is 50 then you pay 0.003% * 50 (=0.15%).
If you set the target anonymity set to 53 then Wasabi will continue mixing until this is reached, so you may end up with an anonymity set of say 60, and you will pay 0.003% * 60 (=0.18%).

There are also edge cases where you do not pay the full coordinator fee or where you pay more.
For example if you're the smallest registrant to a round, you will never pay a coordinator fee.
Also when you are remixing and you cannot pay the full coordinator fee with your input, then you only pay as much as you have, but if the change amount leftover would be too small, then that is also added to the coordinator fee.
Currently the minimum change amount to be paid out is 0.7% of the base denomination (~0.1BTC.)

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

All an observer knows is that a specific anon set output coin is owned by one of the owners of one of the input Coins i.e. 3 people - hence an anonymity set of 3.

Your Wasabi software has limited information on what the anonymity set should be, so the anonymity set that the software presents you is just an estimation, not an accurate value.
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
Remember to take a look at websites like [Johoe's Bitcoin Mempool Statistics](https://jochen-hoenicke.de/queue/#0,24h) or [mempool.space](https://mempool.space/) to see mempool statistics in real time.

2. Your inputs are the same or little higher as the minimal denomination for the current round.
[Change is an issue](/using-wasabi/ChangeCoins.md#why-change-is-an-issue).
For this reason, whenever possible it is recommended to CoinJoin with exactly the required denomination for the current round (roughly 0.1 BTC) to not get any change back.

3. Mix at different times
To avoid traffic detection and behavioral analysis, you should CoinJoin at different times (days and hours).
:::

:::details
### Why are the denominations such an odd number?

The output value changes each round to ensure that you can enqueue a coin and have it remix (mix over and over again - increasing the anonymity set, improving privacy).
As a result the round mixing amount will often be a specific number which generally decreases as the rounds proceed, with a reset once a lower bound is reached.
:::

:::details
### What is happening in the input registration phase?

During this phase you have the opportunity to register coins that you want to mix in this round.
Your Wasabi client connects to the coordinator server with a unique tor identity called Alice, and with it you send the input proofs, the clear-text change output, and the blinded anonset CoinJoin address.
When all the proofs are valid, the coordinator signs the blinded output without knowing which address this is, and sends this back to Alice.
Since the goal is to have 100 peers in one round, the [input registration phase](/using-wasabi/CoinJoin.md#input-registration) can take some time.
But regardless of how many participants, two hours after the last CoinJoin this phase is complete.
:::

:::details
### What is happening in the connection confirmation phase?

Because the input registration phase can take up to two hours, the coordinator needs to ensure that everyone is still online and ready to continue.
So in the [connection confirmation phase](/using-wasabi/CoinJoin.md#connection-confirmation) every Alice sends a signal to the coordinator, and when all have checked in, this phase concludes.
:::

:::details
### What is happening in the output registration phase?

You use some secret parameters to unblind the blinded CoinJoin output to reveal the clear text address that still contains the signature of the coordinator.
Wasabi creates a new tor identity called Bob, and with it you send the unblinded anonset output together with the signature to the coordinator.
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
Now if even that'd fail, then we can start thinking about lowering the required peers and also other methods.
:::

:::details
### I'd like to experience CoinJoin but I'm not comfortable using real Bitcoin. What can I do?

You can try to make a CoinJoin via Wasabi on the Bitcoin [TestNet](/FAQ/FAQ-UseWasabi.md#what-is-testnet) (an alternative Bitcoin blockchain, to be used for testing).
Go to `Settings` and change the network to `TestNet`.
You can get tBTC from faucets like:
[testnet-faucet.mempool.co](https://testnet-faucet.mempool.co/)
or
[coinfaucet.eu/en/btc-testnet](https://coinfaucet.eu/en/btc-testnet/)
:::

:::details
### Does Wasabi have to stay on during CoinJoin?

Yes, Wasabi needs to stay on during CoinJoins, you cannot be offline and still participate in CoinJoins.

A CoinJoin transaction is different from a normal transaction, where you are the only person signing, and requires many people to sign **the same transaction**.
Until all the peers are here, no peer knows what transaction to sign.

Here is how Wasabi handles different scenarios:

|  | During [input registration phase](FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase) | After input registration phase |
|:---:|:---:|:---:|
| You close Wasabi | Your registered coins are automatically dequeued | Wasabi will make you wait until the round finishes |
| Wasabi goes offline | Your registered coins are automatically timed out by the coordinator after 1 minute | Your registered coins will be banned for 24h from participating in another CoinJoin. (This is to prevent [DoS attacks](https://github.com/nopara73/ZeroLink/#d-dos-attack)) |
:::

:::details
### What if there's a power outage during CoinJoin? Do I lose my coins?

No you don't.
CoinJoins are atomic, they happen or they don't.
If your wallet crashes or your computer goes offline during CoinJoin you can simply register for a new CoinJoin, look at table [here](/FAQ/FAQ-UseWasabi.md#does-wasabi-have-to-stay-on-during-coinjoin) for more info.
:::

:::details
### How much anonymity set do I need?

It is commonly said that an anonymity set of 50 is sufficient to evade blockchain forensics analysis.
At least one round to re-mix your coins can increase your privacy drastically.
With Wasabi this can be achieved in a matter of hours (or minutes if there are a lot of users).
:::

:::details
### How many rounds should I CoinJoin?

There is no simple answer for this.
If you want more anonymity you should CoinJoin multiple times.
:::

:::details
### Are coins automatically requeued after the round is complete?

Yes they are, based on the anonymity set target.
If the coins' anonymity sets are below the specified target after a round is complete, then the coins are requeued automatically for the next round.
But when the anonymity sets are above the target after a round, then the coins will no longer be registered automatically.
However, you can manually enqueue them for a new round at any time.
:::

:::details
### How can I select UTXOs for CoinJoin?

You need to go to `CoinJoin` tab and select your desired UTXO by clicking the checkbox.
It will be queued and registered for the next CoinJoin round.
:::

:::details
### How does my wallet communicate with the Wasabi coordinator server?

Wasabi communicates in many ways to the coordinator server, and it is always over the tor network.

First of all, Wasabi uses [BIP 158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients) to ensure network level privacy.
You can follow these FAQs to have a full explanation on the theme:
- [What are BIP-158 Block Filters?](/FAQ/FAQ-UseWasabi.md#what-are-bip-158-block-filters)
- [What software supplies the block filters that Wasabi uses?](/FAQ/FAQ-Introduction.md#what-software-supplies-the-block-filters-that-wasabi-uses)
- [Can the coordinator attack me?](/FAQ/FAQ-Introduction.md#can-the-coordinator-attack-me)
- [Is the backend's coordinator code open source?](/FAQ/FAQ-Introduction.md#is-the-backend-s-coordinator-code-open-source)

Then, there are five different phases in a CoinJoin.
You can follow these links to have a full explanation on that:
1. [INPUT REGISTRATION PHASE](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase)
2. [CONNECTION CONFIRMATION PHASE](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-connection-confirmation-phase)
3. [OUTPUT REGISTRATION PHASE](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-output-registration-phase)
4. [SIGNING PHASE](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-signing-phase)
5. [BROADCASTING PHASE](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase)

You also get information about the current mempool for fee estimation as well as the fiat exchange rate.
:::

:::details
### How long does it take to mix my coins?

It depends on many things, the longest period is the wait for all peers to register their coins.
First of all from your desired anonymity set, every round has a goal of 100 anonymity set.
Wasabi is developed in a way that there's a round at least once every two hours.
If the 100 peers registered earlier, then there can be many rounds per hour.
When all peers are registered, then the signing phase is done within a couple of seconds.

Summing up: the faster peers register in the CoinJoins, the faster the mixes are.
:::

:::details
### What is the coordinator address?

The coordinator gets paid in every CoinJoin.
And for transparency reasons, the same coordinator address is used.

The current address used by the Wasabi coordinator is `bc1qa24tsgchvuxsaccp8vrnkfd85hrcpafg20kmjw`.

Old addresses:
- `bc1qs604c7jv6amk4cxqlnvuxv26hv3e48cds4m0ew`
:::

:::details
### What is the maximum number of coins that can be registered in a CoinJoin?

Wasabi Wallet will register only up to 7 coins in a CoinJoin.
:::

:::details
### Why Wasabi did not register some of my enqueued coins?

Because they were not necessary for the CoinJoin.
Wasabi Wallet will use only the necessary coins to CoinJoin (up to 7 coins).

Example: If you select 10 coins with total value of 0.2 btc but the sum of 4 coins is enough to CoinJoin, then Wasabi will use only those 4 coins.
:::

## Hardware Wallet

@[youtube](aU8ysH9JH9M)

@[youtube](kocEpndQcsg)

@[youtube](sM2uhyROpAQ)

::::details
### What hardware wallets does Wasabi support?

The answer is simple:

:::tip
All of them!
:::

This is thanks to awesome Hardware Wallet Interface of Bitcoin core.

However, not all of the many hardware wallets have been tested and reviewed by the developers.
Everything seems to work fine with the ColdCard, BitBox, Trezor, Ledger and KeepKey.
::::

:::details
### Why does Wasabi use the Hardware Wallet Interface?
Wasabi uses the [Bitcoin Core Hardware Wallet Interface [HWI]](https://github.com/bitcoin-core/HWI), a python library tool for proper integration of off-line signing devices.
It provides a standard way for any software wallet to communicate with any hardware wallet without needing any device specific drivers.
HWI was developed and carefully reviewed over several years, with outstanding contributions by especially [Andrew Chow](https://github.com/achow101).
Wasabi implements C# code that executes the HWI tool.
Wasabi uses this powerful tool because there are no other dependencies necessary to support all the existing and future hardware wallets.
:::

:::details
### How can I generate a Wasabi skeleton wallet file in ColdCard?

On the ColdCard (Mk2, firmware 2.1.1 and up) you go to `>Advanced>MicrcoSD Card>Wasabi Wallet` and it will save a skeleton json-file to the MicroSD card in the hardware wallet.
:::

:::details
### How can I import the Wasabi skeleton wallet file?

Take the MicroSD card from the ColdCard and plug it in the computer with the Wasabi Wallet software.
In Wasabi Wallet go to the Wallet Manager, select Hardware Wallet option and in the bottom right corner click `Import Coldcard`.
Now select the Wasabi skeleton json-file from the MicroSD card, if this fails you can manually enter the file location in Wasabi Wallet window and load the file.
:::

:::details
### How can I generate a receiving address of my hardware wallet?

In Wasabi Wallet you load your previously imported wallet (from Wasabi skeleton, or USB detection) and go to the `Receive` tab, here you enter a label for the incoming transaction and click `Generate Receive Address`.
In the tab below the newly generated receive address can be viewed / copied.
:::

:::details
### How can I sign a transaction with a USB connected hardware wallet?

To send a transaction you will need to connect your Hardware wallet and unlock the device (using PIN or password), in Wasabi Wallet you go to the `Send` tab where you can specify the address to send to, amount of bitcoin to send and which coins to use as input (only use green/private coins here!).
After filling in all transaction details you click `Send Transaction` to sign it with the connected hardware wallet and broadcast on the network.
:::

:::details
### How can I build and export a transaction to ColdCard?

In the Wallet Explorer on the right side of the GUI, select `YourWallet>Advanced>Build Transaction`.
This brings up the `Build Transaction` tab where you can specify the address, amount of bitcoin and coins to use.
Then by clicking `Build Transaction` a new tab will open containing the raw transaction data, here you click `Export Binary PSBT` to save the partially signed bitcoin transaction (PSBT) to a file.
This file should be moved to the MicroSD card that you can then insert in the ColdCard for manual verification and signing.
:::

:::details
### How can I sign a transaction on the ColdCard?

On the ColdCard (Mk2, firmware 2.1.1 and up) you enter the PIN code to unlock the hardware wallet and press `>Ready To Sign` with the MicroSD card containing the previously generated transaction or PSBT-file.
Verify the address and amount and the ColdCard will then create a signed.psbt and final.txn file on the MicroSD card.
The finalized transaction (xxx-final.txn) can now be broadcast by Wasabi Wallet or even a radio or satellite dish if someone is listening!
:::

:::details
### How can I import and broadcast a final transaction from ColdCard?

In the Wallet Explorer you go to `YourWallet>Advanced>Broadcast Transaction` and click `Import Transaction`, now you can select the previously finalized (and signed) transaction file from the MicroSD card.
If this fails you can manually type the path to this file in Wasabi Wallet to load the transaction.
Now click `Broadcast Transaction` to send it off over Tor to a random Bitcoin node so it can flood over to the miners for confirmation in a block.
:::

:::details
### Can I CoinJoin bitcoins on my hardware wallet?

You can't do that directly, you have to send the bitcoins (in small portions > 0.1 BTC if needed) to a `hot` Wasabi Wallet, do the CoinJoin and then send them back to a new address on the Hardware wallet for cold-storage.
:::

::::details
### Does Ledger Live server spy on my xpub?

Yes, when using the Ledger Live software wallet to manage your coins, you send your extended public key to the Ledger company server.
With this information they know exactly how many bitcoins you have and in what transactions you spend them.
To avoid that you can use a Ledger hardware in combination with Wasabi as software interface, and because Wasabi does not leak your xpub, your transaction history is not shared with anyone.
Make sure you are generating a completely new wallet with a new seed phrase backup so that the compromised old wallet is no longer an issue.
You can also go into the Settings of your Ledger and create a PIN-specific passphrase.

To create a new Ledger Wallet *offline* and make sure that your newly created wallet doesn't leak any information to Ledger's servers you must not use Ledger Live (neither to configure it for the first time, nor to use it).
After that, you can use the wallet in combination with Wasabi without having concerns about your privacy!

:::warning
You still need Ledger Live app to update the firmware of your Ledger hardware wallet.
By not using Ledger Live, you seriously jeopardize the safety of your funds.
Please consider this carefully before making a decision.
:::
::::

:::details
### After I CoinJoined my coins and reached green anonset, I sent them to my hardware wallet address. When I check my HW via Wasabi, the coins are now red. Why?

Everything is working as expected.

The anonymity set info (number) is tied to your wallet that you used to CoinJoin, if you send a mixed coin to another Wasabi Wallet of yours (hardware wallet or normal wallet) it will have an anonymity set 1 (red) because this wallet doesn't know that the coin was coinjoined.

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

## History

:::details
### How can I check the transactions history?

In the `History` tab you see a list of all the transactions made with this Wasabi wallet.
It includes the value being sent out of the wallet, meaning the payment to an external address and the fee.
If the number is red, then you have sent sats out of the wallet - if the number is green, then you have received and stacked sats.
A CoinJoin is a payment within the same wallet, thus it only shows the coordination and mining fee leaving the wallet.
You also have a list of all the transaction identification numbers for detailed reference.
The check mark indicates that the transaction is confirmed in the longest proof-of-work timechain.

![](/History.png)
:::

:::details
### Can I export a list of transactions?

There is currently no convenient way to export a list with transaction details.
However, you can see the `wallet.json` files inside the `WalletBackups` folder (you can find it in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder)) which contains all the public keys, labels and anonset.
:::

## Settings

:::details
### What is Testnet?

The testnet is an alternative Bitcoin blockchain, to be used for testing.
Testnet coins (tBTC) are separate and distinct from actual bitcoins, and are never supposed to have any value.
This allows application developers or bitcoin testers to experiment, without having to use real bitcoins or worrying about breaking the main bitcoin chain.
You can try to make a [CoinJoin with Wasabi on the Bitcoin TestNet](/FAQ/FAQ-UseWasabi.md#i-d-like-to-experience-coinjoin-but-i-m-not-comfortable-using-real-bitcoin-what-can-i-do) without being afraid of losing 'real' bitcoins.

You can get tBTC from faucets like:
[testnet-faucet.mempool.co](https://testnet-faucet.mempool.co/)
or
[coinfaucet.eu/en/btc-testnet](https://coinfaucet.eu/en/btc-testnet/)

There have been three generations of testnet.
Testnet2 was just the first testnet reset with a different genesis block, because people were starting to trade testnet coins for real money.
Testnet3 is the current test network.
It was introduced with the 0.7 release, introduced a third genesis block, a new rule to avoid the "difficulty was too high, is now too low, and transactions take too long to verify" problem, and contains blocks with edge-case transactions designed to test implementation compatibility.
:::

:::details
### How do I connect my own full node to Wasabi?

There is currently a basic implementation of connecting your full node to Wasabi.
The server will still send you [BIP 158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients), and when you realize that a block contains a transaction of yours, then you pull this block from your own full node, instead of a random P2P node, thus you can verify that this is actually a valid block including your transaction.
One attack vector could be that Wasabi lies to you and gives you wrong filters that exclude your transaction, thus you would see in the wallet less coins than you actually control.
[BIP 157 solves this](/using-wasabi/BIPs.md#bip-157-client-side-block-filtering).

When your full node is on the same hardware [computer, laptop] as your Wasabi Wallet, it will automatically recognize it and pull blocks from there.
If your node is on a remote device [raspberry pi, nodl, server], then you can specify your local IP in the `Settings` tab, or in line 11 of the config file.

@[youtube](gWo2RAkIVrE)
:::

:::details
### How can I turn off Tor?

You can turn off Tor in the Settings.
Note that in this case you are still private, except when you CoinJoin and when you broadcast a transaction.
In the first case, the coordinator would know the links between your inputs and outputs based on your IP address.
In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.
:::

:::details
### How can I change the anonset target?

In the `Settings` tab at the bottom you can change the three `PrivacyLevelX` values of the desired anon set of the yellow, green, and checkmark shield button in the GUI.
The `MixUntilAnonymitySet` is the last selected value from previous use.

Alternatively, open the config file from the wallet GUI, go to `File`>`Open`>`Config File` and in the last 4 lines you see:

```json
"MixUntilAnonymitySet": 50,
"PrivacyLevelSome": 2,
"PrivacyLevelFine": 21,
"PrivacyLevelStrong": 50
```

Remember that you pay a fee proportional to the Anonymity Set.

@[youtube](gWo2RAkIVrE)
:::

:::details
### What is the dust threshold?

Dust can mean [a lot of things](https://bitcoin.stackexchange.com/questions/10986/what-is-meant-by-bitcoin-dust), depending how you look at it.
It can be non economical inputs, that is a UTXO that has less value than the fees it would cost to spend this coin.
A dust attack is actually about [forced address reuse](https://en.bitcoin.it/Privacy#Forced_address_reuse), the malicious actor sends very small amounts into old addresses and consolidation of these dust UTXOs can link several coins in a wallet cluster.

Specifically in the context of Wasabi, with the dust threshold settings you can limit the value of coins shown in the GUI.
When you set it to `0.0000 5000 bitcoin`, and when you receive a coin worth `0.0000 4000 bitcoin`, then this coin will not be shown in the coin list.

![](/SettingsDustThreshold.png)
:::

:::details
### Where can I find the logs?

In the top left menu `File > Open` you can see there are several logs available.
* The `Log File` shows you the general information about Wasabi Wallet.
* The `Tor Log File` shows the Tor specific logs.

![](/MenuFileOpen.png)

Alternatively, you can find the logs inside your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) :::

:::details
### How to activate Lurking Wife Mode?

You can activate Lurking Wife Mode from `Settings` or by clicking on your wallet balance.
You can read more about Lurking Wife Mode [here](/using-wasabi/LurkingWifeMode.md).
:::

:::details
### How can I change to the white theme?

You can change from the default dark to the white theme in the `.walletwasabi/client/Gui/Settings/` [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
Open the `GlobalSettings.json` file and change the line from `"theme": "Visual Studio Dark"` to `"theme": "Visual Studio Light"`.
Save the file and restart Wasabi.
Please note that Wasabi is designed for the dark theme, and some color schemes might not look beautiful in the white mode.

![](/WhiteMode.png)
:::

## Coin Control Best Practices

@[youtube](iyJ81JRvLQk)

@[youtube](k4VzJ6dUT9I)

:::details
### Can I consolidate anonset coins?

It is advisable to limit the recombining of mixed coins because it can only decrease the privacy of said coins.
This links all the consolidated UTXOs in one transaction, creating only one output, which then clearly controls all these funds.
That said, if you combine less than 1 BTC it is less likely to reveal your pre-CoinJoin transaction history.
The potential issue comes when you spend that coin.
Depending on what you do with the coin you might reduce the privacy of the resulting change (if you send half your coin to an exchange for example, as they will know that you own the coin change).
As a result it is best not to recombine ALL your mixed change, though you may wish to recombine some coins if you are planning on hodling for many years as this will reduce the fees required to spend the coins later.

If you would like to dive into the details of this topic, you can [read more here](https://old.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/) and see more here:

@[youtube](Tk8-N1kHa4g)
:::

:::details
### How can I send my anonset coins to my hardware wallet?

Most hardware wallets communicate with servers to provide you with your balance.
This reveals your public key to the server, which damages your privacy - the hardware company can now theoretically link together all your addresses.
As a result **it is not recommended** that you send your mixed coins to an address associated with your hardware wallet unless you are confident that you have set up your hardware wallet in a way that it does not communicate with a 3rd party server (see below).

You can, however, manage your hardware wallet with the Wasabi interface.
Alternatively, you can use your hardware wallet with Electrum, which connects to your Bitcoin Core full node through [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server), [ElectrumX](https://github.com/kyuupichan/electrumx) or [Electrs](https://github.com/romanz/electrs).
:::

::::details
### What can I do with small change?

There are no hard and fast rules for what to do with the change.
Generally try to avoid the change and use the `Max` button extensively to send whole coins.
The most problematic type of change is what has `anonymity set 1` [red shield] You should treat it as a kind of toxic waste [handled with great care].
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

Use Unequal Input Mixing and gain fungibility for UTXOs of 0.1, 0.2, 0.4, 0.8, 1.6, 3.2, ... bitcoin!
Read more: [What are the equal denominations created in one mixing round?](/FAQ/FAQ-UseWasabi.md#what-are-the-equal-denominations-created-in-one-mixing-round)

@[youtube](3Ezru07J674)
:::

:::details
### Which coins can I select for CoinJoins?
You can select any coin, as long as the total sum reaches the minimum to register (usually ~0.1 BTC).
:::

:::details
### Why do my coins occasionally get banned from participating in CoinJoin?

A CoinJoin consists of multiple users registering inputs (coins) and blinded outputs.
Once the appropriate number of participants have registered, the actual transaction (the CoinJoin) is constructed by the coordinator, and given to all participants in the span of about 60 seconds.
At this point, all registered participants must sign off on the CoinJoin, and if a single one of the participants fails to sign their input, the entire CoinJoin must be restarted.

So this introduces a problem, or an attack vector - a malicious user could purposefully register coins, only to wait for the signing phase and not sign.
This would halt the entire CoinJoin process for all other participants and Wasabi would no longer work.

So a simple solution looks like this - the coordinator could collect signatures from all inputs, and if one or more input refuses to sign, the coordinator could record that input and temporarily (or even permanently) ban that coin from participation.
This is a nice solution, as it mitigates a single coin from ruining all CoinJoins, but it too comes with trade-offs.

For example, most of the time, users fail to sign a CoinJoin for non-malicious reasons.
Perhaps their TOR connection went down in precisely that moment, or perhaps their WiFi had a temporary flicker at the wrong time.
Further, some users don't even realize that the signing phase is happening, and sometimes shut down their computer at exactly the wrong moment.
All of these things hinder a successful CoinJoin for all other participants, but by pure accident.

If you are one of the victims of this temporary banning then simply wait for the ban to expire and try again.
The best thing you can do to avoid the issue is to have a strong internet connection and keep your computer online throughout the whole process.

*NOTE*: Banning does not mean freezing.
You can send banned coins to anyone you want.
This is a temporary ban on your coins in participation of the CoinJoin.
:::

:::details
### What does spent coin status mean?

The `spent` coin status is a symptom of corrupted wallet state.
This used to be the largest known bug in Wasabi Wallet.
It affected about 1-5% of users.
This issue was introduced to Wasabi with the [v1.1.4 release](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.4) in April, 2019 by adding a wallet cache, that resulted in 12 times faster wallet load.
It was [thought to be fixed](https://old.reddit.com/r/WasabiWallet/comments/c2hco8/announcement_spent_coin_and_lost_unconfirmed/) in June by adding an autocorrection mechanism, but some users are still reporting this issue, so it is not fixed.

It ultimately got fixed in [v1.1.10](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.10) by introducing an upgraded version of [BIP 158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients/) and changing the wallet cache architecture.
:::

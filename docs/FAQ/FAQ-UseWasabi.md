# Use of Wasabi
## [Wallet Manager](FAQ-UseWasabi.md#wallet-manager-1)
- How do I generate a new wallet?
- How do I back up my mnemonic seed?
- What password should I use?
- Can I spend my bitcoin without the password?
- How do I backup my wallet?
- What's up with the Chinese characters?

## [Synchronization](FAQ-UseWasabi.md#synchronization-1)
- What are BIP-158 block filters?
- How does Wasabi download a relevant block?
- How long does the initial, and a subsequent synchronization take?
- How do I know if the synchronization is finished?

## [Receive](FAQ-UseWasabi.md#receive-1)
- How do I generate a new receiving address?
- [Why is it bad to re-use addresses?](FAQ-UseWasabi.md#why-is-it-bad-to-re-use-addresses)
- Why do I have to label my address?
- How can I change the label of my address?
- [Why does Wasabi only use SegWit bech32 addresses?](FAQ-UseWasabi.md#why-does-wasabi-only-use-segwit-bech32-addresses)
- Where can I find my public key?
- Where can I find a QR code of the address?
- Are there privacy concerns regarding whom I send my address?

## [Send](FAQ-UseWasabi.md#send-1)
- What are coins?
- Why is coin control so important?
- How do I select coins for spending?
- What is the cluster history?
- How do I set a destination address?
- Can I send to many addresses?
- What fee should I select?
- Can I see the fee in Satoshis per byte?
- How is the tansaction broadcasted?
- [Why does Wasabi choose a new random node every time I send a transaction?](FAQ-UseWasabi.md#why-does-wasabi-choose-a-new-random-node-every-time-I-send-a-transaction)

## [History](FAQ-UseWasabi.md#history-1)
- How can I check the history of transactions?
- Can I export a list of transaction?

## [CoinJoin](FAQ-UseWasabi.md#coinjoin-1)
- How can I select UTXOs for CoinJoin?
- What are the denominations created in one round?
- [Can I mix more than the round's minimum?](FAQ-UseWasabi.md#can-i-mix-more-than-the-rounds-minimum)
- [What is the anonymity set?](FAQ-UseWasabi.md#what-is-the-anonymity-set)
- How much anonymity set do I need?
- How many rounds should I CoinJoin?
- [What are the fees for the CoinJoin?](FAQ-UseWasabi.md#what-are-the-fees-for-the-coinjoin)
- What is happening in the input registration phase?
- What is happening in the connection confirmation phase?
- What is happening in the output registration phase?
- What is happening in the signing phase phase?
- What is happening in the broadcasting phase?
- How does my wallet communicate with the Wasabi coordinator server?
- [Why are the denominations such an odd number?](FAQ-UseWasabi.md#why-are-the-denominations-such-an-odd-number)

## [Hardware Wallet](FAQ-UseWasabi.md#hardware-wallet-1)
- Why does Wasabi use the Hardware Wallet Interface?
- What specific hardware wallets does Wasabi support?
- How can I type in the PIN of my Trezor One?
- How can I manage the passphrase of my Trezor T?
- Can I use the passphrase of my Trezor One?
- How can I generate a Wasabi skelton wallet file in Cold Card?
- How can I import the Wasabi skelton wallet file?
- How can I generate a receiving address of my hardware wallet?
- How can I sign a transaction with a USB connected hardware wallet?
- How can I build and export a transaction to Cold Card?
- How can I sign a transaction on the Cold Card?
- How can I import and broadcast a final transaction from Cold Card?
- Can I CoinJoin the bitcoin on my hardware wallet?

## [Settings](FAQ-UseWasabi.md#settings-1)
- [How can I connect to my own full node to Wasabi?](FAQ-UseWasabi.md#how-can-i-connect-to-my-own-full-node-to-wasabi)
- [How can I change the anonset target?](FAQ-UseWasabi.md#how-can-i-change-the-anonset-target)
- How can I change the dust threshold?
- [How can I turn off Tor?](FAQ-UseWasabi.md#how-can-i-turn-off-tor)
- Where can I find the logs?

## [Coin Control Best Practices](FAQ-UseWasabi.md#coin-control-best-practices-1)
- [Can I consolidate anonset coins?](FAQ-UseWasabi.md#can-i-consolidate-anonset-coins)
- [How can I send my anonset coins to my hardware wallet?](FAQ-UseWasabi.md#how-can-i-send-my-anonset-coins-to-my-hardware-wallet)
- [What can I do with small change?](FAQ-UseWasabi.md#what-can-i-do-with-small-change)
- Which coins can I select for CoinJoins?
- How can I mix large amounts?

--------------------------

## Wallet Manager


## Synchronization


## Receive
### Why is it bad to re-use addresses?
Bitcoin is designed so that for every payment you can use a new address that is not tied to any of your previous addresses. When you use a new address for every coin, then it becomes much much more difficult to find out that these coins are from you. However, when you use the same address for every coin, then everyone knows that they all can be spend by one individual who has knowledge of the private key - you! Thus, when someone finds out that you have that address, maybe you published it in your social media profile for donations, or you send a coin to another peer who knows you, then they know also how many bitcoin you have in the other coins with that same address. Take good care to whom you tell your addresses, and every time, tell someone a different address.

Because you have all the private keys, for all these addresses, you can produce a valid signature for any of them. So you can proof that these are your bitcoin, without relying on reputation that you have any other coins. You can easily generate and store many billions of private keys and addresses in a convenient [BIP 44 multi-account hierarchy for deterministic wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) so that you can backup everything in your 12 word mnemonic phrase. 

This is what is used in Wasabi, you have on mnemonic backup, and unlimited numbers of new addresses. Everytime you a coin is received, then the address is removed from the GUI so that you are not tempted to use it again.

Remember: ***NEVER RE-USE ADDRESSES***

### Why does Wasabi only use SegWit bech32 addresses?
Wasabi generates Bech32 addresses only, also known as bc1 addresses or native SegWit addresses. These addresses start with the characters `bc1...` Some wallets/exchanges do not yet support this type of address and may give an error message (e.g. "unknown bitcoin address"). The solution is to manage your funds with a wallet which does support Bech32, [see list](https://en.bitcoin.it/wiki/Bech32_adoption).

Be careful, if you send all your coins from an old wallet to a new wallet (from the table above) in one transaction then you will merge all your coins which is bad for privacy - instead, **send the coins individually** or if possible **import the seed in the new wallet**.


## Send

### Why does Wasabi choose a new random node every time I send a transaction?

When you broadcast a transaction from a full node, that transaction is flooded into the network. Essentially, all nearby nodes are passed your transaction, and those nodes will pass to all of their nearby nodes, etc. However, if a malicious adversary were to get enough relay nodes in the network, they could pretty easily connect the initial location of a transaction by simply observing from which node the transaction appeared first. For this reason, broadcasting transaction through your own node may reveal your IP address.

So to fix this Wasabi broadcasts your transactions to a random node, and messages that node through TOR, so the node cannot detect your IP address. When you want to subsequently send another transaction on the network, Wasabi destroys the original TOR bridge and connection to the node and established a new TOR bridge and connection with a brand new node. This reduces the risk of a passive bystander being able to link two transactions together that appear from the same location.


## History


## CoinJoin
### What are the fees for the CoinJoin?
You currently pay a fee of 0.003% * anonymity set. If the anonymity set of a coin is 50 then you pay 0.003% * 50 (=0.15%). If you set the target anonymity set to 53 then Wasabi will continue mixing until this is reached, so you may end up with an anonymity set of say 60, and you will pay 0.003% * 60 (=0.18%).  

There are also edge cases where you do not pay the full fee or where you pay more. For example if you're the smallest registrant to a round, you will never pay a fee. Also when you are remixing and you cannot pay the full fee with your input, then you only pay as much as you have, but if the change amount leftover would be too small, then that is also added to the fee. Currently the minimum change amount to be paid out is 0.7% of the base denomination (~0.1BTC.)  

It is also possible that you get more back from mixing than you put in. This happens when network fees go down between the start of the round and its end. In this case, the difference is split between the active outputs of the mix.

### What is the anonymity set?
The anonymity set is effectively the size of the group you are hiding in. 

If 3 people take part in a CoinJoin (with equal size inputs) and there are 3 outputs then each of those output coins has an anonymity set of 3.

```
0.1 BTC (Alice)       0.1 BTC (Anon set 3)
0.3 BTC (Bob) 	  ->  0.1 BTC (Anon set 3)
0.4 BTC (Charlie)     0.1 BTC (Anon set 3)
                      0.2 BTC (Change Coin Bob)
                      0.3 BTC (Change Coin Charlie)
```

There is no way to know which of the anon set output coins are owned by which of the input owners.

All an observer knows is that a specific anon set output coin is owned by one of the owners of one of the input Coins i.e. 3 people - hence an anonymity set of 3.  

Your Wasabi software has limited information on what the anonymity set should be, so the anonymity set that the software presents you is just an estimation, not an accurate value. With Wasabi we are trying to do lower estimations, rather than higher ones.

### Can I mix more than the round's minimum?

Yes.  

In a round with a ~0.1 BTC minimum, you could mix ~0.3 BTC and get a ~0.1 BTC output & a ~ 0.2 BTC output.

Similarly, with a 0.7 BTC input you would expect the following outputs: ~0.1, ~0.2, ~0.4 BTC. The possible values of equal output that can be created are 0.1 x 2^n where n is a positive integer (or zero).  [See more here](https://youtu.be/PKtxzSLPWFU) and [here](https://youtu.be/3Ezru07J674).

### Why are the denominations such an odd number?

The output value changes each round to ensure that you can enqueue a coin and have it remix (mix over and over again - increasing the anonymity set, improving privacy). As a result the round mixing amount will often be a specific number which generally decreases as the rounds proceed, with a reset once a lower bound is reached. 

## Hardware Wallet


## Settings
### How do I connect my own full node to Wasabi?
There is currently a basic implementation of connecting your full node to Wasabi. The server will still send you [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki), and when you realize that a block contains a transaction of yours, then you pull this block from your own full node, instead of a random P2P node, thus you can verify that this is actually a valid block including your transaction. One attack vector could be that Wasabi lies to you and gives you wrong filters that exclude your transaction, thus you would see in the wallet less coins than you actually control. [BIP 157 solves this](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki).

When your full node is on the same hardware [computer, laptop] as your Wasabi Wallet, then it will automatically recognize it and pull blocks from there. If your node is on a remote device [raspberry pi, nodl, server], then you can specify your local IP in the Settings tab, or in line 11 of the config file. [See more here](https://youtu.be/gWo2RAkIVrE).

### How can I turn off Tor?
You can turn off Tor in the Settings. Note that in this case you are still private, except when you CoinJoin and when you broadcast a transaction. In the first case, the coordinator would know the links between your inputs and outputs based on your IP address. In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.

### How can I change the anonset target?
In the Settings tab at the bottom you can change the three `PrivacyLevelX` values of the desired anon set of the yellow, green, and checkmark shield button in the GUI. The `MixUntilAnonymitySet` is the last selected value from previous use. 

In the wallet GUI, go to `File`>`Open`>`Config File` and in the last 4 lines you see:

```json
"MixUntilAnonymitySet": 50,
"PrivacyLevelSome": 2,
"PrivacyLevelFine": 21,
"PrivacyLevelStrong": 50
```

Remember that you pay a fee proportional to the Anonymity Set. [See more here](https://youtu.be/gWo2RAkIVrE?t=191).


## Coin Control Best Practices 
### Can I consolidate anonset coins?
It is advisable to limit the recombining of mixed coins because it can only decrease the privacy of said coins. This links all the consolidated UTXOs in one transaction, creating only one output, which then clearly controls all these funds. That said, if you combine less than 1 BTC it is less likely to reveal your pre-CoinJoin transaction history. The potential issue comes when you spend that coin. Depending on what you do with the coin you might reduce the privacy of the resulting change (if you send half your coin to an exchange for example, as they will know that you own the coin change). As a result it is best not to recombine ALL your mixed change, though you may wish to recombine some coins if you are planning on hodling for many years as this will reduce the fees required to spend the coins later.

If you would like to dive into the details of this topic, you can [read more here](https://old.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/) and [see more here](https://www.youtube.com/watch?v=Tk8-N1kHa4g).

### How can I send my anonset coins to my hardware wallet?
Most hardware wallets communicate with servers to provide you with your balance. This reveals your public key to the server, which damages your privacy - the hardware company can now theoretically link together all your addresses. As a result **it is not recommended** that you send your mixed coins to an address associated with your hardware wallet unless you are confident that you have set up your hardware wallet in a way that it does not communicate with a 3rd party server (see below). 

You can, however, manage your hardware wallet with the Wasabi interface. Alternatively, you can use your hardware wallet with Electrum, which connects to your Bitcoin Core full node through [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server).

### What can I do with small change?
There are no hard and fast rules for what to do with the change. Generally try to avoid the change and use the `Max` button extensively to send whole coins. The most problematic type of change is what has `anonymity set 1` (red shield.) You should treat it as a kind of toxic waste (handled with great care).

**Warning**

You want to avoid merging `anonymity set 1 coins` with `anonymity set > 1 coins` wherever possible, because this will link your `anonymity set > 1 coin` to the coin you merge it with. Note that, this is also true if you merge them in a mix, however that is slightly less problematic, because some blockchain analysis techniques become [computationally infeasible](https://www.comsys.rwth-aachen.de/fileadmin/papers/2017/2017-maurer-trustcom-coinjoin.pdf).

It is also important that you do not send different coins to the same receiving address (even if performed as separate transactions) as this will also link the coins together, damaging your privacy.

There are two different types of zero link change:

When you have a KYC coin with red anonset 1 and you register it for CoinJoin, then you get one anonset 100 green coin and one red anonset 1 change. This change is very clearly tied to your KYC input coin, but the CoinJoin output is pretty good with anonset 100. If you combine that red coin with the green, then it's clear that both of them belong to you, and thus the anonset of the output in this transactioin becomes the lowest common denominator, in this case anonset 1.

When you take a 100 anonset coin, and you register it again for CoinJoin, then you get one coin with anonset 200, and one change with anonset 100. This change has anonset 100 because it can be linked to the input of the second CoinJoin, but this coin has anonset 100 already. So, although this change can still reveal pre-mix history, because the pr-mix history is another CoinJoin, you cannot go farther back. So, it might be ok to send this second change output to some place, or even consolidate it, because it still has anonset.

When you consolidate several small change coins in a regular transaction, then every outside observer knows that they belong to the same cluster. However, you can consolidate within a CoinJoin by simply selecting all these coins in the CoinJoin tab. Because the Wasabi CoinJoin transaction shuffles inputs, for an outside observer it is not clear which inputs belong to the same Alice. However, the coordinator gets the input proof of **ALL** the coins that Alice has provided during the input registration phase. Thus the coordinator knows that this is a consolidation transaction. It is wise to assume that every one knows what the coordinator knows. So consolidating in a CoinJoin is better, but it might still reveal the common ownership of the coins.

**Your Options**
- If you do not care about linking the history of the coins because they are all from the same source then you could combine them in a mix (queue all the change from the same source until you reach the minimum input required to mix, currently ~ 0.1 BTC).  
- Mix with [Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver).
- Donate them (e.g. [to the EFF](https://www.eff.org/))
- Spend them on something that is not a particular privacy risk (eg. gift cards).
- Open a lightning channel. 
- The ultimate solution is to 'close the loop' i.e. spend a change coin without merging it with other coins, do not generate it in the first place by sending whole coins. 

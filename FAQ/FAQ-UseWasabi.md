# Use of Wasabi
## [Wallet Manager](/FAQ/FAQ-UseWasabi.md#wallet-manager-1)
- How do I generate a new wallet?
- How do I back up my mnemonic seed?
- What password should I use?
- Can I spend my bitcoin without the password?
- How do I backup my wallet?
- What's up with the Chinese characters?

## [Synchronization](/FAQ/FAQ-UseWasabi.md#synchronization-1)
- What are BIP-158 block filters?
- How does Wasabi download a relevant block?
- How long does the initial, and a subsequent synchronization take?
- How do I know if the synchronization is finished?

## [Receive](/FAQ/FAQ-UseWasabi.md#receive-1)
- How do I generate a new receiving address?
- Why do I have to label my address?
- How can I change the label of my address?
- [Why does Wasabi only use SegWit bech32 addresses?](/FAQ/FAQ-UseWasabi.md#why-does-wasabi-only-use-segwit-bech32-addresses)
- Where can I find my public key?
- Where can I find a QR code of the address?
- Are there privacy concerns regarding whom I send my address?

## [Send](/FAQ/FAQ-UseWasabi.md#send-1)
- What are coins?
- Why is coin control so important?
- How do I select coins for spending?
- What is the cluster history?
- How do I set a destination address?
- Can I send to many addresses?
- What fee should I select?
- Can I see the fee in Satoshis per byte?
- How is the tansaction broadcasted?

## [History](/FAQ/FAQ-UseWasabi.md#history-1)
- How can I check the history of transactions?
- Can I export a list of transaction?

## [Coin Join](/FAQ/FAQ-UseWasabi.md#coin-join-1)
- How can I select UTXOs for coin join?
- What are the denominations created in one round?
- [Can I mix more than the round's minimum?](/FAQ/FAQ-UseWasabi.md#can-i-mix-more-than-the-rounds-minimum)
- [What is the anonymity set?](/FAQ/FAQ-UseWasabi.md#what-is-the-anonymity-set)
- How much anonymity set do I need?
- How many rounds should I coin join?
- [What are the fees for the coin join?](/FAQ/FAQ-UseWasabi.md#what-are-the-fees-for-the-coin-join)
- [What is happening in the input registration phase?](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase)
- [What is happening in the connection confirmation phase?](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-connection-confirmation-phase)
- [What is happening in the output registration phase?](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-output-registration-phase)
- [What is happening in the signing phase?](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-signing-phase)
- [What is happening in the broadcasting phase?](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase)
- How does my wallet communicate with the Wasabi coordinator server?
- [Why are the denominations such an odd number?](/FAQ/FAQ-UseWasabi.md#why-are-the-denominations-such-an-odd-number)

## [Hardware Wallet](/FAQ/FAQ-UseWasabi.md#hardware-wallet-1)
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
- Can I coin join the bitcoin on my hardware wallet?

## [Settings](/FAQ/FAQ-UseWasabi.md#settings-1)
- [How can I connect to my own full node to Wasabi?](/FAQ/FAQ-UseWasabi.md#how-can-i-connect-to-my-own-full-node-to-wasabi)
- [How can I change the anonset target?](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target)
- How can I change the dust threshold?
- [How can I turn off Tor?](/FAQ/FAQ-UseWasabi.md#how-can-i-turn-off-tor)
- Where can I find the logs?

## [Coin Control Best Practices](/FAQ/FAQ-UseWasabi.md#coin-control-best-practices-1)
- [Can I consolidate anonset coins?](/FAQ/FAQ-UseWasabi.md#can-i-consolidate-anonset-coins)
- [How can I send my anonset coins to my hardware wallet?](/FAQ/FAQ-UseWasabi.md#how-can-i-send-my-anonset-coins-to-my-hardware-wallet)
- [What can I do with small change?](/FAQ/FAQ-UseWasabi.md#what-can-i-do-with-small-change)
- Which coins can I select for coin joins?
- How can I mix large amounts?

--------------------------

## Wallet Manager


## Synchronization


## Receive
### Why does Wasabi only use SegWit bech32 addresses?
Wasabi generates Bech32 addresses only, also known as bc1 addresses or native SegWit addresses. These addresses start with the characters `bc1...` Some wallets/exchanges do not yet support this type of address and may give an error message (e.g. "unknown bitcoin address"). The solution is to manage your funds with a wallet which does support Bech32, [see list](https://en.bitcoin.it/wiki/Bech32_adoption).

Be careful, if you send all your coins from an old wallet to a new wallet (from the table above) in one transaction then you will merge all your coins which is bad for privacy - instead, **send the coins individually** or if possible **import the seed in the new wallet**.


## Send


## History


## Coin Join
### What are the fees for the coin join?
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
The output value changes each round to ensure that you can enqueue a coin and have it remix (mix over and over again - increasing the anonymity set, improving privacy). As a result the round mixing amount will often be a specific number which generally decreases as the rounds proceed, with a reset once a lower bound is reached.0

### What is happening in the input registration phase?
During the [input registration](https://github.com/nopara73/zerolink#1-input-registration-phase), you select which coins you want to register for coin join. These coins need to be confirmed on the Bitcoin timechain, unless they are from a Wasabi coin join and you re-register them. In the background, Wasabi generates an input proof so that the coordinator can verify that you actually own this coin. Then Wasabi generates several addresses, depending on the value of inputs registered. The address of the anonset coin join output must not be linked to your input, and thus it is [cryptographically blinded](https://en.wikipedia.org/wiki/Blind_signature) to incomprehensible cypher-text. Since the change output can be easily linked to your input with coin join sudoku [reference missing], this address is not blinded, but send in clear-text.

Wasabi wallet generates a new tor identity [reference missing] called Alice, she is like a separate entity, and for every round you use a new Alice who is not linked to any previous connection. With Alice, you send some information to the Wasabi coordinator server: [i] the input coin that you want to register, together with the input proof signature; [ii] the clear text change address; and [iii] the blinded anonset coin join output.

The Wasabi coordinator now verifies that: [i] there is still room for more peers on this coin join; [ii] the blinded output has never been registered before; [iii] each input has not been registered before, is not banned, is unspent, and that the input proof is valid; and [iv] that the sum value of inputs is higher than the minimum required value of 0.1 bitcoin. Only when all these checks are valid does the coordinator sign the blinded output. He does not know the address that he is signing, because it is blinded. This signature is proof that the coordinator has verified that Alice is not cheating. The coordinator sends the signed blinded output back to Alice.

Alice has the private key to unblind the signed blinded output. With the magic of cryptography, she can reveal the clear-text address of the anonset coin join output, however, the coordinator signature is still attached to this address.

The input registration phase ends when either, the number of registered inputs exceeds the number of required inputs [meaning anonymity set of 100 peers]; or when the last round was two hours ago.

[missing: explanation of uniqueld]

### What is happening in the connection confirmation phase?
There are many Alice's registering their inputs in the first phase, and the connection confirmation phase makes sure that all of them are still online. The coordinator verifies the uniqueld from all the Alice's, and when everyone is still communicating, then he returns the round hash of all the registered inputs. The round is abandoned and re-started if too many Alice's have dropped, for example when Wasabi is shut down, or when the tor connection is temporarily broken.

The connection confirmation phase ends when all Alice's have provided their inputs, or after a timeout when the online Alice's are still larger than the required number of peers.

[missing: explanation of uniqueld]

### What is happening in the output registration phase?
Now that all peers are online, we are ready to proceed with the [output registration phase](https://github.com/nopara73/zerolink#2-output-registration-phase) of the round. Wasabi generates a completely new tor identity Bob, he is in no way tied to Alice. Bob sends to the Wasabi coordinator: [i] the clear-text address for the anonset coin join output; [ii] the coordinator signature over that output; and [iii] the round Hash of all the inputs. Because the coordinator can verify his own signature, he knows that this output was initially send by any Alice [he does not know which Alice exactly] and that he has verified that everything was in order.

It is very important that the coordinator cannot link Alice to Bob. Because Alice has send the clear-text input, and Bob sends the clear-text output. So, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1. Because Alice commits to the output by sending it blinded, and because Bob is a new tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but he cannot deanonymize the peers.

The output registration phase ends when the value of clear-text outputs plus change outputs is equal to the the value of inputs. If after a timeout not all outputs are registered, then this round is abandoned, the missing peers are banned, and a new round is started.


### What is happening in the signing phase?
Now that all inputs and outputs are registered, the Wasabi coordinator can start the [signing phase](https://github.com/nopara73/zerolink#3-signing-phase) by building the coin join transaction with all the registered inputs, the anonset outputs, and the change outputs. He sends this transaction to all the Alice's of this round. Each Alice verifies that: [i] the committed round Hash is equal to the hash of all the inputs in the proposed transaction; and [ii] her inputs and outputs are correctly included. Then she signs the transaction with the private keys of her inputs. Alice sends the uniqueld, the signature and the input index to the coordinator, who then verifies this information. 

The signing phase ends when the coordinator has all the valid signatures for all the registered inputs.

### What is happening in the broadcasting phase?
The coin join transaction is successfully build and signed, and it is now ready to be [broadcasted](https://github.com/nopara73/zerolink#transaction-broadcasting) to the peers of the Bitcoin network. The coordinator sends this transaction over the tor network to a random full node, and from there it is gossiped to other nodes and miners. Wasabi is saving on mining fees by setting a confirmation target of roughly 12 hours, but you can re-register unconfirmed anonset outputs for the next round of coin join.


## Hardware Wallet

## Settings
### How do I connect my own full node to Wasabi?
There is currently a basic implementation of connecting your full node to Wasabi. The server will still send you [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki), and when you realize that a block contains a transaction of yours, then you pull this block from your own full node, instead of a random P2P node, thus you can verify that this is actually a valid block including your transaction. One attack vector could be that Wasabi lies to you and give you wrong filters that exclude your transaction, thus you would see in the wallet less coins than you actually control. [BIP 157 solves this](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki).
When your full node is on the same hardware [computer, laptop] as your Wasabi Wallet, then it will automatically recognize it and pull blocks from there. If your node is on a remote device [raspberry pi, nodl, server], then you can specify your local IP in the Settings tab, or in line 11 of the config file. [See more here](https://youtu.be/gWo2RAkIVrE).

### How can I turn off Tor?
You can turn off Tor in the Settings. Note that in this case you are still private, except when you coinjoin and when you broadcast a transaction. In the first case, the coordinator would know the links between your inputs and outputs based on your IP address. In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.

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
It is advisable to limit the recombining of mixed coins because it can only decrease the privacy of said coins. This links all the consolidated UTXOs in one transaction, creating only one output, which then clearly controls all these funds. That said, if you combine less than 1 BTC it is less likely to reveal your pre-coinjoin transaction history. The potential issue comes when you spend that coin. Depending on what you do with the coin you might reduce the privacy of the resulting change (if you send half your coin to an exchange for example, as they will know that you own the coin change). As a result it is best not to recombine ALL your mixed change, though you may wish to recombine some coins if you are planning on hodling for many years as this will reduce the fees required to spend the coins later.

If you would like to dive into the details of this topic, you can [read more here](https://old.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/) and [see more here](https://www.youtube.com/watch?v=Tk8-N1kHa4g).

### How can I send my anonset coins to my hardware wallet?
Most hardware wallets communicate with servers to provide you with your balance. This reveals your public key to the server, which damages your privacy - the hardware company can now theoretically link together all your addresses. As a result **it is not recommended** that you send your mixed coins to an address associated with your hardware wallet unless you are confident that you have set up your hardware wallet in a way that it does not communicate with a 3rd party server (see below). 

You can however manage your hardware wallet with the Wasabi interface. Alternatively you can use your hardware wallet with Electrum, which connects to your Bitcoin Core full node through [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server).

### What can I do with small change?
There are no hard and fast rules for what to do with the change. Generally try to avoid the change and use the Max button extensively at sending. The most problematic type of change is what has `anonymity set 1` (red shield.) You should treat it as a kind of toxic waste (handled with great care).

**Warning**
You want to avoid merging `anonymity set 1 coins` with `anonymity set > 1 coins` wherever possible, because this will link your `anonymity set > 1 coin` to the coin you merge it with. Note that, this is also true if you merge them in a mix, however that is slightly less problematic, because some blockchain analysis techniques become [computationally infeasible](https://www.comsys.rwth-aachen.de/fileadmin/papers/2017/2017-maurer-trustcom-coinjoin.pdf).

It is also important that you do not send different coins to the same receiving address (even if performed as separate transactions) as this will also link the coins together, damaging your privacy.

**Your Options**
- If you do not care about linking the history of the coins because they are all from the same source then you could combine them in a mix (queue all the change from the same source until you reach the minimum input required to mix, currently ~ 0.1 BTC).  
- Mix with [Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver).
- Donate them (e.g. [to the EFF](https://www.eff.org/))
- Spend them on something that is not a particular privacy risk (eg. gift cards).
- Open a lightning channel. 
- The ultimate solution is to 'close the loop' i.e. spend a change coin without merging it with other coins, do not generate it in the first place by sending whole coins. 

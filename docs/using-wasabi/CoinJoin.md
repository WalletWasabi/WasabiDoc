---
{
  "title": "CoinJoin",
  "description": "A step by step guide on how to do Wasabi CoinJoins. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# CoinJoin

A [CoinJoin](https://en.bitcoin.it/Privacy#CoinJoin) is a special Bitcoin transaction where several peers get together to literally join their coins in a single transaction.
They collaboratively build a transaction where each of them provides some coins as inputs, and fresh addresses as outputs.
The concept has been around since the early days of Bitcoin, and it was formalized by the great Greg Maxwell in [this awesome introductory thread](https://bitcointalk.org/index.php?topic=279249.msg2983902).
The goal is to gain privacy by breaking the link of which input "pays" which output, so that any of the outputs cannot be attributed to the owner of the input.
And therefor it is very important that the value of the outputs is exactly equal.
Wasabi enables trustless [meaning nobody can steal] and private [meaning even the coordinator cannot spy] Schnorr blind signature CoinJoin according to the [ZeroLink fungibility framework](https://github.com/nopara73/zerolink).

[[toc]]

## Doing CoinJoin step-by-step

1. Launch Wasabi, and open your wallet with the coins that you want to join.
Notice that it is not yet possible to CoinJoin from a hardware wallet, the keys must be "hot" on your computer.
Then open the `CoinJoin` tab from the right side menu.

![](/CoinJoin.png)

2. Select coins for joining by clicking the check box in the coin list.
You can select one or more coins, but when several are selected, then they can be linked and clustered by an attacker.
So choose carefully which coins you want others to know belong to the same entity (you).
You can select red shield coins, which are not private yet, but will gain anonymity set in this round of CoinJoin.
Also you can select green shield coins, who come from a previous round of CoinJoin, so that they gain even more anonymity set.
What is important is that the sum of coins registered have a value larger than the minimum level, which is currently roughly 0.1 bitcoin.

:::danger
Do not select coins with different colors (different anonymity sets) to CoinJoin in the same round.
Because the coins with higher anonymity set will loose some of their anonymity set to equal the anonymity set of the lower ones.
The best option would be to select coins with the same anonymity set.
:::

3. Specify anonymity set target.
Wasabi will automatically re-register your coin for the next round until this target is reached.
You can easily toggle between three levels by clicking on the shield.
You can also [change the value](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target) of the three shields in the settings.

![](/CoinJoinAnonsetTargetYellow.png)
![](/CoinJoinAnonsetTargetGreen.png)
![](/CoinJoinAnonsetTargetCheck.png)


4. Enter password and click `Enqueue Selected Coins`.
You only have to enter the password for the first round of mixing, the re-mix directly after is done without a password input.

![](/CoinJoinCoinsBeingCoinJoined.png)

5. Now wait until the CoinJoin is complete, the round starts either as soon as 100 peers have registered their coins, or after two hours since the last round.
From now on there is no more interaction required, just leave Wasabi running in the background of your computer.

![](/CoinJoinStatus.png)

6. When the CoinJoin is finished, and the CoinJoin transaction is broadcast, you will receive a fresh coin with a high anonymity set, as well as non-private change.


## ZeroLink protocol step-by-step

### Input registration

During the [input registration](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase), you select which coins you want to register for CoinJoin.
These coins need to be confirmed on the Bitcoin timechain, unless they are from a Wasabi CoinJoin and you re-register them.
In the background, Wasabi generates an input proof, a signature over a challenge message with the private key that locks up the coins.
With this the coordinator can verify that you actually own these coins.
Then your Wasabi client generates several fresh addresses, depending on the value of inputs registered.
The address of the anonset CoinJoin output must not be linked to your input, and thus it is [cryptographically blinded](https://en.wikipedia.org/wiki/Blind_signature) to incomprehensible cypher-text.
Since the change output can be easily linked to your input with [CoinJoin Sudoku](/FAQ/FAQ-GeneralBitcoinPrivacy.md#what-is-a-coinjoin-sudoku), this address is not blinded, but kept in clear-text.

Wasabi wallet generates a new [Tor identity](https://tb-manual.torproject.org/managing-identities/) called **Alice**, she is like a separate entity, and for every round you use a new Alice who is not linked to any previous connection.
With Alice, you send some information to the Wasabi coordinator server:

* The input coin that you want to register, together with the input proof signature.
* The clear text change address.
* The blinded anonset CoinJoin output.

The Wasabi coordinator now verifies that:

* There is still room for more peers on this CoinJoin.
* The blinded output has never been registered before.
* Each input has not been registered before, is not banned, is unspent, and that the input proof is valid.
* That the sum value of inputs is higher than the minimum required value of roughly 0.1 bitcoin.

Only when all these checks are valid does the coordinator sign the blinded output.
He does not know the address that he is signing, because it is blinded cypher-text.
This signature is proof that the coordinator has verified that Alice is not cheating.
The coordinator sends the signed blinded output back to Alice, together with a unique ID that is the identifier of this specific Alice in this round.

Alice has the secret parameters needed to unblind the signed blinded output.
With the magic of cryptography, she can reveal the clear-text address of the anonset CoinJoin output, however, the coordinator signature is still attached to this address.

The input registration phase ends when either, the number of registered inputs exceeds the number of required inputs [meaning anonymity set of 100 peers]; or when the last round was two hours ago.

@[youtube](v1fIjFR6e5Q)

### Connection confirmation

There are many Alices (different users) registering their inputs in the first phase, and this takes a while, up to two hours.
The connection confirmation phase makes sure that all of them are still online and ready to continue.
The coordinator verifies the unique ID from all the Alices, and when everyone is still communicating, then the coordinator returns the round hash of all the registered inputs.
The round is abandoned and re-started if too many Alices have dropped, for example when their Wasabi is shut down, or when their tor connection is temporarily broken.

The connection confirmation phase ends when all Alices have provided their inputs, or after a timeout when the online Alices are still larger than the required number of peers.

@[youtube](hhkL0QvIaGY)

### Output registration

Now that all peers are online, we are ready to proceed with the [output registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-output-registration-phase) of the round.
Your Wasabi client generates a completely new tor identity **Bob**, that is in no way tied to Alice.
Bob sends to the Wasabi coordinator:

* The clear-text address for the anonset CoinJoin output.
* The coordinator signature over that output.
* The round hash of all the inputs.

Because the coordinator can verify his own signature, he knows that this output was initially sent by any Alice [he cannot know which Alice exactly] and that he has verified that everything is in order.

It is very important that the coordinator cannot link Alice to Bob.
Because Alice has sent the clear-text input, and Bob sends the clear-text output.
So, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1.
Because Alice commits to the output by sending it blinded, and because Bob is a new tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but he cannot deanonymize the peers.

The output registration phase ends when the value of clear-text outputs plus change outputs is equal to the value of inputs, meaning all Bobs have registered.
If after a timeout not all outputs are registered, then this round is abandoned, the missing peers are banned, and a new round is started.

### Signing

Now that all inputs and outputs are registered, the Wasabi coordinator can start the [signing phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-signing-phase) by building the CoinJoin transaction with all the registered inputs, the anonset outputs, the change outputs and the coordinator fee output.
He sends this transaction to all the Alices of this round.
Each Alice verifies that:

* The committed round hash is equal to the hash of all the inputs in the proposed transaction.
* Her inputs and outputs are correctly included.

Then she signs the transaction with the private keys of her inputs.
Alice sends the uniqueID, the signature and the input index to the coordinator, who then verifies this information.

The signing phase ends when the coordinator has all the valid signatures for all the registered inputs.

### Broadcasting

The CoinJoin transaction is successfully built and signed, and it is now ready to be [broadcasted](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase) to the peers of the Bitcoin network.
The coordinator sends this transaction over the tor network to a random Bitcoin P2P node, and from there it is gossiped to other nodes and miners.
Wasabi is saving on mining fees by setting a confirmation target of roughly 12 hours, but you can re-register unconfirmed anonset outputs for the next round of CoinJoin.

## Wasabi CoinJoin examples

Here's a list of Wasabi CoinJoin examples and how they appear on an explorer:
- [e4a789d16a24a6643dfee06e018ad27648b896daae6a3577ae0f4eddcc4d9174](https://blockstream.info/tx/e4a789d16a24a6643dfee06e018ad27648b896daae6a3577ae0f4eddcc4d9174) | [.onion version](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/tx/e4a789d16a24a6643dfee06e018ad27648b896daae6a3577ae0f4eddcc4d9174)
- [c69aed505ca50473e2883130221915689c1474be3c66bcf7ac7dc0e26246afc8](https://blockstream.info/tx/c69aed505ca50473e2883130221915689c1474be3c66bcf7ac7dc0e26246afc8) | [.onion version](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/tx/c69aed505ca50473e2883130221915689c1474be3c66bcf7ac7dc0e26246afc8)
- [ef329b3ed8e790f10f0b522346f1b3d9f1c9d45dfa5b918e92d6f0a25d91c7ce](https://blockstream.info/tx/ef329b3ed8e790f10f0b522346f1b3d9f1c9d45dfa5b918e92d6f0a25d91c7ce) | [.onion version](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/tx/ef329b3ed8e790f10f0b522346f1b3d9f1c9d45dfa5b918e92d6f0a25d91c7ce)
- [f82206145413db5c1272d5609c88581c414815e36e400aee6410e0de9a2d46b5](https://blockstream.info/tx/f82206145413db5c1272d5609c88581c414815e36e400aee6410e0de9a2d46b5) | [.onion version](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/tx/f82206145413db5c1272d5609c88581c414815e36e400aee6410e0de9a2d46b5)
- [a7157780b7c696ab24767113d9d34cdbc0eba5c394c89aec4ed1a9feb326bea5](https://blockstream.info/tx/a7157780b7c696ab24767113d9d34cdbc0eba5c394c89aec4ed1a9feb326bea5) | [.onion version](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/tx/a7157780b7c696ab24767113d9d34cdbc0eba5c394c89aec4ed1a9feb326bea5)

## Read more

Want to read more about CoinJoins on Wasabi?
[CoinJoin FAQs](/FAQ/FAQ-UseWasabi.md#coinjoin) is here to help you.

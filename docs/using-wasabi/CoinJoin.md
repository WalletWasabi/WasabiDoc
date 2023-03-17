---
{
  "title": "Coinjoin",
  "description": "A detailed explanation about how WabiSabi coinjoins work under the hood. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Coinjoin

[[toc]]

## Introduction

A [coinjoin](https://en.bitcoin.it/Privacy#CoinJoin) is a special Bitcoin transaction where several peers get together to literally join their coins in a single transaction.
They collaboratively build a transaction where each of them provides some coins as inputs, and fresh addresses as outputs.
The concept has been around since the early days of Bitcoin, and it was formalized by the great Greg Maxwell in [this awesome introductory thread](https://bitcointalk.org/index.php?topic=279249.msg2983902).

The goal is to gain privacy by breaking the link of which input "pays" which output so that none of the outputs can be attributed to the owner of the input.
WabiSabi enables centrally coordinated coinjoins with variable amounts in a trustless (meaning nobody can steal) and private (meaning even the coordinator cannot spy) manner, as described in the [WabiSabi paper](https://eprint.iacr.org/2021/206).

## Coinjoin step-by-step

1. Launch Wasabi and open your wallet.
2. Wait. Wasabi coinjoins automatically in the background.
3. You're done! You can make private payments now.

### Music box

After opening a hot wallet, it will automatically start a countdown to start coinjoining (±10 minutes).
This and other coinjoin related information is shown in the music box.

![Music Box Countdown](/MusicBoxWaitingToAutoStartCoinJoin.png "Music Box Countdown")

After the _Waiting to auto-start coinjoin_ countdown is finished the wallet should start participating in the [coinjoin process](/using-wasabi/CoinJoin.md#wabisabi-protocol-step-by-step).

A blue aura will show up at the the bottom of the wallet, which indicates that the wallet is coinjoining, and the music box message will change.

![Music Box Waiting For Other Participants](/MusicBoxWaitingForOtherParticipants.png "Music Box Waiting For Other Participants")

After some time the blue aura will change to an orange one, this indicates that the coinjoin process is now in a critical phase.
Wasabi will prevent you from shutting down the app during the orange aura to not disrupt the coinjoin round.

![Music Box Coinjoin In Progress](/MusicBoxCoinjoinInProgress.png "Music Box Coinjoin In Progress")

If this is succesfull, the coinjoin is completed and the coinjoin [will show up in the history list](/FAQ/FAQ-UseWasabi.md#how-can-i-see-coinjoins-in-the-history-list).

![Music Box Success](/MusicBoxSuccessfulCoinjoin.png "Music Box Success")

Notice that the wallet might have to repeat the coinjoin steps multiple times before a successful coinjoin is created.
So it is possible that the aura colors will change without a successful coinjoin.
Please leave Wasabi Wallet running, and eventually there will be a successful coinjoin.

### More Details

By default, Wasabi starts automatically coinjoining your funds when the total value of the non-private coins is equal to or above the `Auto-start coinjoin threshold` (0.01 BTC by default).
`Automatically start coinjoin` can be disabled from the coinjoin settings.
In case you want to start the process manually, then click the play button; if you want to stop coinjoin, then click the pause button.

Once a coin achieves enough privacy (reaches the `Anonymity score target`), then the corresponding amount will show up in the wallet's main view as "PRIVATE".

Notice that it is not yet possible to coinjoin from a hardware wallet, the keys must be "hot" on your computer.

### Fees

A 0.3% coordinator fee will be taken from fresh coins bigger than 0.01 BTC.
Smaller ones don't pay coordinator fee at all, according to the _PlebsDontPay_ threshold.

The round starts either as soon as the number of registered inputs reaches the maximum, or after the input registration time is reached and as long as the minimum number of inputs is satisfied.
Just leave Wasabi running in the background of your computer, as coinjoining takes time.

Remixing is free, as well as coinjoining coins 1 hop from coinjoin, although, Bitcoin network fees still do apply.
So if you send a coinjoined coin and receive a change output, Wasabi will not charge you the coordinator fee for this change output again.
The recipient of the payment will not have to pay the coordinator fee, as long as he is making coinjoins with the same coordinator.

## WabiSabi protocol step-by-step

WabiSabi protocol requires 5 steps to successfully create and broadcast a coinjoin transaction to the bitcoin network.

### Input registration

During the [input registration](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase), the client selects how many and which coins will be registered for coinjoin.
These coins need to be confirmed on the Bitcoin blockchain.
In the background Wasabi generates input proofs, which are signatures over challenge messages, made with the private keys that lock up the coins.
With this, the coordinator can verify that you actually own these coins.

Wasabi wallet generates a new [Tor identity](https://tb-manual.torproject.org/managing-identities/) called **Alice** for each input.
She is a separate entity, and for every round you use a new Alice who is not linked to any other input or previous connection.
With Alice, you send the input ownership proof to the coordinator.

The Wasabi coordinator now verifies that:

* There is still room for more inputs on this coinjoin.
* The input has not already been registered, is not banned, is unspent, and that the input proof is valid.
* The input has at least 5000 sats value.
 
Only when all these checks are passed, does the coordinator allow this input to be registered.
The coordinator creates and sends a credential back to Alice, which has the same amount as the input minus fees.

The input registration phase ends when either: the number of registered inputs reaches the maximum, or when the time elapsed and the minimum number of inputs is satisfied.

### Connection confirmation

There are many users registering their inputs (with different Alice for each input) in the first phase, and this takes a while.
The connection confirmation phase makes sure that all of them are still online and ready to continue.
The coordinator verifies the unique ID from each Alice, and if everyone is still communicating.
The coordinator sends a zero value credential to each Alice for each successful connection confirmation.

The round is abandoned and re-started if too many Alices have dropped, for example when their Wasabi is shut down, or when their Tor connection is temporarily broken.
The connection confirmation phase ends when all Alices have provided their unique IDs, or after a timeout and the number of online Alices is still larger than the minimum number of inputs.

### Output registration

Now that all peers are online, we are ready to proceed with the [output registration phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-output-registration-phase) of the round.

First, every client needs to change the value of their credentials to the desired output values.
For this, the client presents to the coordinator two old credentials, and two newly created ones.
The coordinator does not know the amount value of any of those credentials, but it can verify, that the two pairs sum up to exactly the same value.
For example, a user can present one 5 btc and one 0 btc credential, and redeem one 2 btc and one 3 btc credential.
Or a user can present one 4 btc and one 1 btc credential, and redeem one 5 btc and one 0 btc credential.
After potentially many rounds of reissuance, each client has exactly the amount credential it desires.
Each of these reissuance is perfectly private, so the coordinator cannot link any of them to the same user.

Next, your Wasabi client generates multiple new Tor identities called **Bob**, which are in no way tied to any Alice.
Bob sends to the Wasabi coordinator:

* An unblinded credential signed by the coordinator
* A new unused bitcoin address

Because the coordinator can verify its own credential, it knows that this credential came into existence after an input of at least this much value was registered.
However, it cannot know which input exactly.

It is very important that the coordinator cannot link Alice to Bob.
Because Alice has sent the cleartext input, and Bob sends the cleartext output.
So, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1.
Because Alice received a credential from the coordinator, and because Bob is a new Tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but it cannot deanonymize the peers.

The output registration phase ends when the value of cleartext outputs is equal to the value of inputs, meaning that all Bobs have registered.
If after a timeout not all outputs are registered, then this round is abandoned, the missing inputs are temporarily banned, and a new round is started.

### Signing

Now that all inputs and outputs are registered, the coordinator can start the [signing phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-signing-phase), by building the coinjoin transaction with all the registered inputs and outputs.
It sends this transaction to all the Alices of the round.

Each Alice does the following:
- Verifies that her input and output are included.
- Signs the transaction with the private key of her input.
- Sends the signature to the coordinator, who verifies this information.

The signing phase ends when the coordinator has received all the valid signatures for all the registered inputs.

### Blame round

When the signing phase fails due to some Alices disrupting the round (failing to sign or send the signature to the coordinator), then the successful Alices will continue into a blame round.
The blame round will redo the coinjoin phases in order to create a successful coinjoin.

This mecanism also prevents coinjoins from being DDoS-ed because bad actors that are willingly disturbing rounds won't be able to join the blame round.
The client will keep going to the blame round until there are not enough Alices left to meet the minimum input count of 150.

The blame round is not a mandatory phase of the coinjoin process.
It was introduced in order to have a higher coinjoin success rate.

### Broadcasting

The coinjoin transaction has been successfully built and signed, and it is now ready to be [broadcast](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase) to the peers of the Bitcoin network.
The coordinator sends this transaction over the Tor network to random Bitcoin P2P nodes, and from there it is gossiped to other nodes and miners.
To save on mining fees, the target confirmation time is roughly 24 hours.

## Coinjoin Settings

Wasabi Wallet has automatic coinjoin.
It is done by the built-in automatic coinjoin "robot".
The robot contains instructions/settings, like how often and when to coinjoin.
The user is able to specify these settings in the `Coinjoin Settings` dialog, according to his own preferences.
The wallet ships with default settings, which are good enough for most users.

![Wasabi Wallet Coinjoin Settings](/CoinjoinSettings.png "Wasabi Wallet Coinjoin Settings")

:::tip Coinjoin settings are wallet specific
As the coinjoin settings apply per individual wallet, it is possible to have multiple wallets with different coinjoin settings.
:::

### Automatically start coinjoin

This setting is active by default.

When this is active, the wallet will automatically start coinjoining soon after the wallet is loaded.
The wallet will coinjoin until the `privacy progress` is 100%.

When this is not active, the user will have to manually press the Play button in order to start coinjoining.

![Coinjoin Settings Automatically Start Coinjoin](/CoinjoinSettingsAutomaticallyStartCoinjoin.png "Coinjoin Settings Automatically Start Coinjoin")

### Auto-start coinjoin threshold

The default Auto-start coinjoin threshold is 0.01 BTC.

The wallet will not automatically start coinjoining if the non-private balance is below the `Auto-start coinjoin threshold`, even if the `Automatically start coinjoin` is active.
In this case the user has to manually press Play to start coinjoining.
This setting can be used to prevent paying (relatively) high fees for smaller bitcoin amounts.

For example, if the non-private balance is 0.005 BTC and the Auto-start coinjoin threshold is 0.01 BTC, the user will have to manually press Play to start coinjoining. 

![Auto-start Coinjoin Threshold](/AutoStartCoinjoinThreshold.png "Auto-start Coinjoin Threshold")

:::tip It is OK to set the Auto-start coinjoin threshold to 0
If you have some small non-private left overs: you can coinjoin these by pressing Play, or wait until you receive more funds.
If you want to always automatically coinjoin ALL your coins, this can be set to 0 BTC.
Note that you might pay relatively more fees for coinjoining smaller amounts.
:::

### Coinjoin Strategy

Wasabi ships with 3 coinjoin strategies: `Minimize Costs`, `Maximize Speed`, and `Maximize Privacy`.
Each of these contain different configurations.
They determine the `Anonymity score target`, `Coinjoin time preference`, and if `Red coin isolation` is enabled or not.

![Coinjoin Strategy Settings](/CoinjoinStrategySettings.png "Coinjoin Strategy Settings")

The default strategy is `Maximize Speed`.

It is possible to make your own custom strategy by using the customize button. 

![Coinjoin Strategy](/CoinjoinStrategy.png "Coinjoin Strategy")

## Wasabi Coinjoin examples

Here's a list of Wasabi coinjoin examples and how they appear on a block explorer:

- [198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70](https://mempool.space/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70)
- [b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e](https://mempool.space/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e)
- [72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d](https://mempool.space/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d)
- [063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e](https://mempool.space/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e)
- [aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc](https://mempool.space/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc)

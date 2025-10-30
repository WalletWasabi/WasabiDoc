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

[![WabiSabi Coinjoin Explained in 3 Minutes](https://img.youtube.com/vi/dGATztn5Ql8/maxresdefault.jpg)](https://youtu.be/dGATztn5Ql8)

## Coinjoin step-by-step

1. Launch Wasabi and open your wallet.
2. Wait. Wasabi coinjoins automatically in the background.
3. You're done! You can make private payments now.

> A coordinator must be [configured](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#how-do-i-change-the-coordinator) before using coinjoin for the first time.

### Music box

After opening a hot wallet, the user needs to press Play to start coinjoin.
When `Automatically start coinjoin` is enabled in the wallet settings (disabled by default), it will automatically start a countdown to start coinjoining (1-3 minutes).
This and other coinjoin related information is shown in the music box.

![Music Box Countdown](/MusicBoxAwaitingToAutoStartCoinjoin.png "Music Box Countdown")

After the _Waiting to auto-start coinjoin_ countdown is finished the wallet should start participating in the [coinjoin process](/using-wasabi/CoinJoin.md#wabisabi-protocol-step-by-step).

A green aura will show up at the the bottom of the wallet, which indicates that the wallet is coinjoining, and the music box message will change.

![Music Box Awaiting Other Participants](/MusicBoxAwaitingOtherParticipants.png "Music Box Awaiting Other Participants")

After some time the green aura will change to an orange one, this indicates that the coinjoin process is now in a critical phase.
Wasabi will prevent you from shutting down the app during the orange aura to not disrupt the coinjoin round.

![Music Box Coinjoin In Progress](/MusicBoxCoinjoinInProgress.png "Music Box Coinjoin In Progress")

If this is succesfull, the coinjoin is completed and the coinjoin [will show up in the history list](/FAQ/FAQ-UseWasabi.md#how-can-i-see-coinjoins-in-the-history-list).

![Music Box Success](/MusicBoxCoinjoinSuccessful.png "Music Box Success")

Notice that the wallet might have to repeat the coinjoin steps multiple times before a successful coinjoin is created.
So it is possible that the aura colors will change without a successful coinjoin.
Please leave Wasabi Wallet running, and eventually there will be a successful coinjoin.

### More Details

`Automatically start coinjoin` can be enabled from the coinjoin settings.
If enabled, Wasabi starts automatically coinjoining your funds when the wallet balance is equal to or above the `Stop coinjoin threshold` (0.01 BTC by default).

In case you want to start the process manually, then click the play button; if you want to stop coinjoin, then click the pause button.

Once a coin achieves enough privacy (reaches the `Anonymity score target`), then the corresponding amount will show up in the wallet's main view as "PRIVATE".

Notice that it is not yet possible to coinjoin from a hardware wallet, the keys must be "hot" on your computer.

### Fees

As of Wasabi version [2.2.0.0](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.2.0.0), the Wasabi client will only participate in coinjoin rounds where it only pays for the mining fees for the blockspace it uses, like any other bitcoin transaction.

> In rare cases the output decomposition contains change (maximum of 10 000 sats per coinjoin), this leftover goes to the coordinator. This is because creating such small amounts would harm privacy and ends up being more expensive than just forfeiting it.

The coordinator sets the mining fee rate for the coinjoin transaction.

Users can set the maximum coinjoin mining fee rate they are willing to pay, as well as the minimum number of inputs the coinjoin transaction should have to participate.

The default is a maximum mining fee rate of 150 sat/vByte and a minimum input count of 21.

![Coinjoin Configurations](/SettingsCoinjoinConfigs.png "Coinjoin Configurations")

It will not participate in rounds where the coordinator charges a coordination fee.

> Previous versions also included the coordination fee concept, where the coordinator could charge a fee for providing the service.
This has now been removed, as it could be abused by malicious coordinators and/or would require some trust in the coordinator (like free remixes, as they are not enforced in the protocol).
The full explanation can be found [here](https://blog.wasabiwallet.io/killing-coordination-fee/). 

## WabiSabi protocol step-by-step

WabiSabi protocol requires 5 steps to successfully create and broadcast a coinjoin transaction to the bitcoin network.

The round starts either as soon as the number of registered inputs reaches the maximum, or after the input registration time is reached and as long as the minimum number of inputs is satisfied.

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
* The input has at least the [required minimum BTC amount](/FAQ/FAQ-UseWasabi.html#what-is-the-minimum-amount-required-to-coinjoin).
 
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
* A new (unused) bitcoin address

Because the coordinator can verify its own credential, it knows that this credential came into existence after an input of at least this much value was registered.
However, it cannot know which input exactly.

It is very important that the coordinator cannot link Alice to Bob.
Because Alice has sent the cleartext input, and Bob sends the cleartext output.
So, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1.
Because Alice received a credential from the coordinator, and because Bob is a new Tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but it cannot deanonymize the peers.

The output registration phase ends when the value of cleartext outputs is equal to the value of inputs, meaning that all Bobs have registered.
If after a timeout not all outputs are registered, then this round is abandoned, the missing inputs are temporarily banned, and a new round is started.

:::tip Possibility of Taproot outputs from coinjoin
Since Wasabi [version 2.0.3](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.3) coinjoin outputs can be SegWit v0 and SegWit v1 (Taproot).
If running this version or higher, the client registers the output type in a semi-random way (~50% chance of receiving Taproot output).
:::

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

This mechanism also prevents coinjoins from being DDoS-ed, because bad actors that are willingly disturbing rounds won't be able to join the blame round.
The client will keep going to the blame round until there are not enough Alices left to meet the minimum input count of blame rounds.

The blame round is not a mandatory phase of the coinjoin process.
It was introduced in order to have a higher coinjoin success rate.

### Broadcasting

The coinjoin transaction has been successfully built and signed, and it is now ready to be [broadcast](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase) to the peers of the Bitcoin network.
The coordinator sends this transaction over the Tor network to random Bitcoin P2P nodes, and from there it is gossiped to other nodes and miners.

## Coinjoin Settings

Wasabi Wallet has automatic coinjoin.
It is done by the built-in automatic coinjoin "robot".
The robot contains instructions/settings about how much and when to coinjoin.
The user is able to specify these settings in the _Coinjoin_ tab at the _Wallet Settings_, according to his own preferences.
The wallet ships with default settings, which are good enough for most users.

![Wasabi Wallet Coinjoin Settings](/CoinjoinSettings.png "Wasabi Wallet Coinjoin Settings")

:::tip Coinjoin settings are wallet specific
As the coinjoin settings apply per individual wallet, it is possible to have multiple wallets with different coinjoin settings.
:::

### Automatically start coinjoin

This setting is disabled by default.

When this is not enabled, the user will have to manually press the Play button in order to start coinjoining.

When this is enabled, the wallet will automatically start coinjoining soon after the wallet is loaded.
The wallet will coinjoin until the `privacy progress` is 100%.

![Coinjoin Settings Automatically Start Coinjoin](/CoinjoinSettingsAutomaticallyStartCoinjoin.png "Coinjoin Settings Automatically Start Coinjoin")

### Stop coinjoin threshold

The default `Stop coinjoin threshold` is 0.01 BTC.

The wallet will automatically stop/not start coinjoining if the wallet balance is below the `Stop coinjoin threshold`, even if the `Automatically start coinjoin` is enabled.
In this case the user has to manually press Play to start coinjoining.
This setting can be used to prevent paying (relatively) high fees for smaller bitcoin amounts.

For example, if the confirmed balance is 0.005 BTC and the `Stop coinjoin threshold` is 0.01 BTC, the user will have to manually press Play to start coinjoining.

![Stop Coinjoin Threshold](/StopCoinjoinThreshold.png "Stop Coinjoin Threshold")

:::tip It is OK to set the Stop coinjoin threshold to 0
If you have some small non-private left overs: you can coinjoin these by pressing Play, or wait until you receive more funds.
If you want to always automatically coinjoin ALL your coins, this can be set to 0 BTC.
Note that you might pay relatively more fees for coinjoining smaller amounts.
:::

### Coinjoin Strategy

Wasabi ships with 3 coinjoin strategies: `Enhance Privacy`, `Default Strategy`, and `Reduce Costs`.
Each of these contain different configurations, as shown in [this table](/FAQ/FAQ-UseWasabi.md#what-are-the-differences-settings-per-coinjoin-strategy).
They determine if `Non-private coin isolation` is enabled or not and the `Anonymity score target`.

Newly created wallets automatically have the `Default Strategy` selected, this can be changed at the _Coinjoin_ tab at _Wallet Settings_.

![Coinjoin Strategy](/CoinjoinStrategy.png "Coinjoin Strategy")

It is possible to make your own custom strategy by changing the settings manually. 

![Coinjoin Strategy Settings](/CoinjoinStrategySettings.png "Coinjoin Strategy Settings")

## Wasabi Coinjoin examples

Here's a list of Wasabi coinjoin examples and how they appear on a block explorer:

- [198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70](https://mempool.space/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70)
- [b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e](https://mempool.space/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e)
- [72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d](https://mempool.space/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d)
- [063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e](https://mempool.space/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e)
- [aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc](https://mempool.space/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc)

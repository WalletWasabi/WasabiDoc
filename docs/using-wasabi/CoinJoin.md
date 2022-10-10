---
{
  "title": "Coinjoin",
  "description": "A detailed explanation about how WabiSabi coinjoins work under the hood. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Coinjoin

A [coinjoin](https://en.bitcoin.it/Privacy#CoinJoin) is a special Bitcoin transaction where several peers get together to literally join their coins in a single transaction.
They collaboratively build a transaction where each of them provides some coins as inputs, and fresh addresses as outputs.
The concept has been around since the early days of Bitcoin, and it was formalized by the great Greg Maxwell in [this awesome introductory thread](https://bitcointalk.org/index.php?topic=279249.msg2983902).

The goal is to gain privacy by breaking the link of which input "pays" which output so that none of the outputs can be attributed to the owner of the input.
WabiSabi enables centrally coordinated coinjoins with variable amounts in a trustless (meaning nobody can steal) and private (meaning even the coordinator cannot spy) manner, as described in the [WabiSabi paper](https://eprint.iacr.org/2021/206).

[[toc]]

---

## Coinjoin step-by-step

1. Launch Wasabi and open your wallet.
2. Wait.
3. You're done! Wasabi coinjoins automatically in the background. You can make private payments now.

### More details

At first wallet load, you can choose one of the coinjoin strategy profiles:

![Coinjoin Strategy](CoinjoinStrategy.png)

By default, Wasabi starts automatically coinjoining received funds when the total value of the non-private coins is equal to or above the `Auto-start coinjoin threshold` (0.01 BTC by default).
`Automatically start coinjoin` can be disabled from the coinjoin settings.
In case you want to start the process manually, then click the play button; if you want to stop coinjoin, then click the pause button.

Notice that it is not yet possible to coinjoin from a hardware wallet, the keys must be "hot" on your computer.

Once a coin achieves enough privacy, the corresponding amount will show up in the software's main view as "PRIVATE".

### Fees

A 0.3 % coordinator fee will be taken from fresh coins bigger than 0.01 BTC.
Smaller ones don't pay coordinator fee at all, according to the _PlebsDontPay_ threshold.

The round starts either as soon as enough inputs have been registered, or after the input registration time is reached and as long as the minimum number of inputs is satisfied.
Just leave Wasabi running in the background of your computer, as coinjoining takes time.

Remixing is free, as well as coinjoining coins 1 hop from coinjoin, although, Bitcoin network fees still do apply.
So if you send a payment and receive a change output, Wasabi will not charge you the coordinator fee for this change output again.
The recipient of the payment will not have to pay the coordinator fee, as long he is making coinjoins with the same coordinator.

## WabiSabi protocol step-by-step

WabiSabi protocol requires 5 steps to successfully create and broadcast a coinjoin transaction to the bitcoin network.

### Input registration

During the [input registration](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-input-registration-phase), the client selects how many and which coins will be registered for coinjoin.
These coins need to be confirmed on the Bitcoin blockchain.
In the background Wasabi generates input proofs, a signatures over a challenge message with the private key that locks up the coins.
With this, the coordinator can verify that you actually own these coins.

Wasabi wallet generates a new [Tor identity](https://tb-manual.torproject.org/managing-identities/) called **Alice** for each input.
She is a separate entity, and for every round you use a new Alice who is not linked to any other input or previous connection.
With Alice, you send the input and input ownership proof to the coordinator.

The Wasabi coordinator now verifies that:

* There is still room for more inputs on this coinjoin.
* The input has not been registered before, is not banned, is unspent, and that the input proof is valid.
* The input has more than 5000 sats value.
 
Only when all these checks are valid does the coordinator allow the input.
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

First, every client needs to change the value of their credential, to the desired output value.
For this, the client presents to the coordinator two old credentials, and two newly created ones.
The coordinator does not know the amount value of any of those credentials, but it can verify, that the two pairs sum up to exactly the same value.
For example, a user can present one 5 btc and one 0 btc credential, and redeem one 2 btc and one 3 btc credential.
Or a user can present one 4 btc and one 1 btc credential, and redeem one 5 btc and one 0 btc credential.
After potentially many rounds of reissuance, each client has exactly the amount credential it desires.
Each of these reissuance is perfectly private, so the coordinator cannot link any of them to the same user.

Next, your Wasabi client generates a completely new Tor identity **Bob**, who is in no way tied to Alice.
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
If after a timeout not all outputs are registered, then this round is abandoned, the missing peers are temporarily banned, and a new round is started.

### Signing

Now that all inputs and outputs are registered, the coordinator can start the [signing phase](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-signing-phase), by building the coinjoin transaction with all the registered inputs and outputs.
It sends this transaction to all the Alices of the round.
Each user verifies that:

* All inputs are included
* All outputs are included

She then signs the transaction with the private keys of her inputs.
Alice sends the signature to the coordinator, who then verifies this information.

The signing phase ends when the coordinator has received all the valid signatures for all the registered inputs.

### Broadcasting

The coinjoin transaction has been successfully built and signed, and it is now ready to be [broadcasted](/FAQ/FAQ-UseWasabi.md#what-is-happening-in-the-broadcasting-phase) to the peers of the Bitcoin network.
The coordinator sends this transaction over the Tor network to random Bitcoin P2P nodes, and from there it is gossiped to other nodes and miners.
Wasabi saves on mining fees by setting a confirmation target of roughly 24 hours.

## Wasabi coinjoin examples

Here's a list of Wasabi coinjoin examples and how they appear on a block explorer:

- [198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70](https://mempool.space/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70)
- [b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e](https://mempool.space/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e)
- [72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d](https://mempool.space/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d)
- [063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e](https://mempool.space/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e)
- [aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc](https://mempool.space/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc) | [.onion version](http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc)

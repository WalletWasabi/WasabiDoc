---
{
  "title": "Scenarios",
  "description": "Here are listed all the main practical scenarios that a user could face when dealing with Wasabi and Bitcoin privacy concepts, especially the first time. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Scenarios

This is an archive containing some of the scenarios that many (aspiring) Wasabikas face frequently when dealing with Wasabi and Bitcoin privacy & security concepts, especially the first time.

These scenarios will guide you to obtain state-of-the-art privacy & security in the Bitcoin world.


## Hardware Wallets

:::details
### I don't have an hardware wallet right now and I don't know which is the best from a privacy & security point of view

While Wasabi is nowhere affiliated with any hardware wallet company, the ColdCard from Coinkite should be the wallet of choice.
Just to name a few features:
- It is Open source;
- Dedicated Secure Element used only to store private keys;
- It is Bitcoin only;
- It could be used as an airgappeded wallet, without connecting it to a computer for full operation: from seed generation, to transaction signing;
- Uses PSBT ([BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) natively;
- It supports duress wallet features;
- It provides defenses to phishing attacks;
- Encrypted backups;
- Multisig support;
- Dice rolled entropy...

... and many more.

Read more here: [Coinkite ColdCard](https://coldcardwallet.com/)
:::

:::details
### I am using a Ledger Hardware wallet with Ledger Live software and I learnt that this is not the right choice (at least for now)

Using a Ledger hardware wallet with the provided Ledger Live software is a bad thing as you communicate all of your xpub keys to Ledger servers.
This way Ledger could know and share your bitcoin balance, and you obviously don't want that.

This is of course not only related to Ledger ecosystem but also to other ones that behave similarly.

To regain your privacy it is advisable to do the following:
1. Get all the coins from the Ledger onto a Wasabi hot wallet for coin joining;
2. Delete the seed on the Ledger (making sure to backup it);
3. Setup a new wallet on the Ledger directly using Wasabi this time;
4. Connect the Ledger only to Wasabi (or your Electrum Personal Server);
5. Move your funds from the Wasabi hot wallet, after coin join, to your Ledger.

:::


## Full Node

:::details
### I want to setup my own full node, but I don't know how to do it

Running your own full node is the only way to have full control and to ensure that all the rules of Bitcoin are being followed.

Also, running any kind of Bitcoin wallet that does not require you to run a full node means that you have to place a certain degree of trust in the service provider, something that shouldn’t be necessary with Bitcoin.

At the end, using a centralized, lightweight or even SPV wallet will never be as private as running a full node. Since you rely on third-party servers to broadcast your transactions for you, those servers will be aware of which addresses belong to you.

Luckily, setting up and running your own full node is really simple and unexpensive now.

Following are listed some of the most reliable projects:
- [Raspiblitz](https://github.com/rootzoll/raspiblitz)
- [Nodl](https://www.nodl.it/)
- [myNode](https://mynodebtc.com/)
- [Casa](https://keys.casa/lightning-bitcoin-node/)

:::


## Blockchain Explorer

:::details
### I want to take a look at my transactions and addresses on a blockchain explorer

If you do that by simply going to your favourite blockchain explorer, you will link your IP address with your transactions and addresses, and this is not good for your privacy.

Also checking your deanonymized UTXOs this way could harm your privacy.

The best way to do that is using your own full node and querying it directly. As an example, for Raspiblitz you could use this [BTC-RPC explorer](https://github.com/openoms/raspiblitz-extras#btc-rpc-explorer).

:::


## Spending bitcoin

:::details
### I want to spend some of my bitcoin but I am not sure which is the most secure and privacy aware way to do that

It might be a problem if you send coins received for a months worth of labor, in exchange for a coffee in Bob's store. Now Bob could know the amount you get payed, and this should be none of his business.

You can protect yourself against this through coin join, so that Bob can not know your previous transactions.

Then make sure to not spend UTXOs related to different people / interests together. That is, use for example different UTXOs between the ones for shopping than the ones destinated to charities.

:::


## Buying & selling bitcoin

:::details
### I want to get rid of some (or all) of my fiat money and buy bitcoin in the more private way possible

First of all, congratulations! It is always a good thing and a good feeling getting rid of shitcoins.


Main rule is to not use any exchange (Coinbase, Binance, Bitstamp, Kraken, etc) as they must comply to several KYC rules that are enemies to our privacy.


You can use a decentralized P2P market like Bisq that requires instead no registration.

Another way could be to exchange fiat for bitcoin face-to-face, during one of the several Bitcoin meetups that happen around the world.

Read more here: [Bisq](https://bisq.network/)
:::

:::details
### Sadly I want to sell some of my bitcoin but at least I want to do that in the more private way possible

Spending bitcoin is a good thing, exchanging it for fiat or other shitcoins is quite never a good idea.

Think twice about that!

If you are sure you want to proceed, use a decentralized platform like Bisq, as explained above.

:::


## Funds on exchange

:::details
### I have some bitcoin on an exchange and I would like to regain my privacy

By having bought (or sold) bitcoin at least once on an exchange means that you have already lost some of your privacy as you passed through KYC processes
forced by these platforms.

What you can do now is:
1. Create a new separate Wasabi hot wallet just for the exchange funds and make backups of both mnemonic and password;
2. Do coin join with enough rounds;
3. Move your funds to cold storage with 1 input -> 1 output transactions.

:::


:::details
### I did coin join and then I transferred my deanonymized coins to an exchange

Thus you basically frustrated your previous efforts.

The exchange now knows your xpub keys, so it could know all of your past and future transactions.

Repeat the steps explained in the previous scenario and do not use an exchange again!

:::


## Learning Bitcoin

:::details
### Before diving into privacy topics, I think I need to learn more about Bitcoin

That's really a great idea!

There are several resources online to learn more about Bitcoin.

One of the most comprehensive is the one provided by the awesome [\@6102bitcoin](https://twitter.com/6102bitcoin): [Bitcoin-only](https://bitcoin-only.com/)

:::

-----

If you have a scenario of interest that is not already discussed here, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).

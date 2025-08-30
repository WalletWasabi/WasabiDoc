---
{
  "title": "Testnet",
  "description": "A guide on how to use Wasabi on testnet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Testnet

[[toc]]

## Bitcoin testnet

The Bitcoin testnet is a network that behaves almost exactly the same as the Bitcoin mainnet.
The major difference is that the bitcoin on the testnet do not have any economical value, they should not be used to buy or sell goods and services.
This makes the network very useful for testing software and features, because there is no risk of losing precious "real" bitcoin from the main network.

Wasabi uses testnet4.

:::tip Don't loose your bitcoin
When testing cutting edge software like Wasabi, use testnet to ensure that your mistakes don't cost you money!
:::

## Activating testnet in Wasabi

First, open your Wasabi Wallet and click the `Settings` button in the bottom left corner.

![Settings button](/SettingsButton.png "Settings button")

Select the `Bitcoin` tab, click on the `Network` dropdown and select `TestNet4`.

![Settings Network Dropdown](/SettingsNetwork.png "Settings Network Dropdown")

Restart Wasabi to activate the change.
After the restart, you should see the `TestNet4` indicator in the top right corner of the wallet.

![Bitcoin testnet network activated in Wasabi Wallet](/TestNetIndicator.png "Bitcoin testnet network activated in Wasabi Wallet")

When Wasabi is started in testnet, it will fetch testnet4 block filters from the backend.
For the first start, this may take a couple of minutes.

After the testing, set the settings back to mainnet, and close Wasabi.
It will load on mainnet the next time you start it.

:::tip 
Alternatively, you can edit the `network` file in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
Valid options are: `"Main"`, `"TestNet4"`, or `"RegTest"`.
The changes will apply on the next launch of Wasabi.
:::

## Loading a wallet

Wasabi differentiates between Mainnet and TestNet wallets.
Meaning that a TestNet wallet will not show up when the Main network is active, and vice versa.
You have to create a new wallet when you activate TestNet for the first time.

## Receiving testnet bitcoin

You can [generate a receive address](/using-wasabi/Receive.md) the same way as on mainnet, by labeling the known by entities in the `Receive` dialog.
Notice that testnet SegWit addresses start with `tb1q...`, and not with `bc1q...` as mainnet addresses.

Because testnet bitcoin don't have economical value, they are gifted by different sources.
There are faucets like [this one](https://faucet.testnet4.dev/) or [https://coinfaucet.eu/en/btc-testnet4/](https://coinfaucet.eu/en/btc-testnet4/).
You may also ask other developers if they have a couple of spare testnet coins available.

## Coinjoin on testnet

[CoinJoin](/using-wasabi/CoinJoin.md) on testnet can be as easy as on mainnet.
However, not all mainnet coordinators also run a testnet coordinator.
The testnet coordinator that the Wasabi team uses can be used for testing: `https://api.wasabiwallet.co/`.
Sometimes there are other testers doing a coinjoin, but if you are the only one at the moment, then load two wallets and start coinjoining in both of them or ask someone to join you.

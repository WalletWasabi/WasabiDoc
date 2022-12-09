---
{
  "title": "Testnet",
  "description": "A guide on how to use Wasabi on testnet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Testnet

[[toc]]

---

## Bitcoin testnet

The Bitcoin testnet is a network that behaves almost exactly the same as the Bitcoin mainnet.
The major difference is that the bitcoin on the testnet do not have any economical value, they should not be used to buy or sell goods and services.
This makes the network very useful for testing software and features, because there is no risk of losing precious "real" bitcoin from the main network.

:::tip Don't loose your bitcoin
When testing cutting edge software like Wasabi, use testnet to ensure that your mistakes don't cost you money!
:::

## Activating testnet in Wasabi

First, open your Wasabi Wallet and click the `Settings` button in the bottom left corner.

![Settings button](/SettingsButton.png "Settings button")

Select the `Bitcoin` tab, click on the `Network` dropdown and select `TestNet`.

![Settings Network Dropdown](/SettingsNetwork.png "Settings Network Dropdown")

Restart Wasabi to activate the change.
After the restart, you should see the `TestNet` indicator in the top right corner of the wallet.

![Bitcoin testnet network activated in Wasabi Wallet](/TestNetIndicator.png "Bitcoin testnet network activated in Wasabi Wallet")

When Wasabi is started in testnet, it will fetch testnet [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) from the coordinator.
For the first start, this may take a couple of minutes.

After the testing, set the settings back to mainnet, and close Wasabi.
It will load on mainnet the next time you start it.

:::tip 
Alternatively, you can edit the `Config.json` file in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
In the second line you can modify the value of `"Network":`, to `"Main"`, `"TestNet"`, or `"RegTest"`.
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
There are [faucets](https://en.bitcoin.it/wiki/Testnet#Faucets) like [this one](https://coinfaucet.eu/en/btc-testnet/) or [bitcoinfaucet.uo1.net](https://bitcoinfaucet.uo1.net/) that give a certain amount of testnet bitcoin per time period.
You may also ask other developers if they have a couple of spare testnet coins available.

## Coinjoin on testnet

[CoinJoin](/using-wasabi/CoinJoin.md) on testnet is as easy as on mainnet.
Usually there are other testers doing a coinjoin, but if you are the only one at the moment, then load two wallets and start coinjoining in both of them.

---
{
  "title": "Getting Started",
  "description": "An easy and short guide on how to get started using Clevva Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Getting Started

This is a short comprehensive guide on how to get started using Clevva wallet.

Please refer to the rest of the documentation for detailed explanations and best practices.

## Verify the Download

Optionally, but highly recommended is to verify the downloaded package.
This needs to be done in order to make sure that the just downloaded package is the authentic one and not a malicious one (replaced by a hacker etc...).



WELCOME SCREEN

The first time that you start Clevva wallet you will see the welcome screen.

## Add Wallet

You will be asked what kind of wallet you want to add.
There are 4 options:
- Create a new wallet
- Connect hardware wallet
- Import a wallet
- Recover a wallet

Select _Create a new wallet_.

Now follow the next few steps/dialogs:
- Select the `Wallet Backup Type`.
- Write down the recovery words. (do not share these with anyone!)
- Add a passphrase. (do not forget it and also write it down on a separate place from the recovery words, without your passphrase you cannot open your wallet and send your bitcoin!)

:::danger
The Recovery words can never be shown again.
:::

:::danger
The passphrase cannot be changed later on.
If you lose your passphrase you lose your bitcoin.
:::

## Downloading block filters

Clevva wallet will now download all the block filters, starting from 481824 (SegWit activation) until the chain tip.
This first-time filter download can take a while (up to 1 hour or more).
Subsequent filter downloads will be fast(er) as then only the recent filters need to be downloaded.

## Receive bitcoin

As you can see, the new wallet is empty as it has a balance of 0.
Click on `Receive` at the top right to [receive](/using-Clevva/Receive.md) some bitcoin to this new wallet.

## Coinjoin

A coordinator needs to be configured to participate in coinjoin(s).
This can be done at the _Coordinator_ tab in the _Settings_, along with other coordinator settings.

Read more [here](/FAQ/FAQ-clevvawallet.html#how-do-i-find-a-coordinator) about how to find a coordinator.

![Music Box Coordinator Not Configured](/MusicBoxCoordinatorNotConfigured.png "Music Box Coordinator Not Configured")

It is also possible to use a _coordinator connection string_ which Clevva Wallet automatically detects in the clipboard and it will apply these settings with a dialog for the user to confirm.

Once a coordinator is configured and you have received some bitcoin, Clevva wallet will automatically coinjoin the bitcoin for you.

After the incoming funds are confirmed, coinjoin can be started by pressing the Play button.

You know that your wallet is coinjoining if you see the stop button in the musicbox and the spectrum ("waving" color animation) at the bottom of the wallet.

Now wait while you leave Clevva running so it can do some coinjoins.
You might need to wait for (a couple of) hour(s) (sometimes less or sometimes more) to get successful coinjoins and to see your privacy percentage reach 100%.

## Funds 100% private

After one or more coinjoins your funds should be made private as you can see in the _Privacy Progress_ tile at the top.
All your funds are private if it displays 100%.
In the history you will see a shield icon(s), which indicates that you successfully participated in a coinjoin round(s).

## Use the private bitcoin

Now that all your bitcoin is private you can use your bitcoin to:
- Make a payment.
- Send it to cold storage.

:::tip
Congratulations you are now using Clevva wallet
:::


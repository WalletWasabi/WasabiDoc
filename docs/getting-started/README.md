---
{
  "title": "Getting Started",
  "description": "An easy and short guide on how to get started using Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Getting Started

This is a short comprehensive guide on how to get started using Wasabi.

Please refer to the rest of the documentation for detailed explanations and best practices.

[[toc]]

## Download Wasabi

Download Wasabi from the official website [wasabiwallet.io](https://wasabiwallet.io) or [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion) if you're using the Tor Browser.

## Verify the Download

Optionally, but highly recommended is to verify the downloaded package.
This needs to be done in order to make sure that the just downloaded package is the authentic one and not a malicious one (replaced by a hacker etc...).

How to do this depends on the desktop operating system, the detailed guides can be found here: [Windows](/using-wasabi/InstallPackage.md#windows), [Debian/Ubuntu](/using-wasabi/InstallPackage.md#debian-and-ubuntu), [Other Linux](/using-wasabi/InstallPackage.md#other-linux), [macOS](/using-wasabi/InstallPackage.md#macos)

## Install Wasabi

The downloaded Wasabi package needs to be installed on the computer so the application can be used.

How to do this depends on the desktop operating system, the detailed guides can be found here: [Windows](/using-wasabi/InstallPackage.md#windows), [Debian/Ubuntu](/using-wasabi/InstallPackage.md#debian-and-ubuntu), [Other Linux](/using-wasabi/InstallPackage.md#other-linux), [macOS](/using-wasabi/InstallPackage.md#macos)

## Welcome Screen

The first time that you start Wasabi, you will be welcomed with information about the app.
Read it and continue.

## Add Wallet

You will be asked what kind of wallet you want to add.
There are 4 options:
- Create a new wallet
- Connect hardware wallet
- Import a wallet
- Recover a wallet

Select _Create a new wallet_.

Now follow the next few steps/dialogs: 
- Write down the recovery words. (do not share these with anyone!)
- Add a passphrase. (do not forget it and also write it down on a separate place from the recovery words, without your passphrase you cannot open your wallet and send your bitcoin!)
- Select the coinjoin strategy: we select the default one `Maximize Speed`.

:::danger
The Recovery words can never be shown again.
:::

:::danger
The passphrase cannot be changed later on.
If you lose your passphrase you lose your bitcoin.
:::

## Receive bitcoin

As you can see, the new wallet is empty as it has 0.00000000 BTC.
Click on `Receive` at the top right to [receive](/using-wasabi/Receive.md) some bitcoin to this new wallet.

## Coinjoin

After you have received some bitcoin, Wasabi will automatically coinjoin the bitcoin for you.

Coinjoin will automatically start after the incoming funds are confirmed.
You need to manually press the play button in the musicbox (at the bottom of the wallet) if you received less than 0.01 BTC.

You know that your wallet is coinjoining if you see the stop button in the musicbox and the spectrum ("waving" color animation) at the bottom of the wallet.

Now wait while you leave Wasabi running so it can do some coinjoins.
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
Congratulations you are now using Wasabi!
:::


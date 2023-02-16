---
{
  "title": "Getting Started",
  "description": "An easy and short guide on how to get started using Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Getting Started

This is an easy and short guide on how to get started using Wasabi.
Please refer to the rest of the documentation for detailed explanations and best practices.

## Download Wasabi

Download Wasabi from the official website [wasabiwallet.io](https://wasabiwallet.io) or [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/) if you're using the Tor Browser.

## Verify the Download

Optionally, but highly recommended is to verify the downloaded package.
This needs to be done in order to make sure that the just downloaded package is the authentic one and not a malicious one (replaced by a hacker etc...).

How to do this depends per desktop operating system, the detailed guides can be found here: [Windows](/using-wasabi/InstallPackage.md#windows), [Debian/Ubuntu](/using-wasabi/InstallPackage.md#debian-and-ubuntu), [Other Linux](/using-wasabi/InstallPackage.md#other-linux), [macOS](/using-wasabi/InstallPackage.md#macos)

## Install Wasabi

The downloaded Wasabi package needs to be installed on the computer so the application can be used.

How to do this depends per desktop operating system, the detailed guides can be found here: [Windows](/using-wasabi/InstallPackage.md#windows), [Debian/Ubuntu](/using-wasabi/InstallPackage.md#debian-and-ubuntu), [Other Linux](/using-wasabi/InstallPackage.md#other-linux), [macOS](/using-wasabi/InstallPackage.md#macos)

## Start Wasabi

The first start might be different as there is not yet an application to click on to start Wasabi.
So the first time you might need to do a few extra steps.
Next time Wasabi can be launched just by clicking the application icon.

How to do this depends per desktop operating system, the detailed guides can be found here: [Windows](/using-wasabi/InstallPackage.md#windows), [Debian/Ubuntu](/using-wasabi/InstallPackage.md#debian-and-ubuntu), [Other Linux](/using-wasabi/InstallPackage.md#other-linux), [macOS](/using-wasabi/InstallPackage.md#macos)

## Welcome Screen

The first time that you start Wasabi, you will be welcomed with information about the app.
Read it and continue.

## Add Wallet

You will be asked what kind of wallet you want to add.
There are 4 options:
-Create a new wallet
-Connect hardware wallet
-Import a wallet
-Recover a wallet

Select _Create a new wallet_.

Now follow the next few steps/dialogs: 
-give the wallet a name
-write down the recovery words (do not share these with anyone!)
-add a password (do not forget it and also write it down on a separate place from the recovery words, without your password you cannot send you bitcoin!)
-select the coinjoin strategy: we select the default one `Maximize Speed`.

:::danger
The Recovery words can never be shown again.
:::

:::danger
The password cannot be changed later on.
If you lose your password you lose your bitcoin.
:::


## Open Wallet

Now open the wallet by entering the password.

## Receive bitcoin

As you can see, the new wallet is empty as it has 0.00000000 BTC.
Click on Receive at the top right to [receive](/using-wasabi/Receive.md) some bitcoin to this new wallet.

## Coinjoin

After you have received some bitcoin, Wasabi will automatically coinjoin the bitcoin for you.
Coinjoin will automatically start after the incoming funds are confirmed.
You need to manually press Play in the musicbox (at the bottom of the wallet) if you received less than 0.01 BTC.
You know that your wallet is coinjoining if you see the stop button in the musicbox and the spectrum ("waving" color animationn) at the bottom of the wallet.
Now wait while you leave Wasabi running so it can do some coinjoins.
You might need to wait an (couple) hour(s) (sometimes less or sometimes more) to get succesfull coinjoins and see your privacy percentage increase/reach 100%.

## Funds 100% private

After one or more coinjoins your funds should be made private as you can see in the _Privacy Progress_ tile at the top.
All your funds are private if it displays 100%.
In the history you will see a shield icon, this indicates that you participated in a coinjoin.

## Use the private bitcoin

Now that all your bitcoin is private you can use your bitcoin to:
-make a payment
-send it to cold storage

or leave them in Wasabi for a while.

:::tip
Congratulations you are now using Wasabi!
:::

###
Make sure to check the rest of the documentation for explanations and (privacy) best practices.

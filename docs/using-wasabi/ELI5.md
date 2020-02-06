---
{
  "title": "Explain Wasabi like I'm 5",
  "description": "Explaining very simply how to install and start Wasabi, as well as receiving, sending and coinjoining. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Explain Wasabi like I'm 5

[[toc]]

## Introduction

Wasabi is a Bitcoin wallet, tailor-made to protect your privacy.
It is a piece of software that runs on your computer and helps you to manage your bitcoins.
You can generate a new set of private keys, or import already existing ones.
With Wasabi you can receive bitcoins to your full control, and you can send them to someone else without permission.
There is also a powerful CoinJoin feature to help obfuscate your transaction history.

## Installing Wasabi

Installing Wasabi is super easy.
Go to the official website [wasabiwallet.io](https://wasabiwallet.io), scroll down and download the version for your operating system.
You can then install Wasabi as you would do any other software on your computer.

See [this chapter](/using-wasabi/InstallPackage.md) for a detailed step-by-step tutorial for all operating systems, and also how to verify the PGP signature.

## Generating a Wallet

When for the first time you start Wasabi, it will open in the tab to generate a new wallet.
You can set a unique name for the wallet so that you remember what it is for.
Choose a very secure password, as this encrypts the secrets, and should not be guessed by others.
You will always need this password when you want to spend your bitcoins, so take great care to back it up properly.
In the next step, Wasabi will show your 12 recovery words, these must be carefully backed up also, as they can help you access your bitcoins when your computer breaks.

See [this chapter](/using-wasabi/WalletGeneration.md) for more information on how to securely generate your wallet.

## Receiving bitcoin

In order to receive your first bitcoins, you can generate an address in the `Receive` tab.
But before you must label it with the observer who knows that this address is yours.
For example, if Alice pays you back for last nights pizza, then the label is `Alice`.
This is an important feature so that you know which coin is from whom, and it will help with your privacy in the future.

See [this chapter](/using-wasabi/Receive.md) for a tutorial on how to properly label your addresses and receive bitcoin.

## CoinJoin with Wasabi

If you don't like that your employer knows about where you spend your money, or that a merchant can find out how much money you have, then you should CoinJoin your bitcoin, as this breaks the transaction history.
Although the CoinJoin protocol is a bit complex, it is very easy to use in Wasabi.
Go to the `CoinJoin` tab, select the coins you want to make private, type in your password and click enqueue.
Now have a little patience, within a short while you should have sufficient anonymity set to protect your privacy.

See [this chapter](/using-wasabi/CoinJoin.md) for a thorough analysis of CoinJoin, details on the Wasabi implementation and best practices how to use it properly.

## Sending bitcoin

In the Wasabi `Send` tab you can give your bitcoins to someone else, or send them to another wallet of yours.
Select the coins which you want to spend, paste the address of the receiver, label the observers who know of this transaction, specify the amount the receiver should get and select how fast you want the transaction to confirm.
Verify that everything is correct, then type in your password and hit the `Send` button.

See [this chapter](/using-wasabi/Send.md) for more details on sending bitcoins and the privacy nuances of coin control.

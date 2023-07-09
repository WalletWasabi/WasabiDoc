---
{
  "title": "Explain Wasabi like I'm 5",
  "description": "A very simple explanation of how to install and start Wasabi Wallet, as well as receiving, sending, and coinjoining. 
This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Explain Wasabi like I'm 5

[[toc]]

## Introduction

Wasabi Wallet is an open-source, non-custodial, privacy-focused Bitcoin wallet with built-in coinjoins.
It is a piece of software that runs on your computer and helps you to manage your bitcoins.
Although Wasabi has some very advanced magic under the hood, it is rather easy to use.
You can generate a new set of seed words, or import already existing ones.
With Wasabi you can receive bitcoins into your full control, and you can send them to someone else without needing permission from any other person or entity.
There is also a powerful auto-coinjoin feature to help obfuscate your transaction history.
You can use Wasabi to manage your hardware wallet, and it even connects to your own full node.
Of course, Wasabi is libre and open-source, which means you have full control over the software you manage your money with.

## Installing Wasabi

Installing Wasabi is super-easy.
Go to the official website [wasabiwallet.io](https://wasabiwallet.io) and download the version for your operating system.
You can then install Wasabi as you would do any other software on your computer.

See [this chapter](/using-wasabi/InstallPackage.md) for a detailed step-by-step tutorial for all operating systems, and also how to verify the PGP signature.

## Generating a Wallet

When you start Wasabi for the first time, the dialog to generate a new wallet will be open.
You can set a unique name for the wallet so that you remember what it is for.
In the next step, Wasabi will show your 12 recovery words.
These must be carefully backed up, in the correct order, as they are needed to recover your wallet (together with the password) on another computer or in another wallet software.
Next, choose a very secure password, as this encrypts the secrets, and should not be guessed by others.
You will always need this password in order to spend your bitcoins, so take great care to back it up properly.
Make sure you store the backup of your recovery words in a different location than the backup of your password.

:::warning Backup both!
If you ever need to restore your wallet in Wasabi, or any other wallet, you will need both: your password AND your 12 recovery words.
:::

See [this chapter](/using-wasabi/WalletGeneration.md) for more information on how to securely generate your wallet.

## Receiving bitcoin

In order to receive bitcoin, you need to generate an address in the `Receive` dialog.
But first, you must label it with the names of any observers who know that this address is yours.
For example, if Alice pays you back for last nights pizza, then the label is `Alice`.
This is an important feature for you and the wallet to know which coin is from whom, and it will help with your privacy in the future.
Once this newly generated address receives some coins, Wasabi Wallet will automatically hide this used address, so you don't reuse it by accident.

See [this chapter](/using-wasabi/Receive.md) for a tutorial on how to properly label your addresses and receive bitcoin.

## Sending bitcoin

Sending process is different depending on the privacy of coins you have. Assuming you have enough private coins the sending process is the following:

1. Click the `Send` button (top right corner) at the main view.
2. Insert the address of the receiver and type in the amount the receiver should get, then click `Continue`.
3. Enter the name of the person or company receiving the payment and click `Continue`.
4. Make sure everything is filled in correctly in `Preview Transaction` window and click `Confirm`.
5. Type in your password and click `Continue`.

You will now see a pop-up window telling you that the transaction is broadcasted to the Bitcoin network.

See [this chapter](/using-wasabi/Send.md) for more details about sending bitcoin and the privacy nuances of it.

## Coinjoin with Wasabi

If you don't like that your employer knows where you spend your money, or that a merchant can find out how much money you have, then you should coinjoin your bitcoin, as this breaks link to its transaction history.
Although the coinjoin protocol is a bit complex, it is very easy to use in Wasabi.
The wallet automatically coinjoins all your funds, so that your money becomes private.
This process might take some time (hours/days).
You can still use your wallet in the mean time, however it is a best practice to only use private funds, which the wallet does automatically when possible.
At the wallet's homescreen the percentage indicates the progress to making your wallet fully private.
The exact available private amount of bitcoin is listed as `PRIVATE`.

See [this chapter](/using-wasabi/CoinJoin.md) for a thorough analysis of coinjoin, details on the Wasabi implementation and best practices on how to use it properly.

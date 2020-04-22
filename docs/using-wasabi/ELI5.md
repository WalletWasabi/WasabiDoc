---
{
  "title": "Explain Wasabi like I'm 5",
  "description": "A very simple explanation of how to install and start Wasabi, as well as receiving, sending, and coinjoining. 
This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Explain Wasabi like I'm 5

[[toc]]

---

## Introduction

Wasabi is an open-source, non-custodial, privacy-focused Bitcoin wallet.
It is a piece of software that runs on your computer and helps you to manage your bitcoins.
Although Wasabi has some very advanced magic under the hood, it is rather easy to use.
You can generate a new set of private keys, or import already existing ones.
With Wasabi you can receive bitcoins into your full control, and you can send them to someone else without needing permission from any other person or entity.
There is also a powerful CoinJoin feature to help obfuscate your transaction history.
You can use Wasabi to manage your hardware wallet, and it even connects to your own full node.
Of course, Wasabi is libre and open-source, which means you have full control over the software you manage your money with.

## Installing Wasabi

Installing Wasabi is super-easy.
Go to the official website [wasabiwallet.io](https://wasabiwallet.io) and download the version for your operating system.
You can then install Wasabi as you would do any other software on your computer.

See [this chapter](/using-wasabi/InstallPackage.md) for a detailed step-by-step tutorial for all operating systems, and also how to verify the PGP signature.

## Generating a Wallet

When you start Wasabi for the first time, the tab to generate a new wallet will be open.
You can set a unique name for the wallet so that you remember what it is for.
Choose a very secure password, as this encrypts the secrets, and should not be guessed by others.
You will always need this password in order to spend your bitcoins, so take great care to back it up properly.
In the next step, Wasabi will show your 12 recovery words.
These must also be carefully backed up, as they are needed to recover your wallet (together with the password) on another computer or in another wallet software.
Make sure you store the backup of your recovery words in a different location than the backup of your password.

:::warning Backup both!
If you ever need to restore your wallet in Wasabi, or any other wallet, you will need both: your password AND your 12 recovery words.
:::

See [this chapter](/using-wasabi/WalletGeneration.md) for more information on how to securely generate your wallet.

## Receiving bitcoin

In order to receive bitcoins, you should generate an address in the `Receive` tab.
But first, you must label it with the names of any observers who know that this address is yours.
For example, if Alice pays you back for last nights pizza, then the label is `Alice`.
This is an important feature for you to know which coin is from whom, and it will help with your privacy in the future.

See [this chapter](/using-wasabi/Receive.md) for a tutorial on how to properly label your addresses and receive bitcoin.

## CoinJoin with Wasabi

If you don't like that your employer knows about where you spend your money, or that a merchant can find out how much money you have, then you should CoinJoin your bitcoin, as this breaks the transaction history.
Although the CoinJoin protocol is a bit complex, it is very easy to use in Wasabi.
1. Go to the `CoinJoin` tab.
2. Select the coins you want to make private.
3. Type in your password.
4. Click enqueue.

Now have a little patience, within a short while you should have a sufficient anonymity set to protect your privacy.

See [this chapter](/using-wasabi/CoinJoin.md) for a thorough analysis of CoinJoin, details on the Wasabi implementation and best practices how to use it properly.

## Sending bitcoin

In the Wasabi `Send` tab you can give your bitcoins to someone else, or send them to another wallet of yours.
1. Select the coins which you want to spend.
2. Insert the address of the receiver.
3. Label the observers who know of this transaction.
4. Specify the amount the receiver should get.
5. Set the fee to select how fast you want the transaction to confirm.
6. Verify that everything is correct.
7. Type in your password.
8. Hit the `Send` button.

See [this chapter](/using-wasabi/Send.md) for more details on sending bitcoins and the privacy nuances of coin control.

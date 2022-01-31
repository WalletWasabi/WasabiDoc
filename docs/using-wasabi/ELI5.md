---
{
  "title": "Explain Wasabi like I'm 5",
  "description": "A very simple explanation of how to install and start Wasabi Wallet, as well as receiving, sending, and coinjoining. 
This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Explain Wasabi like I'm 5

[[toc]]

---

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

In order to receive bitcoin, you should generate an address in the `Receive` tab.
But first, you must label it with the names of any observers who know about this transaction.
For example, if Alice pays you back for last nights pizza, then the label is `Alice`.
This is an important feature for the wallet to know which coin is from whom, and it will help with your privacy in the future.

See [this chapter](/using-wasabi/Receive.md) for a tutorial on how to properly label your addresses and receive bitcoin.

## CoinJoin with Wasabi

If you don't like that your employer knows about where you spend your money, or that a merchant can find out how much money you have, using Wasabi is the obvious choice because, by default, it coinjoins your coins, thus breaking it's transaction history link.
Although the coinjoin protocol is a bit complex, it is very easy to use in Wasabi.
By default, the wallet automatically starts coinjoining UTXO's larger than 0.01 BTC, after a few minutes have passed since the transaction was confirmed. 
At this point, Wasabi will deduct  0,3% from that total UTXO balance as coordinator fee and the necessary Bitcoin network transaction fee. 
Once all or some of these coins are mixed, they will show up in the software's main view as "private coins".
The wallet will then automatically mix the remaining coins or the change outputs that the user receives back after creating transactions, but the coordinator fees will not be charged from the user again. Although, Bitcoin network transaction fees still apply.

When the user only has UTXO's smaller than 0.01 BTC, the wallet will switch to _Plebs Don't Pay -mode_, which means it won't automatically coinjoin the users coins.
Users will still be able to manually participate in coinjoins if they wish and they won't need to pay any coordinator fees.

See [this chapter](/using-wasabi/CoinJoin.md) for a thorough analysis of coinjoin, details on the Wasabi implementation and best practices on how to use it properly.

## Sending bitcoin

In Wasabi, you can use the `Send` button to give your bitcoin to someone else or send them to another wallet of yours.
1. Click the `Send` button (top right corner) at the main view.
2. Insert the address of the receiver.
3. Specify the amount the receiver should get and click `Continue`.
4. At `Advanced options` you can set a custom transaction fee, otherwise the wallet automatically estimates it.
6. Check if everything is filled in correctly and click `Confirm`.
7. Optionally, you can click the shield image (top right corner) at `Preview Transaction` to see suggestions on how to avoid generating a change output in this payment.
8. Enter the name of the person or company receiving the payment and click `Continue`.
9. Type in your password and click `Continue`.
10. You will now see a pop-up window telling you that the transaction is broadcasted to the Bitcoin network.

See [this chapter](/using-wasabi/Send.md) for more details about sending bitcoin and the privacy nuances of it.

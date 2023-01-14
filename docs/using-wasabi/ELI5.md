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

Okay kiddo, so you know how you have a piggy bank where you keep your money?
Well, Wasabi Wallet is like a piggy bank for your bitcoin.
It's a special kind of computer program that helps you keep your bitcoin safe and secret, like how you keep your piggy bank in a secret place.
Wasabi is really good at keeping your bitcoin hidden because it has special magic inside that makes it hard for other people to see where you are keeping your bitcoin.
And you can use it really easily, just like how you know how to put money in your piggy bank.
You can also send your bitcoin to your friends, just like how you can give some of your money to your friends.
And there's even a special button you can use to make it even more secret.
It's also open for anyone to use and look at how it works, just like how you can see inside your piggy bank.

## Installing Wasabi

So you know that when you want to play a new game on your computer, you first have to install it?
Installing Wasabi Wallet is just like that, it's super-easy.
You can do it by going to the website called [WasabiWallet.io] (https://wasabiwallet.io) and finding the right version for your computer.

[See this chapter](/using-wasabi/InstallPackage.md) for a detailed step-by-step tutorial for all operating systems, and also how to verify the PGP signature.

## Generating a Wallet

Okay kiddo, so imagine you have a special piggy bank just for your bitcoin.
When you first start Wasabi Wallet, it's like opening up a brand new piggy bank.
You get to pick a special name for your piggy bank so you know which one is yours.
Then, Wasabi will give you 12 magic words, kind of like a secret code.
You need to keep these magic words super safe, just like how you keep your piggy bank key safe.
You will need these magic words to open your piggy bank if you ever want to use it on another computer or with another program.

After that, you need to make a special password that only you know, like a secret code to unlock your piggy bank.
It's very important to keep this password safe too, because without it you can't spend your bitcoin.
So make sure you keep the magic words and the password in different safe places, just in case you lose one.

:::warning Backup both!
If you ever need to restore your wallet in Wasabi, or in any other wallet, you will need both: your password AND your 12 recovery words.
:::

See [this chapter](/using-wasabi/WalletGeneration.md) for more information on how to securely generate your wallet.

## Receiving bitcoin

Imagine you want to get some money in your piggy bank.
To do that, you click on `Receive` and then tell Wasabi Wallet who is sensing you the money.
So, if your friend Alice pays you back for pizza, you would write her name on the label.
Wasabi then shows you an address, which Alice needs to know so that she can send you the money.
Labelling your addresses is important because it helps you and the wallet keep track of who gave you the money and it makes it harder for people to follow your money.
Once you receive some coins on a newly generated address, Wasabi will automatically hide the address, so that you don't accidentally use it again.

See [this chapter](/using-wasabi/Receive.md) for a tutorial on how to properly label your addresses and receive bitcoin.

## Sending bitcoin

Now you want to give some of your money from your piggy bank to your friend.
First, you click 'Send'.
Then, you tell the program where to send the money, by writing your friend's address.
You also tell the program how much money to send, like $5 for a toy.
Then, you tell the program who the money is for, that is your friend's name.
Wasabi then shows you a summary of the payment, you double check that everything is right and click 'Confirm'.
Finally, you type in your secret password, just like how you would unlock your piggy bank, and click 'Continue'.
And then you get a message that says you sent the money to your friend.

See [this chapter](/using-wasabi/Send.md) for more details about sending bitcoin and the privacy nuances of it.

## Coinjoin with Wasabi

Of course you don't want people to know where you spend your money or how much money you have in your piggy bank.
Wasabi can do something called coinjoin, it's like shaking up all the money in your piggy bank with other people's money so no one can tell whose money is whose.
This process might take some time, like a few hours or days, but you can still use your piggy bank while it's happening.
The process of making your money private starts automatically, or you press the play button at the bottom of the screen.
You can check on the progress of making your money private by looking at the screen and seeing a percentage of how much private money you have.
The exact amount of private money you have will be listed as PRIVATE.

See [this chapter](/using-wasabi/CoinJoin.md) for a thorough analysis of coinjoin, details on the Wasabi implementation and best practices on how to use it properly.

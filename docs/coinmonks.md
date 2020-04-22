# Wasabi Wallet?

## Introducing this privacy weapon

[Wasabi](https://wasabiwallet.io) is an open-source, non-custodial, privacy-focused Bitcoin wallet.
It is a piece of software that runs on your computer and helps you to manage your bitcoins.
Although Wasabi has some very advanced magic under the hood, it is rather easy to use.
You can generate a new set of private keys, or import already existing ones.
With Wasabi you can receive bitcoins into your full control, and you can send them to someone else without needing permission from any other person or entity.
There is also a powerful CoinJoin feature to help obfuscate your transaction history.
You can use Wasabi to manage your hardware wallet, and it even connects to your own full node.
Of course, Wasabi is libre and open-source, which means you have full control over the software you manage your money with.

Recently, there was a new release of the software that introduced several awesome features.
This was the culmination of different streams of development efforts over the past year.
The feedback from the community of users has been overwhelming, and with this release Wasabi has been [downloaded and installed](https://docs.wasabiwallet.io/using-wasabi/InstallPackage.html) well over 100 000 times already.
The advanced CoinJoin feature has helped its users to reclaim the privacy of several hundred thousand bitcoin, and the liquidity is ever increasing.

## It all starts with synchronization

In general, Wasabi is yet another Bitcoin wallet, but what makes it special, is that every single design decision has been made with privacy as the top priority.
This already starts when [loading a wallet and synchronising it](https://docs.wasabiwallet.io/using-wasabi/WalletLoad.html) with the Bitcoin blockchain.
Wasabi is the first wallet to implement BIP 158 block filters, which is a new technique for light clients to privately find out how much bitcoin they have.
The important thing is that Wasabi does not send your extended public key or addresses to any third party server.
This sensitive financial data never leaves your computer.
Instead, the back-end server gives your wallet these block filters, and you check locally if a block is relevant to you.
If yes, then the wallet client downloads this block from a Bitcoin P2P node, just like any other full node.
This all happens over the Tor network, and with new Tor identities every time, of course.

## Know who knows about your coins

When [generating a receiving address](https://docs.wasabiwallet.io/using-wasabi/Receive.md), you immediately notice another speciality of Wasabi.
It is required to give every address a label of the observer who knows that this address is yours.
For example, if Alice pays you back for last nights pizza, then the label is `Alice`.
This is an important feature so that you know which coin is from whom, and it will help with your privacy in the future.

When receiving bitcoin on an address, then you will notice two important aspects in the graphical user interface.
First, the receiving address will be removed, as these should only be used once, [and never reused](https://docs.wasabiwallet.io/why-wasabi/AddressReuse.html)!
Address reuse is one of the biggest privacy leaks in Bitcoin, as this makes it trivial for anyone to see which coins belong to the same user.
Second, instead of showing only a total balance of the wallet, there is a list of all the coins that can be spend, these are unspent transaction outputs.
Every coin is clearly labeled by the observers who know about the coin, as this was specified when generating the address.
This makes coin control and conscious coin selection very intuitive and helps enormously with privacy.

## CoinJoin to reclaim your privacy

If you don't like that your employer knows about where you spend your money, or that a merchant can find out how much money you have, then you should [CoinJoin your bitcoin](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html), as this breaks the transaction history.
It is good to know that Wasabi's CoinJoin are non-custodial [meaning nobody can steal from you] and trust-less [meaning nobody, even the central coordinator, can spy on you].
Although the CoinJoin protocol is a bit complex, it is very easy to use in Wasabi, and this feature makes Wasabi extra powerful.
Because every coin is clearly labeled, you know which one are not yet private, for example when You have bought them at a KYC exchange.
All you need to do to reclaim your privacy, is select this coin, enter your password, and click the button to enqueue and register in the next CoinJoin.
The privacy gained by the CoinJoin depends on the number of users who register at this time.
Every user will get one equal value output, which cannot be linked to the specific inputs.
Wasabi tries to gather 100 users and thus generate 100 anonymity set with every single round.
At the time of writing, the minimum amount to CoinJoin is roughly 0.1 bitcoin, and there happens a CoinJoin at least once per hour.
So have a little patience, within a short while you should have a sufficient anonymity set.
After the round completes, you will see the fresh coin in the list, with a green check-mark shield to indicate that it has reached your privacy target.
The latest Wasabi release even enables you to efficiently and privately CoinJoin directly into another wallet, like for example your hardware wallet.

## Sending bitcoin privately

Of course, you can also [send your bitcoin](https://docs.wasabiwallet.io/using-wasabi/Send.html) to someone else in Wasabi.
Because of the labeling, manual coin control, and CoinJoin feature, this can be done in a very privacy focused way.
For example, if Alice has sent you a bitcoin in the past, and now you want to pay her, then of course select the coin that she already knows about.
But if you do not want the receiver to know about your previous transaction history, then you should send a coin that was coinjoined previously.
You easily see which of them they are, by the green check-mark shield.
After selecting the coins, specify the amounts that should be sent, label the observers who know about this transaction, specify a mining fee, verify that everything is alright, type in your password, and then click send.
Wasabi will securely sign the transaction, and then broadcast it over the Tor network and with a new Tor identity to a random Bitcoin P2P node, as any other full node would do too.

## But wait, there's more

All the above mentioned would make Wasabi already a top-notch Bitcoin wallet, but there are several more important features that make it even better.
For a long time, you can connect [your own Bitcoin full node](https://docs.wasabiwallet.io/using-wasabi/BitcoinFullNode.html) to Wasabi, and now Wasabi itself has the bitcoind binaries included in the software.
This means that any user can now run a Bitcoin full node with only one single click in the Wasabi GUI.
As of now, Wasabi does not yet use the full node for consensus verification, but the developers are working hard on making this a reality.
Further, running your own node is not even a privacy improvement, as Wasabi as a light client is already as good as, maybe even better than, running a full node.
However, this is a bandwidth improvement, as blocks don't have to be downloaded again.
Of course, every Bitcoin user should run his own full node, and this obviously includes Wasabi users.


Wasabi can also be used to privately [manage your hardware wallet](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html), or another offline signing device.
The software can work with only public keys, to query the chain for your coins, and to build unsigned Bitcoin transactions.
The private keys to these coins are on the hardware wallet, and this can be connected via USB, or even air-gapped via SD cards with ColdCard wallet.
After the hardware wallet verified and signed the transaction, it can be broadcast privately through the Tor network.
This is all enabled by the brilliant Hardware Wallet Interface of the Bitcoin Core project.

The recent release also introduced multi wallet support, meaning that multiple Wasabi wallets can be loaded within one instance of the software.
This make sit fast and easy to load different wallets and send in between them.
Part of this is also the amazing feature of [coinjoining directly into another wallet](https://docs.wasabiwallet.io/using-wasabi/Daemon.html), like your hardware wallet.

## What's coming up next

This project is far from finished, and there are multiple open source developers continuously working to improve it further.
The near term roadmap includes integration of PayJoin, a stegnographic CoinJoin technique between one sender and one receiver.
Wasabi is already pretty intuitive to use, once you get the hang of it, but the team is working on a complete re-design of the user experience to make it ever more beautiful.
For the long term, there is ongoing research into WabiSabi, a novel CoinJoin technique which aims to enable sending arbitrary values to third party addresses directly in the CoinJoin.
If the team succeeds to research and implement this, it would be a massive improvement to current CoinJoin techniques.

## To sum up

Over the past two years of development, Wasabi has raised the bar of what a Bitcoin wallet can and should do, in order to protect user privacy.
The razor focus on privacy at every design level has emerged not only a highly secure wallet, but also one that is intuitive to use.
The powerful CoinJoin feature is constantly attracting new users to join their coins with other Wasabikas.
The past has proven the dedication and track record of the project, and the future is as bright as ever.

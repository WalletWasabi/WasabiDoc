---
{
  "title": "Introduction FAQ",
  "description": "Frequently asked questions regarding the introduction to Wasabi in general. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Introduction to Wasabi

## The Basics

### Who can use Wasabi?

Every single line of code in Wasabi, the [wallet](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Fluent.Desktop), the [backend server](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend), the [daemon](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Daemon), the [tests](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Tests), the [packager](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Packager), the [library](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi), the [api](https://wasabiwallet.io/swagger/), the [documentation](https://github.com/zkSNACKs/WasabiDoc) - has always been and will always be libre and open-source under the [MIT license](https://github.com/zkSNACKs/WalletWasabi/blob/master/LICENSE.md).
This means that anyone, yes, ANYONE can use Wasabi without permission, for any use case, free of charge.

Wasabi is used by individuals to make everyday payments, to manage their hardware wallet long term hodlings, and to CoinJoin their sats for added privacy.
Entrepreneurs may use Wasabi to defend their customers from spies and to ensure a private business relationship.
While kids may use Wasabi to stack the sats gifted by grandma, and learn the importance of hodling.

:::tip
Wasabi is a tool for everyone.
:::

### What is a coinjoin?

Coinjoin is a mechanism by which multiple participants combine their coins (or UTXOs, to be more precise) into one large transaction with multiple inputs and multiple outputs.
An observer cannot determine which output belongs to which input, and neither can the participants themselves.
This makes it difficult for outside parties to trace where a particular coin originated from and where it was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver).

This can be done with non-custodial software like Wasabi that eliminates the risk of funds disappearing or being stolen.
Each of the signatures are created on the participants’ computers after thorough verification, so nobody can alter the transaction or redirect the funds.
The funds will always be in a Bitcoin address that you control.

In very simple terms, coinjoin means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.

See also the [Bitcoin Wiki on coinjoins](https://en.bitcoin.it/wiki/CoinJoin)

### Do I need to trust Wasabi with my coins?

Since Wasabi's coinjoin implementation is trustless by design, there is no need for participants to trust each other or a third party.
Both the sending address (the coinjoin input) and the receiving address (the coinjoin output) are controlled by your own private keys.
The Wasabi server merely coordinates the process of combining each participant's input into one single transaction, but the Wasabi Wallet can neither steal your coins, nor figure out which outputs belong to which inputs (look up “[WabiSabi coinjoin](/using-wasabi/CoinJoin.md)” if you want to know more).

### What is the privacy I get after mixing with Wasabi?

This depends on how you handle your outputs after the coinjoin.
There are some ways how you can unintentionally undo the mixing by being careless.
For example, if you send a mixed coin to an already used address, then anyone can see that both coins are controlled by the same entity.
More importantly, anyone who knows that the address belongs to you knows that you own that mixed coin.
[Address reuse](/why-wasabi/AddressReuse.md) compromises your privacy.
Another deanonymizing scenario occurs when you combine mixed outputs with unmixed ones when sending: a third party will be able to make the connection between them as belonging to the same sender.
This is why you need to be careful with non-private/[change coins](/using-wasabi/ChangeCoins.md).

The practice of being careful with your post-mix outputs is commonly facilitated through coin control.
Find out more about coin control in [here](/why-wasabi/Coins.md).
However, Wasabi Wallet is build in a way to help the user to avoid privacy leaks when using the wallet.

### Why is Wasabi Bitcoin-only?

There are countless reasons why it is the only logical choice to be bitcoin-only.
With Bitcoin we have a once in a lifetime opportunity to manifest libre sound money.
If we succeed, then an utmost beautiful agora of sovereign individuals may emerge.
If we fail, then this will conjure up the most horrific Orwellian nightmare.
There is no room for wasted time and energy, this great work requires our full attention.
Any line of code written to support a random shitcoin takes away scarce developer time to work on real problems.

### What is considered a sufficient anonymity score?

It is difficult to determine a sufficient anonymity score since enough research hasn’t been conducted to provide a definitive answer.
The right anonymity score depends on your own personal threat model.
However, to be on the safe side, with Wasabi Wallet 2.0 an anonymity score of 5 and above could be considered sufficient.

### Is there a way to check Wasabi's uptime status?

Yes, you can check the status of Wasabi-related services and websites (like APIs, Backend, etc.) via [UptimeRobot Wasabi Status Page](https://stats.uptimerobot.com/YQqGyUL8A7).

### What software supplies the block filters that Wasabi uses?

The zkSNACKs coordinator supplies identical filters to every client.
This means that you rely on the [Wasabi backend](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend) to provide valid filters.
But because you download the blocks from a random Bitcoin peer-to-peer node - or your own node - the coordinator cannot spy on which blocks you are interested in.
Furthermore, the random node will only know which block is needed but it won't have any clue which transaction(s) belongs to the wallet.

### Is the Backend's (Coordinator) code open-source?

Yes, you can verify the code on [GitHub](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend).

### Is there an Android/iOs version?

No, Wasabi and CoinJoin features require considerable computational power, not currently replicable on a smartphone.

### Where can I find Wasabi Wallet on social media?

You can find us on [Twitter](https://twitter.com/wasabiwallet), [Reddit](https://www.reddit.com/r/WasabiWallet/), [YouTube](https://www.youtube.com/c/WasabiWallet), [Facebook](https://www.facebook.com/officialwasabiwallet/), [Instagram](https://www.instagram.com/wasabi_wallet/) and [Discord](https://discord.com/invite/nm7YHEZnJs).
For chat groups you can find us on [Slack](https://join.slack.com/t/tumblebit/shared_invite/enQtNjQ1MTQ2NzQ1ODI0LWIzOTg5YTM3YmNkOTg1NjZmZTQ3NmM1OTAzYmQyYzk1M2M0MTdlZDk2OTQwNzFiNTg1ZmExNzM0NjgzY2M0Yzg), [Telegram](https://t.me/WasabiWallet) and [Keybase](https://keybase.io/team/wasabiwallet).

Also, remember to follow our [blog](https://blog.wasabiwallet.io) to get the latest insights and information about Wasabi Wallet and Bitcoin privacy.

## For advanced Wasabikas

### Can the coordinator attack me?

The developers have gone to great lengths to ensure that the coordinator cannot steal funds nor link inputs to outputs. 
The nature of Wasabi is that you should not need to trust the developers or the Wasabi coordinating server, as you can verify that the code does not leak information to anyone.
Due to the nature of coinjoin transactions users don't need to trust other users or the coordinator against theft, leaving denial of service and attacks on privacy as the main concerns

The only known possible 'malicious' actions that the server *could* perform are two sides of the same coin;
- **Blacklisted UTXO's**:
Though this would not affect the users who are able to successfully mix with other 'honest/real' peers.
- **Targeted Sybil Attack**:
The follow-up concern is the inverse of the above.
It is possible that the server could *only* include one 'honest/real' coin in the mix and supply the other coins themselves.
This gives a false sense of security, **but does not worsen the existing privacy of the coin**.
It would also be noticeable to all users excluding the user being targeted as their coins would not be mixed.
It has been argued that this 'attack' would be very costly in terms of fees because the number of coins being mixed is verifiable.
Though it is true that remixes pay zero coordination fee to zkSNACKs, they do pay mining fees.
See [here](https://github.com/zkSNACKs/WabiSabi/blob/master/protocol.md#attacks-on-privacy) for more info.

### What is the history of Wasabi?

Ádám Ficsor worked with several others on a privacy-focused Bitcoin wallet called Hidden Wallet all the way [back in December 2015](https://docs.google.com/drawings/d/1wLL7aSgYBWNoyzllg6_haisFt-gQCf-QUzVzQPkARts/edit).
Wasabi 1.0 was unveiled in 2018 at the Building on Bitcoin conference by Ádám.
At the time, Wasabi was essentially HiddenWallet rebranded and rewritten from scratch with some new features.
Key dates:
- The 1.0 Beta release was on August 1, 2018 (on the first anniversary of UASF)
- The 1.0 release was on October 31, 2018 (on the tenth anniversary of the Bitcoin Whitepaper)
- The 2.0 Testnet release was on March 1, 2022
- The 2.0 release was on June 15, 2022

[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/XORDEX-RrAI?t=6420)

[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/b1Vligm0SO8)

### Why is Wasabi libre and open-source software?

Wasabi follows Bitcoin's philosophy by making the software [open-source](https://github.com/zkSNACKs/WalletWasabi/) and by publishing it under [MIT license](https://github.com/zkSNACKs/WalletWasabi/blob/master/LICENSE.md).
Bitcoin users prefer open-source software to proprietary software for a number of reasons, including:

:::tip Control
Many people prefer open-source software because they have more control over the software they run.
:::

They can examine the code to make sure it's not doing anything they don't want it to do, and they can change parts of it they don't like.
Users who aren't programmers also benefit from open-source software, since they can use this software for any purpose.

:::tip Training
Other people like open-source software because it helps them become better programmers.
:::

Open-source code is publicly accessible.
Students can easily study it as they learn to make better software.
Students can also share their work with others, inviting comments and critique, as they develop their skills.
When people discover mistakes in programs' source code, they can share those mistakes with others to help them avoid making those same mistakes themselves.

:::tip Security
Some people prefer open-source software because they consider it more secure and stable than proprietary software.
:::

Anyone can view and modify open-source software.
Other users may spot and correct errors or omissions that a program's original authors might have missed.
And because so many programmers can work on a piece of open-source software without asking for permission from original authors, they can fix, update, and upgrade open-source software more quickly than they can proprietary software.

:::tip Stability
Many users prefer open-source software to proprietary software for important, long-term projects.
:::

Programmers publicly distribute the source code for open-source software.
Users relying on that software for critical tasks can be sure their tools won't disappear or fall into disrepair if their original creators stop working on them.
Additionally, open-source software tends to both incorporate and operate according to open standards.

### What is the general idea of WabiSabi coinjoin?

While fungibility is an essential property of good money, Bitcoin has its limitations in this area.
Numerous fungibility improvements have been proposed; however, none of them have addressed the privacy issues in full.
WabiSabi is designed so that no participant, outside observer or even the coordinator can spy on the user.
The scope of WabiSabi is not limited to a single transaction, it extends to transaction chains and it addresses various network layer deanonymizations.
However, its scope is limited to Bitcoin's first layer.
Even if an off-chain anonymity solution gets widely adopted, ultimately the entrance and exit transactions will always be settled on-chain.
Therefore, there will always be need for on-chain privacy.

Ideal fungibility requires every Bitcoin transaction to be indistinguishable from each other, but it is an unrealistic goal.
WabiSabi's objective is to break all links between coins.
Thus, WabiSabi enables the usage of Bitcoin in a fully anonymous way.

WabiSabi defines a pre-mix and a post-mix wallet and a mixing technique.
Pre-mix wallet functionality can be added to any Bitcoin wallet without much overhead.
Post-mix wallets on the other hand have strong privacy requirements, regarding coin selection, private transaction and balance retrieval, transaction input and output indexing and broadcasting.
The requirements and recommendations for pre and post-mix wallets together define the Wallet Privacy Framework.
Coins from pre-mix wallets to post-mix wallets are moved by mixing. Most on-chain mixing techniques, like CoinShuffle, CoinShuffle++, TumbleBit's Classic Tumbler mode, or ZeroLink can be used.
However WabiSabi defines its own mixing technique: [WabiSabi coinjoin](/using-wasabi/CoinJoin.md).

For more info please see [WabiSabi](https://github.com/zksnacks/wabisabi).

### What are the supported operating systems?

Wasabi runs in most operating systems with 64-bit architecture.
For the complete list of all the officially supported operating systems, click [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-operating-systems).

### What are the minimal requirements to run Wasabi?

As long as your operating system is [supported](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-operating-systems), Wasabi should be able to run on your hardware.
The more transactions a wallet has made, the more resources Wasabi will consume, particularly RAM.
The software can also consume a significant amount of CPU for specific tasks, such as coinjoins or wallet loading.
Approximately 3 GB of disk space are also needed, mainly to store the [block filters](/FAQ/FAQ-UseWasabi.md#what-are-bip-158-block-filters).
If you are running the wallet on a system with scarce resources, consider using the [daemon](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Daemon) instead of the GUI application.
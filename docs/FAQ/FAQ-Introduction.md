---
{
  "title": "Introduction FAQ",
  "description": "Frequently asked questions regarding the introduction to Wasabi in general. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Introduction to Wasabi

## The Basics

::::details
### Who can use Wasabi?

Every single line of code in Wasabi, the [wallet](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Fluent.Desktop), the [backend server](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend), the [tests](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Tests), the [packager](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Packager), the [library](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi), the [api](https://wasabiwallet.io/swagger/), the [documentation](https://github.com/zkSNACKs/WasabiDoc) - has always been and will always be libre and open-source under the [MIT license](https://github.com/zkSNACKs/WalletWasabi/blob/master/LICENSE.md).
This means that anyone, yes, ANYONE can use Wasabi without permission, for any use case, free of charge.

Wasabi is used by individuals to make everyday payments, to manage their hardware wallet long term hodlings, and to CoinJoin their sats for added privacy.
Entrepreneurs may use Wasabi to defend their customers from spies and to ensure a private business relationship.
While kids may use Wasabi to stack the sats gifted by grandma, and learn the importance of hodling.

:::tip
Wasabi is a tool for everyone.
:::
::::

:::details
### What is a CoinJoin?

CoinJoin is a mechanism by which multiple participants combine their coins (or UTXOs, to be more precise) into one large transaction with multiple inputs and multiple outputs.
An observer cannot determine which output belongs to which input, and neither can the participants themselves.
This makes it difficult for outside parties to trace where a particular coin originated from and where it was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver).

This can be done with non-custodial software like Wasabi that eliminates the risk of funds disappearing or being stolen.
Each of the signatures are created on the participants’ computers after thorough verification, so nobody can alter the transaction or redirect the funds.
The funds will always be in a Bitcoin address that you control.

In very simple terms, CoinJoin means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.

See also the [Bitcoin Wiki on CoinJoins](https://en.bitcoin.it/wiki/CoinJoin)
:::

:::details
### Do I need to trust Wasabi with my coins?

 Since Wasabi's CoinJoin implementation is trustless by design, there is no need for participants to trust each other or a third party.
Both the sending address (the CoinJoin input) and the receiving address (the CoinJoin output) are controlled by your own private keys.
The Wasabi server merely coordinates the process of combining each participant's input into one single transaction, but the Wasabi Wallet can neither steal your coins, nor figure out which outputs belong to which inputs (look up “[Chaumian CoinJoin](/using-wasabi/CoinJoin.md)” if you want to know more).
:::

:::details
### What is the privacy I get after mixing with Wasabi?

This depends on how you handle your outputs after the CoinJoin.
There are some ways how you can unintentionally undo the mixing by being careless.
For example, if you send a mixed coin to an already used address, then anyone can see that both coins are controlled by the same entity.
More importantly, anyone who knows that the address belongs to you knows that you own that mixed coin.
[Address reuse](/why-wasabi/AddressReuse.md) compromises your privacy.
Another deanonymizing scenario occurs when you combine mixed outputs with unmixed ones when sending: a third party will be able to make the connection between them as belonging to the same sender.
This is why you need to be careful with [change coins](/using-wasabi/ChangeCoins.md).

The practice of being careful with your post-mix outputs is commonly facilitated through coin control, which is the default way of interacting with the wallet.
Find out more about coin control in [here](/why-wasabi/Coins.md).
:::

:::details
### Why is Wasabi Bitcoin-only?

There are countless reasons why it is the only logical choice to be [bitcoin-only](https://bitcoin-only.com).
With Bitcoin we have a once in a lifetime opportunity to manifest libre sound money.
If we succeed, then an utmost beautiful agora of sovereign individuals may emerge .
If we fail, then this will conjure up the most horrific Orwellian nightmare.
There is no room for wasted time and energy, this great work requires our full attention.
Any line of code written to support a random shitcoin takes away scarce developer time to work on real problems.
:::

:::details
### Why is the anonymity set 100?

It is difficult to determine a sufficient anonymity set since enough research hasn’t been conducted to provide a definitive answer.
The right anonymity set depends on your own personal threat model.
However, the rough consensus among many privacy researchers is that an anonymity set above 50 could be considered sufficient.
Furthermore our calculations have shown that with the liquidity of today’s mixers our mixing rounds would take 1 to 5 minutes with 100 anonymity set and 0.1 BTC fixed denomination.
:::

:::details
### Is there a way to check Wasabi's uptime status?

Yes, you can check the status of Wasabi-related services and websites (like APIs, Backend, etc.) via [UptimeRobot Wasabi Status Page](https://stats.uptimerobot.com/YQqGyUL8A7).
:::

:::details
### What software supplies the block filters that Wasabi uses?

The zkSNACKs coordinator supplies identical filters to every client.
This means that you rely on the [Wasabi backend](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend) to provide valid filters.
But because you download the blocks from a random Bitcoin peer-to-peer node - or your own node - the coordinator cannot spy on which blocks you are interested in.
Furthermore, the random node will only know which block is needed but it won't have any clue which transaction(s) belongs to the wallet.
:::

:::details
### Is the Backend's (Coordinator) code open-source?

Yes, you can verify the code on [GitHub](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend).
:::

:::details
### Is there an Android/iOs version?

No, Wasabi and CoinJoin features require considerable computational power, not currently replicable on a smartphone.
:::

:::details
### Where can I find Wasabi Wallet on social media?

You can find us on [Twitter](https://twitter.com/wasabiwallet) and [Reddit](https://www.reddit.com/r/WasabiWallet/).
For chat groups you can find us on [Slack](https://join.slack.com/t/tumblebit/shared_invite/enQtNjQ1MTQ2NzQ1ODI0LWIzOTg5YTM3YmNkOTg1NjZmZTQ3NmM1OTAzYmQyYzk1M2M0MTdlZDk2OTQwNzFiNTg1ZmExNzM0NjgzY2M0Yzg), [Telegram](https://t.me/WasabiWallet) and [Keybase](https://keybase.io/team/wasabiwallet).

Also, remember to follow our [blog](https://blog.wasabiwallet.io) to get the latest insights and information about Wasabi Wallet and Bitcoin privacy.
:::

## For advanced Wasabikas

:::details
### Can the coordinator attack me?

The developers have gone to great lengths to ensure that the coordinator cannot steal funds nor link inputs to outputs. 
The nature of Wasabi is that you should not need to trust the developers or the Wasabi coordinating server, as you can verify that the code does not leak information to anyone.

The only known possible 'malicious' actions that the server *could* perform are two sides of the same coin;
- **Blacklisted UTXO's**:
Though this would not affect the users who are able to successfully mix with other 'honest/real' peers.
- **Targeted Sybil Attack**:
The follow-up concern is the inverse of the above.
It is possible that the server could *only* include one 'honest/real' coin in the mix and supply the other coins themselves.
This gives a false sense of security, **but does not worsen the existing privacy of the coin**.
It would also be noticeable to all users excluding the user being targeted as their coins would not be mixed.
It has been argued that this 'attack' would be very costly in terms of fees because the number of coins being mixed is verifiable.
Though it is true that fees would have to be paid to zkSNACKs every round, this does not matter if it is zkSNACKs that is acting maliciously (as they get the funds back).
Typical rounds currently have <100 people per mix, with the minimum input being ~0.1 BTC with a fee of 0.003% per anonymity set.
Taking the 'worst case' (100 people, each mixing 0.1 BTC) gives 0.03 BTC per round.
This is not prohibitive and is thus a valid concern.
With that being said, if multiple chain-analysis companies attempt to flood the zkSNACKs mix (to decrease the true anonymity set) they will hinder each other's efforts (unless they are cooperating).
See [here](https://github.com/nopara73/ZeroLink/#e-sybil-attack) for more info.
:::

:::details
### What is the history of Wasabi?

Ádám Ficsor worked with several others on a privacy-focused Bitcoin wallet called Hidden Wallet all the way [back in December 2015](https://docs.google.com/drawings/d/1wLL7aSgYBWNoyzllg6_haisFt-gQCf-QUzVzQPkARts/edit).
Wasabi was unveiled in 2018 at the Building on Bitcoin conference by Ádám.
At the time, Wasabi was essentially HiddenWallet rebranded and rewritten from scratch with some new features.
Key dates:
- The Beta release was on August 1 (on the first anniversary of UASF.)
- The 1.0 release was on October 31 (on the tenth anniversary of the Bitcoin Whitepaper.)

@[youtube](XORDEX-RrAI,6420)
:::

::::details
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
::::

:::details
### What is the general idea of ZeroLink CoinJoin?

While fungibility is an essential property of good money, Bitcoin has its limitations in this area.
Numerous fungibility improvements have been proposed; however, none of them have addressed the privacy issues in full.
ZeroLink is designed so that no participant or outside observer can spy on the user.
The scope of ZeroLink is not limited to a single transaction, it extends to transaction chains and it addresses various network layer deanonymizations.
However, its scope is limited to Bitcoin's first layer.
Even if an off-chain anonymity solution gets widely adopted, ultimately the entrance and exit transactions will always be settled on-chain.
Therefore, there will always be need for on-chain privacy.

Ideal fungibility requires every Bitcoin transaction to be indistinguishable from each other, but it is an unrealistic goal.
ZeroLink's objective is to break all links between separate sets of coins.
ZeroLink presents a wallet privacy framework coupled with Chaumian CoinJoin, which was first introduced in 2013 by Gregory Maxwell.
Hopefully, ZeroLink will enable the usage of Bitcoin in a fully anonymous way for the first time.

ZeroLink defines a pre-mix and a post-mix wallet and a mixing technique.
Pre-mix wallet functionality can be added to any Bitcoin wallet without much overhead.
Post-mix wallets on the other hand have strong privacy requirements, regarding coin selection, private transaction and balance retrieval, transaction input and output indexing and broadcasting.
The requirements and recommendations for pre and post-mix wallets together define the Wallet Privacy Framework.
Coins from pre-mix wallets to post-mix wallets are moved by mixing. Most on-chain mixing techniques, like CoinShuffle, CoinShuffle++ or TumbleBit's Classic Tumbler mode can be used.
However ZeroLink defines its own mixing technique: [Chaumian CoinJoin](/using-wasabi/CoinJoin.md).

For the complete explanation please read [ZeroLink: The Bitcoin Fungibility Framework](https://github.com/nopara73/ZeroLink/).
:::

:::details
### What are the minimal requirements to run Wasabi?

Wasabi runs in most operating systems with 64-bit architecture.
For the complete list of all the officially supported operating systems, click [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-operating-systems).

:::

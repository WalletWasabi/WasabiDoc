---
{
  "title": "Introduction FAQ",
  "description": "Frequently asked questions regarding the introduction to Wasabi in general. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Introduction to Wasabi

## The Basics

### Who can use Wasabi?

Every single line of code in Wasabi, the [GUI](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Fluent), the [backend](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Backend), the [coordinator](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Coordinator), the [daemon](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Daemon), the [tests](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Tests), the [library](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi), the [documentation](https://github.com/WalletWasabi/WasabiDoc) - has always been and will always be libre and open-source under the [MIT license](https://github.com/WalletWasabi/WalletWasabi/blob/master/LICENSE.md).
This means that anyone, yes, ANYONE can use Wasabi without permission, for any use case, free of charge.

Wasabi is used by individuals to make everyday payments, manage their hardware wallet's cold storage, and coinjoin their sats for additional privacy.
Entrepreneurs may use Wasabi to defend their customers from spies and to ensure private business relationships, while kids may use Wasabi to stack the sats gifted by grandma and learn the importance of saving.

### What is a coinjoin?

Coinjoin is a mechanism by which multiple participants combine their coins (or UTXOs, to be more precise) into one large transaction with multiple inputs and multiple outputs.
An observer cannot determine which output belongs to which input, and neither can the participants themselves.
This makes it difficult for outside parties to trace where a particular coin originated from and where it was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver).

This can be done with non-custodial software like Wasabi that eliminates the risk of funds disappearing or being stolen.
Each participant verifies the transaction on their own computer before signing, so nobody can alter the transaction or redirect the funds.
Your funds will always be in a Bitcoin address that you control.

In very simple terms, coinjoin means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.

See also the [Bitcoin Wiki on coinjoins](https://en.bitcoin.it/wiki/CoinJoin)

### Do I need to trust anyone with my coins?

Since Wasabi's coinjoin implementation is trustless by design, there is no need for participants to trust each other or a third party.
Both the sending address (the coinjoin input) and the receiving address (the coinjoin output) are controlled by your own private keys.
The coordinator server merely builds a single transaction using each participant's inputs, but the server can neither steal your coins, nor figure out which outputs belong to which inputs (look up “[WabiSabi coinjoin](/using-wasabi/CoinJoin.md)” if you want to know more).

### What privacy do I gain from coinjoining with Wasabi?

This depends on how you handle your outputs after the coinjoin.
There are some ways you can unintentionally leak information by being careless.
[Address reuse](/why-wasabi/AddressReuse.md) compromises your privacy.
For example, if you send private coins to an address that you have already used before, then anyone can see that both coins are controlled by the same entity.
Another deanonymizing scenario occurs when you combine coinjoined outputs with non-private ones when sending: a third party will be able to make the connection between them as belonging to the same sender.
This is why you need to be careful with non-private/[change coins](/using-wasabi/ChangeCoins.md).

The practice of being careful with your onchain footprint is commonly facilitated through coin control.
Find out more about coin control in [here](/why-wasabi/Coins.md).
However, Wasabi Wallet is built in a way to help the user to avoid privacy leaks when using the wallet.

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

### What software supplies the block filters that Wasabi uses?

Wasabi can use block filters from a Wasabi backend/indexer or from a Bitcoin node.

By default, the Wasabi indexer serves filters to every client.
The filters a Wasabi indexer provides are Wasabi specific filters (optimized, light-weight) and not standard BIP 158 filters.
By using the [Wasabi backend](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Backend) you trust it to provide valid filters (in case it doesn't, your wallet could display less funds than you actually have).

As the client downloads the blocks from a random Bitcoin peer-to-peer node - or your own node - the server cannot spy on which blocks you are interested in.
Furthermore, the random node will only know which block is needed but it does't know which transaction(s) belongs to the wallet.

Since Wasabi version [2.6.0](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.6.0) Wasabi also works with a Bitcoin node that can supply standard BIP 158 block filters.
This means that the client is no longer dependent on a Wasabi backend for downloading filters to synchronize the wallet.

### Is the Backend's (Coordinator) code open-source?

Yes, you can verify the code on [GitHub](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Backend).

### Is there an Android/iOs version?

No, Wasabi and coinjoin features require considerable computational resources, not currently replicable on a smartphone.

### Where can I find Wasabi Wallet on social media?

You can find us on [X](https://x.com/wasabiwallet), [Nostr](https://njump.me/npub1jw7scmeuewhywwytqxkxec9jcqf3znw2fsyddcn3948lw9q950ps9y35fg) [Reddit](https://www.reddit.com/r/WasabiWallet/), and [YouTube](https://www.youtube.com/c/WasabiWallet).
For chat groups you can find us on [Slack](https://join.slack.com/t/tumblebit/shared_invite/enQtNjQ1MTQ2NzQ1ODI0LWIzOTg5YTM3YmNkOTg1NjZmZTQ3NmM1OTAzYmQyYzk1M2M0MTdlZDk2OTQwNzFiNTg1ZmExNzM0NjgzY2M0Yzg), [Telegram](https://t.me/WasabiWallet) and [Discord](https://discord.gg/EfPpgDNUCB).

## For Advanced Wasabikas

### Can the coordinator attack me?

Wasabi is built on a zero-trust principle, meaning that the coordinator cannot steal funds or link inputs to outputs.
All critical computations, like output decomposition, happen on the client side. 
The coordinator’s sole role is to collect signatures from all its participants (to sign the PSBT) into a fully signed transaction.

However, some risks remain, which the client mitigates as much as possible:

_**Money Loss Concerns**_

The client may forfeit small amounts of BTC, known as _leftovers_, when creating additional outputs or when adjusting the output decomposition would result in higher costs (e.g., higher mining fees or reduced privacy).
The coordinator collects these leftovers and can use however it wants: keep them, use them for mining fees, distribute them among its users... 
This creates an incentive for a malicious coordinator to maximize these forfeited amounts. 

Therefore, the client covers two main costs: **mining fees** and **leftovers**, which a malicious coordinator could exploit:

- **Mining Fee Rate**:  
  The coordinator sets the mining fee rate. A malicious coordinator could set excessively high fees, causing users to overpay and increasing leftover amounts.  
  
  To prevent abuse, the client enforces a [maximum mining fee rate](/glossary/Glossary-PrivacyWasabi.md#max-coinjoin-mining-fee-rate).
  If the fee rate exceeds this value, the client will not participate.
  It also actively ensures that the coordinator cannot change the fee rate mid-process.

- **Small Rounds**:  
  The coordinator might run small rounds (due to low liquidity or intentionally), making users pay fees for little or no privacy gain while increasing leftover amounts.
  Small rounds also make targeted _Sybil Attacks_ easier (see below).  
  
  To avoid this, the client enforces a [minimum input count](/glossary/Glossary-PrivacyWasabi.md#absolute-min-input-count).
  If the round does not meet this threshold, the client will drop out.

- **Raising Minimum Output Amount**:  
  The coordinator controls the minimum output denomination.
  Increasing this value forces the client to forfeit more leftovers, which benefits the coordinator financially.  
  
  To avoid this, the client enforces that the minimum output amount of a round is at most 10 000 sats.

_**Privacy & Availability Concerns**_

- **Denial of Service (DoS)**:  
  The coordinator could reject or blacklist certain UTXOs, preventing them from participating in the coinjoin.

- **Targeted Sybil Attack**:  
  The coordinator could include only one genuine coin and have the other inputs be its own coins, giving the target a false sense of privacy.
  However, this does not reduce the coin's existing privacy and can be expensive in terms of fees.
  Other users would also notice a lack of mixed coins.  
  Learn more about this attack [here](https://github.com/WalletWasabi/WabiSabi/blob/master/protocol.md#attacks-on-privacy).

- **Metadata Leak**:  
  While this is not a direct attack by the coordinator, if a client disconnects after registering multiple coins, the coordinator may assume that these coins belong to the same owner as they all stop sending the subsequent required requests.

### What is the history of Wasabi?

Ádám Ficsor worked with several others on a privacy-focused Bitcoin wallet called Hidden Wallet all the way [back in December 2015](https://docs.google.com/drawings/d/1wLL7aSgYBWNoyzllg6_haisFt-gQCf-QUzVzQPkARts/edit).
Wasabi 1.0 was unveiled in 2018 by Ádám at the Building on Bitcoin conference .
At the time, Wasabi was essentially HiddenWallet rebranded and rewritten from scratch with some new features.

Key dates:
- The 1.0 Beta release on August 1, 2018 (on the first anniversary of UASF)
- The 1.0 release on October 31, 2018 (on the tenth anniversary of the Bitcoin Whitepaper)
- The 2.0 Testnet release on March 1, 2022
- The 2.0 release on June 15, 2022
- The shutdown of zkSNACKs coordinator on June 1, 2024

Wasabi Wallet 1.0 unveiled at _Buildig on Bitcoin_ conference 2018:
[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/XORDEX-RrAI?t=1025)

Wasabi Wallet 2.0 launch livestream:
[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/b1Vligm0SO8)

### Why is Wasabi libre and open-source software?

Wasabi follows Bitcoin's philosophy by making the software [open-source](https://github.com/WalletWasabi/WalletWasabi/) and by publishing it under [MIT license](https://github.com/WalletWasabi/WalletWasabi/blob/master/LICENSE.md).
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

For more info please see [WabiSabi](https://github.com/WalletWasabi/wabisabi).

### What are the supported operating systems?

Wasabi runs in most operating systems with 64-bit architecture.
For the complete list of all the officially supported operating systems, click [here](https://github.com/WalletWasabi/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-operating-systems).

### What are the minimal requirements to run Wasabi?

As long as your operating system is [supported](https://github.com/WalletWasabi/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-operating-systems), Wasabi should be able to run on your hardware.
The more transactions a wallet has made, the more resources Wasabi will consume, particularly RAM.
The software can also consume a significant amount of CPU for specific tasks, such as coinjoins or wallet loading.
Approximately 3 GB of disk space are also needed, mainly to store the [block filters](/FAQ/FAQ-UseWasabi.md#what-are-bip-158-block-filters).
If you are running the wallet on a system with scarce resources, consider using the [daemon](https://github.com/WalletWasabi/WalletWasabi/tree/master/WalletWasabi.Daemon) instead of the GUI application.

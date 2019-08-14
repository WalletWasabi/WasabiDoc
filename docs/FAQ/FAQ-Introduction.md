---
{
  "title": "Introduction FAQ",
  "description": "Frequently asked questions regarding the introduction to Wasabi in general. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Introduction to Wasabi

## The Basics

:::details
### Explain Wasabi like I'm 5

Wasabi is a software wallet to manage your Bitcoin private keys.
It is tailor made to protect your privacy on every step.
You can easily send and receive bitcoin without the permission of anyone.
With a special tool called a CoinJoin you can make sure nobody finds out how you spend your money.
Although Wasabi has some very advanced magic under the hood, it is rather easy to use.
You can also use Wasabi to manage your hardware wallet, and it even connects to your own full node.
Of course, Wasabi is libre and open source, which means you have full control over the software you manage your money with.
:::

::::details
### Who can use Wasabi?

Every single line of code in Wasabi, the [wallet](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Gui), the [backend server](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend), the [tests](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Tests), the [packager](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Packager), the [library](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi), the [daemon](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Gui/CommandLine), the [api](https://wasabiwallet.io/swagger/), the [documentation](https://github.com/zkSNACKs/WasabiDoc/tree/master/docs) - has always been and will always be libre and open source under the [MIT license](https://github.com/zkSNACKs/WalletWasabi/blob/master/LICENSE.md).
This means that anyone, yes, ANYONE can use Wasabi without permission, for any use case, free of charge.

Wasabi is used by individuals to receive and spend every day payments, to manage their hardware wallet long term hodlings, and to CoinJoin their sats for added privacy.
There are also entrepreneurs who use Wasabi to defend their customers from spies and to ensure a private business relationship.
Young kids have Wasabi to stack the sats gifted by grandma, and they learn the importance of hodling.

:::tip
Wasabi is a tool for everyone.
:::
::::

:::details
### What is a CoinJoin?

A mechanism by which multiple participants combine their coins (or UTXOs, to be more precise) into one large transaction with multiple inputs and multiple outputs.
An observer cannot determine which output belongs to which input, and neither can the participants themselves.
This makes it difficult for outside parties to trace where a particular coin originated from and where it was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver).

This can be done with non-custodial software like Wasabi that eliminates the risk of funds disappearing or being stolen.
Each of the signatures are created on the participants’ computers, so anyone trying to connect the signatures is unable to alter the transaction or redirect the funds.
The funds will always be in a Bitcoin address that you control.

It’s possible to do this in a decentralized way so that the service does not rely on external parties or centralized servers.
It just needs the participants of the transaction.

CoinJoin can be applied multiple times, and as many transactions are grouped together, participants may save on transaction fees.
CoinJoin is the preferred method of gaining privacy in the Bitcoin network.
It is even possible that this functionality might one day be included directly on the protocol level as standard, as some altcoins already do.

In very simple terms, CoinJoin means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.

See also the [Bitcoin Wiki on CoinJoins](https://en.bitcoin.it/wiki/CoinJoin)
:::

:::details
### Do I need to trust Wasabi with my coins?

No, Wasabi's CoinJoin implementation is trustless by design.
The participants do not need to trust each other or any third party. Both the sending address (the CoinJoin input) and the receiving address (the CoinJoin output) are controlled by your own private keys.
Wasabi merely coordinates the process of combining the inputs of the participants into one single transaction, but the wallet can neither steal your coins, nor figure out which outputs belong to which inputs (look up “[Chaumian CoinJoin](https://github.com/nopara73/ZeroLink#ii-chaumian-coinjoin)” if you want to know more).
:::

:::details
### What is the privacy I get after mixing with Wasabi?
This depends on how you handle your outputs after the CoinJoin.
There are some ways how you can unintentionally undo the mixing by being careless.
For example, if you make a 1.8 BTC transaction into Wasabi, do the CoinJoin, and then make one single outgoing transaction of 1.8 BTC, a third party observer can reasonably assume that both transactions belong to one single entity, due to both amounts being virtually the same even though they have been through a CoinJoin.
In this scenario, Wasabi will barely make any improvement to your privacy, although it will still have a protective effect against unsophisticated observers.

Another deanonymizing scenario happens when you combine mixed outputs with unmixed ones when sending: a third party will be able to make the connection between them as belonging to the same sender.

The practice of being careful with your post-mix outputs is commonly facilitated through coin control, which is the default way of interacting with the wallet.
Find out more about coin control it [here](https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2).
:::

:::details
### Can I hurt my privacy using Wasabi?

No.
The worst thing that can happen (through user’s negligence post-mix) is that the level of your privacy stays the same as before CoinJoin.
It is crucial to understand that Wasabi is not a fool-proof solution if you neglect to practice coin control after the mixing process.
:::

:::details
### Why is Wasabi Bitcoin-only?

There are countless reasons why it is the only logical choice to be [bitcoin-only](https://bitcoin-only.com).
With Bitcoin we have a once in a lifetime opportunity to manifest libre sound money.
If we suceed, then this might emerge an utmost beautiful agora of sovereign individuals.
If we fail, then this will conjure up the most horrific Orwellian nightmare.
There is no room for wasted time and energy, this Great Work requires our full attention.
Any line of code written to support a random shitcoin takes away scarce developer time to work on real problems.
:::

:::details
### Why is the anonymity set 100??

Sufficient anonymity set is a hard question, that not yet enough research done to answer it definitively.
The rough consensus among many privacy researchers is that an anonymity set above 50 could be considered sufficient.
Furthermore our calculations have shown that with the liquidity of today’s mixers our mixing rounds would take 1 to 5 minutes with 100 anonymity set and 0.1 BTC fixed denomination.
:::

## For advanced Wasabikas

:::details
### Can the coordinator attack me?

The nature of Wasabi is that you should not need to trust the developers or the Wasabi coordinating server, as you can verify that the code does not leak information to anyone.
The developers have gone to great lengths in an attempt to ensure that the coordinator cannot steal funds nor harvest information (for example, the outputs sent from your Wasabi Wallet are blinded, meaning that even the Wasabi server cannot link the outputs to the inputs).

The only known possible 'malicious' actions that the server *could* perform are two sides of the same coin;
- **Blacklisted UTXO's**:
Though this would not affect the users who are able to successfully mix with other 'honest/real' peers.
- **Targeted Sybil Attack**:
The follow-up concern is the inverse of the above.
It is possible that the server could *only* include one 'honest/real' coin in the mix and supply the other coins themselves.
This would give a false sense of security, **but it would not worsen the existing privacy of the coin**.
It would also be noticaable to all users excluding the user being targeted as their coins would not be mixed.
It has been argued that this 'attack' would be very costly in terms of fees because the number of coins being mixed is verifiable.
Though it is true that fees would have to be paid to zkSNACKs every round, this does not matter if it is zkSNACKs that is acting maliciously (as they get the funds back).
Typical rounds currently have <100 people per mix, with the minimum input being ~0.1 BTC with a fee of 0.003% per anonymity set.
Taking the 'worst case' (100 people, each mixing 0.1 BTC) gives 0.03 BTC per round.
This is not prohibitive and is thus a valid concern.
That said, if multiple chain-analysis companies attempt to flood the zkSNACKs mix (to decrease the true anonymity set) they will hinder each other's efforts (unless they are cooperating).
See [here](https://github.com/nopara73/ZeroLink/#e-sybil-attack) for more info.
:::

## Further Questions

- What is the history of Wasabi?
- How does Zero Link differ from other CoinJoin implementations?
- Who is contributing to Wasabi?
- What are the minimal requirements to run Wasabi?
- Why is Wasabi libre and open source software?
- What do peers say about Wasabi?

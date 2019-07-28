# Introduction to Wasabi
- Explain Wasabi like I'm 5
- What is the history of Wasabi?
- [What is a CoinJoin?](FAQ-Introduction.md#what-is-a-coinjoin)
- How does Zero Link differ from other CoinJoin implementations?
- [Do I need to trust Wasabi with my coins?](FAQ-Introduction.md#do-i-need-to-trust-wasabi-with-my-coins)
- [What is the privacy I get after mixing with Wasabi?](FAQ-Introduction.md#what-is-the-privacy-i-get-after-mixing-with-wasabi)
- [Can I hurt my privacy with Wasabi?](FAQ-Introduction.md#can-i-hurt-my-privacy-with-wasabi)
- Who can use Wasabi?
- Who is contributing to Wasabi?
- What are the minimal requirements to run Wasabi?
- Why is Wasabi libre and open source software?
- Why is Wasabi Bitcoin-only?
- [Does Wasabi have a warrant canary?](FAQ-Introduction.md#does-wasabi-have-a-warrant-canary)
- What do peers say about Wasabi?

---

### What is a CoinJoin?
A mechanism by which multiple participants combine their coins (or UTXOs, to be more precise) into one large transaction with multiple inputs and multiple outputs. An observer cannot determine which output belongs to which input, and neither can the participants themselves. This makes it difficult for outside parties to trace where a particular coin originated from and where it was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver).  

In very simple terms, CoinJoin means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.  

See also: https://en.bitcoin.it/wiki/CoinJoin

### Do I need to trust Wasabi with my coins?
No, Wasabi's CoinJoin implementation is trustless by design. The participants do not need to trust each other or any third party. Both the sending address (the CoinJoin input) and the receiving address (the CoinJoin output) are controlled by your own private keys. Wasabi merely coordinates the process of combining the inputs of the participants into one single transaction, but the wallet can neither steal your coins, nor figure out which outputs belong to which inputs (look up “[Chaumian CoinJoin](https://github.com/nopara73/ZeroLink#ii-chaumian-coinjoin)” if you want to know more).

### What is the privacy I get after mixing with Wasabi?
This depends on how you handle your outputs after the CoinJoin. There are some ways how you can unintentionally undo the mixing by being careless. For example, if you make a 1.8 BTC transaction into Wasabi, do the CoinJoin, and then make one single outgoing transaction of 1.8 BTC, a third party observer can reasonably assume that both transactions belong to one single entity, due to both amounts being virtually the same even though they have been through a CoinJoin. In this scenario, Wasabi will barely make any improvement to your privacy, although it will still have a protective effect against unsophisticated observers.  

Another deanonymizing scenario happens when you combine mixed outputs with unmixed ones when sending: a third party will be able to make the connection between them as belonging to the same sender.

The practice of being careful with your post-mix outputs is commonly facilitated through coin control, which is the default way of interacting with the wallet. Find out more about coin control it [here](https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2).

### Can I hurt my privacy using Wasabi?
No. The worst thing that can happen (through user’s negligence post-mix) is that the level of your privacy stays the same as before CoinJoin. It is crucial to understand that Wasabi is not a fool-proof solution if you neglect to practice coin control after the mixing process.

### Does Wasabi have a warrant canary?
The nature of Wasabi is that you should not need to trust the developers or the Wasabi coordinating server, as you can verify that the code does not leak information to anyone. The developers have gone to great lengths in an attempt to ensure that the coordinator cannot steal funds nor harvest information (for example, the outputs sent from your Wasabi Wallet are blinded, meaning that even the Wasabi server cannot link the outputs to the inputs). 

The only known possible 'malicious' actions that the server *could* perform are two sides of the same coin;
- **Blacklisted UTXO's**:
Though this would not affect the users who are able to successfully mix with other 'honest/real' peers. 
- **Targeted Sybil Attack**:
The follow-up concern is the inverse of the above. It is possible that the server could *only* include one 'honest/real' coin in the mix and supply the other coins themselves. This would give a false sense of security, **but it would not worsen the existing privacy of the coin**. It would also be noticaable to all users excluding the user being targeted as their coins would not be mixed. It has been argued that this 'attack' would be very costly in terms of fees because the number of coins being mixed is verifiable. Though it is true that fees would have to be paid to zkSNACKs every round, this does not matter if it is zkSNACKs that is acting maliciously (as they get the funds back). Typical rounds currently have <100 people per mix, with the minimum input being ~0.1 BTC with a fee of 0.003% per anonymity set. Taking the 'worst case' (100 people, each mixing 0.1 BTC) gives 0.03 BTC per round. This is not prohibitive and is thus a valid concern. That said, if multiple chain-analysis companies attempt to flood the zkSNACKs mix (to decrease the true anonymity set) they will hinder each other's efforts (unless they are cooperating). See [here](https://github.com/nopara73/ZeroLink/#e-sybil-attack) for more info.

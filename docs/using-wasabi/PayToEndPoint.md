---
{
  "title": "Pay to EndPoint",
  "description": "A detailed explanation of how Pay to EndPoint can be used to hide transaction metadata in a collaborative CoinJoin. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Pay To EndPoint

[[toc]]

---

> Satoshi's Vision + CoinJoin + Bulletproofs = Sad Blockchain Analysts

I attended a brainstorming event on Bitcoin privacy.
In this article, I will assume all participants of this meeting would like to remain anonymous, unless she or he explicitly asks me to properly credit her or him.
To keep this post coherent, I will refer to specific participants as Jessie, James and Meowth in an interchangeable, (not pseudonymous) way, hence Team Rocket.

My goal today is to put out one of the ideas of this meeting in a digestible way.
I assume some other Team Rocket member will do the same, in their own way.
But first, let me walk you through some basic concepts.
But before that, I’d like to credit some attendees and link to their articles on the event.

#### Non-Anonymous Attendees

- [Matthew Haywood](https://twitter.com/wintercooled)
- [Adam Back](https://twitter.com/adam3us)
- [Grubles](https://twitter.com/notgrubles)
- [Danger Shony](https://twitter.com/dangershony)
- [Tim Ruffing](https://twitter.com/real_or_random)
- [Adam Gibson](https://twitter.com/waxwing__)

## The Basics

### P2IP

> Bitcoin 0.1 supported Bitcoin addresses just like today, but it also had a “pay to IP address” feature.
>When you used this, you’d connect to the IP and get the sender’s full public key, and then send to that.
>[…] Pay-to-IP was removed around 0.5, I think. — [Theymos](https://reddit.com/u/theymos), 2016

Satoshi built a feature into Bitcoin, called P2IP.
This has terrible security and privacy drawbacks, so it was removed.
Little we knew, when we came up with our Pay To EndPoint (P2EP) scheme, that we reinvented this feature, but in a secure and a privacy enhancing way.
In our scheme the EndPoint can not only be an IP address, but also a domain, preferably a Tor onion.

When Jessie realized what we have done, she jokingly noted: _"We perfected Satoshi's vision!"_

### Bulletproofs

Bulletproofs (BP) is a zero-knowledge proof system, often cited together with Confidential Transactions.
 However we use BP for a different purpose.
We utilize it to prevent a UTXO spoofing attack, that I will expand upon later.
However James argues, we do not even need to deal with the implementation complexity of Bulletproofs, since a simple cut and choose defense might be sufficient.

It is also worth noting, that our scheme does not require any soft or hard fork.

### CoinJoin

My regular readers are probably sick of me repeatedly explaining CoinJoin, (CJ) so feel free to skip this two sentences here.
CJ stands for joining multiple users’ inputs into one transaction.
It is also worth pointing out that most CJ scheme uses equal sized outputs.
If it does not, then it provides zero privacy. But that is just an oversimplification, I often say.
No matter how unintuitive it may seem, there are CJs with unequal sized outputs those still provide privacy, because the adversary have to recognize this was a CJ transaction in the first place.
I will expand upon it later.

### Blockchain Heuristics

Blockchain Heuristics are the methods Blockchain Analytics uses to deanonymize you.
These companies are founded on these heuristics. The scheme Team Rocket is proposing breaks some of these heuristics to the point that today’s Blockchain Analysis would be instantly broken, even if you do not use our scheme, since it would be really hard to figure out if you used P2EP or not.

#### Heuristic 1: All inputs are co-owned.

This means, if you are joining together more than one input, then it must all come from you.
You could say that CJ breaks this assumption instantly, but (equal sized) CJ is easily identifiable, so that is easy to handle.

#### Mixing Heuristics: Subset-Sum Analysis.

This heuristics can be applied to CJ transactions, (and all mixing technique in general,) where the output sizes are not equal.
For example if James and Meowth joins their 1 BTC and 2 BTC coins together and the outputs would be 2 BTC and 1 BTC, it is easy to delink that transaction.
Note, it is only possible if CJ transaction was identified.

#### Heuristics Meta: What Doesn’t Exist Doesn’t Exist.

It is evident, but it is worth pointing out.
If Blockchain Analysis sees a transaction on the Blockchain that theoretically can be interpreted in many different ways, but in practice only one way of interpretation is implemented at that point in time, then that interpretation is what Blockchain Analysis assumes.
This is why it is really easy to be anonymous with Bitcoin today.
Just get familiar with some Blockchain Analysis heuristics, break them manually and they will interpret your transaction in the wrong way with 99% accuracy, because you are the only person who builds such transaction in the world and they are not aware of them.
To denounce the evils of Blockchain Analytics!

To go to town with heuristics, see Adam Gibson’s [Building on Bitcoin talk](https://www.youtube.com/watch?v=XORDEX-RrAI&feature=youtu.be&t=23359), Kristov Atlas’s [CoinJoin Sudoku](https://www.coinjoinsudoku.com), where he broke Blockchain info’s now discontinued SharedCoin feature and [Nick Jonas’s 2016 talk](https://www.youtube.com/watch?v=HScK4pkDNds) in a Zurich Meetup.

### Clusterfuck Wallet

The last concept I would like to get you familiar with is something I have written about.
It is the [clusterfuck wallet](https://medium.com/@nopara73/new-bitcoin-anonymity-technique-the-clusterfuck-wallet-d48aa1787324).
This is either the craziest idea I ever had or the most brilliant one
medium.com

> I remember reading a while ago Mircea Popescu’s ridiculous article, where he states something like Bitcoin is perfectly anonymous.
>His reasoning went like this: Blockchain analysis cannot make any reasonable conclusion, because a Bitcoin transaction can be interpreted in many different ways. — Ádám Ficsor

The goal of this wallet was to make Blockchain Heuristics as unreliable as it can get, by take advantage of Heuristics Meta: What Doesn’t Exist Doesn’t Exist.
The idea is: make them to exist. With that creating chaos, or “clusterfuck” if you like.
Turns out P2EP is a great tool to bring many exotic transactions into existence, not only the one the Team Moon Rocket is proposing here.

## The Protocol

### Part 1: End-To-End Connection Establishment

The idea is to make the recipient participate in the transaction, which would be great for many different reasons, I will come back to later.
For now, we had a practical problem to solve.
How do we establish a connection between the sender and the recipient in a P2P way?

Jessie’s idea was to extend the [BIP21 Bitcoin URI Scheme](/using-wasabi/BIPs.md#bip-21-uri-scheme) with an endpoint.
Somehow like this: 
`bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?endpoint=http://3g2upl4pq6kufc4m.onion`

In this case, first the sender would try to figure out if the recipient is online.
If it is, then make a joint transaction together.
If it is not, then make the transaction in the traditional way.
The problem is [BIP 21](/using-wasabi/BIPs.md#bip-21-uri-scheme) is not fully adopted and it would be confusing to some user to copypaste a [BIP 21](/using-wasabi/BIPs.md#bip-21-uri-scheme) uri instead of just an address.
Team Rocket still debates if this is acceptable or not.

**James has provided an arguably infeasible solution to this issue. What if we would generate the endpoint from the given Bitcoin address?**

In this case, UX would stay the same: the receiver gives a Bitcoin address to the sender.
However in the background the sender would try to establish a connection to the location corresponding to the Bitcoin address given and if that does not work, the sender sends the transaction normally.

The impracticality of James’s idea is that we would need either our own anonymity network to achieve this, like a fork of Tor or we would have to convince an existing anonymity network to incorporate our scheme.
Nevertheless, the idea is novel and worth keeping in mind.

### Part 2: Sender-Receiver CoinJoin

It may seem like I do not even have to say more, because negotiating a transaction where the sender and the recipient both participates is not that hard, especially that they usually trust each other, right?
Wrong.
Their was a point where Team Rocket gave up on this scheme, because they thought they encountered an unsolvable issue.

What if a random sender connects to a publicly known receiver, start negotiating the transaction and ends up not signing in the end? So the sender would learn a UTXO of the receiver and run away with that sensitive information, without following up.

In the most desperate moment Meowth had an idea: What if the receiver would feed the sender with fake UTXOs for a while, forcing the sender to sign a final transaction every time, but only the final, transaction with the receiver’s real UTXO would be broadcasted at the end?

In this case, if the sender is malicious and does not follow up, the only thing he can learn is “there is a small chance of probability that this utxo is the receiver’s.”
We called this to **The Serial Method**.
James quickly came up with **The Parallel Method**, where many UTXOs would be sent in parallel and one of them is the real one.
It reduces the number of rounds, however it tells the attacker that one of the UTXO is the real UTXO.

And finally Jessie came up with something elegant: **The Bulletproofs Method**.
But I will not pretend that I fully understand it and I will leave it to others to expand upon the exact way of doing this.
The bottom line is, both the Serial and the Parallel method leaks a small amount of information, the Bulletproofs method does not leak any, and it does not need monitoring the Blockchain to select fake UTXOs.

### Extensions

Before I explain the novelty of Part 2: Sender-Receiver CoinJoin protocol, I would like to point out that, Part 1: End-To-End Connection Establishment protocol has a side effect, namely it can be used to facilitate many things, I described in the Clusterfuck Wallet post.
One thing this can easily facilitate is merge avoidance.
If the sender would want to join multiple coins together, it could ask for multiple Bitcoin addresses from the receiver and send the coins one by one.
It could also establish a future cooperation with the receiver.
For example, the receiver, if online could participate in later transactions of the sender, thus breaking Heuristics 1 and Meta.
But really, if this P2EP would get adopted, the limit of the number of strange schemes, all breaking Blockchain Analysis assumptions is just the developer’s imagination.

## The Novelty of Sender-Receiver Scheme

If Blockchain Analysis looks at the transaction above, it will deduct:

- The sender paid 6 BTC to the receiver.
- The largest coin of the sender was 5 BTC.
- The change is 2 BTC.

And some other things.
However if it the receiver participated in the transaction above, then this transaction could be interpreted in multiple ways, **breaking some blockchain analysis heuristics, not only the transaction level, but globally!** Remember Heuristics Meta?
What does not exist, that does not exist.
Thus if some people start using strange schemes, that affects how Blockchain analysis interprets other transactions, too.

#### Side effect 1: 
In exchange for the privacy benefit, the sender has to pay more fees than a normal transaction.
It is a con for the sender, but a pro for the receiver, since the receiver does not have to consolidate its coin later.
Also it is a pro from a global point of view, due to its UTXO consolidation effects, I will detail a few lines below.

#### Side effect 2: 
Harder to coordinate, since the receiver must be online and the payment will take a few seconds longer.
But it is arguable, that if everyone would be able to use this scheme all the time, then that would be the new pattern, thus the new reliable Heuristics for Blockchain analysis.
It is crucial that not everyone use this pattern all the time. Its practical limitations achieves its goal.

#### Side effect 3: 
Receiver must have a hot wallet.
This is problematic in a buyer to merchant payment, since merchants usually receive coins to cold wallets.
While my above comment still applies here, notice that this notion makes our problem of UTXO spying a corner case?
That attack only applied if “the receiver is publicly known.”
In peer to peer, person to person payments, the attacker would have to somehow first acquire an endpoint to a receiver.

#### Side effect 4: 
Wallets must be deencrypted.
Since many wallets only send-time decrypt the private keys, it would need to decrypt receive-time, too.
There are multiple ways to implement this.
It could be implemented in address generation time, which in our case it is also an endpoint generation time.
But if it is strictly implemented at receive time, the UTXO spying defense may not be needed at all.

##### Side effect 5: 
It helps with UTXO bloat.
Let us assume the above transaction is a Sender-Receiver transaction.
Then, if the receiver would not participate, that would mostly result in a one input, two output transaction.
This also means, the receiver would not have to consolidate its UTXOs later, which is a huge win for privacy.

## Conclusion

Overall, I feel this scheme can help a lot in Bitcoin’s privacy globally, especially if it is mixed with other clusterfuck wallet techniques.
However, it must be said, there are some practical problems with it on the receiver’s side. Nevertheless it is simple to implement on the sender side and it affects globally everyone’s privacy, even those who do not use this scheme.

In the end… at the very least.
Crazy ideas always worth writing down.
Sometimes they end up changing things.

---
{
  "title": "Network Level Privacy",
  "description": "A comparison of the network level privacy of Wasabi wallet and Bitcoin Core. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Network Level Privacy - Bitcoin Core vs Wasabi Wallet

[[toc]]

---

Bitcoin Core, more specifically full nodes are considered to be the pinnacle of network level privacy in Bitcoin wallets that no other wallet type can come close to.
It is not difficult to see why: full nodes download the whole Blockchain and establish your wallet balances locally, so there is zero chance of any third party figuring out which addresses are in your wallet and which addresses are not.

Compare this to other light wallets, which query a backend server to get information regarding specific addresses or use [BIP 37](/using-wasabi/BIPs.md#bip-37-connection-bloom-filtering) bloom filtering SPV wallet protocol, which is probably [even worse](https://jonasnick.github.io/blog/2015/02/12/privacy-in-bitcoinj/).
And there is Electrum, which [sends your addresses](https://www.reddit.com/r/Bitcoin/comments/2feox9/electrum_securityprivacy_model/ck8szc0/) to random Electrum servers.

The vision of a light wallet that does not leak too much information while establishing the user’s UTXO set had haunted Bitcoin developers for centuries.
In fact, even [BIP 37](/using-wasabi/BIPs.md#bip-37-connection-bloom-filtering) started out as a privacy improvement, it just turned out to be not one later.
But there were decent attempts: some developers, like Jonas Schnelli, the Stratis team and myself [built](https://github.com/bitcoin/bitcoin/pull/9076) [wallet](https://github.com/stratisproject/Breeze) [software](https://github.com/zkSNACKs/WalletWasabi/tree/hiddenwallet-v0.6) that only downloaded blocks from the creation of the user’s wallet.
Some devs, like Nicolas Dorier attempted to [patch](https://github.com/NicolasDorier/NBitcoin.SPVSample) the [BIP 37](/using-wasabi/BIPs.md#bip-37-connection-bloom-filtering) and some others, like the guys at Lightning Labs came up with a whole new light wallet architecture: [BIP 157](/using-wasabi/BIPs.md#bip-157-client-side-block-filtering)-[BIP 158](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients).
The MoneroWorld folks want you to delegate [running your node to the cloud](https://moneroworld.com/).
There were also others, like Chris Belcher, who said: “fuck that” and created [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server) that lets you connect your Electrum client to your full node.
Finally I have been noticing a positive trend recently of companies selling [boxes](https://www.nodl.it) those will run a full node for you out of the box.

And then, there’s [Wasabi Wallet](https://wasabiwallet.io), which is a BIP157-ish client side filtering light wallet and partly integrates to your full node, too.
Which brings me to the topic of this article: Just a few hours ago, with Wasabi Wallet, we achieved the best network level privacy that is possible with today’s Bitcoin.

:::tip
Since [v1.1.10](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.10), Wasabi has [partial Bitcoin Core integration](https://github.com/zkSNACKs/WalletWasabi/pull/2495).
This means that it is possible (but not mandatory) to start Bitcoin Core during the startup of Wasabi.
Without having to install or configure anything.
:::

## Terminology

`V` Stands for Verification or Validation.
They are used interchangeably, but I’m pretty sure one of it is correct.
Veridation?

`FN`, Full Node, Fully Veridating Node.
Downloads and veridates all the Bitcoin blocks ever created, but for our purposes (privacy) only the downloading part matters.

`SPV Node`, Simplified Payment Veridating Node.
Only synchronizes the header chain (whatever that is) and can veridate that you have a transaction by applying some merkle magic.
None of this matters for us though.
The important thing is to notice that SPV has nothing to do with privacy, it’s really just a way of making sure transactions happened.
By extension a full node has nothing to do with privacy either.
It’s just describing how the node makes sure transactions happened.
It veridates the whole blockchain, of course in order to do so, it has to download the whole blockchain, which enables wallet UTXO retrieval locally, which is the most private way to do that.
Wait, so it has something to do with privacy after all?

`Full-SPV`, Full-Block SPV, Full Block Downloading SPV Node.
Downloads all the blocks from the creation of the wallet and does SPV verification on them.
Wait, did I just doubled the V word there?
Yes, developers are this inconsistent.
I also hope nobody will ever build a full-SPV wallet that downloads all the blocks, but does centralized validation, because it is impossible to come up with a proper term for that.

Confused yet?
Good.
Now that you recognized the nuanced nature of the topic, you’ll be more forgiving for me butchering the rest of this section with vast oversimplifications:

`Hybrid Full Node`.
Is A light node until the full node synchronizes.
I want Wasabi to be such wallet in the future.

`BIP37`.
Client sends bloom filter to full nodes, full nodes send back data matching the bloom filter.

`Bloom Filter`.
Lets you test if an element is in a set without revealing the set itself.

`Golomb-Rice Filters`.
Smaller bloom filters, used by [BIP 158](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients).

`Client Side Filtering`, Neutrino Filtering, [BIP 157](/using-wasabi/BIPs.md#bip-157-client-side-block-filtering), [BIP 158](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients).
The idea that clients don’t have to send filters to full nodes, but rather they do the opposite: full nodes create filters and send them to clients instead.
From here on clients can download blocks from other sources.
It’s a decently private way of establishing wallet UTXO state.

`Neutrino`.
Lightning Lab’s implementation of the client side filtering protocol.

`Whatever Wasabi Is Doing`.
Our implementation of the client side filtering protocol.

## Zooming Out

It is worth pointing out that network level privacy is just half of the battle.
The other half is the blockchain level privacy, which is outside of the scope of this article.

Furthermore network level privacy consists of two sub categories:

1. Private UTXO Retrieval
2. Private Transaction Broadcasting

## Bitcoin Core

### Private UTXO Retrieval

Bitcoin Core downloads all the blocks ever created and establishes your wallet balances locally.

### Private Transaction Broadcasting

Bitcoin Core broadcasts transactions to other peers on the clearnet, unencrypted.
Other peers cannot figure out which transaction originates from a specific node, because Core does not only broadcast its own transactions, but also propagates every other transaction that hits its mempool.
However some papers note it’s not bulletproof:

> Bitcoin transaction propagation does not hide the source of a transaction very well, especially against a “supernode” eavesdropper that forms a large number of outgoing connections to reachable nodes on the network [[1,2,3]](/using-wasabi/BIPs.md#bip-156-dandelion-privacy-enhancing-routing).

While in practice I suspect it doesn’t matter much, this article intends to examine the details in order to compare Core with Wasabi, thus I start collecting the relevant identified adversaries from here on:

### Adversaries Identified

- Malicious Peer
- Supernode

## Bitcoin Core + Tor

You can use Bitcoin Core with Tor, which solves the above mentioned issue.
In this case a supernode cannot track back transactions to your IP address.

I will consider any entity that can break Tor, a universal adversary, however note, this is inaccurate.
For example most Tor attacks are not possible if exit nodes are not involved.
This and other things like Core’s configurability would overcomplicate the analysis, so that’s why I choose to draw the line here.
I assume that this entity can break the onion routing, not Tor’s encryption itself.

### Adversaries Identified

- Tor Breaker

## Wasabi Wallet

### Private Transaction Broadcasting

Wasabi previously did not maintain its P2P connections over Tor.
Since Wasabi is a non-listening node, broadcasting transactions through other P2P nodes over the clearnet would’ve let the peer to link your IP address to the transaction.
This is why we were broadcasting our transactions to our backend server over Tor.

Now, we started tunneling all our P2P traffic through Tor, too:

- We did it in a way that we only connect to onion nodes, so end to end encryption is now enforced between us and our peers.
All this without involving any exit node.
- We connect to each peer through a different Tor stream.
- This enabled us to replace our transaction broadcasting mechanism.
Now, we broadcast transactions to only one peer over Tor and immediately after that we disconnect the peer.

### Private UTXO Retrieval

Finally we arrived to the interesting part.
Before the P2P Tor implementation Wasabi was doing the following:

The backend server served a constant filter table to all the clients over Tor.
From those filters the clients could figure out which blocks they are interested in and downloaded these blocks and some false-positive blocks from peers.
One block per peer.
When a block was acquired, the peer was disconnected.
There were two issues with this. What if all the peers Wasabi connected to was the same entity for an extended period of time?
Then the Sybil attacking entity would know all the blocks a client is interested in, of which some information could’ve been obtained.
The question arises?
How do you make sure you are the only peer a client connects to for en extended period of time?

The second issue is, what if your ISP is spying on you for an extended period of time?
This is more plausible.
In fact Wasabi’s privacy rating on Bitcoin.org listing was almost scored down to be the same as Bread wallet, because of this, which of course would’ve been ridiculous, since Bread is a [BIP 37](/using-wasabi/BIPs.md#bip-37-connection-bloom-filtering) wallet.
What saved the rating was that I noted, if ISP is an adversary, then Bitcoin Core would’ve failed that in a more spectacular way, since transactions are broadcasted over the clearnet and even if the node is listening, the only transaction that doesn’t come in, but only goes out of the wallet must be the one that originates from the node.

Anyway, Wasabi does this over Tor now.
Because of the end-to-end encryption of the onion network, it immediately defeats an ISP adversary and makes the already impossible job of the Sybil adversary even more impossible.
How do Sybil for an extended period of time, all the nodes those connect to Wasabi?
Or even just one node?
The client is hiding behind Tor.
You cannot even tie together two connections of the client, since the client connects to all your Sybils through a different Tor stream.
The only adversary that could possibly overcome this would have to setup thousands of full nodes over onion and also break Tor itself.

### Adversaries Identified
- ISP
- Tor Breaker Sybil Attacker With Thousands Of Full Nodes Over Onion

## Wasabi Wallet + Full Node

@[youtube](gWo2RAkIVrE)

### Private UTXO Retrieval

If you have a listening full node running in the background (not only Bitcoin Core, any full node) then Wasabi automatically picks it up and instead of asking peers for blocks, it asks blocks from your own node.
Using Wasabi this way results in the same privacy model as Bitcoin Core’s regarding Private UTXO Retrieval.

:::tip
Since [v1.1.10](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.10), Wasabi has [partial Bitcoin Core integration](https://github.com/zkSNACKs/WalletWasabi/pull/2495).
This means that it is possible (but not mandatory) to start Bitcoin Core during the startup of Wasabi.
Without having to install or configure anything.
:::

## Conclusion

> To be useful, security metrics should reflect the difficulty an adversary has in overcoming them. — [entropist](https://www.freehaven.net/anonbib/cache/entropist.pdf)

Because against all reasonable adversaries, a comparison between Bitcoin Core and Wasabi Wallet on network level privacy does not make sense you might think this article was a waste of time.
But you are greatly mistaken.
This article will surely help me win Internet arguments.
And, in the end, isn’t that’s what really matters?

@[youtube](qguwAvA5Fx4)

## Who else knows you are running Bitcoin?

Every time you use software that interacts with a Bitcoin network, and especially a Bitcoin node, you leave a sticky fingerprint in your traffic.
It comes in the form of a small, but unavoidable spike in volume every time a new block is mined and the nodes start gossiping about it.
The blocks in Bitcoin are quite big, and the propagation speed is critical for consensus (greater delay means more frequent accidental forks), so such effect is predictable, and, in a sense, inherent to the Bitcoin architecture.

Notably, the volume of block-related messages was drastically reduced since the introduction of Compact Block Relay ([BIP 152](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki).
Instead of requesting whole blocks, mostly consisting of transactions already known to the node, the peer informed of a new block is only requesting the missing transactions.
Yet the amount of extra communications in the seconds following a new block is still considerable.
This effect may not be noticeable for a single block, but over time it gets statistically significant, and may get exploited.

As reported by [Niko Kudriastev and Michael Maltsev](https://m417z.com/bitsniff/), it is possible to detect Bitcoin communications using nothing but traffic volume over time - an information even most privacy concerned individuals are likely leaking to their law-abiding Internet Service Provider.
In this case, using a VPN and running the node over Tor may not be enough to avoid being detected.

### Protection

There are many ways to go about it, but staying completely undetected is far from trivial - traditional privacy enhancing tools mostly focus on the packet level, which is orthogonal to the technique. Let’s break down the potential defense vectors.

a. **VPN / Tor** - unlikely to affect the time series shape much, and therefore for larger traffic lengths the statistical significance of block-related spikes will inevitably become overwhelming.

b. **Traffic mixing** - for traffic volumes that are orders of magnitude higher than Bitcoin P2P communications, mixing is likely to be very effective.
That would, however, demand constant shielding of both upstream and downstream communications, and couldn’t be done effectively by just running the node on a general purpose machine - any noticeably long unshielded period may be enough for detection.

c. **Being your own ISP** - too spicy for most, but that should work.

d. **Blockstream Satellite** - the ultimate solution.
Eliminates the traffic analysis threat altogether.

Beyond active measures available now, both privacy and bandwidth efficiency of Bitcoin communications are actively worked on.
It is entirely possible that the messaging protocol will get to the point where block propagation doesn’t trigger any significant spikes in traffic volume.

You can read more about BitSniff [here](https://79jke.github.io/BitSniff/) and check the interactive demo [here](https://m417z.com/bitsniff/).

@[youtube](9S8xsDq3PTU)

---
{
  "title": "Network-Level Privacy",
  "description": "A comparison of the network-level privacy of Wasabi wallet and Bitcoin Core. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Network-Level Privacy - Bitcoin Core vs Wasabi Wallet

Bitcoin is a peer-to-peer network of full nodes that define, verify, and enforce the Bitcoin consensus rules.
There is a lot of communication between them and metadata can be used to de-anonymize Bitcoin users.

[[toc]]

## Problem

### Clearnet light clients

When the communication to the network is unencrypted over clearnet, then there is an easy correlation of the Bitcoin transactions to the IP address of the peer who sent it.
The IP address can even be used to find the physical location of the user!

A Bitcoin full node broadcasts not just the transactions of its user, but it also gossips all of the other transactions that it has received from its peers.
Thus it is very difficult to find out which transactions originated from which full node.
However, when a node or a wallet does not gossip all transactions, but only the transactions of its user, then it is easier to find out which node has sent those specific transactions.

There are light wallets, which query a backend server to get information regarding specific addresses or use [BIP 37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki) bloom filtering SPV wallet protocol, which is [extremely bad for privacy](https://jonasnick.github.io/blog/2015/02/12/privacy-in-bitcoinj/).
And there is Electrum, which [sends your addresses](https://www.reddit.com/r/Bitcoin/comments/2feox9/electrum_securityprivacy_model/ck8szc0/) to random Electrum servers.

:::danger
When the user sends the extended public key or a filter of all the addresses to the central server, then the server can **COMPLETELY** deanonymize the users.
:::

## Wasabi's solution

### Block filters over Tor

Wasabi checks if there is a local Tor instance installed, and if so, it uses this to onion-route all the traffic to and from the network.
If Tor is not already installed, then it is accessed automatically from within Wasabi.
This means that by default, all network communication is secured from outside snooping and the IP address is hidden.

Wasabi has a client-backend design that does not compromise user privacy.
Meaning that even without using a full node the user stays private.
The Wasabi backend sends a block filter of all the transactions in each block to all the clients.
Then, users check locally if the block contains any transactions with their addresses.
If not, then the filter is stored for later reference, and no block is downloaded.
However, if there is a user transaction in that block, then Wasabi requests the block from a random Bitcoin P2P node.
This block request is indistinguishable from the regular P2P gossip.

In order to fully verify everything, running a full node is essential.
Wasabi can connect to a full node using the RPC interface.
If connected, Wasabi fetches the blocks and [other data](/using-wasabi/BitcoinFullNode.md#how-does-wasabi-use-your-bitcoin-full-node) from the node.

:::tip Privacy by default!
Wasabi has network-level privacy as good as a Bitcoin full node.
:::

## In-depth comparison 

Furthermore, network-level privacy consists of two sub-categories.

- Private UTXO Retrieval
- Private Transaction Broadcasting

### Bitcoin Core

#### Private UTXO retrieval

Bitcoin Core downloads all the blocks ever created and establishes your wallet balances locally.
This is as good as it gets.

#### Private transaction broadcasting

Bitcoin Core broadcasts transactions to other peers on the clearnet, unencrypted.
Other peers cannot figure out which transaction originates from a specific node because Core does not only broadcast its own transactions but also propagates every other transaction that hits its mempool.
However, some papers note it’s not bulletproof:

> Bitcoin transaction propagation does not hide the source of a transaction very well, especially against a “supernode” eavesdropper that forms a large number of outgoing connections to reachable nodes on the network.
>  [Dandelion: Privacy-Preserving Transaction Propagation](https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki).

#### Adversaries identified

- Malicious Peer
- Supernode

### Bitcoin Core + Tor

You can use Bitcoin Core with Tor, which solves some of the above-mentioned issues.
In this case, a supernode cannot track back transactions to your IP address.

An entity that can break Tor is a universal adversary, however, most Tor attacks are not possible if exit nodes are not involved.
It is reasonable to assume that this entity can break the onion routing, not Tor's encryption itself.

#### Adversaries identified

- Tor breaker

### Wasabi Wallet light node

#### Private UTXO retrieval

The backend server serves block filters to all the clients over Tor.
From those filters, the clients figure out which blocks they are interested in and download them (and some false positive blocks) from peers.
One block per peer, and always over a fresh Tor stream.
When a block is acquired, the peer gets disconnected.
Because of the end-to-end encryption of the onion network, it immediately defeats an ISP adversary and makes the already impossible job of the Sybil adversary even more impossible.
The only adversary that could possibly overcome this would have to setup thousands of full nodes over Tor and also break Tor itself.

#### Private transaction broadcasting

All Wasabi traffic is tunneled through Tor.
Wasabi connects only to onion nodes, so end-to-end encryption is enforced between the wallet and peers.
All this without involving any exit node.
Wasabi connects to each peer through a different Tor stream.
A new Bitcoin peer is chosen for every transaction broadcast.

:::tip Everything over Tor!
Wasabi broadcast transactions to only one peer over Tor, and immediately after that the peer is disconnected.
:::

#### Adversaries identified
- ISP
- Tor Breaker Sybil Attacker With Thousands Of Full Nodes Over Onion

### Wasabi Wallet + full node

Wasabi can connect to a specified node using the Bitcoin RPC interface.

#### Private UTXO retrieval

If a specific node is connected, Wasabi will fetch the blocks from this node.
Using Wasabi this way results in the same privacy model as Bitcoin Core's, regarding Private UTXO Retrieval.

#### Private transaction broadcasting

Wasabi will first try to broadcast a transaction to the connected full node. 
If the node is not available it will broadcast to the Bitcoin P2P network or an external site, over Tor.

Read more [here](/FAQ/FAQ-UseWasabi.md#how-is-the-transaction-broadcast).

## Universal Attacks

Every time you use software that interacts with a Bitcoin network, and especially a Bitcoin node, you leave a sticky fingerprint in your traffic.
It comes in the form of a small but unavoidable spike in volume every time a new block is mined and the nodes start gossiping about it.
The blocks in Bitcoin are quite big, and the propagation speed is critical for consensus (greater delay means more frequent accidental forks), so such effect is predictable, and, in a sense, inherent to the Bitcoin architecture.

Notably, the volume of block-related messages was drastically reduced since the introduction of Compact Block Relay ([BIP 152](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki).
Instead of requesting whole blocks, mostly consisting of transactions already known to the node, the peer informed of a new block is only requesting the missing transactions.
Yet the amount of extra communications in the seconds following a new block is still considerable.
This effect may not be noticeable for a single block, but over time it gets statistically significant and may get exploited.

As reported by [Niko Kudriastev and Michael Maltsev](https://m417z.com/bitsniff/), it is possible to detect Bitcoin communications using nothing but traffic volume over time - a piece of information even most privacy concerned individuals are likely leaking to their law-abiding Internet Service Provider.
In this case, using a VPN and running the node over Tor may not be enough to avoid being detected.

### Protection

There are many ways to go about it, but staying completely undetected is far from trivial - traditional privacy-enhancing tools mostly focus on the packet level, which is orthogonal to the technique.
Let’s break down the potential defense vectors.

- **VPN / Tor** - unlikely to affect the time series shape much, and therefore for larger traffic lengths the statistical significance of block-related spikes will inevitably become overwhelming.

- **Traffic mixing** - for traffic volumes that are orders of magnitude higher than Bitcoin P2P communications, mixing is likely to be very effective.
That would, however, demand constant shielding of both upstream and downstream communications, and couldn't be done effectively by just running the node on a general-purpose machine - any noticeably long unshielded period may be enough for detection.

- **Being your own ISP** - too spicy for most, but that should work.

- **Blockstream Satellite** - the ultimate solution.
Eliminates the traffic analysis threat altogether.

Beyond active measures available now, both the privacy and the bandwidth efficiency of Bitcoin communications are actively worked on.
It is entirely possible that the messaging protocol will get to the point where block propagation doesn't trigger any significant spikes in traffic volume.

You can read more about BitSniff [here](https://79jke.github.io/BitSniff/) and check the interactive demo [here](https://m417z.com/bitsniff/).

[![Watch the video](/Logo_without_text_with_bg_dark_with_yt.png)](https://youtu.be/9S8xsDq3PTU)

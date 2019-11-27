---
{
  "title": "Privacy in Bitcoin",
  "description": "An introduction to the positive and negative side of Privacy in Bitcoin today. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Privacy in Bitcoin

> The possibility to be anonymous or pseudonymous relies on you not revealing any identifying information about yourself in connection with the bitcoin addresses you use.
If you post your bitcoin address on the web, then you’re associating that address and any transactions with it with the name you posted under.
If you posted under a handle that you haven’t associated with your real identity, then you’re still pseudonymous.
For greater privacy, it's best to use bitcoin addresses only once.

By Satoshi Nakamoto in [How anonymous are bitcoins? - Bitcointalk](https://bitcointalk.org/index.php?topic=8.msg34#msg34)

[[toc]]

---

## Why it is important to keep your funds private

One of the apparent contradictions of Bitcoin is the notion that your transactions can be private but have a public transaction record.

As a financial system, Bitcoin functions completely differently from the established banking network.
Bitcoin allows you to store funds yourself, without the need for a third party, and therefore places the burden of keeping said funds secure and accessible on you.

While opening an account with a traditional bank or other financial institution requires significant cost and effort, creating a Bitcoin account is quick and easy to do on your home computer.
This speedy process makes it possible to create hundreds of separate accounts if you wish.

Two aspects in particular—privacy and identity—function very differently with Bitcoin than in the legacy financial system.

_**Pseudonyms protect your identity in Bitcoin**_

A bank account, PayPal account, or credit card is always tied to a real identity, making it difficult for many people to open them. 
Bitcoin allows you to use any persona or online identity you wish.

Being able to use the internet anonymously or pseudonymously is the only way for many people to truly be themselves.
Hundreds of millions of people around the globe are not accepted in their societies for reasons they cannot control.

Pseudonyms are used by women speaking up for their rights, atheists living in religious societies, and people critical of their governments to spread their thoughts, empower their causes, and encourage those around them to do the same.

These courageous men and women put their own safety and well-being at risk to defend who they are and what they believe in. 
Technology empowers them to become leaders of social change in societies by providing this very pseudonymity.
Technology also connects like-minded individuals so they can form the communities for which they strive.

Maintaining an identity with a large following might require paid services such as blogs, logo designs, stock photos, VPNs, or translations.
Without the ability to pay for these services anonymously, you would be forced to reveal your true identity in order to maintain your pseudonym situation which clearly makes no sense, and one with potentially dangerous ramifications.

_**How Bitcoin empowers anonymity**_

Bitcoin is an important, empowering technology.
Using a Bitcoin account with a pseudonym protects your right to remain anonymous on the internet.
It allows anonymous or pseudonymous fundraising.
Groups can collectively control Bitcoin accounts and choose to either hide or reveal financial information at will.

There are many positive reasons for a private and secure banking system like Bitcoin.

For example, a workers’ rights group could raise funds with Bitcoin.
The money could be used for servers, flyers, remote helpers… and all without tying any transaction to the real identities of the volunteers.

Likewise, a domestic abuse victim might use Bitcoin to securely stack away funds to prepare for an independent life.

_**Privacy through pseudonymous accounts**_

Privacy in traditional banking is guaranteed by the institutions that make up the system, such as banks, credit card companies, and governments.
They (try to) ensure that your bank balance stays a secret.
This puts them in a powerful position, where only they have complete oversight as to what is going on.

In the Bitcoin ecosystem, everyone can see the history of every account balance, but they cannot see who controls an account.
All addresses and transactions are recorded in Bitcoin’s publicly distributed database, the blockchain.
The addresses do not have names or IP addresses attached to them, so it is not always possible to know which transaction belongs to which individual.

_**Threat model**_

When considering privacy you need to think about exactly who you're hiding from.
You must examine how a hypothetical adversary could spy on you, what kind of information is most important to you and which technology you need to use to protect your privacy.
The kind of behaviour needed to protect your privacy therefore depends on your threat model.

Newcomers to privacy often think that they can simply download some software and all their privacy concerns will be solved.
This is not so.
Privacy requires a change in behaviour, however slight.
For example, imagine if you had a perfectly private internet where who you're communicating with and what you say are completely private.
You could still use this to communicate with a social media website to write your real name, upload a selfie and talk about what you're doing right now.
Anybody on the internet could view that information so your privacy would be ruined even though you were using perfectly private technology.

For details read the talk [Opsec for Hackers by grugq](https://www.slideshare.net/grugq/opsec-for-hackers).
The talk is aimed mostly at political activists who need privacy from governments, but much the advice generally applies to all of us.

Much of the time plausible deniability is not good enough because lots of spying methods only need to work on a statistical level (e.g. targeted advertising).

## Address Reuse

The first rule of Bitcoin privacy:

> Never reuse addresses!

The second rule of Bitcoin privacy:

> NEVER reuse addresses!!

### Problem

_**Easy wallet clustering**_

A Bitcoin address commits to the spending condition of this UTXO.
For example in Wasabi, each address is a [native SegWit pay to witness public key hash P2WPKH](https://programmingblockchain.gitbook.io/programmingblockchain/other_types_of_ownership/p2wpkh_pay_to_witness_public_key_hash), meaning that this coin can only be spend with a single valid signature of the corresponding private key.
When the same address is used for several UTXOs, then this means that the same private key can spend all these coins.
It is very easy to find all the UTXOs with the same address, and thus to find out how many bitcoin this private key holds. 

Further, when in a transaction one output has a reused address, then it is very likely that this output is the payment destination, and not the change.
Most wallets automatically generate new change addresses for every transaction, but payment addresses are selected manually by the user.

Read more about the privacy concerns of address reuse in the [separate entry](https://en.bitcoin.it/wiki/Address_reuse) and the [privacy chapter](https://en.bitcoin.it/Privacy#Address_reuse) of the Bitcoin wiki.

### Wasabi's Solution

_**Remove used address from GUI**_

Wasabi uses the industry best practice [BIP 44 hierarchical deterministic wallet](/using-wasabi/BIPs.md#bip-44-multi-account-hierarchy-for-deterministic-wallets), where out of one master secret a tree structure of child private keys are generated.
It is deterministic because the same parent secret always calculates the same child private keys. When given a hardened child private key, then the parent private key cannot be calculated.
In the `Receive` tab, a new address is generated every time, and as soon as a coin is sent to it, this specific address is removed from the GUI. 


## Inputs and outputs

Bitcoin has an accounting model of [unspent transaction outputs [UTXO]](https://bitcoin.org/en/blockchain-guide#introduction).
A transaction has inputs: the coins that are spent, and outputs: the coins that are received.
The input of one transaction has to be an output of a previous transaction that is not yet spent.
Each UTXO is the tip of the chain of links between inputs and outputs, all the way back to a [coin base transaction](https://en.bitcoin.it/wiki/Coinbase) that pays the miner.

### Problem

_**UTXOs are not fungible**_

Each UTXO is a unique snow flake with a public transaction history.
For example, when Alice sends a coin to Bob, then Bob does not just have any random UTXO, but he has specifically the coin that Alice has sent him.
When Bob sends this coin to Charlie, than Charlie can look back two hops to see the transaction from Alice to Bob.
If Bob does not want Charlie to know that the transaction between Alice and Bob happened, then Bob needs to send Charlie a different coin.

Further, when Alice has one non-private coin and one private coin, and she selects both of them as the input of one transaction, then it might be clear that the previously private coin also belongs to Alice.
This means that coin consolidation can lead to an overall decrease of privacy, especially when using an automatic coin selection algorithm.

### Wasabi's Solution

_**Manual coin labeling and selection**_

Contrarily to many other wallets, Wasabi does not show only the total value of bitcoins in the wallet. Rather, in the `Send` and `CoinJoin` tab is a list of all the UTXOs individually.
Because it is required to label every receiving address, the history of this coin is clear at first glance.
In order to spend a specific coin, it is manually selected, which prevents the wrong coin being included in the transaction.


## Transaction graph

### Problem

_**Public transaction history**_

Because of the input and output model of Bitcoin, there is a chain of digital signatures all the way from the coinbase reward, to the current UTXO.
This transaction history can reveal sensitive information of the spending patterns of individuals.
The receiver of a coin can look back into the transaction history of the sender.
And the sender can see the future spending of the receiver.

### Wasabi's Solution

_**Zero Link CoinJoins**_

In order to obfuscate the link between outputs and inputs, Wasabi uses the [Zero Link](https://github.com/nopara73/zerolink) CoinJoin protocol.
The Wasabi central coordinator cannot steal and cannot spy, he simply helps many peers to build a huge transaction, with many inputs, and many outputs.
The non-private inputs can be linked to their previous transaction history.
However, the equal value CoinJoin outputs with an anonymity set can not be tied to the inputs.

This means that when sending an anonset coin, the receiver does not know about the transaction history before the CoinJoin.
And when the receiver does a CoinJoin himself, then the sender cannot spy on the later spending patterns.
An outside observer can only guess the correct link at a rate of 1 in the anonset, for example 1-in-100, or 1%.


## Network snooping

Bitcoin is a peer to peer network of full nodes, who define, verify and enforce the Nakamoto consensus rules.
There is a lot of communication between them and metadata can be used to de-anonymize Bitcoin users.

### Problem

_**Clear net light clients**_

When the communication to the network is unencrypted over clear net, then there is a easy correlation of the Bitcoin transactions to the IP address of the peer who sent it.
The IP address can be used to even find out about the physical location of the user!

A Bitcoin full node broadcasts not just the transaction of its user, but also it gossips all the other transactions it has received from its peers.
Thus it is very difficult to find out which transactions are sent from which full node.
However, when a node or wallet does not gossip all transactions, but only the transactions of the user, then it is easier to find out which node has sent that specific transaction.

### Wasabi's Solution

_**Full node by default & block filters over tor**_

Wasabi checks if there is a local Tor instance installed, and if so, it uses this to onion-route all the traffic to and from the network.
If Tor is not already installed, then it is installed automatically within Wasabi.
This means that by default, all network communication is secured from outside snooping and the IP address is hidden.

In order to fully verify everything, running a full node is essential.
If [bitcoind](https://github.com/bitcoin/bitcoin) is installed on the same computer as Wasabi, then it will automatically and by default connect to the full node.
It is also possible to connect Wasabi to a remote full node on another computer by specifying the local IP address or Tor hidden service in the settings.
Now Wasabi pulls the verified blocks from the full node, and it also broadcasts the transactions to the P2P network from this full node.

However, even if no full node is installed, Wasabi has a light client mode based on [BIP 158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients).
When the user sends the extended public key, or a filter of all the addresses to the central server, then the server can **COMPLETELY** deanonymize the users.
An extended public (xPub) key is a part of the Bitcoin standard [BIP32](/using-wasabi/BIPs.md#bip-32-hierarchical-deterministic-wallets).
It can be thought of as a master view into a wallet.
By using the extended public key it's possible to derive all past and future public addresses and unspent transaction outputs (UTXOs).  

Therefore the Wasabi server sends a filter of all the transactions in each block to all the users.
Now they check locally if the block contains a transaction with their address.
If not, then the filter is stored for later reference, and no block is downloaded. However, if there is a user transaction in that block, then Wasabi connects to a random Bitcoin P2P node over Tor, and asks for this entire block, not only one transaction.
This block request is indistinguishable from the regular P2P gossip, and thus nobody, neither the server nor the full node, know which addresses belong to the user.

Wasabi is per default [as private as a Bitcoin full node](/using-wasabi/NetworkLevelPrivacy.md).

# Privacy in Bitcoin

- [Address Reuse](BitcoinPrivacy.md#address-reuse)
- [Inputs and Outputs](BitcoinPrivacy.md#inputs-and-outputs)
- [Transaction Graph](BitcoinPrivacy.md#transaction-graph)
- [Network Snooping](BitcoinPrivacy.md#network-snooping)

---

## Address Reuse

The first rule of Bitcoin privacy:

> Never reuse addresses!

The second rule of Bitcoin privacy:

> NEVER reuse addresses!!

### Problem

_**Easy wallet clustering**_

A Bitcoin address commits to the spending condition of this UTXO. For example in Wasabi, each address is a [native SegWit pay to witness public key hash P2WPKH](https://programmingblockchain.gitbook.io/programmingblockchain/other_types_of_ownership/p2wpkh_pay_to_witness_public_key_hash), meaning that this coin can only be spend with a single valid signature of the corresponding private key. When the same address is used for several UTXOs, then this means that the same private key can spend all these coins. It is very easy to find all the UTXOs with the same address, and thus to find out how many bitcoin this private key holds. 

Further, when in a transaction one output has a reused address, then it is very likely that this output is the payment destination, and not the change. Most wallets automatically generate a new change addresses for every transaction, but payment addresses are selected manually by the user.

Read more about the privacy concerns of address reuse in the [separate entry](https://en.bitcoin.it/wiki/Address_reuse) and the [privacy chapter](https://en.bitcoin.it/Privacy#Address_reuse) of the Bitcoin wiki.

### Wasabi's Solution

_**Remove used address from GUI**_

Wasabi uses the industry best practice [BIP 44 hierarchical deterministic wallet](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), where out of one master secret a tree structure of child private keys are generated. It is deterministic because the same parent secret calculates always the same child private keys. When given a hardened child private key, then the parent private key cannot be calculated. In the `Receive` tab, a new address is generated every time, and as soon as a coin is sent to it, this specific address is removed from the GUI. 


## Inputs and outputs

Bitcoin has an accounting model of [unspent transaction outputs [UTXO]](https://bitcoin.org/en/blockchain-guide#introduction). A transaction has inputs: the coins that are spent, and outputs: the coins that are received. The input of one transaction has to be an output of a previous transaction that is not yet spent. Each UTXO is the tip of the chain of links between inputs and outputs, all the way back to a [coin base transaction](https://en.bitcoin.it/wiki/Coinbase) that pays the miner.

### Problem

_**UTXOs are not fungible**_

Each UTXO is a unique snow flake with a public transaction history. For example, when Alice sends a coin to Bob, than Bob does not just have any random UTXO, but he has specifically the coin that Alice has sent him. When Bob sends this coin to Charlie, than Charlie can look back two hops to see the transaction from Alice to Bob. If Bob does not want Charlie to know that the transaction between Alice and Bob happened, then Bob needs to send Charlie a different coin.

Further, when Alice has one non-private coin and one private coin, and she selects both of them as the input of one transaction, then it might be clear that the previously private coin also belongs to Alice. This means that coin consolidation can lead to an overall decrease of privacy, especially when using a automatic coin selection algorithm.

### Wasabi's Solution

_**Manual coin labeling and selection**_

Contrarily to many other wallets, Wasabi does not show only the total value of bitcoins in the wallet. Rather, in the `Send` and `Coin Join` tab is a list of all the UTXOs individually. Because it is required to label every receiving address, the history of this coin is clear at first glance. In order to spend a specific coin, it is manually selected, which prevents that the wrong coin is included in the transaction.


## Transaction graph

### Problem

_**Public transaction history**_

Because of the input and output model of Bitcoin, there is a chain of digital signatures all the way from the coinbase reward, to the current UTXO. This transaction history is can reveal sensitive information of the spending patterns of individuals. The receiver of a coin can look back into the transaction history of the sender. And the sender can see the future spending of the receiver.

### Wasabi's Solution

_**Zero Link coin joins**_

In order to obfuscate the link between outputs and inputs, Wasabi uses the [Zero Link](https://github.com/nopara73/zerolink) coin join protocol. The Wasabi central coordinator cannot steal and cannot spy, he simple helps many peers to build a huge transaction, with many inputs, and many outputs. The non-private inputs can be linked to their previous transaction history. However, the equal value coin join outputs with anonymity set can not be tied to the inputs.

This means that when sending an anonset coin, the receiver does not know about the transaction history before the coin join. And when the receiver does a coin join himself, then the sender cannot spy on the later spending patterns.


## Network snooping

Bitcoin is a peer to peer network of full nodes, who define, verify and enforce the Nakamoto consensus rules. There is a lot of communication between them and metadata can be used to de-anonymize Bitcoin users.

### Problem

_**Clear net light clients**_

When the communication to the network is unencrypted over clear net, then there is a easy correlation of the Bitcoin transactions to the IP address of the peer who send it. The IP address can be used to even find out about the physical location of the user!

A Bitcoin full node broadcasts not just the transaction of its user, but also it gossips all the other transactions it has received from its peers. Thus it is very difficult to find out which transactions are send from what full node. However, when a node or wallet does not gossip all transactions, but only the transactions of the user, then it is easier to find out which node has send that specific transaction.

### Wasabi's Solution

_**Full node by default & block filters over tor**_

Wasabi checks if there is a local Tor instance installed, and if yes it uses this to onion-route all the traffic to and from the network. If there Tor is not already installed, then it is installed automatically within Wasabi. This means that per default, all network communication is secured from outside snooping and the IP address is hidden.

In order to fully verify everything, running a full node is essential. If bitcoind is installed on the same computer as Wasabi, then it will automatically and per default connect to the full node. It is also possible to connect Wasabi to a remote full node on another computer by specifying the local IP address or Tor hidden service in the settings. Now Wasabi pulls the verified blocks from the full node, and it also broadcasts the transactions to the P2P network from this full node.

However, even if no full node is installed, Wasabi has a light client mode based on [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki). When the user sends the extended public key, or a filter of all the addresses to the central server, then the server can **COMPLETELY** deanonymize the users. Therefore the Wasabi server sends a filter of all the transactions in each block to all the users. Now they check locally if the block contains a transaction with their address. If no, then the filter is stored for later reference, and no block is downloaded. However, if there is a user transaction in that block, then Wasabi connects to a random Bitcoin P2P node over tor, and asks for this entire block, not only one transaction. This block request is indistinguishable from the regular P2P gossip, and thus nobody, neither the server nor the full node, know which addresses belong to the user.

Wasabi is per default [as private as a Bitcoin full node](https://medium.com/@nopara73/bitcoin-core-vs-wasabi-wallet-network-level-privacy-bdca1d501387).

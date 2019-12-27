---
{
  "title": "Bitcoin in general",
  "description": "Explanations of common words used in Wasabi and regarding Bitcoin privacy with links to the docs for more details. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

## Bitcoin in general

:::details
### Address

A Bitcoin invoice address commits to a public key or script which defines who can spend the coin.
It is specified in the output of a transaction, and it should only be used once.
Wasabi uses the bech32 format to encode native segregated witness addresses.
Read more: [Bitcoin addresses](/using-wasabi/Receive.md#bitcoin-public-keys-and-addresses)
:::

:::details
### Bitcoin Improvement Proposal (BIP)

Bitcoin Improvement Proposal.
A design document for introducing features or information to Bitcoin.
Read more: [Wasabi Supported BIPs](/using-wasabi/BIPs.md)
:::

:::details
### Block

A block is a batch of valid Bitcoin transactions and its hash must be a value below a certain difficulty target to prove the work of the miner.
Each block references the hash of the previous block, thus creating a hash chain of blocks.
On average a new block is mined every 10 minutes.
:::

:::details
### Blockchain

The blockchain is the one chain of valid Bitcoin blocks with the most accumulated proof of work.
It is an append-only data structure with new blocks being added on average every 10 minutes.
Because of its uniquely verifiable and global consensus, it is a revolutionary standard for time, thus some call it timechain.
:::

:::details
### Change

In a spending transaction where the provided input coins are larger than the value sent to the destination address, then the leftover change is sent to a new address of the same wallet.
Read more: [Change coins](/using-wasabi/ChangeCoins.md)
:::

:::details
### Coinbase

A special field used as the sole input for coinbase transactions.
The coinbase allows claiming the block reward and provides up to 100 bytes for arbitrary data.
:::

:::details
### Coinbase transaction

The first transaction in a block.
Always created by a miner, it includes a single coinbase.
:::

:::details
### Cold Storage

Refers to keeping a reserve of important Bitcoin secrets offline.
Cold storage is achieved when Bitcoin private keys are created and stored in a secure offline environment.
Cold storage is important for anyone with bitcoin holdings.
Online computers are vulnerable to hackers and should not be used to store a significant amount of bitcoin.
Read more: [Cold Wasabi Protocol](/using-wasabi/ColdWasabi.md)
:::

:::details
### Confirmations

Once a transaction is included in a block, it has one confirmation.
As soon as another block is mined on the same blockchain, the transaction has two confirmations, and so on.
Six or more confirmations is considered sufficient proof that a transaction cannot be reversed.
:::

:::details
### Consensus

When several nodes, usually most nodes on the network, all have the same blocks in their locally-validated best block chain.
:::

:::details
### Consensus Rules

The block validation rules that full nodes follow to stay in consensus with other nodes.
:::

:::details
### Difficulty

A network-wide setting that controls how much computation is required to produce a proof of work.
:::

:::details
### Difficulty Retargeting

A network-wide recalculation of the difficulty that occurs once every 2,016 blocks and considers the hashing power of the previous 2,016 blocks.
:::

:::details
### Difficulty Target

A difficulty at which all the computation in the network will find blocks approximately every 10 minutes.
It specifies the numeric value the hash of a valid block must not be above.
:::

:::details
### Fork

Fork, also known as accidental fork, occurs when two or more blocks have the same block height, forking the block chain. 
Typically occurs when two or more miners find blocks at nearly the same time.
Can also happen as part of an attack.
:::

:::details
### Fungibility

Fungibility is a desirable property of Bitcoin UTXOs that are indistinguishable from each other.
Read more: [Transaction surveillance companies attempting to destroy fungibility](/why-wasabi/TransactionSurveillanceCompanies.md#attempt-to-destroy-fungibility)
:::

:::details
### Genesis Block

The first block in the blockchain, used to initialize the cryptocurrency.
:::

:::details
### Hard Fork

Hard fork, also known as hard-forking change, is a permanent divergence in the blockchain, it occurs when non-upgraded nodes can not validate blocks created by upgraded nodes that follow newer consensus rules.
The upgraded nodes break the rules of the legacy nodes.
Not to be confused with fork, soft fork, software fork or Git fork.
:::

:::details
### Hardware Wallet (HWW)
A hardware wallet is a special type of Bitcoin wallet which generates and stores the user's private keys on a dedicated hardware device.
Read more: [Hardware Wallet FAQs](/FAQ/FAQ-UseWasabi.md#hardware-wallet)
:::

:::details
### Hash

A cryptographic hash function takes any input of arbitrary size [the message] and computes a value of fixed size that is unique to the input, which is called a hash or a digest.
If one bit of the input changes, the output will be completely different [avalanche effect].
And there are no two messages that result in the same hash [collision resistance].
The only way to get any given input, is by computing all possible inputs, it is a one-way function [pre-image resistance].
Bitcoin uses the SHA256 in many parts of the protocol.
:::

:::details
### HD protocol

The Hierarchical Deterministic (HD) key creation and transfer protocol (BIP32), which allows creating child keys from parent keys in a hierarchy.
:::

:::details
### HD wallet

Wallets using the Hierarchical Deterministic (HD Protocol) key creation and transfer protocol (BIP32).
:::

:::details
### Hot Wallet

A hot wallet is a software wallet that runs on a computer which is connected to the Internet.
Wasabi is a hot wallet by default.
:::

:::details
### Input

Input, transaction input, or TxIn is an input in a Bitcoin transaction which contains two fields: a unique transaction hash and an index number, which references one utxo of a previous transaction which is spent in this transaction.
:::

:::details
### Lightning Network (LN)

Lightning Network is a proposed implementation of Hashed Timelock Contracts (HTLCs) with bi-directional payment channels which allows payments to be securely routed across multiple peer-to-peer payment channels.
This allows the formation of a network where any peer on the network can pay any other peer even if they don't directly have a channel open between each other.
Read more: [Use Lightning](/why-wasabi/10Commandments.md#_10-use-lightning)
:::

:::details
### Mempool

The Bitcoin Mempool (memory pool) is a collection of all transaction data in a block that have been verified by Bitcoin nodes, but are not yet confirmed.
Read more: [How does Wasabi know of incoming transactions to the mempool?](/FAQ/FAQ-UseWasabi.html#how-does-wasabi-know-of-incoming-transactions-to-the-mempool)
:::

:::details
### Merkle Root

The root node of a merkle tree, a descendant of all the hashed pairs in the tree.
Block headers must include a valid merkle root descended from all transactions in that block.
:::

:::details
### Merkle Tree

A tree constructed by hashing paired data (the leaves), then pairing and hashing the results until a single hash remains, the merkle root.
In Bitcoin, the leaves are almost always transactions from a single block.
:::

:::details
### Miner

A network node that finds valid proof of work for new blocks, by repeated hashing.
:::

:::details
### Multisignature (multisig)

Multisignature (m-of-n multisig) refers to requiring more than one key to authorize a Bitcoin transaction.
Only with `m` signatures of `n` public keys can the bitcoin be spent.
Read more: [Can I generate a multi signature script?](/FAQ/FAQ-UseWasabi.md#can-i-generate-a-multi-signature-script)
:::

:::details
### Nonce

A network node that finds valid proof of work for new blocks, by repeated hashing.
:::

:::details
### Output

The "nonce" in a bitcoin block is a 32-bit (4-byte) field whose value is set so that the hash of the block will contain a run of leading zeros.
The rest of the fields may not be changed, as they have a defined meaning.
:::

:::details
### Off-chain transaction

An off-chain transaction is the movement of value outside of the block chain.
While an on-chain transaction—usually referred to as simply a transaction—modifies the blockchain and depends on the blockchain to determine its validity.
An off-chain transaction relies on other methods to record and validate the transaction.
:::

:::details
### P2PKH

Transactions that pay a bitcoin address containing a public key hash scripts.
An output locked by a P2PKH script can be unlocked (spent) by presenting a public key and a digital signature created by the corresponding private key.
:::

:::details
### P2SH

P2SH or Pay-to-Script-Hash is a type of transaction that simplifies the use of complex transaction scripts.
With P2SH the complex script that details the spending conditions (redeem script) is committed to with a hash in the locking script.
:::

:::details
### P2WPKH

The signature of a P2WPKH (Pay-to-Witness-Public-Key-Hash) contains the same information as a P2PKH spending, but is located in the witness field instead of the scriptSig field.
:::

:::details
### Paper Wallet

In the most specific sense, a paper wallet is a document containing all the secrets to spend a bitcoin UTXO. 
It is a way of storing bitcoin offline as a physical document.
:::

:::details
### Partially Signed Bitcoin Transaction (PSBT)

PSBT is a binary transaction format which contains the information necessary for a signer to produce signatures for the transaction and holds the signatures for an input while the input does not have a complete set of signatures.
The signer can be offline as all necessary information will be provided in the transaction.
Read more: [BIP 174 Partially Signed Bitcoin Transaction Format](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
:::

:::details
### Payment Channels

A payment channel is class of techniques designed to allow users to make multiple bitcoin transactions without committing all of the transactions to the bitcoin blockchain.
In a typical payment channel, only two transactions are added to the block chain but an unlimited or nearly unlimited number of payments can be made between the participants.
:::

:::details
### Pay-to-Witness-Public-Key-Hash (P2WPKH)

The signature of a P2WPKH contains the same information as a Pay-to-Public-Key-Hash (P2PKH) spending, but is located in the witness field instead of the scriptSig field.
The scriptPubKey is also modified.
Read more: [BIP 84 derivation scheme for P2WPKH based accounts](/using-wasabi/BIPs.md#bip-84-derivation-scheme-for-p2wpkh-based-accounts)
:::

:::details
### Public Key

A public key is calculated by multiplying the private key to the generator point of an elliptic curve.
Given only the public key, the private key cannot be calculated.
Anyone can encrypt a message using a public key.
This encrypted message (cyphertext) can only be decrypted through the related private key.
Given a public key and a signature over a message, anyone can verify that the signer had the private key and the message.
In Bitcoin, the public key is the pseudonymous identity of the owner of a coin.
Read more: [Bitcoin private keys](/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses)
:::

:::details
### Private Key

A private key is a large number that must be chosen at random, it is thus a very secure password and should be kept secret.
With knowledge of this number, anyone can easily compute the public key, and a signature over any message.
It can also be used to decrypt any message that was encrypted to the public key corresponding to the private key.
In Bitcoin, a signature over a valid transaction message gives the right to spend a coin, thus knowledge of the private key corresponds to ownership of the bitcoin.
Read more: [Bitcoin private keys](/using-wasabi/Receive.html#bitcoin-public-keys-and-addresses)
:::

:::details
### Proof of Work (POW)

One of the requirements for a Bitcoin block to be valid is its hash should be below a certain difficulty target.
In order to create a valid block, a miner must repeatedly hash a candidate block with a changing nonce until by sheer luck he finds a hash with low value.
By providing this pre-image block, anyone can verify the amount of computational energy that a miner on average should have invested in order to find this block, and this is what is known as Proof of Work.
:::

:::details
### Replace by Fee (RBF)

Replacing one version of an unconfirmed transaction with a different version of the transaction that pays a higher transaction fee.
:::

:::details
### Mining Reward

An amount included in each new block as a reward by the network to the miner who found the Proof-of-Work solution.
It is currently 12.5 BTC per block.
:::

:::details
### satoshi (sat)

A satoshi is the smallest denomination of bitcoin that can be recorded on the blockchain.
It is the equivalent of 0.00000001 bitcoin and is named after the creator of Bitcoin, Satoshi Nakamoto.
Read more: [How can I display the fee in satoshi per byte?](/FAQ/FAQ-UseWasabi.md#how-can-i-display-the-fee-in-satoshis-per-byte)
:::

:::details
### Satoshi Nakamoto

Satoshi Nakamoto is the name used by the person or people who designed Bitcoin and created its original reference implementation, Bitcoin Core.
As a part of the implementation, they also devised the first blockchain database.
In the process they were the first to solve the double-spending problem for digital currency.
Their real identity remains unknown.
:::

:::details
### Script

Bitcoin uses a scripting system for transactions.
Forth-like, Script is simple, stack-based, and processed from left to right.
It is purposefully not Turing-complete, with no loops.
:::

:::details
### ScriptPubKey

ScriptPubKey or pubkey script, is a script included in outputs which sets the conditions that must be fulfilled for those satoshis to be spent.
Data for fulfilling the conditions can be provided in a signature script.
:::

:::details
### ScriptSig

ScriptSig or signature script, is the data generated by a spender which is almost always used as variables to satisfy a pubkey script.
:::

:::details
### Segregated Witness (or SegWit)

Segregated Witness is a structure where the witness [signature or redeem script] is stored separately from the transaction Merkle tree.
This is separated because the witness contains only data concerning transaction validity, but not about transaction effect.
Read more: [Why Wasabi uses only SegWit](/FAQ/FAQ-UseWasabi.md#why-does-wasabi-only-use-segwit-bech32-addresses)
:::

:::details
### Simplified Payment Verification (SPV)

SPV is a method for verifying particular transactions were included in a block without downloading the entire block.
The method is used by some lightweight Bitcoin clients.
Read more: [Wasabi Wallet under the hood](/building-wasabi/TechnicalOverview.md#wasabi-wallet-under-the-hood)
:::

:::details
### Soft Fork

Soft fork or soft-forking change is a fork in the blockchain which commonly occurs when miners using non-upgraded nodes don’t follow a new consensus rule their nodes don’t know about.
:::

:::details
### Transaction

In simple terms, a transfer of bitcoin from one address to another.
More precisely, a transaction is a signed data structure expressing a transfer of value.
Transactions are transmitted over the bitcoin network, collected by miners, and included into blocks, made permanent on the blockchain.
:::

:::details
### Transaction Fees

A transaction includes a fee to the network for processing the requested transaction.
Most transactions require a minimum fee.
Read more: [What fee should I select?](/FAQ/FAQ-UseWasabi.md#what-fee-should-i-select)
:::

:::details
### Unspent Transaction Output (UTXO)

UTXO is an unspent transaction output that can be spent as an input in a new transaction.
Read more: [How can I select UTXOs for CoinJoin?](/FAQ/FAQ-UseWasabi.md#how-can-i-select-utxos-for-coinjoin)
:::

:::details
### Wallet

Software that holds all your bitcoin addresses and secret keys.
Use it to send, receive, and store your bitcoin.
:::

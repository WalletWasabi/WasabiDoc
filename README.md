# WasabiDoc

Wasabi is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

However, "[anonymity loves company](https://www.freehaven.net/anonbib/cache/usability:weis2006.pdf)", the more participants there are, the better your privacy is, and the faster the coin join rounds are. Whether you are looking for state of the art operational security or you are philosophically aligned with the principles of freedom and privacy, now it is YOUR time to contribute. Fire up your Wasabi and help us to bootstrap the system!

This is the open source documentation repository of Wasabi Wallet, here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves these difficult problems, and how you can use these tools to defend yourself. If you know something about Wasabi that is not included in the documentation, or if you have unanswered questions, feel free to contribute to this documentation.


## Basics

- Importance of privacy
- Privacy in Bitcoin [problem in Bitcoin -> solution in Wasabi]
-- Address reuse -> labeling
-- Inputs and outputs -> coin selection
-- Transaction graph -> coin join
-- Network snooping -> block filters over Tor & full node
- Getting started
- Wasabi compared to other Wallets

## Installation and Upgrade

- Download
- Signature verification
- Installation
- Compilation from source
-- Install NBitcoin
-- Install Git
-- Compile Wasabi
- Deterministic build guide
- Backend deployment
- Client deployment

## Features 

### Generate Wallet
- Label
- Seed and mnemonic
- Password

### Hardware Wallet
- Trezor One PIN
- Trezor One passphrase
- Trezor passphrase
- ColdCard
-- Import skeleton wallet
-- Build PSBT
-- Export PSBT
-- Sign PSBT
-- Import PSBT
-- Broadcast PSBT 

### Load Wallet
- Difference hot / watch only wallet
- BIP 158 block filter
- Download of blocks over tor & full node

### Receive
- HD path
- SegWit bech32 only
- Labeling

### Send 
- Coin selection
- Cluster history
- Transaction fee
- Password

### Coin Join
- Zero Link
-- Input registration
-- Connection confirmation
-- Output registration
-- Signing
-- Broadcasting
- Anonymity set target
- Minimum amount and denomination
- Duration
- Fees


## Development

- A technical overview of Wasabi Wallet 
- Wasabi coding conventions
- Security policy
- Code coverage
- Manual testing
- Hardware wallet testing
- Debug Guide


## FAQ and Common Issues

[This is a copy of the current [FAQ](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/FAQ.md)]

### Pre-Install
- What is a "coin join"?
- Do I need to trust Wasabi with my coins?
- I want to purchase something anonymously. Does coin join happen at the time of payment?
- Will my coins be fully private after mixing with Wasabi?
- Can I hurt my privacy using Wasabi?
- Who is behind Wasabi?

### Install
- How do I install Wasabi?
- Do I need to run Tor?

### Pre-Mix
- My wallet cannot send to Bech32 addresses - what wallets can I use instead?

### Mixing
- What are the fees?
- What is the Anonymity Set?
- How do I change the default number of mixing rounds?
- Can I mix more than the round's minimum?
- How do I connect to my own full node?
- How do I upgrade Wasabi?
- Why is the minimum mixing amount a weird number?

### Post-Mix
- What do I do now that I have mixed my coins?
- Can I recombine my mixed coins?
- Am I safe to send my mixed coins to my hardware wallet?
- How can I set up my hardware wallet with Wasabi properly?
- Will I have issues spending my mixed coins?
- What do I do with small changes?

### Meta
- Where is the coordinator's source code?
- Does Wasabi have a warrant canary?

### Errors
- Backend will not connect


## Dojo

- Support
- Issues
- Contribute Code

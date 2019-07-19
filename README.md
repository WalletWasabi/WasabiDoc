# WasabiDoc

[Wasabi](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

However, "[anonymity loves company](https://www.freehaven.net/anonbib/cache/usability:weis2006.pdf)", the more participants there are, the better your privacy is, and the faster the coin join rounds are. Whether you are looking for state of the art operational security or you are philosophically aligned with the principles of freedom and privacy, now it is YOUR time to contribute. Fire up your Wasabi and help us to bootstrap the system!

This is the open source documentation repository of Wasabi Wallet, here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves these difficult problems, and how you can use these tools to defend yourself. If you have a question that is not yet covered, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues), if you have a good answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).


## Basics

- Importance of privacy
- Privacy in Bitcoin [problem in Bitcoin -> solution in Wasabi] </br>
-- Address reuse -> labeling </br>
-- Inputs and outputs -> coin selection </br>
-- Transaction graph -> coin join </br>
-- Network snooping -> block filters over Tor & full node </br>
- Getting started
- Wasabi compared to other Wallets

## Installation and Upgrade

- Download
- Signature verification
- [Installation](/InstallInstructions.md)
- Compilation from source </br>
-- Install NBitcoin </br>
-- Install Git </br>
-- Compile Wasabi </br>
- [Deterministic build guide](/DeterministicBuildGuide.md)
- [Backend deployment](/BackendDeployment.md)
- [Client deployment](/ClientDeployment.md)

## Features 

### Generate Wallet
- Label
- Seed and mnemonic
- Password
- [Password Finder](/PasswordFinder.md)

### Hardware Wallet
- Trezor One PIN
- Trezor One passphrase
- Trezor passphrase
- ColdCard </br>
-- Import skeleton wallet </br>
-- Build PSBT </br>
-- Export PSBT </br>
-- Sign PSBT </br>
-- Import PSBT </br>
-- Broadcast PSBT </br>

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
- Zero Link </br>
-- Input registration </br>
-- Connection confirmation </br>
-- Output registration </br>
-- Signing </br>
-- Broadcasting </br>
- Anonymity set target
- Minimum amount and denomination
- Duration
- Fees


## Development

- [A technical overview of Wasabi Wallet](/TechnicalOverview.md)
- Wasabi coding conventions
- [Security policy](/SECURITY.md)
- [Code coverage](/CodeCoverage.md)
- [Manual testing](/ManualTesting.md)
- [Hardware wallet testing](/HardwareWalletTestingGuide.md)
- [Debug Guide](/HowToDebug.md)
- [Ports](/Ports.md)

## FAQ and Common Issues

[This is a copy of the current [FAQ](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/FAQ.md)]

### [Pre-Install](/FAQ.md#pre-install)
- What is a "coin join"?
- Do I need to trust Wasabi with my coins?
- I want to purchase something anonymously. Does coin join happen at the time of payment?
- Will my coins be fully private after mixing with Wasabi?
- Can I hurt my privacy using Wasabi?
- Who is behind Wasabi?

### [Install](/FAQ.md#install)
- How do I install Wasabi?
- Do I need to run Tor?

### [Pre-Mix](/FAQ.md#pre-mix)
- My wallet cannot send to Bech32 addresses - what wallets can I use instead?

### [Mixing](/FAQ.md#mixing)
- What are the fees?
- What is the Anonymity Set?
- How do I change the default number of mixing rounds?
- Can I mix more than the round's minimum?
- How do I connect to my own full node?
- How do I upgrade Wasabi?
- Why is the minimum mixing amount a weird number?

### [Post-Mix](/FAQ.md#post-mix)
- What do I do now that I have mixed my coins?
- Can I recombine my mixed coins?
- Am I safe to send my mixed coins to my hardware wallet?
- How can I set up my hardware wallet with Wasabi properly?
- Will I have issues spending my mixed coins?
- What do I do with small changes?

### [Meta](/FAQ.md#meta)
- Where is the coordinator's source code?
- Does Wasabi have a warrant canary?

### [Errors](/FAQ.md#errors)
- Backend will not connect


## Dojo

- [Dojo](/Dojo.md)
- Support
- Issues
- Contribute Code
- [Demo Guide](/DemoGuide.md)
- [Contribution Game](/ContributionGame.md)

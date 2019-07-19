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
- [Installation](InstallInstructions.md)
- Compilation from source </br>
-- Install NBitcoin </br>
-- Install Git </br>
-- Compile Wasabi </br>
- [Deterministic build guide](DeterministicBuildGuide.md)
- [Backend deployment](BackendDeployment.md)
- [Client deployment](ClientDeployment.md)

## Features 

### Generate Wallet
- Label
- Seed and mnemonic
- Password
- [Password Finder](PasswordFinder.md)

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

- [A technical overview of Wasabi Wallet](TechnicalOverview.md)
- Wasabi coding conventions
- [Security policy](SECURITY.md)
- [Code coverage](CodeCoverage.md)
- [Manual testing](ManualTesting.md)
- [Hardware wallet testing](HardwareWalletTestingGuide.md)
- [Debug Guide](HowToDebug.md)
- [Ports](Ports.md)

## FAQ and Common Issues

- [General Bitcoin Privacy](/docs/FAQ/FAQ-GeneralBitcoinPrivacy.md)
- [Introduction to Wasabi](/docs/FAQ/FAQ-Introduction.md)
- [Installation of Wasabi](/docs/FAQ/FAQ-Installation.md)
- [Use of Wasabi](/docs/FAQ/FAQ-UseWasabi.md) </br>
  -- [Wallet Manager](/docs/FAQ/FAQ-UseWasabi.md#wallet-manager) </br>
  -- [Synchronization](/docs/FAQ/FAQ-UseWasabi.md#synchronization) </br>
  -- [Receive](/docs/FAQ/FAQ-UseWasabi.md#receive) </br>
  -- [Send](/docs/FAQ/FAQ-UseWasabi.md#send) </br>
  -- [History](/docs/FAQ/FAQ-UseWasabi.md#history) </br>
  -- [Coin Join](/docs/FAQ/FAQ-UseWasabi.md#coin-join) </br>
  -- [Hardware Wallet](/docs/FAQ/FAQ-UseWasabi.md#hardware-wallet) </br>
  -- [Settings](/docs/FAQ/FAQ-UseWasabi.md#settings) </br>
  -- [Coin Control Best Practices](/docs/FAQ/FAQ-UseWasabi.md#coin-control-best-practices) </br>
- [Contributions to Wasabi](/docs/FAQ/FAQ-Contribution.md)

## Dojo

- [Dojo](Dojo.md)
- Support
- Issues
- Contribute Code
- [Demo Guide](DemoGuide.md)
- [Contribution Game](ContributionGame.md)

---
title: Getting Started
---

[Wasabi](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop. It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

However, "[anonymity loves company](https://www.freehaven.net/anonbib/cache/usability:weis2006.pdf)", the more participants there are, the better your privacy is, and the faster the coin join rounds are. Whether you are looking for state of the art operational security or you are philosophically aligned with the principles of freedom and privacy, now it is YOUR time to contribute. Fire up your Wasabi and help us to bootstrap the system!

## Basics

- [Why Privacy is Important](WhyPrivacyImportant.md)
- [Privacy in Bitcoin](BitcoinPrivacy.md)
  - [Address Reuse](BitcoinPrivacy.md#address-reuse)
  - [Inputs and Outputs](BitcoinPrivacy.md#inputs-and-outputs)
  - [Transaction Graph](BitcoinPrivacy.md#transaction-graph) </br>
  - [Network Snooping](BitcoinPrivacy.md#network-snooping) </br>
- Getting started
- [Wasabi 10 Commandments](10Commandments.md)
- Wasabi compared to other Wallets

## Installing Wasabi

- [Install package](InstallPackage.md) </br>
  - [Windows](InstallPackage.md#windows) </br>
  - [Debian and Ubuntu](InstallPackage.md#debian-and-ubuntu) </br>
  - [Other Linux](InstallPackage.md#other-linux) </br>
  - [OSX](InstallPackage.md#osx) </br>
- [Build from source code](BuildSource.md)
- [Deterministic build](DeterministicBuild.md)
- [Client deployment](ClientDeployment.md)
- [Backend deployment](BackendDeployment.md)

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
- Import skeleton wallet </br>
- Build PSBT </br>
- Export PSBT </br>
- Sign PSBT </br>
- Import PSBT </br>
- Broadcast PSBT </br>

### Load Wallet

- [Network Level Privacy - Bitcoin Core vs Wasabi Wallet](NetworkLevelPrivacy.md)
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
- Input registration
- Connection confirmation
- Output registration
- Signing
- Broadcasting
- Anonymity set target
- Minimum amount and denomination
- Duration
- Fees
- [Pay To EndPoint](PayToEndPoint.md)


## Development

- [A technical overview of Wasabi Wallet](TechnicalOverview.md)
- [Wasabi coding conventions](CodingConventions.md)
- [Security policy](SECURITY.md)
- [Code coverage](CodeCoverage.md)
- [Manual testing](ManualTesting.md)
- [Hardware wallet testing](HardwareWalletTestingGuide.md)
- [Debug Guide](HowToDebug.md)
- [Ports](Ports.md)

## [FAQ and Common Issues](/FAQ/README.md#frequently-asked-questions-about-wasabi-wallet)

- [General Bitcoin Privacy](/FAQ/FAQ-GeneralBitcoinPrivacy.md)
- [Introduction to Wasabi](/FAQ/FAQ-Introduction.md)
- [Installation of Wasabi](/FAQ/FAQ-Installation.md)
- [Use of Wasabi](/FAQ/FAQ-UseWasabi.md)
  - [Wallet Manager](/FAQ/FAQ-UseWasabi.md#wallet-manager)
  - [Synchronization](/FAQ/FAQ-UseWasabi.md#synchronization)
  - [Receive](/FAQ/FAQ-UseWasabi.md#receive)
  - [Send](/FAQ/FAQ-UseWasabi.md#send)
  - [History](/FAQ/FAQ-UseWasabi.md#history)
  - [Coin Join](/FAQ/FAQ-UseWasabi.md#coin-join)
  - [Hardware Wallet](/FAQ/FAQ-UseWasabi.md#hardware-wallet)
  - [Settings](/FAQ/FAQ-UseWasabi.md#settings)
  - [Coin Control Best Practices](/FAQ/FAQ-UseWasabi.md#coin-control-best-practices)
- [Contributions to Wasabi](/FAQ/FAQ-Contribution.md)

## Dojo

- [Dojo](Dojo.md)
- Support
- [Short term ToDo's and long term roadmap](ToDo.md)
- [Contribution Checklist](ContributionChecklist.md)
- [Demo Guide](DemoGuide.md)
- [Contribution Game](ContributionGame.md)

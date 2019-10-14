# WasabiDoc

[Wasabi Wallet](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.
It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is Wasabi Wallet's open source [documentation](https://docs.wasabiwallet.io) repository.
Here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves some of the existing problems, and how you can use this tool to defend yourself.
If you have a question regarding the documentation, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues).
If you have an answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).


## Basics

- [Why Privacy is Important](why-wasabi/WhyPrivacyImportant.md)
- [Privacy in Bitcoin](why-wasabi/BitcoinPrivacy.md) </br>
  -- [Address Reuse](why-wasabi/BitcoinPrivacy.md#address-reuse) </br>
  -- [Inputs and Outputs](why-wasabi/BitcoinPrivacy.md#inputs-and-outputs) </br>
  -- [Transaction Graph](why-wasabi/BitcoinPrivacy.md#transaction-graph) </br>
  -- [Network Snooping](why-wasabi/BitcoinPrivacy.md#network-snooping) </br>
- Getting started
- [Wasabi 10 Commandments](why-wasabi/10Commandments.md)
- Wasabi compared to other Wallets

## Installing Wasabi

- [Install package](using-wasabi/InstallPackage.md) </br>
  -- [Windows](using-wasabi/InstallPackage.md#windows) </br>
  -- [Debian and Ubuntu](using-wasabi/InstallPackage.md#debian-and-ubuntu) </br>
  -- [Other Linux](using-wasabi/InstallPackage.md#other-linux) </br>
  -- [OSX](using-wasabi/InstallPackage.md#osx) </br>
- [Build from source code](using-wasabi/BuildSource.md)
- [Deterministic build](using-wasabi/DeterministicBuild.md)

## Features 

### Generate Wallet
- Label
- Seed and mnemonic
- Password
- [Password Finder](using-wasabi/PasswordFinder.md)

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
- [Network Level Privacy - Bitcoin Core vs Wasabi Wallet](using-wasabi/NetworkLevelPrivacy.md)
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

### CoinJoin
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
- [Pay To EndPoint](using-wasabi/PayToEndPoint.md)


## Development

- [A technical overview of Wasabi Wallet](building-wasabi/TechnicalOverview.md)
- [Wasabi coding conventions](building-wasabi/CodingConventions.md)
- [Security policy](building-wasabi/Security.md)
- [Code coverage](building-wasabi/CodeCoverage.md)
- [Hardware wallet testing](building-wasabi/HardwareWalletTestingGuide.md)
- [Debug Guide](building-wasabi/HowToDebug.md)
- [Ports](building-wasabi/Ports.md)

## [FAQ and Common Issues](/docs/FAQ/README.md#frequently-asked-questions-about-wasabi-wallet)

- [General Bitcoin Privacy](/docs/FAQ/FAQ-GeneralBitcoinPrivacy.md)
- [Introduction to Wasabi](/docs/FAQ/FAQ-Introduction.md)
- [Installation of Wasabi](/docs/FAQ/FAQ-Installation.md)
- [Use of Wasabi](/docs/FAQ/FAQ-UseWasabi.md) </br>
  -- [Wallet Manager](/docs/FAQ/FAQ-UseWasabi.md#wallet-manager) </br>
  -- [Synchronization](/docs/FAQ/FAQ-UseWasabi.md#synchronization) </br>
  -- [Receive](/docs/FAQ/FAQ-UseWasabi.md#receive) </br>
  -- [Send](/docs/FAQ/FAQ-UseWasabi.md#send) </br>
  -- [History](/docs/FAQ/FAQ-UseWasabi.md#history) </br>
  -- [CoinJoin](/docs/FAQ/FAQ-UseWasabi.md#coinjoin) </br>
  -- [Hardware Wallet](/docs/FAQ/FAQ-UseWasabi.md#hardware-wallet) </br>
  -- [Settings](/docs/FAQ/FAQ-UseWasabi.md#settings) </br>
  -- [Coin Control Best Practices](/docs/FAQ/FAQ-UseWasabi.md#coin-control-best-practices) </br>
- [Contributions to Wasabi](/docs/FAQ/FAQ-Contribution.md)

## Dojo

- [Dojo](building-wasabi/Dojo.md)
- Support
- [Short term ToDo's and long term roadmap](building-wasabi/ToDo.md)
- [Contribution Checklist](building-wasabi/ContributionChecklist.md)
- [Demo Guide](building-wasabi/DemoGuide.md)
- [Contribution Game](building-wasabi/ContributionGame.md)

# WasabiDoc 

From this document you will find links to information about the nuances of privacy in Bitcoin, how Wasabi solves these difficult problems, and how you can use these tools to defend yourself. 
If you have a question that is not yet covered, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues), if you have a good answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).


## Basics

- [Why Privacy is Important](WhyPrivacyImportant.md)
- [Privacy in Bitcoin](BitcoinPrivacy.md) </br>
  -- [Address Reuse](BitcoinPrivacy.md#address-reuse) </br>
  -- [Inputs and Outputs](BitcoinPrivacy.md#inputs-and-outputs) </br>
  -- [Transaction Graph](BitcoinPrivacy.md#transaction-graph) </br>
  -- [Network Snooping](BitcoinPrivacy.md#network-snooping) </br>
- Getting started

## Installing Wasabi

- [Install package](InstallPackage.md) </br>
  -- [Windows](InstallPackage.md#windows) </br>
  -- [Debian and Ubuntu](InstallPackage.md#debian-and-ubuntu) </br>
  -- [Other Linux](InstallPackage.md#other-linux) </br>
  -- [OSX](InstallPackage.md#osx) </br>
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
- [Pay To EndPoint](PayToEndPoint.md)

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
- [Network Level Privacy - Bitcoin Core vs Wasabi Wallet](NetworkLevelPrivacy.md)
- Difference hot / watch only wallet
- BIP 158 block filter
- Download of blocks over tor & full node

## Development

- [A technical overview of Wasabi Wallet](TechnicalOverview.md)
- [Wasabi coding conventions](CodingConventions.md)
- [Security policy](SECURITY.md)
- [Code coverage](CodeCoverage.md)
- [Manual testing](ManualTesting.md)
- [Hardware wallet testing](HardwareWalletTestingGuide.md)
- [Debug Guide](HowToDebug.md)
- [Ports](Ports.md)

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
  -- [Coin Join](/docs/FAQ/FAQ-UseWasabi.md#coin-join) </br>
  -- [Hardware Wallet](/docs/FAQ/FAQ-UseWasabi.md#hardware-wallet) </br>
  -- [Settings](/docs/FAQ/FAQ-UseWasabi.md#settings) </br>
  -- [Coin Control Best Practices](/docs/FAQ/FAQ-UseWasabi.md#coin-control-best-practices) </br>
- [Contributions to Wasabi](/docs/FAQ/FAQ-Contribution.md)

## Dojo

- [Dojo](Dojo.md)
- Support
- [Short term ToDo's and long term roadmap](ToDo.md)
- [Contribution Checklist](ContributionChecklist.md)
- [Demo Guide](DemoGuide.md)
- [Contribution Game](ContributionGame.md)

## Other

- [Wasabi 10 Commandments](10Commandments.md)
- Wasabi compared to other Wallets

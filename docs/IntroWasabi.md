# WasabiDoc

[Wasabi Wallet](https://wasabiwallet.io) is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.
It implements trustless coin shuffling: [Schnorrian CoinJoin](https://github.com/nopara73/ZeroLink/).

This is Wasabi Wallet's open source [documentation](https://docs.wasabiwallet.io) repository.
Here you will find information about the nuances of privacy in Bitcoin, how Wasabi solves some of the existing problems, and how you can use this tool to defend yourself.
If you have a question regarding the documentation, please [open an issue](https://github.com/zkSNACKs/WasabiDoc/issues).
If you have an answer to a question, please [open a pull request](https://github.com/zkSNACKs/WasabiDoc/pulls).


## Why Wasabi

- [Why Privacy is Important](why-wasabi/WhyPrivacyImportant.md)
- [Privacy in Bitcoin](why-wasabi/BitcoinPrivacy.md) </br>
  -- [Address Reuse](why-wasabi/BitcoinPrivacy.md#address-reuse) </br>
  -- [Inputs and Outputs](why-wasabi/BitcoinPrivacy.md#inputs-and-outputs) </br>
  -- [Transaction Graph](why-wasabi/BitcoinPrivacy.md#transaction-graph) </br>
  -- [Network Snooping](why-wasabi/BitcoinPrivacy.md#network-snooping)
- [Wasabi 10 Commandments](why-wasabi/10Commandments.md)
- [Transaction Surveillance Companies](why-wasabi/TransactionSurveillanceCompanies.md) </br>
-- [Spying technology](why-wasabi/TransactionSurveillanceCompanies.md#spying-technology) </br>
-- [Criticisms](why-wasabi/TransactionSurveillanceCompanies.md#criticisms) </br>
-- [Examples](why-wasabi/TransactionSurveillanceCompanies.md#examples)

## Installing Wasabi

- [Install package](using-wasabi/InstallPackage.md) </br>
  -- [Windows](using-wasabi/InstallPackage.md#windows) </br>
  -- [Debian and Ubuntu](using-wasabi/InstallPackage.md#debian-and-ubuntu) </br>
  -- [Other Linux](using-wasabi/InstallPackage.md#other-linux) </br>
  -- [macOS](using-wasabi/InstallPackage.md#macOS)
- [Build from source code](using-wasabi/BuildSource.md)
- [Deterministic build](using-wasabi/DeterministicBuild.md)
- [Wasabi Setup on Tails](using-wasabi/WasabiSetupTails.md)

## Using Wasabi

- [Wallet Generation](using-wasabi/WalletGeneration.md)
- [Receive](/using-wasabi/Receive.md)
- [CoinJoin](/using-wasabi/CoinJoin.md)
- [Password Finder](using-wasabi/PasswordFinder.md)
- [Cold-Wasabi Protocol](using-wasabi/ColdWasabi.md)
- [Lurking Wife Mode](using-wasabi/LurkingWifeMode.md)
- [Headless Wasabi Deamon](using-wasabi/Daemon.md)
- [Supported BIPs](using-wasabi/BIPs.md)

## Privacy Best Practices

- [Address Reuse](using-wasabi/AddressReuse.md)
- [Network Level Privacy](using-wasabi/NetworkLevelPrivacy.md)
- [How you can be de-anonymized using Bitcoin](using-wasabi/Deanonimization.md)
- [Pay to EndPoint](using-wasabi/PayToEndPoint.md)

## Restoring Wasabi

- [Wallet Recovery](/using-wasabi/WalletRecovery.md)
- [Restoring Wasabi Wallet to Electrum](using-wasabi/RestoreElectrum.md)
- [Lost Password Strategy](using-wasabi/LostPassword.md)

## Building Wasabi

- [Technical Overview of Wasabi Wallet](building-wasabi/TechnicalOverview.md)
- [Contribution Checklist](building-wasabi/ContributionChecklist.md)
- [Dojo](building-wasabi/Dojo.md)
- [ToDo List](building-wasabi/ToDo.md)
- [Coding Conventions](building-wasabi/CodingConventions.md)
- [Demo Guide](building-wasabi/DemoGuide.md)
- [Contribution Game](building-wasabi/ContributionGame.md)
- [Security Policy](building-wasabi/Security.md)
- [Code Coverage](building-wasabi/CodeCoverage.md)
- [Hardware Wallet Integration Testing](building-wasabi/HardwareWalletTestingGuide.md)
- [Developers debugging Guide](building-wasabi/HowToDebug.md)
- [Ports](building-wasabi/Ports.md)
- [MIT License](building-wasabi/LICENSE.md)
- [Credits](building-wasabi/Credits.md)

## FAQs

- [Introduction FAQ](FAQ/FAQ-Introduction.md)
- [Installation FAQ](FAQ/FAQ-Installation.md)
- [Use of Wasabi FAQ](FAQ/FAQ-UseWasabi.md)
- [Bitcoin Privacy FAQ](FAQ/FAQ-GeneralBitcoinPrivacy.md)
- [Contribution FAQ](FAQ/FAQ-Contribution.md)

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
- [BIP 158 block filter](FAQ/FAQ-UseWasabi.md#what-are-bip-158-block-filters)
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

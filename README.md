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

### [General Bitcoin Privacy](/FAQ/FAQ-GeneralBitcoinPrivacy.md)
- I have nothing to hide, do I still need financial privacy?
- How is Bitcoin good in terms of privacy?
- How is Bitcoin bad in terms of privacy?
- Why is it important to use a new address for every payment?
- Why is it important for my privacy to run a full node?
- How does Tor protect my network-level privacy? 

### [Introduction to Wasabi](/FAQ/FAQ-Introduction.md)
- Explain Wasabi like I'm 5
- What is the history of Wasabi?
- [What is a coin join?](/FAQ/FAQ-Introduction.md#what-is-a-coin-join)
- How does Zero Link differ from other coin join implementations?
- [Do I need to trust Wasabi with my coins?](/FAQ/FAQ-Introduction.md#do-i-need-to-trust-wasabi-with-my-coins)
- [What is the privacy I get after mixing with Wasabi?](/FAQ/FAQ-Introduction.md#what-is-the-privacy-i-get-after-mixing-with-wasabi)
- [Can I hurt my privacy with Wasabi?](/FAQ/FAQ-Introduction.md#can-i-hurt-my-privacy-using-wasabi)
- Who can use Wasabi?
- Who is contributing to Wasabi?
- What are the minimal requirements to run Wasabi?
- Why is Wasabi libre and open source software?
- Why is Wasabi Bitcoin-only?
- [Does Wasabi have a warrant canary?](/FAQ/FAQ-Introduction.md#does-wasabi-have-a-warrant-canary)
- What do peers say about Wasabi?

### [Installation of Wasabi](/FAQ/FAQ-Installation.md)
- Where can I download Wasabi?
- Why is it important to verify PGP signatures?
- How do I install Wasabi on Linux?
- How do I install Wasabi on Microsoft?
- How do I install Wasabi on iOS?
- How do I check the current version of Wasabi?
- How do I know about a new version of Wasabi?
- [How do I securely upgrade Wasabi?](/FAQ/FAQ-Installation.md#how-do-i-securely-upgrade-wasabi)
- How do I compile Wasabi from source?
- How can I install Wasabi headless daemon without GUI?
- How do I check the deterministic builds?
- How do I install the Wasabi backend server?
- [Do I need to install Tor separately?](/FAQ/FAQ-Installation.md#do-i-need-to-install-tor-separately)

### [Use of Wasabi](/FAQ/FAQ-UseWasabi.md)
#### [Wallet Manager](/FAQ/FAQ-UseWasabi.md#wallet-manager)
- How do I generate a new wallet?
- How do I back up my mnemonic seed?
- What password should I use?
- Can I spend my bitcoin without the password?
- How do I backup my wallet?
- What's up with the Chinese characters?

#### [Synchronization](/FAQ/FAQ-UseWasabi.md#synchronization)
- What are BIP-158 block filters?
- How does Wasabi download a relevant block?
- How long does the initial, and a subsequent synchronization take?
- How do I know if the synchronization is finished?

#### [Receive](/FAQ/FAQ-UseWasabi.md#receive)
- How do I generate a new receiving address?
- Why do I have to label my address?
- How can I change the label of my address?
- [Why does Wasabi only use SegWit bech32 addresses?](/FAQ/FAQ-UseWasabi.md#why-does-wasabi-only-use-segwit-bech32-addresses)
- Where can I find my public key?
- Where can I find a QR code of the address?
- Are there privacy concerns regarding whom I send my address?

#### [Send](/FAQ/FAQ-UseWasabi.md#send)
- What are coins?
- Why is coin control so important?
- How do I select coins for spending?
- What is the cluster history?
- How do I set a destination address?
- Can I send to many addresses?
- What fee should I select?
- Can I see the fee in Satoshis per byte?
- How is the tansaction broadcasted?

#### [History](/FAQ/FAQ-UseWasabi.md#history)
- How can I check the history of transactions?
- Can I export a list of transaction?

#### [Coin Join](/FAQ/FAQ-UseWasabi.md#coin-join)
- How can I select UTXOs for coin join?
- What are the denominations created in one round?
- [Can I mix more than the round's minimum?](/FAQ/FAQ-UseWasabi.md#can-i-mix-more-than-the-rounds-minimum)
- [What is the anonymity set?](/FAQ/FAQ-UseWasabi.md#what-is-the-anonymity-set)
- How much anonymity set do I need?
- How many rounds should I coin join?
- [What are the fees for the coin join?](/FAQ/FAQ-UseWasabi.md#what-are-the-fees-for-the-coin-join)
- What is happening in the input registration phase?
- What is happening in the connection confirmation phase?
- What is happening in the output registration phase?
- What is happening in the signing phase phase?
- What is happening in the broadcasting phase?
- How does my wallet communicate with the Wasabi coordinator server?
- [Why are the denominations such an odd number?](/FAQ/FAQ-UseWasabi.md#why-are-the-denominations-such-an-odd-number)

#### [Hardware Wallet](/FAQ/FAQ-UseWasabi.md#hardware-wallet)
- Why does Wasabi use the Hardware Wallet Interface?
- What specific hardware wallets does Wasabi support?
- How can I type in the PIN of my Trezor One?
- How can I manage the passphrase of my Trezor T?
- Can I use the passphrase of my Trezor One?
- How can I generate a Wasabi skelton wallet file in Cold Card?
- How can I import the Wasabi skelton wallet file?
- How can I generate a receiving address of my hardware wallet?
- How can I sign a transaction with a USB connected hardware wallet?
- How can I build and export a transaction to Cold Card?
- How can I sign a transaction on the Cold Card?
- How can I import and broadcast a final transaction from Cold Card?
- Can I coin join the bitcoin on my hardware wallet?

#### [Settings](/FAQ/FAQ-UseWasabi.md#settings)
- [How can I connect to my own full node to Wasabi?](/FAQ/FAQ-UseWasabi.md#how-do-i-connect-my-own-full-node-to-wasabi)
- [How can I change the anonset target?](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target)
- How can I change the dust threshold?
- [How can I turn off Tor?](/FAQ/FAQ-UseWasabi.md#how-can-i-turn-off-tor)
- Where can I find the logs?

#### [Coin Control Best Practices](/FAQ/FAQ-UseWasabi.md#coin-control-best-practices)
- [Can I consolidate anonset coins?](/FAQ/FAQ-UseWasabi.md#can-i-consolidate-anonset-coins)
- [How can I send my anonset coins to my hardware wallet?](/FAQ/FAQ-UseWasabi.md#how-can-i-send-my-anonset-coins-to-my-hardware-wallet)
- [What can I do with small change?](/FAQ/FAQ-UseWasabi.md#what-can-i-do-with-small-change)
- Which coins can I select for coin joins?
- How can I mix large amounts?

### [Contributions to Wasabi](/FAQ/FAQ-Contribution.md)
- Who is contributing to Wasabi already?
- How can I get help and support?
- What does the Wasabi project need help with?
- How can I report a bug?
- How can I request a feature?
- How should I start contributing code?
- Who verifies the pull requests? 
- Is there a bounty program?
- What is on the future roadmap of Wasabi development?

## Dojo

- [Dojo](/Dojo.md)
- Support
- Issues
- Contribute Code
- [Demo Guide](/DemoGuide.md)
- [Contribution Game](/ContributionGame.md)

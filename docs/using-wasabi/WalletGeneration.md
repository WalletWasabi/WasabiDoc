---
{
  "title": "Wallet Generation",
  "description": "A detailed guide about the wallet and the key generation in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wallet Generation

[[toc]]

## Introduction

With Wasabi you can generate an unlimited number of Bitcoin wallets very quickly, without any cost, and without asking anyone for permission.
Each wallet has separate private and public keys in a unique backup, and they are not at all linked to the other wallets generated on the same computer.
So, with several wallets, you can conveniently manage your bitcoin for different use cases without worrying about revealing that you control them.

## Generating the wallet step-by-step

1. Launch Wasabi Wallet.
The very first time you run the software the `Add Wallet` dialog will be open automatically, but you can also access it by clicking on `Add Wallet` in the NavBar or Searchbar.

2. Click `Create a new wallet` to generate a new wallet.

![Add a Bitcoin wallet with Wasabi](/AddWallet.png "Add a Bitcoin wallet with Wasabi")

3. Give the wallet a name.
This name is not shared with anyone, it is only stored locally on your computer.
(If there are no wallets then this step is skipped and the new wallet will automatically be named _Wallet_)
Click `Continue`.

![Add Wallet Wallet Name](/AddWalletWalletName.png "Add Wallet Wallet Name")

4. Select the Wallet Backup Type.

`Recovery Words Backup` will give 12 words (BIP 39).
`Multi-share Backup` will give multiple sets of 20 words (SLIP 39) of which a subset is needed to recover the wallet.
How many total shares (16 maximum), and the threshold that is needed for recovery is set by the user.

![Add Wallet Backup Type](/WalletBackupType.png "Add Wallet Backup Type")

5. Write down the 12 recovery words (mnemonic seed phrase) in the correct order and store them in a safe place.
You have to use this seed phrase **together with** your passphrase to recover your wallet (using Wasabi or another [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) compliant wallet).

	:::danger Back up your recovery words!
	Without the recovery words (Seed phrase) AND the passphrase, you cannot recover your wallet.
	So, triple-check that you have a proper backup!
	Make sure the backup of your recovery words is stored separately from the passphrase backup.
	:::

![Wasabi Wallet recovery words](/AddWalletRecoveryWords.png "Wasabi Wallet recovery words")

Or write down all the shares, when using `Multi-share Backup`, and store them in safe places. 

6. You must confirm the Recovery Words by clicking on the right word in the right order, as a check to make sure that your Recovery Words are backed up.
So, confirm the Recovery Words, and click `Continue`.

![Wasabi Wallet confirm recovery words](/AddWalletConfirmRecoveryWords.png "Wasabi Wallet confirm recovery words")

7. Write a long and random passphrase and **[back it up](/using-wasabi/BackupBestPractices.md)**.
It encrypts your secrets, and you will need it every time you want to open the wallet, spend bitcoin from this wallet or recover your wallet.

	If you are uncertain about how to create a secure passphrase, refer to [Password Best Practices](/using-wasabi/PasswordBestPractices.md) for helpful information.

	:::danger Back up your passphrase!
	Without the passphrase, you cannot spend your bitcoin or recover your wallet, even if you have the recovery words (Seed phrase).
	So, triple-check that you have a proper backup!
	:::

8. Confirm the passphrase and click the `Continue` button.

![Wasabi Wallet Add Passphrase](/AddWalletAddPassphrase.png "Wasabi Wallet Add Passphrase")

9. The wallet is succesfully added and will automatically be opened.

![Wallet Successfully Added](/AddWalletSuccessfullyAdded.png "Wallet Successfully Added")

## Important info about your wallet password

Wasabi integrates [BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki), which means that the secrets needed to spend the bitcoin are encrypted on the computer.
If someone has compromised your operating system and hardware and he only has the encrypted secrets, then no bitcoin can be spent by him.
You need **both** the encrypted secrets and the passphrase in order to enable the private key which can sign a spending transaction.
This means that the passphrase is your last line of defense against anyone who tries to steal your bitcoin.

## How are the secrets created

Wasabi uses [BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki)

![How Secrets Created](/HowAreTheSecretsCreated.png "How Secrets Created")

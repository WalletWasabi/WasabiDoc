---
{
  "title": "Wallet Generation",
  "description": "A detailed guide about the wallet and the key generation in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wallet Generation

With Wasabi you can generate an unlimited number of Bitcoin wallets very quickly, without any cost, and without asking anyone for permission.
Each wallet has separate private and public keys in a unique backup, and they are not at all linked to the other wallets generated on the same computer.
So, with several wallets, you can conveniently manage your bitcoin for different use cases without worrying about revealing that you control them.

[[toc]]

---

## Generating the wallet step-by-step

1. Launch Wasabi Wallet.
The very first time you run the software the `Generate Wallet` tab will be open automatically, but you can also access it by clicking on `File -> Generate Wallet` in the menu bar.

2. Name the new wallet precisely to ensure a proper differentiation from wallets created in the future.
This label is not shared with anyone, it is only stored locally on your computer.

3. Write a long and random password and **[back it up](/using-wasabi/BackupBestPractices.md)**.
It encrypts your secrets, and you will need it every time you want to spend bitcoin from this wallet or recover your wallet.

	If you are uncertain about how to create a secure password, refer to [Password Best Practices](/using-wasabi/PasswordBestPractices.md) for helpful information.

	:::danger Back up your password!
	Without the password, you cannot spend your bitcoin or recover your wallet, even if you have the recovery words (Seed phrase).
	So, triple-check that you have a proper backup!
	:::

4. Click the `Generate` button.

![Generate a Bitcoin wallet with Wasabi](/WalletManagerGenerateWallet.png "Generate a Bitcoin wallet with Wasabi")

5. Write down the 12 recovery words (mnemonic seed phrase).
You can use this seed phrase **together with** your password to recover your wallet on a different computer using Wasabi or another [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) compliant wallet.

	:::danger Back up your recovery words!
	Without the recovery words (Seed phrase) AND the password, you cannot recover your wallet.
	So, triple-check that you have a proper backup!
	Make sure the backup of your recovery words is stored separately from the password backup.
	:::

![Wasabi Wallet recovery words](/WalletManagerRecoveryWords.png "Wasabi Wallet recovery words")

6. You must test the password before you can load the wallet, to make sure that your password is correct.
So, type or paste the password in the text box, and click `Load Wallet`.

![Test Wasabi Wallet password](/TestPassword.png "Test Wasabi Wallet password")

## Important info about your wallet password

Wasabi integrates [BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki), which means that the secrets needed to spend the bitcoin are encrypted on the computer.
If someone has compromised your operating system and hardware and he only has the encrypted secrets, then no bitcoin can be spent by him.
You need **both** the encrypted secrets and the password in order to enable the private key which can sign a spending transaction.
This means that the password is your last line of defense against anyone who tries to steal your bitcoin.

## How are the secrets created

Wasabi uses [BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki)

```
                      +--------------+
                      | Entropy      |
                      +--------------+
  +------------+             |
  | Word list  +------------>+
  +------------+             |
                      +------v-------+
                      | Mnemonics    |
                      +--------------+
                             |
                   +--------->
                   |         |
                   |  +------v-------+
                   |  | Seed         |
                   |  +--------------+
                   |         |
   +-----------+   |         |
   | Password  +---+  +------v-------+
   +-----------+   |  | Extended Key |
                   |  +--------------+
                   |         |
                   |         |
                   |  +------v-------+
                   |  | Private key  |     ** This step is needed to use bip38
                   |  +--------------+
                   |         |              +-------------+
                   +-------->+<-------------+  Network    |
                             |              +-------------+
                      +------v-------+
                      | Encrypted    |
                      | secret       |
                      +--------------+
                             |
                             |
                             |
                  +--------------------+
                  | Save encrypted     |
                  | secret+chaincode+  |
                  | Fingerprint+ExtPub |
                  +--------------------+

```

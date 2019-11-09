---
{
  "title": "Recover Wasabi Wallet",
  "description": "A detailed guide about restoring a wallet in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Recover Wasabi Wallet

There are two different ways that you can recover an already used wallet in Wasabi.

[[toc]]

## Mnemonic Recovery Words

Wasabi uses the [BIP 38](/using-wasabi/BIPs.md#bip-38-password-protected-private-key) password protected [BIP 39](/using-wasabi/BIPs.md#bip-39-mnemonic-code-for-generating-deterministic-keys) mnemonic code for generating [BIP 32](/using-wasabi/BIPs.md#bip-32-hierarchical-deterministic-wallets) hierarchical deterministic wallet keys.
With *both* your self generated password *and* the automatically generated 12 mnemonic recovery words you can import all the necessary secrets to Wasabi and do a full wallet recovery.
You can set a wallet name so that you know for what reason the wallet is used.
The password is used to encrypt your secrets on your hardware, and when recovering, Wasabi is unable to check if your password is correct.
When you type in your 12 recovery words, Wasabi checks the spelling based on the [official wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) and offers the right word below the textbox.
Now you can click on `Recover`, Wasabi will decrypt the mnemonic with the password, and scan the blockchain for transactions of your wallet.
After a short loading period, you can use Wasabi as usual.

![](/WalletRecovery.png)

You can also toggle the advanced option and specify an account key path of the HD wallet structure.
The gap limit is about how far Wasabi will check the HD wallet structure for addresses that have coins, in some cases you may want to increase this limit.

![](/WalletRecoveryAdvanced.png)

## Backup Wallet File

Wasabi Wallet creates a backup of your wallet file inside `WalletBackups` in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) .
If you have done a backup of this file, then you can copy it to the `Wallets` folder, and upon the next restart of Wasabi, it will show this wallet in the `Wallet Manager`, from where you can open it as usual.

---
{
  "title": "Recover Wasabi Wallet",
  "description": "A detailed guide about restoring a wallet in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Recover Wasabi Wallet

There are two different ways that you can recover an already used wallet in Wasabi.

[[toc]]

## Mnemonic Recovery Words and Password

Wasabi uses the [BIP 39](/using-wasabi/BIPs.md#bip-39-mnemonic-code-for-generating-deterministic-keys) mnemonic code for generating [BIP 32](/using-wasabi/BIPs.md#bip-32-hierarchical-deterministic-wallets) hierarchical deterministic wallets.
With **both** your password **and** the generated 12 mnemonic recovery words you can import all the necessary secrets to Wasabi and do a full wallet recovery.
You can set a wallet name so that you know for what reason the wallet is used.
When you type in your 12 recovery words, Wasabi checks the spelling based on the [official wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) and offers the right word below the textbox.
Now you can click on `Recover`, and Wasabi will recover your wallet, and scan the blockchain for transactions of this wallet.
After a short loading period, you can use Wasabi as usual.

![](/WalletRecovery.png)

:::danger
At recovery, Wasabi is unable to check if your password is correct or not.
If you type a wrong password a completely different wallet will be recovered.
:::

You can also toggle the advanced option and specify an account key path of the HD wallet structure.
The gap limit is about how far Wasabi will check the HD wallet structure for consecutive addresses that have no coins, in some cases you may want to increase this limit.

![](/WalletRecoveryAdvanced.png)

## Backup Wallet File and Password

Wasabi Wallet creates a backup of your wallet file inside `WalletBackups` in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
If you have done a backup of this file, then you can copy it to the `Wallets` folder, and upon the next restart of Wasabi, it will show this wallet in the `Wallet Manager`, from there you can open it as usual.

:::warning
Make sure to back up your password separately because it is necessary to spend your bitcoin.
:::

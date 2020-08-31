---
{
  "title": "Recover a Wallet",
  "description": "A detailed guide about restoring a wallet in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Recover a Wallet

There are two different ways that you can recover an already used wallet in Wasabi.

[[toc]]

---

## Mnemonic Recovery Words and Password

Wasabi uses the [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) mnemonic code for generating [BIP 32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) hierarchical deterministic wallets.
**Both** your password **and** the generated 12 mnemonic recovery words are the necessary secrets to recover your wallet.
The specified wallet name is for future recognition of the wallet.
The recovery words are spell checked based on the [official wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt), with the right word shown below the text box.
Now you can click on `Recover`, and Wasabi will recover your wallet, and [load the wallet](/using-wasabi/WalletLoad.md).
After a short loading period, you can use Wasabi as usual.
With this level, only the private keys are imported, but not the labels of your addresses.

![Wasabi Wallet Recovery tab](/WalletRecovery.png "Wasabi Wallet Recovery tab")

:::danger
At recovery, Wasabi is unable to check if your password is correct or not.
If you type a wrong password a completely different wallet will be recovered.
:::

You can also toggle the advanced option and specify an account key path of the HD wallet structure.
The gap limit is about how far Wasabi will check the HD wallet structure for consecutive addresses that have no coins, in some cases, you may want to increase this limit.

![Wasabi Wallet Recovery tab advanced options](/WalletRecoveryAdvanced.png "Wasabi Wallet Recovery tab advanced options")

:::tip
With this method, you can recover a wallet that was generated with any BIP39 compatible software, not just a Wasabi generated wallet.
:::

## Back up Wallet File and Password

Wasabi Wallet creates a backup of your wallet file inside `WalletBackups` in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
If you have done a backup of this file, then you can copy it to the `Wallets` folder, and upon the next restart of Wasabi, it will show this wallet in the `Wallet Manager`, from there you can open it as usual.
Using this method will also backup your address labels and cluster history.

:::warning
Make sure to back up your password separately because it is necessary to spend your bitcoin.
:::

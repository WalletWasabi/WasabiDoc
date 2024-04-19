---
{
  "title": "Recover a Wallet",
  "description": "A detailed guide about restoring a wallet in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Recover a Wallet

There are two different ways that you can recover an already used wallet in Wasabi.

[[toc]]

## Mnemonic Recovery Words and Password

Wasabi uses the [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) mnemonic code for generating [BIP 32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) hierarchical deterministic wallets.
**Both** your password **and** the generated 12 mnemonic recovery words are the necessary secrets to recover your wallet.
The recovery words are spell checked based on the [official wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt), with the right word shown below the text box.

To recover a wallet:

1. Click on `Add Wallet` at the bottom left corner of the main view.

![Wasabi Wallet Add Wallet](/AddWalletButton.png "Wasabi Wallet Add Wallet")

2. Click on `Recover a wallet`.

![Wasabi Wallet Add Wallet](/AddWallet.png "Wasabi Wallet Add Wallet")

3. Give the wallet a name for future recognition of the wallet.

![Wasabi Wallet Name Wallet](/AddWalletWalletName.png "Wasabi Wallet Name Wallet")

4. Type in the Recovery Words in the correct order and click `Continue`.

![Wasabi Wallet Recover Wallet](/WalletRecovery.png "Wasabi Wallet Recover Wallet")

5. Type in the Password.

![Add Wallet Add Password](/AddWalletAddPassphrase.png "Add Wallet Add Password")

Now Wasabi will recover your wallet.

With this, only the private keys are imported, but not the labels of your addresses.

:::danger
At recovery, Wasabi is unable to check if your password is correct or not.
If you type a wrong password a completely different wallet will be recovered.
:::

You can also use the `Advanced Recovery Options` to specify the gap limit.
The gap limit is about how far Wasabi will check the HD wallet structure for consecutive addresses that have no coins, in some cases, you may want to increase this limit.

![Wasabi Wallet Recovery Advanced](/WalletRecoveryAdvanced.png "Wasabi Wallet Recovery Advanced")

:::tip
With this method, you can recover a wallet that was generated with any BIP39 compatible software, not just a Wasabi generated wallet.
:::

## Back up Wallet File and Password

Wasabi Wallet creates a backup of your wallet file inside `WalletBackups` in your [Wasabi data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
If you have done a backup of this file, then you can import it at `Add Wallet`, by clicking on `Import a wallet`.

Alternitavely: copy the wallet file to the `Wallets` folder, and upon the next restart of Wasabi, it will show this wallet in the `NavBar`, from there you can open it as usual.

Using this method will also backup your address labels and cluster history.

:::warning
Make sure to back up your password separately because it is necessary to spend your bitcoin.
:::

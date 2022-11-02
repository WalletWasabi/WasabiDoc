---
{
  "title": "Password Finder",
  "description": "A step by step guide on how to use the Wasabi password finder to fix typos in forgotten passwords. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Password Finder

Wasabi Password Finder is a tool for helping those who made a mistake typing the password during the wallet creation process.
This tool tries to find the password that decrypts the encrypted secret key stored in a given wallet file.

[[toc]]

---

## Limitations

Wasabi Wallet protects the encrypted secret key with the same technology used to protect paper wallets ([BIP 38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki)) and for that reason, it is computationally infeasible to brute force the password using all the possible combinations (assuming a secure password was chosen).

:::warning
It is important to know that the Wasabi Password Finder is not for breaking wallet passwords but for finding errors (typos) in an already known password, and that it's success rate is limited.
:::

## Usage

After an incorrect password is entered when opening a wallet, `Forgot Password` will show up.

![Wasabi Wallet Forgot Password](/ForgotPassword.png "Wasabi Wallet Forgot Password")

First you will be asked questions, like _your most likely password_, _which language_, _which characters it contains_ etc.
After that it will search if your password can be found.

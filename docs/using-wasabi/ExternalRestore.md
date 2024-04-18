---
{
  "title": "Restoring Wasabi Wallet in Other Wallets",
  "description": "A detailed compatibility list to restore Wasabi Wallet in other wallets. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Restoring Wasabi Wallet in Other Wallets

:::danger Potential privacy leak!
If you do not run your own node or your own Electrum server, you will leak all your addresses to random third-party servers, losing anonymity against those entities, so you must make a judgement call by being aware of this.

You should set up Tor on Network preferences, connect to your own node or install your own Electrum server (if the wallet is compatible) via [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server), [ElectrumX](https://github.com/kyuupichan/electrumx) or [Electrs](https://github.com/romanz/electrs).
:::

[[toc]]

## Compatibility List for Segwit Addresses (bc1)

Wasabi uses Script type Native SegWit (P2WPKH) and derivation path m/84'/0'/0' to generate Segwit addresses.

Wallets generated with Wasabi also require a passphrase.

Here are major wallets you can use to recover a Wasabi Wallet for Segwit addresses:

- Blue Wallet
- BTCPay Server
- Electrum Wallet
- Sparrow
- Specter Desktop

For a complete list of compatible wallets, see here: https://walletsrecovery.org

## Compatibility List for Taproot Addresses (bc1p)

Wasabi uses Script type Taproot(P2TR) and derivation path m/86'/0'/0' to generate Taproot addresses.

Wallets generated with Wasabi also require a passphrase.

Here is a wallet you can use to recover a Wasabi Wallet for Taproot addresses:

- Sparrow Wallet

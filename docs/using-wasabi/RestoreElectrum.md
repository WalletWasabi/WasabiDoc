---
{
  "title": "Restoring Wasabi Wallet to Electrum",
  "description": "A detailed guide about restoring a wallet created from Wasabi to Electrum. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Restoring Wasabi Wallet to Electrum

:::danger Bad for your privacy!
If you do this, you send all your Wasabi addresses to 3rd party Electrum servers, losing the anonymity against those entities, so you must make a judgement call by being aware of this.

To gain some privacy by using Electrum you should setup Tor on Network preferences or by installing your own Electrum server via [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server), [ElectrumX](https://github.com/kyuupichan/electrumx) or [Electrs](https://github.com/romanz/electrs).
:::

Follow one of these two tutorials to get this done:

[[toc]]

---

## Restoring Wasabi Wallet via Electrum GUI

1. Launch Electrum

If you don't have a wallet created on Electrum it should automatically display an Install Wizard. If it opens your default wallet then go to `File` -> `New/Restore`.

2. Name your new Electrum wallet

3. Choose `Standard wallet`

4. Choose `I already have a seed` or `Use a master key`

5. Type your seed or paste your master private key

:::danger You are at risk!
By typing the seed or pasting the master private key on a hot or compromised device, you risk losing your funds.
:::

:::tip
Steps to find your master private key inside Wasabi:
- Go to `Advanced` tab -> `Wallet Info`.
- Copy your `Extended Account zprv`
:::

The following steps are only necessary if you have previously chosen the option `I already have a seed`.

6. Click the `Options` button, then check `BIP39 seed` and if you created your Wasabi wallet with a password make sure to check `Extend this seed with custom words` and type your password in the `Seed extension` window

7. On `Script type and Derivation path` window, choose `native segwit (p2wpkh)` or manually insert `m/84'/0'/0'`

If your balance is not correct maybe it is necessary to change the `gap_limit` or the `gap_limit_for_change` to 100 or even more if needed.

8. Open Electrum's `Console` and type the following commands:

```
wallet.change_gap_limit(100)
wallet.gap_limit_for_change = 100
wallet.synchronize()
```

## Restoring Wasabi Wallet manually by creating a new wallet file

1. Create a new empty text file

This will be your Electrum wallet file.

2. Paste the following code:

```
{
    "keystore": {
        "type": "bip32",
        "xprv": "vprv9DMUxX4ShgxMLku9TWoPTTt3ZKYhAHCuhULnR9Qmkv1naNQ4g1HfdURhfq65aJKk7zsmnoXbVryeLwtkj9LhuQoKFD5Fyus9kkiwA1S2pEU",
        "xpub": "vpub5ZPNxAuehdRrMpX7vQSQzAshpziQUZHnDkzPBZJ4GFbhn8mVxoyxJzCGq482a2BDHvfnMfX1u4hdX1XfS7ZdHJXffydLPHjCXBY86sG6tE1"
    },
    "seed_type": "bip39",
    "seed_version": 18,
    "use_encryption": false,
    "wallet_type": "standard"
}
```

3. Replace `xprv` and `xpub` sections with your Wasabi wallet's `Extended Account zprv` and `Extended Account zpub`

:::tip
Steps to find your master private key inside Wasabi:
- Go to `Advanced` tab -> `Wallet Info`.
- Copy your `Extended Account zprv`
- Copy your `Extended Account zpub`
:::

:::danger You are at risk!
By pasting the master private key on a hot or compromised device, you risk losing your funds.
:::

4. Open the wallet file you created in Electrum

If your balance is not correct maybe it is necessary to change the `gap_limit` or the `gap_limit_for_change` to 100 or even more if needed.

5. Open Electrum's `Console` and type the following commands:

```
wallet.change_gap_limit(100)
wallet.gap_limit_for_change = 100
wallet.synchronize()
```

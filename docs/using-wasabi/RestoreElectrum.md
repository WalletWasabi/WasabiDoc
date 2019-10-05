---
{
  "title": "Wallet Generation",
  "description": "A detailed guide about restoring a wallet created from Wasabi to Electrum. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Restoring Wasabi Wallet to Electrum

:::danger Bad for your privacy!
If you do this, you send all your Wasabi addresses to 3rd party Electrum servers, losing the anonymity against those entities, so you must make a judgement call by being aware of this.
To gain some privacy by using Electrum you should setup Tor on Network preferences or by installing your own Electrum server via [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server) or [Electrs](https://github.com/romanz/electrs).
:::

You can follow two different tutorials to get this done:

[[toc]]

---

## Restoring Wasabi Wallet via Electrum GUI

###Steps:

1. Launch Electrum
If you don't have a wallet created on Electrum it should automatically display an Install Wizard. If it opens your default wallet then go to `File` -> `New/Restore`.

2. Name your wallet
Choose a name for your new Electrum wallet.

3. Choose `Standard Wallet`

4. Choose `I already have a seed` or `Use a master key`
:::danger You are at risk!
By typing/pasting the seed or the master private key on a hot or compromised device, you risk losing your funds.
:::

Here you can type your seed or paste your master private key.
::: tip
Steps to find your master private inside Wasabi:
- Go to `Advanced Info` tab.
- Copy your `Extended Master zprv`
:::

4. On `Script type and Derivation path` tab, choose `native segwit (p2wpkh) or manually insert `m/84'/0'/0'` and proceed to the next steps

5. Open Electrum's console and digit `wallet.gap_limit_for_change = 100` to change your `gap limit` to 100

## Restoring Wasabi Wallet manually by creating a new wallet file

###Steps:

1. Create a new text file
This will be your Electrum Wallet file.

2. Paste the following code:

```
{
    "keystore": {
        "type": "bip32",
        "xprv": "vprv9DMUxX4ShgxMLku9TWoPTTt3ZKYhAHCuhULnR9Qmkv1naNQ4g1HfdURhfq65aJKk7zsmnoXbVryeLwtkj9LhuQoKFD5Fyus9kkiwA1S2pEU",
        "xpub": "vpub5ZPNxAuehdRrMpX7vQSQzAshpziQUZHnDkzPBZJ4GFbhn8mVxoyxJzCGq482a2BDHvfnMfX1u4hdX1XfS7ZdHJXffydLPHjCXBY86sG6tE1"
    },
    "seed_type": "bip39",
    "seed_version": 16,
    "use_encryption": false,
    "wallet_type": "standard"
}
```

3. Replace `xprv` and `xpub` sections with Wasabi's
::: tip
Steps to find your master private inside Wasabi:
- Go to `Advanced Info` tab.
- Copy your `Extended Master zprv`
:::

:::danger You are at risk!
By copypasting the master private key on a hot or compromised device, you risk losing your funds.
:::

4. Load the wallet you created in Electrum

5. 5. Open Electrum's console and digit `wallet.gap_limit_for_change = 100` to change your `gap limit` to 100

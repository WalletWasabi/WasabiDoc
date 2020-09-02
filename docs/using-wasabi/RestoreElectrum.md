---
{
  "title": "Restoring Wasabi Wallet in Electrum",
  "description": "A detailed guide about restoring a wallet created from Wasabi to Electrum. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Restoring Wasabi Wallet in Electrum

:::danger Potential privacy leak!
If you do not run your own Electrum server, you will leak all your addresses to random third-party servers, losing anonymity against those entities, so you must make a judgement call by being aware of this.

To gain some privacy by using Electrum you should set up Tor on Network preferences or by installing your own Electrum server via [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server), [ElectrumX](https://github.com/kyuupichan/electrumx) or [Electrs](https://github.com/romanz/electrs).
:::

[[toc]]

---

## Restoring Wasabi Wallet via Electrum GUI

1. Launch Electrum.

	If you don't have a wallet created on Electrum it should automatically display an Install Wizard. If it opens your default wallet then go to `File` -> `New/Restore`.

2. Name your new Electrum wallet.

3. Choose `Standard wallet`.

4. Choose `I already have a seed` or `Use a master key`.

5. Type your seed or paste your master private key.

	:::tip Get your master private key inside Wasabi:
	- Go to `Advanced` tab -> `Wallet Info`.
	- Copy your `Extended Account zprv`.
	:::

The next steps are only necessary if you have previously chosen the option `I already have a seed`.

6. Click the `Options` button, then check `BIP39 seed` and if you created your Wasabi wallet with a password make sure to check `Extend this seed with custom words` and type your password in the `Seed extension` window.

7. On `Script type and Derivation path` window, choose `native SegWit (p2wpkh)` or manually insert `m/84'/0'/0'`.

8. Increase the gap limits by opening Electrum's `Console` and executing the following commands:

	```
	wallet.change_gap_limit(100)
	wallet.gap_limit_for_change = 100
	wallet.synchronize()
	```

## Restoring Wasabi Wallet manually by creating a new wallet file

1. Create a new empty text file, this will be your Electrum wallet file.

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

3. Replace `xprv` and `xpub` sections with your Wasabi wallet's `Extended Account zprv` and `Extended Account zpub`.

	:::tip Get your master private and public keys inside Wasabi:
	- Go to `Advanced` tab -> `Wallet Info`.
	- Copy your `Extended Account zprv`.
	- Copy your `Extended Account zpub`.
	:::

4. Open the wallet file you created in Electrum.

5. Increase the gap limits by opening Electrum's `Console` and executing the following commands:

	```
	wallet.change_gap_limit(100)
	wallet.gap_limit_for_change = 100
	wallet.synchronize()
	```

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

:::warning Electrum does currently not support Taproot
As of Wasabi [version 2.0.3](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v2.0.3), users may receive Taproot outputs from coinjoin or as a change output from a normal transaction.
So when recovering a wallet from Wasabi in Electrum some funds might be missing, as the Taproot (SegWit v1) coins are not shown.
An other wallet that does support Taproot should be used for recovering Taproot coins.
:::

[[toc]]

## Restoring Wasabi Wallet via Electrum GUI

1. Launch Electrum.

	If you don't have a wallet created on Electrum it should automatically display an Install Wizard. If it opens your default wallet then go to `File` -> `New/Restore`.

2. Name your new Electrum wallet.

3. Choose `Standard wallet`.

4. Choose `I already have a seed`.

5. Type in your seed (recovery words).

6. Click the `Options` button, then select `BIP39 seed` and if you created your Wasabi wallet with a passphrase make sure to check `Extend this seed with custom words` and type your passphrase in the `Seed extension` window.

7. On the `Script type and Derivation path` window, choose `native SegWit (p2wpkh)` or manually insert `m/84'/0'/0'`.

8. Increase the gap limit by opening Electrum's `Console` and execute the following commands:

	```
	wallet.change_gap_limit(100)
	wallet.gap_limit_for_change = 100
	wallet.synchronize()
	```

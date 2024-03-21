---
{
  "title": "Restoring Wasabi Wallet in Sparrow",
  "description": "A detailed guide about restoring a wallet created from Wasabi to Sparrow. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Restoring Wasabi Wallet in Sparrow

:::danger Potential privacy leak!
If you do not run your own Electrum server, you will leak all your addresses to random third-party servers, losing anonymity against those entities, so you must make a judgement call by being aware of this.

To gain some privacy by using Sparrow you should set up Tor on Network preferences or by installing your own Electrum server via [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server), [ElectrumX](https://github.com/kyuupichan/electrumx) or [Electrs](https://github.com/romanz/electrs).
:::

[[toc]]

## Restoring Wasabi Wallet via Sparrow GUI

1. Launch Sparrow.

	Go to `File` -> `New Wallet`.

2. Name your new Sparrow wallet.

3. Choose `Single Signature` for the Policy Type and `Native Segwit (P2WPKH)` or  `Taproot (P2TR)` for the Script Type.

4. Under Keystores, choose `New or Imported Software Wallet`.

5. Next to Mnenonic Words (BIP39), choose `Use 12 Words`

6. Type in your seed phrase (recovery words).

7. If you created your Wasabi Wallet with a password make sure to check the box next to `Use passphrase?`, then click on `Yes` and type your password in the `passphrase` input field.

8. Click on `Create Keystore` to confirm your seed phrase and your passphrase.

9. Click on `Import Keystore`, then re-enter your passphrase (Wasabi's password), and click on `OK`.

11. Increase the gap limit by clicking on `Advanced` in the footer, then set the `Gap Limit` to 100. Close the window.

12. Click on Apply to complete the import process. Add a password optionally to lock access to your new wallet.

Your Sparrow Wallet is now ready. Use the sidebar menu to Receive and Send. 

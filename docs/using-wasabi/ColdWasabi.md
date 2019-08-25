---
{
  "title": "Cold-Wasabi protocol",
  "description": "A step by step guide on how to CoinJoin and send bitcoin to a hardware wallet for cold storage using WasabiWallet only. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Cold-Wasabi protocol

This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after one or more rounds of CoinJoin using Wasabi Wallet.
Both a 'Hot'(CoinJoin) and a 'Cold'(Storage) Wasabi Wallet instances will be running side-by-side, label them accordingly so you don't mix them up.

![](/ColdWasabiGeneral.png)

## Detailed walkthrough

1. Create a new Hot-Wasabi Wallet

2. Generate a new Receive address

3. Send coins you want to anonymize to the "Hot" Wasabi Wallet

Now you are set up for using the CoinJoin function with the "hot" Wasabi Wallet that holds the encrypted keys on an internet connected computer.

4. CoinJoin!

This is fine for small amounts of bitcoin, but not for larger bitcoin holdings.
That is where "Cold" hardware wallet storage comes in!
So after the CoinJoin you might want to send some of those coins back to the hardware wallet, but not expose those addresses to the central servers of the hardware wallet company or some sneaky peaky Electrum Wallet spies...

5. Connect your hardware wallet device (for the PSBT-protocol use a MicroSD card instead) 

6. Open another Wasabi Wallet instance, select `Hardware Wallet` to find your connected device.

*You will need to enter a PIN and unlock the hardware wallet*

For hardware wallet related questions see: [FAQ-UseWasabi](/docs/FAQ/FAQ-UseWasabi.md#hardware-wallet)

7. `Load Wallet` to import the xpub or Public Key (used to generate all receive addresses)

8. Go to Receive tab and Generate Receive Address, send the mixed coin (don't combine all UTXO's/coins in a single address! this hurts your anon-set badly) from your "Hot" Wasabi Wallet to this "Cold" Wasabi Wallet.

おめでとうございます!
You are now eating Cold Wasabi!

# Cold-Wasabi PSBT protocol
When you want to safely spend some of those Cold-Wasabi funds from the hardware wallet, you could use the Partially Signed Bitcoin Transaction for offline/airgapped signing of transactions for an extra layer of defense.

## Workflow diagram
![](/ColdWasabiPSBTWorkflow.png)

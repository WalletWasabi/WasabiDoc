# Cold-Wasabi protocol

This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after one or more rounds of CoinJoin using Wasabi Wallet.
Both a 'Hot'(CoinJoin) and a 'Cold'(Storage) Wasabi Wallet instances will be running side-by-side, label them accordingly so you don't mix them up.

![](/docs/.vuepress/public/ColdWasabi1.png)

## Detailed walkthrough

1. Create new Hot-Wasabi wallet

Now your set up for using the "Hot" Wasabi function called CoinJoin, with a wallet that holds the encrypted keys on an internet connected computer.

2. Generate new Receive address

3. Send coins you want to anonymize to "Hot" Wasabi wallet

4. CoinJoin!

This is fine for small amounts of bitcoin, but not your larger bitcoin holdings, that is where "Cold" Hardware Wallet storage comes in!
So after CoinJoin you might want to send some of those coins back to the Hardware Wallet, but not expose those addresses to the central servers of Ledger HQ or some sneaky peaky Electrum Wallet spies...

5. Open another Wasabi Wallet instance, select "Hardware Wallet" to find your connected device.

*You will need to enter a PIN and open the Bitcoin app on a Ledger Nano S

For Hardware-wallet related questions see: [FAQ-UseWasabi](FAQ-UseWasabi.md#hardware-wallet)

6. Load Wallet to import the xpub or Public Key (used to generate all receive addresses)

7. Go to Receive tab and Generate Receive Address, send the mixed coin (don't combine all UTXO/coins in a single address! 
this hurts your anon-set badly) from your "Hot" Wasabi wallet to this "Cold" Wasabi address.

おめでとうございます!
You are now eating Cold Wasabi!

# Cold-Wasabi PSBT protocol
When you want to safely spend some of those Cold-Wasabi funds from the hardware wallet, you could use the Partially Signed Bitcoin Transaction for offline/airgapped signing of transactions for an extra layer of defence.

## Workflow diagram
![](/docs/.vuepress/public/ColdWasabi2.png)

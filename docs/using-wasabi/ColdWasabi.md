---
{
  "title": "Cold-Wasabi Hardware Wallet Mode",
  "description": "A step by step guide on how to CoinJoin and send bitcoin to a hardware wallet for cold storage using Wasabi Wallet only. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Cold-Wasabi Hardware Wallet Mode

[[toc]]

---

## Using hardware wallet step-by-step

1. Start your Wasabi Wallet and connect your hardware wallet with USB.
Alternatively, you can import a Coldcard skeleton file via SD card.
2. The `Hardware Wallet` tab will open, and there you can search all connected hardware wallets.
3. Click `Load Wallet`, then you can [receive](/using-wasabi/Receive.md) bitcoin to addresses controlled by the hardware wallet.
4. You can [spend](/using-wasabi/Send.md) these coins in the `Send` tab, though the hardware wallet must be connected via USB to confirm before signing the transaction.
Alternatively, you can [build a PSBT](/using-wasabi/ColdWasabi.md#connecting-coldcard-via-sd-card), export this via SD card to your Coldcard wallet for signing, then import the final transaction to Wasabi for broadcasting.

:::warning No CoinJoin
Unfortunately, as of now, you cannot [CoinJoin](/using-wasabi/CoinJoin.md) with just the private keys on your hardware wallet.
The keys need to be on the internet-connected computer to be able to CoinJoin.
:::

## What is Cold Storage

Cold storage refers to generating and storing private keys completely offline.
This is an often-used security precaution, especially dealing with large amounts of bitcoin.
Because the private keys are not on a computer that is connected to the internet, many remote attack vectors are nullified.

Methods of cold storage include keeping private keys on a:
- USB drive or other data storage medium
- Paper wallet
- Bearer item such as a physical bitcoin
- Hardware wallet

## Hardware Wallet with Wasabi

You can use Wasabi Wallet with almost any hardware wallet out there because Wasabi utilizes [Bitcoin Core Hardware Wallet Interface [HWI]](https://github.com/bitcoin-core/hwi).
The setup is thoroughly tested for [Trezor model One and T](https://trezor.io), [Ledger Nano S](https://ledger.com), and [Coldcard](https://coldcardwallet.com).

### Connecting via USB

#### Import the wallet

When Wasabi is running, the hardware wallet can be connected via USB to the computer.
Wasabi should automatically detect the hardware, and open the `Hardware Wallet` tab where you can load the wallet.
This wallet can be used as a watch-only wallet when the hardware wallet device is not connected.

#### Receiving bitcoin

After the first time you loaded a new device, the public keys will be stored locally on the computer, and you can use Wasabi to [receive bitcoin](/using-wasabi/Receive.md) to the hardware wallet without connecting it again.

#### Sending bitcoin

Only when you want to [send bitcoin](/using-wasabi/Send.md) you need to connect the device over USB again.
In the `Send` tab, select your coins, specify the destination address and the payment amount and the fee, then click the `Send Transaction` button.
The private keys are not on the computer, thus the transaction is signed on the hardware wallet after you confirm with a physical button click.
The final transaction is automatically broadcast over Tor with Wasabi Wallet.

### Connecting Coldcard via SD card

You can use Wasabi Wallet together with Coldcard without ever connecting it via USB, further reducing possible attack vectors.
For more details see the [Coldcard documentation](https://coldcardwallet.com/docs/microsd).

#### Import the skeleton wallet

Power your Coldcard on a power bank or electricity socket, then unlock it with your pin.
Put in a Micro SD card and go to `Advanced > MicroSD Card > Export Wallet > Wasabi Wallet`.
This will write the public keys, wallet fingerprint, derivation path and other metadata to a skeleton file `new-wallet.json`.

:::warning Protect your public keys!
This file does not include your private keys, so an attacker cannot use it to spend your bitcoin.
However, he can use it to derive a full transaction history, thus it is a potential privacy leak.
:::

Now insert the SD card to your computer, and open Wasabi Wallet.
Go to the `Hardware Wallet` tab, and click the button `Import Coldcard`, browse to the SD card and select the `new-wallet.json` file.
Wasabi will automatically import and modify this skeleton file and store it in your `Wallets` and `WalletBackups` folders.

#### Receiving bitcoin

After the skeleton wallet is imported, you can open the wallet in the `Load Wallet` tab or `Wallet Explorer` without using your Coldcard.
Generate a [receiving address](/using-wasabi/Receive.md) as usual.
The private key corresponding to this address is on the hardware wallet.

#### Sending bitcoin
 
In the right-side `Wallet Explorer`, click on `Advanced` of your hardware wallet, then on `Build Transaction`.
This shows you a tab similar to the `Send` tab.
You select coins, specify the destination address, payment amount and mining fee.
Then you click the `Build Transaction` button, and it will generate an unsigned Bitcoin transaction.
Click on `Export Binary PSBT`, select the SD card and click `OK`.

![Wasabi Wallet export PSBT](/PSBTUnsigned.png "Wasabi Wallet Partial Signed Bitcoin Transaction")

Remove the SD card from the computer and put it into your Coldcard.
Then, in the Coldcard main menu click on `Ready to Sign`.
Verify the transaction details shown on the Coldcard, and approve the transaction for signing.
After this, remove the micro SD card from Coldcard and insert it into the computer.
In Wasabi, click on the top menu `Tools` and then `Transaction Broadcaster`.
In this tab, select `Import Transaction`, lookup the SD card with the final signed transaction, and click `OK`.
Then click `Broadcast Transaction`, and Wasabi will privately announce it to the Bitcoin network over Tor.

![Wasabi Wallet Transaction Broadcaster](/PSBTBroadcast.png "Wasabi Wallet Transaction Broadcaster")

## Cold-Wasabi protocol

This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after one or more rounds of CoinJoin using Wasabi Wallet.
Because you cannot do CoinJoin with the private keys on the hardware wallet, you will need to generate and load two different wallets in Wasabi.
A 'hot' (CoinJoin) and a 'cold' (Storage) wallet will both be running in parallel, label them accordingly so you don't mix them up.

There are two different ways of following the Cold-Wasabi Protocol, one using the GUI (Graphical User Interface) and one using the [daemon](/using-wasabi/Daemon.md).

At the moment, only the latter allows to CoinJoin directly into a different wallet.

## GUI tutorial

### CoinJoin on the hot Wasabi

:::tip First
You should make your existing coins private.
It is useful to generate a complete new hot wallet for this, so as to keep the CoinJoin transaction history separate from other wallets.
:::

1. [Generate a new hot-Wasabi Wallet](/using-wasabi/WalletGeneration.md).
2. Open the [Receive](/using-wasabi/Receive.md) tab to get a new address.
3. From a pre-existing wallet, send bitcoin into this Hot-Wasabi Wallet.
4. In the [CoinJoin](/using-wasabi/CoinJoin.md) tab, select the relevant coins, enqueue them, and wait for the CoinJoin to be done.

Remix often to gain a high anonymity set.

### Set up your cold-Wasabi

:::tip Second
In order to separate these new private coins, you should generate a fresh wallet on your hardware device.
:::

5. Generate and back up a new set of keys on your hardware wallet.
6. Load your hardware wallet device to Wasabi, either via USB or SD card.
7. Label and generate a receive address for the hardware wallet.
For the first setup, you need to connect the hardware wallet to the computer that runs Wasabi, afterwards, you can generate receive addresses without the device being connected.
8. Copy the receiving address from the cold-Wasabi.

### Send bitcoins from hot to cold Wasabi

:::tip Third
In order to keep the mixed coins separate and without revealing that you own all of them, send the <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> coins without consolidating them.
Wait some time in-between sending them, so that timing analysis becomes more difficult.
:::

9. Go to the hot-Wasabi `Send` tab, and select the coins with high anonymity set.
Do not consolidate your <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> coins, but send them in small, time-staggered batches.
10. Paste the cold-Wasabi address.
11. Click the `MAX` button to send the whole mixed coin without generating change.

### Send bitcoins from cold Wasabi

:::tip Finally
You can at any time spend the bitcoin from the cold-Wasabi.
:::

12. Connect your hardware wallet to the computer.
13. Load the cold Wasabi wallet.
14. Go to the `Send` tab, select the coins and destination, then sign the transaction with the hardware wallet.
Alternatively, go to the `Build Transaction` tab and do the Coldcard SD card workflow.

## Daemon tutorial

### Mix to Another Wallet

Use the [daemon](/using-wasabi/Daemon.md) and run `wassabee mix --wallet:hotWasabi --destination:coldWasabi --keepalive`.

The daemon stops when all coins have reached the target anonymity set, or if you press `CTRL+C` (`CMD+C` on macOS) to stop it.
The target anonymity set is by default `50`, but it can be changed in the `Settings` tab.
After that it starts registering outputs from the CoinJoin to your destination wallet, thus you are slowly and privately coinjoining your money to your cold wallet.

![Wasabi Wallet anonymity set levels](/SettingsAnonLevels.png "Wasabi Wallet anonymity set levels")

:::tip Success!
おめでとうございます!

You are now eating Cold Wasabi!
:::

:::warning
The anonymity set is tied to the wallet that you used to CoinJoin, if you send a mixed coin to another Wasabi Wallet (in this case your hardware wallet), it will have an anonymity set 1 (red) because this wallet doesn't know that the coin was coinjoined.

You should use a meaningful label when you generate a receive address in your hardware wallet, e.g. "Myself 100 anonset" (something that reminds you that you got this utxo from your Wasabi Wallet and it was coinjoined).
:::

---
{
  "title": "Hardware Wallet",
  "description": "A step by step guide on how to CoinJoin and send bitcoin to a hardware wallet for cold storage using Wasabi Wallet only. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Cold-Wasabi Hardware Wallet Mode

[[toc]]

---

## Using hardware wallet step-by-step

1. Start your Wasabi Wallet and go to `Add Wallet`.
2. Click on `Connect to hardware wallet` and then connect the hardware wallet via cable. Alternatively, you can import a Coldcard skeleton file via SD card by using `Import Wallet` at the `Add Wallet` dialog.
3. Confirm that the detected hardware wallet is correct.
4. Click `Open`, and wait for the wallet to load.
5. Now you can [receive](/using-wasabi/Receive.md) bitcoin to addresses controlled by the hardware wallet.
6. You can [spend](/using-wasabi/Send.md) these coins in the `Send` dialog, though the hardware wallet must be connected via USB to sign the transaction.
Alternatively, you can [build a PSBT](/using-wasabi/ColdWasabi.md#connecting-coldcard-via-sd-card), export this via SD card to your Coldcard wallet for signing, then import the final transaction to Wasabi for broadcasting.

:::warning No coinjoin
Unfortunately, as of now, you cannot [coinjoin](/using-wasabi/CoinJoin.md) with just the private keys on your hardware wallet.
The keys need to be on the internet-connected computer to be able to coinjoin.
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

:::tip Use a hardware wallet for cold storage
There are multiple ways to exercise cold storage, however it is highly reccommended to use a hardware wallet.
This is by far the best and most secure way of using bitcoin for almost all users.
:::

## Hardware Wallet with Wasabi

You can use Wasabi Wallet with almost any hardware wallet out there because Wasabi utilizes [Bitcoin Core Hardware Wallet Interface [HWI]](https://github.com/bitcoin-core/hwi).
The setup is thoroughly tested for [Trezor model T](https://trezor.io), [Ledger Nano S, Nano S Plus and Nano X](https://ledger.com), and [Coldcard](https://coldcard.com).

### Connecting via USB

#### Import the wallet

1. Go to `Add wallet`.
2. Click on `Connect to hardware wallet`.
3. Give the wallet a name.
4. Connect the hardware wallet to the PC and enter the pin on the hardware wallet to unlock it.
5. Confirm that the correct hardware wallet is detected.
6. Open the wallet.

:::tip This wallet can be used as a watch-only wallet when the hardware wallet device is not connected.
Wasabi remembers the wallet's information like xpub, wallet fingerprint and addresses etc.
But it never knows the private keys, which are on the hardware wallet.
So, you can see the balance and all it's transactions in Wasabi and you can generate addresses, but you cannot send without the hardware wallet being connected.
Because you need to sign (confirm) the outgoing transactions on the hardware wallet.
:::

#### Receiving bitcoin

After the first time you loaded a new device, the public keys will be stored locally on the computer, and you can use Wasabi to [receive bitcoin](/using-wasabi/Receive.md) to the hardware wallet without having it connected.

:::tip Verify the receive address on the hardware wallet for extra security
It's always a good practice to verify that the receive address on Wasabi corresponds to the one on the hardware wallet, before receiving (large amounts of) bitcoin.
This could prevent malicious firmware which replaces a receive address with a fake one.
You can do this by clicking on `Show on the hardware wallet` at a receive address.
The address will now be displayed on the hardware wallet, check that the addresses correspond and then confirm this on the hardware wallet.
:::

#### Sending bitcoin

Only when you want to [send bitcoin](/using-wasabi/Send.md) you need to connect the device over USB again.

1. Click the `Send` button.
2. Enter the amount and destination address.
3. Enter the label of whom you are sending to.
4. At the `Preview Transaction` screen, check that everything is correct.
5. Click `Send Now`.
6. Connect the hardware wallet & unlock it.
7. Check on the hardware wallet that everything is correct.
8. Confirm on the hardware wallet.
9. The transaction is sent!

The private keys are not on the computer, thus the transaction is signed on the hardware wallet after you confirm with a physical button click.
The final transaction is automatically broadcast over Tor with Wasabi Wallet.

### Connecting Coldcard via SD card

You can use Wasabi Wallet together with Coldcard without ever connecting it via USB, thus further reducing possible attack vectors.
For more details see the [Coldcard documentation](https://coldcard.com/docs/microsd).

#### Import the skeleton wallet

Power your Coldcard on a power bank or electricity socket, then unlock it with your pin.
Put in a MicroSD card and go to `Advanced > MicroSD Card > Export Wallet > Wasabi Wallet`.
This will write the public keys, wallet fingerprint, derivation path and other metadata to a skeleton file `new-wallet.json`.

:::warning Protect your public keys!
This file does not include your private keys, so an attacker cannot use it to spend your bitcoin.
However, he can use it to derive a full transaction history, thus it is a potential privacy leak.
:::

Now insert the SD card to your computer, and open Wasabi Wallet.
Go to the `Add Wallet` dialog, and click `Import a wallet`, browse to the SD card and select the `new-wallet.json` file.
Wasabi will automatically import and modify this skeleton file and store it in your `Wallets` and `WalletBackups` folders.

#### Receiving bitcoin

After the skeleton wallet is imported, you can open the wallet from the wallet list at the `NavBar`, without having to power on the Coldcard.
Generate a [receive address](/using-wasabi/Receive.md) as usual.
The private key corresponding to this address is on the hardware wallet.

#### Sending bitcoin
 
Sending bitcoin airgapped works as follows:

1. Click the `Send` button.
2. Enter the amount and destination address.
3. Enter the label of whom you are sending to.
4. At the `Preview Transaction` screen, check that everything is correct.
5. Click `Save PSBT file`, and save the file on the MicroSD card.
6. Remove the MicroSD card from the computer and put it into your Coldcard.
7. On the Coldcard, click `Ready to Sign`.
8. Verify the transaction details shown on the Coldcard, and approve to sign the transaction.
9. Remove the MicroSD card from Coldcard and insert it into the computer.
10. In Wasabi, click on `Broadcaster` (in the search bar).
11. Select `Import Transaction`.
12. Select the final signed transaction, which looks like this `xxx-final.txn`.
13. Broadcast the transaction.

:::tip Enable PSBT workflow in the settings
If enabled, a Broadcast button will appear next to the `Send` button for an easier workflow.
:::

## Cold-Wasabi protocol

This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after one or more rounds of CoinJoin using Wasabi Wallet.
Because you cannot do CoinJoin with the private keys on the hardware wallet, you will need to generate and load two different wallets in Wasabi.
A 'hot' (CoinJoin) and a 'cold' (Storage) wallet will both be running in parallel, label them accordingly so you don't mix them up.

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
When your coins are private, it is a good practice to send them out in multiple batches in order to not consolidate all your coins.
Wait some time in-between sending them, so that timing analysis becomes more difficult.
:::

9. Go to the hot-Wasabi `Send` dialog and enter the amount.
10. Paste the cold-Wasabi address.

### Send bitcoins from cold Wasabi

:::tip Finally
You can at any time spend the bitcoin from the cold-Wasabi.
:::

11. Connect your hardware wallet to the computer.
12. Load the cold Wasabi wallet.
13. Go to the `Send` dialog, enter the amount and the destination address, then sign the transaction with the hardware wallet.

:::tip Success!
おめでとうございます!

You are now eating Cold Wasabi!
:::

:::warning
The anonymity score is tied to the wallet that you used to coinjoin, if you send a mixed coin to another Wasabi Wallet (in this case your hardware wallet), it will have an anonymity score of 1 (and will be marked as non-private) because this wallet doesn't know that the coin was coinjoined.

You should use a meaningful label when you generate a receive address in your hardware wallet, e.g. "Myself coinjoin private" (something that reminds you that you got this utxo from your Wasabi Wallet and it was coinjoined).
:::
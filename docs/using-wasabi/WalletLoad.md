---
{
  "title": "Wallet Load",
  "description": "A detailed guide about loading multiple wallets in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wallet Load

[[toc]]

## Loading wallet step-by-step

To load a wallet and start the synchonization process, you need to open your wallet by typing in the password.
The first time synchronization of your wallet might take some time depending on the size of its history.

### Wallet list

On the left side of Wasabi Wallet is the `Wallet list`, where you see an alphabetically sorted list of all the previously [generated](/using-wasabi/WalletGeneration.md) wallets.

Click the wallet you want to view, type in the password and press `Open`.

![Type your password to open the wallet](/WalletOpen.png "Type your password to open the wallet")

## Synchronization

### Filter download

As soon as you start Wasabi, it connects to the backend server with a new Tor identity and requests the [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki).
At the first start, this can take a while because all filters need to be downloaded, but for the subsequent starts, this is faster as only the most recent filters are requested.

![Wallet is synchronizing itself with the Bitcoin network](/WalletSynchronizing.png "Wallet is synchronizing itself with the Bitcoin network")

### Filter scanning

When you load a wallet, it checks if the generated addresses within the gap limit hit against a block filter.
Most filters do not hit, and then the wallet is certain that this block does not contain a transaction of yours so it will not download it.
If a transaction of yours is in a block, then the corresponding filter will always be hit, and the wallet will know this is a relevant block for you.
There can be a small chance for a false positive where the filter matches, but the block actually does not contain a transaction.

### Block download

When a block filter hits, either a true match or a false positive, then this block is important for you, so the wallet will download it.
If you have [a Bitcoin full node connected](/using-wasabi/BitcoinFullNode.md), then it will fetch the verified block locally.
If not, then Wasabi will connect to a random Bitcoin P2P node with a new Tor identity, request only this block for download, and then disconnect.
In this step, your Wasabi behaves like any other full node, and cannot be differentiated.

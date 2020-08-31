---
{
  "title": "Wallet Load",
  "description": "A detailed guide about loading multiple wallets in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wallet Load

There are two ways of loading your wallets in Wasabi, and you can load multiple wallets at the same time.
The synchronization of your wallet happens fast and is very private by default.

[[toc]]

---

## Loading wallet step-by-step

### Wallet Explorer

On the right side of Wasabi is the `Wallet Explorer`, where you see an alphabetically sorted list of all the previously [generated](/using-wasabi/WalletGeneration.md) wallets.

![Wasabi Wallet Explorer tab](/WalletExplorerUnloaded.png "Wasabi Wallet Explorer tab")

You can load a wallet simply by double-clicking on it or by right-clicking on it and then choosing `Load Wallet`.
A coin will appear on the wallet icon to indicate the loaded wallets.

![Load Wallet in Wasabi](/WalletExplorerLoaded.png "Load Wallet in Wasabi")

### Wallet Manager

Alternatively, you can double-click a wallet in the `Load Wallet` tab, or select it and click the `load wallet` button.

![Load Wallet in Wasabi](/WalletManagerLoadWallet.png "Load Wallet in Wasabi")

## Synchronization

### Filter download

As soon as you start Wasabi, it connects to the backend server with a new Tor identity and requests the [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki).
At the first start, this can take a couple of minutes because all filters need to be downloaded, but for the subsequent starts, this is faster as only the most recent filters are requested.

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

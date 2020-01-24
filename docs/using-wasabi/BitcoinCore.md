---
{
  "title": "Bitcoin Core",
  "description": "Information and step-by-step guides on how to use your own Bitcoin Core full node together with Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Bitcoin Core

[[toc]]

## The importance of running a full node

When running a Bitcoin full node, you define the precise monetary rules that you voluntarily agree on, nobody else forces this choice upon you.
Thus any sovereign individual who wants to claim financial independence must run a full node.
Once your own rules are firmly established, your software discovers other nodes in the Bitcoin peer-to-peer network which adhere to the exact same set of rules.
These peers send you transactions and blocks which are valid according to their set of rules, and you verify for your self if they are also correct for you.
If one of the proposed transactions breaks your own rules, then you mark it as invalid, disconnect from and ban the node who send you the malicious transaction.

:::tip Claim your monetary sovereignty
With your full node you define, verify and enforce the rules of your sound money Bitcoin.
:::

Only when running your own node do you verify if the money you receive is actually valid bitcoin.
You do not trust on an external third party, and thus you also do not leak any sensitive financial information to them.

There are several software implementations that function as a full node, for example [Bitcoin Core](https://bitcoincore.org/), [Bitcoin Knots](https://http://bitcoinknots.org/), or [LibBitcoin](https://libbitcoin.info/).

## How Wasabi uses your Bitcoin full node

Wasabi currently has a work in progress partial Bitcoin Core integration.
The zkSNACKs coordinating server broadcasts [BIP 158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients) to all Wasabi clients, who locally check if the filter hits for their public keys.

:::warning 
The zkSNACKs server has to be trusted to serve correct filters, until [BIP 157 client side block filtering](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients) is implemented in Bitcoin Core.
:::

If a full node is connected to Wasabi, then the relevant block is fetched from this trusted node, and not from a random P2P node.
Wasabi also queries if your local mempool has unconfirmed transactions that are of interest to you.
Further, your full node is used to estimate the current mining fee level based on the bitcoind `smartfee` algorithm.
Your full node is not used to broadcast your transactions, as this is done through a random peer-to-peer node with a new tor identity, which is better for your [network level privacy](/using-wasabi/NetworkLevelPrivacy.md).

## bitcoind within Wasabi

Since [version 1.1.10](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.10), Wasabi Wallet ships with the [bitcoind binaries](https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi/Microservices/Binaries) of Bitcoin Core.
This means that every Wasabi client has the necessary software to run a Bitcoin full node and define, verify and enforce monetary consensus.
By default, bitcoind is not started together with Wasabi, this must be activated explicitly in the settings, because this is a bandwidth, CPU and storage intensive program.
It is optional to keep bitcoind running even after Wasabi Wallet is shut down, so to verify blocks as soon as they are received.

![](/SettingsBitcoinCore.png)

## Using an already existing local Bitcoin full node

If you have a Bitcoin full node already pre-installed on the same computer you use to run Wasabi Wallet, then since [version 1.1.1](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.1) Wasabi will use your node by default.
You do not need to change anything in the settings, it should work plug and play.
This is especially useful to save on bandwidth, as you have already downloaded and verified a block with your full node, so you don't need to download it again with Wasabi.

## Using an already existing remote Bitcoin full node

















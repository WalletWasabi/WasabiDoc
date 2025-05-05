---
{
  "title": "Bitcoin Full Node",
  "description": "Information and step-by-step guides on how to use your own Bitcoin Core full node together with Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Bitcoin Full Node

[[toc]]

## The importance of running a full node

When running a Bitcoin full node, you define the precise monetary rules that you voluntarily agree on.
Nobody else forces this choice upon you.
Thus any sovereign individual who wants to claim financial independence must run a full node.
Once your own rules are firmly established, your software discovers other nodes in the Bitcoin peer-to-peer network which do not break your rules.
These peers send you transactions and blocks which are valid according to their set of rules, and you verify for yourself if they are also correct for you.
If one of the proposed transactions breaks your own rules, then you mark it as invalid, disconnect from and ban the node who sent you the malicious transaction.

:::tip Claim your monetary sovereignty
With your full node you define, verify, and enforce the rules of your sound money Bitcoin.
:::

Only by running a full node, do you verify by yourself that the money you receive is actually valid bitcoin.
You do not trust an external third party, and thus you also do not leak any sensitive financial information.

There are several software implementations that function as a full node, for example, [Bitcoin Core](https://bitcoincore.org/), [Bitcoin Knots](https://bitcoinknots.org/), or [LibBitcoin](https://libbitcoin.info/).

## How does Wasabi use your Bitcoin full node

If a full node is connected, it will be used for:
- fetching BIP 158 block filters (if available)
- downloading blocks
- fetch fee rate estimations
- broadcast transactions

If any of these are not available or fail, Wasabi will fall back to the default mechanisms.

## Using an already existing local Bitcoin full node

If you have a Bitcoin full node already pre-installed on the same computer you use to run Wasabi Wallet, then Wasabi will use your node by default.
You do not need to change anything in the settings, it should work plug and play.
This is especially useful to save on bandwidth, as you have already downloaded and verified a block with your full node, so you don't need to download it again with Wasabi.

## Using an already existing remote Bitcoin full node

If you have a Bitcoin full node already on a remote computer, then Wasabi Wallet can use this too.
In the Bitcoin settings, specify the local IP address and port or the Tor onion service of your full node.

![Wasabi Wallet remote Bitcoin P2P full node endpoint](/SettingsBitcoinCoreRemote.png "Wasabi Wallet remote Bitcoin P2P full node endpoint")

## Verify that Wasabi is connected to your full node

There are two ways to confirm that your Wasabi client is connected to your own full node.

First, in the Wasabi logs.
Once you receive a transaction Wasabi downloads the block containing that transaction from your node, and in the logs you should see:
`Block {hash} acquired from node '{node}'.`

Second, by checking the connected peers inside your full node.
Wasabi will show up as one of the connected peers while it is downloading a block.
You can check this in the Bitcoin Core / Knots GUI by clicking on `Window -> Peers`.
During the period when Wasabi is fetching a block, it will show up in the `User Agent` column.
Alternatively, you can use the Bitcoin RPC call `bitcoin-cli getpeerinfo` and see the Wasabi client listed.

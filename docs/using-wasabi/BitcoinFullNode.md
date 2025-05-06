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
- fetching fee rate estimations
- broadcasting transactions

If any of these are not available or fail, Wasabi will fall back to the default mechanisms.

## How to connect to your full node

Wasabi can connect to a Bitcoin full node by using the Bitcoin RPC.
Enter the `Bitcoin RPC Endpoint` and `Bitcoin RPC Credential String` of the node.

See step-by-step instructions [here](/FAQ/FAQ-UseWasabi.html#how-do-i-connect-my-own-full-node-to-wasabi).

## Verify that Wasabi is connected to your full node

Wasabi will add `Bitcoin RPC` to the status bar when `Connect to Bitcoin Node RPC` is enabled.
This will show the status and will display a warning triangle when it's not connected.

![Status Icon Bitcoin RPC](/StatusIconBitcoinRPC.png "Status Icon Bitcoin RPC")

Additionally, there will be log messages related to the Bitcoin Node RPC.


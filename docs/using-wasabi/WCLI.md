---
{
  "title": "Wasabi Command Line Interface",
  "description": "A detailed explanation about the Wasabi Command Line Interface. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wasabi Command Line Interface

[[toc]]

## Introduction

The Wasabi Command Line Interface (wcli) is a bash script to easily interact with the Wasabi RPC Server.

> Wasabi CLI is currently only available when building from source!
So it is not available when you use the package.

## Get The Requirements

1. The [same requirements as to build Wasabi from source](/using-wasabi/BuildSource.md#get-the-requirements)
2. `jq` [command line json processor](https://jqlang.github.io/jq/)

Which can easily be installed on Linux with `sudo apt-get install jq`

## Usage

To use the wcli, navigate to the _WalletWasabi/Contrib/CLI_ directory.
In the _CLI_ directory:

```bash
$ ./wcli.sh command
```

For wallet specific calls:

```bash
$ ./wcli.sh -wallet=WalletName command
```

Wallet specific calls that require parameters:
```bash
$ ./wcli.sh -wallet=WalletName command param
```

## Examples

```bash
$ ./wcli.sh getstatus
```

```json
{
  "torStatus": "Running",
  "onionService": "Unavailable",
  "backendStatus": "Connected",
  "bestBlockchainHeight": "2575522",
  "bestBlockchainHash": "000000000000000cfcdaf7c06252990edb65ebda3b0345a2caf07cfaf23e7084",
  "filtersCount": 5101,
  "filtersLeft": 0,
  "network": "TestNet",
  "exchangeRate": 39935.73,
  "peers": [
    {
      "isConnected": true,
      "lastSeen": "2024-01-24T09:07:21.8537127+00:00",
      "endpoint": "[::ffff:185.132.133.143]:18333",
      "userAgent": "/Satoshi:0.21.0/"
    },
    ...
```

```bash
$ ./wcli.sh -wallet=WalletName getwalletinfo
```

```json
{
  "jsonrpc": "2.0",
  "result": {
    "walletName": "WalletName",
    "walletFile": "/home/user/.walletwasabi/client/Wallets/WalletName.json",
    "State": "Started",
    "masterKeyFingerprint": "0b946bac",
    "anonScoreTarget": 5,
    "isWatchOnly": false,
    "isHardwareWallet": false,
    "isAutoCoinjoin": true,
    "isRedCoinIsolation": false,
    "accounts": [
      {
        "name": "segwit",
        "publicKey": "tpubDCpc4bh9QGicUMskHuXhwxdxDJPEs73f3YbTAoU1EqhJmHjKWpRg8gwrurvpmUDywNLbLQTu2aY9US3W4AV8uyrP2np9gTLtyZrtZ5VuHzr",
        "keyPath": "m/84'/0'/0'"
      },
      {
        "name": "taproot",
        "publicKey": "tpubDCqNm3Xmaju7SZk2vfa8kfDC4iNuwSbRNjVfqkCdg4dHu63fyNpHhUNAtcehRnKVrzU7ZgaFqkmHZGVVgFphYL3B3BBNxqVN7NbD33PcXUv",
        "keyPath": "m/86'/0'/0'"
      }
    ],
    "balance": 0,
    "coinjoinStatus": "Idle"
  },
  "id": "1"
}
```

```bash
$ ./wcli.sh -wallet=WalletName getnewaddress label
```

```json
{
  "jsonrpc": "2.0",
  "result": {
    "address": "tb1qdskc4y529ayqkqrddknnhdjqwnqc9wzl8940pn",
    "keyPath": "84'/1'/0'/0/30",
    "label": "label",
    "publicKey": "0263ea6712e56277bcb07b14b61c30bae2267ec10e0bbf7a024d2c6a0634d6e634",
    "scriptPubKey": "00146c2d8a928a2f480b006d6da73bb64074c182b85f"
  },
  "id": "1"
}
```

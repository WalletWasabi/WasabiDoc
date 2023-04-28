---
{
  "title": "Headless Wasabi Daemon",
  "description": "A guide on how to use the light weight headless Wasabi daemon. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Headless Wasabi Daemon

[[toc]]

## Introduction

The default of how to interact with your Wasabi wallet is the graphical user interface (GUI).
There is also a headless daemon where you do not run a resource-intensive GUI, but only the command line interface.
Running the daemon minimizes the usage of resources (CPU, GPU, Memory, Bandwidth) with the goal of making it more suitable for running all the time in the background.

The daemon is part of the Wasabi package and can be launched from the command line.

The desktop app (GUI) is built on top of the daemon.
Meaning that command line arguments/variables can also be used to configure the desktop app.

## Available commands

When entering the commands on the command line, they are capital letter insensitive.

### Config file configurations

All configuration options available via the `Config.json` file are also available as command line arguments:

| Command | Config |
|-------------|--------------|
| --network=testnet | Network: "TestNet" |
| --mainnetbackenduri="https://api.wasabiwallet.io/" | "MainNetBackendUri": "https://api.wasabiwallet.io/" |
| --testnetbackenduri="https://api.wasabiwallet.co/" | "TestNetClearnetBackendUri": "https://api.wasabiwallet.co/" |
| --regtestbackenduri="http://localhost:37127/" | "RegTestBackendUri": "http://localhost:37127/" |
| --usetor=true | UseTor: true |
| --terminatetoronexit:false |"TerminateTorOnExit": false |
| --downloadnewversion=true |"DownloadNewVersion": true |
| --startlocalbitcoincoreonstartup:false |"StartLocalBitcoinCoreOnStartup": false |
| --stoplocalbitcoincoreonshutdown=true |"StopLocalBitcoinCoreOnShutdown": true |
| --localbitcoincoredatadir="/home/UserName/.bitcoin" |"LocalBitcoinCoreDataDir": "/home/UserName/.bitcoin" |
| --mainnetbitcoinp2pendpoint="127.0.0.1:8333" | "MainNetBitcoinP2pEndPoint": "127.0.0.1:8333" |
| --testnetbitcoinp2pendpoint="127.0.0.1:18333" | "TestNetBitcoinP2pEndPoint": "127.0.0.1:18333" |
| --regtestbitcoinp2pendpoint="127.0.0.1:18444" | "RegTestBitcoinP2pEndPoint": "127.0.0.1:18444" |
| --jsonrpcserverenabled=true| JsonRpcServerEnabled: true |
| --jsonrpcuser="" | "JsonRpcUser": "" |
| --jsonrpcpassword="" | "JsonRpcPassword": "" |
| --jsonrpcserverprefixes=["http://127.0.0.1:37128/", "http://localhost:37128/"] | "JsonRpcServerPrefixes": ["http://127.0.0.1:37128/", "http://localhost:37128/"] |
| --dustthreshold=0.00005 | DustThreshold: "0.00005" |
| --enablegpu=true | "EnableGpu": true |
| --coordinatoridentifier="coinjoincoordinatoridentifier" | "CoordinatorIdentifier": "CoinJoinCoordinatorIdentifier" |

### Daemon only configurations

There are a few special switches that are not present in the `Config.json` file and are only available using the command line:

| Command | Config |
|-------------|--------------|
| --blockonly=true | Ignore P2P transactions |
| --loglevel=trace |  The level of detail used during logging |
| --datadir="$HOME/temp/wasabi-1" | The path to the directory used during runtime |
| --wallet=WalletName | Open wallet "WalletName" |

## Examples

Run Wasabi Daemon and connect to the testnet Bitcoin network.

```bash
$ wassabeed --network=testnet
```

Run Wasabi and connect to the testnet Bitcoin network with Tor disabled and accept JSON RPC calls. Store everything in `$HOME/temp/wasabi-1`.

```bash
$ wassabeed --usetor=false --datadir="$HOME/temp/wasabi-1" --network=testnet --jsonrpcserverenabled=true --blockonly=true
```

Run Wasabi and open two wallets: AliceWallet and BobWallet

```bash
$ wassabeed --wallet=AliceWallet --wallet=BobWallet
```

Check the Wasabi Daemon version

```bash
$ wassabeed --version
Wasabi Daemon 2.0.3.0
```

## If building from source code

Open the terminal, navigate to the WalletWasabi.Fluent.Daemon directory (inside the cloned repository) and execute the desired commands.

### Example

```bash
$ dotnet run --network=testnet
```

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
The [RPC interface](/using-wasabi/RPC.md) can be used to interact with the Daemon.

The daemon is included in the package starting from Wasabi version [2.0.4](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v2.0.4) and can be launched using the command line.

The desktop app (GUI) is built on top of the daemon.
Meaning that command line arguments/variables can also be used to configure the desktop app.

## Available commands

When entering the commands on the command line, they are capital letter insensitive.

### Config file configurations

All configuration options available via the `Config.json` file are also available as command line arguments:

| Config File | Command Line | Environment variable |
|---------|--------|----------------------|
| ""Network": "TestNet" | --network=testnet | WASABI-NETWORK=testnet |
| "MainNetBackendUri": "https://api.wasabiwallet.io/" | --mainnetbackenduri="https://api.wasabiwallet.io/" | WASABI-MAINNETBACKENDURI="https://api.wasabiwallet.io/"|
| "TestNetClearnetBackendUri": "https://api.wasabiwallet.co/" | --testnetbackenduri="https://api.wasabiwallet.co/" | WASABI-TESTNETBACKENDURI="https://api.wasabiwallet.co/" |
| "RegTestBackendUri": "http://localhost:37127/" | --regtestbackenduri="http://localhost:37127/" | WASABI-REGTESTBACKENDURI="http://localhost:37127/" |
| ""UseTor": ""true" | --usetor=true | WASABI-USETOR=true |
| "TerminateTorOnExit": ""false" | --terminatetoronexit=false | WASABI-TERMINATETORONEXIT=false |
| "DownloadNewVersion": true | --downloadnewversion=true | WASABI-DOWNLOADNEWVERSION=true |
| "StartLocalBitcoinCoreOnStartup": false | --startlocalbitcoincoreonstartup=false | WASABI-STARTLOCALBITCOINCOREONSTARTUP=false |
| "StopLocalBitcoinCoreOnShutdown": true | --stoplocalbitcoincoreonshutdown=true | WASABI-STOPLOCALBITCOINCOREONSHUTDOWN=true |
| "LocalBitcoinCoreDataDir": "/home/UserName/.bitcoin" | --localbitcoincoredatadir="/home/UserName/.bitcoin" | WASABI-LOCALBITCOINCOREDATADIR="/home/UserName/.bitcoin" |
| "MainNetBitcoinP2pEndPoint": "127.0.0.1:8333" | --mainnetbitcoinp2pendpoint="127.0.0.1:8333" | WASABI-MAINNETBITCOINP2PENDPOINT="127.0.0.1:8333" |
| "TestNetBitcoinP2pEndPoint": "127.0.0.1:18333" | --testnetbitcoinp2pendpoint="127.0.0.1:18333" | WASABI-TESTNETBITCOINP2PENDPOINT="127.0.0.1:18333" |
| "RegTestBitcoinP2pEndPoint": "127.0.0.1:18444" | --regtestbitcoinp2pendpoint="127.0.0.1:18444" | WASABI-REGTESTBITCOINP2PENDPOINT="127.0.0.1:18444" |
| "JsonRpcServerEnabled": "true" | --jsonrpcserverenabled=true | WASABI-JSONRPCSERVERENABLED=true |
| "JsonRpcUser": "" | --jsonrpcuser="" | WASABI-JSONRPCUSER="" |
| "JsonRpcPassword": "" | --jsonrpcpassword="" | WASABI-JSONRPCPASSWORD="" |
| "JsonRpcServerPrefixes":["http://127.0.0.1:37128/", "http://localhost:37128/"] | --jsonrpcserverprefixes=["http://127.0.0.1:37128/", "http://localhost:37128/"] | WASABI-JSONRPCSERVERPREFIXES=["http://127.0.0.1:37128/", "http://localhost:37128/"] |
| "DustThreshold": "0.00005" | --dustthreshold=0.00005 | WASABI-DUSTTHRESHOLD=0.00005 |
| "EnableGpu": true | --enablegpu=true | WASABI-ENABLEGPU=true |
| "CoordinatorIdentifier": "CoinJoinCoordinatorIdentifier" | --coordinatoridentifier="coinjoincoordinatoridentifier" | WASABI-COORDINATORIDENTIFIER="coinjoincoordinatoridentifier" |

### Non-Config file configurations

There are a few special switches that are not present in the `Config.json` file and are only available using the command line:

 Switch | Command Line| Environment variable|
|-------|-------------|---------------------|
| Ignore P2P transactions | --blockonly=true | WASABI-BLOCKONLY=true |
| The level of detail used during logging | --loglevel=trace | WASABI-LOGLEVEL=trace |
| The path to the directory used during runtime | --datadir="$HOME/temp/wasabi-1" | WASABI-DATADIR="$HOME/temp/wasabi-1" |
| Open wallet "WalletName" | --wallet=WalletName | WASABI--WALLET=WalletName |

## How to run

### If the package is installed

Depending on your operating system, open the command line and execute:

#### Linux

```bash
wassabeed --wallet=WalletName --jsonrpcserverenabled=true
```

#### macOS

```bash
cd /Applications/Wasabi\ Wallet.app/Contents/MacOs
./wassabeed --wallet=WalletName --jsonrpcserverenabled=true
```

#### Windows

```bash
cd C:\Program Files\WasabiWallet
wassabeed --wallet=WalletName --jsonrpcserverenabled=true
```

### If building from source code

Open the terminal, navigate to the WalletWasabi.Daemon directory (inside the cloned repository) and execute the desired commands.

```bash
$ dotnet run --wallet=WalletName --jsonrpcserverenabled=true
```

## Examples

Run Wasabi Daemon and connect to the testnet Bitcoin network.

```bash
$ wassabeed --network=testnet
```

Run Wasabi and connect to the testnet Bitcoin network, with Tor disabled, accept JSON RPC calls, ignore P2P transactions, and store everything in `$HOME/temp/wasabi-1` directory.

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
Wasabi Daemon ${currentVersion}
```

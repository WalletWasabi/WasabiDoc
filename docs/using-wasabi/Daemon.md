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

The available startup parameters can be found at the [Starting Wasabi with parameters](/using-wasabi/StartupParameters.md) pillar.

## How to run

### If the package is installed

Depending on your operating system, open the command line and execute:

#### Linux

```bash
wassabeed
```

#### macOS

```bash
cd /Applications/Wasabi\ Wallet.app/Contents/MacOs
./wassabeed
```

#### Windows

```bash
cd C:\Program Files\WasabiWallet
wassabeed
```

### If building from source code

Open the terminal, navigate to the _WalletWasabi.Daemon_ directory (inside the cloned repository) and execute the desired commands.

```bash
$ dotnet run
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

---
{
  "title": "Headless Wasabi Daemon",
  "description": "A guide on how to use the light weight headless Wasabi daemon to mix your coins. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Headless Wasabi Daemon
The default of how to interact with your Wasabi wallet is the graphical user interface.
There is also a headless daemon where you do not run a resource-intensive GUI, but only the command line interface.
This daemon is especially useful for power users mixing bitcoin in the backend of their servers. 

[[toc]]

---

## Available Commands

`wassabee` or `wassabeed` starts Wasabi wallet when the package is installed.

`mix` makes sure Wasabi starts in daemon and not the GUI.

`--wallet:` specifies the name of the hot wallet with the coins you want to CoinJoin.

`--destination:` specifies the destination wallet that the mixed coins will be coinjoined into, after the target anonymity set is reached.
A coin will be coinjoined into the first wallet until anonymity set target is reached, then there will be one additional CoinJoin into the `destination` wallet.

`--keepalive` keeps the daemon running after all coins have reached the anonymity set target, and continue to CoinJoin when new coins are received into the wallet.
This flag is needed if the daemon should mix into the `destination` wallet.

`--help` displays help page and exit.


## Usage

### If the package is installed

Depending on your operation system, open the command line and execute:

#### Linux

```bash
wassabee mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive
```

#### macOS

```bash
cd /Applications/Wasabi\ Wallet.app/Contents/MacOs
./wassabee mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive
```

#### Windows

```bash
cd C:\Program Files\WasabiWallet
wassabeed.exe mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive
```

### If building from source code

Open the terminal, navigate to the `WalletWasabi.Fluent.Desktop` folder inside the cloned repository and execute:

```bash
dotnet run -- mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive
```

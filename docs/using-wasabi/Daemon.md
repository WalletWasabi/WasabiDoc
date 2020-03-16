---
{
  "title": "Headless Wasabi Daemon",
  "description": "A guide on how to use the light weight headless Wasabi daemon to mix your coins. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Headless Wasabi Daemon
The default of how to interact with your Wasabi wallet is the graphical user interface.
There is also a headless daemon where you do not run a resource intensive GUI, but only the command line interface.
This daemon is especially useful for power users mixing bitcoin in the backend of their servers. 

To start the daemon, in the command line type:

```
./wassabee mix --wallet:MyWalletName --mixall --keepalive
```

To mix to another wallet use the following command:

```
./wassabee mix --wallet:MyWallet1 --destination:MyWallet2
```

`./wassabee` command starts Wasabi wallet.
`mix` makes sure it starts in daemon and not the GUI.
`--wallet:` specifies which of your hot wallets you want to mix.
`--destination:` specifies the name of the destination wallet file that you want to mix to.
`--mixall` will mix each coin in the wallet at least once and until the anonymity set target is reached.
`--keepalive` will keep the daemon running after all coins are mixed, and continue mixing as soon as new coins are send to the wallet.
`--help` shows the manpage.

To use Wasabi's command line tools on Windows you have to use `wassabeed.exe` that is inside your `Program Files\WasabiWallet` folder.
So the command should be:

```
wassabeed mix --wallet:MyWalletName --keepalive
```

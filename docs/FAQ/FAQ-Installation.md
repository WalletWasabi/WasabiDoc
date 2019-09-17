---
{
  "title": "Installation FAQ",
  "description": "Frequently asked questions about how to propperly install Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Installation of Wasabi

## Installing the Package

:::details
### Where can I download Wasabi?

It's always best to download software directly from the official source acknowledged by the developers.
You can find the recent version of the compiled packages for Linux, Windows and Mac available on the official [wasabiwallet.io](https://wasabiwallet.io).
In order to preserve your network level privacy from the very first step on, please consider visiting the tor hidden service [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).
The old versions of the software can be found in the [releases](https://github.com/zksnacks/walletwasabi/releases) of the GitHub repository, [here](https://github.com/zksnacks/walletwasabi) you also find the libre & open source code for when you want to [build it yourself](https://docs.wasabiwallet.io/using-wasabi/BuildSource.html).
Please take special care to verify the PGP signatures of zkSNACKs' PGP key [6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) over the software packages and code commits.
:::

::::details
### Why is it important to verify PGP signatures?

:::danger
**Don't trust ~ verify.**
:::
These are not just empty words.
Self sovereignty is at the core of Bitcoin in general, and Wasabi specifically.
You have powerful tools at your disposal, yet they only work when used as they are designed.
Wasabi is tailor made so that you do **not** have to trust anyone, but you have the power to verify everything.

With PGP signatures you can verify that the software package you download is actually the one by the developers.
Every release of Wasabi is signed by [zkSNACKs](https://zksnacks.com/), the company behind Wasabi.
You can verify that the PGP key [6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) is actually the one of [zkSNACKs](https://pgp.key-server.io/search/zksnacks) by exploring the [web of trust](https://en.wikipedia.org/wiki/Web_of_trust).
When you have a software package that was signed by this key, then you can be sure that this is an official release approved by zkSNACKs.
This protects you against malicious man in the middle attacks where bad guys give you a fake version of Wasabi with malicious code.

@[youtubePlaylist](PLPj3KCksGbSZkVpgAZjAFfFp4D0SHLnFw,psl35MisYxo)
::::

:::details
### How can I verify PGP signatures?

On the [WasabiWallet.io](https://wasabiwallet.io) website you can download the packages of the latest release.
Make sure that in addition you also download the separate signature `.asc` file.
In the terminal, change the directory to the one with the downloaded files, and verify the signature with `gpg --verify Wasabi-1.1.9.deb.asc`.
Everything is valid if it returns `Good signature from zkSNACKs` and that it was signed with the `Primary key fingerprint: 6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E`.

For an in depth guide for [Debian and Ubuntu](/using-wasabi/InstallPackage.html#debian-and-ubuntu), [other Linux](/using-wasabi/InstallPackage.html#other-linux), [Windows](/using-wasabi/InstallPackage.html#windows), and [OSX](/using-wasabi/InstallPackage.html#osx) see the main documentation.

@[youtube](mTrClVA_o5A)
:::

:::details
### How do I install Wasabi on Debian and Ubuntu?

[Download](/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.deb` package and the `.deb.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [tor hidden service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![](/DownloadDeb.png)

Verify the signature of the package with `gpg --verify Wasabi-X.X.X.deb` and ensure the software was signed by zkSNACKs' PGP key [6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
Now install Wasabi with `sudo dpkg -i Wasabi-1.1.9.deb.asc`, and run it with `wassabee`.
Checkout the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.html#debian-and-ubuntu).

@[youtube](mTrClVA_o5A,122)
:::

:::details
### How do I install Wasabi on other Linux?

[Download](/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.tar.gz` package and the `.tar.gz.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [tor hidden service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![](/DownloadTar.png)

Verify the signature of the package with `gpg --verify Wasabi-X.X.X.tar.gz.asc` and ensure the software was signed by zkSNACKs' PGP key [6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
Now install Wasabi with `sudo tar -pxzf Wasabi-X.X.X.tar.gz`, and run it with `./wassabee`.
Checkout the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.html#other-linux).
:::

:::details
### How do I install Wasabi on Windows?

[Download](/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.msi` package and the `.msi.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [tor hidden service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![](/DownloadWindows.png)

Verify the signature of the package with with `right click on the signature file > More GpgEX options > Verify` and ensure the software was signed by zkSNACKs' PGP key [6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
Now install Wasabi with double clicking the `.msi` file.
Checkout the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.html#windows).
:::

:::details
### How do I install Wasabi on OSX?

[Download](/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.dmg` package and the `.dmg.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [tor hidden service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![](/DownloadMac.png)

Verify the signature of the package with with `sudo gpg2 --verify Wasabi-X.X.X.dmg.asc` and ensure the software was signed by zkSNACKs' PGP key [6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
Now install Wasabi with double clicking the `.dmg` file.
Checkout the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.html#mac).

@[youtube](_Zmc54XYzBA)
:::

:::details
### How do I check the current version of Wasabi?

In the GUI go to the top left menu `Help > About`, here you see the current version of your Wasabi.
You can also verify in the command line by executing `wassabee --version`.
Wasabi is cutting edge software, so it is well advised to stay up-to-date.
:::

:::details
### How do I know about a new version of Wasabi?

When a new version has been released, you'll see a notification in the bottom left status bar `New Version Available`.
The [website](https://wasabiwallet.io) always links to the most recent build of the software.
It will also be announced on [Twitter](https://twitter.com/wasabiwallet), [Reddit](https://old.reddit.com/r/WasabiWallet/), and [Telegram](https://t.me/WasabiWallet).
:::

:::details
### How do I securely upgrade Wasabi?

You can download the software build for the different operating systems on the main [website](https://wasabiwallet.io) or better over [Tor](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).
Make sure you also download the signatures of the build and verify them for [zkSNACKs' public key](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
For step by step instructions, follow [this guide](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/Guides/InstallInstructions.md) or [see this video](https://youtu.be/DUc9A76rwX4).
:::

:::details
### Do I need to install Tor separately?

All Wasabi network traffic goes via Tor by default - no need to set up Tor yourself.
If you do already have Tor, and it is running, then Wasabi will try to use that first.

You can turn off Tor in the Settings.
Note that in this case you are still private, except when you CoinJoin and when you broadcast a transaction.
In the first case, the coordinator would know the links between your inputs and outputs based on your IP address.
In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.
:::

:::details
### Can I install Wasabi on TAILS?

Yes, just follow the [How do I install Wasabi on other Linux?](/FAQ-Installation.html#how-do-i-install-wasabi-on-other-linux) guide and remember to save/backup the wallet on the Persistence.
:::

## Advanced Installation

:::details
### How do I compile Wasabi from source?

A new version of Wasabi is released when ready, roughly once every #twoweeks.
Yet in the meantime there are many commits to the latest master branch, not just bug fixes, but also new features and stability improvements.
If you cannot wait until the next release, and you want to experience the most cutting-edge version of Wasabi, then you can [build the source code](/using-wasabi/BuildSourc.md).

The only two required tools are [Git](https://git-scm.com/downloads) and [.NET Core 2.2 SDK](https://www.microsoft.com/net/download) for "Building Apps".
You can download every line in the code by `git clone https://github.com/zkSNACKs/WalletWasabi.git`, this will create a new directory called `WalletWasabi`.
In order to build the Wallet software, change directory to `cd WalletWasabi/WalletWasabi.Gui`.
Wasabi is written in C# with the .NET framework, and it is very easy to compile it from source, with only one command `dotnet build`, this will only take a minute or two.
To start Wasabi simply execute `dotnet run` from the `WalletWasabi.Gui` folder.
You can update the master branch with `git pull`.
:::

:::details
### How can I verify the deterministic build?

Wasabi has [reproducible and deterministic builds](/using-wasabi/DeterministicBuild.html), which means that you can verify that the compiled packages are from the [source code](https://github.com/zksnacks/walletwasabi).

On Windows, you can verify this with `git diff --no-index win7-x64 "C:\Program Files\WasabiWallet"`.

On Debian and Ubuntu do
<br />
`git diff --no-index linux-x64/ /usr/local/bin/wasabiwallet/`.

On other Linux do
<br />
`git diff --no-index linux-x64/ WasabiLinux-1.1.9`.

And on Mac first unzip with
<br />
`7z x Wasabi-1.1.7.dmg -oWasabiOsx`.
<br />
and verify with
<br />
`git diff --no-index osx-x64/ WasabiOsx/Wasabi\ Wallet.App/Contents/MacOS/`.
:::

## Further Questions

:::details
### How can I install Wasabi headless daemon without GUI?

To use Wasabi's command line tools on Windows you have to use `wassabeed.exe` that is inside your `Program Files\WasabiWallet`.
On Linux and OSX you can use the same software that you use for launching the GUI (`wassabee`).
Let us start giving a glance to the command `help`:
`$ wassabee run help`

One can run it with the same command: `wassabee mix --wallet WalletName`.
Optionally you can add a `--keepalive` flag that will make sure your daemon will run forever and mixes forever.
On Linux and OSX you can just add some parameters to the Wasabi executable and it'll act like a daemon, on Windows you have to use `wassabeed.exe` from Program Files.
You may want to start with `--help`.
:::

- How do I install the Wasabi backend server?

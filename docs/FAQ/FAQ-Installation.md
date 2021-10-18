---
{
  "title": "Installation FAQ",
  "description": "Frequently asked questions about how to properly install Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Installation of Wasabi

## Installing the Package

:::details
### Where can I download Wasabi?

You can find the recent version of the compiled packages for Linux, Windows and Mac available on the official [wasabiwallet.io](https://wasabiwallet.io).
It's always best to download software directly from the official source acknowledged by the developers.
In order to preserve your network level privacy from the very first step on, please consider visiting the Tor onion service [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).
The old versions of the software can be found in the [releases](https://github.com/zksnacks/walletwasabi/releases) of the GitHub repository, [here](https://github.com/zksnacks/walletwasabi) you also find the libre & open source code for when you want to [build it yourself](/using-wasabi/BuildSource.md).
Please take special care to verify the PGP signatures of zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) over the software packages and code commits.
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
You can verify that the PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) is actually the one of [zkSNACKs](https://pgp.key-server.io/search/zksnacks) by exploring the [web of trust](https://en.wikipedia.org/wiki/Web_of_trust).
When you have a software package that was signed by this PGP public key, then you can be sure that this is an official release approved by zkSNACKs.
This protects you against malicious man in the middle attacks where bad guys give you a fake version of Wasabi with malicious code.

@[youtubePlaylist](PLPj3KCksGbSZkVpgAZjAFfFp4D0SHLnFw,psl35MisYxo)
::::

:::details
### How can I verify PGP signatures?

On the [WasabiWallet.io](https://wasabiwallet.io) website you can download the packages of the latest release.
Ensure that you also download the separate signature `.asc` file.
In the terminal, change the directory to the one with the downloaded files, and verify the signature with `gpg --verify Wasabi-${currentVersion}.deb.asc`.
Everything is valid if it returns `Good signature from zkSNACKs` and that it was signed with the `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`.

For an in-depth guide for [Debian and Ubuntu](/using-wasabi/InstallPackage.md#debian-and-ubuntu), [other Linux](/using-wasabi/InstallPackage.md#other-linux), [Windows](/using-wasabi/InstallPackage.md#windows), and [macOS](/using-wasabi/InstallPackage.md#macOS) see the main documentation.

@[youtube](mTrClVA_o5A)
:::

:::details
### How do I install Wasabi on Debian and Ubuntu?

[Download](/FAQ/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.deb` package and the `.deb.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [Tor onion service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![Download Wasabi Wallet for Debian](/DownloadDeb.png "Download Wasabi Wallet for Debian")

Verify the signature of the package with `gpg --verify Wasabi-${currentVersion}.deb` and ensure the software was signed by zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).

Now install Wasabi with `sudo dpkg -i Wasabi-${currentVersion}.deb`, and run it with `wassabee`.
Check out the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.md#debian-and-ubuntu).

@[youtube](mTrClVA_o5A,122)
:::

:::details
### How do I install Wasabi on other Linux?

[Download](/FAQ/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.tar.gz` package and the `.tar.gz.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [Tor onion service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![Download Wasabi Wallet for Linux](/DownloadTar.png "Download Wasabi Wallet for Linux")

Verify the signature of the package with `gpg --verify Wasabi-${currentVersion}.tar.gz.asc` and ensure the software was signed by zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
Now install Wasabi with `sudo tar -pxzf Wasabi-${currentVersion}.tar.gz`, and run it with `./wassabee`.
Check out the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.md#other-linux).
:::

:::details
### How do I install Wasabi on Windows?

[Download](/FAQ/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.msi` package and the `.msi.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [Tor onion service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![Download Wasabi Wallet for Windows](/DownloadWindows.png "Download Wasabi Wallet for Windows")

The Wasabi package is signed and automatically verified on Windows upon installation.

![Wasabi Wallet Windows signature verification](/InstallWindowsSignature.png "Wasabi Wallet Windows signature verification")

Optionally, you can still verify the PGP signature of the package by `right-clicking on the signature file > More GpgEX options > Verify` and ensure the software was signed by zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
Now install Wasabi by double-clicking the `.msi` file.
Check out the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.md#windows).
:::

:::details
### How do I install Wasabi on macOS?

[Download](/FAQ-Installation.md#where-can-i-download-wasabi) the most recent `.dmg` package and the `.dmg.asc` signature file from the [wasabiwallet.io](https://wasabiwallet.io) or the [Tor onion service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).

![Download Wasabi Wallet for macOS](/DownloadMac.png "Download Wasabi Wallet for macOS")

The Wasabi package is signed and automatically verified on macOS upon installation.

Optionally, you can still verify the PGP signature of the package with `sudo gpg2 --verify Wasabi-${currentVersion}.dmg.asc` and ensure that the software has been signed by zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
Now install Wasabi by double-clicking the `.dmg` file.
Check out the main documentation for a [step-by-step guide](/using-wasabi/InstallPackage.md#mac).

@[youtube](_Zmc54XYzBA)
:::

:::details
### How do I check the current version of Wasabi?

In the GUI, go to the top left menu `Help > About`, here you will be able to see the current version of your Wasabi.
You can also verify the version using the command line by executing `wassabee --version` or `wassabeed --version` if you are on Windows.
Wasabi is cutting edge software, so it is well-advised to stay up-to-date.
:::

:::details
### How do I know about a new version of Wasabi?

When a new major version [v1.1.X] has been released, you'll see a notification in the bottom left status bar `New Version Available`.
There are occasional silent releases like [v1.1.10.X] which fix issues that were introduced in a major release, and these are not announced in the GUI.
The [website](https://wasabiwallet.io) always links to the most recent build of the software.
It will also be announced on [Twitter](https://twitter.com/wasabiwallet) and [Reddit](https://reddit.com/r/WasabiWallet/).
:::

:::details
### How do I securely upgrade Wasabi?

You can download the software build for the different operating systems on the main [website](https://wasabiwallet.io) or better over [Tor](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).
Make sure you also download the signatures of the build and verify them with [zkSNACKs' PGP public key](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
For step-by-step instructions, follow [this guide](/using-wasabi/InstallPackage.md) or [see this video](https://youtu.be/DUc9A76rwX4).
:::

:::details
### Do I need to install Tor separately?

No, because Wasabi has Tor built into the software.
All Wasabi network traffic goes via Tor by default - no need to set up Tor yourself.
If you do already have Tor, and it is running, then Wasabi will try to use that first.

You can turn off Tor in the Settings.
Be careful, as this will compromise your privacy.
When you CoinJoin over clearnet, the coordinator would know the links between your inputs and outputs based on your IP address.
When you broadcast a transaction over clearnet, the connected full node will know the link between your transaction and your IP address.
:::

:::details
### Can I install Wasabi on TAILS?

Yes, it is possible to install Wasabi on Tails, but it is not [officially supported](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/WasabiCompatibility.md#officially-supported-operating-systems).
:::

:::details
### What are the differences between the Debian/Ubuntu version and the "Other Linux" version?

`Debian/Ubuntu` version contains `.deb` package.
`Other Linux` version contains `.tar.gz` package.

The advantages of the .deb format is solely packaging related.
It installs Wasabi in your computer, so you're able to access it from start menu, remove it through apt, and so on.

The "Other Linux" option is just a generic install method not targeted to Debian/Ubuntu specifically but that works on it anyway because it is still linux.

There's no difference in the code, the same binaries are being delivered in different formats.
:::

## Advanced Installation

:::details
### How do I compile Wasabi from source?

If you cannot wait until the next release, and you want to experience the most cutting-edge version of Wasabi, then you can [build the source code](/using-wasabi/BuildSource.md).

The only two required tools are [Git](https://git-scm.com/downloads) and [.NET ${dotnetVersion} SDK](https://dotnet.microsoft.com/download) for "Build apps".
You can download every line of the Wasabi code by `git clone https://github.com/zkSNACKs/WalletWasabi.git`, this will create a new directory called `WalletWasabi`.
In order to build and run the Wallet software, change directory to `cd WalletWasabi/WalletWasabi.Fluent.Desktop`.
Wasabi is written in C# with the .NET framework, and it is very easy to run it.
Simply execute `dotnet run` from the `WalletWasabi.Fluent.Desktop` folder.
You can update the master branch with `git pull`.
:::

:::details
### How can I verify the deterministic build?

The guide for the deterministic builds can be found in the [WalletWasabi repository](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/Guides/DeterministicBuildGuide.md).
:::

::::details
### My antivirus marks Wasabi Wallet as a virus. Am I downloading the right software?

After you have downloaded Wasabi from the [official website](https://wasabiwallet.io/) or from the [official GitHub repository](https://github.com/zkSNACKs/WalletWasabi/releases), make sure you have [verified the PGP signatures](/FAQ/FAQ-Installation.md#how-can-i-verify-pgp-signatures).

If you have downloaded and verified digital signatures and your antivirus continues to report Wasabi as positive, you don't have to worry about anything; it is a false positive.

If you are still not sure, before starting Wasabi, you can check that it is safe by uploading and scan it via [VirusTotal](https://www.virustotal.com/).

:::tip
Remember to report Wasabi as a safe software/false positive to your antivirus.
In doing so you will help users who use the same antivirus.
:::
::::

:::details
### Why is the executable called wassabee?

The most obvious thing would be to call the executable `Wasabi Wallet.exe` on Windows and `Wasabi Wallet` on Linux and Mac.

However launching Wasabi Wallet from certain terminals/command lines is problematic, so we should remove the spacing: `WasabiWallet`, and the case sensitivity differences between the operating systems can also cause issues, so that must go too: `wasabiwallet`.

But it's too long, it needs a faster way to launch: `wasabi`.

However this is too generic, it'll certainly cause conflicts, we need to make it unique: `wassabee`.

Also, this sounds awesome and is a [fun inside joke](https://www.youtube.com/watch?v=dLzFKx6ONZQ).
:::

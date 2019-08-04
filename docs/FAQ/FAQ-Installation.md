# Installation of Wasabi

[[toc]]

---

### Where can I download Wasabi?
It's always best to download software directly from the official source acknowledged by the developers.
You can find the recent version of the compiled packages for Linux, Windows and Mac available on the official [wasabiwallet.io](https://wasabiwallet.io).
In order to preserve your network level privacy from the very first step on, please consider visiting the tor hidden service [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).
The old versions of the software can be found in the [releases](https://github.com/zksnacks/walletwasabi/releases) of the GitHub repository, [here](https://github.com/zksnacks/walletwasabi) You also find the libre & open source code for when You want to [build it Yourself](https://docs.wasabiwallet.io/using-wasabi/BuildSource.html).
Please take special care to verify the PGP signatures of Àdàm's PGP key [21D7 CA45 565D BCCE BE45 115D B4B7 2266 C47E 075E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) over the software packages and code commits.

### Why is it important to verify PGP signatures?
::: danger
don't trust ~ verify
:::

These are not just empty words.
Self sovereignty is at the core of Bitcoin in general, and Wasabi specifically.
You have powerful tools at Your disposal, yet they only work when used as they are designed.
Wasabi is tailor made so that You do **not** have to trust anyone, but You have the power to verify everything.

With PGP signatures You can verify that the software package You download is actually the one by the developers.
Every release of Wasabi is signed by [Ádám Ficsor aka nopara73](https://github.com/nopara73), the lead developer and maintainer of the repository, as well as the co-founder and CTO of [zkSnacks Ltd](https://zksnacks.com/).
You can verify that the PGP key [21D7 CA45 565D BCCE BE45 115D B4B7 2266 C47E 075E](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) is actually the one of Ádám by exploring the [web of trust](https://en.wikipedia.org/wiki/Web_of_trust).
When you have a software package that was signed by this key, then you can be sure that this is an official release approved by Adam.
This protects you against malicious man in the middle attacks where bad guys give you a fake version of Wasabi with malicious code.

### How can I verify PGP signatures?
On the [WasabiWallet.io](https://wasabiwallet.io) website You can download the packages of the latest release.
Make sure that in addition you also download the separate signature `.asc` file.
In the terminal, change the directory to the one with the downloaded files, and verify the signature with `gpg --verify Wasabi-1.1.6.deb.asc`.
Everything is valid if it returns `Good signature from nopara73 aka Ficsór Ádám` and that it was signed with the `Primary key fingerprint: 21D7 CA45 565D BCCE BE45 115D B4B7 2266 C47E 075E`.

For an in depth guide for [Debian and Ubuntu](/using-wasabi/InstallPackage.html#debian-and-ubuntu), [other Linux](/using-wasabi/InstallPackage.html#other-linux), [Windows](/using-wasabi/InstallPackage.html#windows), and [OSX](/using-wasabi/InstallPackage.html#osx) see the main documentation.

### How do I securely upgrade Wasabi?
You can download the software build for the different operating systems on the main [website](https://wasabiwallet.io) or better over [Tor](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion).
Make sure you also download the signatures of the build and verify them for [Adam Ficsor's public key](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).
For step by step instructions, follow [this guide](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/Guides/InstallInstructions.md) or [see this video](https://youtu.be/DUc9A76rwX4).

### Do I need to install Tor separately?
All Wasabi network traffic goes via Tor by default - no need to set up Tor yourself.
If you do already have Tor, and it is running, then Wasabi will try to use that first.

You can turn off Tor in the Settings.
Note that in this case you are still private, except when you CoinJoin and when you broadcast a transaction.
In the first case, the coordinator would know the links between your inputs and outputs based on your IP address.
In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.

---

#### Further Questions

- Why is it important to verify PGP signatures?
- How do I install Wasabi on Linux?
- How do I install Wasabi on Microsoft?
- How do I install Wasabi on iOS?
- How do I check the current version of Wasabi?
- How do I know about a new version of Wasabi?
- How do I compile Wasabi from source?
- How can I install Wasabi headless daemon without GUI?
- How do I check the deterministic builds?
- How do I install the Wasabi backend server?


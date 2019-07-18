# Installation of Wasabi
- Where can I download Wasabi?
- Why is it important to verify PGP signatures?
- How do I install Wasabi on Linux?
- How do I install Wasabi on Microsoft?
- How do I install Wasabi on iOS?
- How do I check the current version of Wasabi?
- How do I know about a new version of Wasabi?
- [How do I securely upgrade Wasabi?](/FAQ/FAQ-Installation.md#how-do-i-securely-upgrade-wasabi)
- How do I compile Wasabi from source?
- How can I install Wasabi headless daemon without GUI?
- How do I check the deterministic builds?
- How do I install the Wasabi backend server?
- [Do I need to install Tor separately?](/FAQ/FAQ-Installation.md#do-i-need-to-install-tor-separately)

### How do I securely upgrade Wasabi?
You can download the software build for the different operating systems on the main [website](https://wasabiwallet.io) or better over [Tor](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion). Make sure you also download the signatures of the build and verify them for [Adam Ficsor's public key.](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) For step by step instructions, follow [this guide](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/Guides/InstallInstructions.md) or [see this video](https://youtu.be/DUc9A76rwX4).

### Do I need to install Tor separately?
All Wasabi network traffic goes via Tor by default - no need to set up Tor yourself. If you do already have Tor, and it is running, then Wasabi will try to use that first.  
You can turn off Tor in the Settings. Note that in this case you are still private, except when you coinjoin and when you broadcast a transaction. In the first case, the coordinator would know the links between your inputs and outputs based on your IP address. In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.

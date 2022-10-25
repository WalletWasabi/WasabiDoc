---
{
  "title": "Install-package",
  "description": "A step by step guide on how to securely download, verify and install the software packages of Wasabi for Linux, Windows and Mac. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---


# Install Package

[[toc]]

---

This page contains all the information you will need to safely install the Wasabi Wallet. 
It also provides information for developers on how they can [compile from the source code,](#build-from-source) to use the latest features or fixes that have not yet been released.
Note that the latter section is meant only for experienced users, who know what they are doing, and must be used with extreme caution.
For everyone else, the *Install Wasabi Wallet* section is sufficient.

## Install Wasabi Wallet
Wasabi Wallet is a desktop wallet for MacOS, Windows, and certain Linux distros.
It cannot be installed on Tails or Whonix as neither OS expose the Tor control port, which Wasabi 2.0 relies on.
Follow the steps below to safely install Wasabi Wallet.

1. Download the installer relevant to your operating system (and processor, in case of MacOS) from the [official Wasabi Wallet website.](wasabiwallet.io/#download)
For improved privacy, we recommended that you use the [Tor browser](https://www.torproject.org/) and download the installer from [Wasabi's official Tor-website.](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/)
2. **Optional, but highly recommended**: Verify the signature. 
Note that this isn't a necessary step. 
You can safely skip it if you have received the installer directly from a trusted source. 
However, if you are downloading the installer from the official website, we highly recommend that you verify the PGP signature of the installer to ensure its authenticity and integrity. 
One does well to adopt the "distrust the infrastructure" philosophy; for details, see the [Why verify signature?](#why-verify-signature) section.

    The directions below require GPGTools to be installed on your computer. [Install GPGTools](#install-gpgtools) and come back to this section:
    1. From the [official Wasabi Wallet website](wasabiwallet.io/#download), download the signature of the installer. 
    To do so, go to the downloads section of the website, and click on **signature** located on the installer relevant to your OS.
    2. Import zkSNACKs' public key. 
        1. Open GPGTools (search for "gpg keychain" using spotlight or the menu icon).
        2. Go to [zkSNACKs' Github repository,](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt), and copy the raw contents.
        3. The act of copying, when GPGTools is open, will cause GPGTools to propmt you to decide whether or not to import the key. Accept the request.
    3. Verify signature of the installer.
        The easiest way to do this is to ensure that signature file (.asc file) and the installer file are located in the same folder.
        Then double-click the signature file and GPG Tools (which must be installed) will show the verification result.

        You should see something like this:
        ![Good signature](/gpgtools-verification.png "Good signature")
        
        If the signing key matches `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then you can be assured that the software is authentic and wasn't tampered with since it was signed by the original developers, and proceed to the next step.
        If you don't see the above message, kindly contact Wasabi Support.
        
        You can safely ignore "WARNING: This key is not certified with a trusted signature!". 
        This is because you haven't validated that the key does in fact belong to the trusted party.
3. Install Wasabi.
The easiest method is to use the GUI: simply double-click the downloaded installer (**.deb** on Debian, **.dmg** on MacOS, and **.msi** on Windows), and follow the directions in the installation wizard.

    Alternatively, you can use the CLI (command-line interface) to install the wallet:
    ```
    dpkg -i Wasabi-${currentVersion}.deb
    ```
    **Debian**
    ```
    sudo dpkg -i /home/John/Downloads/Wasabi-2.0.1.4.deb
    ```
    **MacOS**
    ```
    sudo dpkg -i /Users/John/Downloads/Wasabi-2.0.1.4.dmg
    ```
    **Windows**
    ```
    dpkg -i /Users/John/Downloads/Wasabi-2.0.1.4.msi
    ```
    **Other Linux distros**
    ```
    tar -pxzf Wasabi-${currentVersion}.tar.gz
    ./wassabee
    ```
:::success Congratulations!
    Wasabi Wallet should be installed on your computer. You can proceed now to setting up your wallet.
    :::

## Install GPGTools
GPGTools makes it a breeze to import, verify, and sign digital signatures.
Follow the steps below to safely install GPGTools.

1. [Download GPGTools.](https://gpgtools.org/)
2. **Optional**: Verify the signature. 
    This isn't a necessary step; however, we highly recommend that you verify the signature of the GPGTool software to ensure its authenticity and integrity; for more information, see section [Why verify signature?](#why-verify-signature)
    1. Open Terminal app (easiest use Spotlight or Menu button to search for it).
    2. Paste `shasum -a 256` , press spacebar to add a space, and then drag and drop the GPG Suite file into the terminal. 
        You should see the path of the folder appear; it will look something like this: 
        ```
        shasum -a 256 /Users/john/Desktop/gpg/GPG_Suite-2022.1.dmg
        ```
        Hit enter to run the command.
    2. Compare the generated hash with the one provided on the website.
        If they have match, then the SHA 256 checksum is authentic, and you can go ahead and install the software. 
        If they don't match, kindly reach out to GPGTools Support team. 
        ![SHA256 checksum](/gpg-sha.png "Verify SHA256 checksum")
3. Install GPG. Simply double-click on the installer and follow the directions in the GUI.

## Why verify signature?
A digital signature (or fingerprint) is an output of an hash function. 
It is similar to a hand-written signature or fingerprint but with the advantage of being impossible to forge, for it uses cryptography.
Digital signatures can prove the two important properties of information security to a reasonable degree of certainty: i) authenticity, i.e., the file was indeed created by the person who signed it, and not forged by a third-party,  and ii) integrity, i.e., the contents of the file have not been tampered with before it reached you. 
If verifcation fails, i.e., the signature does not match the public key of the trusted party (because it wasn't created using their private key), then the file is not safe to use.

What digital signatures cannot prove is that the signed file is in itself not malicious. 
In fact, there is nothing that you can do to stop someone from signing a malicious program (something that happens often). 
You are going to have to decide for yourself who you will trust (e.g., zkSNACKs, Linus Torvalds, Microsoft). 
In other words, digital signatures cannot help you with the decision of whether or not to trust a given party. 
That's a social, political, and critical-reasoning problem.
Once you've decided whom to trust, digital signatures can help you limit that trust to only those you have chosen to trust and not worry about all the potential dangers that lie en route between you and your trusted party (e.g., server compromises, dishonest IT staff at the hosting company, dishonest staff at the ISPs, Wi-Fi attacks, etc.). 
One does well to remember and put into practice the Bitcoin ethos “Don’t trust, verify.” 
 
You can find zkSNACKs' fingerprint (the company behind Wasabi Wallet) near the bottom of the [official Wasabi Wallet website](wasabiwallet.io/#download). `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`.  
![Download signature](/signature-website.png "Download signature")
It's a good idea to check the fingerprint on various websites (e.g., mailing lists, discussion forums, social media, personal websites).
You could text, email, call, video chat, mail, or meet up with people you know to confirm the fingerprint.
Once you’re certain you've obtained the genuine fingerprint, keep it in a safe place. 
Every time you need to check whether a key claiming to be from zkSNACKs is authentic, compare that key’s fingerprint to your trusted copy and confirm they match.
If you have personally [verified](https://gpgtools.tenderapp.com/kb/how-to/trusting-keys-and-why-this-signature-is-not-to-be-trusted#how-to-sign-a-verified-key) zkSNACKs' PGP public key, and you are familiar with the [Web Of Trust](https://www.gnupg.org/gph/en/manual/x334.html), please consider [signing the key.](https://gpgtools.tenderapp.com/kb/how-to/trusting-keys-and-why-this-signature-is-not-to-be-trusted#how-to-sign-a-verified-key)


## Build from source
Compiling Wasabi wallet from the source code is meant only for experienced users, who know what they are doing. The latest features are not thoroughly reviewed and may contain critical bugs that could even lead to loss of funds.

1. Install the prerequisites: [Git](https://git-scm.com/downloads)
and, for "Build apps," [.NET ${dotnetVersion} SDK.](https://dotnet.microsoft.com/download)
    
	:::tip Optional for privacy
	You can disable .NET's telemetry, which is sending some usage information to Microsoft, by typing:
    
	`export DOTNET_CLI_TELEMETRY_OPTOUT=1` on Linux and macOS.
    
	`setx DOTNET_CLI_TELEMETRY_OPTOUT 1` to disable it permanently on Windows.
	:::
2. Clone Wasabi repository.

    ```sh
    git clone https://github.com/zkSNACKs/WalletWasabi.git
    
    cd WalletWasabi/WalletWasabi.Fluent.Desktop
    ```
3. Build and run the Wasabi client application from the `WalletWasabi.Fluent.Desktop` folder.
    ```sh
    dotnet run
    ```
4. Update Wasabi.
    ```sh
    git pull
    ```
5. **Optional**: Check out a developer branch.

    :::warning Experimental
    Use this option for testing specific branches that are currently being worked on.
    
    Developer branches are not thoroughly reviewed by other contributors and may contain critical bugs that could even lead to loss of funds.
    So only compile these branches if you know what you are doing, and run them at your own risk only on [testnet](/using-wasabi/Testnet.md).
    :::

    Add the developer to your remote, fetch his work, and check out the branch & pull the latest commits; for example:
    ```sh
    git remote add nopara73 https://github.com/nopara73/WalletWasabi
    git fetch nopara73
    git checkout branchname
    git pull
    ```
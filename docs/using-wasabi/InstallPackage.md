---
{
  "title": "Install Wasabi",
  "description": "A step by step guide on how to securely download, verify and install the software packages of Wasabi for Linux, Windows and Mac. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Install Wasabi

[[toc]]

---
This page contains all the information you will need to safely install the Wasabi Wallet. 
It also provides information for developers on how they can [build from the source code,](#build-from-source) to use the latest features or fixes that have not yet been released.
Note that the latter section is only meant for experienced users, who know what they are doing, and must be used with extreme caution. For everyone else, the *Install Wasabi Wallet* section is more than sufficient.

## Install Wasabi Wallet
1. Download the installer relevant to your operating system (and processor, in case of MacOS) from the [official Wasabi Wallet website.](wasabiwallet.io/#download)
For improved privacy, we recommended that you use the [Tor browser](https://www.torproject.org/) and download the installer from the [official clearnet-website.](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/)
2. **Optional, but highly recommended**: Verify the signature. 
Note that this isn't a necessary step, but we highly recommend that you verify the PGP signature of the installer to ensure its authenticity and integrity; for details, see the [Why verify signature?](#why-verify-signature) section.

    To proceed, GPG must be installed on your computer. 
    GPG comes preinstalled on Linux; but you will have to manually install it for MacOS and Windows. 
    For details on installing GPG, see section [Install GPG.](#install-gpg)

    If you have GPG installed, then follow the steps below:
    1. From the [official Wasabi Wallet website](wasabiwallet.io/#download), download the signature of the installer. 
    To do so, go to the downloads section of the website, and click on **signature** located on the installer relevant to your OS.
    2. Download zkSNACKs' public key. To do so, go to [zkSNACKs' Github repository,](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) copy the raw contents, paste it in a text editor, and save the file as, say, “pgp.txt”.
    Note that the key must be saved as a .txt file. 
    So, don't forget to add ".txt" to the name when saving the file.
    3. Import the public key to your keyring. To do so, use the command `gpg --import` depending on your OS, add a space, drag and drop the .txt file into the terminal window, and hit Enter.
        ```
        gpg --import /path/to/public-key.txt
        ```
        
        **Debian**
        ```
        gpg --import /home/John/Downloads/pgp.txt
        ```
        **MacOS**
        ```
        sudo gpg --import /Users/John/Downloads/pgp.txt
        ```
        **Windows**
        ```
        sudo gpg --import /Users/John/Downloads/pgp.txt???
        ```
    4. Verify signature of the installer. An easy way to do this is to type the command `gpg --verify`, add a space, drag and drop the signature file into the terminal window, add another space, drag and drop the installer file into the terminal window, and hit Enter.
        
        ```
        gpg --verify /path/to/signature /path/to/file
        ```

        **Debian**
        ```
        gpg --verify '/home/John/Downloads/signature.asc' '/Users/John/Downloads/wasabi-installer.deb'
        ```
        **MacOS**
        ```
        sudo gpg --verify '/Users/John/Downloads/signature.asc' '/Users/John/Downloads/wasabi-installer.dmg'
        ```
        **Windows**
        ```
        gpg --verify '/Users/John/Downloads/signature.asc' '/Users/John/Downloads/wasabi-installer.msi'?
        ```
        You should see something like this:
        ![Good signature](/good-sig-wasabi.png "Good signature")
        
        If the message returned says "Good signature from zkSNACKs" and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software is authentic and wasn't tampered with since it was signed by the original developers.
        If you don't see the above message, kindly contact Wasabi Support.
        
        You can safely ignore "WARNING: This key is not certified with a trusted signature!". 
        This is because you haven't validated that the key does in fact belong to the trusted party.
3. Install Wasabi.
You can install the wallet in a couple of ways: use the GUI (graphical user interface), arguably the simpler method, or use the CLI (command-line interface). 
If you want to use the GUI, simply double-click the downloaded installer (**.deb** on Debian, **.dmg** on MacOS, and **.msi** on Windows), and follow the directions in the installation wizard.

    If you want to use the CLI, execute command in your terminal depending on your OS
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
    dpkg -i /Users/John/Downloads/Wasabi-2.0.1.4.msi??
    ```
    **Other Linux distros**
    ```
    tar -pxzf Wasabi-${currentVersion}.tar.gz
    ./wassabee
    ```
:::success Congratulations!
	You should have the Wasabi Wallet installed on your computer. See [Setup Wallet](#link?) page for details on how to setup your wallet.
	:::

## Install GPG
1. Download the installer and the signature from the [GPGTools website.](https://gpgtools.org/)
![Download GPGTools](/download-gpg.png "Download GPGTools")
2. **Optional**: Verify the signature. 
    This isn't a necessary step; however, we highly recommend that you verify the signature of the GPG installer to ensure its authenticity and integrity; for more information, see the [Why verify signature?](#why-verify-signature) section below.
    1. Open terminal, and type the following command `shasum -a 256` , add a space, and then drag and drop the installer (not the .sig file) into the terminal. 
        You should see the path of the folder appear; it will look something like this: 
        ```
        shasum -a 256 /Users/john/Desktop/gpg/GPG_Suite-2022.1.dmg
        ```
        Hit enter to run the command.
    2. Compare the generated hash with the one provided on the website.
        If they have match, then the SHA 256 checksum is authentic, and it is safe to install the software. 
        If they don't match, kindly reach out to GPGTools Support team. 
        ![SHA256 checksum](/gpg-shasum.png "Verify SHA256 checksum")
3. Install GPG. 
    There are a couple different ways to install te software. 
    You can install the software a couple of different ways.
    If you want to use the GUI, simply double-click on the installer and follow the directions in the GUI. 
    If you want to use the CLI (command line interface), open terminal and run the commands relveant to you OS.
    
    **Debian**
    ```
    apt-get install gnupg
    ```
    **MacOS**
        
    First install Homebrew, a package management system that makes thousands of software packages available for install on your Mac.

    ```
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
    Turn of Homebrew analytics for more security.
    ```
    brew analytics off
    ```
    Install GPG.
    ```
    brew install gnupg
    ```
4. **Optional**: To be doubly sure of the authenticity and integrity of the file, you can verify signature of the installer using the public key.
    1.  Download the GPGTools public key. To do so, go to [GPGTools Public Key page,](https://gpgtools.org/GPGTools-00D026C4.asc) copy the raw contents, paste it in a text editor, and save the file as, say, “gpg-public.txt”.
    Note that the key must be saved as a .txt file. 
    So, don't forget to add ".txt" to the name when saving the file.
    2. Import the public key to your keyring. To do so, use the command `gpg --import` depending on your OS, add a space, drag and drop the .txt file into the terminal window, and hit Enter.
        **Debian**
        ```
        gpg --import /home/John/Downloads/pgp.txt
        ```
        **MacOS**
        ```
        sudo gpg --import /Users/John/Downloads/pgp.txt
        ```
        **Windows**
        ```
        sudo gpg --import /Users/John/Downloads/pgp.txt???
        ```
    3. Verify the signature. An easy way to do this is to type the command `gpg --verify`, add a space, drag and drop the signature file into the terminal window, add another space, drag and drop the installer file into the terminal window, and hit Enter.
        ```
        gpg --verify /path/to/signature /path/to/file
        ```
        **Debian**
        ```
        gpg --verify '/home/John/Downloads/gpg-signature.asc' '/Users/John/Downloads/gpg-installer.deb'
        ```
        **MacOS**
        ```
        sudo gpg --verify '/Users/John/Downloads/gpg-signature.asc' '/Users/John/Downloads/gpg-installer.dmg'
        ```
        **Windows**
        ```
        gpg --verify '/Users/John/Downloads/gpg-signature.asc' '/Users/John/Downloads/gpg-installer.msi'?
        ```
        You should see something like this: ![Good GPGTools signature](/gpg-good-sig.png "Good GPGTools signature")

        If the message returned says "Good signature from GPGTools Team" and it was signed with Primary key fingerprint: `85E3 8F69 046B 44C1 EC9F  B07B 76D7 8F05 00D0 26C4`, then the software is authentic and wasn't tampered with since it was signed by the original developers.
        You can verify the key fingerprint on the GPGTools website, at the bottom of the page.
        ![GPGTools public key](/gpg-imprint.png "GPGTools public key")
        You can safely ignore "WARNING: This key is not certified with a trusted signature!". This is because you haven't validated that the key does in fact belong to the trusted party.

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
One does well to adopt the "distrust the infrastructure" philosophy.
 
You can find zkSNACKs' fingerprint (the company behind Wasabi Wallet) near the bottom of the [official Wasabi Wallet website](wasabiwallet.io/#download). `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`.  
![Download signature](/signature-website.png "Download signature")
It's a good idea to check the fingerprint on various websites (e.g., mailing lists, discussion forums, social media, personal websites).
You could text, email, call, video chat, mail, or meet up with people you know to confirm the fingerprint.
Once you’re certain you've obtained the genuine fingerprint, keep it in a safe place. 
Every time you need to check whether a key claiming to be from zkSNACKs is authentic, compare that key’s fingerprint to your trusted copy and confirm they match.

Note that the Windows and MacOS version of the Wasabi installer has automatic signature verification.
You will see this window that verifies the installer was signed by zkSNACKs.
![Wasabi Wallet Windows signature verification](/InstallWindowsSignature.png "Wasabi Wallet Windows signature verification")

However, to be on the safe side, we still highly recommended that you manually verify the signature of the downloaded installer using zkSNACKs' PGP public key.
One does well to remember and put into practice the Bitcoin ethos “Don’t trust, verify.” 
If you have personally verified zkSNACKs' PGP public key and you are familiar with the [Web Of Trust](https://www.gnupg.org/gph/en/manual/x334.html), please consider also signing it.


## Build from source
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
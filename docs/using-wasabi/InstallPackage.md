---
{
  "title": "Install-package",
  "description": "A step by step guide on how to securely download, verify and install the software packages of Wasabi for Linux, Windows and Mac. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Install package

[[toc]]

---
This page provides all the information you will need to install the Wasabi Wallet.


### 1. Download installer
From the [official Wasabi Wallet website](wasabiwallet.io/#download), download the Wasabi installer relevant to your operating system (and processor, in case of MacOS).
For improved privacy, we recommended that you use the [Tor browser](https://www.torproject.org/), and download the installer from the [official Tor onion service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/)

### 2. Verify signature
This isn't a necessary step, but we highly recommend that you verify the PGP signature of the installer to ensure its authenticity and integrity; for more information, see the [Why verify signature?](#why-verify-signature) section.

To proceed with verifying the signature, [GPG](#gpg) must be installed on your computer. 
GPG comes preinstalled on Linux; but you will have to manually install it for MacOS and Windows. 
For details on installing GPG, see section [Install GPG.](#install-gpg)

To verify the signature of the Wasabi installer, follow the steps below:
1. From the [official Wasabi Wallet website](wasabiwallet.io/#download), download the signature of the installer. 
To do so, go to the downloads section of the website, and click on **signature** located on the installer relevant to your OS.
2. Download zkSNACKs' public key. To do so, go to [zkSNACKs' Github repository,](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) copy the raw contents, paste it in a text editor, and save the file as, say, “pgp.txt”.
Note that the key must be saved as a .txt file. 
So, don't forget to add ".txt" to the name when saving the file.
3. Import the public key to your keyring. To do so, use the command `gpg --import` depending on your OS, add a space, drag and drop the .txt file into the terminal window, and hit Enter.
    
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
    
    **Debian**
    ```
    gpg --verify /path/to/signature /path/to/file
    ```
    
    e.g.
    ```
    gpg --verify '/home/John/Downloads/signature.asc' '/Users/John/Downloads/wasabi-installer.deb'
    ```
    **MacOS**
    ```
    sudo gpg --verify /path/to/signature /path/to/file
    ```
    e.g.
    ```
    sudo gpg --verify '/Users/John/Downloads/signature.asc' '/Users/John/Downloads/wasabi-installer.dmg'
    ```
    **Windows**
    ```
    gpg --verify /path/to/signature /path/to/file?
    ```
    e.g.
    ```
    gpg --verify '/Users/John/Downloads/signature.asc' '/Users/John/Downloads/wasabi-installer.msi'
    ```
    You should see something like this:
    ![Good signature](/good-sig-wasabi.png "Good signature")
    If the message returned says `Good signature from zkSNACKs` and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software is authentic and wasn't tampered with since it was signed by the original developers.
    You can ignore the `WARNING: This key is not certified with a trusted signature!`. This is because you haven't validated that the key does in fact belong to the trusted party.
### 3. Install Wasabi
There are a couple of ways to install the wallet: using the GUI (graphical user interface) or using the CLI (command-line interface). 
Arguably the simpler method is to use the GUI: double-click the downloaded installer (**.deb** on Debian, **.dmg** on MacOS, and **.msi** on Windows), and follow the directions in the installation wizard.
Alternatively, you can use the following command in your terminal depending on your OS.

**Debian**
```
sudo dpkg -i Wasabi-${currentVersion}.deb
```
e.g.
```
sudo dpkg -i /home/John/Downloads/Wasabi-2.0.1.4.deb
```

**MacOS**
```
sudo dpkg -i Wasabi-${currentVersion}.dmg
```
e.g.
```
sudo dpkg -i /Users/John/Downloads/Wasabi-2.0.1.4.dmg
```

**Windows**
```
dpkg -i Wasabi-${currentVersion}.msi???
```
e.g.
```
dpkg -i /Users/John/Downloads/Wasabi-2.0.1.4.msi???
```

**Other Linux distros**
Extract the archive while keeping the file permissions:
```
tar -pxzf Wasabi-${currentVersion}.tar.gz
./wassabee
```

## Build from source
You can compile the source code in order to get the most recent commits by the developers.
This enables you to try out features or fixes that are not yet released.
This can be the main repository master branch for those changes that should be in the next release, or developer branches for cutting edge features.
Be aware that these branches might be unstable and can include bugs that lead to a loss of funds, so use with caution and on [testnet](/using-wasabi/Testnet.md).

### 1. Get the prerequisites
1. Install [Git](https://git-scm.com/downloads)
2. Install [.NET ${dotnetVersion} SDK](https://dotnet.microsoft.com/download) for "Build apps"

	:::tip Optional for privacy
	You can disable .NET's telemetry, which is sending some usage information to Microsoft, by typing:

	`export DOTNET_CLI_TELEMETRY_OPTOUT=1` on Linux and macOS.

	`setx DOTNET_CLI_TELEMETRY_OPTOUT 1` to disable it permanently on Windows.
	:::

### 2. Get Wasabi
Clone Wasabi repository:

```sh
git clone https://github.com/zkSNACKs/WalletWasabi.git
cd WalletWasabi/WalletWasabi.Fluent.Desktop
```

### 3. Run Wasabi
Build and run the Wasabi client application from the `WalletWasabi.Fluent.Desktop` folder:

```sh
dotnet run
```

### 4. Update Wasabi
```sh
git pull
```

### 5. Check out a developer branch
:::warning Experimental
This step is optional, it can be used for testing specific branches that are currently being worked on.

These developer branches are not thoroughly reviewed by other contributors, and there might be critical bugs in the software that can even cause loss of funds.
So only compile these branches if you know what you are doing, and run them at your own risk only on [testnet](/using-wasabi/Testnet.md).
:::

Add the developer to your remote, fetch his work, and check out the branch & pull the latest commits:

```sh
git remote add nopara73 https://github.com/nopara73/WalletWasabi
git fetch nopara73
git checkout branchname
git pull
```

## Install GPG
For more information on the software GPG, see section [GPG](#gpg).
The steps to install GPG are as follows:
1. Download the installer and the signature from the [GPGTools website.](https://gpgtools.org/)
![Download GPGTools](/gpg-download.png "Download GPGTools")
2. **Optional**: Verify the signature. 
    This isn't a necessary step; however, we highly recommend that you verify the signature of the GPG installer to ensure its authenticity and integrity; for more information, see the [Why verify signature?](#why-verify-signature) section below.
    i. Open terminal, and type the following command `shasum -a 256` , add a space, and then drag and drop the installer (not the .sig file) into the terminal. You should see the path of the folder appear; it will look something like this: 
    ```
    shasum -a 256 /Users/john/Desktop/gpg/GPG_Suite-2022.1.dmg
    ```
    Hit enter to run the command.
    ii. Compare the generated hash with the one provided on the website. If they have match, then the SHA 256 checksum is authentic, and it is safe to install the software. If they don't match, kindly reach out to GPGTools Support team.
    ![SHA256 checksum](/gpg-shasum.png "Verify SHA256 checksum")
3. Install GPG. 
    There are a couple different ways to install te software. 
    You can double-click on the installer and follow the directions in the GUI. 
    Alternatively and arguably the easier method of installation is to use the CLI.
    To do so, open terminal, and run the commands relveant to you OS.
    
    **Debian**
    ```
    apt-get install gnupg
    ```
    **MacOS**
    First install Homebrew, a package management system that makes thousands of software packages available for install on your Mac.
    ```
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
    Turn of Homebrew analytics for better privacy:
    ```
    brew analytics off
    ```
    Install GPG:
    ```
    brew install gnupg
    ```
4. **Optional**: To be doubly sure of the authenticity and integrity of the file, you can verify signature of the installer using the public key. 

    i.  Download the GPGTools public key. To do so, go to [GPGTools Public Key page,](https://gpgtools.org/GPGTools-00D026C4.asc) copy the raw contents, paste it in a text editor, and save the file as, say, “gpg-public.txt”.
    Note that the key must be saved as a .txt file. 
    So, don't forget to add ".txt" to the name when saving the file.

    ii. Import the public key to your keyring. To do so, use the command `gpg --import` depending on your OS, add a space, drag and drop the .txt file into the terminal window, and hit Enter.
        
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
    iii. Verify the signature. An easy way to do this is to type the command `gpg --verify`, add a space, drag and drop the signature file into the terminal window, add another space, drag and drop the installer file into the terminal window, and hit Enter.
    
    **Debian**
    ```
    gpg --verify /path/to/signature /path/to/file
    ```
    
    e.g.
    ```
    gpg --verify '/home/John/Downloads/gpg-signature.asc' '/Users/John/Downloads/gpg-installer.deb'
    ```
    **MacOS**
    ```
    sudo gpg --verify /path/to/signature /path/to/file
    ```
    e.g.
    ```
    sudo gpg --verify '/Users/John/Downloads/gpg-signature.asc' '/Users/John/Downloads/gpg-installer.dmg'
    ```
    **Windows**
    ```
    gpg --verify /path/to/signature /path/to/file?
    ```
    e.g.
    ```
    gpg --verify '/Users/John/Downloads/gpg-signature.asc' '/Users/John/Downloads/gpg-installer.msi'
    ```
    You should see something like this:
    ![Good GPGTools signature](/gpg-good-sig.png "Good GPGTools signature")
    
    If the message returned says `Good signature from GPGTools Team` and that it was signed with `Primary key fingerprint: 85E3 8F69 046B 44C1 EC9F  B07B 76D7 8F05 00D0 26C4`, then the software is authentic and wasn't tampered with since it was signed by the original developers.
    You can find the key fingerprint on the GPGTools website, at the bottom of the page.
    ![GPGTools public key](/gpg-imprint.png "GPGTools public key")
    You can ignore the `WARNING: This key is not certified with a trusted signature!`. This is because you haven't validated that the key does in fact belong to the trusted party.

## GPG
GNU Privacy Guard (GPG, or also known as GnuPG) is a software for encrypting files that contain sensitive information. 
It uses [public-key cryptography](#public-key-cryptography) to allow its users to communicate securely. 
It is a free and open source version of PGP (Pretty Good Privacy) encryption software. 
Conceptually, both GPG and PGP use the same approach to encryption and decryption; however, they differ in implementation.
For details on installing GPG, see section [Install GPG.](#install-gpg)

## Public-key cryptography
Public-key cryptography (also known as asymmetric cryptography) is a type of cryptography that uses a key pair (a pair of keys) to encrypt and decrypt data, unlike symmetric cryptography that uses a single key to both encrypt and decrypt data.
It's a clever way to get around the need to shiftily meet in parks, like spies, to exchange the secret key so data can be decrypted.
In PKC one of the keys is made public or given to whomever the user wants to communicate with, and the other key is kept private.
It's impossible to find the private key using the public key.

PKC has two main uses cases: i) encryption ii) verification.
Encryption: Because you can make your public key publicly available, like say on the internet, those who want to send you a private message need only to sign the message with your public key and send the encrypted message to you via an unsecure channel.
And since only you have the private key, only you can decrypt the encrypted private message.
PKC ensures that only the intended reader receives the message.

Verification: You can also sign a message using your private key. 
In this case, you don't care who reads the message; you just want to assure your readers that it was you who sent the message.
Now anyone can decrypt the meassage using your public key, which is publicly available, and be assured, if the signatures match, that it was indeed you who signed the message and that the message wasn't tampered with along the way.
In other words, as mentioned above, PKC helps verify the authenticity and integrity of the message.
PKC validates the true author of the message.

## Why verify the digital signature?
A digital signature (or fingerprint) is similar to a hand-written signature or fingerprint but with the advantage of being impossible to forge, for it uses cryptography.
Digital signatures can prove the two important properties of information security to a reasonable degree of certainty: authenticity and integrity.
When you verify the digital signature of a downloaded file, you are verifying these two properties of the file: 
i) authenticity, i.e., the file was indeed created by the person who signed it, and not forged by a third-party. 
ii) integrity, i.e., the contents of the file have not been tampered with before it reached you. 
If verifcation fails, i.e., the signature doesn't match the public key of the trusted party, for indeed it wasn't created using their private key, then the file is not safe to use.

What digital signatures cannot prove is that the signed file is itself not malicious. 
In fact, there is nothing that you can do to stop someone from signing a malicious program (something that happens often). 
You are going to have to decide for yourself who you will trust (e.g., zkSNACKs, Linus Torvalds, Microsoft). 
In other words, digital signatures cannot help you with the decision of whether or not to trust a given party. 
That's a social, political, and critical-reasoning problem.
Once you've decided whom to trust, digital signatures can help you limit that trust to only those you have chosen to trust and not worry about all the potential dangers that lie en route between you and your trusted party (e.g., server compromises, dishonest IT staff at the hosting company, dishonest staff at the ISPs, Wi-Fi attacks, etc.). 
One does well to adopt the "distrust the infrastructure" philosophy.

The first step to verifying digital signatures is to ensure that the public keys of the trusted party are indeed original. 
Anyone can generate a cryptographic key and claim to be part of Wasabi Wallet, but obviously only the keys that we (the real Wasabi Wallet developers) generate are the genuine ones. 
The most common route to verifying that the public key does in fact belong to the trusted part is to rely on the key’s fingerprint. 
Every PGP key has a fingerprint that uniquely identifies it from other PGP keys. 
By simply comparing the fingerprints, you can confirm the authenticity and integrity of the file.
You can find zkSNACKs' fingerprint (the company behind Wasabi Wallet) near the bottom of the [official Wasabi Wallet website](wasabiwallet.io/#download): `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`.  
![Download signature](/signature-website.png "Download signature")
But how do you know that this is the real fingerprint? After all, this website could be compromised, so the fingerprint you see here may not be genuine. That’s why we strongly suggest obtaining the fingerprint from multiple independent sources through several different ways.
You could check the fingerprint on various websites (e.g., mailing lists, discussion forums, social media, personal websites).
You could text, email, call, video chat, mail, or meet up with people you know to confirm the fingerprint.
You could even repeat the above steps from different computers and devices, over various VPNs and proxy server, and even on different networks (work, school, internet cafes, etc.).

Once you’ve obtained the fingerprint from enough independent sources in enough different ways for you to feel convinced that you do have the genuine fingerprint, keep it in a safe place. 
Every time you need to check whether a key claiming to be from zkSNACKs is authentic, compare that key’s fingerprint to your trusted copy and confirm they match.

Note that the Windows and MacOS version of the Wasabi installer has automatic signature verification.
You will see this window that verifies the installer was signed by zkSNACKs.
![Wasabi Wallet Windows signature verification](/InstallWindowsSignature.png "Wasabi Wallet Windows signature verification")

However, to be on the safe side, we still highly recommended that you manually verify the signature of the downloaded installer using zkSNACKs' PGP public key.
One does well to remember and put into practice the Bitcoin ethos: “Don’t trust, verify.” 
If you have personally verified zkSNACKs' PGP public key and you are familiar with the [Web Of Trust](https://www.gnupg.org/gph/en/manual/x334.html), please consider also signing it.


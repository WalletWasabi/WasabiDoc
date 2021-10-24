---
{
  "title": "Install-package",
  "description": "A step by step guide on how to securely download, verify and install the software packages of Wasabi for Linux, Windows and Mac. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Install package

[[toc]]

---

The easiest way to start with Wasabi is to download, verify and install the released package.
This is a version of the software that is thoroughly reviewed by the contributors.
The package has the binary code that is needed to run the Wasabi Wallet client including the graphical user interface.
For compiling the open-source code with cutting edge development features, also including the backend server, see this [tutorial here](/using-wasabi/BuildSource.md).

Download the packages either from the official [WasabiWallet.io](https://wasabiwallet.io/) clearnet website or for your privacy's sake, from the official Tor onion service [http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/).

![Operating systems supported by Wasabi Wallet](/DownloadAll.png "Operating systems supported by Wasabi Wallet")

Although there is automatic signature verification on Windows and macOS, it is still recommended to manually **VERIFY PGP SIGNATURES** of the downloaded package with zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) before installing Wasabi.
This protects you against malicious phishing sites giving you back-doored wallet software.
If you have personally verified zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) and you are familiar with the [Web Of Trust](https://security.stackexchange.com/questions/147447/gpg-why-is-my-trusted-key-not-certified-with-a-trusted-signature), please consider also [signing it](https://www.gnupg.org/gph/en/manual/x334.html).

:::tip Always
Don't trust - Verify!
:::

## Install Wasabi step-by-step

1. Download the Wasabi package relevant to your operating system from [wasabiwallet.io](https://wasabiwallet.io).
2. Verify the PGP signatures of the download.
3. Install Wasabi package as you would do any other software on your operating system.

---

## Windows

1. [Download](https://wasabiwallet.io/#download) the `.msi` installer of the latest Wasabi release.

![Download Wasabi Wallet for Windows](/DownloadWindows.png "Download Wasabi Wallet for Windows")

2. Install Wasabi by double-clicking the `.msi` and following the GUI instructions.

3. Make sure that you see this window that verifies the installer was signed by zkSNACKs Limited.
Manual PGP verification is optional, as the package is signed and verified automatically on Windows.

![Wasabi Wallet Windows signature verification](/InstallWindowsSignature.png "Wasabi Wallet Windows signature verification")

Wasabi will be installed to your `C:\Program Files\WasabiWallet\` folder.
You will also have an icon in your Start Menu and on your Desktop. 
After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created. 
Among others, here is where your wallet files and your logs reside.

@[youtube](tkaaC8yET1o)

@[youtube](D8U53PFEsVk)

## Debian and Ubuntu

If you have already imported zkSNACKs' PGP public key, then jump to step 2.

1. Download zkSNACKs' PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt), and then import it with `gpg --import PGP.txt`.

	Verify that the fingerprint is `${zksnacksPublicKeyFingerprint}` by running this command `gpg --list-keys zKSNACKs`.

2. [Download](https://wasabiwallet.io/#download) the latest Wasabi release, both the `.deb` package and the corresponding `.asc` signature file.

![Download Wasabi Wallet for Debian](/DownloadDeb.png "Download Wasabi Wallet for Debian")

3. Verify the signature in the Download repository with `gpg --verify Wasabi-${currentVersion}.deb.asc Wasabi-${currentVersion}.deb`.
If the message returned says `Good signature from zkSNACKs` and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software was not tampered with since the developer signed it.

	:::tip
	The output from the verify command may contain `WARNING: This key is not certified with a trusted signature!`.
	You can ignore this, but if you want to fully verify your download, you need to ask people you trust to confirm that the key fingerprint belongs to zkSNACKs.
	:::

4. [GUI] Install by double-clicking and follow the GUI Instruction. </br>
   [CLI] In the Download repository, run the command `sudo dpkg -i Wasabi-${currentVersion}.deb`.

After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created.
Among others, here is where your wallet files and your logs reside.

@[youtube](DUc9A76rwX4)

## Other Linux

If you have already imported zkSNACKs' PGP public key, then jump to step 2.

1. Download zkSNACKs' PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt), and then import it with `gpg --import PGP.txt`.

	Verify that the fingerprint is `${zksnacksPublicKeyFingerprint}` by running this command `gpg --list-keys zKSNACKs`.

2. [Download](https://wasabiwallet.io/#download) the latest Wasabi release, both the `.tar.gz` archive and the corresponding `.asc` signature file.

![Download Wasabi Wallet for Linux](/DownloadTar.png "Download Wasabi Wallet for Linux")

3. In the Download folder, run `gpg --verify Wasabi-${currentVersion}.tar.gz.asc Wasabi-${currentVersion}.tar.gz`.

	If the message returned says `Good signature from zkSNACKs` and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software was not tampered with since the developer signed it.

	:::tip
	The output from the verify command may contain `WARNING: This key is not certified with a trusted signature!`.
	You can ignore this, but if you want to fully verify your download, you need to ask people you trust to confirm that the key fingerprint belongs to zkSNACKs.
	:::

4. Extract the archive while keeping the file permissions: `tar -pxzf Wasabi-${currentVersion}.tar.gz`.

5. Run Wasabi by executing `./wassabee`.

After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created.
Among others, here is where your wallet files and your logs reside.

(Note that this video was created on macOS, but the steps are the same for Linux)

@[youtube](qFbv_b-bju4)

@[youtube](zPKpC9cRcZo)

## macOS

1. [Download](https://wasabiwallet.io/#download) the `.dmg` package of Wasabi ${currentVersion}.

![Download Wasabi Wallet for macOS](/DownloadMac.png "Download Wasabi Wallet for macOS")

2. Double-click `.dmg` to open it.

3. Install Wasabi by dragging it into your `Applications` folder.

4. At first startup, there will be a pop-up that Wasabi was downloaded from the internet.
Click on `Open` and restart Wasabi.

![Wasabi Wallet macOS signature verification](/InstallMacConfirm.png "Wasabi Wallet macOS signature verification")

::::details
### Optional PGP Verification

If you have already imported zkSNACKs' PGP public key, then jump to step 4.

1. [Get GnuPG](https://www.gnupg.org/download/index.html).

2. Copy [zkSNACKs' PGP public key](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) into a new `TextEdit` document and saving it as `zkSNACKsPubKey.txt`.
Before saving, you need to go to `Format / Make Plain Text` (otherwise TextEdit will not be able to save it as a .txt file).

3. Open Terminal and go to the folder in which you saved the `zkSNACKsPubKey.txt` file and import the PGP public key with `sudo gpg --import zkSNACKsPubKey.txt`.
This should return the output: `key 856348328949861E: public key "zkSNACKs <zksnacks@gmail.com>" imported`.

4. [Download](https://wasabiwallet.io/#download) the latest Wasabi release, both the `.dmg` package and the corresponding `.asc` signature file.

	![](/DownloadMac.png)

5. In the Download folder, run `sudo gpg --verify Wasabi-${currentVersion}.dmg.asc Wasabi-${currentVersion}.dmg`.
If the message returned says `Good signature from zkSNACKs` and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software was not tampered with since the developer signed it.

	:::tip
	The output from the verify command may contain `WARNING: This key is not certified with a trusted signature!`.
	You can ignore this, but if you want to fully verify your download, you need to ask people you trust to confirm that the key fingerprint belongs to zkSNACKs.
	:::
::::


After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created.
Among others, here is where your wallet files and your logs reside.

@[youtube](_Zmc54XYzBA)

@[youtube](UZ9z5COXaG0)

---
{
  "title": "Install package",
  "description": "A step by step guide on how to securely download, verify and install the software packages of Wasabi for Linux, Windows and Mac. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Install package

[[toc]]

---

The easiest way to start with Wasabi is to download, verify and install the released package.
Don't trust - Verify!
This is a version of the software that is thoroughly reviewed by the contributors and it should be stable.
The package has the binary code that is needed to run the Wasabi Wallet client including the graphical user interface.
For compiling the open source code with cutting edge development features, also including the backend server, see this [tutorial here](/using-wasabi/BuildSource.md).


Download the packages either from the official [WasabiWallet.io](https://wasabiwallet.io/) clearnet website, or for your privacy's sake, from the official tor hidden service [http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/).

![](/DownloadAll.png)

Although there is automatic signature verification on Windows and MacOS, it is still recommended to manually **VERIFY PGP SIGNATURES** of the downloaded packages with zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) before installing Wasabi.
This protects you against malicious phishing sites giving you back-doored wallet software.
If you have personally verified zkSNACKs' PGP public key [${zksnacksPublicKeyFingerprint}](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) and you are familiar with the [Web Of Trust](https://security.stackexchange.com/questions/147447/gpg-why-is-my-trusted-key-not-certified-with-a-trusted-signature), please consider also [signing it](https://www.gnupg.org/gph/en/manual/x334.html).

:::tip Always
Don't trust - Verify!
:::

---

## Windows

@[youtube](tkaaC8yET1o)

@[youtube](D8U53PFEsVk)

1. [Download](https://wasabiwallet.io/#download) the `.msi` installer of the latest Wasabi release.

![](/DownloadWindows.png)

2. Install Wasabi by double clicking the `.msi` and following the GUI instructions.

3. Make sure that you see this window that verifies the installer was signed by zkSNACKs Limited.
Manual PGP verification is optional, as the package is signed and verified automatically on Windows.

![](/InstallWindowsSignature.png)

Wasabi will be installed to your `C:\Program Files\WasabiWallet\` folder.
You will also have an icon in your Start Menu and on your Desktop. 
After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created. 
Among others, here is where your wallet files and your logs reside.

## Debian and Ubuntu

@[youtube](DUc9A76rwX4)

If you have already imported zkSNACKs' PGP public key, then jump to step 2.

1. Download zkSNACKs' PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) by following the first four steps [here](./InstallPackage.md#manual-pgp-public-key-import), and then import it with `gpg --import PGP.txt`.
Verify that the fingerprint is `${zksnacksPublicKeyFingerprint}`.
[Next time you can skip previous steps because the PGP public key is already imported.]

2. [Download](https://wasabiwallet.io/#download) the latest Wasabi release, both the `.deb` package and the corresponding `.asc` signature file.

![](/DownloadDeb.png)

3. Verify the signature in the Download repository with `gpg --verify Wasabi-${currentVersion}.deb.asc`.
If the message returned says `Good signature from zkSNACKs` and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software was not tampered with since the developer signed it.

:::tip
The output from the verify command may contain `WARNING: This key is not certified with a trusted signature!`.
You can ignore this, but if you want to fully verify your download, you need to ask people you trust to confirm that the key fingerprint belongs to zkSNACKs.
:::

4. [GUI] Install by double clicking and follow the GUI Instruction. </br>
   [CLI] In the Download repository, run the command `sudo dpkg -i Wasabi-${currentVersion}.deb`.

After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created.
Among others, here is where your wallet files and your logs reside.

## Other Linux

(Note that this video was created on macOS, but the steps are the same for Linux)

@[youtube](qFbv_b-bju4)

@[youtube](zPKpC9cRcZo)

If you have already imported zkSNACKs' PGP public key, then jump to step 2.

1. Download zkSNACKs' PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) by following the first four steps [here](./InstallPackage.md#manual-pgp-public-key-import), and then import it with `gpg --import PGP.txt`.

Verify that the fingerprint is `${zksnacksPublicKeyFingerprint}`.
[Next time you can skip previous steps because the PGP public key is already imported.]

2. [Download](https://wasabiwallet.io/#download) the latest Wasabi release, both the `.tar.gz` archive and the corresponding `.asc` signature file.

![](/DownloadTar.png)

3. In the Download folder, run `gpg2 --verify Wasabi.${currentVersion}.tar.gz.asc`.
If the message returned says `Good signature from zkSNACKs` and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software was not tampered with since the developer signed it.

:::tip
The output from the verify command may contain `WARNING: This key is not certified with a trusted signature!`.
You can ignore this, but if you want to fully verify your download, you need to ask people you trust to confirm that the key fingerprint belongs to zkSNACKs.
:::

4. Extract the archive while keeping the file permissions: `tar -pxzf WasabiLinux-${currentVersion}.tar.gz`.

5. Run Wasabi by executing `./wassabee`.

After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created.
Among others, here is where your wallet files and your logs reside.

## macOS

@[youtube](_Zmc54XYzBA)

@[youtube](UZ9z5COXaG0)

If you have already imported zkSNACKs' PGP public key, then jump to step 4.

1. [Get GnuPG](https://www.gnupg.org/download/index.html).

2. Copy [zkSNACKs' PGP public key](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) into a new `TextEdit` document and saving it as `PGP.txt`.
Before saving, you need to go to `Format / Make Plain Text` (otherwise TextEdit will not be able to save it as a .txt file).

3. Open Terminal and go to the folder in which you saved the `PGP.txt` file and import the PGP public key with `sudo gpg2 --import PGP.txt`.
This should return the output: `key 856348328949861E: public key "zkSNACKs <zksnacks@gmail.com>" imported`.
[Next time you can skip previous steps because the PGP public key is already imported.]

4. [Download](https://wasabiwallet.io/#download) the latest Wasabi release, both the `.dmg` package and the corresponding `.asc` signature file.

![](/DownloadMac.png)

5. In the Download folder, run `sudo gpg2 --verify Wasabi-${currentVersion}.dmg.asc`.
If the message returned says `Good signature from zkSNACKs` and that it was signed with `Primary key fingerprint: ${zksnacksPublicKeyFingerprint}`, then the software was not tampered with since the developer signed it.

:::tip
The output from the verify command may contain `WARNING: This key is not certified with a trusted signature!`.
You can ignore this, but if you want to fully verify your download, you need to ask people you trust to confirm that the key fingerprint belongs to zkSNACKs.
:::

6. Double click `.dmg` to open it.

7. Install Wasabi by dragging it into your `Applications` folder.

![](/InstallMacDragDrop.png)

8. After opening Wasabi, you may encounter a security popup.
You can bypass it in multiple ways.
One way would be to keep the control key down while opening Wasabi.
Another way is to go to System Preferences / Security & Privacy, where you should find a message `"Wasabi Wallet" was blocked from opening because it is not from an identified developer` and an `open anyway` button.
Click the button and confirm by entering your Mac user password.

![](/InstallMacConfirmOpen.png)

After the first run, a [data folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) will be created.
Among others, here is where your wallet files and your logs reside.

# Install package

[[toc]]

---

It is strongly recommended to **VERIFY PGP SIGNATURES** of the downloaded packages before installing Wasabi. This protects you against malicious phishing sites giving you back-doored Wallet software.
Don't trust - Verify!

Download the packages either from the official [WasabiWallet.io](https://wasabiwallet.io/) clearnet website, or for your privacy's sake, from the official tor hidden service [http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/).

![](/DownloadAll.png)

If you have personally verified Ádám Ficsor's PGP key and you are familiar with the [Web Of Trust](https://security.stackexchange.com/questions/147447/gpg-why-is-my-trusted-key-not-certified-with-a-trusted-signature), please consider also [signing it](https://www.gnupg.org/gph/en/manual/x334.html).

---

## Windows

@[youtube](tkaaC8yET1o)

@[youtube](D8U53PFEsVk)

If you have already imported Ádám Ficsor's public key, then jump to step 7.

1. [Download](https://www.gnupg.org/download/index.html) and install Gpg4win

![](/InstallWindowsGpgp4winSetup.png)

2. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.msi` installer and the corresponding `.msi.asc` signature file.

![](/DownloadWindows.png)

3. Double click on `.msi.asc` file or right click `More GpgEX options / Verify`.

![](/InstallWindowsGUIVerify.png)

4. You see that this is signed by the fingerprint `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, press `Search` to look for the entire PGP public key.

![](/InstallWindowsKleopatraSearchPGP.png)

5. `Import` the public key of Ficsór Ádám [adam.ficsor73@gmail.com]. Who is this guy? The maintainer of Wasabi AKA [nopara73](https://github.com/nopara73)

![](/InstallWindowsKleopatraImportPGP.png)

6. Confirm to import Ádám's public key by clicking `Yes`.
[Next time you can skip previous steps because the public key is already imported.]

![](/InstallWindowsKleopatraPGPConfirm.png)

7. Select all and verify the fingerprint: `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`

![](/InstallWindowsKleopatraVerifyFingerprint.png)

8. Press `Next`, `Next`, `Next`, until you have successfully validated that the package was signed properly.

![](/InstallWindowsKleopatraValidSig.png)

9. You can install Wasabi by double clicking the `.msi` and following the GUI instructions.

Wasabi will be installed to your `C:\Program Files\WasabiWallet\` folder.
You will also have an icon in your Start Menu and on your Desktop. After the first run, a working directory will be created: `%appdata%\WalletWasabi\`.
Among others, here is where your wallet files and your logs reside.

### Manual public key import

If you get an error upon the import of Ádám Ficsor's PGP key, then you can manually import it.

1. Copy Ádám Ficsor's PGP public key from [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).

2. Create a TXT file `PGP.txt`.

![](/InstallWindowsImportPGPManualNewFile.png)

3. Open it and right click and paste.

![](/InstallWindowsImportPGPManualText.png)

4. Save the file and close.

5. Right click on `PGP.txt`.
In the context menu navigate to `More GpgEx options/Import keys`.

![](/InstallWindowsImportPGPManualImport.png)

6. Kleopatra pops up and Ádám Ficsór's key is imported.
Press `OK` and close Kleopatra.

![](/InstallWindowsImportPGPManualKleopatra.png)


## Debian and Ubuntu

Check out this video guide:

@[youtube](DUc9A76rwX4)

If you have already imported Ádám Ficsor's public key, then jump to step 2.

1. Download Ádám Ficsor's PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt), and then import it with `gpg --import PGP.txt`.
Verify that the fingerprint is `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`.
[Next time you can skip previous steps because the public key is already imported.]

2. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.deb` package and the corresponding `.asc` signature file.

![](/DownloadDeb.png)

3. Verify the signature in the Download repository with `gpg --verify Wasabi-X.X.X.deb.asc` [Change `X.X.X` to version you downloaded.]
If the message returned says `Good signature from nopara73 aka Ficsór Ádám` and that it was signed with `Primary key fingerprint: 21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, then the software was not tampered with since the developer signed it.

4. [GUI] Install by double clicking and follow the GUI Instruction. </br>
   [CLI] In the Download repository, run the command `sudo dpkg -i Wasabi-X.X.X.deb`. [Change `X.X.X` to version you downloaded.]

After the first run, a working directory will be created: `~/.walletwasabi/`.
Among others, here is where your wallet files and your logs reside.

## Other Linux

Check out this video guide: (Note that this video was created on OSX, but the steps are the same for Linux)

@[youtube](qFbv_b-bju4)

Or this video guide:

@[youtube](zPKpC9cRcZo)

If you have already imported Ádám Ficsor's public key, then jump to step 2.

1. Download Ádám Ficsor's PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt), and then import it with `gpg --import PGP.txt`.
Verify that the fingerprint is `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`.
[Next time you can skip previous steps because the public key is already imported.]

2. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.tar.gz` archive and the corresponding `.asc` signature file.

![](/DownloadTar.png)

3. In the Download folder, run `gpg2 --verify Wasabi.X.X.X.tar.gz.asc`.
[Change `X.X.X` to version you downloaded.]
If the message returned says `Good signature from nopara73 aka Ficsór Ádám` and that it was signed with `Primary key fingerprint: 21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, then the software was not tampered with since the developer signed it.

4. Extract the archive while keeping the file permissions: `tar -pxzf WasabiLinux-X.X.X.tar.gz`. [Change `X.X.X` to version you downloaded.]

5. Run Wasabi by executing `./wassabee`.

After the first run, a working directory will be created: `~/.walletwasabi/`.
Among others, here is where your wallet files and your logs reside.

## OSX

Check out this video guide:

@[youtube](_Zmc54XYzBA)

If you have already imported Ádám Ficsor's public key, then jump to step 4.

1. [Get GnuPG](https://www.gnupg.org/download/index.html).

2. Copy [Ádám Ficsor's PGP public key](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) into a new `TextEdit` document and saving it as `PGP.txt`.
Before saving, you need to go to `Format / Make Plain Text` (otherwise TextEdit will not be able to save it as a .txt file).

3. Open Terminal and go to the folder in which you saved the `PGP.txt` file and import the public key with `sudo gpg2 --import PGP.txt`.
This should return the output: `key B4B72266C47E075E: public key "nopara73 (GitHub key) <nopara73@github.com>" imported`.
[Next time you can skip previous steps because the public key is already imported.]

4. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.dmg` package and the corresponding `.asc` signature file.

![](/DownloadMac.png)

5. In the Download folder, run `sudo gpg2 --verify Wasabi-X.X.X.dmg.asc`.
[Change `X.X.X` to version you downloaded.]
If the message returned says `Good signature from nopara73 aka Ficsór Ádám` and that it was signed with `Primary key fingerprint: 21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, then the software was not tampered with since the developer signed it.

6. Double click `.dmg` to open it.

7. Install Wasabi by dragging it into your `Applications` folder.

![](/InstallMacDragDrop.png)

8. After opening Wasabi, you may encounter a security popup.
You can bypass it in multiple ways.
One way would be to keep the control key down while opening Wasabi.
Another way is to go to System Preferences / Security & Privacy, where you should find a message `"Wasabi Wallet" was blocked from opening because it is not from an identified developer` and an `open anyway` button.
Click the button and confirm by entering your Mac user password.

![](/InstallMacConfirmOpen.png)

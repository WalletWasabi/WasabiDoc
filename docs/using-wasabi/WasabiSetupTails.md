---
{
  "title": "Wasabi Setup on Tails",
  "description": "A step by step guide on how to securely download, verify and install the software packages of Wasabi for Tails. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wasabi Setup on Tails

[[toc]]

---

This essay is extracted from this step by step [guide](https://github.com/PulpCattel/Tails-BitcoinCore-Wasabi), which also includes tutorials on how to install Tails, create a persistent storage and use Bitcoin Core alongside with it.

:::tip
Starting with v1.1.10 release, Wasabi comes pre-installed with bitcoind from [Bitcoin Core](https://bitcoincore.org/) and it can be started on the same desktop or laptop computer with just one click.
This is likely the most convenient solution for Wasabikas.

Remember that you will need at least a 300GB USB or SD card to download the entire blockchain.
:::

## Create admin password

You need sudo privileges to install Wasabi, at “Tails Greeter” create your admin password in “additional settings” and launch Tails.

Source: [https://tails.boum.org/doc/first_steps/startup_options/administration_password/index.en.html](https://tails.boum.org/doc/first_steps/startup_options/administration_password/index.en.html)

:::tip
If you don't want to activate root privileges, you can always download Wasabi in .tar.gz format and extract the folder.

This way, you can launch Wasabi from the terminal via `./wassabee` command, and not installing any .deb package.
:::

## Download

Download for Debian/Ubuntu from:  
[http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion) (tor hidden service)  
or  
[https://www.wasabiwallet.io/#download](https://www.wasabiwallet.io/#download)

Verify the PGP signature of the downloaded package, the zkSNACKs' PGP public key fingerprint is:
<br>
`${zksnacksPublicKeyFingerprint}`

`gpg -v Wasabi-${currentVersion}.deb` (For more details check this [guide](/using-wasabi/InstallPackage.md#debian-and-ubuntu))

You can now save your `Wasabi-${currentVersion}.deb` into the persistent storage, which should look like this:

```sh
/Persistent
|__ /bitcoin-0.18.1    # Bitcoin Core launcher folder
|__ /Bitcoin           # Bitcoin Core data folder
|__ /Wasabi-${currentVersion}.deb  # Wasabi installer
```

## Wasabi data folder

As of version 1.1.9 Wasabi doesn’t offer easy ways, especially without command line, to change install directory. There is though a quick workaround.

Wasabi [saves session files](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder) in `/Home/.walletwasabi/client`, you need to mark the “show hidden files” setting to see it.

Create a directory in your persistent with the same hierarchical structure, like this:

```sh
/Persistent
|__ /bitcoin-0.18.1    # Bitcoin Core launcher folder
|__ /Bitcoin           # Bitcoin Core data folder
|__ /Wasabi-${currentVersion}.deb  # Wasabi installer
|__ /.walletwasabi
    |__ /client        # Here we save our wallet files, filters and blocks
```

After every session, when you’re done, navigate into `/Home/.walletwasabi/client` and copy the desired folders into your persistent directory.

Generally, you’d like to save the `Wallets` and `Blocks` folders.

The former contains your wallet information (e.g. keys, labels), while the latter includes the blocks needed to establish your balance.

Could be also nice to save the `BitcoinStore` folder, which contains the [BIP 158](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients) block filters, so that you don’t have to download them again.

## Install Wasabi

Drop the `Wasabi-${currentVersion}.deb` file from `/home/amnesia/Persistent` into desktop.

Open the terminal and run:

```sh
cd Desktop
sudo dpkg -i Wasabi-${currentVersion}.deb
```

Type the password you created at “Tails Greeter”.

([Info](https://help.ubuntu.com/lts/serverguide/dpkg.html) about dpkg)

Wasabi will show as a normal application in your activities overview menu, ready to start.

* Press [Windows key](https://en.wikipedia.org/wiki/Windows_key)
* Type "wasabi"
* Launch it

## Load from your data directory

After the first time you save a Wasabi session, your persistent storage will look like:

```sh
/Persistent
|__ /bitcoin-0.18.1        # Bitcoin Core launcher folder
|__ /Bitcoin               # Bitcoin Core data folder
|__ /Wasabi-${currentVersion}.deb      # Wasabi installer
|__ /.walletwasabi
    |__ /client            # Here we save our wallet files, blocks and filters
        |__ /Wallets
        |__ /Blocks
        |__ /BitcoinStore
```

To load your saved session, drop the `.walletwasabi` folder into `/Home` before starting Wasabi.

You can save multiple copies of `.walletwasabi` in your persistent, each with different data:

```sh
/Persistent
|__ /bitcoin-0.18.1            	   # Bitcoin Core launcher folder
|__ /Bitcoin                       # Bitcoin Core data folder
|__ /Wasabi                        # General Wasabi folder
    |__ /Wasabi-${currentVersion}.deb          # Wasabi installer
    |__ /BitcoinStore              # Filters (No need to keep multiple copies of them)
    |__ /CoinJoin wallet
    |   |__ /.walletwasabi
    |       |__ /client            # Here we save our wallet files and blocks
    |           |__ /Wallets
    |           |__ /Blocks
    |__ /watch-only coldstorage A
    |   |__ /.walletwasabi
    |       |__ /client
    |           |__ /Wallets
    |           |__ /Blocks
    |__ /watch-only coldstorage B
        |__ /.walletwasabi
            |__ /client
                |__ /Wallets
                |__ /Blocks
```

This is only a minor example, tune it to your own needs.

:::danger
Remember to backup either your files or your [persistent storage](https://tails.boum.org/doc/first_steps/persistence/copy/index.en.html)!
:::

## Script to automatically install Wasabi on Tails

Alternatively, you can use this [script](https://github.com/permabull/wasabi_tails_installer/blob/master/wasabi_tails_installer) made by [permabull](https://github.com/permabull), which, after downloading Wasabi by following [step 2](/using-wasabi/WasabiSetupTails.html#download), automatically installs Wasabi from the persistent folder and moves the wallet you wanna open (or all of them) by user input:
```
#!/bin/bash

sudo dpkg -i Wasabi-${currentVersion}.deb

wassabee </dev/null &>/dev/null &

sleep 5s

pkill wassabee

echo "*********************"

ls -1 -d */

echo "*********************"

while true
do	
    read -p "Enter wallet to open: " wallet_name
    FOLDER="$wallet_name"

    if [ -d "$FOLDER" ]
    then
        echo "$FOLDER wallet found."
	cd "$FOLDER"/.walletwasabi/
	cp -r client/* ~/.walletwasabi/client
	echo "Your files have been moved to wasabi folder"
	break
    else
	echo ""$FOLDER" wallet doesn't exist"
	continue
fi
done

wassabee </dev/null &>/dev/null &
```


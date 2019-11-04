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

## CREATE ADMIN PASSWORD

You need sudo privileges to install Wasabi, at “Tails Greeter” create your admin password in “additional settings” and launch Tails.

Source: [https://tails.boum.org/doc/first_steps/startup_options/administration_password/index.en.html](https://tails.boum.org/doc/first_steps/startup_options/administration_password/index.en.html)

## DOWNLOAD

Download for Debian/Ubuntu from:  
[http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion) (tor hidden service)  
or  
[https://www.wasabiwallet.io/#download](https://www.wasabiwallet.io/#download)

Verify the PGP signature of the downloaded package, the zkSNACKs' PGP key fingerprint is:
<br>
`6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E`

`gpg -v Wasabi-${currentVersion}.deb` (For more details check this [guide](/using-wasabi/InstallPackage.md#debian-and-ubuntu))

You can now save your `Wasabi-${currentVersion}.deb` into the persistent storage, which should look like this:

```sh
/Persistent
|__ /bitcoin-0.18.1    # Bitcoin Core launcher folder
|__ /Bitcoin           # Bitcoin Core data folder
|__ /Wasabi-${currentVersion}.deb  # Wasabi installer
```

## WASABI DATA FOLDER

As of version 1.1.9 Wasabi doesn’t offer easy ways, especially without command line, to change install directory. There is though a quick workaround.

Wasabi saves session files in `/Home/.walletwasabi/client`, you need to mark the “show hidden files” setting to see it.

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

Could be also nice to save the `BitcoinStore` folder, which contains the BIP 158 block filters, so that you don’t have to download them again.

## INSTALL WASABI

Drop the `Wasabi-${currentVersion}.deb` file from `/Home/Persistent` into desktop.

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

## LOAD FROM YOUR DATA DIRECTORY

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
Remember to do backups!
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

## Backup your persistent volume

### Create a new Tails to store your backup

In these instructions, we recommend you to create another Tails to store your backup.
This way, if your Tails is lost or damaged, you will be able to replace it immediately with your backup Tails.

1- Install Tails on a new USB stick on which you want to create your backup Tails.
For detailed instructions, see how to [install Tails from another Tails](https://tails.boum.org/install/clone/index.en.html#install-tails).
Make sure that this new USB stick is at least as large as your current Tails USB stick.

2- We recommend making your backup Tails USB stick look different than your current Tails USB stick to avoid using your backup Tails by mistake.

3- Shutdown and unplug your current Tails USB stick.

4- Restart on your backup Tails and create a persistent volume on it. For detailed instructions, see how to [create & configure the persistent volume](https://tails.boum.org/doc/first_steps/persistence/configure/index.en.html).

:::tip
We recommend using the same passphrase as your current Tails so that the passphrase is easier to remember.
:::

5- When the persistent volume configuration shows a list of the possible persistence features, click Save and exit.
The backup process described below overrides the configuration of the persistent volume.
So, it does not matter which features are enabled when you create the persistent volume.

6- Shutdown and unplug your backup Tails USB stick.

### Create or update your backup

1- Start on your current Tails and set up an administration password.

2- Choose `Applications ▸ Accessories ▸ Files` to open the Files browser.

3- Plug in your backup Tails USB stick.

4- If your backup Tails is outdated, you can upgrade it by cloning your current Tails using Tails Installer.

For detailed instructions, see how to manually upgrade from another Tails.

5-A new encrypted volume appears in the sidebar of the Files browser.

Click on it and enter the passphrase of your backup Tails to unlock it.

6- Your backup now appears as the TailsData volume in the sidebar.

7- Choose `Applications ▸ System Tools ▸ Root Terminal` to open a terminal with administration rights.

8- Execute the following command to backup your persistent volume:
`rsync -PaSHAX --del /live/persistence/TailsData_unlocked/ /media/amnesia/TailsData/`

When the command finishes, it displays a summary of the data that was copied. For example:
```
sent 32.32M bytes  received 1.69K bytes  21.55M bytes/sec
total size is 32.30M  speedup is 1.00
```

:::warning
Each time you update your backup, only the files that have changed are copied.
:::

You can now eject the TailsData volume in the Files browser and unplug your backup Tails USB stick.

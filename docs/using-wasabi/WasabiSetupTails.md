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

(Source: https://tails.boum.org/doc/first_steps/startup_options/administration_password/index.en.html)

## DOWNLOAD

Download for Debian/Ubuntu from:  
http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion (tor hidden service)  
or  
https://www.wasabiwallet.io/#download

Verify the PGP signature of the downloaded package, the zkSnacks PGP key fingerprint is:  
`6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E`

`gpg -v Wasabi-X.X.X.deb`

You can now save your `Wasabi-X.X.X.deb` into the persistent storage, which should look like this:

`/Persistent`  
&emsp; `/bitcoin-0.18.1` (Bitcoin Core launcher folder)  
&emsp; `/Bitcoin`  (Bitcoin Core data folder)  
&emsp; `/Wasabi-X.X.X.deb` (Wasabi installer)

## WASABI DATA FOLDER

As of version 1.1.9 Wasabi doesn’t offer easy ways, especially without command line, to change install directory. There is though a quick workaround.

Wasabi saves session files in `/Home/.walletwasabi/client`, you need to mark the “show hidden files” setting to see it.

Create a directory in your persistent with the same hierarchical structure, like this:

`/Persistent`  
 &emsp; `/bitcoin-0.18.1` (Bitcoin Core launcher folder)  
 &emsp; `/Bitcoin`  (Bitcoin Core data folder)  
 &emsp; `/Wasabi-X.X.X.deb` (Wasabi installer)  
 &emsp; `/.walletwasabi`  
 &emsp; &emsp; `/client` (here we save our wallet files, filters and blocks)

After every session, when you’re done, navigate into `/Home/.walletwasabi/client` and copy the desired folders into your persistent directory.

Generally, you’d like to save the `Wallets` and `Blocks` folders.

The former contains your wallet information (e.g. keys, labels), while the latter includes the blocks needed to establish your balance.

Could be also nice to save the `BitcoinStore` folder, which contains the BIP 158 block filters, so that you don’t have to download them again.

## INSTALL WASABI

Drop the `Wasabi-X.X.X.deb` file from `/Home/Persistent` into desktop.

Open the terminal and run:

```
cd Desktop
sudo dpkg -i Wasabi-X.X.X.deb
```

Type the password you created at “Tails Greeter”.

([Info](https://help.ubuntu.com/lts/serverguide/dpkg.html) about dpkg)

Wasabi will show as a normal application in your activities overview menu, ready to start.

* Press [Windows key](https://en.wikipedia.org/wiki/Windows_key)
* Type "wasabi"
* Launch it

## LOAD FROM YOUR DATA DIRECTORY

After the first time you save a Wasabi session, your persistent storage will look like:

`/Persistent`  
&emsp; `/bitcoin-0.18.1` (Bitcoin Core launcher folder)  
&emsp; `/Bitcoin`  (Bitcoin Core data folder)  
&emsp; `/Wasabi-X.X.X.deb` (Wasabi installer)  
&emsp; `/.walletwasabi`  
&emsp; &emsp; `/client` (here we save our wallet files, filters and blocks)  
&emsp; &emsp; &emsp; `/Wallets` (wallet files)  
&emsp; &emsp; &emsp; `/Blocks` (blocks)  
&emsp; &emsp; &emsp; `/BitcoinStore` (filters)

To load your saved session, drop the `.walletwasabi` folder into `/Home` before starting Wasabi.

You can save multiple copies of `.walletwasabi` in your persistent, each with different data:

`/Persistent`  
&emsp; `/bitcoin-0.18.1` (Bitcoin Core launcher folder)  
&emsp; `/Bitcoin`  (Bitcoin Core data folder)  
&emsp; `/Wasabi`  
&emsp; &emsp; `/Wasabi-X.X.X.deb` (Wasabi installer)  
&emsp; &emsp; `/BitcoinStore` (No need to keep multiple copies of same filters)  
&emsp; &emsp; `/CoinJoin wallet`  
&emsp; &emsp; &emsp; `/.walletwasabi`  
&emsp; &emsp; &emsp; &emsp; `/client` (here we save our wallet files, filters and blocks)  
&emsp; &emsp; &emsp; &emsp; &emsp; `/Wallets` (wallet files)  
&emsp; &emsp; &emsp; &emsp; &emsp; `/Blocks` (blocks)  
&emsp; &emsp; `/watch-only coldstorage A`  
&emsp; &emsp; &emsp; `/.walletwasabi`  
&emsp; &emsp; &emsp; &emsp; `/client` (here we save our wallet files, filters and blocks)  
&emsp; &emsp; &emsp; &emsp; &emsp; `/Wallets` (wallet files)  
&emsp; &emsp; &emsp; &emsp; &emsp; `/Blocks` (blocks)  
&emsp; &emsp; `/watch-only coldstorage B`  
&emsp; &emsp; &emsp; `/.walletwasabi`  
&emsp; &emsp; &emsp; &emsp; `/client` (here we save our wallet files, filters and blocks)  
&emsp; &emsp; &emsp; &emsp; &emsp; `/Wallets` (wallet files)  
&emsp; &emsp; &emsp; &emsp; &emsp; `/Blocks` (blocks)

This is only a minor example, tune it to your own needs.

:::danger
Remember to do backups!
:::

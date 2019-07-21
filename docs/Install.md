# Installing Wasabi

- [Install package](Install.md#install-package) </br>
  -- [Windows](Install.md#windows) </br>
  -- [Linux](Install.md#linux) </br>
    -- [Debian and Ubuntu](Install.md#debian-and-ubuntu) </br>
    -- [Other Linux](Install.md#other-linux) </br>
  -- [OSX](Install.md#osx) </br>
- [Build from source code](Install.md#build-from-source-code)
- [Deterministic build](Install.md#deterministic-build)
- [Client deployment](Install.md#client-deployment)
- [Backend deployment](Install.md#backend-deployment)

---

# Install package

- [How to install Wasabi on Windows](InstallInstructions.md#windows)
- [How to install Wasabi on Linux](InstallInstructions.md#linux)
- [How to install Wasabi on OSX](InstallInstructions.md#osx)

It is strongly recommended to **VERIFY PGP SIGNATURES** of the downloaded packages before installing Wasabi. This protects you against malicious phising sites giving you back-doored Wallet software. Don't trust - Verify!

Download the packages either from the official [WasabiWallet.io](https://wasabiwallet.io/) clearnet website, or for your privacy sake from the official tor hidden service [http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/).

If you have personally verified Ádám Ficsor's PGP key and you are familiar with the [Web Of Trust](https://security.stackexchange.com/questions/147447/gpg-why-is-my-trusted-key-not-certified-with-a-trusted-signature), please consider also [signing it](https://www.gnupg.org/gph/en/manual/x334.html).

## Windows

Check out [this](https://www.youtube.com/watch?v=tkaaC8yET1o) or [this](https://www.youtube.com/watch?v=D8U53PFEsVk) video guide.

If you have already imported Ádám Ficsor's public key, then jump to step 7.

1. [Download](https://www.gnupg.org/download/index.html) and install Gpg4win 

![Install Gpg4win](https://i.imgur.com/YKDdw1k.png)

2. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.msi` installer and the corresponding `.asc` signature file.

![](https://imgur.com/K2J1WWG.png)

3. Double click on `.asc` file or right click `More GpgEX options / Verify`.

![](https://i.imgur.com/fJME8Yh.png)

4. You see that this is signed by the fingerprint `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, press `Search` to look for the entire PGP public key.

![](https://i.imgur.com/cj00rev.png)

5. `Import` the public key of Ficsór Ádám [adam.ficsor73@gmail.com]. Who is this guy? The maintainer of Wasabi AKA [nopara73](https://github.com/nopara73)

![](https://i.imgur.com/B3WZn1n.png)

6. Confirm to import Ádám's public key by clicking `Yes`. [Next time you can skip previous steps because the public key is already imported.]

![](https://i.imgur.com/9zGpuI6.png)

7. Select all and verify the fingerprint: `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`

![](https://i.imgur.com/PfdbegY.png)

8. Press `Next`, `Next`, `Next`, until you have successfully validated that the package was signed properly.

![](https://i.imgur.com/7e0O9dQ.png)

9. You can install Wasabi by double clicking the `.msi` and following the GUI instructions.

Wasabi will be installed to your `C:\Program Files\WasabiWallet\` folder. You will also have an icon in your Start Menu and on your Desktop. After the first run, a working directory will be created: `%appdata%\WalletWasabi\`. Among others, here is where your wallet files and your logs reside.

### Manual public key import

If you get an error upon the import of Ádám Ficsor's PGP key, then you can manually import it.

1. Copy Ádám Ficsor's PGP public key from [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt).

![](https://i.imgur.com/zLVqhOu.png)

2. Create a TXT file `PGP.txt`.

![](https://i.imgur.com/F8LMu6W.png), 

3. Open it and right click and paste.

![](https://i.imgur.com/82XiHce.png)

4. Save the file and close.

5. Right click on `PGP.txt`. In the context menu navigate to `More GpgEx options/Import keys`.

![](https://i.imgur.com/qmuF3Hx.png)

6. Kleopatra pops up and Ádám Ficsór's key is imported. Press `OK` and close Kleopatra.

![](https://i.imgur.com/EICwNWq.png)


## Linux

### Debian and Ubuntu

Check out this [video guide](https://www.youtube.com/watch?v=DUc9A76rwX4).

If you have already imported Ádám Ficsor's public key, then jump to step 2.

1. Download Ádám Ficsor's PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt), and then import it with `gpg --import PGP.txt`. Verify that the fingerprint is `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`. [Next time you can skip previous steps because the public key is already imported.]

2. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.deb` package and the corresponding `.asc` signature file.

3. Verify the signature in the Download repository with `gpg --verify Wasabi-X.X.X.deb.asc` [Change `X.X.X` to version you downloaded.] If the message returned says `Good signature from nopara73 aka Ficsór Ádám` and that it was signed with `Primary key fingerprint: 21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, then the software was not tampered with since the developer signed it.

4. [GUI] Install by double clicking and follow the GUI Instruction. </br>
   [CLI] In the Download repository, run the command `sudo dpkg -i Wasabi-X.X.X.deb`. [Change `X.X.X` to version you downloaded.]

After the first run, a working directory will be created: `~/.walletwasabi/`. Among others, here is where your wallet files and your logs reside.

### Other Linux

Check out [this](https://www.youtube.com/watch?v=qFbv_b-bju4) [Note that this video was created on OSX, but the steps are the same for Linux.], or [this](https://www.youtube.com/watch?time_continue=4&v=zPKpC9cRcZo) video guide.

If you have already imported Ádám Ficsor's public key, then jump to step 2.

1. Download Ádám Ficsor's PGP public key [here](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt), and then import it with `gpg --import PGP.txt`. Verify that the fingerprint is `21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`. [Next time you can skip previous steps because the public key is already imported.]

2. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.tar.gz` archive and the corresponding `.asc` signature file.

![](https://imgur.com/wsJ66Qt.png)

3. In the Download folder, run `gpg2 --verify Wasabi.X.X.X.asc`. [Change `X.X.X` to version you downloaded.] If the message returned says `Good signature from nopara73 aka Ficsór Ádám` and that it was signed with `Primary key fingerprint: 21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, then the software was not tampered with since the developer signed it.

4. Extract the archive while keeping the file permissions: `tar -pxzf WasabiLinux-X.X.X.tar.gz`. [Change `X.X.X` to version you downloaded.]

5. Run Wasabi by executing `./wassabee`.

After the first run, a working directory will be created: `~/.walletwasabi/`. Among others, here is where your wallet files and your logs reside.


## OSX

Check out this [video guide](https://www.youtube.com/watch?v=_Zmc54XYzBA).

If you have already imported Ádám Ficsor's public key, then jump to step 4.

1. [Get GnuPG](https://www.gnupg.org/download/index.html).

2. Copy [Ádám Ficsor's PGP public key](https://github.com/zkSNACKs/WalletWasabi/blob/master/PGP.txt) into a new `TextEdit` document and saving it as `PGP.txt`. Before saving, you need to go to `Format / Make Plain Text` (otherwise TextEdit will not be able to save it as a .txt file).

3. Open Terminal and go to the folder in which you saved the `PGP.txt` file and import the public key with `sudo gpg2 --import PGP.txt`. This should return the output: `key B4B72266C47E075E: public key "nopara73 (GitHub key) <nopara73@github.com>" imported`. [Next time you can skip previous steps because the public key is already imported.]

4. [Download](https://wasabiwallet.io) the latest Wasabi release, both the `.dmg` package and the corresponding `.asc` signature file.

![](https://imgur.com/k0cEYjz.png)

5. In the Download folder, run `sudo gpg2 --verify Wasabi.X.X.X.asc`. [Change `X.X.X` to version you downloaded.] If the message returned says `Good signature from nopara73 aka Ficsór Ádám` and that it was signed with `Primary key fingerprint: 21D7 CA45 565D BCCE BE45  115D B4B7 2266 C47E 075E`, then the software was not tampered with since the developer signed it.

6. Double click `.dmg` to open it.

7. Install Wasabi by dragging it into your `Applications` folder.

![](https://i.imgur.com/7UEZ8wI.png)

8. After opening Wasabi, you may encounter a security popup. You can bypass it in multiple ways. One way would be to keep the control key down while opening Wasabi. Another way is to go to System Preferences / Security & Privacy, where you should find a message `"Wasabi Wallet" was blocked from opening because it is not from an identified developer` and an `open anyway` button. Click the button and confirm by entering your Mac user password.

![](https://imgur.com/dy1zfJG.png)


# Build from source code

## Get The Requirements

1. Install [Git](https://git-scm.com/downloads)
2. Install [.NET Core 2.2 SDK](https://www.microsoft.com/net/download) (Note, you can disable .NET's telemetry by typing `export DOTNET_CLI_TELEMETRY_OPTOUT=1` on Linux and OSX or `set DOTNET_CLI_TELEMETRY_OPTOUT=1` on Windows.)
  
## Get Wasabi

Clone & Restore & Build

```sh
git clone https://github.com/zkSNACKs/WalletWasabi.git
cd WalletWasabi/WalletWasabi.Gui
dotnet build
```

## Run Wasabi

Run Wasabi with `dotnet run` from the `WalletWasabi.Gui` folder.

## Update Wasabi

```sh
git pull
```

# Deterministic Build

> Reproducible [or deterministic] builds are a set of software development practices that create an independently-verifiable path from source to binary code.  ~ [ReproducibleBuilds.org](https://reproducible-builds.org/)

This guide describes how to reproduce Wasabi's builds.

## 1. Assert correct environment

In order to reproduce Wasabi's builds you need [Git](https://git-scm.com/downloads), [Windows 10](https://www.microsoft.com/en-us/software-download/windows10ISO) and the version of [.NET Core SDK](https://www.microsoft.com/net/download) that was the most recent in the time of building the [release](https://github.com/zkSNACKs/WalletWasabi/releases).

## 2. Reproduce Builds

```sh
git clone https://github.com/zkSNACKs/WalletWasabi.git
git checkout {hash of the release} // This works from 1.1.3 release, https://github.com/zkSNACKs/WalletWasabi/releases
cd WalletWasabi/WalletWasabi.Packager/
dotnet restore
dotnet build
dotnet run -- --onlybinaries
```

This will build our binaries for Windows, OSX and Linux from source code and open them in a file explorer for you.

![](https://i.imgur.com/8XAQzz4.png)

## 3. Verify Builds

You can compare our binaries with the downloads we have on the website: https://wasabiwallet.io/
In order to end-to-end verify all the downloaded packages you need a Windows, a Linux, and an OSX machine.

![](https://i.imgur.com/aI9Kx0c.png)

### Windows

After you installed Wasabi from the `.msi`, it will be in `C:\Program Files\WasabiWallet` folder. You can compare it with your build:

```sh
git diff --no-index win7-x64 "C:\Program Files\WasabiWallet"
```

### Linux && OSX

You can use the Windows Subsystem for Linux to verify all the packages in one go. At the time of writing this guide we provide a `.tar.gz` and a `.deb` package for Linux and .dmg for OSX. 
Install the `.deb` package and extract the `tar.gz` and `.dmg` packages, then compare them with your build.

After installing WSL, just type `wsl` in explorer where your downloaded and built packages are located.

![](https://i.imgur.com/yRUjxvG.png)

- .deb

```sh
sudo dpkg -i Wasabi-1.1.6.deb
git diff --no-index linux-x64/ /usr/local/bin/wasabiwallet/
```

- .tar.gz

```sh
tar -pxzf WasabiLinux-1.1.6.tar.gz
git diff --no-index linux-x64/ WasabiLinux-1.1.6
```

- .dmg

You will need to install [7z](https://www.7-zip.org/) (or something else) to extract the `.dmg`: `sudo apt install p7zip-full`

```sh
7z x Wasabi-1.1.6.dmg -oWasabiOsx
git diff --no-index osx-x64/ WasabiOsx/Wasabi\ Wallet.App/Contents/MacOS/
```


# Client Deployment

## 1. Packaging

0. Make sure local .NET Core version is up to date.
1. Update the onion seed list to the most reliable ones: `dotnet run -- --reduceonions`
2. Run tests.
3. Dump client version.
4. Run packager in publish mode.
5. Create `.msi`
6. Run packager in sign mode. (Set back to publish mode.)
7. Final `.msi` test on own computer.

## 2. GitHub Release

1. Create GitHub Release (Use the previous release as template.)
2. Write Release notes based on commits since last release.
3. Download and test the binaries on all VMs.

## 3. Notify

1. Refresh website download and signature links.
2. Update InstallationGuide and DeterministicBuildGuide download links.
3. Make sure CI and CodeFactor checks out.
4. [Deploy testnet and mainnet backend.](https://github.com/zkSNACKs/WalletWasabi/blob/master/WalletWasabi.Documentation/BackendDeployment.md#update)

## 4. Announce

1. [Twitter](https://twitter.com) (tag @wasabiwallet #Bitcoin #Privacy).
2. Submit to [/r/WasabiWallet](https://old.reddit.com/r/WasabiWallet/) and [/r/Bitcoin](https://old.reddit.com/r/Bitcoin/).


# Backend Deployment

## Update

Consider updating the versions in `WalletWasabi.Helpers.Constants`. If versions are updated, make sure Client Release is already available before updating the backend.

```sh
sudo apt-get update && cd ~/WalletWasabi && git pull && cd ~
sudo service nginx stop
sudo systemctl stop walletwasabi.service
sudo killall tor
bitcoin-cli stop
sudo apt-get upgrade -y && sudo apt-get autoremove -y
sudo reboot
set DOTNET_CLI_TELEMETRY_OPTOUT=1
bitcoind
bitcoin-cli getblockchaininfo
tor
sudo service nginx start
dotnet publish ~/WalletWasabi/WalletWasabi.Backend --configuration Release --self-contained false
sudo systemctl start walletwasabi.service
pgrep -ilfa tor && pgrep -ilfa bitcoin && pgrep -ilfa wasabi && pgrep -ilfa nginx
tail -10000 ~/.walletwasabi/backend/Logs.txt
```

## 1. Create Remote Server

- Name
WalletWasabi.Backend.[TestNet/Main]

- Image
Ubuntu 18.04 x64

- Region
Mostly anywhere is fine, except the US or China.

- Size

[Bitcoin full node minimum requirements](https://bitcoin.org/en/full-node#minimum-requirements)

[4GB Standard/32GB Standard]

## 2. Setup Server

[Initial server setup with Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04)

### SSH in as Root

Putty (Note copypaste with Ctrl+Insert and Shift+Insert.) 
[How o use ssh keys with putty on Digital Ocean droplets Windowsusers](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-putty-on-digitalocean-droplets-windows-users)

#### Create a New User and Grant Administrative Privileges

```sh
adduser user
usermod -aG sudo user
```

## Setup Firewall

[How to set up a firewall with UFW on Ubunt 14.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-14-04)

```sh
ufw allow OpenSSH
ufw enable
```

> As the firewall is currently blocking all connections except for SSH, if you install and configure additional services, you will need to adjust the firewall settings to allow acceptable traffic in. You can learn some common UFW operations in this guide.  ~ [UFW essentials common firewal rules and commands](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)

### Enable External Access for User

```sh
rsync --archive --chown=user:user ~/.ssh /home/user
```

### Update Ubuntu

```sh
sudo apt-get update && sudo apt-get dist-upgrade -y
```

## 3. Install .NET SDK

[.Net get started with Ubuntu 18.04](https://www.microsoft.com/net/learn/get-started/linux/ubuntu18-04)

Opt out of the telemetry: `export DOTNET_CLI_TELEMETRY_OPTOUT=1`.

## 4. Install Tor

```sh
sudo apt-get install tor
```

Check if Tor is already running in the background:

```sh
pgrep -ilfa tor
sudo killall tor
```

Verify Tor is properly running:
```sh
tor
```

Create torrc:

```sh
sudo pico /etc/tor/torrc
```

```sh
HiddenServiceDir /home/user/.hidden_service_v3
HiddenServiceVersion 3
HiddenServicePort 80 127.0.0.1:37127

RunAsDaemon 1

# ---MAKE TOR FASTER---

# Need to disable for HiddenServiceNonAnonymousMode
SOCKSPort 0
# Need to enable for HiddenServiceSingleHopMode
HiddenServiceNonAnonymousMode 1
# This option makes every hidden service instance hosted by a tor
# instance a Single Onion Service. One-hop circuits make Single Onion
# servers easily locatable, but clients remain location-anonymous.
HiddenServiceSingleHopMode 1
```

Enable firewall:
```sh
sudo ufw allow 80
```

**Backup the generated private key!**

## 5. Install, Configure and Synchronize bitcoind

[Download bitcoind](https://bitcoin.org/en/download)

```sh
sudo add-apt-repository ppa:bitcoin/bitcoin
sudo apt-get update
sudo apt-get install bitcoind
mkdir ~/.bitcoin
pico ~/.bitcoin/bitcoin.conf
```

```sh
testnet=[0/1]

[main/test].rpcworkqueue=64

[main/test].txindex=1

[main/test].daemon=1
[main/test].server=1
[main/test].rpcuser=bitcoinuser
[main/test].rpcpassword=password
[main/test].whitebind=127.0.0.1:[8333/18333]
```
[Bitcoin Core v0.17.0](https://bitcoincore.org/en/releases/0.17.0/)
[How to run Lightninb BTC node and start mining](https://medium.com/@loopring/how-to-run-lighting-btc-node-and-start-mining-b55c4bab8ad)
[Adding a Firewall](https://github.com/MrChrisJ/fullnode/issues/18)

```sh
sudo ufw allow ssh
sudo ufw allow [18333/8333]
bitcoind
bitcoin-cli getblockcount
bitcoin-cli stop
bitcoind
```

## 6. Publish, Configure and Run WalletWasabi.Backend

```sh
git clone https://github.com/zkSNACKs/WalletWasabi.git
cd WalletWasabi
dotnet restore
dotnet build
dotnet publish WalletWasabi.Backend --configuration Release --self-contained false
dotnet WalletWasabi.Backend/bin/Release/netcoreapp2.2/publish/WalletWasabi.Backend.dll
cd ..
cat .walletwasabi/backend/Logs.txt
pico .walletwasabi/backend/Config.json
pico .walletwasabi/backend/CcjRoundConfig.json
dotnet WalletWasabi/WalletWasabi.Backend/bin/Release/netcoreapp2.2/publish/WalletWasabi.Backend.dll
cat .walletwasabi/backend/Logs.txt
```

## 7. Monitor the Apps

### WalletWasabi.Backend

[Aspnet host and deploy Linux nginx](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.0&tabs=aspnetcore2x)

```sh
sudo pico /etc/systemd/system/walletwasabi.service
```

```sh
[Unit]
Description=WalletWasabi Backend API

[Service]
WorkingDirectory=/home/user/WalletWasabi/WalletWasabi.Backend/bin/Release/netcoreapp2.2/publish
ExecStart=/usr/bin/dotnet /home/user/WalletWasabi/WalletWasabi.Backend/bin/Release/netcoreapp2.2/publish/WalletWasabi.Backend.dll
Restart=always
RestartSec=10  # Restart service after 10 seconds if dotnet service crashes
SyslogIdentifier=walletwasabi-backend
User=user
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

```sh
sudo systemctl enable walletwasabi.service
sudo systemctl start walletwasabi.service
systemctl status walletwasabi.service
tail -10000 .walletwasabi/backend/Logs.txt
```

### Tor

```sh
tor
pgrep -ilfa tor
```

### 8. Setup nginx

[Aspnet install nginx](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.0&tabs=aspnetcore2x#install-nginx)
Only setup nginx if you want to expose the autogenerated website to the clearnet.

Enable firewall:
```sh
sudo ufw allow http
sudo ufw allow https
```

```sh
sudo apt-get install nginx -y
sudo service nginx start
```
Verify the browser displays the default landing page for Nginx. The landing page is reachable at `http://<server_IP_address>/index.nginx-debian.html`.

```sh
sudo pico /etc/nginx/sites-available/default
```

Fill out the server name with the server's IP and domain. And remove the unneeded domains (note I use `wasabiwallet.co` for testnet.)

```
server {
    listen        80;
    listen        [::]:80;
    listen        443 ssl;
    listen        [::]:443 ssl;
    server_name   [InsertServerIPHere] wasabiwallet.io www.wasabiwallet.io wasabiwallet.net www.wasabiwallet.net wasabiwallet.org www.wasabiwallet.org wasabiwallet.info www.wasabiwallet.info wasabiwallet.co www.wasabiwallet.co zerolink.info www.zerolink.info hiddenwallet.org www.hiddenwallet.org;
    location / {
        proxy_pass         http://localhost:37127;
    }
}
```

```sh
sudo nginx -t
sudo nginx -s reload
```

Setup https, redirect to https when asks. This will modify the above config file, but oh well.

```sh
sudo certbot -d wasabiwallet.io -d www.wasabiwallet.io -d wasabiwallet.net -d www.wasabiwallet.net -d wasabiwallet.org -d www.wasabiwallet.org -d wasabiwallet.info -d www.wasabiwallet.info -d wasabiwallet.co -d www.wasabiwallet.co -d zerolink.info -d www.zerolink.info -d hiddenwallet.org -d www.hiddenwallet.org
```

certbot will not properly redirect www, so it must be setup by hand, one by one. Duplicate all entries like this by adding a `www.`:
```
server {
    if ($host = wasabiwallet.co) {
        return 301 https://$host$request_uri;
    }
}
```

Add `add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;` and `server_tokens off;` to every HTTPS `server` block.

```sh
sudo nginx -t
sudo nginx -s reload
```

After accessing the website finalize preload in https://hstspreload.org/

## Check If Everything Works

TestNet: http://testwnp3fugjln6vh5vpj7mvq3lkqqwjj3c2aafyu7laxz42kgwh2rad.onion/swagger/
Main: http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion/swagger/
GET fees

http://www.wasabiwallet.io/

## Check Statuses

```sh
tail -f ~/.bitcoin/debug.log
tail -10000 .walletwasabi/backend/Logs.txt
du -bsh .walletwasabi/backend/IndexBuilderService/*
```

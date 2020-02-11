---
{
  "title": "Wasabi Setup using Whonix",
  "description": "A step by step guide on how to securely download, verify and install the software packages of Wasabi for Whonix. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wasabi Setup Using Whonix

[[toc]]

---

## Whonix Overview

Whonix is a free and open-source desktop operating system (OS) that is specifically designed for advanced security and privacy.
Based on Tor, Debian GNU/Linux and the principle of security by isolation, Whonix realistically addresses common attack vectors while maintaining usability.
Online anonymity and censorship circumvention is attainable via fail-safe, automatic and desktop-wide use of the Tor network, meaning all connections are forced through Tor or blocked.

The Whonix OS consists of two VMs: the Whonix Gateway and the Whonix Workstation.
The former runs Tor processes and acts as a proxy, while the latter runs user applications on a completely isolated network.

## Getting and Using Whonix

To use Whonix, it is necessary to install either VirtualBox or Qubes.
[Qubes](https://www.qubes-os.org/doc/) is a free-standing VM-based OS, designed for the best possible security.
Whonix can added to Qubes as an option during the installation process.

[VirtualBox](https://www.virtualbox.org/wiki/End-user_documentation) is a lightweight VM manager
that can be installed on Windows, Linux, or MacOS.
Whonix is added to VirtualBox by downloading and importing the Whonix installation .ova file.

Depending upon which of these two options chosen, there is detailed information available
on the use of Whonix in Qubes [here](https://www.whonix.org/wiki/Qubes/Install), and the required downloads and information for using Whonix in VirtualBox [here](https://www.whonix.org/wiki/VirtualBox/XFCE).

:::warning Caution
Unlike other operating systems in which a username and password are created during the installation process,
Whonix installations come with the default username: "user", and default password: "changeme".
The default user has administrative privileges.

At a minimum, the password should be changed when first starting Whonix.
To change the password:

- Open a terminal window.
- Type: "passwd" (without the quotes) and hit 'Enter'.
- Follow the ensuing directions on the screen.
:::

## Creating A Wasabi-Only VM

A Wasabi-Only Whonix VM requires a very small amount of disk space.
This allows the luxury and security option of being able to dedicate a Whonix Workstation VM for the exclusive purpose of safely holding the Wasabi Wallet.

To avoid the risk of the wallet VM being compromised by malicious software or websites, do not install any applications in this VM other than those required by the Wasabi Wallet, or direct the Tor browser to any URL that is not necessary to install Wasabi.

For an advanced layer of security, it is possible to install and run the Wasabi Wallet VM using a removable storage medium e.g., USB drive or SD card.
This allows the storage your wallet in a safe place away from the computer.

As this is beyond the scope of this tutorial, consult the Qubes or VirtualBox user guide for details.

### Qubes Users

Start Qubes and update all templates using the "Qubes Update Tool", which can be found in the System Tools menu.

In Qubes, the first step is to create a copy of the Whonix Workstation VM template, into which the Wasabi Wallet will be installed.

Qubes refers to this type of VM as a "AppVM".

To create a Whonix Workstation AppVM:

1. Click on the blue "Q" icon on the top/left panel.
2. On the resulting pull-down menu, select "Create Qubes VM".
3. In the Settings window that opens, give the VM a descriptive name, such as "Wasabi-Wallet-Whonix", and select a label color.
4. Select "AppVM" as the "Type".
5. Select "whonix-ws-15" as the "Template".
6. Select "sys-whonix" for "Networking".

These steps will create a lightweight copy of the Whonix Workstation VM template.
All of the vital system files remain on the template in read-only mode and therefore cannot be altered by malware.

The new VM will be used to install and run the Wasabi Wallet files, and it will interact with the system files on the template VM to run seamlessly.

When the new AppVM is started, Qubes will automatically use a Whonix Gateway VM to connect to the Tor network, and will feed that connection to the AppVM through the "sys-whonix" connection that was chosen for the VM network.

Now is the time to change the user password, as described earlier in the yellow "Caution" section.

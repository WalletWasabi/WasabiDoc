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

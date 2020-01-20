---
{
  "title": "Wasabi Setup on Qubes",
  "description": "A step by step guide on how to use Wasabi Wallet in Qubes OS. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wasabi Setup on Qubes

[[toc]]

[Qubes](https://qubes-os.org/) is a free and open-source security-oriented operating system meant for single-user desktop computing.
Qubes OS leverages xen-based virtualization to allow for the creation and management of isolated virtual machines called qubes.
This is valuable for users of high security software like Wasabi Wallet, and especially useful for testers of cutting edge developer branches.
There is a separation of the virtual machines running Wasabi on testnet, and those running on mainnet with valuable private keys.
If a reviewer compiles a malicious developer branch, then his mainnet private keys are secure in a different qube.

This is a step by step guide on how to properly compile Wasabi Wallet from source in independent qubes.
For tutorials on how to [download](https://www.qubes-os.org/downloads/) and [install](https://www.qubes-os.org/doc/installation-guide/) Qubes, please see their exhaustive documentation.

## Generate Template VM

In order to get the dependencies to [compile Wasabi from source](/using-wasabi/BuildSource.md), first generate a new template VM by cloning the Debian template in the dom0 terminal.

```
qvm-clone template-debian-10 template-wasabi
```

## Install Dependencies

## Generate App VM

## Run Wasabi

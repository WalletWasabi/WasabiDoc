---
{
  "title": "Build from source code",
  "description": "A step by step guide on how to build Wasabi from source code. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Build from source code

[[toc]]

---

You can compile the source code in order to get the most recent commits by the developers.
This enables you to try out features or fixes that are not yet released.
This can be the main repository master branch for those changes that should be in the next release, or developer branches for cutting edge features.
Be aware that these branches might be unstable and can include bugs that lead to a loss of funds, so use with caution and on testnet.

## Get The Requirements

1. Install [Git](https://git-scm.com/downloads)
2. Install [.NET Core ${dotnetVersion} SDK](https://www.microsoft.com/net/download) for "Building Apps"

:::tip Optional for privacy
You can disable .NET's telemetry, which is sending some usage information to Microsoft, by typing:

`export DOTNET_CLI_TELEMETRY_OPTOUT=1` on Linux and macOS.

`setx DOTNET_CLI_TELEMETRY_OPTOUT 1` to disable it permanently on Windows.
:::

## Get Wasabi

Clone Wasabi repository

```sh
git clone https://github.com/zkSNACKs/WalletWasabi.git
cd WalletWasabi/WalletWasabi.Gui
```

## Run Wasabi

Run Wasabi from the `WalletWasabi.Gui` folder

```sh
dotnet run
```

## Update Wasabi

```sh
git pull
```

:::warning Experimental
The next step is optional, it can be used for testing specific branches that are currently being worked on.

These developer branches are not thoroughly reviewed by other contributors, and there might be critical bugs in the software that can even cause loss of funds.
So only compile these branches if you know what you are doing, and run them at your own risk only on testnet.
:::

## Checkout a developer branch

Add the developer to your remote & fetch his work & checkout the branch & pull the latest commits

```sh
git remote add nopara73 https://github.com/nopara73/WalletWasabi
git fetch nopara73
git checkout branchname
git pull
```

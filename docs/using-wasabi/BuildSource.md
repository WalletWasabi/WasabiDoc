---
{
  "title": "Build from source code",
  "description": "A step by step guide on how to build Wasabi from source code. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Build from source code

[[toc]]

## Introduction

You can compile the source code in order to get the most recent commits by the developers.
This enables you to try out features or fixes that are not yet released.
This can be the main repository master branch for those changes that should be in the next release, or developer branches for cutting edge features.
Be aware that these branches might be unstable and can include bugs that lead to a loss of funds, so use with caution and on [testnet](/using-wasabi/Testnet.md).

## Get The Requirements

1. Install [Git](https://git-scm.com/downloads)
2. Install [.NET ${dotnetVersion} SDK](https://dotnet.microsoft.com/download) for "Build apps"

	:::tip Optional for privacy
	You can disable .NET's telemetry, which is sending some usage information to Microsoft, by typing:

	`export DOTNET_CLI_TELEMETRY_OPTOUT=1` on Linux and macOS.

	`setx DOTNET_CLI_TELEMETRY_OPTOUT 1` to disable it permanently on Windows.
	:::

## Get Wasabi

Clone Wasabi repository:

```sh
git clone https://github.com/WalletWasabi/WalletWasabi.git
cd WalletWasabi/WalletWasabi.Fluent.Desktop
```

## Run Wasabi

Build and run the Wasabi client application from the `WalletWasabi.Fluent.Desktop` folder:

```sh
dotnet run
```

## Update Wasabi

```sh
git pull
```


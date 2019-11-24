---
{
  "title": "Build from source code",
  "description": "A step by step guide on how to build Wasabi from source code. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Build from source code

## Get The Requirements

1. Install [Git](https://git-scm.com/downloads)
2. Install [.NET Core 3.0 SDK](https://www.microsoft.com/net/download) for "Building Apps" (Note, optionally you can disable .NET's telemetry by typing on Linux and OSX: `export DOTNET_CLI_TELEMETRY_OPTOUT=1` or on Windows `set DOTNET_CLI_TELEMETRY_OPTOUT=1`.)
  
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

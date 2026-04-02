---
{
  "title": "Scheme Scripting",
  "description": "A detailed explanation about the Scheme Scripting used in Wasabi Wallet, enabling automation. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Scheme Scripting language

[[toc]]

## What it is

The scripting language is an experimental feature that makes Wasabi programmable, queryable, and extensible.
It allows to executes commands and scripts, and enables automation.

## How to use it

As it is an experimental feature, it needs to be enabled in the config file:

```json
{ // only relevant parts are shown
"MaxDaysInMempool": 30,
"ExperimentalFeatures": ["scripting"],
"ConfigVersion": 4

}
```

### GUI

Once _scripting_ is enabled in the config file, `Scripting` will be available via the searchbar.
Which opens a dialog to executes commands and scripts.

### Command line 
When building from source, the feature can be used with the command line.
The `JsonRpcServerEnabled` needs to be enabled in the config file.
Navigate to the `Contrib/CLI` directory and execute the desired commands.

Example:

#### Open all wallets and display their names
`$ ./wcli.sh query '(map wallet-name (map open-wallet (wallets)))'`


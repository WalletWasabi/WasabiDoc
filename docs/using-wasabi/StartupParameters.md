---
{
  "title": "Starting Wasabi with parameters",
  "description": "A guide on starting Wasabi with parameters, using the command line interface. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Starting Wasabi with parameters

[[toc]]

## Available commands

It is possible to start Wasabi with specific parameters.
The parameters override the configurations in the configuration file.

When entering the commands on the command line, they are capital letter insensitive.

The parameters work for both the GUI and the [Daemon](/using-wasabi/Daemon.md).

> Help about the options is available when using the command line by adding `--help` to the executable: _wassabeed --help_ or _dotnet run -- --help_ when building from source.

### Config file configurations

All configuration options available via the `Config.json` file are also available as command line arguments:

| Config File | Command Line | Environment variable |
|---------|--------|----------------------|
| ""Network": "TestNet" | --network=testnet | WASABI-NETWORK=testnet |
| "MainNetBackendUri": "https://api.wasabiwallet.io/" | --mainnetbackenduri="https://api.wasabiwallet.io/" | WASABI-MAINNETBACKENDURI="https://api.wasabiwallet.io/"|
| "TestNetClearnetBackendUri": "https://api.wasabiwallet.co/" | --testnetbackenduri="https://api.wasabiwallet.co/" | WASABI-TESTNETBACKENDURI="https://api.wasabiwallet.co/" |
| "RegTestBackendUri": "http://localhost:37127/" | --regtestbackenduri="http://localhost:37127/" | WASABI-REGTESTBACKENDURI="http://localhost:37127/" |
| ""UseTor": ""true" | --usetor=true | WASABI-USETOR=true |
| "TerminateTorOnExit": ""false" | --terminatetoronexit=false | WASABI-TERMINATETORONEXIT=false |
| "TorBridges": "[TorBridge]" | --torbridges="[TorBridge]" | WASABI-TORBRIDGES="[TorBridge]" |
| "DownloadNewVersion": true | --downloadnewversion=true | WASABI-DOWNLOADNEWVERSION=true |
| "StartLocalBitcoinCoreOnStartup": false | --startlocalbitcoincoreonstartup=false | WASABI-STARTLOCALBITCOINCOREONSTARTUP=false |
| "StopLocalBitcoinCoreOnShutdown": true | --stoplocalbitcoincoreonshutdown=true | WASABI-STOPLOCALBITCOINCOREONSHUTDOWN=true |
| "LocalBitcoinCoreDataDir": "/home/UserName/.bitcoin" | --localbitcoincoredatadir="/home/UserName/.bitcoin" | WASABI-LOCALBITCOINCOREDATADIR="/home/UserName/.bitcoin" |
| "MainNetBitcoinP2pEndPoint": "127.0.0.1:8333" | --mainnetbitcoinp2pendpoint="127.0.0.1:8333" | WASABI-MAINNETBITCOINP2PENDPOINT="127.0.0.1:8333" |
| "TestNetBitcoinP2pEndPoint": "127.0.0.1:18333" | --testnetbitcoinp2pendpoint="127.0.0.1:18333" | WASABI-TESTNETBITCOINP2PENDPOINT="127.0.0.1:18333" |
| "RegTestBitcoinP2pEndPoint": "127.0.0.1:18444" | --regtestbitcoinp2pendpoint="127.0.0.1:18444" | WASABI-REGTESTBITCOINP2PENDPOINT="127.0.0.1:18444" |
| "JsonRpcServerEnabled": "true" | --jsonrpcserverenabled=true | WASABI-JSONRPCSERVERENABLED=true |
| "JsonRpcUser": "" | --jsonrpcuser="" | WASABI-JSONRPCUSER="" |
| "JsonRpcPassword": "" | --jsonrpcpassword="" | WASABI-JSONRPCPASSWORD="" |
| "JsonRpcServerPrefixes":["http://127.0.0.1:37128/", "http://localhost:37128/"] | --jsonrpcserverprefixes=["http://127.0.0.1:37128/", "http://localhost:37128/"] | WASABI-JSONRPCSERVERPREFIXES=["http://127.0.0.1:37128/", "http://localhost:37128/"] |
| "DustThreshold": "0.00005" | --dustthreshold=0.00005 | WASABI-DUSTTHRESHOLD=0.00005 |
| "EnableGpu": true | --enablegpu=true | WASABI-ENABLEGPU=true |
| "CoordinatorIdentifier": "CoinJoinCoordinatorIdentifier" | --coordinatoridentifier="coinjoincoordinatoridentifier" | WASABI-COORDINATORIDENTIFIER="coinjoincoordinatoridentifier" |

### Non-Config file configurations

There are a few special switches that are not present in the `Config.json` file and are only available using the command line:

| Switch | Command Line | Environment variable |
|-------|-------------|---------------------|
| Ignore P2P transactions | --blockonly=true | WASABI-BLOCKONLY=true |
| The level of detail used during logging | --loglevel=trace | WASABI-LOGLEVEL=trace |
| The path to the directory used during runtime | --datadir="$HOME/temp/wasabi-1" | WASABI-DATADIR="$HOME/temp/wasabi-1" |
| Open wallet "WalletName" | --wallet=WalletName | WASABI--WALLET=WalletName |
| Expose the RPC as onion service | --rpconionenabled=true | WASABI-RPCONIONENABLED=true |
| Tor will listen to this SOCKS5 port | --torsocksport=35000 | WASABI-TORSOCKSPORT=35000 |
| Tor will listen to this control port | --torcontrolport=35001 | WASABI-TORCONTROLPORT=35001 |

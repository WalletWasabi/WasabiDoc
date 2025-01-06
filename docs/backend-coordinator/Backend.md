---
{
  "title": "Backend",
  "description": "Insert description"
}
---

# Backend

[[toc]]


The Wasabi backend creates and serves the block filters to the Wasabi clients that use these to synchronize their wallet.

The filters Wasabi uses are custom filters (not the same block filters bitcoind creates), as they are native segwit v0 and native segwit v1 only.

The bitcoin node, used for the backend, can be pruned.

## How to run a Backend

- Dependencies:
Same (dotnet) dependencies as the Wasabi client + bitcoind (can be Bitcoin Core or Knots).

### Manually

A backend can be run in the following way:

- Clone the Wasabi repository

```
git clone --depth=1 --single-branch --branch=master https://github.com/WalletWasabi/WalletWasabi.git
```

- Navigate to the Backend directory

```
cd WalletWasabi/WalletWasabi.Backend
```

Start 
- Run the Backend to create the backend data directory
``` 
dotnet run
```

The data directory is now created in ~/.walletwasabi/backend.

The config needs to be edited for the Wasabi backend to communicate to bitcoind.

Edit the following line in the backend `Config.json` file:
```
"BitcoinRpcConnectionString": "user:password",
```

Enter the bitcoin RPC username and password.
Or specify the cookie file.

Save the changes.
Now run bitcoind and the Wasabi backend.
It will start generating the filters.

### Using nix

The backend can be run using nix.
This will download and install all Wasabi dependencies (not bitcoind).

Nix needs to be installed, then execute `nix build` in the WalletWasabi root directory.

Alternatively `nix build .#all` can be run, which will build and run the tests.

After running nix build a directory is created called `result`, this contains: bin, lib, deploy.
bin contains executables, inlcuding WalletWasabi.Backend and should be run to start the backend.

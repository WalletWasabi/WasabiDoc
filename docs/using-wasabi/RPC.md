---
{
  "title": "RPC Interface",
  "description": "A step by step guide on how to use the Wasabi remote procedure call interface. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wasabi Remote Procedure Call Interface

Wasabi Wallet provides an RPC interface to interact with the wallet programmatically.
The RPC server is listening by default on port 37128.

[[toc]]

## Limitations

The RPC server does NOT support batch requests or TLS communications (because it is [not supported on Linux and on Mac](https://github.com/dotnet/corefx/issues/14691)).
Requests are served in order one-by-one in series (no parallel processing).
It is intentionally limited to serve only one whitelisted local address and it is disabled by default.

The more user friendly command line interface `wcli` can be found [here](https://github.com/zksnacks/wasabiscripts).

## Configure RPC

The RPC server has to be configured and enabled.
This is done in the `Config.json` file and the relevant settings are:

```
JsonRpcServerEnabled: [true | false] (default: false)
JsonRpcServerPrefixes: [an array of string with prefixes]
	(default: [	"http://127.0.0.1:37128/", "http://localhost:37128/"])
```

The RPC server can be configured to allow `Anonymous` access or `Basic authentication` just by editing:

```
JsonRpcUser: [username] (default: empty)
JsonRpcPassword: [userpassword] (default: empty)
```

By default both `JsonRpcUser` and `JsonRpcPassword` are empty `""`, which means that `Anonymous` requests are allowed.
On the other hand, if `JsonRpcUser` and `JsonRpcPassword` are not empty it means that the requester has to provide the right credentials, otherwise he will get a http status code 401 (Unauthorized).

It is recommended to install the `jq` [command line json processor](https://stedolan.github.io/jq/) with `sudo apt-get install jq`, and then adding `| jq` at the end of every RPC command to have a structured output.

Then start Wasabi Wallet and load the wallet you want to use.
Open a new terminal and use the following RPC commands to interact with your wallet, instead of the GUI.

## Available methods

The current version handles the following methods: `getstatus`, `createwallet`, `listcoins`, `listunspentcoins`, `getwalletinfo`, `getnewaddress`, `send`, `broadcast`, `gethistory`, `listkeys`, `startcoinjoin`, `stopcoinjoin` and `stop`.

For certain methods, the RPC call may not require the password whereas a similar action in the GUI does require it. 
This difference is because the RPC call can use the clear text wallet file, which does not require the password to access. 
For example, the GUI requires a password to open a wallet (and access certain wallet information), because it uses different logic, such as start coinjoining immediately.

For wallet-specific calls, the wallet name should be specified in the URL path.
Example:

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"getwalletinfo"}' http://127.0.0.1:37128/WalletName | jq
```

The methods can be used as follows:

### getstatus

Returns information useful to understand Wasabi and its synchronization status.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"getstatus"}' http://127.0.0.1:37128/ | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": {
    "torStatus": "Running",
    "backendStatus": "Connected",
    "bestBlockchainHeight": "1517613",
    "bestBlockchainHash": "0000000000000064db138798b6b789910bc7f29546a1ff506734dc7bb5780b28",
    "filtersCount": 689039,
    "filtersLeft": 0,
    "network": "TestNet",
    "exchangeRate": 7822.24,
    "peers": [
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:20.0452963+00:00",
        "endpoint": "[::ffff:178.128.20.150]:18333",
        "userAgent": "/Satoshi:0.17.1(bitcore)/"
      },
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:40.5267439+00:00",
        "endpoint": "[::ffff:142.93.231.134]:18333",
        "userAgent": "/Satoshi:0.17.0/"
      },
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:35.6408702+00:00",
        "endpoint": "[::ffff:47.74.4.44]:18884",
        "userAgent": "/Satoshi:0.13.2/"
      },
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:44.371711+00:00",
        "endpoint": "[fd87:d87e:eb43:7081:2a4e:edaa:f8bb:10d0]:18333",
        "userAgent": "/Satoshi:0.16.2/"
      },
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:05.6071169+00:00",
        "endpoint": "[::ffff:153.126.145.243]:18333",
        "userAgent": "/Satoshi:0.15.1/"
      },
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:35.3028356+00:00",
        "endpoint": "[::ffff:46.4.171.125]:18333",
        "userAgent": "/Satoshi:0.16.0/"
      },
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:36.1277937+00:00",
        "endpoint": "[::ffff:52.213.124.148]:18333",
        "userAgent": "/Satoshi:0.17.1/"
      },
      {
        "isConnected": true,
        "lastSeen": "2019-05-20T19:35:35.6409197+00:00",
        "endpoint": "[::ffff:35.241.203.98]:18333",
        "userAgent": "/Satoshi:0.15.2/"
      }
    ]
  },
  "id": "1"
}
```

### createwallet

Returns the twelve recovery words of the freshly generated wallet.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"createwallet","params":["WalletName", "UserPassword"]}' http://127.0.0.1:37128/ | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": "jazz garment survey smart cricket child pizza reform physical alien envelope lesson",
  "id": "1"
}
```

In case we try to generate a wallet with an already existing name it will return:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Wallet name is already taken."
  },
  "id": "1"
}
```

In case we try to generate a wallet with a reserved wallet name it will return:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Invalid wallet name."
  },
  "id": "1"
}
```

In case we try to generate a wallet with a too long password it will return:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Password is too long."
  },
  "id": "1"
}
```

### listcoins

Returns the list of previously spent and currently unspent coins (confirmed and unconfirmed).

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listcoins"}' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "txid": "88d3e86b215ccbb0136da156fdc75548c3f8e3edd5a5d8aacb2c04d4cbf45987",
      "index": 0,
      "amount": 38478,
      "anonymitySet": 1,
      "confirmed": true,
      "confirmations": 1428,
      "keyPath": "86'/1'/0'/1/0",
      "address": "tb1pf6u35naersjgmzw5szxxkrz47ugl4jdkj2x7n2fcqzmfpzm366wq0dxxv2"
    },
    {
      "txid": "a4f495cbf64f6e1942627954443c8edcf2b14fa6bea53219431c24ccb7f61707",
      "index": 0,
      "amount": 54626,
      "anonymitySet": 1,
      "confirmed": true,
      "confirmations": 29800,
      "keyPath": "84'/1'/0'/0/0",
      "address": "tb1qg7y2xzmy5unyxem8utytwqmh837n30t83jy3z2",
      "spentBy": "95159c33459921cb5cc01364231f36bd6c82c025a057eb150346b37a8b2186cb"
    },
    {
      "txid": "cb4dda1d53e23dd63aba0e7ce6876014a9c8c361026b9835316b338d172802e4",
      "index": 54,
      "amount": 8192,
      "anonymitySet": 1,
      "confirmed": true,
      "confirmations": 2638,
      "keyPath": "84'/1'/0'/1/0",
      "address": "tb1q3qt7a8aw5edjhawmg5964hk6jl7hzmd0wpavme",
      "spentBy": "8094b2d88df19a4cc3b09705935ed63f06736594d65d5cc8e663ac23054ed9a3"
    },
  ],
  "id": "1"
}
```

In case there is no wallet open it will return:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "There is no wallet loaded."
  },
  "id": "1"
}
```

### listunspentcoins

Returns the list of confirmed and unconfirmed coins that are unspent.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listunspentcoins"}' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "txid": "7958defd85bb4f34dc66b3323eaa2f4fbdbece35f5e1b2d7b49b461ddc2066ec",
      "index": 0,
      "amount": 109859,
      "anonymitySet": 1,
      "confirmed": true,
      "confirmations": 6,
      "label": "kyced-exchange",
      "keyPath": "84'/0'/0'/0/616",
      "address": "tb1qgcng6v7wt03t80x6gh7s2x4rawg9zhenzrek4y"
    },
    {
      "txid": "06482d847623e096394ecfae58e86e075b7761da493e6eee45a6f2f9c8909582",
      "index": 0,
      "amount": 2994272,
      "anonymitySet": 9,
      "confirmed": true,
      "confirmations": 1,
      "label": "",
      "keyPath": "84'/0'/0'/1/79",
      "address": "tb1qgfcv3pgj6tvzc5g73l7tps58q30zx8qk3y35uu"
    },
    {
      "txid": "aaddc190fe0c2612559b28f9a4a6f4e78906e1794545badccd2fc318257fe2c4",
      "index": 0,
      "amount": 195218,
      "anonymitySet": 1,
      "confirmed": true,
      "confirmations": 245,
      "label": "Maria, Andrew",
      "keyPath": "84'/0'/0'/0/623",
      "address": "tb1q2dgj9u3ggjg08hvvhf3l4m3u3ncpdxud8m0yqu"
    }
  ],
  "id": "1"
}
```

In case there is no wallet open it will return:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "There is no wallet loaded."
  },
  "id": "1"
}
```

### getwalletinfo

Returns information about the current loaded wallet.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"getwalletinfo"}' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": {
    "walletName": "WalletName",
    "walletFile": "/home/user/.walletwasabi/client/Wallets/WalletName.json",
    "State": "Started",
    "extendedAccountPublicKey": "tpubDCd1v6acjNY3uUqAtBGC6oBTGrCBWphMvkWjAqM2SFZahZb91JUTXZeZqxzscezR16XHkwi1723qo94EKgR75aoFaahnaHiiLP2JrrTh2Rk",
    "extendedAccountZpub": "vpub5YarnXR6ijVdw6G5mGhrUhf5bnodeCDJYtszFVW7LL3vr5HyRmJF8zfTZWzv6LjLPukmeR11ebWhLPLVVRjqbfyknJZdiwRWCyJcKeDdsC8",
    "accountKeyPath": "m/84'/0'/0'",
    "masterKeyFingerprint": "323ec8d9",
    "balance": 0
  },
  "id": "1"
}
```

In case there is no wallet open it will return:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "There is no wallet loaded."
  },
  "id": "1"
}
```

### getnewaddress

Creates an address and returns detailed information about it.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"getnewaddress","params":["Daniel, Alice"]}' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": {
    "address": "tb1qdskc4y529ayqkqrddknnhdjqwnqc9wzl8940pn",
    "keyPath": "84'/0'/0'/0/30",
    "label": ["Alice", "Daniel"],
    "publicKey": "0263ea6712e56277bcb07b14b61c30bae2267ec10e0bbf7a024d2c6a0634d6e634",
    "p2wpkh": "00146c2d8a928a2f480b006d6da73bb64074c182b85f"
  },
  "id": "1"
}
```

In case there is no wallet open it will return:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "There is no wallet loaded."
  },
  "id": "1"
}
```

In case an empty label is provided:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Parameter cannot be empty. (Parameter 'label')"
  },
  "id": "1"
}
```

### send

Builds and broadcasts a transaction.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"send", "params": { "payments":[ {"sendto": "tb1qgvnht40a08gumw32kp05hs8mny954hp2snhxcz", "amount": 15000, "label": "David" }, {"sendto":"tb1qpyhfrpys6skr2mmnc35p3dp7zlv9ew4k0gn7qm", "amount": 86200, "label": "Michael"} ], "coins":[{"transactionid":"ab83d9d0b2a9873b8ab0dc48b618098f3e7fbd807e27a10f789e9bc330ca89f7", "index":0}], "feeTarget":2, "password": "UserPassword" }}' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc":"2.0",
  "result": {
    "txid":"c493bf3d9e0279968bf677f0b3661f8f67823b6d7524b9c8a278701d0fb357a5",
    "tx":"0100000000010121e11e8682d93ec842eb41f7271e8922b31591cdbb8b54cdda680cf1e0f65e8c0000000000ffffffff0247590000000000001600143cc0c9d8649532ad77fe0ac5032c1c9ad9529109983a00000000000016001497ff0a7a7ab2078d379e21aade978b6c1bdcba480247304402206bdbf36d0be8062e69b22441ed496ce6b5d639663bd4e580d11b71e34d79c6760220375219a8eb695f15a992b502ff4b639ea809547a3b7f0596cf9a69c1ae1d0df60121033e8670324ec33f15dcb17f346c1927ee3b717070596e397eb00020899c9c913300000000"
  }
}
```

The fees for the transaction will be added on top of the sum of the outputs' amounts.
If you have three outputs with 0.4, 0.3 and 0.3 BTC, the amount of BTC in the inputs must be at least 0.4+0.3+0.3 + mining fees.

You can add `subtractFee: true` to one of the request's payments to change this behaviour.
Now the mining fee will be subtracted from the output in which `subtractFee` was set to `true` so the input amounts summed up can be exactly the output amounts summed up.
`( 0.4 - (mining fee) ) + 0.3 + 0.3`
With this you can send the max amount of the coin, by setting the same value of the input coins for the output address.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"send", "params": { "payments":[ {"sendto": "tb1qgvnht40a08gumw32kp05hs8mny954hp2snhxcz", "amount": 15000, "label": "David", "subtractFee": true }, {"sendto":"tb1qpyhfrpys6skr2mmnc35p3dp7zlv9ew4k0gn7qm", "amount": 86200, "label": "Michael"} ], "coins":[{"transactionid":"ab83d9d0b2a9873b8ab0dc48b618098f3e7fbd807e27a10f789e9bc330ca89f7", "index":0}], "feeTarget":2, "password": "UserPassword" }}' http://127.0.0.1:37128/WalletName | jq
```

In case of error, it is reported in the json's error object:

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"send", "params": { "payments": [{ "sendto": "tb1qnmfmkylkd548bbbcd9115b322891e27f741eb42c83ed982861ee121", "amount": 2015663, "label": "Mr. Who" }], "coins":[{"transactionid":"c68dacd548bbbcd9115b38ed982861ee121c5ef6e0f1022891e27f741eb42c83", "index":0}], "feeTarget": 2, "password": "UserPassword" }}' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc":"2.0",
  "error":{
    "code":-32603,
    "message":"Needed: 0.02015663 BTC, got only: 0.001 BTC."
  },
  "id":"1"
}
```

**Note**: error codes are generic and not Wasabi specific.

### build

Builds a transaction.
It is similar to the send method, except that it will not automatically broadcast the transaction.
So it is also possible to send to many and to subtract the fee.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"build", "params": { "payments":[ {"sendto": "tb1qgjgy9k7q32rcvdjsp3nhq0x8saqcvyahhy8up2", "amount": 15000, "label": "David" }, ], "coins":[{"transactionid":"cdfda1d9839e71e82ca539a4f60e947b1cdfbeecb198616e1daa5c43e2e6fbb3", "index":0}], "feeTarget":2, "password": "UserPassword" }}' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": "01000000000101b3fbe6e2435caa1d6e6198b1ecbedf1c7b940ef6a439a52ce8719e83d9a1fdcd0000000000fdffffff02cfc40300000000002251203ad2f2cf18af791235fbc634333e30becbf7a3d566f9b2cbf36960d68d6e95f5983a000000000000160014449042dbc08a878636500c67703cc787418613b70247304402206cf8fd02465b77b189cb752c15e8baf69c5de7a1e1c9b27380227fc21b55ffa7022059533d0046e6a6b58bc6ff4be297d02773651849e6ba40f2dec31a98b9fa7863012103d626df6a18ed29d4c7e80199f7f183bd4949f6c8073463c81f3802b57f9546d000000000",
  "id": "1"
}
```

The result is the transaction hex, waiting to be broadcast.

### broadcast

Broadcasts a transaction.
Enter the transaction hex in the _params_ field.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"broadcast", "params":["020000000001021cb46e8537e18398c382d0d5622ad9e475245cd789e31fb2de285c802e7b56e50100000000fefffffffe0fa22998e2dd1e4d66b09bf7e253d201f7e0b88098973bfd5e6c5ac426398d0000000000feffffff02c315100000000000160014b60bfb6774881b531d70228fb36a5fd60bd36c6ca07a0300000000001600145d576a81f460e7a1ed254fe9bfff075ab3bc45650247304402206b6d7d282b796920bf1742ca996733866321e5b491cd4a50749b9f62192f635202200f7d5a2105da3361f41810868526545c1b01160e6381ab34c56956df2995bd2c012102549fa9f712caffdf63da7d077e6a26dc3d01ca275312e9f64d1d9accf949d2bc0247304402206afcb357fa31aa5d9d241b1365492b85f058f8029ba348ff7ffd2ee15bb972fe022064818c8ab49ce649a4bb37d645d933c5860b1d5a6916fe267f3fb29e6bafca10012102a80b143904f60ede946ba9a44f29df12b7fb16f6ae3dc93a728d6a00ef658e62ad2d2500"]}' http://127.0.0.1:37128/ | jq
```

```json
{
  "jsonrpc": "2.0",
  "result": {
    "txid": "7cb3c78e10a4730f157589e348ea12b29d3d638826a31f77baccc82e6047de25"
  },
  "id": "1"
}

```

### gethistory

Returns the list of all transactions sent and received.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"gethistory"}' http:/127.0.0.1:37128/WalletName | jq
```

```json
  "jsonrpc": "2.0",
  "result": [
    {
      "datetime": "2019-10-01T12:31:57+00:00",
      "height": 597871,
      "amount": -2110090,
      "label": "David",
      "tx": "680d8940145f53cf2a0c24b27ba0bb53fbd639011eba3d23c9d53123ddae5f32"
      "islikelycoinjoin": "false"
    },
    {
      "datetime": "2019-10-04T17:00:15+00:00",
      "height": 597872,
      "amount": -2120000,
      "label": "Pablo",
      "tx": "e5e4486ad2c9fc6f3c262c4c64fa5fbcc607aa301182d45848a6692c5a0d0fc0"
      "islikelycoinjoin": "true"
    },
    {
      "datetime": "2019-09-22T11:59:32+00:00",
      "height": 5965600,
      "amount": 44480000,
      "label": "kyed-exchange",
      "tx": "6a2e99298dbbd201230a99e62ea584d7f63f62ad1de7166f24eb2e24867f6faf"
      "islikelycoinjoin": "false"
    },
```

### listkeys

Returns the list of all the generated keys.

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listkeys"}' http://127.0.0.1:37128/WalletName | jq
```

```json
  "jsonrpc": "2.0",
  "result": [
    {
      "fullKeyPath": "84'/0'/0'/0/1",
      "internal": false,
      "keyState": 1,
      "label": "Adam",
      "p2wpkhScript": "0 09f4ef9a012844a875222fb08fba86219d181b63",
      "pubkey": "03d02d5985dd48880edccc992b6d77584e7b68ad9b099b8e33d60a703ac0cbded7",
      "pubKeyHash": "09f4ef9a012844a875222fb08fba86219d181b63"
    },
    {
      "fullKeyPath": "84'/0'/0'/0/2",
      "internal": false,
      "keyState": 1,
      "label": "Valeria",
      "p2wpkhScript": "0 cceac198896736d15281b499dea4d49687d2ccf5",
      "pubkey": "0203741debe056d1513940f36d0b16a49185c1780ac8f5b91e713d5a66fbc84025",
      "pubKeyHash": "cceac198896736d15281b499dea4d49687d2ccf5"
    },
    {
      "fullKeyPath": "84'/0'/0'/1/2",
      "internal": true,
      "keyState": 1,
      "label": "Bernardo",
      "p2wpkhScript": "0 7242d77e2da9d3474190e465ed50f6b30b3cf2e9",
      "pubkey": "03f31132f80ebdf480ad2aaf15631e9b643734ab78701012ba621b113c23ecab26",
      "pubKeyHash": "7242d77e2da9d3474190e465ed50f6b30b3cf2e9"
    }
  ],
  "id": "1"
}
```

This call can be adapted to query certain keys too.

#### All unused keys

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listkeys"}' http://127.0.0.1:37128/WalletName | jq '.result[] | select(.keyState == 0)'
```

#### All unused keys for change

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listkeys"}' http://127.0.0.1:37128/WalletName | jq '.result[] | select(.keyState == 0 and .internal == true)'
```

#### Unused keys generated by the user

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listkeys"}' http://127.0.0.1:37128/WalletName | jq '.result[] | select(.keyState == 0 and .internal == false and .label != "")'
```

#### All already used keys

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listkeys"}' http://127.0.0.1:37128/WalletName | jq '.result[] | select(.keyState == 2)'
```

#### All unused locked keys (reserved for coinjoins)

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"listkeys"}' http://127.0.0.1:37128/WalletName | jq '.result[] | select(.keyState == 1 and .internal == true)'
```

### startcoinjoin

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"startcoinjoin", "params":["UserPassword", "True", "True"]}' http://127.0.0.1:37128/WalletName | jq
{
  "jsonrpc": "2.0",
  "id": "1"
}
```

The first parameter is the wallet password, the second parameter is `stopWhenAllMixed`, and the third one is`overridePlebStop`.

### stopcoinjoin

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"stopcoinjoin"}' http://127.0.0.1:37128/WalletName | jq
{
  "jsonrpc": "2.0",
  "id": "1"
}
```

### stop

Stops and exits Wasabi.

```bash
curl -s --data-binary '{"jsonrpc":"2.0", "method":"stop"}' http://127.0.0.1:37128/ | jq
```

------

## Errors

### Method not found

```bash
curl -s --data-binary '{"jsonrpc":"2.0","id":"1","method":"howknows"}' http://127.0.0.1:37128/ | jq
```

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32601,
    "message": "'howknows' method not found."
  },
  "id": "1"
}
```

### Parse error
```bash
curl -s --data-binary '{"jsonrpc":"2.0" []}' http://127.0.0.1:37128/ | jq
```

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error"
  }
}
```

### Mismatching parameters

```bash
curl -s --data-binary '{"jsonrpc":"2.0", "method": "getnewaddress", "params": { "lable": "label with a typo" }, "id":"1" }' http://127.0.0.1:37128/WalletName | jq
```

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "A value for the 'label' is missing."
  },
  "id": "1"
}
```

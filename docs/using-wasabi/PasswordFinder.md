---
{
  "title": "Password Finder",
  "description": "A step by step guide on how to use the Wasabi password finder to fix typos in forgotten passwords. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Password Finder

Wasabi Password Finder is a tool for helping those who made a mistake typing the password during the wallet creation process.
This tool tries to find the password that decrypts the encrypted secret key stored in a given wallet file.

[[toc]]

---

## Limitations

Wasabi Wallet protects the encrypted secret key with the same technology used to protect paper wallets ([BIP 38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki)) and for that reason, it is computationally infeasible to brute force the password using all the possible combinations (assuming a secure password was chosen).

It is important to know that Wasabi Password Finder is not for breaking wallet passwords but for finding errors (typos) in an already known password.

## Usage

### Windows

To use Wasabi's command line tools on Windows you have to use `wassabeed.exe` that is inside your `Program Files\WasabiWallet`.

Open the Command Line (cmd) and execute the following commands:

```
cd C:\Program Files\WasabiWallet
wassabeed.exe findpassword --wallet:WalletName
```

Make sure that the name of your wallet doesn't contain any space character.

### Linux

Use the `wassabee` command.

For example, there is a wallet called `MagicalCryptoWallet.json`, the correct password is `pass`, but the user thinks it is `pasd`.

```
$ wassabee findpassword --wallet:MagicalCryptoWallet
WARNING: This tool will display your password if it finds it. Also, the process status displays your wrong password chars.
         You can cancel this by CTRL+C combination anytime.

Enter password: pasd

[##################################################################################                  ] 82% - ET: 00:00:15.4120338

Completed in 00:01:11.5134519
SUCCESS: Password found: >>> pass <<<

```

### macOS

Open the Terminal and execute the following commands:

```
cd /Applications/Wasabi\ Wallet.app/Contents/MacOs
./wassabee findpassword --wallet:WalletName
```

## Notes

```
$ wassabee help findpassword
usage: findpassword --wallet:WalletName --language:lang --numbers:[TRUE|FALSE] --symbols:[TRUE|FALSE]

Tries to find typing mistakes in the user password by brute forcing it char by char.
eg: ./wassabee findpassword --wallet:MyWalletName --numbers:false --symbols:true

  -w, --wallet=VALUE         The name of the wallet file.
  -s, --secret=VALUE         You can specify an encrypted secret key instead of wallet. Example of encrypted secret:
                               6PYTMDmkxQrSv8TK4761tuKrV8yFwPyZDqjJafcGEiLBHiqBV6WviFxJV4
  -l, --language=VALUE       The charset to use: en, es, it, fr, pt. Default=en.
  -n, --numbers=VALUE        Try passwords with numbers. Default=false.
  -x, --symbols=VALUE        Try passwords with symbols. Default=false.
  -h, --help                 Show Help
```

Note that you can also specify an encrypted secret instead of the wallet file.
This is useful if you lost your password for a Bitcoin wallet, other than Wasabi.

Note that for a 4 characters length password it took more than one minute to find.
Moreover, the process is heavy in CPU and for that reason, it can be a good idea to use the best combination of parameters to reduce the search space.

* __language__ (default: en) specify the charset (characters to search in) to reduce the search space.
For example, while the *Italian* charset is "abcdefghimnopqrstuvxyzABCDEFGHILMNOPQRSTUVXYZ", the *French* charset is "aâàbcçdæeéèëœfghiîïjkmnoôpqrstuùüvwxyÿzAÂÀBCÇDÆEÉÈËŒFGHIÎÏJKMNOÔPQRSTUÙÜVWXYŸZ". 

* __numbers__ (default: false) is for indicating that our password could contain at least one digit. This increases the charset by 10 (from 0 to 9).

* __symbols__ (default: false) is for indicating that our password could contain at least one symbol.
This increases the charset by 34 (|!¡@$¿?_-\"#$/%&()´+*=[]{},;:.^`<>). Note that only the most commonly used characters are available.

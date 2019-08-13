---
{
  "title": "Wallet Generation",
  "description": "A detailed guide about the wallet and key generation in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wallet Generation

With Wasabi you can generate unlimited number of Bitcoin wallets lightning fast, without any cost, and without asking anyone for permission.
Each wallet has separate private and public keys in a unique backup, and they are not at all linked to the other wallets generated on the same computer.
So with several wallets you can conveniently manage the bitcoin of different use cases without worrying about revealing that you control them both.
Here is a step-by-step guide with all the nuances of this important part of Wasabi.

[[toc]]

---

## Generating the wallet step by step

1. The very first time you start Wasabi, it automatically opens in the `Generate Wallet` tab, you can also access this window in the left menu of the `Wallet Manager`.

2. When creating a new wallet, it is important to label it precisely, this is recommended to ensure a proper differentiation at any point in the future.
This label is not shared with anyone, but only stored locally on your computer.

3. Select a long and random password, this encryptes your secrets, so make sure that this is a secure password.
Consider using [diceware wordlists](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases) or a secure password generator to protect your self against brute force attacks.
You will need to provide this password every time you want to spend bitcoin from this wallet.
So choose your trade-offs carefully, either convenience for typing with the wordlist, or security with random special characters.

:::danger Backup your password!
Without the password, you cannot spend your bitcoin, even when you have the recovery words. So tripple check that you have a proper backup!
:::

4. Carefully read the Terms and Conditions, the Privacy Policy and the Legal Issues of zkSnacks Ltd and Wasabi wallet.
These contain the important information to ensure that you properly understand under what condition you use this libre & open source Wallet, as wella s the opt-in CoinJoin service.

5. Click the `Generate` button 

![](/WalletManagerGenerateWallet.png)

6. Now you see the 12 recovery words, encrypted with the password that you have created in step 3.
You can use this mnemonic code together with your password to recover your wallet on a new computer in Wasabi or another [BIP 38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki) copmliant wallet.
If you have only the recovery words, but not the password, then you cannot spend the bitcoin in this wallet.
But whoever has knowledge of both, has full access to all the transaction history and the ability to spend every satoshi locked up by these keys.

:::danger Backup your recovery words!
Without the mnemonic words, you cannot recover your wallet. So tripple check that you have a proper backup! Make sure the backup is separate from the password, which decrypts the recovery words.
:::

![](/WalletManagerRecoveryWords.png)

7. Before you can load the wallet, you need to first make sure that your password is correct.
So type in or paste the password in the text box, and click `Load Wallet`.
If the password is wrong, then the wallet will not load, and thus you cannot send money to the wallet, making sure you don't loose funds because of a bad password backup.
But if the password is correct, then the wallet will load, because now it is clear that you have the right password.

![](/TestPassword.png)

## What password to choose

Wasabi integrates [BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki), which means that the the secrets needed to spend the bitcoin are encrypted on the computer.
When some one only has the encrypted cyphertext, for example anyone who has compromised your operating system and hardware, then no bitcoin can be spend.
You need **both** the encrypted wallet file, and the password in order to reveal the private key which can sign a spending transaction.
This means that the password is your last line of defense against anyone who tries to steal your bitcoin.

:::tip
It is very much recommended to use a long and random password to encrypt your private keys.
:::

If you would use `ilikebitcoin21` to encrypt your private keys, then anyone can quickly guess that this is the password, and thus brute force access to your money.
So it is very important to use long and randomly chosen passwords, for everything really, but especially for your money!

### What not to do

The question how to generate randomness is not at all easy to answer, and this is the holy grail for any Bitcoin wallet.
Here are a couple examples that do it completely wrong, you should not generate your password like this!

1. Do not use publicly known information like your grandma's maiden name and the birthday of your Dog.
`Emma1992` is a really really really bad password, because it can easily be guessed and is very short.

2. Do not use the same password as the one you have used in other places.
You should never use the same password twice, because then if this one secret leaks, both services are compromised.

3. Do not use only letters, or only numbers in your password.
`61813346113` could be even more secure, if there were more than the numbers `0-9` possible, for example the additional 26 letters of the alphabet.

### Best Practice

Don't roll your own crypto.
Meaning you shouldn't try to re-invent the wheel for something as complicated and nuanced as cryptography, and especially in regards to entropy.
These are some of the industry best practices:

1. Roll your own dice might be the easiest way to get high entropy and randomness in numbers.
You can also use the [diceware word-list](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases) to get a something similar to your Bitcoin mnemonic recovery words.
Now you have a verbal password that was generated completely off-line with sufficient randomness.

2. Flip through the pages of a book, stopping after on an arbitrary page to get one word somewhere on this page.
Although this is not as random as a dice-roll, there is still a large set of possible words in a book.
You can further increase the randomness by selecting several different books.

3. Use a well tested software password manager with a cryptographic secure random number generator.
A good password manager will use sufficient entropy to generate a password with letters, numbers and special characters.
Although this is on-line and digital, a good software should still be secure enough for most cases.

## How are the secrets created

Wasabi uses [BIP 38: Password-Protected Private Key](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki)

```
                      +-------------+
                      | Entropy     |
                      +-------------+
  +--------------+          |
  | Word list    +--------->+
  +--------------+          |
                      +-----v-------+
                      | Mnemonics   |
                      +-------------+
                            |
                   +-------->
                   |        |
                   |  +-----v-------+
                   |  | Seed        |
                   |  +-------------+
                   |        |
   +-------------  |        |
   | Password    +-+  +-----v-------+
   +-------------+ |  | Extended Key|
                   |  +-------------+
                   |        |
                   |        |
                   |  +-----v-------+
                   |  | Private key |     ** This step is needed to use bip38
                   |  +-------------+
                   |        |               +-------------+
                   +------->+ <-------------+  Network    |
                            |               +-------------+
                      +-----v-------+
                      | Encrypted   |
                      | secret      |
                      +-------------+
                            |
                            |
                            |
                  +--------------------+
                  | Save encrypted     |
                  | secret+chaincode+  |
                  | Fingerprint+ExtPub |
                  +--------------------+

```

## What do you need to get the keys?

This is needed to backup and recover your wallet:

| Data | Does it need password to recover? |
|----------------------|--------------------------------|
| entropy |  No, this is unencrypted |
| mnemonic | No, this is unencrypted |
| seed |  Yes, it is encrypted |
| extendedkey |  Yes, it is encrypted |
| privatekey+chaincode+fingerprint | Yes, it is encrypted |
| encryptedsecret+chaincode+fingerprint  | Yes, **(this is the Wasabi Backup)** |


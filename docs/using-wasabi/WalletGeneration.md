---
{
  "title": "Wallet Generation",
  "description": "A detailed guide about the wallet and the key generation in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wallet Generation

With Wasabi you can generate an unlimited number of Bitcoin wallets very quickly, without any cost, and without asking anyone for permission.
Each wallet has separate private and public keys in a unique backup, and they are not at all linked to the other wallets generated on the same computer.
So, with several wallets you can conveniently manage your bitcoin for different use cases without worrying about revealing that you control them.

[[toc]]

---

## Generating the wallet step-by-step

1. Launch Wasabi Wallet.
The very first time you run the software the `Generate Wallet` tab will be open automatically, but you can also access it by clicking on `File -> Generate Wallet` in the menu bar.

2. Name the new wallet precisely to ensure a proper differentiation from wallets created in the future.
This label is not shared with anyone, it is only stored locally on your computer.

3. Write a long and random password and _back it up_.
It encrypts your secrets, and you will need it every time you want to spend bitcoin from this wallet, or recover your wallet.<br>
If you are uncertain about how to create a secure password, refer to [Password basics](/using-wasabi/WalletGeneration.md#password-basics) and [Password Best Practices](/using-wasabi/PasswordBestPractices.md) for helpful information.


:::danger Backup your password!
Without the password, you cannot spend your bitcoin or recover your wallet, even if you have the recovery words (Seed phrase).
So, triple-check that you have a proper backup!
:::

4. Click the checkbox after carefully reading the Terms and Conditions, the Privacy Policy and the Legal Issues of zkSNACKs Ltd. and Wasabi Wallet.

5. Click the `Generate` button.

![](/WalletManagerGenerateWallet.png)

6. Write down the 12 recovery words (Seed phrase).
You can use this seed phrase _with_ your password to recover your wallet on a different computer using Wasabi or another [BIP 38](/using-wasabi/BIPs.md#bip-38-password-protected-private-key) compliant wallet.
If you have only the recovery words, but not the password, then you cannot spend the bitcoin nor recover this wallet.
But whoever has both, gets full access to all the transaction history and gains control over every satoshi locked up in this wallet.

:::danger Backup your recovery words!
Without the recovery words (Seed phrase) AND the password, you cannot recover your wallet.
So, triple-check that you have a proper backup!
Make sure the backup of your recovery words is stored separately from the password backup.
:::

![](/WalletManagerRecoveryWords.png)

7. You must test the password before you can load the wallet, to make sure that your backup password is correct.
So, type or paste the password in the text box, and click `Load Wallet`.

![](/TestPassword.png)

## Important info about your wallet password

Wasabi integrates [BIP 38: Password-Protected Private Key](/using-wasabi/BIPs.md#bip-38-password-protected-private-key), which means that the secrets needed to spend the bitcoin are encrypted on the computer.
If someone has compromised your operating system and hardware and he only has the encrypted secrets, then no bitcoin can be spent by him.
You need **both** the encrypted secrets, and the password in order to enable the private key which can sign a spending transaction.
This means that the password is your last line of defense against anyone who tries to steal your bitcoin.

### Password basics

1. Randomness is the single-most important requirement for a strong password, because randomness means that the password has no predictable pattern to it.
This makes it impossible to crack without doing an exhaustive, "brute-force" attack.
2. Assuming a password is constructed randomly, its length has the most impact on its strength.
However, a password that is very long, but not randomly constructed, such as: `thequickbrownfoxjumpedoverthelazydogsback`, or a passage from literature, is certain to be on every serious hacker's guess list.
3. "Entropy" is a term commonly used to define the strength of a random password.
There is a tutorial about how to calculate and evaluate entropy in your password [here](/using-wasabi/PasswordBestPractices.md#how-to-calculate-entropy).

### What not to do

Here are a few examples that do it completely wrong.
You should not generate your password like this:

1. Do not use publicly known information like your grandma's maiden name and the birthday of your dog.
`Emma1992` is a really, really, really bad password, because it can easily be guessed and it is very short.
Here is a list of the worst and [most commonly used passwords](https://en.wikipedia.org/wiki/List_of_the_most_common_passwords#SplashData) in recent years.
Password hackers start with lists like this.

2. Do not use the same password that you have used in other places.
Because if one password is leaked, then other ones are compromised.

3. Do try to use a mix of uppercase and lowercase letters, numbers, and special characters (&$%@ etc.) in your password.

4. Do not take a famous quote, or well-known passage from literature and use it for a password.
It will not fool any serious hacker, even if you throw in substitutions such as: "@" instead of "a", or "$" instead of "s".

## How are the secrets created

Wasabi uses [BIP 38: Password-Protected Private Key](/using-wasabi/BIPs.md#bip-38-password-protected-private-key)

```
                      +--------------+
                      | Entropy      |
                      +--------------+
  +------------+             |
  | Word list  +------------>+
  +------------+             |
                      +------v-------+
                      | Mnemonics    |
                      +--------------+
                             |
                   +--------->
                   |         |
                   |  +------v-------+
                   |  | Seed         |
                   |  +--------------+
                   |         |
   +-----------+   |         |
   | Password  +---+  +------v-------+
   +-----------+   |  | Extended Key |
                   |  +--------------+
                   |         |
                   |         |
                   |  +------v-------+
                   |  | Private key  |     ** This step is needed to use bip38
                   |  +--------------+
                   |         |              +-------------+
                   +-------->+<-------------+  Network    |
                             |              +-------------+
                      +------v-------+
                      | Encrypted    |
                      | secret       |
                      +--------------+
                             |
                             |
                             |
                  +--------------------+
                  | Save encrypted     |
                  | secret+chaincode+  |
                  | Fingerprint+ExtPub |
                  +--------------------+

```

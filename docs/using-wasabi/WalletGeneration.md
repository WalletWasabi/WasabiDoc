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
It encrypts your secrets, and you will need it every time you want to spend bitcoin from this wallet, or recover your wallet.

Consider using [diceware wordlists](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases) or a secure password generator to protect yourself against brute force attacks.

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

7. Test the password before you can load the wallet, to make sure that your backup password is correct.
So, type or paste the password in the text box, and click `Load Wallet`.

![](/TestPassword.png)

## Creating your wallet password

Wasabi integrates [BIP 38: Password-Protected Private Key](/using-wasabi/BIPs.md#bip-38-password-protected-private-key), which means that the secrets needed to spend the bitcoin are encrypted on the computer.
If someone has compromised your operating system and hardware and he only has the encrypted secrets, then no bitcoin can be spent by him.
You need **both** the encrypted secrets, and the password in order to enable the private key which can sign a spending transaction.
This means that the password is your last line of defense against anyone who tries to steal your bitcoin.

:::tip
A good password or passphrase should be both randomly constructed, and long.
It is the last line of defense between an attacker and your bitcoins!
:::

### Password basics

1. Randomness is the single-most important requirement for a strong password, because randomness means that the password has no predictable pattern to it.
This makes it impossible to crack without doing an exhaustive, "brute-force" attack.
2. Assuming a password is constructed randomly, its length has the most impact on its strength.
However, a password that is very long, but not randomly constructed, such as: `thequickbrownfoxjumpedoverthelazydogsback`, or a passage from literature, is certain to be on every serious hacker's guess list.
3. "Entropy" is a term commonly used to define password strength.
It is typically used to describe the combined effect of randomness, length, and number of characters (lower-case/upper-case letters, numbers, and special characters) or words in a password or passphrase.

Calculating entropy allows the strength of different randomly constructed passwords or phrases to be compared.
It also defines the size of the search-space an attacker would need to cover to find the password by trying all possibilities.

If you are interested, there is a deeper dive into [how to calculate and evaluate entropy](/using-wasabi/WalletGeneration.md#advanced-password-analysis) later in this chapter.

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

### Best practices

:::tip
Don't "roll your own" crypto.
:::

You shouldn't try to re-invent the wheel for something as complicated and nuanced as cryptography, and especially in regards to entropy.
These are some of the industry best practices:

1. Rolling dice might be the easiest way to get high entropy and randomness in numbers.
You can also use the [Diceware tutorial](/using-wasabi/WalletGeneration.md#create-strong-passwords-with-diceware) to get something similar to your Bitcoin recovery words (Seed phrase).
Now you have a verbal password that was generated completely off-line with sufficient randomness.

2. Flip through the pages of a book, stopping on an arbitrary page and pick up one word somewhere on that page.
Although this is not as random as a dice-roll, there is still a large set of possible words in a book.
You can further increase the randomness by selecting different books.

3. Use a well tested password manager with a cryptographically secure random number generator.
A good password manager will use sufficient entropy to generate a password with letters, numbers and special characters.
Although this is on-line and digital, a good password manager should still be secure enough for most cases.

### Create Strong Passwords with Diceware

Diceware is a great way to generate secure, random, and long passwords.
It’s a great strategy for your most precious passwords (e.g. the password to your computer, your backups, or your encryption key).
You can even use Diceware to create secure wallets.

To generate a password using Diceware, you just need a good die and some pen and paper.
You can find the diceware list at the [Electronic Frontier Foundation website](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases).
Make sure you are alone and there are no cameras nearby.
For maximum protection, disconnect your computer from the internet (after you save the Diceware list) and cover your webcam.

To start, roll the die five times.
Record the number from each roll using the pen and paper.
You will end up with a five-digit number.
We got `52611`.
Now search on the Diceware list for the five digit number you just created.
Write down the word the number corresponds to, in our case it is `salvo`.
This word by itself is not a good password, it would only take about a thousandth of a second to crack.
Repeat the dice rolling process at least five more times.

After six sets of five rolls, we ended up with `52611` `51631` `63432` `43123` `21641` and `14146`.
This corresponds to the password `salvo rhoda walton mudd croft bride`.

This six-word passphrase, even though easy to remember, is just one of 2.21 x 10^23, or 221 sextillion possible six-word combinations taken from the list of 7776 words.
A computer capable of 1 trillion guesses/second would take, on average, over 3500 years to correctly guess this or any six-word combination of words from the list, if they are chosen randomly.

A 6-word passphrase derived as just discussed has 77 [bits of entropy](/using-wasabi/WalletGeneration.md#advanced-password-analysis).
Best practices for being secure against any adversary [currently recommend](https://blog.securityevaluators.com/understanding-password-complexity-5e0d23643a2a) a minimum of near 80 bits of entropy, so this example phrase barely qualifies.

__Once again:__
Keep a [secure backup](/using-wasabi/ColdWasabi.md#a-list-of-the-more-common-mediums-of-cold-storage-with-some-of-their-weaknesses) of the password, but store it in a separate location from your main 12 recovery words.

### Advanced password analysis

Assuming a password or passphrase is constructed randomly, its level of entropy can be calculated in this way:

- For a password, the total number of possible outcomes given a specific length (L), and number of characters used (C), is:
C raised to the power of L, or C^L.<br>
Example: `jwodnrosqf` is lower-case only (C = 26) and 10 characters long (L = 10). So, 26^10 = 141,000,000,000,000 (141 trillion).
Including upper-case letters in the same password: `jWoDNrosqF` to double (C), results in 52^10 possible passwords = 145,000,000,000,000,000 (145 quadrillion) or : 1.45 x 10^17.<br>

- For a passphrase chosen randomly from a list of words, the total number of possible outcomes given a specific number of words (N) and wordlist size (S) is: S raised to the power of N, or S^N.<br>
Example: The EFF diceware wordlist contains 7776 words.
Randomly selecting 5 words from the list results in 7776^5 possible passphrases = 28,400,000,000,000,000,000 (28.4 quintillion).

#### How Much Entropy Is Needed

Entropy matters because it allows one to compare the required "search-space" of a potential password with the "search-speed" known to be availble to various potential adversaries.
In doing so, it is possible to then know how long it would take an adversary with known resources to attempt every mathematically possible password or passphrase for a given level of entropy.

Edward Snowden revealed in 2013 that the NSA had the ability to guess passwords at a rate of 1 trillion guesses/second.
At that speed of guessing, the password in the above example (28.4 quintillion possibilities) could be guessed in an average of 5 months.

Since there is an equal chance of finding the password in the first half of the total number of guesses as there is in finding it in the second half of the total number, it is accurate to assume that on average, a password will be found in 1/2 of the time required to do an exhaustive search.
That means just over 11 months for the example just mentioned.

Keep in mind that Snowden's information in quite old, in a processing-power context.
We have no way of knowing what is currently possible, so if a State-Level attacker is a part of your assumed threat-model, it would be wise to assume that their tools are now much more powerful.

Even if a given threat-model does not include State-Level attackers, it is still important to consider that there are GPU-based password hacking tools publicly available that are capable of guessing well into the billions of guesses/second.

#### "Bits" of entropy

Password entropy is often discussed and compared in a context of `bits of entropy`.
This is, of course, because computers can only process 0's and 1's, or bits, so everything related is expressed that way.
To calculate bits of entropy, use a [calculator that does logarithms](https://miniwebtool.com/log-base-2-calculator/?num1=7776) and compute log2(x), where x = the total number of possible outcomes for an event.

For example, there are 7776 words on the EFF wordlist commonly used with dice to create passphrases.
Plugging 7776 into the calulator to get log2(7776), it is shown that each word taken randomly from the list contributes 12.92 bits of entropy to the strength of the passphrase.
So, a 5-word passphrase selected randomly from the EFF list will have 5 x 12.92 = 64 bits of entropy.

A password constructed with lower and upper-case letters, numbers, and special characters will have log2(95), or 6.57 bits of entropy for each character that comprises the password.
From that, we can now calculate that, in order to get the same level of entropy with a password instead of a 5-word passphrase, the password must be at least 10 characters in length.

Knowing that, we can calculate that each word contributes log2(2084), or 11 bits of entropy, giving the entire 12 word seed 132 bits of entropy.
At this level of entropy, an NSA-level search of 1 trillion guesses/second would take, on average, 106,398,614,554,997,456,896 years to correctly guess the seed.


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

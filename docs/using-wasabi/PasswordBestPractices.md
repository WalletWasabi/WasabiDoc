---
{
  "title": "Password Best Practices",
  "description": "A detailed guide about how to create and evaluate a strong password. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Password best practices

:::tip
Don't "roll your own" crypto.
:::

You shouldn't try to re-invent the wheel for something as complicated and nuanced as cryptography, and especially in regards to entropy.

These are some of the industry best practices:

[[toc]]

---

## Password basics

1. Randomness is the single-most important requirement for a strong password, because randomness means that the password has no predictable pattern to it.
This makes it impossible to crack without doing an exhaustive, "brute-force" attack.

2. Assuming a password is constructed randomly, its length has the most impact on its strength.
However, a password that is very long, but not randomly constructed, such as: `thequickbrownfoxjumpedoverthelazydogsback`, or a passage from literature, is certain to be on every serious hacker's guess list.

3. "Entropy" is a term commonly used to define the strength of a random password.
There is a tutorial about how to calculate and evaluate entropy in your password [here](/using-wasabi/PasswordBestPractices.md#how-to-calculate-entropy).

## What not to do

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

	:::danger Make a secure password!!
	It is of utmost importance to generate a secure password following [best practices](/using-wasabi/PasswordBestPractices.md).
	:::

## Use Diceware

Rolling dice is an easy and effective way to get high entropy and randomness in a password that can even be memorized.

The Diceware method is a great strategy for your most precious passwords (e.g. the password to your computer, your backups, or your encryption key).
You can even use Diceware to create secure wallets.

To generate a password using Diceware, you just need a high-quality die, a pen, and some paper.
You can find EFF's Diceware list at the [Electronic Frontier Foundation website](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases).
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

A 6-word passphrase derived as just discussed has 77 [bits of entropy](/using-wasabi/PasswordBestPractices.md#how-to-calculate-entropy).
Best practices for being secure against any adversary [currently recommend](https://blog.securityevaluators.com/understanding-password-complexity-5e0d23643a2a) a minimum of near 80 bits of entropy, so this example phrase barely qualifies.

## Use a dictionary

All of the major languages have at least 100,000 words in their dictionaries.
Most have over 300,000 words.
You can take a dictionary in any language that you are comfortable with and create a very strong password by randomly selecting as few as 5 words from it.

The quick, but not technically random way would be to flip open your chosen dictionary to any seemingly random page, close your eyes, and put your fingertip down on the page.
Choose the word nearest your fingertip that has at least 4 letters.
Repeat this process at least 4 more times.

If you'd prefer a truly random way to select pages, and you are using either Windows or Linux, you can easily create random numbers in a selected range (such as the number of pages in your dictionary) from your terminal.

Assuming your dictionary has, for example, 854 pages:

Windows:
Open a Powershell terminal and enter:

```sh
[C:\User>] get-random -maximum 854
```

Linux:
Open a terminal and enter:

```sh
[user@you:~$] echo $(( $RANDOM % 854 ))
```

Each time you repeat this command, your operating system will return a random number somewhere in the range of available pages of your dictionary.

Use this function to pick pages in a truly random manner, and select the needed words in the same way as before.

Both this and the Diceware method are good ways to create a password with sufficient randomness that was generated completely off-line.

## Use an open-source password manager

There are several well-known, cross-platform, and open-source password managers available.
The main requirement besides being open-source, is a cryptographically secure random number generator, with the ability to generate significant entropy while using letters, numbers, and special characters.

It is recommended that you use all available characters when generating a password, and the length of the password should be at least 12 characters for minimally sufficient entropy.

It is up to the user to choose between a password manager that stores its data in the cloud, making it easy to stay in sync across various devices, or one that only stores its data locally.

As it so often happens, more convenience means less security in this decision.

## Password entropy

"Entropy" is a term commonly used to define password strength.
It is typically used to describe the combined effect of randomness, length, and number of characters (lowercase/uppercase letters, numbers, and special characters) or words in a password or passphrase.

Calculating entropy allows the strength of different randomly constructed passwords or phrases to be compared.
It also defines the size of the search-space an attacker would need to cover to find the password by trying all possibilities.

### How to calculate entropy

Assuming a password or passphrase is constructed randomly, its level of entropy can be calculated in this way:

- For a password, the total number of possible outcomes given a specific length (L), and number of characters used (C), is:
C raised to the power of L, or C^L.<br>
Example: `jwodnrosqf` is lowercase only (C = 26) and 10 characters long (L = 10).
So, 26^10 = 141,000,000,000,000 (141 trillion).<br><br>
Including uppercase letters in the same password: `jWoDNrosqF` to double (C), results in 52^10 possible passwords = 145,000,000,000,000,000 (145 quadrillion).<br><br>
Including special characters in the same password: `jW0DNro$qF` raises (C) to 95, resulting in 95^10 possibilities = 59,900,000,000,000,000,000 (59.9 quintillion).

- For a passphrase chosen randomly from a list of words, the total number of possible outcomes given a specific number of words (N) and wordlist size (S) is: S raised to the power of N, or S^N.<br>
Example: The EFF Diceware list contains 7776 words.
Randomly selecting 5 words from the list results in 7776^5 possible passphrases = 28,400,000,000,000,000,000 (28.4 quintillion).

Just knowing how to do these basic calculations allows you to compare the strength of different randomly-generated passwords or phrases.

### "Bits" of entropy

Password entropy is often discussed and compared in a context of `bits of entropy`.
This is, of course, because computers can only process 0's and 1's, or bits, so everything related is expressed that way.
To calculate bits of entropy, use a [calculator that does logarithms](https://miniwebtool.com/log-base-2-calculator/) and compute log2(x), where x = the total number of possible outcomes for an event.

For example, there are 7776 words on the EFF wordlist commonly used with dice to create passphrases.
Plugging 7776 into the calculator to get log2(7776), it is shown that each word taken randomly from the list contributes 12.92 bits of entropy to the strength of the passphrase.
So, a 5-word passphrase selected randomly from the EFF list will have 5 x 12.92 = 64 bits of entropy.

Since the combination of: lowercase + uppercase letters, numbers, and special characters = 95, a password constructed using all of these will have log2(95), or 6.57 bits of entropy for each character that comprises the password.

From that, we can now calculate that, in order to get the same level of entropy with a password instead of a 5-word passphrase, the password must be at least 10 characters in length.

### How much entropy is needed

Entropy matters because it allows one to compare the required `search-space` of a potential password with the `search-speed` known to be available to various potential adversaries.
In doing so, it is possible to then know how long it would take an adversary with known resources to attempt every mathematically possible password or passphrase for a given level of entropy.

Edward Snowden revealed in 2013 that the NSA had the ability to guess passwords at a rate of 1 trillion guesses/second.
At that speed of guessing, the password in the above example (28.4 quintillion possibilities) could be guessed in at most, 11 months.

Since there is an equal chance of finding the password in the first half of the total number of guesses as there is in finding it in the second half of the total number, it is accurate to assume that on average, a password will be found in 1/2 of the time required to do an exhaustive search.
That means just over 5 months for the example just mentioned.

Keep in mind that Snowden's information in quite old, in a processing-power context.
We have no way of knowing what is currently possible, so if a State-Level attacker is a part of your assumed threat-model, it would be wise to assume that their tools are now much more powerful.

Even if a given threat-model does not include State-Level attackers, it is still important to consider that there are GPU-based password hacking tools publicly available that are capable of guessing well into the billions of guesses/second.

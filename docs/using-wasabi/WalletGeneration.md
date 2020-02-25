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

:::danger Make a secure password!!
It is of utmost importance to generate a secure password following [best practices](/using-wasabi/PasswordBestPractices.md).
:::

## Backup

A list of the more common mediums for backups with some of their weaknesses:

### Written on a piece of paper
- Anyone who can see it, can steal it
- Handwriting can be hard to read or completely illegible
- Human error in transcription can cause errors on the end product
- Paper can rot, be torn, burn, or be smoke damaged

### Printed on a piece of paper
- Anyone who can see it, can steal it
- Type of printer - non-laser printers ink can run if the paper gets wet
- Have to trust printer - some have internet connections, wifi, and memory
- Paper can rot, be torn, burn, or be smoke damaged

### On laminated paper
- Anyone who can see it, can steal it
- Lamination is prone to degradation over time, as well as punctures or cuts that could allow moisture to get trapped in the paper and cause deterioration or rotting in some circumstances | store in cool dry place
- Can burn or be smoke damaged
- 'Fireproof' & 'Fire-resistant' boxes can help protect paper in a small house fire but be warned that they can sometimes fall apart in the fire and get wet if the fire is put out with water.
Remember people can just carry out a small safe

### Engraved / etched / ablated / stamped on a piece of metal
- Anyone who can see it, can steal it
- Some metals can deteriorate or corrode, choose a good metal; also store your metal away from direct contact other metals.
- Some metals that are corrosion resistant have low melting points, are extremely expensive, or hard to machine.
- Metals can still deform or melt from heat, destroying any engraved SK.
"Most house fires do not burn hotter than 1,200 degrees Fahrenheit.
This temperature is typically associated with the hottest portion of a home, which is in the roof area.
Homes that burn for longer than 30 minutes or consist of multiple levels sometimes burn at higher temperatures."
You want to pick a metal that won't be destroyed by a fire.
So magnesium, tin, and lead are all out as engraving materials.
- Silver, gold, copper, brass, bronze, nickel, cobalt, would survive the housefire unmelted.
Some Aluminium alloys can survive but you have to have the right ones.
At around 1500° Steel and Nickel should be okay.
Titanium is above the housefire range and so is tungsten, however tungsten rings are known to shatter due to the brittle nature of the very hard metal.

### Stored digitally on a computer
- Computers can crash, making data recovery expensive
- Data can still technically be recovered after a system is abandoned by the user.
In some cases data can be recovered after multiple overwriting attempts and physical destruction (as long as the attacker can get all or most the of pieces) so if you copy files to a new computer and ditch the old one, be careful.
- Can burn or be smoke damaged
- A traditional hard disc drive can have data corrupted by powerful magnetic fields and can physically shatter
- A non-negligible amount of HDDs suffer from factory defects that will cause them to fail unexpectedly during their lifetime
- Accidents can happen that could result in loss of data
- Solid state drives (SSDs) will lose data if unpowered, they may last years before this becomes a problem but it is unwise to store long-term data in unpowered SSDs
- Connecting to the internet is another attack vector and the safety is only as good as the encryption used; I don't know what I would recommend but it wouldn't be BitLocker.
Someone could be trying to break into the computer constantly.
Even with good encryption if the machine or location is compromised the key could be stolen as soon as it is decrypted.
- There are a lot of ongoing threats with computers, from 0-day exploits to firmware exploits and malicious USB cords
- External HDDs are good for storage for a few years at least if stored properly
- If not connected to internet, safety is only as good as the physical protection encryption used; could someone break into the location and copy the data without anyone noticing?

### Stored digitally on CD, floppy disk, laserdisc, or mini-disc
- Plastics break down over time and with exposure to heat, humidity, regular light, all sorts of chemicals, even the oxygen in the air.
This can lead to the loss of your data when stored on a medium made of plastic or written/printed on plastic.
- Can burn or be smoke damaged
- Can be physically damaged, making data recovery expensive or even impossible
- Magnetic media (tapes, floppy disc) can be damaged by magnets
- Data can become difficult to recover if the software and/or hardware to decode is old, don't use proprietary formats

### Stored digitally on a flash drive
- Can break and have to be physically repaired before use
- Rapidly changing magnetic fields (See MRIs) can damage the data stored on flash drives
- Can burn, or be smoke damaged
- Can become corroded from salt water or some atmospheric conditions
- If they break apart, some lighting conditions can cause data corruption (you can also put them back together and often still get the data)
- Different devices are inconsistent.
Even similar devices from the same production batch can be different.
There are large quality differences in drives, but I am assuming you aren't using these for anything but storage.
- There are some fake flash drives that look like they saved the data but you can't get it back later.
- Flash drives are not advised for long term storage; they can be used as one part of a multi-medium-location-format plan.

### A pre-funded physical bitcoin coin (where the manufacturer generates and installs the secret key)
- The medium that the key is on is often paper/plastic which can burn or be smoke damaged
- Trust in the manufacturer themselves, they could copy the key
- Trust in their key generation procedure
- Trust in the operational security of the manufacturer, they could be generating the keys on their everyday computer
- Trust no one is successfully spying on them, electronically, looking through their documents while they are out of town, or with tiny tin foil hat cameras or long range ones
- Trust that the object was not tampered with in delivery
- Trust that no one has tampered with the object since you got it

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

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


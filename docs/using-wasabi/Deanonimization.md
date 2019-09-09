---
{
  "title": "How you can be de-anonymized using Bitcoin",
  "description": "An explanation of the ways a Bitcoin transaction can be linked to someone's real identity. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# How you can be de-anonymized using Bitcoin

Sadly, there are many ways a Bitcoin transaction can be linked to someone's real identity, even by using Wasabi.
True pseudonymity against a resourceful adversary is very difficult to achieve.
Any serious approach to anonymity in Bitcoin requires a total use of encryption and communication tools.
Over the course of just a few months, you could come into contact with hundreds of Bitcoin addresses.
It is often only necessary to associate just one of these addresses to your real identity to de-anonymize you.


[[toc]]

## Revealing your Bitcoin address before it goes into the blockchain could let others track you

As soon as a Bitcoin address is entered into the blockchain, it is publicly recorded in an immutable distributed ledger.
Before that happens, it's likely that only two parties (the recipient and the sender) had knowledge of this address.
If you are making a search for an address that is not in the blockchain, either you are the owner of this address, or someone is requesting a payment from you.
To avoid being tracked in this way, it is important to make all payment requests and other mentions of addresses via encrypted channels:
- Make sure the website you are visiting has HTTPS enabled when you search for Bitcoin addresses.
- Use VPNs and Tor when possible.
You should check addresses with Blockstream Explorer via their [.onion v3 address](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/).
- Encrypt your communications with PGP (emails, files and text) and OTR (chats).


## Possessing a wallet file might be enough proof that you control Bitcoin

A signed message is the only strong proof that you own a Bitcoin address without revealing the private key.
Be careful when signing messages using your Bitcoin keys, though.
Signed messages are a great feature, but they allow anybody to know that you control the Bitcoin address you signed from.
If someone is trying to de-anonymize you, they might be satisfied with a weaker form of proof than a signed message: knowing that you keep records of public addresses is enough evidence for someone to draw the conclusion that you are involved in Bitcoin transactions and the Bitcoin blockchain will point them exactly to which transactions.
All they have to do is search for the address you recorded.
Wasabi encrypts and stores the master private key.
You can safely store your wallet in an external USB drive, a cloud storage service, or even your email account if the private keys are sufficiently encrypted.
But anybody with access to these mediums could estimate what addresses you control and the transactions you make.
To protect yourself, you should encrypt all backups with a second password or PGP.

## Be careful with public spaces

Unless your intention is to receive public donations or payments with full transparency, publishing a Bitcoin address on any public space such as a website or a social network is not a good practice when it comes to privacy.
If you choose to do so, always remember that if you move any funds with this address to one of your other addresses, they will be publicly tainted by the history of your public address.
Additionally, you might also want to be careful not to publish information about your transactions that could allow someone to identify your Bitcoin addresses.

---
{
  "title": "Gaining Privacy with Wasabi Wallet for Bitcoin transactions",
  "description": "An explanation of how Wasabi Wallet is able to give privacy to its users while adding references to the technology behind it. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Gaining privacy with Wasabi Wallet for Bitcoin transactions

![](/InfographicWhyWasabi.png)

## The perceived problem

Bitcoin transactions are somewhat *traceable* and this creates the need for a wallet that specializes in privacy.

> _"What kind of privacy? I'm not sure if I need that."_

When we make traditional financial transactions (Banks, PayPal, etc.), no one but the service provider is able to track our spending habits or account balances.

## Wasabi Wallet

Wasabi Wallet is an *open source*, *non-custodial*, *privacy-focused*, desktop Bitcoin wallet offered by zkSNACKs Ltd.
It differentiates itself from many other wallets for its strong *focus on user privacy*.

Wasabi's goal is to *not only provide the traditional privacy* of our banks but to go even further and *guarantee privacy against Wasabi itself*.
So not even the service provider (zkSNACKs) will be able to track your money.

## The vision for a better Bitcoin

The motivation behind Wasabi is to provide the *strongest privacy for its users* that is technically possible today.

## Technology behind Wasabi

- It has [advanced coin control features](/FAQ/FAQ-UseWasabi.md#coin-control-best-practices) to avoid linking coins from different transactions.
- It has [advanced labeling features](/using-wasabi/Receive.md#the-importance-of-labeling) to tell which entities know about specific coins.
- It's the only [light wallet that doesn't fail against network analysis](/using-wasabi/NetworkLevelPrivacy.md).
- [Tor anonymity network is integrated into the wallet](/FAQ/FAQ-GeneralBitcoinPrivacy.md#how-does-tor-protect-my-network-level-privacy), making it harder to trace your transaction's path.
- It implements [Chaumian CoinJoin](https://github.com/nopara73/ZeroLink/#ii-chaumian-coinjoin) to allow unlinking coins from their past.
- It complies with [Zero Link: The Bitcoin Fungibility Framework](https://github.com/nopara73/ZeroLink/).

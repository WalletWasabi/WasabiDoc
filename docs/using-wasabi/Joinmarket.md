---
{
  "title": "Joinmarket",
  "description": "Details about the Joinmarket mixing technique and implementation. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Joinmarket

[[toc]]

---

## Introduction and History

[Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) is a CoinJoin protocol implemented in a wallet software which requires Bitcoin Core as backend.
Its novel innovation is to introducde incentive structures to encourage users mixing their coins.
One market taker can pay market makers to create a tailor made CoinJoin.
The software consists of several python scripts, has a graphical user interface, and utilizes IRC communication channels.
The initial v0.1.0 release was in December 2015 by [Chris Belcher](https://github.com/chris-belcher), and since then it has gathered steady support by several contributors, most notably [Adam Gibson](https://github.com/AdamISZ).
Joinmarket is an integral part of the Bitcoin privacy infrastructure, and the research and implementation by the contributors is invaluable.

Joinmarket is well [documentated](https://github.com/JoinMarket-Org/joinmarket-clientserver/tree/master/docs) in regards for [installation](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/INSTALL.md), usage of the [command line interface](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/USAGE.md) and [graphical user interface](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/JOINMARKET-QT-GUIDE.md).

## Market Makers

Joinmarket makers are users running the [yield generator script](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/YIELDGENERATOR.md) and offering their coins as potential inputs in a CoinJoin transaction.
These users advertize the total volume of bitcoin they would like to mix [for example a range from 0.1 to 5 bitcoin], as well as the fee they charge for their provided service [for example at least 2000 sats, or 0.02% of the CoinJoin denomination] to a public IRC channel.
The requirement is an always on, stable and relatively high bandwidth internet connection, so to successfully coordinate many mixes.

:::tip Reclaim your privacy & stack sats!
Joinmarket makers get paid to do tailormade CoinJoins with the taker.
:::

## Market Takers

Joinmarket takers are users who coordinate a tailor made CoinJoin, and they pay the makers to provide the liqudity.
Takers analyze the range and fees of offered coins of makers, specify a transaction where the makers coins are part of the input, and the output creates equal value coins.
The number of makers and the value of the outputs is completely up to the taker, it is a tailor made CoinJoin.
Although makers can not deanonymize the input to output link of other makers, the taker knows exactly which maker gets which output.

:::tip Create CoinJoins just how you like them!
Joinmarket takers can coordinate tailormade mixes.
:::

## Join Market + Wasabi







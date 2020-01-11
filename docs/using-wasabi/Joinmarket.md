---
{
  "title": "Joinmarket",
  "description": "Details about the Joinmarket mixing technique and implementation. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Joinmarket

[[toc]]

## Introduction and History

[Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) is a CoinJoin protocol implemented in a wallet software which requires Bitcoin Core as the back end.
Its novel innovation is to introduce incentive structures to encourage users to mix their coins.
One market taker can pay many market makers to create a tailor-made CoinJoin.
The software consists of several python scripts, has a graphical user interface, and utilizes IRC communication channels.
The initial v0.1.0 release was in December 2015 by [Chris Belcher](https://github.com/chris-belcher), and since then it has gathered steady support by several contributors, most notably [Adam Gibson](https://github.com/AdamISZ).
Joinmarket is an integral part of the Bitcoin privacy infrastructure, and the research and implementation by the contributors is invaluable.

Joinmarket is well [documentation](https://github.com/JoinMarket-Org/joinmarket-clientserver/tree/master/docs) in regards for [installation](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/INSTALL.md), usage of the [command line interface](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/USAGE.md) and [graphical user interface](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/JOINMARKET-QT-GUIDE.md).

## Market Makers

Joinmarket makers are users running the [yield generator script](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/YIELDGENERATOR.md) and offering their coins as potential inputs in a CoinJoin transaction.
These users advertise the total volume of bitcoin they would like to mix [for example a range from 0.1 to 5 bitcoin], as well as the fee they charge for their provided service [for example at least 2000 sats, or 0.02% of the CoinJoin denomination] to a public IRC channel.
The requirement is an always on, stable and relatively high bandwidth internet connection, so as to successfully coordinate many mixes.

:::tip Reclaim your privacy & stack sats!
Joinmarket makers get paid to do tailor-made CoinJoins with the taker.
:::

## Market Takers

Joinmarket takers are users who coordinate a tailor-made CoinJoin, and they pay the makers to provide the liquidity.
Takers analyze the range and fees of coins offered by makers, specify a transaction where the makers coins are part of the input, and the output creates equal value coins.
The number of makers and the value of the outputs is completely up to the taker, it is a tailor-made CoinJoin.
Although makers can not connect the input to output link of other makers, the taker knows exactly which maker gets which output.

:::tip Create CoinJoins just how you like them!
Joinmarket takers pay for coordinating tailor-made mixes.
:::

## Joinmarket + Wasabi

The advantage of Joinmarket is that the taker can coordinate tailor-made mixes, and that the maker gets paid to join.
The problem with Joinmarket is that the taker can spy on the makers.
The advantage of Wasabi is that the coordinator cannot spy, and that Wasabi mixes achieve high anonset. 
The problem with Wasabi is that there are standardized equal value output amounts.

:::tip A perfect match!
The problems with Wasabi are the strenght of Joinmarket, and the downsides of Joinmarket are the features of Wasabi!
:::

These two tools can be combined in great effect, thus it is on the long term road-map to implement Joinmarket functionality in Wasabi wallet.
For example such a protocol:

1. With your non-private coins, make at least two rounds of Wasabi ZeroLink CoinJoins.
This means that your pre-mix coins are not tied to the following Joinmarket mixers.

2. With these anonset coins, run the yield generator as a Joinmarket maker for as long as possible, partaking in many mixes with many different takers.
In this step you gain privacy, in that you were part of the initial Wasabi mix.
Further, the mixing fees you earn might be enough to pay at least for the transaction and coordination fees of the whole process.

3. With these Joinmarket coins, make at least two rounds of Wasabi ZeroLink CoinJoins.
This will break the Joinmarket history of these coins, thus nobody knows you were a maker.

4. With these high anonset coins, coordinate a tailor-made CoinJoin as a Joinmarket taker, where you can specify exactly the value you want to actually send.

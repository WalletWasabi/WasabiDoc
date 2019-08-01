# Address Reuse

:::tip
The first rule of Bitcoin privacy: </br>
**never reuse addresses**.
:::

:::warning
The second rule of Bitcoin privacy: </br>
**NEVER REUSE ADDRESSES**.
:::

But not all types of address reuse are equal - there are 6 different ways how there can be address reuse with Wasabi:

[[toc]]

---

## 1. Donations

Many peers post one of their Bitcoin addresses on the internet, and then the same address can be viewed by countless others, not just at the time of publishing, but even years afterwards. 
It is very easy and convenient to have such a donation address, and thus many peers do this.

To register such a donation UTXO for coin join is not only legitimate, but desired. 
If you accept donations to an address, you should be registering these UTXOs together to one coinjoin round. 
Of course block explorers will note it as address reuse in the coinjoin, which is technically correct, but it misleads the observer, because he will think something is wrong. 
You better consolidate your donations into one UTXO instead of many, and you might as well do it in a coinjoin.

**How to improve?** 
To encourage address reuse here, when we are selecting coins to coinjoin, we should intentionally select coins together those are on the same address.

## 2. Coordinator Address

The coordinator address participates in every coinjoin, thus it’s address reuse.
The idea is to be transparent about what a Wasabi coinjoin is and what isn’t, as well as to show the total fee earnings of Wasabi.
Otherwise only blockchain analysis would be able to figure this information out, and it’d be able to do this without a mistake. 
This way anyone can.

**How to improve?**
The idea of coordinator address reuse is transparency. 
We could give up transparency here to confuse less sophisticated observers by creating a new coordinator address for every CJ. 
It’s a different tradeoff, not an improvement.

## 3. Dusting

A while ago someone dusted many Wasabi coinjoin UTXOs, this is also called the [forced address reuse attack](https://en.bitcoin.it/Privacy#Forced_address_reuse).
Here the attacker sends a small amount of bitcoin to an already existing address of a old coin.
The hope is that this dust coin is consolidated with another coin, thus linking the two in a cluster.
This is also address reuse, there’s nothing to do about it, Bitcoin is a push-based system.

**How to improve?**
In response we introduced a default, modifiable dust limit. 
While this mitigates the potential privacy implications, this doesn’t make the address reuse to not appear in block explorers.

## 4. Intentional

Since Wasabi is libre and open source, anyone can modify a fork of Wasabi to make sure the same two addresses are recycled in every coinjoin registration. 
This is someone intentionally deanonymizing himself, such a behavior might have quite dubious motives. 
However there are numerous claims about this being some kind of Sybil attack, which makes no sense in multiple levels. 
One bad actor participating in numerous mixes lowers our anonymity set, but only a bit. 
If there’s 100 participants in a mix and of them one isn’t anonymous it makes no difference. 
Furthermore if I would want to Sybil attack Wasabi I would do it in a way to try to hide the fact that I’m Sybil attacking, or at the very least I wouldn’t make changes to the code to announce that I’m Sybil attacking.

**How to improve?** 
There’s nothing to improve.
Because the CoinJoin output is blinded in the first steps of the ceremony, it cannot be noticed before the output registration phase.
We could refuse the registration of these actors, but then they’d change their addresses, then we’d have to pick them out again, then they’d change their addresses again and so on…
This would also decrease the denial of service protectiosn currently implemented.

## 5. Mixing With Same Wallet File

In order to increase the speed of mixing large amounts, some are running multiple Wasabi instances with the same wallet file. 
In this case one wallet software instance is not aware of the other registering the same coin to a mix and it results in address reuse.
This is not how Wasabi is designed to be used, and such a hack around the proper work flow is always dangerous.

**How to improve?**
We could prevent mixing with the same wallet file, but we have long term plans to fix it. 
In the future we want to prevent opening multiple Wasabi instances altogether. 
But for this we will have to build out multi-wallet monitoring and by extension multiwallet loading so to not take away existing functionality without providing an alternative.

## 6. Wallet State Issue

Finally we arrived to the type of address reuse that was actually a known bug in Wasabi. 
This was happening, because Wasabi sometimes lost unconfirmed transactions, so the wallet wasn’t aware of that an address was used, thus it registered it to a coinjoin.
The unconfirmed tx loss is thought to be eliminated since version 1.1.6, but of course this still happens for those who are using older software versions.
Because only very few users report this bugs there’s no need for forcing everyone to update.
Although rigorous testing by several contributors, we could not reproduce the bug in the v1.1.6 release.

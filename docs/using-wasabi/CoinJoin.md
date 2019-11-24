---
{
  "title": "CoinJoin",
  "description": "A step by step guide on how to do Wasabi CoinJoins. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# CoinJoin

// What are CoinJoins?

[[toc]]

## Doing CoinJoin step-by-step

1. Launch Wasabi, and open your wallet with the coins that you want to join.
Notice that it is not yet possible to CoinJoin from a hardware wallet, the keys must be "hot" on your computer.
Then open the `CoinJoin` tab from the right side menu.

![](/CoinJoin.png)

2. Select coins for joining by clicking the check box in the coin list.
You can select one or more coins, but when several are selected, then they can be linked and clustered by an attacker.
So choose carefully which coins you want others to know belong to the same entity.
You can select red shield coins, which are not private yet, but will gain anonymity set in this round of CoinJoin.
Also you can select green shield coins, who come from a previous round of CoinJoin, so that they gain even more anonymity set.
What is important is that the sum of coins registered have a value larger than the minimum level, which is currently roughly 0.1 bitcoin.

3. Specify anonymity set target.
Wasabi will automatically re-register your coin for the next round until this target is reached.
You can easily toggle between three levels by clicking on the shield.
You can also [change the value](/FAQ/FAQ-UseWasabi.md#how-can-i-change-the-anonset-target) of the three shields in the settings.

![](/CoinJoinAnonsetTargetYellow.png)
![](/CoinJoinAnonsetTargetGreen.png)
![](/CoinJoinAnonsetTargetCheck.png)


4. Enter password and click `Enqueue Selected Coins`.
You only have to enter the password for the first round of mixing, the re-mix directly after is done without a password input.

![](/CoinJoinCoinsBeingCoinJoined.png)

5. Now wait until the protocol is complete, the round continues either as soon as 100 peers have registered their coins, or after two hours since the last round.
From now on there is no more interaction required, so you can leave Wasabi running in the background of your computer.

![](/CoinJoinStatus.png)

6. Eventually the round is successful, and the CoinJoin transaction broadcasted, then you will receive fresh coins with a high anonymity set, as well as non-private change.


## ZeroLink protocol step-by-step


### Input registration

### Connection confirmation

### Signing

### Broadcasting




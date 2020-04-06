---
{
  "title": "Myths about Wasabi",
  "description": "A detailed analysis of myths, fear, uncertainty and doubt that is spread about Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Myths about Wasabi

[[toc]]

---

## Peeling

If a user has a large coin worth more than the equal value output created by a CoinJoin transaction, how should he go about to mix this?

### How Wasabi does it

Wasabi batches both equal value anonset outputs, and change outputs in one transaction.
This creates two distinct types of outputs in a CoinJoin.

- Equal value anonset outputs, which cannot be linked to the corresponding inputs.
Wasabi even creates anonset outputs in multiple denominations, of `0.1, 0.2, 0.4, 0.8 bitcoin` etc, and each of these pools have their own anonymity set value.
- Unequal value non-anonset change, which can potentially be linked to the corresponding inputs.

In Wasabi, one round of CoinJoin has 100 users, there are many different unique values for the inputs, and 100 outputs that have exactly the same value of `0.1 bitcoin [100 anonset]`, as well as other anonset pools, and many unique non-anonset change outputs.
Most users will provide an input coin that is worth much more than `0.1 bitcoin`, for example `1.01 bitcoin`.
This user, will get several output coins back, `0.1 bitcoin [100 anonset]`, `0.2 bitcoin [50 anonset]`, `0.4 bitcoin [30 anonset]` and one unequal change output of `0.305 bitcoin [1 anonset]` which pays the fees.
The three anonset outputs are already somewhat private, as they cannot be linked to the input coin of `1.01 bitcoin`.
However, an outside observer can apply CoinJoin sudoku, which is computationally difficult, and potentially find out that the `0.305 bitcoin` is the change output of the user who registered the input of `1.01 bitcoin`. 
This might become computationally infeasible for some specific cases, but it can be trivial for other cases.

Although `0.7 bitcoin` are now anonymous [even more so with re-mixing], `0.305 bitcoin` are not.
This will clearly be shown in the Wasabi GUI with a <img src="/ShieldRed.png" alt="red" class="shield" /> shield for this coin.
However, if the user now registers the non-private `0.305 bitcoin` in the next round of CoinJoin, he will receive two outputs: `0.1 bitcoin [anonste 100]`, `0.2 bitcoin [anonset 50]`, and no change at all.
These two anonset output coins cannot be linked to the input `0.305 bitcoin`, and thus not to the initial pre-mix `1.01 bitcoin`.

This means, that after only two rounds of CoinJoin, the whole `1.01 bitcoin` is now private, and the post-mix outputs cannot be traced back to the pre-mix input.
Yes, an attacker can find out that the user with `1.01 bitcoin` was part in both of these CoinJoins.
However, he cannot find out which equal value outputs the user received, and thus cannot know if and when the user did further rounds of re-mixes, which increase the privacy a lot.

### How others do it

Contrarily, there are CoinJoin implementation that uses a tx0 model, which has two different types of transactions, a setup transaction, followed by many CoinJoin transactions.

- A setup transaction takes inputs from a single user, and creates many equal value outputs without anonymity set, as well as one change output again without anonymity set.
- A follow up CoinJoin transaction, takes one of the non-private equal value coins in the input, and mixes them with other users, generating equal value anonset outputs.

If one round of CoinJoin has 5 users, then the CoinJoin transaction has 5 outputs, all worth `0.05 bitcoin`.
Most users will have inputs well above this amount, to pick up the example from above again, `1.01 bitcoin`.
This user will create a setup tx0 transaction, which spends the `1.01 bitcoin` in the input, generating 18 outputs worth `0.055 bitcoin`, and one change output worth `0.01 bitcoin`.
All of these coins have anonymity set 1, as they can easily be linked to the `1.01 bitcoin` input.

Now the user registers one of the setup coins worth `0.055 bitcoin` in the input of a CoinJoin, and he receives `0.05 bitcoin [5 anonset]` in the output.
He has to repeat this step for all of the other 17 outputs of the setup tx0 transaction.
This means, after 1 setup transaction and 18 CoinJoin transactions, the user has 18 coins worth `0.05 bitcoin [5 anonset]`, as well as one change coin worth `0.01 bitcoin [1 anonset]`.
And because the user input coin of all these 18 transactions comes from the same tx0 transaction, everyone easily knows without computational complexity, that this one user who had the `1.01 bitcoin` has partaken in all these 18 CoinJoins.
If the user wants to get 100 anonset, as he gets in Wasabi after one round, he has to do 20 CoinJoins for all 18 coins, totalling up to 360 transactions.

Yes, a tx0 model CoinJoin might look pretty, because all the inputs are equal value, and all the outputs are equal value.
However, it does not provide any extra privacy, and comes at a tremendous cost of extra block space and UTXO growth.

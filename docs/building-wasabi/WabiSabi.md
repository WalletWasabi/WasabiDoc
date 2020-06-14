---
{
  "title": "WabiSabi",
  "description": "Details about the WabiSabi protocol for constructing CoinJoin transactions. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# WabiSabi

[[toc]]

---

## WabiSabi by Analogy
[WabiSabi](https://github.com/zkSNACKs/WabiSabi) is a protocol (work in progress) for constructing [CoinJoin](https://bitcointalk.org/index.php?topic=279249.0) transactions with the aid of a centralized coordinator.
It utilizes keyed-verification anonymous credentials, homomorphic value commitments, and zero knowledge proofs to achieve privacy and flexibility.

This writeup attempts to give an intuition for how these different cryptographic building blocks work by using a real world analogy intended for readers who are already familiar with the concept of a CoinJoin.

## Setting
Several Bitcoin users want to build a CoinJoin transaction with each user contributing one or more UTXOs and arbitrarily reallocating their contributed amount, without revealing to the coordinator or to each other any links between their different inputs or the new outputs they want to create.
To facilitate this a coordinator will keep a registry of the separate inputs and outputs, ensuring that a user can only claim the amount of Bitcoin they are entitled to, but without learning about the links between these.
The coordinator will need an office to meet with the users, a seal and some sealing wax, an accurate scale with a large tray, and a blowtorch.
The users will need a number of envelopes, some sand, their own scales for private use, and an some convincing fake moustaches for incognito interactions with the coordinator.
We will assume the weight of the envelope themselves is negligible, or can be easily corrected for, perhaps because they have a standard weight.
If you want to have a better idea of how these components of our analogy map to the actual crypto, skip to the final section, or continue reading in order to build up an intuition first.

## Input Registration
In the privacy of her own home, for every UTXO a user wants to register as an input she weighs out some sand in proportion to the UTXO’s value.
She then divides the sand she measured out into several envelopes as she pleases, and closes them.
With her envelopes prepared, she puts on fake moustache (a different one for each input), so that the coordinator can’t recognize her, and enters the coordinator’s office.
She convinces the coordinator that she can spend the UTXO in question, and places the corresponding envelopes on the scale all at once, laid flat on the tray.
The coordinator confirms that the total weight matches the UTXO value, and if everything adds up, applies the seal to the closed envelopes without handling them more than necessary (so that it can’t guess the weights), as the user observes.
The user can inspect the seal to make sure it matches some pictures, published in advance, in order to be convinced that the coordinator doesn’t use slightly different ones to trace the individual wax seals back to a specific input later.
The user collects the sealed envelopes from the tray and leaves.

## Output registration
After all inputs have been registered, users can now use their envelopes to register output amounts.
For each output a user will put on yet another fake moustache, come into the coordinator’s office, and place an arbitrary combination of envelopes on the scale.
The coordinator checks that the seals are authentic, and then to ensure that the envelopes can’t be used again or weighed individually, they are set on fire using the blowtorch, allowing the sand to spill out onto the tray.
The coordinator adds the requested output with an amount corresponding to weight of the sand on the tray, and the user leaves.

## Signing
When the total weights balance out, the coordinator builds the final CoinJoin transaction with the registered inputs and outputs.
The users go back into the coordinator’s office, once for each input (wearing the appropriate moustache) and after confirming that the output registrations have been included in the proposed transaction they sign for that input.
After everyone has signed, the transaction can be broadcast.

## Cryptographic Counterparts

The cryptographic counterparts in the above analogy are as follows:

- The envelopes are homomorphic value [commitments](https://en.wikipedia.org/wiki/Cryptographic_commitment), specifically Pedersen commitments.
Commitments have two properties, binding, which means that once a value is committed it can’t be changed, and hiding, which means that the value in the commitment is not revealed unless the committer opens the commitment.
Note that in this protocol the commitments aren’t actually opened, instead we only prove statements about the commitment openings in zero knowledge.

- The scale and sand correspond to a [zero knowledge proof system](https://en.wikipedia.org/wiki/Zero-knowledge_proof), allowing the users to convince the coordinator of that the values in the commitments are correct without needing to reveal them (note that the sums appear on the blockchain).

- The wax seals represent [keyed-verification anonymous credentials](https://eprint.iacr.org/2019/1416), which let the coordinator verify that it previously certified a specific value commitment as being a summand in the decomposition of an input amount without being able to link it to the input registration where the credential was issued.

- The fake moustaches represent [Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network)) circuits through which the users to connect to the coordinator as pseudonymous network identities.

- Setting the envelopes on fire is a bit of a looser analogy.
First, it represents serial numbers added to the credentials (another Pedersen commitment in each credential), which must be revealed to prevent double spending.
Secondly, it gives an intuition for the homomorphic property of the value commitments which simplifies proving that the value commitments add up to the correct input and output values without revealing the individual summands.

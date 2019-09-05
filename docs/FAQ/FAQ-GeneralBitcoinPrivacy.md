---
{
  "title": "Bitcoin Privacy FAQ",
  "description": "Frequently asked questions about the nuances of privacy in Bitcoin in general. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# General Bitcoin Privacy

## Why Privacy matters

::::details
### I have nothing to hide, do I still need financial privacy?

What did you say to your spouse in bed last night?
How much money did you earn last month?
What websites have you visited yesterday?

:::tip
It's not that I have nothing to hide, it's that I have nothing to share.
:::

There are many tasks in everyday life that are simply non of your business.
Knowledge you choose not to share with others, things you only tell one individual, actions that you do while nobody is watching.
How much money you earn, and where you spend it, is only your business, and of no concern to most other individuals.
::::

:::details
### How is financial privacy an essential element to fungibility in Bitcoin?

If you can meaningfully distinguish one coin from another, then their fungibility is weak.
If our fungibility is too weak in practice, then we cannot be decentralized: if someone important announces a list of stolen coins they won't accept coins derived from, you must carefully check coins you receive against that list and return the ones that fail.
Everyone gets stuck checking blacklists issued by various authorities because in that world we'd all not like to get stuck with bad coins.
This adds friction and transactional costs and makes Bitcoin less valuable as a money.
:::

:::details
### How is financial privacy is an essential for entrepreneurs?

If you run a business, you cannot effectively set prices if your suppliers and customers can see all your transactions against your will.
You cannot compete effectively if your competition is tracking your sales.
Individually your informational leverage is lost in your private dealings if you don't have privacy over your accounts: if you pay your landlord in Bitcoin without enough privacy in place, your landlord will see when you've received a pay raise and can hit you up for more rent.
:::

:::details
### How is financial privacy essential for personal safety?

If thieves can see your spending, income, and holdings, they can use that information to target and exploit you.
Without privacy malicious parties have more ability to steal your identity, snatch your large purchases off your doorstep, or impersonate businesses you transact with towards you... they can tell exactly how much to try to scam you for.
:::

:::details
### How is financial privacy essential for human dignity?

No one wants the snotty barista at the coffee shop or their nosy neighbors commenting on their income or spending habits.
No one wants their baby-crazy in-laws asking why they're buying contraception (or sex toys).
Your employer has no business knowing what church you donate to.
Only in a perfectly enlightened discrimination free world where no one has undue authority over anyone else could we retain our dignity and make our lawful transactions freely without self-censorship if we don't have privacy.

Most importantly, financial privacy isn't incompatible with things like law enforcement or transparency.
You can always keep records, be ordered (or volunteer) to provide them to whomever, have judges hold against your interest when you can't produce records (as is the case today).
None of this requires globally visible public records.
:::

## The Privacy of Bitcoin

:::details
### How is Bitcoin good in terms of privacy?

Privacy in traditional banking is guaranteed by the institutions that make up the system, such as banks, credit card companies, and governments.
They (try to) ensure that your bank balance stays a secret.
This puts them in a powerful position, where only they have complete oversight as to what is going on.

Instead, in Bitcoin pseudonyms protect your identity.
In the Bitcoin ecosystem, everyone can see the history of every account balance, but they cannot see who controls an account.
All addresses and transactions are recorded in Bitcoin’s publicly distributed database, the blockchain.
The addresses do not have names or IP addresses attached to them, so it is not always possible to know which transaction belongs to which individual.
:::

:::details
### How is Bitcoin bad in terms of privacy?

Bitcoin is by default a transparent system, in which every piece of information is available to the public.
As such, every Bitcoin user requires some level of protection.
Anyone with substantial wealth in Bitcoin would not want to advertise their funds to every person they transact with, for obvious reasons.
But every time you spend just a tiny portion of your Bitcoin wallet, you reveal your wealth to the other party.
Doing that on the internet is like flashing large stacks of cash in a dark back alley, so obviously it’s not advisable!
A criminal might see how much you have and decide to come after it.
Distributing your wealth between several wallets and using a different address for each transaction is a common practice that prevents others from knowing how much Bitcoin you have.

Each Bitcoin transaction contains at least one input (where the Bitcoin are from) and at least one output (where the Bitcoin are being sent).
This means that once a single address is known, there is a trail to follow the Bitcoin.

Another characteristic of Bitcoin transactions is that they always need to match the previous transaction.
If you previously received 1 bitcoin, but you only want to spend 0.4 Bitcoin, you will first need to make a transaction where 1 bitcoin will leave your account.
0.4 bitcoin will go as payment, then 0.6 bitcoin will return to you as change.
Your Bitcoin wallet will handle this process automatically, but it is important to understand the principle in order to use it anonymously.

The owner of the original Bitcoin doesn’t know what you did with the money, but they can see the amounts involved.
They can see two transactions on your account: one for 0.4 bitcoin and one for 0.6 bitcoin.
They cannot see which was the purchase and which is the “change,” but it’s a 50% guess.
The next time you make a transaction, it’s a 25% guess, and so on.

This is why making lots of transactions, increases your anonymity in the Bitcoin network (as long as you [don't reuse addresses](/using-wasabi/AddressReuse.md)!).

Similarly, if you receive 0.5 bitcoin but want to spend 1 bitcoin, you need to own additional Bitcoin addresses with a combined value of at least 0.5 bitcoin in them.
Again it’s a 50% guess, but now you have one extra publicly visible Bitcoin address.
Having publicly visible Bitcoin addresses could make it easier to find out your identity.
:::

:::details
### What financial privacy does Bitcoin promise?

Globally visible public records in finance are completely unheard-of.
They are undesirable and arguably intolerable.
The Bitcoin whitepaper made a promise of how we could get around the visibility of the ledger with pseudonymous addresses, but the ecosystem has broken that promise in a bunch of places and we ought to fix it.
Bitcoin could have coded your name or IP address into every transaction.
It didn't.
The whitepaper even has a section on privacy.
It's incorrect to say that Bitcoin isn't focused on privacy.
Sufficient privacy is an essential prerequisite for a viable digital currency.
:::

::::details
### Why is it important to run a full node?

:::tip
not your node ~ not your rules
:::

When you download and install [bitcoind](https://github.com/bitcoin/bitcoin) you define the precise rules of your monetary system.
Then you call out to other nodes on the internet, and only connect to the peers who have agreed to play by the same rules.
All those who break your own rules, you simply disconnect and ignore.
Your full node defines, verifies and enforces the sound money you use to store your value.
::::

::::details
### How does a full node protect my privacy?

When you run your own full node, then on your local computer you can verify exactly if the bitcoin you receive are actually valid.
When you do not verify this for yourself, then you need to ask another trusted third party how much money you have.
Regardless how you ask this other server, there is now more metadata available to potentially link your coins to your identity.
There are bad ways to communicate, like querying a block explorer over clearnet, and good ways to communicate, like using BIP 158 block filters over tor.
But regardless, running your own full node means that you don't need to communicate with anyone about your specific coins, and this is strictly better.
::::

:::details
### Why is it important to use a new address for every payment?

Addresses being used more than once is very damaging to privacy because that links together more blockchain transactions with proof that they were created by the same entity.
The most private and secure way to use bitcoin is to send a brand new address to each person who pays you.
After the received coins have been spent the address should never be used again.
Also, a brand new bitcoin address should be demanded when sending bitcoin.
Wasabi has a user interface which discourages address reuse, by removing from the GUI ana address which has received a coin.

It has been argued that the phrase "bitcoin address" was a bad name for this object because it implies it can be reused like an email address.
A better name would be something like "bitcoin invoice".

Bitcoin isn't anonymous but pseudonymous, and the pseudonyms are bitcoin addresses.
Avoiding address reuse is like throwing away a pseudonym after its been used.
:::


## The Privacy of Tor

:::details
### How does Tor protect my network-level privacy?

When you make a Bitcoin transaction, you are essentially creating a message on your phone or computer and sending it to the Bitcoin network.
Someone operating a large number of nodes in the Bitcoin network might be able to match some of your transactions to your IP address, then deanonymize your stack of bitcoin.

It is relatively easy to avoid this on a computer by relaying all transactions through the Tor network.
Wasabi routes all traffic via Tor’s SOCKS5 proxy, by default.

To maintain your anonymity, use the Tor Browser or the TAILS operating system.
Route everything through Tor by default.

It is also good practice to route your chats through the Tor network.
You can also configure many cloud storage providers in this way.
:::

## Further Questions

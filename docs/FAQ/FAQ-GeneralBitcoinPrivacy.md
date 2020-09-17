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

There are many tasks in everyday life that are simply none of your business.
Knowledge you choose not to share with others, things you only tell one individual, actions that you do while nobody is watching.
How much money you earn, and where you spend it, is only your business, and of no concern to most other individuals.
::::

:::details
### How is financial privacy an essential element to fungibility in Bitcoin?

Fungibility is the possibility for an individual receiving bitcoin to safely ignore any connection between this bitcoin and any particular individual or use case it interacted with in the past.
If you can meaningfully distinguish one coin from another, then their fungibility is weak.
If Bitcoin fungibility is too weak in practice, then it cannot be decentralized: if someone important announces a list of stolen coins they won't accept coins derived from, you must carefully check coins you receive against that list and return the ones that fail.
Everyone gets stuck checking blacklists issued by various authorities because in that world we'd all not like to get stuck with bad coins.
This adds friction and transactional costs and makes Bitcoin less valuable as money.
:::

:::details
### How is financial privacy essential for entrepreneurs?

If you run a business, you cannot effectively set prices if your suppliers and customers can see all your transactions against your will.
You cannot compete effectively if your competition is tracking your sales.
Individually your informational leverage is lost in your private dealings if you don't have privacy over your accounts: if you pay your landlord in Bitcoin without enough privacy in place, your landlord will see when you've received a pay raise and can hit you up for more rent.
:::

:::details
### How is financial privacy essential for personal safety?

If thieves can see your income, holdings, and spending, they can use this information to target and exploit you.
Without privacy, malicious parties have more ability to steal your identity, snatch your large purchases off your doorstep, or impersonate businesses you transact with towards you.
They can tell exactly how much to try to scam you for.
If thieves don't know how much bitcoin you have, then they don't know if you are worth the effort to attack.
:::

:::details
### How is financial privacy essential for human dignity?

No one wants the snotty barista at the coffee shop or their nosy neighbors commenting on their income or spending habits.
No one wants their baby-crazy in-laws asking why they're buying contraception (or sex toys).
Your employer has no business knowing what church you donate to.
Only in a perfectly enlightened discrimination-free world where no one has undue authority over anyone else could we retain our dignity and make our lawful transactions freely without self-censorship if we don't have privacy.

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
But every time you spend just a tiny portion of your bitcoin, you might reveal your wealth to the other party.
Doing that on the internet is like flashing large stacks of cash in a dark back alley, so obviously it’s not advisable!
A criminal might see how much you have and decide to come after it.
Distributing your wealth between several wallets and using a different address for each transaction is a common practice that prevents others from knowing how much bitcoin you have.

Each Bitcoin transaction contains at least one input (where the Bitcoin are from) and at least one output (where the Bitcoin are being sent).
This means that once a single address is known, there is a trail to follow the Bitcoin.

Another characteristic of Bitcoin transactions is that the value of the input always needs to match the value of the previous transaction output.
If you previously received 1 bitcoin, and you want to spend 0.4 bitcoin, the transaction needs to spend the whole 1 bitcoin.
0.4 bitcoin will go as payment, then 0.6 bitcoin will return to you as change.
Your Bitcoin wallet will handle this process automatically, but it is important to understand the principle in order to use it anonymously.

The owner of the original bitcoin doesn't know whom you paid the money or what you did with it, but they can see the amounts and addresses involved.
They can see two outputs of the transaction: one worth 0.4 bitcoin and one worth 0.6 bitcoin.
They might not know for certain which is the purchase and which is the change, but they can apply heuristics to estimate it.

Similarly, if you receive 0.5 bitcoin but want to spend 1 bitcoin, you need to own additional coins with a combined value of at least 0.5 bitcoin in them.
When spending two coins within one transaction, it is often assumed that both of these coins belong to the same entity, this is the common input ownership heuristic.
:::

::::details
### Why is it important to run a full node?

:::tip
Not your node ~ not your rules
:::

When you download and install [bitcoind](https://github.com/bitcoin/bitcoin), you define the precise rules of your monetary system.
Then you call out to other nodes and only connect to the peers who have agreed to play by the same rules.
All those who break your own rules, you simply disconnect and ignore.
Your full node defines, verifies and enforces the sound money you use to store your value.
::::

:::details
### How does a full node protect my privacy?

When you run your own full node, then on your local computer you can verify exactly if the bitcoin you receive are actually valid.
When you do not verify this for yourself, then you need to ask another trusted third party how much money you have.
Regardless how you ask this other server, there is now more metadata available to potentially link your coins to your identity.
There are bad ways to communicate, like querying a block explorer over clearnet, and good ways to communicate, like using [BIP 158](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) block filters over Tor.
But regardless, running your own full node means that you don't need to communicate with anyone about your specific coins and this is strictly better.
:::

:::details
### How can I set up a full node?

Starting with v1.1.11 release, Wasabi comes [pre-installed with bitcoind](/using-wasabi/BitcoinFullNode.md) from [Bitcoin Knots](https://bitcoinknots.org/) and it can be started on the same desktop or laptop computer with just one click.
This is likely the most convenient solution for Wasabikas.

There are also other node implementations different from Bitcoin Knots, such as [Bitcoin Core](https://bitcoincore.org/) or [Libbitcoin](https://github.com/libbitcoin/libbitcoin-node), that could be used as well.

Instead, if you prefer to use some dedicated hardware solutions, these are some of the most reliable projects:
- [Raspiblitz](https://github.com/rootzoll/raspiblitz), a DIY project based on the Raspberry platform
- [RaspiBolt](https://stadicus.github.io/RaspiBolt/), another Raspberry DIY node
- [Nodl](https://www.nodl.it/), works out of the box and runs on a powerful Rockchip CPU
- [myNode](https://mynodebtc.com/), a DIY project with optional paid versions
- [Casa](https://keys.casa/lightning-bitcoin-node/), works out of the box on the Raspberry platform
:::

:::details
### Why is it important to use a new address for every payment?

Addresses being used more than once is very damaging to privacy because that links together more blockchain transactions with proof that they were created by the same entity.
The most private and secure way to use bitcoin is to send a brand new address to each person who pays you.
After an address has received a coin, it should never be used again.
Also, a brand new bitcoin address should be demanded from the recipient when sending bitcoin.
Wasabi has a user interface which discourages address reuse by removing from the GUI addresses which have received a coin.

It has been argued that the phrase "bitcoin address" was a bad name for this object because it implies it can be reused like an email address.
A better name would be something like "bitcoin invoice".

Bitcoin isn't anonymous but pseudonymous, and the pseudonyms are bitcoin addresses.
Avoiding address reuse is like throwing away a pseudonym after it has been used.
:::

:::details
### What is a CoinJoin Sudoku?

CoinJoin Sudoku is a type of intra-transaction analysis attack on CoinJoin transactions that aims to link inputs and outputs together based on their combinatorial sums.
You can read more about CoinJoin Sudoku [here](https://www.coinjoinsudoku.com/advisory/).
:::


## The Privacy of Tor

:::details
### How does Tor protect my network-level privacy?

When you make a Bitcoin transaction, you are essentially creating a message on your phone or computer and sending it to the Bitcoin network.
Someone operating a large number of nodes on the Bitcoin network might be able to match some of your transactions to your IP address, then deanonymize your stack of bitcoin.

It is relatively easy to avoid this on a computer by relaying all transactions through the Tor network.
Wasabi routes all traffic via Tor’s SOCKS5 proxy, by default.

To maintain your anonymity, use the Tor Browser or the TAILS operating system.
Route everything through Tor by default.

It is also good practice to route your chats through the Tor network.
You can also configure many cloud storage providers in this way.
:::

:::details
### Why does Tor process keep running after closing Wasabi Wallet?

There are two main reasons: user experience and privacy.

If a user closes Wasabi and then starts it again, he's already connected to Tor and he does not need to build a new Tor circuit.
This means that Wasabi's startup will be much faster, because the Tor circuit is already established.

Regarding the privacy, this is done to avoid time correlation attacks when using Wasabi Wallet.
In fact, if a user creates a new Tor circuit every time he opens Wasabi Wallet, he would send a series of information to the Bitcoin network, which could allow a correlation and deanonymization of the user himself.
:::

::::details
### My country/ISP is blocking/censoring Tor, how can I use Wasabi with Tor bridges?

Tor bridges, also called Tor bridge relays, are alternative entry points to the Tor network that are not all listed publicly.
If you suspect your access to the Tor network is being blocked, you may want to use bridges.
You can read more on [The Tor Project's dedicated page about bridges](https://www.torproject.org/docs/bridges).

:::tip
If you are using Tor Browser Bundle it is extremely easy to configure it to use bridges.
Configuring Tor bridges running in a daemon mode is more difficult and takes more time.
:::

**Steps with Tor Browser:**

1. Download and install the [Tor Browser](https://www.torproject.org/)
2. Change the `Settings` of the Tor Browser to use one of the bridges or pluggable transports
3. Leave Tor Browser running after connecting with a bridge
4. Change the `Settings` of Wasabi Wallet and edit `TorSocks5 Endpoint` from `127.0.0.1:9050` to `127.0.0.1:9150`
5. Restart Wasabi

After this, Wasabi will connect to Tor using the Tor Browser's connection via a random bridge.

:::warning
To make use of Tor bridges on Wasabi, you must always keep Tor Browser open.
:::

**Steps with Tor Daemon on Linux:**

:::tip
These are commands for Debian.
Feel free to edit these commands according to your distribution.
:::

1. Get [Tor Bridges](https://bridges.torproject.org/bridges)
2. Install Tor daemon with `sudo apt-get install tor`
3. Install OBFS4 support (needed to connect to bridges), by editing your `/etc/apt/sources.list` and adding this line:
```sh
# Tor Bridges
deb http://deb.torproject.org/torproject.org obfs4proxy main
```
4. Update package list with `sudo apt-get update` and install OBFS4 with `sudo apt-get install obfs4proxy`
5. Configure Tor by editing your `/etc/tor/torrc` file and adding these lines:
```sh
UseBridges 1

# Do not use the following bridges, instead use the ones you get in Step 1!
Bridge 88.153.28.205:443 AD16D468305F6CEBA66CFBE37B7721C05282065D
Bridge 37.218.246.193:19924 B56436117274B0DA0BA8EDDF78679ECFF4C0E2AA
Bridge 194.132.209.92:26848 14FF5F91FE1CD6C1EDAB2D41A897B70FCC5DFAFA

ServerTransportPlugin obfs4 exec /usr/bin/obfs4proxy
```
6. Restart Tor with `sudo service tor restart` and check logs with `sudo tail -f /var/log/tor/log` to verify that everything is working properly

::::

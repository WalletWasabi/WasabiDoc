# General Bitcoin Privacy
- I have nothing to hide, do I still need financial privacy?
- Why is it important to use a new address for every payment?
- Why is it important for my privacy to run a full node?

## The Privacy of Bitcoin

### How is Bitcoin good in terms of privacy?

Privacy in traditional banking is guaranteed by the institutions that make up the system, such as banks, credit card companies, and governments.
They (try to) ensure that your bank balance stays a secret.
This puts them in a powerful position, where only they have complete oversight as to what is going on.

Instead, in Bitcoin pseudonyms protect your identity.
In the Bitcoin ecosystem, everyone can see the history of every account balance, but they cannot see who controls an account.
All addresses and transactions are recorded in Bitcoin’s publicly distributed database, the blockchain.
The addresses do not have names or IP addresses attached to them, so it is not always possible to know which transaction belongs to which individual.

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

## The Privacy of Tor

### How does Tor protect my network-level privacy? 

When you make a Bitcoin transaction, you are essentially creating a message on your phone or computer and sending it to the Bitcoin network.
Someone operating a large number of nodes in the Bitcoin network might be able to match some of your transactions to your IP address, then deanonymize your stack of bitcoin.

It is relatively easy to avoid this on a computer by relaying all transactions through the Tor network.
Wasabi routes all traffic via Tor’s SOCKS5 proxy, by default.

To maintain your anonymity, use the Tor Browser or the TAILS operating system.
Route everything through Tor by default.

It is also good practice to route your chats through the Tor network.
You can also configure many cloud storage providers in this way.

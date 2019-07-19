FAQ for [Wasabi Wallet](https://github.com/zkSNACKs/WalletWasabi)
By [6102bitcoin](https://twitter.com/6102bitcoin)

Note: Many of these Q&A have been copied from real users, see footer for acknowledgements. 

# Pre-Install

### I want to purchase something anonymously. Does coinjoin happen at the time of payment?

No, you should coinjoin at some point before that. After the coinjoin, your coins will be at new addresses which are unlinked from the previous addresses. From there you can make transactions at any time you wish, as with any other regular bitcoin transaction.  
Note that for a coinjoin to happen there needs to be a sufficient number of participants. This might take a few hours during which you need to leave Wasabi open on your computer, so the wallet can sign the transaction when the required number of participants is reached. 

### Will my coins be fully private after mixing with Wasabi?

This depends on how you handle your outputs after the coinjoin. There are some ways how you can unintentionally undo the mixing by being careless. For example, if you make a 1.8 BTC transaction into Wasabi, do the coinjoin, and then make one single outgoing transaction of 1.8 BTC, a third party observer can reasonably assume that both transactions belong to one single entity, due to both amounts being virtually the same even though if they have been through a coinjoin. In this scenario, Wasabi will barely make any improvement to your privacy, although it will still have a protective effect against unsophisticated observers.  

Another deanonymizing scenario happens when you combine mixed outputs with unmixed ones when sending: a third party will be able to make the connection between them as belonging to the same sender.

The practice of being careful with your post-mix outputs is commonly facilitated through coin control, which is the default way of interacting with the wallet. Find out more about coin control it [here](https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2). 

# Post-Mix

### What do I do now that I have mixed my coins?

Wasabi is a very good wallet, and it is advisable to manage your funds using the wallet once you have mixed. If you are going to send your funds to another wallet (say, a mobile wallet for convenience) then there are a couple of important things to consider.
- Unless the wallet has coin control you will merge your coins which damages privacy. 
- Unless the wallet connects to your own full node you will leak information to the server supplying the blocks/filters.
As a result, there are few wallets that are suitable. 

### Will I have issues spending my mixed coins? 

Not at the moment, if Wasabi and other CoinJoin tools are used by enough people it is likely that this will never be an issue. See this more [comprehensive answer](https://www.reddit.com/r/WasabiWallet/comments/bggy03/will_coinjoined_coins_be_blacklisted_in_the_future/ell04nn?utm_source=share&utm_medium=web2x). 


# Errors

### 'Backend will not connect'

All Wasabi network traffic goes via Tor. When Tor has issues Wasabi has issues. If the Tor Hidden Service directory goes down (which it does occasionally) Wasabi now has a fall-back back to the coordinator server without a hidden service (but still over Tor). 

**It is easier to wait and try again some hours later.**

Alternatively, you can turn off Tor in the Settings. Note that in this case you are still private, **except when you coinjoin** and **when you broadcast a transaction**. In the first case, the coordinator would know the links between your inputs and outputs based on your IP address. In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.

# Acknowledgements

Thanks to the developers of Wasabi - you make it possible for me to spend bitcoin without having to worry about other people knowing how little bitcoin I can afford.

Thanks to the following people for the help that they have provided to Wasabi users on the Wasabi subreddit which I have condensed into this FAQ.
- [iLoveStableCoins](https://www.reddit.com/user/iLoveStableCoins) a regular poster to the Wasabi Wallet subreddit. (May now be an employee of [zkSNACKs!](https://old.reddit.com/r/WasabiWallet/comments/b08yme/could_chainalysis_be_participating_with_49_inputs/eifa5fe/))
- Adam Ficsor ([@nopara73](https://twitter.com/nopara73))
- Lucas Ontivero ([@lontivero](https://twitter.com/lontivero/))
- Max Hillebrand ([@hillebrandmax](https://twitter.com/HillebrandMax/)) for fixes made in the [original repo](https://github.com/6102bitcoin/FAQ/blob/master/wasabi.md).

Please issue pull requests if you have suggestions.

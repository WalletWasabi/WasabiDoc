---
{
  "title": "Ten Commandments",
  "description": "The very basics of Wasabi that enable you to use this powerful tool properly. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# The Ten Commandments

[[toc]]

---

## 1. Wasabi is for defense only

## 2. Verify the integrity of your software

Wasabi Wallet is an open-source project with many contributors.
When downloading the wallet, you may choose to go to the official site or to the official GitHub to build from source.
Wasabi is available at our official site:

Clear-net: [wasabiwallet.io](https://wasabiwallet.io)

Tor hidden service: [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion)

Please [check signatures](/using-wasabi/InstallPackage.md) after completing downloads.
The concern here is that you may accidentally fall for a phishing attempt and be on a malicious site downloading a malicious piece of software.

Alternatively, as Wasabi is [libre and open source software](https://github.com/zkSNACKs/WalletWasabi), you may also [build the code from source](/using-wasabi/BuildSource.md).

## 3. Keep your mnemonic words and password safely stored (BOTH!)

When creating a new wallet - write down your mnemonic seed AND password and store them safely.
Wasabi is a fully non-custodial wallet, which means that you should always be in possession of your keys, and this means safely storing a backup in case your computer is lost or the wallet crashes.
Often times when things go wrong, users panic.
If you have done this step, there is very little you have to worry about.
Also, under no circumstance should you reveal the password or mnemonic words to anyone that asks for them.
Lastly, understand that if you lose your password, it becomes much harder (if not impossible) to restore your wallet - so store both safely!

## 4. Practice good labeling AND try to never reuse addresses

Each time you receive coins, you will be asked to create a label.
This label is only for you and is stored exclusively on your device.
Wasabi has strong coin control features, and as you continue to use the wallet, you can see how known are your coins, which is possible only if you practice good labeling.

You can read more about labels [here](/using-wasabi/Receive.md#the-importance-of-labeling).

Lastly, if you must use an exchange, try to ask for a new deposit address on each deposit.
In the same way that you should never receive Bitcoin to the same address twice, you should try to avoiding sending Bitcoin to the same address twice.

## 5. CoinJoin whenever possible and be patient!

The process of engaging in a CoinJoin is as simple as selecting a coin or coins to en-queue and entering your password.
Once coins have en-queued for CoinJoining, you must keep your computer online and awake, as the coin join process is interactive.
As a coin join is really just many users (up to 100) en-queuing coins at the same time, it may take up to two hours for you to successfully participate in a CoinJoin and clean outputs should only be spent once the coin join transaction is confirmed.
For context, Wasabi currently does 18 CoinJoins a day, or roughly one every 1 hour and 20 minutes.
As more users join the network, the frequency of these CoinJoins will go up.
Lastly, if you are able and patient enough to re-mix your coins, please do so.

## 6. Use separate profiles

When you put a label on an address, or ask a question on Reddit or send coins to a merchant be wary of the profile you choose.
If you can create a dummy Reddit account as opposed to an account where you may have revealed your personal details elsewhere - use that.
When you spend coins from your wallet, consider what you might want to keep private from the merchant or individual you are interacting with.
In the same way that reusing addresses hurts your privacy, consolidating all of your online behavior into one profile can do the same.

## 7. Never merge mixed and unmixed coins, and avoid large merges of mixed coins!

The first part should be somewhat intuitive - coins in your wallet have shields (red, yellow, green and green +) and it is at a minimum important to never send non-red coins (coins with anonset > 1) with red coins (coins with anonset == 1).
By merging your tainted coins with your mixed coins, you undo the privacy benefits of CoinJoins!
Further, when sending mixed coins to your cold storage, make sure to send your coins in parallel.
Don't merge all of your Bitcoin (more than 0.8 BTC) in a single transaction!
Instead, take your time and send coins to multiple addresses belong to your cold storage over a few hours or days.
If you are sending coins to an exchange, you can get the same result by requesting a brand new address to receive coins.

For more information, please see the discussions [here](https://www.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/).

## 8. Avoid 3rd party servers & Buy Bitcoin P2P

Wasabi is designed to allow users to see their balances without any concern that a third party would be able to link your addresses to you, or to each other.
Very few wallets can say this, but if you proceed to enter your address into a block explorer, or use a third party wallet with your keys or your hardware device - all bets are off.
So if you want to check on the status of a transaction or the balance on an address, you should first:

(a) Check your Wasabi Wallet

(b) Check through your full node

(c) Use a block explorer through Tor (e.g. [Blockstream Esplora Tor](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/))

If you think that forensics companies are not paying big money to block explorers for user information, you are wrong.
Even something as simple as leaving a comment on a YouTube video or Reddit post will be scraped.

More importantly, if you are using a hardware wallet, an easy way to undo the previous times you plugged in the wallet through non-private applications is to create a new account on the device with a passphrase.
For example, for ledger nano s, you can do this in the device `home screen > security > passphrase`.
Remember Commandment 2!

Remember, Bitcoin is a peer-to-peer cash system, so when you have the opportunity to do so, buy your coins directly from someone you know or through a P2P market place.
Not only will this benefit your privacy, it will save you on exchange fees and potential insolvency issues with the exchange you are dealing with.

## 9. Run your own full node (if you can)

Wasabi will work just fine without a local full node on your device, however, if you can spare the resources on your device, running a full node will do that much more for your privacy.
Local full nodes will (when running in tandem with Wasabi) be automatically used for querying blocks.

## 10. Use Lightning

Wasabi is an ideal wallet for many things, but trade-offs exist with everything.
If you have small amounts of un-mixed change from previous CoinJoins and you are unable to meet the requirements to engage in a CoinJoin, consider using that coin to open a lightning channel.
Lightning is still a project in its early days, but the privacy topology of lightning payments is much more ideal over on-chain payments if you have the choice.
Routing large amounts can be uncertain, but for small amounts the network is becoming steadily more reliable.
Currently Wasabi does not support in-wallet lightning features, but it is on the road-map.

## Credits

Much of this list comes from the work of our good friends at JoinMarket.
In particular, we need to thank [Adam Gibson](https://twitter.com/waxwing__) and [Chris Belcher](https://twitter.com/chris_belcher_) for their outstanding contribution to privacy in Bitcoin.
Please take a look at the [Bitcoin Privacy Wiki](https://en.bitcoin.it/wiki/Privacy), the [Join Market Wiki](https://en.bitcoin.it/wiki/JoinMarket) and the [Join Market source code](https://github.com/JoinMarket-Org).

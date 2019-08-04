# The Ten Commandments

[[toc]]

---

## 1. Wasabi is for defense only

## 2. Verify the integrity of Your software

Wasabi Wallet is an open-source project with many contributors.
When downloading the wallet, You may choose to go to the official site or to the official GitHub to build from source.
Wasabi is available at our official site:

Clear-net: [wasabiwallet.io](https://wasabiwallet.io)

Tor hidden service: [wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion)

Please [check signatures](InstallPackage.md) after completing downloads.
The concern here is that You may accidentally fall for a phishing attempt and be on a malicious site downloading a malicious piece of software.

Alternatively, as Wasabi is [libre and open source software](https://github.com/zkSNACKs/WalletWasabi), You may also [build the code from source](BuildSource.md).

## 3. Keep Your mnemonic words and password safely stored (BOTH!)

When creating a new wallet - write down Your mnemonic seed AND password and store them safely.
Wasabi is a fully non-custodial wallet, which means that You should always be in possession of Your keys, and this means safely storing a backup in case Your computer is lost or the wallet crashes.
Often times when things go wrong, users panic.
If You have done this step, there is very little You have to worry about.
Also, under no circumstance should You reveal the password or mnemonic words to anyone that asks for them.
Lastly, understand that if You lose Your password, it becomes much harder (if not impossible) to restore Your wallet - so store both safely!

## 4. Practice good labeling AND try to never reuse addresses

Each time You receive coins, You will be asked to create a label.
This label is only for You and is stored exclusively on Your device.
Wasabi has strong coin control features, and as You continue to use the wallet, You will observe that the history of Your coins will appear, and this history is only useful to You if You are practicing good labeling. 
An example of a good label:

June 20 - $400 from Coinbase, primary account

June 7 - 0.2 BTC Received from Bob via Bisq

Examples of bad labels:

Address #1

0.5 BTC

Lastly, if You must use an exchange, try to ask for a new deposit address on each deposit.
In the same way that You should never receive Bitcoin to the same address twice, You should try to avoiding sending Bitcoin to the same address twice.

## 5. CoinJoin whenever possible and be patient!

The process of engaging in a CoinJoin is as simple as selecting a coin or coins to en-queue and entering Your password.
Once coins have en-queued for CoinJoining, You must keep Your computer online and awake, as the coin join process is interactive.
As a coin join is really just many users (up to 100) en-queuing coins at the same time, it may take up to two hours for You to successfully participate in a CoinJoin and clean outputs should only be spent once the coin join transaction is confirmed.
For context, Wasabi currently does 18 CoinJoins a day, or roughly one every 1 hour and 20 minutes.
As more users join the network, the frequency of these CoinJoins will go up.
Lastly, if You are able and patient enough to re-mix Your coins, please do so.

## 6. Use separate profiles

When You put a label on an address, or ask a question on Reddit or send coins to a merchant be wary of the profile You choose.
If You can create a dummy Reddit account as opposed to an account where You may have revealed Your personal details elsewhere - use that.
When You spend coins from Your wallet, consider what You might want to keep private from the merchant or individual You are interacting with.
In the same way that reusing addresses hurts Your privacy, consolidating all of Your online behavior into one profile can do the same.

## 7. Never merge mixed and unmixed coins, and avoid large merges of mixed coins!

The first part should be somewhat intuitive - coins in Your wallet have shields (red, yellow, green and green +) and it is at a minimum important to never send non-red coins (coins with anonset > 1) with red coins (coins with anonset == 1).
By merging Your tainted coins with Your mixed coins, You undo the privacy benefits of CoinJoins!
Further, when sending mixed coins to Your cold storage, make sure to send Your coins in parallel.
Don't merge all of Your Bitcoin (more than 0.8 BTC) in a single transaction!
Instead, take Your time and send coins to multiple addresses belong to Your cold storage over a few hours or days.
If You are sending coins to an exchange, You can get the same result by requesting a brand new address to receive coins.

For more information, please see the discussions [here](https://www.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/).

## 8. Avoid 3rd party servers & Buy Bitcoin P2P

Wasabi is designed to allow users to see their balances without any concern that a third party would be able to link Your addresses to You, or to each other.
Very few wallets can say this, but if You proceed to enter Your address into a block explorer, or use a third party wallet with Your keys or Your hardware device - all bets are off.
So if You want to check on the status of a transaction or the balance on an address, You should first:

(a) Check Your Wasabi Wallet

(b) Check through Your full node

(c) Use a block explorer through Tor (e.g. [Blockstream Esplora Tor](http://http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/))

If You think that forensics companies are not paying big money to block explorers for user information, You are wrong.
Even something as simple as leaving a comment on a YouTube video or Reddit post will be scraped.

More importantly, if You are using a hardware wallet, an easy way to undo the previous times You plugged in the wallet through non-private applications is to create a new account on the device with a passphrase.
For example, for ledger nano s, You can do this in the device home screen > security > passphrase.
Remember Commandment 2!

Remember, Bitcoin is a peer-to-peer cash system, so when You have the opportunity to do so, buy Your coins directly from someone You know or through a P2P market place.
Not only will this benefit Your privacy, it will save You on exchange fees and potential insolvency issues with the exchange You are dealing with.

## 9. Run Your own full node (if You can)

Wasabi will work just fine without a local full node on Your device, however, if You can spare the resources on Your device, running a full node will do that much more for Your privacy.
Local full nodes will (when running in tandem with Wasabi) be automatically used for querying blocks.

## 10. Use Lightning

Wasabi is an ideal wallet for many things, but trade-offs exist with everything.
If You have small amounts of un-mixed change from previous CoinJoins and You are unable to meet the requirements to engage in a CoinJoin, consider using that coin to open a lightning channel.
Lightning is still a project in its early days, but the privacy topology of lightning payments is much more ideal over on-chain payments if You have the choice.
Routing large amounts can be uncertain, but for small amounts the network is becoming steadily more reliable.
Currently Wasabi does not support in-wallet lightning features, but it is on the road-map.

## Credits

Much of this list comes from the work of our good friends at JoinMaket.
In particular, we need to thank [Adam Gibson](https://twitter.com/waxwing__) and [Chris Belcher](https://twitter.com/chris_belcher_) for their outstanding contribution to privacy in Bitcoin.
Please take a look at the [Bitcoin Privacy Wiki](https://en.bitcoin.it/wiki/Privacy), the [Join Market Wiki](https://en.bitcoin.it/wiki/JoinMarket) and the [Join Market source code](https://github.com/JoinMarket-Org).

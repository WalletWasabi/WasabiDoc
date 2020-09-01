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

Wasabi is a powerful free and open-source Bitcoin wallet, and it is used to protect your privacy.

## 2. Verify the integrity of your software

When installing the wallet, you may choose to [download the package](/using-wasabi/InstallPackage.md) from the official [clearnet](https://wasabiwallet.io) or the [Tor onion service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion), or to [compile the source code](/using-wasabi/BuildSource.md) from the official [GitHub repository](https://github.com/zkSNACKs/WalletWasabi)
Please [verify the signatures](/using-wasabi/InstallPackage.md) after completing downloads.
The concern here is that you may accidentally fall for a phishing attempt and be on a malicious site downloading a malicious piece of software.

## 3. Back up your recovery words and password (BOTH!)

When [creating a new wallet](/using-wasabi/WalletGeneration.md), write down your recovery words **AND** password and store them safely in separate locations.
This way, if a malicious person manages to find one of them, he or she still needs to find the other in order to gain access to your coins.
It also gives you time to move your coins to a different wallet if you notice that one of the two storage locations has been compromised.


Wasabi is a fully non-custodial wallet, which means that you are always in possession of your keys, and this means safely storing a backup.
If you have done this step, then even if your computer crashes, there is very little you have to worry about, you can always [recover your wallet](/using-wasabi/WalletRecovery.md).
Also, under no circumstance should you reveal the password or mnemonic words to anyone that asks for them.
Lastly, understand that if you lose your password, it becomes much harder (if not impossible) to restore your wallet, so store both safely!

## 4. Practice good labeling AND try to never reuse addresses

Each time you generate an address to [receive bitcoin](/using-wasabi/Receive.md) or you [send a transaction](/using-wasabi/Send.md), you must label the address with the observers of this transaction.
This label helps you use your bitcoin privately, and is stored exclusively on your device.
Wasabi has strong coin control features, and as you continue to use the wallet properly, you can see who knows about your coins.

Lastly, in the same way, that you should never receive bitcoin to the same address twice, you should try to avoid sending bitcoin to the same address twice.
So ask the recipients to provide you a new address for every transaction.

## 5. CoinJoin whenever possible and be patient

The process of engaging in a [CoinJoin](/using-wasabi/CoinJoin.md) is as simple as selecting a coin to enqueue and entering your password.
Once coins have enqueued for coinjoining, you must keep your computer online and awake, because this is an interactive process.
As a CoinJoin is just many users (up to 100) enqueuing coins, it may take up to one hour for you to successfully participate in a CoinJoin.

As more users join the network, the frequency of these CoinJoins will go up.
Lastly, if you remix your coins, this provides you and the other participants with plenty of additional privacy.

## 6. Never merge mixed and unmixed coins, and avoid large merges of mixed coins

The first part should be somewhat intuitive - coins in your wallet have anonymity set shields, and it is very important to never send <img src="/ShieldCheckmark.png" alt="Wasabi Wallet green checkmark shield anonymity set" title="Wasabi Wallet green checkmark shield anonymity set" class="shield" /> <img src="/ShieldGreen.png" alt="Wasabi Wallet green shield anonymity set" title="Wasabi Wallet green shield anonymity set" class="shield" /> <img src="/ShieldYellow.png" alt="Wasabi Wallet yellow shield anonymity set" title="Wasabi Wallet yellow shield anonymity set" class="shield" /> coins (with anonset > 1) with <img src="/ShieldRed.png" alt="Wasabi Wallet red shield anonymity set" title="Wasabi Wallet red shield anonymity set" class="shield" /> coins (with anonset = 1).
By merging your tainted coins with your mixed coins, you undo the privacy benefits of CoinJoins!

Further, when sending mixed coins to your cold storage, make sure to send your coins in small batches after each other.
Don't merge all of your bitcoin in one single transaction!
This would reveal that one entity controls all of these several coins.
Instead, take your time and send coins to multiple addresses of your cold storage over a few hours or days.

For more information, please see the discussions [here](https://www.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/).

## 7. Avoid 3rd party servers

Wasabi is designed to allow users to see their balances [without any concern that a third party](/why-wasabi/NetworkLevelPrivacy.md) would be able to link your addresses to you, or to each other.
But if you proceed to enter your address into a block explorer, or use a wallet that trusts a third party server with your public keys - all bets are off.
So if you want to check on the status of a transaction or the balance on an address, you should first:

1. Check your Wasabi Wallet
2. Check through your full node
3. Use a block explorer through Tor (e.g. [Blockstream Esplora Tor](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/)) and generate new Tor identities for every query.

If you think that forensics companies are not paying big money to block explorers for user information, you are wrong.
Even something as simple as leaving a comment on a YouTube video or Reddit post will be scraped.

## 8. Run your own full node (if you can)

Wasabi will protect your network-level privacy even without your own full node.
However, if you can spare the resources on your device, running a full node is the only way to properly verify the bitcoin you receive.
Wasabi comes [packaged with a Bitcoin full node](/using-wasabi/BitcoinFullNode.md), and you can easily start it with one click in the settings.
If you have a full node already running on the same device, Wasabi will use it automatically per default.
Finally, you can even connect to your remote node over Tor.

## 9. Use separate profiles

When you ask a question on Reddit or send coins to a merchant, be wary of the public identity you choose.
You can create a dummy Reddit account as opposed to an account where you may have revealed your personal details elsewhere.
When you spend coins from your wallet, consider what you might want to keep private from the merchant or individual you are interacting with.
In the same way that reusing addresses hurts your privacy, consolidating all of your online behavior into one profile can do the same.

## 10. Use Lightning

Wasabi is an ideal wallet for many things, but trade-offs exist with everything.
Lightning is still a project in its early days, but the privacy topology of lightning payments is much more ideal over on-chain payments if you have the choice.
Routing large amounts can be uncertain, but for small amounts, the network is becoming steadily more reliable.
Currently, Wasabi does not support in-wallet lightning features, but it is on the road-map.
